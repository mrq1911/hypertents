// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "src/Hypertents.sol";
import {IERC20} from "openzeppelin/token/ERC20/IERC20.sol";
import {IIsmpHost} from "@polytope-labs/ismp-solidity/IIsmpHost.sol";
import {PostRequest} from "@polytope-labs/ismp-solidity/Message.sol";
import {BaseIsmpModule, IncomingPostRequest} from "@polytope-labs/ismp-solidity/IIsmpModule.sol";

address constant FAUCET_SEPOLIA = address(0x17d8cc0859fbA942A7af243c3EBB69AbBfe0a320);
uint32 constant CHAIN_ID_SEPOLIA = 11155111;

address constant ALICE = address(0x03);
address constant BOB = address(0x04);

uint256 constant FAUCET_DRIP = 1000000000000000000000;

contract BaseTest is Test, BaseIsmpModule {

    function testInstantiateSameChain() public {
        // just any from https://github.com/polytope-labs/ismp-solidity/blob/e67af4a359b3a53fa8132f7223c89ba680a24439/interfaces/IIsmpModule.sol#L84-L112
        uint256 forkId = vm.createFork("wss://ethereum-sepolia-rpc.publicnode.com");
        vm.selectFork(forkId);

        // instantiate Hypertents with default faucet address
        Hypertents tentA = new Hypertents(FAUCET_SEPOLIA);

        // just operate using feeToken for now
        address host = hostAddr();
        address token = IIsmpHost(host).feeToken();

        ITokenFaucet(FAUCET_SEPOLIA).drip(token);
        vm.startPrank(ALICE);
        ITokenFaucet(FAUCET_SEPOLIA).drip(token);
        IERC20(token).approve(address(tentA), 10);
        vm.stopPrank();
        vm.startPrank(BOB);
        ITokenFaucet(FAUCET_SEPOLIA).drip(token);
        IERC20(token).approve(address(tentA), 10000+10000);
        vm.stopPrank();

        // assert that alice has some tokens
        assertEq(IERC20(token).balanceOf(address(this)), FAUCET_DRIP);
        assertEq(IERC20(token).balanceOf(ALICE), FAUCET_DRIP);
        assertEq(IERC20(token).balanceOf(BOB), FAUCET_DRIP);


        Input[] memory swapperInputs = new Input[](1);
        swapperInputs[0] = Input({
            token: token,
            amount: 10
        });

        Output[] memory swapperOutputs = new Output[](1);
        swapperOutputs[0] = Output({
            token: token,
            amount: 10000,
            recipient: ALICE,
            chainId: CHAIN_ID_SEPOLIA
        });

        Output[] memory fillerOutputs = new Output[](1);
        fillerOutputs[0] = Output({
            token: token,
            amount: 10,
            recipient: BOB,
            chainId: CHAIN_ID_SEPOLIA
        });

        // Encode the data
        bytes memory orderData = abi.encode(swapperInputs, swapperOutputs, fillerOutputs);

        // create a CrossChainOrder
        CrossChainOrder memory order = CrossChainOrder({
            settlementContract: address(tentA),
            swapper: address(ALICE),
            nonce: 0,
            originChainId: 0,
            initiateDeadline: 0,
            fillDeadline: 0,
            orderData: orderData
        });

        tentA.initiate(order, new bytes(0), new bytes(0));

        vm.startPrank(BOB);
        tentA.fill(order, new bytes(0));
        vm.stopPrank();

        assertEq(IERC20(token).balanceOf(BOB), FAUCET_DRIP-10000);

        vm.startPrank(host);
        tentA.onAccept(
                IncomingPostRequest({request: PostRequest({
                                        source: new bytes(0),
                                        dest: new bytes(0),
                                        nonce: 0,
                                        from: new bytes(0),
                                        to: new bytes(0),
                                        body: abi.encode(fillerOutputs),
                                        timeoutTimestamp: 0
                                }),
                                relayer: address(0)})
        );
        vm.stopPrank();

        // final asserts that the intent has been fulfilled
        assertEq(IERC20(token).balanceOf(BOB), FAUCET_DRIP-10000+10);
        assertEq(IERC20(token).balanceOf(ALICE), FAUCET_DRIP-10+10000);
    }
}
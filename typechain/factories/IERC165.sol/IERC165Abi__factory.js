"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IERC165Abi__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "supportsInterface",
        inputs: [
            {
                name: "interfaceID",
                type: "bytes4",
                internalType: "bytes4",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
];
var IERC165Abi__factory = /** @class */ (function () {
    function IERC165Abi__factory() {
    }
    IERC165Abi__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IERC165Abi__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IERC165Abi__factory.abi = _abi;
    return IERC165Abi__factory;
}());
exports.IERC165Abi__factory = IERC165Abi__factory;
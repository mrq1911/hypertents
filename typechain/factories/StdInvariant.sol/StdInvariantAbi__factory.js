"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StdInvariantAbi__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "excludeArtifacts",
        inputs: [],
        outputs: [
            {
                name: "excludedArtifacts_",
                type: "string[]",
                internalType: "string[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "excludeContracts",
        inputs: [],
        outputs: [
            {
                name: "excludedContracts_",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "excludeSelectors",
        inputs: [],
        outputs: [
            {
                name: "excludedSelectors_",
                type: "tuple[]",
                internalType: "struct StdInvariant.FuzzSelector[]",
                components: [
                    {
                        name: "addr",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "selectors",
                        type: "bytes4[]",
                        internalType: "bytes4[]",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "excludeSenders",
        inputs: [],
        outputs: [
            {
                name: "excludedSenders_",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "targetArtifactSelectors",
        inputs: [],
        outputs: [
            {
                name: "targetedArtifactSelectors_",
                type: "tuple[]",
                internalType: "struct StdInvariant.FuzzArtifactSelector[]",
                components: [
                    {
                        name: "artifact",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "selectors",
                        type: "bytes4[]",
                        internalType: "bytes4[]",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "targetArtifacts",
        inputs: [],
        outputs: [
            {
                name: "targetedArtifacts_",
                type: "string[]",
                internalType: "string[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "targetContracts",
        inputs: [],
        outputs: [
            {
                name: "targetedContracts_",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "targetInterfaces",
        inputs: [],
        outputs: [
            {
                name: "targetedInterfaces_",
                type: "tuple[]",
                internalType: "struct StdInvariant.FuzzInterface[]",
                components: [
                    {
                        name: "addr",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "artifacts",
                        type: "string[]",
                        internalType: "string[]",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "targetSelectors",
        inputs: [],
        outputs: [
            {
                name: "targetedSelectors_",
                type: "tuple[]",
                internalType: "struct StdInvariant.FuzzSelector[]",
                components: [
                    {
                        name: "addr",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "selectors",
                        type: "bytes4[]",
                        internalType: "bytes4[]",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "targetSenders",
        inputs: [],
        outputs: [
            {
                name: "targetedSenders_",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        stateMutability: "view",
    },
];
var StdInvariantAbi__factory = /** @class */ (function () {
    function StdInvariantAbi__factory() {
    }
    StdInvariantAbi__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    StdInvariantAbi__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    StdInvariantAbi__factory.abi = _abi;
    return StdInvariantAbi__factory;
}());
exports.StdInvariantAbi__factory = StdInvariantAbi__factory;
"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseIsmpModuleAbi__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "onAccept",
        inputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct IncomingPostRequest",
                components: [
                    {
                        name: "request",
                        type: "tuple",
                        internalType: "struct PostRequest",
                        components: [
                            {
                                name: "source",
                                type: "bytes",
                                internalType: "bytes",
                            },
                            {
                                name: "dest",
                                type: "bytes",
                                internalType: "bytes",
                            },
                            {
                                name: "nonce",
                                type: "uint64",
                                internalType: "uint64",
                            },
                            {
                                name: "from",
                                type: "bytes",
                                internalType: "bytes",
                            },
                            {
                                name: "to",
                                type: "bytes",
                                internalType: "bytes",
                            },
                            {
                                name: "timeoutTimestamp",
                                type: "uint64",
                                internalType: "uint64",
                            },
                            {
                                name: "body",
                                type: "bytes",
                                internalType: "bytes",
                            },
                        ],
                    },
                    {
                        name: "relayer",
                        type: "address",
                        internalType: "address",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "onGetResponse",
        inputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct IncomingGetResponse",
                components: [
                    {
                        name: "response",
                        type: "tuple",
                        internalType: "struct GetResponse",
                        components: [
                            {
                                name: "request",
                                type: "tuple",
                                internalType: "struct GetRequest",
                                components: [
                                    {
                                        name: "source",
                                        type: "bytes",
                                        internalType: "bytes",
                                    },
                                    {
                                        name: "dest",
                                        type: "bytes",
                                        internalType: "bytes",
                                    },
                                    {
                                        name: "nonce",
                                        type: "uint64",
                                        internalType: "uint64",
                                    },
                                    {
                                        name: "from",
                                        type: "address",
                                        internalType: "address",
                                    },
                                    {
                                        name: "timeoutTimestamp",
                                        type: "uint64",
                                        internalType: "uint64",
                                    },
                                    {
                                        name: "keys",
                                        type: "bytes[]",
                                        internalType: "bytes[]",
                                    },
                                    {
                                        name: "height",
                                        type: "uint64",
                                        internalType: "uint64",
                                    },
                                ],
                            },
                            {
                                name: "values",
                                type: "tuple[]",
                                internalType: "struct StorageValue[]",
                                components: [
                                    {
                                        name: "key",
                                        type: "bytes",
                                        internalType: "bytes",
                                    },
                                    {
                                        name: "value",
                                        type: "bytes",
                                        internalType: "bytes",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "relayer",
                        type: "address",
                        internalType: "address",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "onGetTimeout",
        inputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct GetRequest",
                components: [
                    {
                        name: "source",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "dest",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "nonce",
                        type: "uint64",
                        internalType: "uint64",
                    },
                    {
                        name: "from",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "timeoutTimestamp",
                        type: "uint64",
                        internalType: "uint64",
                    },
                    {
                        name: "keys",
                        type: "bytes[]",
                        internalType: "bytes[]",
                    },
                    {
                        name: "height",
                        type: "uint64",
                        internalType: "uint64",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "onPostRequestTimeout",
        inputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct PostRequest",
                components: [
                    {
                        name: "source",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "dest",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "nonce",
                        type: "uint64",
                        internalType: "uint64",
                    },
                    {
                        name: "from",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "to",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "timeoutTimestamp",
                        type: "uint64",
                        internalType: "uint64",
                    },
                    {
                        name: "body",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "onPostResponse",
        inputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct IncomingPostResponse",
                components: [
                    {
                        name: "response",
                        type: "tuple",
                        internalType: "struct PostResponse",
                        components: [
                            {
                                name: "request",
                                type: "tuple",
                                internalType: "struct PostRequest",
                                components: [
                                    {
                                        name: "source",
                                        type: "bytes",
                                        internalType: "bytes",
                                    },
                                    {
                                        name: "dest",
                                        type: "bytes",
                                        internalType: "bytes",
                                    },
                                    {
                                        name: "nonce",
                                        type: "uint64",
                                        internalType: "uint64",
                                    },
                                    {
                                        name: "from",
                                        type: "bytes",
                                        internalType: "bytes",
                                    },
                                    {
                                        name: "to",
                                        type: "bytes",
                                        internalType: "bytes",
                                    },
                                    {
                                        name: "timeoutTimestamp",
                                        type: "uint64",
                                        internalType: "uint64",
                                    },
                                    {
                                        name: "body",
                                        type: "bytes",
                                        internalType: "bytes",
                                    },
                                ],
                            },
                            {
                                name: "response",
                                type: "bytes",
                                internalType: "bytes",
                            },
                            {
                                name: "timeoutTimestamp",
                                type: "uint64",
                                internalType: "uint64",
                            },
                        ],
                    },
                    {
                        name: "relayer",
                        type: "address",
                        internalType: "address",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "onPostResponseTimeout",
        inputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct PostResponse",
                components: [
                    {
                        name: "request",
                        type: "tuple",
                        internalType: "struct PostRequest",
                        components: [
                            {
                                name: "source",
                                type: "bytes",
                                internalType: "bytes",
                            },
                            {
                                name: "dest",
                                type: "bytes",
                                internalType: "bytes",
                            },
                            {
                                name: "nonce",
                                type: "uint64",
                                internalType: "uint64",
                            },
                            {
                                name: "from",
                                type: "bytes",
                                internalType: "bytes",
                            },
                            {
                                name: "to",
                                type: "bytes",
                                internalType: "bytes",
                            },
                            {
                                name: "timeoutTimestamp",
                                type: "uint64",
                                internalType: "uint64",
                            },
                            {
                                name: "body",
                                type: "bytes",
                                internalType: "bytes",
                            },
                        ],
                    },
                    {
                        name: "response",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "timeoutTimestamp",
                        type: "uint64",
                        internalType: "uint64",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "error",
        name: "UnauthorizedAccount",
        inputs: [],
    },
    {
        type: "error",
        name: "UnexpectedCall",
        inputs: [],
    },
    {
        type: "error",
        name: "UnsupportedChain",
        inputs: [],
    },
];
var BaseIsmpModuleAbi__factory = /** @class */ (function () {
    function BaseIsmpModuleAbi__factory() {
    }
    BaseIsmpModuleAbi__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    BaseIsmpModuleAbi__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    BaseIsmpModuleAbi__factory.abi = _abi;
    return BaseIsmpModuleAbi__factory;
}());
exports.BaseIsmpModuleAbi__factory = BaseIsmpModuleAbi__factory;

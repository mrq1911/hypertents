/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export type PostRequestStruct = {
  source: PromiseOrValue<BytesLike>;
  dest: PromiseOrValue<BytesLike>;
  nonce: PromiseOrValue<BigNumberish>;
  from: PromiseOrValue<BytesLike>;
  to: PromiseOrValue<BytesLike>;
  timeoutTimestamp: PromiseOrValue<BigNumberish>;
  body: PromiseOrValue<BytesLike>;
};

export type PostRequestStructOutput = [
  string,
  string,
  BigNumber,
  string,
  string,
  BigNumber,
  string
] & {
  source: string;
  dest: string;
  nonce: BigNumber;
  from: string;
  to: string;
  timeoutTimestamp: BigNumber;
  body: string;
};

export type IncomingPostRequestStruct = {
  request: PostRequestStruct;
  relayer: PromiseOrValue<string>;
};

export type IncomingPostRequestStructOutput = [
  PostRequestStructOutput,
  string
] & { request: PostRequestStructOutput; relayer: string };

export type GetRequestStruct = {
  source: PromiseOrValue<BytesLike>;
  dest: PromiseOrValue<BytesLike>;
  nonce: PromiseOrValue<BigNumberish>;
  from: PromiseOrValue<string>;
  timeoutTimestamp: PromiseOrValue<BigNumberish>;
  keys: PromiseOrValue<BytesLike>[];
  height: PromiseOrValue<BigNumberish>;
};

export type GetRequestStructOutput = [
  string,
  string,
  BigNumber,
  string,
  BigNumber,
  string[],
  BigNumber
] & {
  source: string;
  dest: string;
  nonce: BigNumber;
  from: string;
  timeoutTimestamp: BigNumber;
  keys: string[];
  height: BigNumber;
};

export type StorageValueStruct = {
  key: PromiseOrValue<BytesLike>;
  value: PromiseOrValue<BytesLike>;
};

export type StorageValueStructOutput = [string, string] & {
  key: string;
  value: string;
};

export type GetResponseStruct = {
  request: GetRequestStruct;
  values: StorageValueStruct[];
};

export type GetResponseStructOutput = [
  GetRequestStructOutput,
  StorageValueStructOutput[]
] & { request: GetRequestStructOutput; values: StorageValueStructOutput[] };

export type IncomingGetResponseStruct = {
  response: GetResponseStruct;
  relayer: PromiseOrValue<string>;
};

export type IncomingGetResponseStructOutput = [
  GetResponseStructOutput,
  string
] & { response: GetResponseStructOutput; relayer: string };

export type PostResponseStruct = {
  request: PostRequestStruct;
  response: PromiseOrValue<BytesLike>;
  timeoutTimestamp: PromiseOrValue<BigNumberish>;
};

export type PostResponseStructOutput = [
  PostRequestStructOutput,
  string,
  BigNumber
] & {
  request: PostRequestStructOutput;
  response: string;
  timeoutTimestamp: BigNumber;
};

export type IncomingPostResponseStruct = {
  response: PostResponseStruct;
  relayer: PromiseOrValue<string>;
};

export type IncomingPostResponseStructOutput = [
  PostResponseStructOutput,
  string
] & { response: PostResponseStructOutput; relayer: string };

export interface BaseIsmpModuleAbiInterface extends utils.Interface {
  functions: {
    "onAccept(((bytes,bytes,uint64,bytes,bytes,uint64,bytes),address))": FunctionFragment;
    "onGetResponse((((bytes,bytes,uint64,address,uint64,bytes[],uint64),(bytes,bytes)[]),address))": FunctionFragment;
    "onGetTimeout((bytes,bytes,uint64,address,uint64,bytes[],uint64))": FunctionFragment;
    "onPostRequestTimeout((bytes,bytes,uint64,bytes,bytes,uint64,bytes))": FunctionFragment;
    "onPostResponse((((bytes,bytes,uint64,bytes,bytes,uint64,bytes),bytes,uint64),address))": FunctionFragment;
    "onPostResponseTimeout(((bytes,bytes,uint64,bytes,bytes,uint64,bytes),bytes,uint64))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "onAccept"
      | "onGetResponse"
      | "onGetTimeout"
      | "onPostRequestTimeout"
      | "onPostResponse"
      | "onPostResponseTimeout"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "onAccept",
    values: [IncomingPostRequestStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "onGetResponse",
    values: [IncomingGetResponseStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "onGetTimeout",
    values: [GetRequestStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "onPostRequestTimeout",
    values: [PostRequestStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "onPostResponse",
    values: [IncomingPostResponseStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "onPostResponseTimeout",
    values: [PostResponseStruct]
  ): string;

  decodeFunctionResult(functionFragment: "onAccept", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onGetResponse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onGetTimeout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onPostRequestTimeout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onPostResponse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onPostResponseTimeout",
    data: BytesLike
  ): Result;

  events: {};
}

export interface BaseIsmpModuleAbi extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BaseIsmpModuleAbiInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    onAccept(
      arg0: IncomingPostRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onGetResponse(
      arg0: IncomingGetResponseStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onGetTimeout(
      arg0: GetRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onPostRequestTimeout(
      arg0: PostRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onPostResponse(
      arg0: IncomingPostResponseStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onPostResponseTimeout(
      arg0: PostResponseStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  onAccept(
    arg0: IncomingPostRequestStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onGetResponse(
    arg0: IncomingGetResponseStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onGetTimeout(
    arg0: GetRequestStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onPostRequestTimeout(
    arg0: PostRequestStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onPostResponse(
    arg0: IncomingPostResponseStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onPostResponseTimeout(
    arg0: PostResponseStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    onAccept(
      arg0: IncomingPostRequestStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    onGetResponse(
      arg0: IncomingGetResponseStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    onGetTimeout(
      arg0: GetRequestStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    onPostRequestTimeout(
      arg0: PostRequestStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    onPostResponse(
      arg0: IncomingPostResponseStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    onPostResponseTimeout(
      arg0: PostResponseStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    onAccept(
      arg0: IncomingPostRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onGetResponse(
      arg0: IncomingGetResponseStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onGetTimeout(
      arg0: GetRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onPostRequestTimeout(
      arg0: PostRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onPostResponse(
      arg0: IncomingPostResponseStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onPostResponseTimeout(
      arg0: PostResponseStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onAccept(
      arg0: IncomingPostRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onGetResponse(
      arg0: IncomingGetResponseStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onGetTimeout(
      arg0: GetRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onPostRequestTimeout(
      arg0: PostRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onPostResponse(
      arg0: IncomingPostResponseStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onPostResponseTimeout(
      arg0: PostResponseStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
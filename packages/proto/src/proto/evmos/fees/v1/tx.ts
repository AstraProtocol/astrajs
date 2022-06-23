// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.4
 * source: evmos/fees/v1/tx.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace evmos.fees.v1 {
    export class MsgRegisterFee extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            contract_address?: string;
            deployer_address?: string;
            withdraw_address?: string;
            nonces?: number[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("contract_address" in data && data.contract_address != undefined) {
                    this.contract_address = data.contract_address;
                }
                if ("deployer_address" in data && data.deployer_address != undefined) {
                    this.deployer_address = data.deployer_address;
                }
                if ("withdraw_address" in data && data.withdraw_address != undefined) {
                    this.withdraw_address = data.withdraw_address;
                }
                if ("nonces" in data && data.nonces != undefined) {
                    this.nonces = data.nonces;
                }
            }
        }
        get contract_address() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set contract_address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get deployer_address() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set deployer_address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get withdraw_address() {
            return pb_1.Message.getField(this, 3) as string;
        }
        set withdraw_address(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get nonces() {
            return pb_1.Message.getField(this, 4) as number[];
        }
        set nonces(value: number[]) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            contract_address?: string;
            deployer_address?: string;
            withdraw_address?: string;
            nonces?: number[];
        }) {
            const message = new MsgRegisterFee({});
            if (data.contract_address != null) {
                message.contract_address = data.contract_address;
            }
            if (data.deployer_address != null) {
                message.deployer_address = data.deployer_address;
            }
            if (data.withdraw_address != null) {
                message.withdraw_address = data.withdraw_address;
            }
            if (data.nonces != null) {
                message.nonces = data.nonces;
            }
            return message;
        }
        toObject() {
            const data: {
                contract_address?: string;
                deployer_address?: string;
                withdraw_address?: string;
                nonces?: number[];
            } = {};
            if (this.contract_address != null) {
                data.contract_address = this.contract_address;
            }
            if (this.deployer_address != null) {
                data.deployer_address = this.deployer_address;
            }
            if (this.withdraw_address != null) {
                data.withdraw_address = this.withdraw_address;
            }
            if (this.nonces != null) {
                data.nonces = this.nonces;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.contract_address === "string" && this.contract_address.length)
                writer.writeString(1, this.contract_address);
            if (typeof this.deployer_address === "string" && this.deployer_address.length)
                writer.writeString(2, this.deployer_address);
            if (typeof this.withdraw_address === "string" && this.withdraw_address.length)
                writer.writeString(3, this.withdraw_address);
            if (this.nonces !== undefined)
                writer.writePackedUint64(4, this.nonces);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRegisterFee {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRegisterFee();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.contract_address = reader.readString();
                        break;
                    case 2:
                        message.deployer_address = reader.readString();
                        break;
                    case 3:
                        message.withdraw_address = reader.readString();
                        break;
                    case 4:
                        message.nonces = reader.readPackedUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgRegisterFee {
            return MsgRegisterFee.deserialize(bytes);
        }
    }
    export class MsgRegisterFeeResponse extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new MsgRegisterFeeResponse({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRegisterFeeResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgRegisterFeeResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgRegisterFeeResponse {
            return MsgRegisterFeeResponse.deserialize(bytes);
        }
    }
    export class MsgCancelFee extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            contract_address?: string;
            deployer_address?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("contract_address" in data && data.contract_address != undefined) {
                    this.contract_address = data.contract_address;
                }
                if ("deployer_address" in data && data.deployer_address != undefined) {
                    this.deployer_address = data.deployer_address;
                }
            }
        }
        get contract_address() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set contract_address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get deployer_address() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set deployer_address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            contract_address?: string;
            deployer_address?: string;
        }) {
            const message = new MsgCancelFee({});
            if (data.contract_address != null) {
                message.contract_address = data.contract_address;
            }
            if (data.deployer_address != null) {
                message.deployer_address = data.deployer_address;
            }
            return message;
        }
        toObject() {
            const data: {
                contract_address?: string;
                deployer_address?: string;
            } = {};
            if (this.contract_address != null) {
                data.contract_address = this.contract_address;
            }
            if (this.deployer_address != null) {
                data.deployer_address = this.deployer_address;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.contract_address === "string" && this.contract_address.length)
                writer.writeString(1, this.contract_address);
            if (typeof this.deployer_address === "string" && this.deployer_address.length)
                writer.writeString(2, this.deployer_address);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCancelFee {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCancelFee();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.contract_address = reader.readString();
                        break;
                    case 2:
                        message.deployer_address = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgCancelFee {
            return MsgCancelFee.deserialize(bytes);
        }
    }
    export class MsgCancelFeeResponse extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new MsgCancelFeeResponse({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCancelFeeResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCancelFeeResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgCancelFeeResponse {
            return MsgCancelFeeResponse.deserialize(bytes);
        }
    }
    export class MsgUpdateFee extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            contract_address?: string;
            deployer_address?: string;
            withdraw_address?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("contract_address" in data && data.contract_address != undefined) {
                    this.contract_address = data.contract_address;
                }
                if ("deployer_address" in data && data.deployer_address != undefined) {
                    this.deployer_address = data.deployer_address;
                }
                if ("withdraw_address" in data && data.withdraw_address != undefined) {
                    this.withdraw_address = data.withdraw_address;
                }
            }
        }
        get contract_address() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set contract_address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get deployer_address() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set deployer_address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get withdraw_address() {
            return pb_1.Message.getField(this, 3) as string;
        }
        set withdraw_address(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            contract_address?: string;
            deployer_address?: string;
            withdraw_address?: string;
        }) {
            const message = new MsgUpdateFee({});
            if (data.contract_address != null) {
                message.contract_address = data.contract_address;
            }
            if (data.deployer_address != null) {
                message.deployer_address = data.deployer_address;
            }
            if (data.withdraw_address != null) {
                message.withdraw_address = data.withdraw_address;
            }
            return message;
        }
        toObject() {
            const data: {
                contract_address?: string;
                deployer_address?: string;
                withdraw_address?: string;
            } = {};
            if (this.contract_address != null) {
                data.contract_address = this.contract_address;
            }
            if (this.deployer_address != null) {
                data.deployer_address = this.deployer_address;
            }
            if (this.withdraw_address != null) {
                data.withdraw_address = this.withdraw_address;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.contract_address === "string" && this.contract_address.length)
                writer.writeString(1, this.contract_address);
            if (typeof this.deployer_address === "string" && this.deployer_address.length)
                writer.writeString(2, this.deployer_address);
            if (typeof this.withdraw_address === "string" && this.withdraw_address.length)
                writer.writeString(3, this.withdraw_address);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUpdateFee {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgUpdateFee();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.contract_address = reader.readString();
                        break;
                    case 2:
                        message.deployer_address = reader.readString();
                        break;
                    case 3:
                        message.withdraw_address = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgUpdateFee {
            return MsgUpdateFee.deserialize(bytes);
        }
    }
    export class MsgUpdateFeeResponse extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new MsgUpdateFeeResponse({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUpdateFeeResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgUpdateFeeResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgUpdateFeeResponse {
            return MsgUpdateFeeResponse.deserialize(bytes);
        }
    }
}

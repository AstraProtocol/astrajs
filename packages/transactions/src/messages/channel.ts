import {
  createMsgOpenChannel as protoOpenChannel,
  createMsgCloseChannel as protoCloseChannel,
  createMsgCommitment as protoCommitment,
  createMsgWithdrawHashlock as protoWithdrawHashlock,
  createMsgWithdrawTimelock as protoWithdrawTimelock,
  createMsgFund as protoFund,
  createTransaction,
} from '@astradefi/proto'

import {
  createEIP712,
  generateFee,
  generateMessage,
  generateTypes,
  createMsgOpenChannel,
  createMsgCloseChannel,
  createMsgCommitment,
  createMsgWithdrawHashlock,
  createMsgWithdrawTimelock,
  createMsgFund,
  MSG_FUND,
  MSG_CLOSE_CHANNEL,
  MSG_OPEN_CHANNEL,
  MSG_COMMITMENT,
  MSG_WITHDRAW_HASHLOCK,
  MSG_WITHDRAW_TIMELOCK,
} from '@astradefi/eip712'

import { Chain, Fee, Sender } from './common'

interface Coin {
  denom: string
  amount: string
}

export interface MessageOpenChannel {
  creator: string
  partA: string
  partB: string
  coinA: Coin
  coinB: Coin
  multisigAddr: string
  sequence: number
}

export interface MessageCloseChannel {
  creator: string
  from: string
  toA: string
  toB: string
  coinA: Coin
  coinB: Coin
  channelid: string
}

export interface MessageCommitment {
  creator: string
  from: string
  coinA: Coin
  toATimelock: string
  blockheight: number
  toBHashlock: string
  hashcode: string
  coinlock: Coin
}

export interface MessageWithdrawHaslock {
  creator: string
  to: string
  index: string
  secret: string
}

export interface MessageWithdrawTimelock {
  creator: string
  to: string
  index: string
}

export interface MessageFund {
  creator: string
  from: string
  channelid: string
  coin: Coin
  balanceA: Coin
  balanceB: Coin
  hashcodeB: string
  multisig: string
}

export function createMessageOpenChannel(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MessageOpenChannel,
) {
  // EIP712
  const feeObject = generateFee(
    fee.amount,
    fee.denom,
    fee.gas,
    sender.accountAddress,
  )
  const types = generateTypes(MSG_OPEN_CHANNEL)
  const msg = createMsgOpenChannel(
    params.creator,
    params.partA,
    params.partB,
    params.coinA,
    params.coinB,
    params.multisigAddr,
  )
  const messages = generateMessage(
    sender.accountNumber.toString(),
    sender.sequence.toString(),
    chain.cosmosChainId,
    memo,
    feeObject,
    msg,
  )
  const eipToSign = createEIP712(types, chain.chainId, messages)

  // Cosmos
  const msgSend = protoOpenChannel(
    params.creator,
    params.partA,
    params.partB,
    params.coinA,
    params.coinB,
    params.multisigAddr,
    params.sequence,
  )
  const tx = createTransaction(
    msgSend,
    memo,
    fee.amount,
    fee.denom,
    parseInt(fee.gas, 10),
    'ethsecp256',
    sender.pubkey,
    sender.sequence,
    sender.accountNumber,
    chain.cosmosChainId,
  )

  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign,
  }
}

export function createMessageCloseChannel(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MessageCloseChannel,
) {
  // EIP712
  const feeObject = generateFee(
    fee.amount,
    fee.denom,
    fee.gas,
    sender.accountAddress,
  )
  const types = generateTypes(MSG_CLOSE_CHANNEL)
  const msg = createMsgCloseChannel(
    params.creator,
    params.from,
    params.toA,
    params.coinA,
    params.toB,
    params.coinB,
  )
  const messages = generateMessage(
    sender.accountNumber.toString(),
    sender.sequence.toString(),
    chain.cosmosChainId,
    memo,
    feeObject,
    msg,
  )
  const eipToSign = createEIP712(types, chain.chainId, messages)

  // Cosmos
  const msgSend = protoCloseChannel(
    params.creator,
    params.from,
    params.toA,
    params.coinA,
    params.toB,
    params.coinB,
    params.channelid,
  )
  const tx = createTransaction(
    msgSend,
    memo,
    fee.amount,
    fee.denom,
    parseInt(fee.gas, 10),
    'ethsecp256',
    sender.pubkey,
    sender.sequence,
    sender.accountNumber,
    chain.cosmosChainId,
  )

  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign,
  }
}

export function createMessageCommitment(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MessageCommitment,
) {
  // EIP712
  const feeObject = generateFee(
    fee.amount,
    fee.denom,
    fee.gas,
    sender.accountAddress,
  )
  const types = generateTypes(MSG_COMMITMENT)
  const msg = createMsgCommitment(
    params.creator,
    params.from,
    params.coinA,
    params.toATimelock,
    params.blockheight,
    params.toBHashlock,
    params.hashcode,
    params.coinlock,
  )
  const messages = generateMessage(
    sender.accountNumber.toString(),
    sender.sequence.toString(),
    chain.cosmosChainId,
    memo,
    feeObject,
    msg,
  )
  const eipToSign = createEIP712(types, chain.chainId, messages)

  // Cosmos
  const msgSend = protoCommitment(
    params.creator,
    params.from,
    params.coinA,
    params.toATimelock,
    params.blockheight,
    params.toBHashlock,
    params.hashcode,
    params.coinlock,
  )
  const tx = createTransaction(
    msgSend,
    memo,
    fee.amount,
    fee.denom,
    parseInt(fee.gas, 10),
    'ethsecp256',
    sender.pubkey,
    sender.sequence,
    sender.accountNumber,
    chain.cosmosChainId,
  )

  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign,
  }
}

export function createMessageWithdrawHashlock(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MessageWithdrawHaslock,
) {
  // EIP712
  const feeObject = generateFee(
    fee.amount,
    fee.denom,
    fee.gas,
    sender.accountAddress,
  )
  const types = generateTypes(MSG_WITHDRAW_HASHLOCK)
  const msg = createMsgWithdrawHashlock(
    params.creator,
    params.to,
    params.index,
    params.secret,
  )
  const messages = generateMessage(
    sender.accountNumber.toString(),
    sender.sequence.toString(),
    chain.cosmosChainId,
    memo,
    feeObject,
    msg,
  )
  const eipToSign = createEIP712(types, chain.chainId, messages)

  // Cosmos
  const msgSend = protoWithdrawHashlock(
    params.creator,
    params.to,
    params.index,
    params.secret,
  )
  const tx = createTransaction(
    msgSend,
    memo,
    fee.amount,
    fee.denom,
    parseInt(fee.gas, 10),
    'ethsecp256',
    sender.pubkey,
    sender.sequence,
    sender.accountNumber,
    chain.cosmosChainId,
  )

  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign,
  }
}

export function createMessageWithdrawTimelock(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MessageWithdrawTimelock,
) {
  // EIP712
  const feeObject = generateFee(
    fee.amount,
    fee.denom,
    fee.gas,
    sender.accountAddress,
  )
  const types = generateTypes(MSG_WITHDRAW_TIMELOCK)
  const msg = createMsgWithdrawTimelock(params.creator, params.to, params.index)
  const messages = generateMessage(
    sender.accountNumber.toString(),
    sender.sequence.toString(),
    chain.cosmosChainId,
    memo,
    feeObject,
    msg,
  )
  const eipToSign = createEIP712(types, chain.chainId, messages)

  // Cosmos
  const msgSend = protoWithdrawTimelock(params.creator, params.to, params.index)
  const tx = createTransaction(
    msgSend,
    memo,
    fee.amount,
    fee.denom,
    parseInt(fee.gas, 10),
    'ethsecp256',
    sender.pubkey,
    sender.sequence,
    sender.accountNumber,
    chain.cosmosChainId,
  )

  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign,
  }
}

export function createMessageFund(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MessageFund,
) {
  // EIP712
  const feeObject = generateFee(
    fee.amount,
    fee.denom,
    fee.gas,
    sender.accountAddress,
  )
  const types = generateTypes(MSG_FUND)
  const msg = createMsgFund(
    params.creator,
    params.from,
    params.channelid,
    params.coin,
    params.balanceA,
    params.balanceB,
    params.hashcodeB,
    params.multisig,
  )
  const messages = generateMessage(
    sender.accountNumber.toString(),
    sender.sequence.toString(),
    chain.cosmosChainId,
    memo,
    feeObject,
    msg,
  )
  const eipToSign = createEIP712(types, chain.chainId, messages)

  // Cosmos
  const msgSend = protoFund(
    params.creator,
    params.from,
    params.channelid,
    params.coin,
    params.balanceA,
    params.balanceB,
    params.hashcodeB,
    params.multisig,
  )
  const tx = createTransaction(
    msgSend,
    memo,
    fee.amount,
    fee.denom,
    parseInt(fee.gas, 10),
    'ethsecp256',
    sender.pubkey,
    sender.sequence,
    sender.accountNumber,
    chain.cosmosChainId,
  )

  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign,
  }
}

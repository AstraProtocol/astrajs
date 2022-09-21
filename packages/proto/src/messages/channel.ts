/* eslint-disable camelcase */
import * as cosmosCoin from '../proto/cosmos/base/v1beta1/coin'
import * as channel from '../proto/channel/tx'

interface Coin {
  denom: string
  amount: string
}

export function createMsgCommitment(
  creator: string,
  from: string,
  coinA: Coin,
  toATimelock: string,
  blockheight: number,
  toBHashlock: string,
  hashcode: string,
  coinlock: Coin,
) {
  const message = new channel.channel.channel.MsgCommitment({
    creator,
    from,
    coinA: new cosmosCoin.cosmos.base.v1beta1.Coin({
      denom: coinA.denom.toString(),
      amount: coinA.amount.toString(),
    }),
    toATimelock,
    blockheight,
    toBHashlock,
    hashcode,
    coinlock: new cosmosCoin.cosmos.base.v1beta1.Coin({
      denom: coinlock.denom.toString(),
      amount: coinlock.amount.toString(),
    }),
  })
  return {
    message,
    path: 'channel.channel.MsgCommitment',
  }
}

export function createMsgCloseChannel(
  creator: string,
  from: string,
  toA: string,
  coinA: Coin,
  toB: string,
  coinB: Coin,
  channelid: string,
) {
  const message = new channel.channel.channel.MsgCloseChannel({
    creator,
    from,
    toA,
    coinA: new cosmosCoin.cosmos.base.v1beta1.Coin({
      denom: coinA.denom.toString(),
      amount: coinA.amount.toString(),
    }),
    toB,
    coinB: new cosmosCoin.cosmos.base.v1beta1.Coin({
      denom: coinB.denom.toString(),
      amount: coinB.amount.toString(),
    }),
    channelid,
  })
  return {
    message,
    path: 'channel.channel.MsgCloseChannel',
  }
}

export function createMsgOpenChannel(
  creator: string,
  partA: string,
  partB: string,
  coinA: Coin,
  coinB: Coin,
  multisigAddr: string,
  sequence: number,
) {
  const message = new channel.channel.channel.MsgOpenChannel({
    creator,
    partA,
    partB,
    coinA: new cosmosCoin.cosmos.base.v1beta1.Coin({
      denom: coinA.denom.toString(),
      amount: coinA.amount.toString(),
    }),
    coinB: new cosmosCoin.cosmos.base.v1beta1.Coin({
      denom: coinB.denom.toString(),
      amount: coinB.amount.toString(),
    }),
    multisigAddr,
    sequence,
  })
  return {
    message,
    path: 'channel.channel.MsgOpenChannel',
  }
}

export function createMsgWithdrawHashlock(
  creator: string,
  to: string,
  index: string,
  secret: string,
) {
  const message = new channel.channel.channel.MsgWithdrawHashlock({
    creator,
    to,
    index,
    secret,
  })
  return {
    message,
    path: 'channel.channel.MsgWithdrawHashlock',
  }
}

export function createMsgWithdrawTimelock(
  creator: string,
  to: string,
  index: string,
) {
  const message = new channel.channel.channel.MsgWithdrawTimelock({
    creator,
    to,
    index,
  })
  return {
    message,
    path: 'channel.channel.MsgWithdrawTimelock',
  }
}

export function createMsgFund(
  creator: string,
  from: string,
  channelid: string,
  coin: Coin,
  balanceA: Coin,
  balanceB: Coin,
  hashcodeB: string,
  multisig: string,
) {
  const message = new channel.channel.channel.MsgFund({
    creator,
    from,
    channelid,
    coin: new cosmosCoin.cosmos.base.v1beta1.Coin({
      denom: coin.denom.toString(),
      amount: coin.amount.toString(),
    }),
    balanceA: new cosmosCoin.cosmos.base.v1beta1.Coin({
      denom: balanceA.denom.toString(),
      amount: balanceA.amount.toString(),
    }),
    balanceB: new cosmosCoin.cosmos.base.v1beta1.Coin({
      denom: balanceB.denom.toString(),
      amount: balanceB.amount.toString(),
    }),
    hashcodeB,
    multisig,
  })
  return {
    message,
    path: 'channel.channel.MsgFund',
  }
}

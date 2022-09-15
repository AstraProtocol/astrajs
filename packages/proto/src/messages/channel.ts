/* eslint-disable camelcase */
import * as coin from '../proto/cosmos/base/v1beta1/coin'
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
    coinA: new coin.cosmos.base.v1beta1.Coin({
      denom: coinA.denom.toString(),
      amount: coinA.amount.toString(),
    }),
    toATimelock,
    blockheight,
    toBHashlock,
    hashcode,
    coinlock: new coin.cosmos.base.v1beta1.Coin({
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
) {
  const message = new channel.channel.channel.MsgCloseChannel({
    creator,
    from,
    toA,
    coinA: new coin.cosmos.base.v1beta1.Coin({
      denom: coinA.denom.toString(),
      amount: coinA.amount.toString(),
    }),
    toB,
    coinB: new coin.cosmos.base.v1beta1.Coin({
      denom: coinB.denom.toString(),
      amount: coinB.amount.toString(),
    }),
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
) {
  const message = new channel.channel.channel.MsgOpenChannel({
    creator,
    partA,
    partB,
    coinA: new coin.cosmos.base.v1beta1.Coin({
      denom: coinA.denom.toString(),
      amount: coinA.amount.toString(),
    }),
    coinB: new coin.cosmos.base.v1beta1.Coin({
      denom: coinB.denom.toString(),
      amount: coinB.amount.toString(),
    }),
    multisigAddr,
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

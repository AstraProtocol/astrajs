export const MSG_OPEN_CHANNEL = {
  MsgValue: [
    { name: 'creator', type: 'string' },
    { name: 'partA', type: 'string' },
    { name: 'partB', type: 'string' },
    { name: 'coinA', type: 'TypeAmount[]' },
    { name: 'coinB', type: 'TypeAmount[]' },
    { name: 'multisigAddr', type: 'string' },
  ],
  TypeAmount: [
    { name: 'denom', type: 'string' },
    { name: 'amount', type: 'string' },
  ],
}

export const MSG_CLOSE_CHANNEL = {
  MsgValue: [
    { name: 'creator', type: 'string' },
    { name: 'toA', type: 'string' },
    { name: 'toB', type: 'string' },
    { name: 'coinA', type: 'TypeAmount[]' },
    { name: 'coinB', type: 'TypeAmount[]' },
  ],
  TypeAmount: [
    { name: 'denom', type: 'string' },
    { name: 'amount', type: 'string' },
  ],
}

export const MSG_COMMITMENT = {
  MsgValue: [
    { name: 'creator', type: 'string' },
    { name: 'from', type: 'string' },
    { name: 'coinA', type: 'TypeAmount[]' },
    { name: 'toATimelock', type: 'string' },
    { name: 'blockheight', type: 'uint64' },
    { name: 'toBHashlock', type: 'string' },
    { name: 'hashcode', type: 'string' },
    { name: 'coinlock', type: 'TypeAmount[]' },
  ],
  TypeAmount: [
    { name: 'denom', type: 'string' },
    { name: 'amount', type: 'string' },
  ],
}

export const MSG_WITHDRAW_HASHLOCK = {
  MsgValue: [
    { name: 'creator', type: 'string' },
    { name: 'to', type: 'string' },
    { name: 'index', type: 'string' },
    { name: 'secret', type: 'string' },
  ],
}

export const MSG_WITHDRAW_TIMELOCK = {
  MsgValue: [
    { name: 'creator', type: 'string' },
    { name: 'to', type: 'string' },
    { name: 'index', type: 'string' },
  ],
}

interface Coin {
  denom: string
  amount: string
}

export function createMsgOpenChannel(
  creator: string,
  partA: string,
  partB: string,
  coinA: Coin,
  coinB: Coin,
  multisigAddr: string,
) {
  return {
    type: 'Astra/MsgOpenChannel',
    value: {
      creator,
      partA,
      partB,
      coinA: [
        {
          amount: coinA.amount,
          denom: coinA.denom,
        },
      ],
      coinB: [
        {
          amount: coinB.amount,
          denom: coinB.denom,
        },
      ],
      multisigAddr,
    },
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
  return {
    type: 'Astra/MsgCloseChannel',
    value: {
      creator,
      from,
      toA,
      coinA: [
        {
          amount: coinA.amount,
          denom: coinA.denom,
        },
      ],
      toB,
      coinB: [
        {
          amount: coinB.amount,
          denom: coinB.denom,
        },
      ],
    },
  }
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
  return {
    type: 'Astra/MsgCommitment',
    value: {
      creator,
      from,
      coinA: [
        {
          amount: coinA.amount,
          denom: coinA.denom,
        },
      ],
      toATimelock,
      blockheight,
      toBHashlock,
      hashcode,
      coinlock: [
        {
          amount: coinlock.amount,
          denom: coinlock.denom,
        },
      ],
    },
  }
}

export function createMsgWithdrawHashlock(
  creator: string,
  to: string,
  index: string,
  secret: string,
) {
  return {
    type: 'Astra/MsgWithdrawHashlock',
    value: {
      creator,
      to,
      index,
      secret,
    },
  }
}

export function createMsgWithdrawTimelock(
  creator: string,
  to: string,
  index: string,
) {
  return {
    type: 'Astra/MsgWithdrawTimelock',
    value: {
      creator,
      to,
      index,
    },
  }
}

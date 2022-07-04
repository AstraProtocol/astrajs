export const MSG_VESTING_TYPES = {
  MsgValue: [
    { name: 'from_address', type: 'string' },
    { name: 'to_address', type: 'string' },
    { name: 'start_time', type: 'string' },
    { name: 'vesting_periods', type: 'Period[]' },
    // { name: 'merge', type: 'bool' },
    { name: 'lockup_periods', type: 'Period[]' },
  ],
  Timestamp: [
    { name: 'nanos', type: 'int32' },
    { name: 'seconds', type: 'int64' },
  ],
  Period: [
    { name: 'length', type: 'string' },
    { name: 'amount', type: 'Coin[]' },
  ],
}

export function createMsgVesting(
  fromAddress: string,
  toAddress: string,
  startTime: string,
  vestingPeriods: {
    length: string
    amount: { denom: string; amount: string }[]
  }[],
  // lockupPeriods?: {
  //   length: string
  //   amount: { denom: string; amount: string }[]
  // }[],
  // merge: boolean = false,
) {
  const time = new Date(startTime).getTime()
  const tp = {
    nanos: (time % 1000) * 1e6,
    seconds: Math.round(time / 1000),
  }
  const tp1 = new Date(tp.nanos / 1000 + tp.seconds * 1000).toISOString()

  return {
    type: 'astra.vesting.v1.MsgCreateClawbackVestingAccount',
    value: {
      from_address: fromAddress,
      to_address: toAddress,
      start_time: tp1,
      lockup_periods: vestingPeriods,
      vesting_periods: vestingPeriods,
      // merge,
    },
  }
}

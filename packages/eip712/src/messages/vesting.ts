export const MSG_VESTING_TYPES = {
  MsgValue: [
    { name: 'from_address', type: 'string' },
    { name: 'to_address', type: 'string' },
    { name: 'start_time', type: 'Timestamp' },
    { name: 'locked_periods', type: 'Period[]' },
    { name: 'vesting_periods', type: 'Period[]' },
    { name: 'merge', type: 'bool' },
  ],
  Timestamp: [
    { name: 'nanos', type: 'string' },
    { name: 'seconds', type: 'string' },
  ],
  Period: [
    { name: 'length', type: 'string' },
    { name: 'amount', type: 'Coin[]' },
  ],
  // TypeAmount: [
  // 	{ name: 'denom', type: 'string' },
  // 	{ name: 'amount', type: 'string' }
  // ]
}

export function createMsgVesting(
  fromAddress: string,
  toAddress: string,
  startTime: string,
  // lockupPeriods?: {
  // 	length: string
  // 	amount: { denom: string; amount: string }[]
  // }[],
  vestingPeriods: {
    length: string
    amount: { denom: string; amount: string }[]
  }[],
  merge: boolean = false,
) {
  const time = new Date(startTime).getTime()
  const tp = {
    nanos: (time % 1000) * 1e6,
    seconds: Math.round(time / 1000),
  }
  return {
    type: 'astra.vesting.v1.MsgCreateClawbackVestingAccount',
    value: {
      from_address: fromAddress,
      to_address: toAddress,
      start_time: tp,
      // lockup_periods: [],
      vesting_periods: vestingPeriods,
      merge,
    },
  }
}

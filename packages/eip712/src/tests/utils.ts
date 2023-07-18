class TestingClient {
  public readonly denom = 'aevmos'

  public readonly amount1 = '1000000000000000000'

  public readonly amount2 = '999999999999'

  public readonly addr1 = 'astra1fyf6a46xhpmwtf4zqq2dzxr0h7slgr5xv5qve9'

  public readonly addr2 = 'astra1vcf8dwxgxtdqd3cfm0ptpsrrutcayhhex84e5k'

  public readonly addr3 = 'astra154yxsdd2353w53zzyllanzm0kd67y9uzr3udn3'

  public readonly addrVal1 =
    'astravaloper1wey5kg6w2sawn35uy86qlfdwzswrcs0jrz88tf'

  public readonly addrVal2 =
    'astravaloper10k3ylwlt69njzps4762ehgmzdd5kllup868j3m'

  public readonly addrHex1 = '0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71'

  public readonly addrHex2 = '0xC1c85eB8278F783C5FE2103F1e4ac041B094160a'

  public readonly ibcDenom1 =
    'ibc/748375B5DD168C6C4DCBF54B3D54DCF20C2B41572C9603B1B9774419326A5A43'

  public readonly ibcDenom2 =
    'ibc/C9364B2C453F0428D04FD40B6CF486BA138FA462FE43A116268A7B695AFCFE7F'

  public readonly accountNumber = 69

  public readonly sequence = 2324

  public readonly chainId = 11115

  public readonly memo = 'Transaction Memo'

  public readonly typeUrl1 = 'cosmos-sdk/MsgSend'

  public readonly proposalId1 = 42

  // eslint-disable-next-line
  get validatorParams() {
    const moniker = 'test moniker'
    const identity = 'test identity'
    const website = 'test website'
    const securityContact = 'test security contact'
    const details = 'test details'
    const validatorAddress = 'test validator address'
    const commissionRate = 'test commission rate'
    const minSelfDelegation = 'test min self-delegation'

    return {
      moniker,
      identity,
      website,
      securityContact,
      details,
      validatorAddress,
      commissionRate,
      minSelfDelegation,
    }
  }

  // eslint-disable-next-line
  get pubKey() {
    const bytes = new Uint8Array([
      10, 33, 2, 136, 177, 245, 49, 184, 120, 113, 219, 192, 55, 41, 81, 135,
      37, 92, 174, 75, 160, 196, 188, 55, 202, 114, 97, 5, 178, 20, 10, 253,
    ])

    return Buffer.from(bytes).toString('base64')
  }

  get aminoMsgSend() {
    const { denom } = this
    const fromAddress = this.addr1
    const toAddress = this.addr2
    const amount = this.amount1
    const type = this.typeUrl1

    return {
      type,
      value: {
        from_address: fromAddress,
        to_address: toAddress,
        amount: {
          amount,
          denom,
        },
      },
    }
  }

  get stdFee() {
    const amount = this.amount1
    const { denom } = this
    const gas = this.amount2
    const granter = this.addr1
    const payer = this.addr2

    return {
      amount: [
        {
          amount,
          denom,
        },
      ],
      gas,
      granter,
      payer,
    }
  }

  // TODO: Replace with imported cosmjs AminoMsg type
  createStdSignDoc(aminoMsgs: any[]) {
    const fee = this.stdFee
    const { accountNumber, sequence, chainId, memo } = this

    return {
      chain_id: chainId,
      account_number: accountNumber,
      sequence,
      fee,
      msgs: aminoMsgs,
      memo,
    }
  }
}

const client = new TestingClient()

export default client

import { Fee, Chain, Sender } from '../messages/common'
import { TxContext } from '../messages/base'

class TestingClient {
  public readonly denom = 'aastra'

  public readonly amount1 = '1000000000000000000'

  public readonly amount2 = '999999999999'

  public readonly amount3 = '100000000'

  public readonly addr1 = 'astra1fyf6a46xhpmwtf4zqq2dzxr0h7slgr5xv5qve9'

  public readonly addr2 = 'astra1vcf8dwxgxtdqd3cfm0ptpsrrutcayhhex84e5k'

  public readonly addr3 = 'astra154yxsdd2353w53zzyllanzm0kd67y9uzr3udn3'

  public readonly addrVal1 =
    'astravaloper1wey5kg6w2sawn35uy86qlfdwzswrcs0jrz88tf'

  public readonly addrVal2 =
    'astravaloper10k3ylwlt69njzps4762ehgmzdd5kllup868j3m'

  public readonly chainId = 11115

  public readonly memo = 'Transaction Memo'

  get context(): TxContext {
    const { chain, sender, fee, memo } = this

    return {
      chain,
      sender,
      fee,
      memo,
    }
  }

  get fee(): Fee {
    const amount = this.amount3
    const { denom } = this
    const gas = '500000'

    return {
      amount,
      denom,
      gas,
    }
  }

  get chain(): Chain {
    const { chainId } = this
    const cosmosChainId = `astra_${chainId}-1`

    return {
      chainId,
      cosmosChainId,
    }
  }

  get sender(): Sender {
    const accountAddress = this.addr1
    const sequence = 69
    const accountNumber = 2324
    const pubkey = this.generatePubKey()

    return {
      accountAddress,
      sequence,
      accountNumber,
      pubkey,
    }
  }

  private generatePubKey = () => {
    const bytes = new Uint8Array([
      10, 33, 2, 136, 177, 245, 49, 184, 120, 113, 219, 192, 55, 41, 81, 135,
      37, 92, 174, 75, 160, 196, 188, 55, 202, 114, 97, 5, 178, 20, 10, 253,
    ])

    return Buffer.from(bytes).toString('base64')
  }
}

const client = new TestingClient()

export default client

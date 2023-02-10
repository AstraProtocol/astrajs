# Create multiple messages

This will only work for keplr or MM without eip712. Eip712 currently does not support multiple kind of messages inside a transaction if they are from different types.

## Requirements to execute the example

```ts
    "@ethersproject/wallet": "^5.7.0",
    "@hanchon/evmos-ts-wallet": "^0.2.0",
    "astrajs": "^0.2.16",
    "tsc": "^2.0.4",
    "typescript": "^4.9.3"
```

## Code example

```ts
import { ethToAstra, astraToEth } from '@astradefi/address-converter'
import {
  createTransactionWithMultipleMessages,
  createMsgSend as protoCreateMsgSend,
  createMsgDelegate as protoCreateMsgDelegate,
} from '@astradefi/proto'
import { Wallet } from '@ethersproject/wallet'
import {
  broadcast,
  getSender,
  signTransaction,
  LOCALNET_CHAIN,
  LOCALNET_FEE,
} from '@hanchon/evmos-ts-wallet'
import {
  createMsgSend,
  createMsgDelegate,
  generateFee,
  generateMessageWithMultipleTransactions,
  generateTypes,
  MSG_SEND_TYPES,
  MSG_DELEGATE_TYPES,
} from '@astradefi/eip712'
import { TxGenerated } from '@astradefi/transactions'
async function prepareTx(wallet: Wallet) {
  const fee = LOCALNET_FEE
  fee.gas = '3000000'
  fee.amount = '300000'
  const sender = await getSender(wallet, 'http://localhost:1317')
  const feeObject = generateFee(
    fee.amount,
    fee.denom,
    fee.gas,
    sender.accountAddress,
  )
  // Params
  const destinationAddress = 'astra1kkyadsgj55ug3hmcypfus2q59wlznawngckh65'
  const amountSend1 = '1'
  const amountSend2 = '2'
  const denom = 'aastra'
  const amountDelegate1 = '1'
  const amountDelegate2 = '2'
  const validator = 'astravaloper1wey5kg6w2sawn35uy86qlfdwzswrcs0jrz88tf'
  // Types
  var typesSend = generateTypes(MSG_SEND_TYPES)
  var typesDelegate = generateTypes(MSG_DELEGATE_TYPES)
  // Amino
  const msgs: any[] = []
  msgs.push(
    createMsgSend(
      amountSend1,
      denom,
      ethToAstra(wallet.address),
      destinationAddress,
    ),
    createMsgSend(
      amountSend2,
      denom,
      ethToAstra(wallet.address),
      destinationAddress,
    ),
    createMsgDelegate(
      ethToAstra(wallet.address),
      validator,
      amountDelegate1,
      denom,
    ),
    createMsgDelegate(
      ethToAstra(wallet.address),
      validator,
      amountDelegate2,
      denom,
    ),
  )
  const messages = generateMessageWithMultipleTransactions(
    sender.accountNumber.toString(),
    sender.sequence.toString(),
    LOCALNET_CHAIN.cosmosChainId,
    '',
    feeObject,
    msgs,
  )
  // We are not generating the eip712 to sign because it will fail. Eip712 does not support differente types of messages
  // const eipToSign = createEIP712(types, LOCALNET_CHAIN.chainId, messages);
  const protoMsgs: any[] = []
  protoMsgs.push(
    protoCreateMsgSend(
      ethToAstra(wallet.address),
      destinationAddress,
      amountSend1,
      denom,
    ),
    protoCreateMsgSend(
      ethToAstra(wallet.address),
      destinationAddress,
      amountSend2,
      denom,
    ),
    protoCreateMsgDelegate(
      ethToAstra(wallet.address),
      validator,
      amountDelegate1,
      denom,
    ),
    protoCreateMsgDelegate(
      ethToAstra(wallet.address),
      validator,
      amountDelegate2,
      denom,
    ),
  )
  const tx = createTransactionWithMultipleMessages(
    protoMsgs,
    '',
    fee.amount,
    fee.denom,
    parseInt(fee.gas, 10),
    'ethsecp256',
    sender.pubkey,
    sender.sequence,
    sender.accountNumber,
    LOCALNET_CHAIN.cosmosChainId,
  )
  return {
    sender,
    txSimple: {
      signDirect: tx.signDirect,
      legacyAmino: tx.legacyAmino,
    },
  }
}
;(async () => {
  const seed =
    'pluck view carry maid bamboo river major where dutch wood certain oval order wise awkward clerk adult summer because number raven coil crunch hat'
  const wallet = Wallet.fromMnemonic(seed)
  const tx = await prepareTx(wallet)
  const resMM = await signTransaction(wallet, tx.txSimple as TxGenerated)
  const broadcastRes = await broadcast(resMM, 'http://localhost:1317')
  if (broadcastRes.tx_response.code === 0) {
    console.log('Success sign transaction')
  } else {
    console.log(`Error payload signature: ${JSON.stringify(broadcastRes)}`)
  }
})()
```

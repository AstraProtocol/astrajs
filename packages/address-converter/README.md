# Address converter

A simple converter between `ETH` address and `Ethermint`/`astra` addresses.

## Installation

``` sh
npm install @astradefi/address-converter
```

## Usage

### Converter

``` ts
import {ethToEthermint, ethermintToEth} from '@astradefi/address-converter"

let address = ethToEthermint("0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71")
// "ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048"

let address = ethermintToEth("ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048")
// "0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71"
```

### Decoders

``` ts
import {ETH, ETHERMINT} from '@astradefi/address-converter"
let hex = ETH.decoder("0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71")
// hex.toString('hex') === "e2d61e49ff8a9d724cc54d338d8076f878ac6b71"

hex = ETHERMINT.decoder("ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048")
// hex.toString('hex') === "e2d61e49ff8a9d724cc54d338d8076f878ac6b71"
```

### Encoders

``` ts
import {ETH, ETHERMINT} from '@astradefi/address-converter"
let address = ETH.encoder(Buffer.from("e2d61e49ff8a9d724cc54d338d8076f878ac6b71","hex"))
// address === "0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71"

address = ETHERMINT.encoder(Buffer.from("e2d61e49ff8a9d724cc54d338d8076f878ac6b71","hex"))
// address === "ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048"
```

### Astra support

```ts
import {ethToAstra, astraToEth} from '@astradefi/address-converter"

let address = ethToAstra("0x4913aed746b876e5A6A20014D1186FbFA1F40E86")
// "astra1fyf6a46xhpmwtf4zqq2dzxr0h7slgr5xv5qve9"

let address = astraToEth("astra1fyf6a46xhpmwtf4zqq2dzxr0h7slgr5xv5qve9")
// "0x4913aed746b876e5A6A20014D1186FbFA1F40E86"
```

## Reference

- [ENSDOMAINS-AddressEnconder](https://github.com/ensdomains/address-encoder)

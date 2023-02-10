# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.9.1](https://github.com/astraprotocol/astrajs/compare/@astradefi/eip712@0.9.0...@astradefi/eip712@0.9.1) (2023-02-10)

**Note:** Version bump only for package @astradefi/eip712

# [0.9.0](https://github.com/astraprotocol/astrajs/compare/@astradefi/eip712@0.8.1...@astradefi/eip712@0.9.0) (2022-11-17)

### Features

- createValidator message ([fbafd7a](https://github.com/astraprotocol/astrajs/commit/fbafd7abd36d6f3bbf2cdbe9aa875e92eb0d971b))
- governance MsgSubmitProposal ([2a9b4eb](https://github.com/astraprotocol/astrajs/commit/2a9b4eb950c9153899ce2a2eecdbea4f16d0dc61))
- implement EIP712 enc/decoding infrastructure ([29a643a](https://github.com/astraprotocol/astrajs/commit/29a643aa60cc363e3e5cef0cbd49cda94d52fe13))
- proposal deposit message ([5ad75fa](https://github.com/astraprotocol/astrajs/commit/5ad75fad7c46f5ce416078550a7ca95209046fac))
- support for MsgSetWithdrawAddress ([b2e3874](https://github.com/astraprotocol/astrajs/commit/b2e3874e7d5f89cab336e255ddd25d4b52c9f716))

## [0.8.1](https://github.com/astraprotocol/astrajs/compare/@astradefi/eip712@0.8.0...@astradefi/eip712@0.8.1) (2022-09-05)

### Bug Fixes

- **vesting:** wrong field name ([ba007e7](https://github.com/astraprotocol/astrajs/commit/ba007e7e45a608e06e8e1086bfb70ef652d073d4))

# [0.8.0](https://github.com/astraprotocol/astrajs/compare/@astradefi/eip712@0.7.0...@astradefi/eip712@0.8.0) (2022-08-31)

### Features

- add msgClawback fn ([0180213](https://github.com/astraprotocol/astrajs/commit/01802130adba560ce6b30d02bdd7637fdd5d1270))

# [0.7.0](https://github.com/astraprotocol/astrajs/compare/@astradefi/eip712@0.6.0...@astradefi/eip712@0.7.0) (2022-07-08)

### Bug Fixes

- update package.json ([2108ec3](https://github.com/astraprotocol/astrajs/commit/2108ec308c1abe79ff119d07080ef51fb83279a8))

### Features

- vesting module (eip712) ([9124a2f](https://github.com/astraprotocol/astrajs/commit/9124a2febd00e60eb9aa8604daf9d4f39e271487))

# 0.6.0 (2022-06-23)

### Bug Fixes

- change npm name + update proto ([d734a9e](https://github.com/astraprotocol/astrajs/commit/d734a9ed44b6e784f2448e6e610aef2c0046013c))
- gh action build ([#8](https://github.com/astraprotocol/astrajs/issues/8)) ([1b2a167](https://github.com/astraprotocol/astrajs/commit/1b2a167846d592bece7ec0a717c92140ce4cdbfc))

### Features

- added multiple transactions support for withdraw rewards ([#26](https://github.com/astraprotocol/astrajs/issues/26)) ([9cddd62](https://github.com/astraprotocol/astrajs/commit/9cddd62bdeec00d50791df8fbaa0c1301d08d4ca))
- delegate message ([#15](https://github.com/astraprotocol/astrajs/issues/15)) ([1e68b10](https://github.com/astraprotocol/astrajs/commit/1e68b10d107edef6d54358447cee60af84d46053))
- ibc transactions added ([#14](https://github.com/astraprotocol/astrajs/issues/14)) ([3809f28](https://github.com/astraprotocol/astrajs/commit/3809f289e4e54c5013d3027578bde5c244ec8736))
- merge evmosjs for new convert coin/erc20 messages ([#5](https://github.com/astraprotocol/astrajs/issues/5)) ([eb473d4](https://github.com/astraprotocol/astrajs/commit/eb473d4acbfdf62639c090290c0e681a4e802725)), closes [#39](https://github.com/astraprotocol/astrajs/issues/39) [#42](https://github.com/astraprotocol/astrajs/issues/42) [#44](https://github.com/astraprotocol/astrajs/issues/44) [#45](https://github.com/astraprotocol/astrajs/issues/45)
- msgSend added ([#4](https://github.com/astraprotocol/astrajs/issues/4)) ([fe40011](https://github.com/astraprotocol/astrajs/commit/fe40011fedad558d6666674b3001e34cc86ae30d))
- proto objects for EIP712 ([#7](https://github.com/astraprotocol/astrajs/issues/7)) ([6ecd900](https://github.com/astraprotocol/astrajs/commit/6ecd9004f081c6a70b80d903878877d378ff6c75))
- redelegate/undelegate/claim transactions added ([#23](https://github.com/astraprotocol/astrajs/issues/23)) ([3b536c3](https://github.com/astraprotocol/astrajs/commit/3b536c321f7c304f79d121af346f16d6cca74b47))
- use the same naming style across all packages ([#24](https://github.com/astraprotocol/astrajs/issues/24)) ([348db46](https://github.com/astraprotocol/astrajs/commit/348db46ac299655257addc7a381e4ac1eb88f20a))
- vote on proposals ([#17](https://github.com/astraprotocol/astrajs/issues/17)) ([d0db5f9](https://github.com/astraprotocol/astrajs/commit/d0db5f9d2fba521a3cd20192d8d24c54f7f7fa4c))

# 0.4.0 (2022-05-23)

### Features

- added multiple transactions support for withdraw rewards ([#26](https://github.com/astraprotocol/astrajs/issues/26)) ([9cddd62](https://github.com/astraprotocol/astrajs/commit/9cddd62bdeec00d50791df8fbaa0c1301d08d4ca))
- delegate message ([#15](https://github.com/astraprotocol/astrajs/issues/15)) ([1e68b10](https://github.com/astraprotocol/astrajs/commit/1e68b10d107edef6d54358447cee60af84d46053))
- ibc transactions added ([#14](https://github.com/astraprotocol/astrajs/issues/14)) ([3809f28](https://github.com/astraprotocol/astrajs/commit/3809f289e4e54c5013d3027578bde5c244ec8736))
- msgSend added ([#4](https://github.com/astraprotocol/astrajs/issues/4)) ([fe40011](https://github.com/astraprotocol/astrajs/commit/fe40011fedad558d6666674b3001e34cc86ae30d))
- proto objects for EIP712 ([#7](https://github.com/astraprotocol/astrajs/issues/7)) ([6ecd900](https://github.com/astraprotocol/astrajs/commit/6ecd9004f081c6a70b80d903878877d378ff6c75))
- redelegate/undelegate/claim transactions added ([#23](https://github.com/astraprotocol/astrajs/issues/23)) ([3b536c3](https://github.com/astraprotocol/astrajs/commit/3b536c321f7c304f79d121af346f16d6cca74b47))
- use the same naming style across all packages ([#24](https://github.com/astraprotocol/astrajs/issues/24)) ([348db46](https://github.com/astraprotocol/astrajs/commit/348db46ac299655257addc7a381e4ac1eb88f20a))
- vote on proposals ([#17](https://github.com/astraprotocol/astrajs/issues/17)) ([d0db5f9](https://github.com/astraprotocol/astrajs/commit/d0db5f9d2fba521a3cd20192d8d24c54f7f7fa4c))

# 0.3.0 (2022-05-13)

### Features

- added multiple transactions support for withdraw rewards ([#26](https://github.com/astraprotocol/astrajs/issues/26)) ([9cddd62](https://github.com/astraprotocol/astrajs/commit/9cddd62bdeec00d50791df8fbaa0c1301d08d4ca))
- delegate message ([#15](https://github.com/astraprotocol/astrajs/issues/15)) ([1e68b10](https://github.com/astraprotocol/astrajs/commit/1e68b10d107edef6d54358447cee60af84d46053))
- ibc transactions added ([#14](https://github.com/astraprotocol/astrajs/issues/14)) ([3809f28](https://github.com/astraprotocol/astrajs/commit/3809f289e4e54c5013d3027578bde5c244ec8736))
- msgSend added ([#4](https://github.com/astraprotocol/astrajs/issues/4)) ([fe40011](https://github.com/astraprotocol/astrajs/commit/fe40011fedad558d6666674b3001e34cc86ae30d))
- proto objects for EIP712 ([#7](https://github.com/astraprotocol/astrajs/issues/7)) ([6ecd900](https://github.com/astraprotocol/astrajs/commit/6ecd9004f081c6a70b80d903878877d378ff6c75))
- redelegate/undelegate/claim transactions added ([#23](https://github.com/astraprotocol/astrajs/issues/23)) ([3b536c3](https://github.com/astraprotocol/astrajs/commit/3b536c321f7c304f79d121af346f16d6cca74b47))
- use the same naming style across all packages ([#24](https://github.com/astraprotocol/astrajs/issues/24)) ([348db46](https://github.com/astraprotocol/astrajs/commit/348db46ac299655257addc7a381e4ac1eb88f20a))
- vote on proposals ([#17](https://github.com/astraprotocol/astrajs/issues/17)) ([d0db5f9](https://github.com/astraprotocol/astrajs/commit/d0db5f9d2fba521a3cd20192d8d24c54f7f7fa4c))

## [0.2.1](https://github.com/astraprotocol/astrajs/compare/@astraprotocol/eip712@0.2.0...@astraprotocol/eip712@0.2.1) (2022-03-14)

### Features

- added multiple transactions support for withdraw rewards ([#26](https://github.com/astraprotocol/astrajs/issues/26)) ([9cddd62](https://github.com/astraprotocol/astrajs/commit/9cddd62bdeec00d50791df8fbaa0c1301d08d4ca))

# [0.2.0](https://github.com/astraprotocol/astrajs/compare/@astraprotocol/eip712@0.1.10...@astraprotocol/eip712@0.2.0) (2022-03-11)

### Features

- use the same naming style across all packages ([#24](https://github.com/astraprotocol/astrajs/issues/24)) ([348db46](https://github.com/astraprotocol/astrajs/commit/348db46ac299655257addc7a381e4ac1eb88f20a))

## [0.1.10](https://github.com/astraprotocol/astrajs/compare/@astraprotocol/eip712@0.1.9...@astraprotocol/eip712@0.1.10) (2022-03-11)

### Features

- redelegate/undelegate/claim transactions added ([#23](https://github.com/astraprotocol/astrajs/issues/23)) ([3b536c3](https://github.com/astraprotocol/astrajs/commit/3b536c321f7c304f79d121af346f16d6cca74b47))

## [0.1.9](https://github.com/astraprotocol/astrajs/compare/@astraprotocol/eip712@0.1.8...@astraprotocol/eip712@0.1.9) (2022-03-05)

### Features

- vote on proposals ([#17](https://github.com/astraprotocol/astrajs/issues/17)) ([d0db5f9](https://github.com/astraprotocol/astrajs/commit/d0db5f9d2fba521a3cd20192d8d24c54f7f7fa4c))

## [0.1.8](https://github.com/astraprotocol/astrajs/compare/@astraprotocol/eip712@0.1.7...@astraprotocol/eip712@0.1.8) (2022-03-04)

### Features

- delegate message ([#15](https://github.com/astraprotocol/astrajs/issues/15)) ([1e68b10](https://github.com/astraprotocol/astrajs/commit/1e68b10d107edef6d54358447cee60af84d46053))

## [0.1.7](https://github.com/astraprotocol/astrajs/compare/@astraprotocol/eip712@0.1.6...@astraprotocol/eip712@0.1.7) (2022-03-03)

### Features

- ibc transactions added ([#14](https://github.com/astraprotocol/astrajs/issues/14)) ([3809f28](https://github.com/astraprotocol/astrajs/commit/3809f289e4e54c5013d3027578bde5c244ec8736))

## 0.1.6 (2022-03-02)

### Features

- msgSend added ([#4](https://github.com/astraprotocol/astrajs/issues/4)) ([fe40011](https://github.com/astraprotocol/astrajs/commit/fe40011fedad558d6666674b3001e34cc86ae30d))
- proto objects for EIP712 ([#7](https://github.com/astraprotocol/astrajs/issues/7)) ([6ecd900](https://github.com/astraprotocol/astrajs/commit/6ecd9004f081c6a70b80d903878877d378ff6c75))

## [0.1.5](https://github.com/astraprotocol/astrajs/compare/@astraprotocol/eip712@0.1.2...@astraprotocol/eip712@0.1.5) (2022-02-26)

**Note:** Version bump only for package @astraprotocol/eip712

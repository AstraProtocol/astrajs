#!/bin/bash
MYFOLDER=$(pwd)

# Ethermint
mkdir -p proto
cd /tmp
git clone --branch astra https://github.com/astraprotocol/ethermint
cd ethermint/
cp -r ./proto/* $MYFOLDER/proto
cp -r ./third_party/proto/* $MYFOLDER/proto
cd /tmp
rm -rf ethermint

# Astra
cd /tmp
git clone https://github.com/astraprotocol/astra/
cd astra/
cp -r ./proto/* $MYFOLDER/proto
cp -r ./third_party/proto/* $MYFOLDER/proto
cd /tmp
rm -rf astra

# Astra Channel
cd /tmp
# git clone -b dev https://github.com/astraprotocol/channel/
git clone https://github.com/astraprotocol/channel/
cd channel/
cp -r ./proto/* $MYFOLDER/proto
cd /tmp
rm -rf channel

const HDWalletProvider = require("@truffle/hdwallet-provider");

const secrets = require("../src/secerts.json");
const mnemonic = secrets.nm;

module.exports = {
  networks: {
    testnet: {
      networkCheckTimeout: 10000,
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://data-seed-prebsc-1-s1.binance.org:8545`
        ),
      network_id: 97,
      // gas: 5500000,
      // confirmations: 10,
      // timeoutBlocks: 200,
      // skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "0.4.26",
      // settings: {
      //   optimizer: {
      //     enabled: true, // Default: false
      //     runs: 1000, // Default: 200
      //   },
      // },
    },
  },
};
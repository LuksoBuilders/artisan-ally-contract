import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";

const PRIVATE_KEY = "";

const config: HardhatUserConfig = {
  networks: {
    hardhat: {},
    lukso_testnet: {
      url: "https://rpc.testnet.lukso.network",
      accounts: [PRIVATE_KEY],
      gasPrice: 10e9,
    },
    lukso_mainnet: {
      url: "https://42.rpc.thirdweb.com",
      accounts: [PRIVATE_KEY],
      gasPrice: 10e9,
    },
  },
  solidity: {
    version: "0.8.24",
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 100,
        details: {
          yulDetails: {
            optimizerSteps: "u",
          },
        },
      },
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "XKD169WPEB3MJVFHX92D6TMJV5VPREAZ1P",
    customChains: [
      {
        network: "lukso_mainnet",
        chainId: 42,
        urls: {
          apiURL: "https://explorer.execution.mainnet.lukso.network/api/",
          browserURL: "https://explorer.execution.mainnet.lukso.network/",
        },
      },
    ],
  },
};

export default config;

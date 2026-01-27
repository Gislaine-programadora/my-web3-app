import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20", // A versão que você usou no seu GbitToken.sol
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/efeec6cf8cfd4d2d82ed5381d6568fc6", // Sua URL da Alchemy
      accounts: ["SUA_CHAVE_PRIVADA"], // A chave da carteira que fez o deploy
    },
  },
  etherscan: {
    apiKey: "GW3T4NC6QZ8593YIBMUR73ZTC844P8FIBP", // Chave que você pega no site do Etherscan
  },
};

export default config;
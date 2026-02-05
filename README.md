  <img width="546" height="81" alt="image" src="https://github.com/user-attachments/assets/35a5bc08-c435-4a1b-9401-ea5799a7ee5a" />
      
    
    
   ##   Web3 GBIT CLI Smart-Contract
      
  Web3 Fullstack Framework  Smart-contract com froundry:
  
   
   <img width="324" height="324" alt="image" src="https://github.com/user-attachments/assets/10649ace-2263-4aa1-b79a-0581a3fb638a" />

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)](https://nextjs.org/)
[![Web3GBIT CLI](https://img.shields.io/badge/Web3GBIT--CLI-Turma%20dos%2010-orange?logo=express)](https://github.com/Gislaine-programadora/projeto-web3-cli-deploy)
[![Smart Contract](https://img.shields.io/badge/Smart--Contract-Solidity-363636?logo=solidity)](https://soliditylang.org/)
[![Built with Foundry](https://img.shields.io/badge/Built%20with-Foundry-FFDE00?logo=foundry)](https://book.getfoundry.sh/)
[![Forge](https://img.shields.io/badge/Forge-Testing-red)](https://book.getfoundry.sh/forge/)
[![Package Manager](https://img.shields.io/badge/pnpm-8.15.0-orange?logo=pnpm)](https://pnpm.io/)
[![NPM Version](https://img.shields.io/badge/npm-v1.0.0-cb3837?logo=npm)](https://www.npmjs.com/)

  ``
  ##  INICIA SEU PROJETO SMART CONTRACT USANDO O FOUNDRY:

  ```bash
     pnpm web3forge "my-project"
```
   

<img width="507" height="191" alt="image" src="https://github.com/user-attachments/assets/bf7e6004-e974-4cdc-b8c0-a4cd7b44915a" />

 
  ``
  ##   COMANDOS PARA INTERAGIR COM O SMART CONTRATO:

  ```bash
     pnpm install -g web3gbit
```
   
```bash
     web3gbit status
```  

  "tabela de comando" para consulta rápida: WEB3GBIT "my-comand"

  <img width="611" height="366" alt="image" src="https://github.com/user-attachments/assets/aa5762bf-921e-4c92-ac90-f582725cf3fa" />

### 🚀 Tech Stack

| Camada | Tecnologia | Status |
| :--- | :--- | :--- |
| **Frontend** | Next.js 16 (Turbopack) | `EM OPERAÇÃO` |
| **Blockchain** | Solidity & Foundry | `AUDITADO` |
| **Conectividade** | RainbowKit & Wagmi | `ESTÁVEL` |
| **Ferramentas** | GBIT-CLI (10 comandos prontinhos) | `ATIVO` |
| **Gerenciador** | PNPM Workspaces | `OTIMIZADO` |


Bem-vindo ao **GBIT PRO**, um ecossistema descentralizado de alta performance construído com a visão do **Web3Forge**. Este projeto combina Smart Contracts auditáveis, uma interface DeFi moderna e uma CLI de administração poderosa.

🌍 **Site Oficial:** [https://my-web3-app-web.vercel.app/](https://my-web3-app-web.vercel.app/)


  
## 🛠️ Stack Tecnológica

- **Smart Contracts:** Solidity & Foundry (Forge/Cast)
- **Frontend:** Next.js 15 (Turbopack), Wagmi, Viem & RainbowKit
- **Infraestrutura:** pnpm Workspaces (Monorepo)
- **Deploy:** Vercel (Web) & Sepolia Testnet (Blockchain)

---

## 💻 Comandos CLI (O Coração do Projeto)

## 🛠️ CLI Management

O ecossistema conta com um CLI exclusivo para gerenciamento de liquidez e deploy automatizado.

* **Status Check**: Monitoramento em tempo real do Rate e Supply.
* **Deployer**: Script automatizado para múltiplas redes (Sepolia/Mainnet).
* **Market Maker**: Bot integrado para simulação de mercado.

Este projeto foi desenhado para evitar trabalho repetitivo. Abaixo estão os comandos principais que gerenciam o ciclo de vida da aplicação.

### 🏗️ Desenvolvimento & Contratos (Foundry)
```bash
# Compilar os contratos
forge build

# Deploy do GbitToken na Sepolia
forge create src/GbitToken.sol:GbitToken \
  --rpc-url $SEPOLIA_RPC_URL \
  --private-key $PRIVATE_KEY \
  --broadcast

## Projeto  smart contract  token testnet sepolia anvil  hardhat   
atencao!!!  nao use chaves  reais  para testes,  esse projeto  e para teste  apenas saldo ficticio  

## Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

- **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
- **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
- **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
- **Chisel**: Fast, utilitarian, and verbose solidity REPL.


# ⚡ Web3Forge: The High-Velocity Web3 Stack

**Web3Forge** é um framework full-stack opinativo, projetado para levar desenvolvedores do "zero ao Mainnet" com a maior eficiência possível. Esqueça configurações manuais de ABIs, hooks complexos e ambientes de teste lentos.
```


---

## ✨ Por que Web3Forge?

O desenvolvimento Web3 atual é fragmentado. O Web3Forge resolve isso unificando as melhores ferramentas do mercado em um workflow único de **Alta Produção**.

- 🚀 **Zero-Config DX:** Setup completo em segundos com `npx create-web3forge`.
- 🔗 **Type-Safe End-to-End:** Seus contratos Solidity geram tipos TypeScript automaticamente para o Frontend.
- 🛡️ **Security-First:** Linting e análise estática (Slither) integrados no pipeline.
- ⚡ **Turbo-Speed:** Testes em Rust via Foundry e Hot Reload no Frontend com Next.js 15.

## 🛠️ Tech Stack
``

- **Contracts:** [Foundry](https://book.getfoundry.sh/) (Solidity, Rust-speed testing)
- **Frontend:** [Next.js 15+](https://nextjs.org/) (App Router, Server Components)
- **Blockchain Interaction:** [Wagmi](https://wagmi.sh/) + [Viem](https://viem.sh/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)
- **Indexing:** [Ponder](https://ponder.sh/) (Fast local indexing)

## 🚀 Quick Start

```bash
# Clone o repositório
git clone [https://github.com/seu-usuario/web3forge.git](https://github.com/seu-usuario/web3forge.git)

# Instale as dependências (recomendamos pnpm)
pnpm install

# Inicie o ambiente local (Anvil + Next.js + Ponder)
pnpm dev
## Documentation

https://book.getfoundry.sh/

---
```
<img width="1345" height="589" alt="image" src="https://github.com/user-attachments/assets/398d04b0-b409-43d0-af31-667d89cfed4f" />
```
---
## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```

# GBIT PRO - Plataforma de Trading

![GBIT PRO](https://img.shields.io/badge/GBIT-PRO-blue?style=for-the-badge)
![Ethereum](https://img.shields.io/badge/Ethereum-Mainnet-purple?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)24" height="624" alt="image" src="https://github.com/user-attachments/assets/93ee44f1-08fd-4ce7-8775-5e97ed95c6ad" />


Bem-vindo ao **GBIT PRO**, um ecossistema descentralizado de alta performance construído com a visão do **Web3Forge**. Este projeto combina Smart Contracts auditáveis, uma interface DeFi moderna e uma CLI de administração poderosa.

🌍 **Site Oficial:** [https://my-web3-app-web.vercel.app/](https://my-web3-app-web.vercel.app/)

---

## 🛠️ Stack Tecnológica

- **Smart Contracts:** Solidity & Foundry (Forge/Cast)
- **Frontend:** Next.js 15 (Turbopack), Wagmi, Viem & RainbowKit
- **Infraestrutura:** pnpm Workspaces (Monorepo)
- **Deploy:** Vercel (Web) & Sepolia Testnet (Blockchain)

---

## 💻 Comandos CLI (O Coração do Projeto)

Este projeto foi desenhado para evitar trabalho repetitivo. Abaixo estão os comandos principais que gerenciam o ciclo de vida da aplicação.

### 🏗️ Desenvolvimento & Contratos (Foundry)
```bash
# Compilar os contratos
forge build

# Deploy do GbitToken na Sepolia
forge create src/GbitToken.sol:GbitToken \
  --rpc-url $SEPOLIA_RPC_URL \
  --private-key $PRIVATE_KEY \
  --broadcast

## Projeto  smart contract  token testnet sepolia anvil  hardhat   
atencao!!!  nao use chaves  reais  para testes,  esse projeto  e para teste  apenas saldo ficticio  

## Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

- **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
- **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
- **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
- **Chisel**: Fast, utilitarian, and verbose solidity REPL.


# ⚡ Web3Forge: The High-Velocity Web3 Stack

**Web3Forge** é um framework full-stack opinativo, projetado para levar desenvolvedores do "zero ao Mainnet" com a maior eficiência possível. Esqueça configurações manuais de ABIs, hooks complexos e ambientes de teste lentos.
```

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/github/actions/workflow/status/seu-usuario/web3forge/ci.yml)](https://github.com)
[![Foundry](https://img.shields.io/badge/Built%20with-Foundry-FFDB1C.svg)](https://book.getfoundry.sh/)

---

## ✨ Por que Web3Forge?

O desenvolvimento Web3 atual é fragmentado. O Web3Forge resolve isso unificando as melhores ferramentas do mercado em um workflow único de **Alta Produção**.

- 🚀 **Zero-Config DX:** Setup completo em segundos com `npx create-web3forge`.
- 🔗 **Type-Safe End-to-End:** Seus contratos Solidity geram tipos TypeScript automaticamente para o Frontend.
- 🛡️ **Security-First:** Linting e análise estática (Slither) integrados no pipeline.
- ⚡ **Turbo-Speed:** Testes em Rust via Foundry e Hot Reload no Frontend com Next.js 15.

## 🛠️ Tech Stack
``

- **Contracts:** [Foundry](https://book.getfoundry.sh/) (Solidity, Rust-speed testing)
- **Frontend:** [Next.js 15+](https://nextjs.org/) (App Router, Server Components)
- **Blockchain Interaction:** [Wagmi](https://wagmi.sh/) + [Viem](https://viem.sh/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)
- **Indexing:** [Ponder](https://ponder.sh/) (Fast local indexing)

## 🚀 Quick Start

```bash
# Clone o repositório
git clone [https://github.com/seu-usuario/web3forge.git](https://github.com/seu-usuario/web3forge.git)

# Instale as dependências (recomendamos pnpm)
pnpm install

# Inicie o ambiente local (Anvil + Next.js + Ponder)
pnpm dev
## Documentation

https://book.getfoundry.sh/

---
```
<img width="1345" height="589" alt="image" src="https://github.com/user-attachments/assets/398d04b0-b409-43d0-af31-667d89cfed4f" />
```
---
## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```

# GBIT PRO - Plataforma de Trading

![GBIT PRO](https://img.shields.io/badge/GBIT-PRO-blue?style=for-the-badge)
![Ethereum](https://img.shields.io/badge/Ethereum-Mainnet-purple?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

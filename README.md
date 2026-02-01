<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <!-- Fundo gradiente azul neon -->
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#001122;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#003366;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#00FFFF;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#0080FF;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#00FFFF;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Retângulo de fundo -->
  <rect width="100%" height="100%" fill="url(#bgGradient)" />
  
  <!-- Elementos cripto: cadeias de blocos estilizadas -->
  <g transform="translate(50, 50)">
    <circle cx="0" cy="0" r="10" fill="#00FFFF" opacity="0.8" />
    <circle cx="30" cy="0" r="10" fill="#00FFFF" opacity="0.8" />
    <circle cx="60" cy="0" r="10" fill="#00FFFF" opacity="0.8" />
    <line x1="10" y1="0" x2="20" y2="0" stroke="#00FFFF" stroke-width="2" />
    <line x1="40" y1="0" x2="50" y2="0" stroke="#00FFFF" stroke-width="2" />
    
    <circle cx="0" cy="30" r="10" fill="#00FFFF" opacity="0.8" />
    <circle cx="30" cy="30" r="10" fill="#00FFFF" opacity="0.8" />
    <circle cx="60" cy="30" r="10" fill="#00FFFF" opacity="0.8" />
    <line x1="0" y1="20" x2="0" y2="10" stroke="#00FFFF" stroke-width="2" />
    <line x1="30" y1="20" x2="30" y2="10" stroke="#00FFFF" stroke-width="2" />
    <line x1="60" y1="20" x2="60" y2="10" stroke="#00FFFF" stroke-width="2" />
  </g>
  
  <!-- Ícone de smart contract (contrato estilizado) -->
  <g transform="translate(150, 100)">
    <rect x="0" y="0" width="80" height="50" fill="none" stroke="#00FFFF" stroke-width="3" rx="5" />
    <text x="40" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#00FFFF">SC</text>
  </g>
  
  <!-- Texto principal -->
  <text x="400" y="150" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="url(#textGradient)" text-anchor="middle">Web3 GBIT</text>
  <text x="400" y="200" font-family="Arial, sans-serif" font-size="32" fill="#00FFFF" text-anchor="middle">CLI Smart-Contract</text>
  
  <!-- Subtítulo -->
  <text x="400" y="250" font-family="Arial, sans-serif" font-size="18" fill="#FFFFFF" text-anchor="middle">Blockchain-Powered | Decentralized Tool</text>
  
  <!-- Elementos decorativos modernos -->
  <g transform="translate(600, 50)">
    <polygon points="0,0 20,10 0,20" fill="#00FFFF" opacity="0.6" />
    <polygon points="30,0 50,10 30,20" fill="#00FFFF" opacity="0.6" />
    <polygon points="60,0 80,10 60,20" fill="#00FFFF" opacity="0.6" />
  </g>
  
  <!-- Linha divisória -->
  <line x1="50" y1="320" x2="750" y2="320" stroke="#00FFFF" stroke-width="2" />
  
  <!-- Rodapé -->
  <text x="400" y="350" font-family="Arial, sans-serif" font-size="14" fill="#FFFFFF" text-anchor="middle">🚀 Ready for Production | Secure & Efficient</text>
</svg>
          
          
          
          🚀 GBIT PRO - Web3 Fullstack Framework  Smart-contract com froundry
         
      
         
   <img width="324" height="324" alt="image" src="https://github.com/user-attachments/assets/10649ace-2263-4aa1-b79a-0581a3fb638a" />



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

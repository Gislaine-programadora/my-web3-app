# Web3 GBIT CLI Smart-Contract

![Web3 GBIT Logo](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmdHcmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDIyMjI7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwMzM2NjtzdG9wLW9wYWNpdHk6MSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InRleHRHcmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBGRkZGO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwODBGRjtzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBGRkZGO3N0b3Atb3BhY2l0eToxIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgCiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNiZ0dyYWRpZW50KSIgLz4KICAKICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCwgNTApIj4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxMCIgZmlsbD0iIzAwRkZGRiIgb3BhY2l0eT0iMC44IiAvPgogICAgPGNpcmNsZSBjeD0iMzAiIGN5PSIwIiByPSIxMCIgZmlsbD0iIzAwRkZGRiIgb3BhY2l0eT0iMC44IiAvPgogICAgPGNpcmNsZSBjeD0iNjAiIGN5PSIwIiByPSIxMCIgZmlsbD0iIzAwRkZGRiIgb3BhY2l0eT0iMC44IiAvPgogICAgPGxpbmUgeDE9IjEwIiB5MT0iMCIgeDI9IjIwIiB5Mj0iMCIgc3Ryb2tlPSIjMDBGRkZGIiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICA8bGluZSB4MT0iNDAiIHkxPSIwIiB4Mj0iNTAiIHkyPSIwIiBzdHJva2U9IiMwMEZGRkYiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgIAogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjMwIiByPSIxMCIgZmlsbD0iIzAwRkZGRiIgb3BhY2l0eT0iMC44IiAvPgogICAgPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMTAiIGZpbGw9IiMwMEZGRkYiIG9wYWNpdHk9IjAuOCIgLz4KICAgIDxjaXJjbGUgY3g9IjYwIiBjeT0iMzAiIHI9IjEwIiBmaWxsPSIjMDBGRkZGIiBvcGFjaXR5PSIwLjgiIC8+CiAgICA8bGluZSB4MT0iMCIgeTE9IjIwIiB4Mj0iMCIgeTI9IjEwIiBzdHJva2U9IiMwMEZGRkYiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgIDxsaW5lIHgxPSIzMCIgeTE9IjIwIiB4Mj0iMzAiIHkyPSIxMCIgc3Ryb2tlPSIjMDBGRkZGIiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICA8bGluZSB4MT0iNjAiIHkxPSIyMCIgeDI9IjYwIiB5Mj0iMTAiIHN0cm9rZT0iIzAwRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogIDwvZz4KICAKICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTAsIDEwMCkiPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMEZGRkYiIHN0cm9rZS13aWR0aD0iMyIgcng9IjUiIC8+CiAgICA8dGV4dCB4PSI0MCIgeT0iMzAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwRkZGRiI+U0M8L3RleHQ+CiAgPC9nPgogIAogIDx0ZXh0IHg9IjQwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ1cmwoI3RleHRHcmFkaWVudCkiIHRleHQtYW5jaG9yPSJtaWRkbGUiPldlYjMgR0JJVDwvdGV4dD4KICA8dGV4dCB4PSI0MDAiIHk9IjIwMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjMyIiBmaWxsPSIjMDBGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DTElTIFNtYXJ0LUNvbnRyYWN0PC90ZXh0PgogIAogIDx0ZXh0IHg9IjQwMCIgeT0iMjUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CbG9ja2NoYWluLVBvd2VyZWQgfCBEZWNlbnRyYWxpemVkIFRvb2w8L3RleHQ+CiAgCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjAwLCA1MCkiPgogICAgPHBvbHlnb24gcG9pbnRzPSIwLDAsMjAsMTAsMCwyMCIgZmlsbD0iIzAwRkZGRiIgb3BhY2l0eT0iMC42IiAvPgogICAgPHBvbHlnb24gcG9pbnRzPSIzMCwwLDUwLDEwLDMwLDIwIiBmaWxsPSIjMDBGRkZGIiBvcGFjaXR5PSIwLjYiIC8+CiAgICA8cG9seWdvbiBwb2ludHM9IjYwLDAsODAsMTAsNjAsMjAiIGZpbGw9IiMwMEZGRkYiIG9wYWNpdHk9IjAuNiIgLz4KICA8L2c+CiAgCiAgPGxpbmUgeDE9IjUwIiB5MT0iMzIwIiB4Mj0iNzUwIiB5Mj0iMzIwIiBzdHJva2U9IiMwMEZGRkYiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAKICA8dGV4dCB4PSI0MDAiIHk9IjM1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7ilrAgUmVhZHkgZm9yIFByb2R1Y3Rpb24gfCBTZWN1cmUgJiBFZmZpY2llbnQ8L3RleHQ+Cjwvc3ZnPg==)

## Descrição
Esta é uma imagem moderna e cripto-estilizada com azul neon, pronta para ser inserida diretamente no seu README.md. O SVG está codificado em base64 para compatibilidade imediata com GitHub e outros plataformas Markdown.

### Como Funciona:
- **Visual**: Fundo gradiente azul escuro, texto com gradiente neon, elementos de blockchain e smart contracts.
- **Compatibilidade**: Funciona no GitHub, GitLab e outros repositórios que suportam Markdown.
- **Tamanho**: 800x400 pixels, otimizado para headers de README.

Se precisar de uma versão hospedada (ex: via Imgur ou GitHub Assets) ou ajustes, me avise! 🚀🔗
          
          
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

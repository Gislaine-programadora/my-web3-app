#!/usr/bin/env node

import * as fs from 'fs';
import { execSync } from 'child_process';

// ==============================
// 🎨 PALETA DE CORES ANSI
// ==============================
const reset = '\x1b[0m';
const cyan = '\x1b[36m';
const blue = '\x1b[34m';
const bold = '\x1b[1m';
const lightBlue = '\x1b[38;5;45m';
const white = '\x1b[37m';
const yellow = '\x1b[33m';
const green = '\x1b[32m';

// ==============================
// 🚀 WEB3 GBIT LOGO (Versão Pro Limpa)
// ==============================


  // 🚀 LOGO WEB3 GBIT - VERSÃO CLEAN
  const textLogo = `
${bold}${lightBlue}┌──────────────────────────────────────────────────────────────────────┐
${bold}${lightBlue}│                                                                      │
${bold}${cyan}│     ██     ██ ███████ ██████  ██████      ██████  ██████  ██ ████████ │
${bold}${cyan}│     ██     ██ ██      ██   ██      ██    ██       ██   ██ ██    ██    │
${bold}${cyan}│     ██  █  ██ █████   ██████   █████     ██   ███ ██████  ██    ██    │
${bold}${blue}│     ██ ███ ██ ██      ██   ██      ██    ██    ██ ██   ██ ██    ██    │
${bold}${blue}│     ███ █ ███ ███████ ██████  ██████      ██████  ██████  ██    ██    │
${bold}${lightBlue}│                                                                      │
${bold}${lightBlue}└──────────────────────────────────────────────────────────────────────┘${reset}
`;


const baseDir = process.argv[2] || 'my-gbit-app';

// Início do CLI
console.log(textLogo);
console.log(`${lightBlue}${'═'.repeat(66)}${reset}`);
console.log(` ${blue}${bold} 🚀 WEB3 GBIT ${reset} ${white}||${reset} ${cyan}FORGE ENGINE ACTIVE${reset}`);
console.log(`${lightBlue}${'═'.repeat(66)}${reset}`);

console.log(`\n🏗️  Forjando ambiente de produção em ${yellow}"${baseDir}"${reset}...\n`);

const folders = [
  `${baseDir}/contracts/src`,
  `${baseDir}/contracts/test`,
  `${baseDir}/web/src/app`,
  `${baseDir}/web/src/components`,
  `${baseDir}/web/src/config`
];

// 1. Criar pastas
folders.forEach(folder => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
});

// 2. Criar package.json da Web
const webPackageJson = {
  name: `${baseDir}-web`,
  version: "0.1.0",
  private: true,
  scripts: {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  dependencies: {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "wagmi": "latest",
    "viem": "latest",
    "@tanstack/react-query": "latest",
    "lucide-react": "latest"
  },
  devDependencies: {
    "typescript": "latest",
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "postcss": "latest",
    "tailwindcss": "latest",
    "autoprefixer": "latest"
  }
};

fs.writeFileSync(`${baseDir}/web/package.json`, JSON.stringify(webPackageJson, null, 2));

// 3. Criar Root Layout
const layoutContent = `
import './globals.css';

export const metadata = {
  title: 'Web3Gbit Forge App',
  description: 'Gerado pelo Web3Gbit-Forge CLI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{margin: 0}}>{children}</body>
    </html>
  );
}
`;
fs.writeFileSync(`${baseDir}/web/src/app/layout.tsx`, layoutContent.trim());

// 4. Criar Globals CSS
const cssContent = `
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #000000;
  --foreground: #ffffff;
}

body {
  color: var(--foreground);
  background: var(--background);
  margin: 0;
  font-family: sans-serif;
}
`;
fs.writeFileSync(`${baseDir}/web/src/app/globals.css`, cssContent.trim());

// 5. Criar Page.tsx Estilizada (Identidade GBIT)
const pageContent = `
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black -z-10"></div>
      <main className="text-center">
        <h1 className="text-6xl font-black tracking-tighter mb-4 italic">
          WEB3<span className="text-blue-500">GBIT</span>
        </h1>
        <p className="text-slate-400 text-xl mb-8">Sua infraestrutura Web3 está forjada e pronta.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
          Conectar Carteira GBIT
        </button>
      </main>
    </div>
  );
}
`;
fs.writeFileSync(`${baseDir}/web/src/app/page.tsx`, pageContent.trim());

// 6. Criar Wagmi Config
const wagmiConfig = `
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, localhost } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet, sepolia, localhost],
  connectors: [injected()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [localhost.id]: http(),
  },
})
`;
fs.writeFileSync(`${baseDir}/web/src/config/wagmi.ts`, wagmiConfig.trim());

// --- PARTE 1: Verificação inicial ---
const contractsPath = `${baseDir}/contracts`; // Mantemos o const aqui

if (!fs.existsSync(`${contractsPath}/foundry.toml`)) {
  console.log("🔥 Inicializando Foundry com Forge...");
  try {
    execSync(`cd ${contractsPath} && forge init --force`, { stdio: 'ignore' });
    console.log("✅ Contracts: Foundry OK");
  } catch (e) {
    console.log("⚠️ Forge não encontrado. Pulei a inicialização do Foundry.");
  }
}

// --- PARTE 2: Finalização do Log ---
// Removida a linha que declarava contractsPath novamente (causadora do erro)

console.log(`\n${green}✨ PROJETO WEB3GBIT CRIADO COM SUCESSO!${reset}`);
console.log(`📂 Pasta: ${baseDir}`);

console.log(`\n🚀 Próximos passos:`);
console.log(` 1. cd ${baseDir}/web`);
console.log(` 2. pnpm install`);
console.log(` 3. pnpm dev`);

console.log(`\n`);

const indent = ""; 

console.log(`${indent}${bold}${green}✅ ESTRUTURA PRONTA PARA DEPLOY!${reset}`);
console.log(`${indent}${white}1. Configure as chaves no seu .env${reset}`);
console.log(`${indent}${white}2. Use 'forge create' para subir seus contratos.${reset}`);
console.log(`${indent}${white}3. O front-end já está conectado via Wagmi/Viem.${reset}\n`);
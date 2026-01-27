import { createWalletClient, http, parseEther, getAddress } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { sepolia } from 'viem/chains';
import * as dotenv from 'dotenv';

dotenv.config();

// Endereço do Router da Uniswap V2 na Sepolia
const UNISWAP_ROUTER = getAddress("0xC532a74256D3Db42D01ed7442249464172F563b8");

// O endereço do seu token vindo do .env (o 0x692d...)
const GBIT_TOKEN = getAddress(process.env.GBIT_ADDRESS as string);

const ABI_ROUTER = [
  { 
    name: 'addLiquidityETH', 
    type: 'function', 
    stateMutability: 'payable', 
    inputs: [
      {name: 'token', type: 'address'}, {name: 'amountTokenDesired', type: 'uint256'},
      {name: 'amountTokenMin', type: 'uint256'}, {name: 'amountETHMin', type: 'uint256'},
      {name: 'to', type: 'address'}, {name: 'deadline', type: 'uint256'}
    ], 
    outputs: [{name: 'amountToken', type: 'uint256'}, {name: 'amountETH', type: 'uint256'}, {name: 'liquidity', type: 'uint256'}] 
  }
];

const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);
const client = createWalletClient({ account, chain: sepolia, transport: http(process.env.RPC_URL) });

async function main() {
  console.log(`🚀 Iniciando publicação do token: ${GBIT_TOKEN}`);

  // 1. APPROVE
  console.log("🔓 Autorizando Uniswap...");
  const ABI_APPROVE = [{ name: 'approve', type: 'function', inputs: [{name: 'spender', type: 'address'}, {name: 'amount', type: 'uint256'}], outputs: [{type: 'bool'}] }];

  const approveHash = await client.writeContract({
    address: GBIT_TOKEN,
    abi: ABI_APPROVE,
    functionName: 'approve',
    args: [UNISWAP_ROUTER, parseEther('1000')]
  });
  
  console.log(`✅ Autorização enviada! Hash: ${approveHash}`);
  console.log("⏳ Aguardando 15 segundos...");
  await new Promise(resolve => setTimeout(resolve, 15000));

  // 2. ADD LIQUIDITY
  console.log("🌊 Criando Pool...");
  const hash = await client.writeContract({
    address: UNISWAP_ROUTER,
    abi: ABI_ROUTER,
    functionName: 'addLiquidityETH',
    args: [
      GBIT_TOKEN,
      parseEther('1000'), 
      0n, 0n, 
      account.address,
      BigInt(Math.floor(Date.now() / 1000) + 60 * 20)
    ],
    value: parseEther('0.05') 
  });

  console.log(`✅ SUCESSO! Token listado na Uniswap V2 (Sepolia)`);
  console.log(`🔗 Tx: https://sepolia.etherscan.io/tx/${hash}`);
}

main().catch((err) => {
  console.error("❌ Erro:");
  console.error(err.message || err);
});
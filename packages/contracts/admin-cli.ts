import { createWalletClient, createPublicClient, http, parseAbi, formatEther } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { sepolia } from 'viem/chains';
import * as dotenv from 'dotenv';

dotenv.config();

const ABI = parseAbi([
  'function setRate(uint256 newRate) external',
  'function rate() external view returns (uint256)',
  'function totalSupply() external view returns (uint256)',
  'function rescueETH() external',
  'function name() external view returns (string)',
  'function owner() external view returns (address)'
]);

const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);
const client = createWalletClient({ account, chain: sepolia, transport: http(process.env.RPC_URL) });
const publicClient = createPublicClient({ chain: sepolia, transport: http(process.env.RPC_URL) });

async function main() {
  const command = process.argv[2];
  const value = process.argv[3];

  console.log('\n🚀 GBIT ADMIN CLI (MODO SEGURO)');
  console.log('-----------------------------------');

  if (command === 'status') {
    const [rate, supply, balance, owner] = await Promise.all([
      publicClient.readContract({ address: process.env.GBIT_ADDRESS as `0x${string}`, abi: ABI, functionName: 'rate' }),
      publicClient.readContract({ address: process.env.GBIT_ADDRESS as `0x${string}`, abi: ABI, functionName: 'totalSupply' }),
      publicClient.getBalance({ address: process.env.GBIT_ADDRESS as `0x${string}` }),
      publicClient.readContract({ address: process.env.GBIT_ADDRESS as `0x${string}`, abi: ABI, functionName: 'owner' }).catch(() => "Não definido")
    ]);
    console.log(`📈 Preço (Rate): ${rate}`);
    console.log(`💰 Total Supply: ${formatEther(supply)} GBIT`);
    console.log(`🌊 Liquidez no Contrato: ${formatEther(balance)} ETH`);
    console.log(`👑 Dono do Contrato: ${owner}`);
    console.log(`👤 Sua Carteira: ${account.address}`);
}
  else if (command === 'pump' || command === 'dump') {
    console.log(`⏳ Enviando transação de ${command.toUpperCase()}...`);
    const hash = await client.writeContract({
      address: process.env.GBIT_ADDRESS as `0x${string}`,
      abi: ABI,
      functionName: 'setRate',
      args: [BigInt(value)]
    });
    console.log(`✅ Sucesso! Link: https://sepolia.etherscan.io/tx/${hash}`);
  }

 else if (command === 'withdraw') {
    console.log('💸 Resgatando fundos de emergência (rescueETH)...');
    const hash = await client.writeContract({
      address: process.env.GBIT_ADDRESS as `0x${string}`,
      abi: ABI,
      functionName: 'rescueETH', // Nome exato que está no seu .sol
      gas: 100000n
    });
    console.log(`✅ ETH enviado para sua carteira! Link: https://sepolia.etherscan.io/tx/${hash}`);
  }
}

main().catch(console.error);
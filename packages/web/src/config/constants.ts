export const GBIT_ADDRESS = '0x297e1984BF7Da594a34E88Ecadf7B47bBbb3A5c2' as `0x${string}`;

export const GBIT_ABI = [
  { name: 'rate', type: 'function', stateMutability: 'view', inputs: [], outputs: [{ type: 'uint256' }] },
  { name: 'totalSupply', type: 'function', stateMutability: 'view', inputs: [], outputs: [{ type: 'uint256' }] },
  { name: 'owner', type: 'function', stateMutability: 'view', inputs: [], outputs: [{ type: 'address' }] },
] as const;
'use client'

import { useReadContract } from 'wagmi'
import { formatEther } from 'viem'
import { GBIT_ADDRESS, GBIT_ABI } from '../config/constants'
import { useEffect, useState } from 'react'

export function StatusBoard() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const { data: rate, refetch: refetchRate } = useReadContract({
    address: GBIT_ADDRESS,
    abi: GBIT_ABI,
    functionName: 'rate',
    query: { refetchInterval: 10000 } // Atualiza a cada 10 segundos
  })

  const { data: supply } = useReadContract({
    address: GBIT_ADDRESS,
    abi: GBIT_ABI,
    functionName: 'totalSupply',
  })

  if (!mounted) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl p-4">
      {/* Card de Preço (Rate) */}
      <div className="p-6 rounded-2xl bg-slate-900/50 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)] backdrop-blur-md">
        <h3 className="text-blue-400 font-semibold mb-2 uppercase tracking-wider text-sm">Taxa de Câmbio (Rate)</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-black text-white italic">
            {rate ? rate.toString() : '---'}
          </span>
          <span className="text-blue-500 text-xs animate-pulse">● LIVE</span>
        </div>
      </div>

      {/* Card de Supply */}
      <div className="p-6 rounded-2xl bg-slate-900/50 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-md">
        <h3 className="text-purple-400 font-semibold mb-2 uppercase tracking-wider text-sm">Supply Total GBIT</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-black text-white">
            {supply ? Number(formatEther(supply)).toLocaleString() : '---'}
          </span>
          <span className="text-slate-500 text-xs font-bold uppercase">Tokens</span>
        </div>
      </div>
    </div>
  )
}
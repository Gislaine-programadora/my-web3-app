"use client";
import { getDefaultConfig, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { sepolia } from 'viem/chains'; // MUDANÇA AQUI
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactNode, useState } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  const config = getDefaultConfig({
    appName: 'GBIT PRO',
    projectId: '488260acb5a86764b6c357db22a807d6',
    chains: [sepolia],
    ssr: true,
  });

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()} locale="pt-BR">
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
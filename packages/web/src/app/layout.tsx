import './globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers'; // Importando o que criamos acima

export const metadata = {
  title: 'GBIT Exchange Pro',
  description: 'Sua corretora Web3 na Sepolia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
import { defineConfig } from '@wagmi/cli';
import { foundry, react } from '@wagmi/cli/plugins';

export default defineConfig({
  out: 'packages/web/src/generated.ts', // Onde o código para o site será criado
  plugins: [
    foundry({
      project: 'packages/contracts', // Onde estão seus arquivos .sol
      deployments: {
        Guestbook: '0xA15BB66138824a1c7167f5E85b957d04Dd34E468', // Endereço atual
      },
    }),
    react(), // Cria os hooks automáticos como useReadGuestbook
  ],
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import lessConsts from './src/styles/const.less';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // Inject global less variable
        additionalData: Object
          .entries(lessConsts)
          .map(([k, v]) => `${k}: ${v.endsWith(';') ? v : `${v};`}`)
          .join('\n'),
        javascriptEnabled: true,
      },
    },
  },
});

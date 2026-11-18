import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          /**
           * আগে সব কোড একটাই ১.২৯ MB ফাইলে যেত, ফলে প্রথম লোড ধীর হত।
           * এখন ভেন্ডর লাইব্রেরিগুলো আলাদা চাঙ্কে যায় — এগুলো কম বদলায়,
           * তাই ভিজিটরের ব্রাউজারে ক্যাশ হয়ে থাকে এবং পরের ভিজিট দ্রুত হয়।
           */
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
            firestore: ['firebase/app', 'firebase/firestore', 'firebase/analytics'],
            motion: ['motion/react'],
            icons: ['lucide-react'],
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

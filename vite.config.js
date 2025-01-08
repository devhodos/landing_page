import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/landing_page/', // Ensure this matches the name of your GitHub repo
  build: {
    outDir: 'dist', // Specify the directory where the built files will go
  },
});

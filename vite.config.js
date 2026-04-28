import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages: set base to your repo name
// e.g. if repo is github.com/YogeshBandekar/codecraft-pro
// base = '/codecraft-pro/'
// If using a custom domain or username.github.io root repo, use base = '/'
export default defineConfig({
  plugins: [react()],
  base: '/CodeCraft/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});

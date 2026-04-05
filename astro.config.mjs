import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://pasteshelf.com',
  vite: {
    plugins: [tailwindcss()],
  },
});

// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jqsilva.github.io',
  base: '/Malla-Interactiva/',
  vite: {
    plugins: [tailwindcss()]
  }
});
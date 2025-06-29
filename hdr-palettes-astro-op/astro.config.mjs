import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Roboto Flex',
        cssVariable: '--font-roboto',
        weights: [400, 500],
        fallbacks: ['system-ui', 'sans-serif'],
        subsets: ['latin'],
        styles: ['normal'],
      },
      {
        provider: 'local',
        name: 'Material Symbols Outlined',
        cssVariable: '--font-material-symbols',
        variants: [
          {
            weight: 400,
            style: 'normal',
            src: ['./src/assets/fonts/material-symbols-outlined.woff2'],
            display: 'block',
          },
        ],
      },
    ],
  },
});

import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    react(),
    tailwind()
  ],
  output: 'server',
  adapter: netlify()
});

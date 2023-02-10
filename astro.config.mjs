import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

import addClasses from "rehype-add-classes";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), react()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          h1: 'pt-5 text-4xl font-bold font-oswald',
          h2: 'pt-5 text-2xl font-bold font-oswald',
          h3: 'pt-5 text-xl font-bold font-oswald',
          h4: 'pt-5 text-lg font-bold font-oswald',
          h5: 'pt-5 font-bold font-oswald',
          h6: 'pt-5 font-bold font-oswald',
          img: 'border border-slate-300 dark:border-zinc-700 rounded-xl m-6',
          p: 'mb-6',
          a: 'underline underline-offset-2 hover:text-teal-500 decoration-teal-500',
          ul: 'list-disc'
        }
      ]
    ]
  },
  adapter: netlify()
});

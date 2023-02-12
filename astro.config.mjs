import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/functions";
import tailwind from "@astrojs/tailwind";
import addClasses from "rehype-add-classes";

// https://astro.build/config
export default defineConfig({
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    react(),
    tailwind()
  ],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          pre: 'hljs',
          h1: 'text-4xl font-bold font-oswald mt-4 mb-2',
          h2: 'text-2xl font-bold font-oswald mt-4 mb-2',
          h3: 'text-xl font-bold font-oswald mt-4 mb-2',
          h4: 'text-lg font-bold font-oswald mt-4 mb-2',
          h5: 'font-bold font-oswald mt-4 mb-2',
          h6: 'font-bold font-oswald mt-4 mb-2',
          ul: 'list-disc list-inside',
          ol: 'list-decimal list-inside',
          p: 'mb-6 text-justify',
          img: 'mb-6 border border-slate-300 dark:border-zinc-700 rounded-xl',
          a: 'underline underline-offset-2 hover:text-teal-500 decoration-teal-500'
        }
      ]
    ]
  },
  output: 'server',
  adapter: netlify()
});

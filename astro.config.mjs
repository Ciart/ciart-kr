// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { visit } from 'unist-util-visit';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
      () => {
        return (tree) => {
          visit(tree, function (node) {
            if (node.type === 'heading') {
              node.depth++
            }
          })
        };
      },
    ]
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

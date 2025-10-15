import {
  ObsidianDocumentSchema,
  ObsidianMdLoader,
  ObsidianWikiLinkSchema,
} from 'astro-loader-obsidian';
import { defineCollection } from 'astro:content';

export const collections = {
  blog: defineCollection({
    loader: ObsidianMdLoader({
      base: 'src/blog',
      url: 'posts',
      tagsUrl: '../tags',
      wikilinkFields: ['relateds'],
    }),
    schema: ({ image }) =>
      ObsidianDocumentSchema.extend({
        images: ObsidianWikiLinkSchema.extend({
          href: image().optional(),
        })
          .array()
          .optional(),
        image: image().optional(),
        cover: image().optional(),
      }),
  }),
};

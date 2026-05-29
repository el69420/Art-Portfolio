import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    caption: z.string(),
    date: z.string().optional(),
    location: z.string().optional(),
    materials: z.string().optional(),
    category: z.enum(['portrait', 'landscape', 'study', 'ink', 'watercolour', 'note']).optional(),
    image: z.string().optional(),
    spread: z.boolean().optional(),
    finished: z.boolean().optional(),
  }),
});

export const collections = { pages };

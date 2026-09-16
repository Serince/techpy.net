import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        youtube: z.union([z.string(), z.array(z.string())]).optional(),
        yazar: z.string().optional(),
        yazarKanal: z.string().optional(),
        yazilim: z.string().optional(),
        tarih: z.string().optional(),
        kapak: z.string().optional(),
        durum: z.enum(['tam', 'ozet']).optional(),
        dogrulama: z.boolean().optional(),
      }),
    }),
  }),
};

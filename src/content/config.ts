import { defineCollection, z } from 'astro:content';

const testimonialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.string().optional(),
    quote: z.string(),
    avatar: z.string().optional(),
  }),
});

export const collections = {
  testimonials: testimonialsCollection,
};

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Blog SEO. Cada post es un .md en src/content/blog/.
// Frontmatter validado con Zod — si falta algo el build avisa claro.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default('Equipo Emprenddi'),
    category: z.enum([
      'Facturación electrónica',
      'Contabilidad',
      'POS',
      'Inventario',
      'Nómina',
      'Tecnología',
      'PyMEs',
    ]),
    tags: z.array(z.string()).default([]),
    readingMinutes: z.number().int().positive().default(5),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Starlight: documentación del producto en /docs/*.
// Los archivos viven en src/content/docs/* y se generan automáticamente
// como rutas. El schema valida frontmatter estándar de Starlight.
const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema(),
});

export const collections = { blog, docs };

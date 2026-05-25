import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://emprenddi.com',
  integrations: [
    // Starlight monta el centro de ayuda en /docs/* con su propio layout
    // (sidebar, search, dark mode). Convive con la landing en /, /precios,
    // /blog, etc. — no las afecta.
    starlight({
      title: 'Centro de Ayuda Emprenddi',
      description: 'Documentación completa: cómo usar Emprenddi paso a paso.',
      logo: {
        light: './public/logos/logo_emprenddi.svg',
        dark: './public/logos/logo_emprenddi_sin_fondo_blanco.png',
        replacesTitle: true,
      },
      favicon: '/logos/favicon_emprenddi.svg',
      customCss: [
        // Tailwind base para que coincida con el resto del sitio
        '@astrojs/starlight-tailwind',
        './src/styles/global.css',
        './src/styles/docs.css',
      ],
      social: {
        // Si tienen redes, añadirlas aquí
      },
      components: {
        // Sobreescribir cabecera para añadir un link "Volver a la web"
        SocialIcons: './src/components/docs/HeaderLinks.astro',
      },
      head: [
        {
          tag: 'meta',
          attrs: { name: 'robots', content: 'index, follow' },
        },
      ],
      // Localización: solo español de Colombia
      defaultLocale: 'root',
      locales: {
        root: { label: 'Español', lang: 'es-CO' },
      },
      lastUpdated: true,
      pagination: true,
      // Sidebar: estructura jerárquica
      sidebar: [
        {
          label: 'Bienvenida',
          items: [
            { label: 'Inicio', slug: 'index' },
            { label: 'Qué es Emprenddi', slug: 'que-es' },
          ],
        },
        {
          label: 'Primeros pasos',
          collapsed: false,
          autogenerate: { directory: 'primeros-pasos' },
        },
        {
          label: 'Ventas',
          collapsed: true,
          autogenerate: { directory: 'ventas' },
        },
        {
          label: 'Compras',
          collapsed: true,
          autogenerate: { directory: 'compras' },
        },
        {
          label: 'Inventario',
          collapsed: true,
          autogenerate: { directory: 'inventario' },
        },
        {
          label: 'Contabilidad',
          collapsed: true,
          autogenerate: { directory: 'contabilidad' },
        },
        {
          label: 'Nómina',
          collapsed: true,
          autogenerate: { directory: 'nomina' },
        },
        {
          label: 'Garantías',
          collapsed: true,
          autogenerate: { directory: 'garantias' },
        },
        {
          label: 'Restaurante',
          collapsed: true,
          autogenerate: { directory: 'restaurante' },
        },
        {
          label: 'DIAN',
          collapsed: true,
          autogenerate: { directory: 'dian' },
        },
        {
          label: 'Administración',
          collapsed: true,
          autogenerate: { directory: 'administracion' },
        },
        {
          label: 'Ayuda',
          collapsed: true,
          autogenerate: { directory: 'ayuda' },
        },
      ],
    }),
    // Tailwind con el flag applyBaseStyles=false para que Starlight
    // mantenga su propio reset (evita conflictos visuales).
    tailwind({ applyBaseStyles: false }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});

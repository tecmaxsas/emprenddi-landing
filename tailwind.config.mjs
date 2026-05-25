import starlightPlugin from '@astrojs/starlight-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // El preset de Starlight provee dark mode + clases compatibles con sus
  // componentes. No afecta a las páginas no-docs (landing, blog).
  plugins: [starlightPlugin()],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta institucional Emprenddi (gradiente violeta → azul)
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        accent: {
          500: '#a855f7',
          600: '#9333ea',
        },
        // Starlight: que su accent use la marca
        'sl-accent': {
          DEFAULT: '#4f46e5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #2563eb 100%)',
        'badge-gradient': 'linear-gradient(135deg, #6366f1, #a855f7)',
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s cubic-bezier(.22,1,.36,1) both',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
};

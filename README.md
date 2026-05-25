# Emprenddi · Landing page

Sitio web público de Emprenddi en `https://emprenddi.com`. **Es un sitio estático** generado con [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), hosteado en **Cloudflare Pages**.

> Repo separado del SaaS (`pos.emprenddi.com`) para que el equipo de marketing pueda editar sin tocar el código de producción.

---

## Tabla de contenido

1. [Requisitos](#requisitos)
2. [Desarrollo local](#desarrollo-local)
3. [Estructura del proyecto](#estructura-del-proyecto)
4. [Editar contenido](#editar-contenido)
5. [Deploy a Cloudflare Pages](#deploy-a-cloudflare-pages)
6. [DNS — apuntar `emprenddi.com` a Cloudflare](#dns--apuntar-emprenddicom-a-cloudflare)
7. [Notas de mantenimiento](#notas-de-mantenimiento)

---

## Requisitos

- **Node.js 20+** ([descarga](https://nodejs.org))
- **npm** (viene con Node)
- **Git**

Verifica que tienes todo:

```bash
node -v   # debe imprimir v20.x.x o superior
npm -v
git --version
```

---

## Desarrollo local

```bash
# 1. Clonar el repo (o ya está en tu carpeta)
cd emprenddi-landing

# 2. Instalar dependencias (primera vez)
npm install

# 3. Levantar servidor de desarrollo (auto-reload)
npm run dev
```

Abre tu navegador en `http://localhost:4321`. Cualquier cambio que hagas en `src/` se refleja al instante.

### Otros comandos

```bash
npm run build      # Compila a estático en dist/
npm run preview    # Previsualiza el build antes de subir
```

---

## Estructura del proyecto

```
emprenddi-landing/
├── public/                  # Assets servidos tal cual (favicon, logos, robots.txt)
│   ├── logos/
│   ├── robots.txt
│   └── _headers             # Headers HTTP para Cloudflare Pages
├── src/
│   ├── components/          # Componentes reutilizables Astro
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── FeatureCard.astro
│   │   ├── UseCaseCard.astro
│   │   ├── PricingCard.astro
│   │   ├── FAQItem.astro
│   │   └── CTASection.astro
│   ├── layouts/
│   │   └── Base.astro       # Layout HTML con <head> y meta tags SEO
│   ├── pages/               # Cada archivo .astro es una página
│   │   ├── index.astro      # /  (landing principal one-page)
│   │   └── precios.astro    # /precios
│   └── styles/
│       └── global.css       # Tailwind + utilities
├── astro.config.mjs         # Config Astro
├── tailwind.config.mjs      # Paleta de colores y tema Tailwind
├── tsconfig.json
└── package.json
```

---

## Editar contenido

### Cambiar precios

Edita `src/pages/precios.astro` → arrays `plans`, `starter` y `[features de la tabla comparativa]`. Los precios están al inicio del archivo, en pesos colombianos.

### Cambiar features de la landing

Edita `src/pages/index.astro` → arrays `features`, `useCases`, `diffs` y `faqs` al inicio del archivo. Cada uno tiene su estructura clara.

### Cambiar logo / favicon

Reemplaza los archivos en `public/logos/`. El navbar usa `logo_emprenddi.svg` y el footer usa `logo_emprenddi_sin_fondo_blanco.png`.

### Cambiar URL del registro (CTA)

Busca en todo el proyecto `pos.emprenddi.com/app` y reemplaza si la URL del SaaS cambia. Las constantes están en `Navbar.astro`, `Footer.astro`, `Hero.astro`, `CTASection.astro`, `precios.astro`.

### Añadir una página nueva

Crea un archivo `.astro` en `src/pages/`. Ejemplo: `src/pages/blog.astro` → accesible en `/blog`.

```astro
---
import Base from '../layouts/Base.astro';
---
<Base title="Mi nueva página · Emprenddi">
  <h1>Contenido aquí</h1>
</Base>
```

### Cambiar colores institucionales

Edita `tailwind.config.mjs` → sección `colors.brand`. Tailwind generará las clases automáticamente (`bg-brand-600`, `text-brand-700`, etc.).

---

## Deploy a Cloudflare Pages

### Primera vez (setup)

1. **Sube el repo a GitHub** (recomendado para deploy automático):
   ```bash
   git init
   git add .
   git commit -m "Initial landing"
   git branch -M main
   git remote add origin git@github.com:tu-org/emprenddi-landing.git
   git push -u origin main
   ```

2. **Conecta Cloudflare Pages**:
   - Entra a https://dash.cloudflare.com/?to=/:account/pages
   - Click en **Create a project** → **Connect to Git**
   - Autoriza GitHub y selecciona el repo `emprenddi-landing`
   - Configuración del build:
     - **Production branch**: `main`
     - **Framework preset**: `Astro`
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
     - **Node version**: `20` (variable de entorno `NODE_VERSION=20`)
   - Click **Save and Deploy**.

3. Espera ~1 minuto. Cloudflare te da una URL tipo `emprenddi-landing.pages.dev`. Verifica que el sitio carga bien.

### Cada cambio posterior

Solo haces `git push` a `main` y Cloudflare lo compila y publica automáticamente en segundos.

Para hacer cambios sin afectar producción, trabaja en una rama:

```bash
git checkout -b feature/nueva-seccion
# ... haces cambios ...
git add .
git commit -m "Añade sección de testimonios"
git push origin feature/nueva-seccion
```

Cloudflare genera un **preview URL** automático para cada rama. Cuando estés conforme, abre un PR y mergea a `main`.

---

## DNS — apuntar `emprenddi.com` a Cloudflare

Esto se hace **una sola vez** cuando termines el primer deploy.

### Opción A — Mover los DNS a Cloudflare (recomendada)

Más cómodo y rápido. Cloudflare gestiona todos los DNS y te activa CDN automático.

1. En **Cloudflare** → **Add a Site** → escribe `emprenddi.com`.
2. Cloudflare escaneará los DNS actuales (los de Hostinger) e importará todos.
3. Cloudflare te dará **2 nameservers** (ej. `xxx.ns.cloudflare.com`).
4. En **Hostinger** → tu dominio → cambia los nameservers a los que te dio Cloudflare.
5. Espera 1-24 h a que propague.
6. En Cloudflare → Pages → tu proyecto → **Custom Domain** → añade `emprenddi.com` y `www.emprenddi.com`. Cloudflare crea los CNAME automáticamente.

**Importante**: los otros subdominios (`pos.emprenddi.com`, `apidian.emprenddi.com`, `app.emprenddi.com`, etc.) **siguen funcionando igual** porque Cloudflare importa todos los DNS. Solo asegúrate de que estén marcados como `DNS only` (nube gris) y no `Proxied` (nube naranja), excepto los que sí quieras detrás del CDN de Cloudflare.

### Opción B — Mantener DNS en Hostinger (solo apuntar emprenddi.com)

Más simple pero pierdes CDN de Cloudflare para el dominio raíz.

1. En Cloudflare → Pages → tu proyecto → **Custom Domain** → añade `emprenddi.com`.
2. Cloudflare te dará un valor CNAME tipo `emprenddi-landing.pages.dev`.
3. En Hostinger → DNS → edita el registro de `emprenddi.com`:
   - Si Hostinger permite CNAME en root: tipo `CNAME`, valor `emprenddi-landing.pages.dev`.
   - Si no permite (algunos cPanel restringen CNAME en root): usa **registros A** apuntando a los IPs que Cloudflare proporciona.
4. Edita el `www.emprenddi.com` para apuntar al mismo CNAME.
5. Espera propagación (5-30 min).

### Verificación

```bash
# Comprueba que el dominio resuelve a Cloudflare Pages
nslookup emprenddi.com

# Abre en navegador
https://emprenddi.com
```

Cloudflare provisiona SSL automáticamente (Let's Encrypt). En 1-2 minutos el sitio está con `https://` válido.

---

## Notas de mantenimiento

### Actualizar dependencias

Una vez al mes (al menos):

```bash
npm outdated         # ve qué hay desactualizado
npm update           # actualiza dependencias menores
npm audit fix        # parches de seguridad
```

Para versiones mayores (`npm-check-updates` o leer changelogs antes de actualizar):

```bash
npx npm-check-updates -u   # actualiza package.json a últimas versiones
npm install
npm run build              # verifica que sigue compilando
```

### Performance y SEO

- **Lighthouse**: corre `npx lighthouse https://emprenddi.com --view` para auditar.
- Imágenes nuevas deben ir comprimidas. Usa [Squoosh](https://squoosh.app) para optimizar PNG/JPG.
- Si añades imágenes pesadas usa `<img loading="lazy" />` o el componente `<Image />` de Astro.

### Analítica

Para añadir Google Analytics o Plausible:
- Edita `src/layouts/Base.astro`
- Añade el snippet del proveedor dentro de `<head>`

### Backup

Cloudflare Pages mantiene un histórico de deploys. Puedes hacer rollback con 1 clic en el dashboard. Además, el repo de Git es tu fuente de verdad.

---

## Contactos del equipo

- **Desarrollo**: comercial1@triadify.com
- **Marketing / contenido landing**: (definir)
- **Comercial / decisiones de pricing**: (definir)

---

*Construido con ❤️ en Colombia. Stack: Astro + Tailwind + Cloudflare Pages.*

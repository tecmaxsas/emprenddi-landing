---
title: 3. Cargar logo de la empresa
description: Cómo subir el logo que aparecerá en tickets POS, facturas, menú público y comprobantes.
sidebar:
  order: 3
---

El logo de tu empresa aparece en varios lugares públicos del sistema. Cargarlo es uno de los primeros pasos para que tu negocio se vea profesional.

## Dónde aparece el logo

| Lugar | Tipo |
|---|---|
| Ticket POS impreso | HTML |
| Header de factura imprimible | HTML / PDF |
| Carta pública del menú restaurante | Página web |
| Comprobante de garantía | A5 imprimible |
| Header de página legal | Web |
| Plantillas personalizadas | Configurable |

## Requisitos del archivo

- **Formato**: PNG (recomendado) o JPG
- **Tamaño**: máximo 2 MB
- **Proporciones**: cuadrada (400×400 px) o ligeramente horizontal (600×200 px)
- **Fondo**: transparente recomendado (PNG), aunque también funciona con fondo blanco

> **Tip**: si tu logo es solo texto, no funciona bien en tickets pequeños. Considera tener una versión "icono + texto" para web y una versión "solo icono" para tickets térmicos.

## Paso a paso

### 1. Ir a Configuraciones

Panel App → menú lateral **Administración** → **Configuraciones** (o el icono de engranaje).

### 2. Tab Empresa → sección Identidad visual

En el formulario verás una sección **"Identidad visual"** al inicio.

### 3. Subir el logo

- Click en el área del FileUpload (caja gris con icono de imagen).
- Selecciona el archivo desde tu computador.
- El sistema abre un **editor con crop** — recorta a 1:1 si te interesa cuadrarlo (recomendado).
- El sistema lo redimensiona automáticamente a 400×400 px.
- Click en **Guardar**.

### 4. Verifica que se vea bien

- En **Ventas → Facturas de Venta**, abre una factura cualquiera y mira el preview.
- Si tienes restaurante, abre la **carta QR pública** en `/menu/tu-slug`.
- Imprime un ticket POS de prueba (puedes hacer una venta dummy de un producto barato).

## Logo en cada sede

Si tienes múltiples sedes y cada una tiene su propio logo (raro pero pasa: cuando una empresa opera bajo varias marcas), por ahora el sistema **maneja un solo logo por empresa**. Si necesitas logos distintos por sede, contacta a soporte.

## Cambiar el logo después

Puedes cambiarlo cuando quieras desde la misma ruta. El nuevo logo aparece **al instante** en facturas y tickets nuevos. Los documentos PDF que ya generaste mantienen el logo anterior (el sistema no regenera PDFs históricos).

## Problemas comunes

### "El logo se ve borroso"
Sube una imagen de mejor resolución. Mínimo 400×400 px o más.

### "El logo se ve cortado en el ticket POS"
El ticket térmico es angosto (58mm o 80mm). Logos muy horizontales se ven mal. Usa una versión más cuadrada o solo el icono.

### "El logo no aparece en el menú QR"
La carta pública usa el logo del menú (`menu.logo_path`) si está configurado, y si no usa el logo de la empresa como fallback. Asegúrate de no haber configurado un logo distinto en la sección de carta del restaurante.

### "Subí el logo pero no se ve en producción"
Es probable que sea un tema de cache. Refresca la página con Ctrl+F5 (o Cmd+Shift+R en Mac). Si sigue sin verse, intenta cerrar sesión y volver a entrar.

## Próximo paso

Continúa con [crear usuarios para tu equipo](/docs/primeros-pasos/crear-usuarios/).

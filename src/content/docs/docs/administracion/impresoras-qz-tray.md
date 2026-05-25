---
title: Impresoras y QZ Tray
description: Instala QZ Tray para imprimir tirilla POS, facturas y comandas en impresora local sin diálogo.
sidebar:
  order: 3
---

Para imprimir desde el navegador a impresoras térmicas locales (tirilla 80mm, comandas, etiquetas) sin diálogos molestos, Emprenddi usa **QZ Tray**, un servicio gratuito que actúa de puente entre el navegador y las impresoras.

## ¿Por qué QZ Tray?

Los navegadores no permiten imprimir directamente a impresoras térmicas. Solo abren el diálogo "Imprimir" del sistema operativo, lo cual:
- Es lento (1-2 segundos por venta)
- Requiere clic adicional
- No soporta ESC/POS (comandos térmicos)

QZ Tray resuelve esto. Una vez instalado, las impresiones salen al instante y sin diálogo.

## Instalación

### 1. Descarga QZ Tray

Ve a [qz.io](https://qz.io/download) y descarga la versión para tu sistema (Windows, Mac, Linux).

Instálalo como cualquier programa.

### 2. Verifica que está corriendo

Al instalar, QZ Tray queda corriendo en segundo plano. Busca el icono en la **bandeja del sistema** (esquina inferior derecha en Windows).

### 3. Configura tu impresora

QZ Tray usa las impresoras configuradas en tu sistema operativo. Asegúrate que tu impresora térmica esté instalada en **Configuración → Impresoras** del sistema.

### 4. Conecta Emprenddi

Abre el POS. La primera vez aparecerá un **diálogo de QZ Tray** preguntando si autorizas a `emprenddi.com` a usar la impresión. Marca **"Permitir siempre"** y acepta.

A partir de ese momento, las impresiones salen sin diálogos.

## Configurar impresoras en Emprenddi

Panel App → **Configuraciones → Impresoras**:

### Por tipo de documento

Asigna qué impresora se usa para cada tipo:

| Documento | Impresora típica |
|---|---|
| **Tirilla POS** | Térmica 80mm en caja |
| **Factura electrónica** | A4 láser/inyección o ninguna (PDF) |
| **Comanda cocina** | Térmica 80mm en cocina |
| **Comanda barra** | Térmica 80mm en barra |
| **Reporte cierre caja** | Térmica 80mm en caja |
| **Etiquetas producto** | Etiquetadora (Zebra, Brother) |

### Por sede

Cada sede puede tener su set de impresoras. Configura por sede si las impresoras son distintas.

### Copias

Define cuántas copias de cada documento se imprimen (ej. tirilla 1, comanda 2 — una para cocina y una para mesero).

## Modo firmado (sin diálogo de autorización)

Por defecto QZ Tray pide autorización **1 vez por sesión del navegador**. Si cierras navegador, pide de nuevo.

Para eliminar este diálogo definitivamente, Emprenddi usa **firma con certificado**. El servidor firma cada petición de impresión con clave privada (la clave **nunca** se envía al navegador, queda en servidor).

Esto ya viene configurado out-of-the-box en Emprenddi. No necesitas hacer nada extra.

## Solucionar problemas comunes

### "QZ Tray no responde"

1. Verifica que el icono de QZ Tray está en la bandeja del sistema
2. Si no está, lánzalo desde el menú de inicio
3. Si está pero no responde, reinícialo (botón derecho → Reiniciar)
4. Recarga el POS

### "La impresora no imprime"

1. Verifica que la impresora está encendida y con papel
2. Imprime una página de prueba desde **Panel de Control → Impresoras**
3. Si la prueba funciona, prueba el botón "Test" en **Configuraciones → Impresoras** de Emprenddi
4. Revisa que la impresora esté seleccionada en Emprenddi para el tipo de documento

### "Salen caracteres extraños"

Esto suele ser por codificación. En la configuración de la impresora en Emprenddi:
- Cambia codificación a **CP437** o **UTF-8**
- Si tu impresora soporta español, prueba **CP858**

### "No imprime tildes ni ñ"

Idem anterior — problema de codificación. Prueba CP858 o CP1252.

### "Imprime muy lento"

- Cambia conexión USB a más cercana
- Revisa si la impresora tiene cola de impresiones atascadas y purga
- Reduce calidad de impresión en config (densidad 6 en vez de 8)

## Impresoras compatibles testadas

- **Epson TM-T20**, TM-T88 (estándar de la industria)
- **Bematech MP-4200**, MP-2800
- **Star TSP100**, TSP143
- **Xprinter XP-58**, XP-80 (genéricas chinas — muy comunes en Colombia)
- **3nstar RPT008** (popular en mercado colombiano)
- **Zebra GK420** (etiquetas)

Cualquier impresora térmica ESC/POS estándar funciona. Si tienes dudas, consulta con soporte antes de comprar.

## Próximos temas

- [Plantillas de Impresión](/docs/administracion/plantillas-impresion/)
- [Sesiones de Caja](/docs/ventas/sesiones-caja/)
- [POS Restaurante](/docs/restaurante/pos-restaurante/)

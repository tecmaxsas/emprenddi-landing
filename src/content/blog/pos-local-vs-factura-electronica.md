---
title: "Diferencia entre POS local y factura electrónica DIAN: ¿cuál usar en tu negocio?"
description: "Cuándo usar tiquete POS y cuándo factura electrónica DIAN. Explicado para tiendas, restaurantes y cualquier negocio que venda a consumidor final."
publishedAt: 2026-05-23
author: "Equipo Emprenddi"
category: "Facturación electrónica"
tags: ["POS", "DIAN", "factura electrónica", "documento equivalente"]
readingMinutes: 6
---

Si tienes un punto de venta físico, una pregunta común es: "¿necesito emitir factura electrónica DIAN a TODO el que me compra, o puedo seguir usando el tiquete POS?"

La respuesta corta: **depende del cliente**. Vamos por partes.

## Las dos opciones que tienes

### 1. Tiquete POS (Documento Equivalente)

Es ese tiquete blanco y pequeño que sale de la impresora térmica de la caja. Tiene:
- Nombre del negocio + NIT
- Lista de productos comprados
- Total con IVA
- Número de la transacción

**No requiere CUFE de la DIAN**. Es un **documento equivalente** a la factura, autorizado por una **resolución especial de la DIAN para POS** (`resolución de talonarios` o `resolución de equivalentes`).

### 2. Factura electrónica DIAN

Es la factura completa con:
- Datos completos del cliente (nombre, NIT)
- CUFE (código único validado por DIAN)
- Código QR para verificación
- Firma electrónica del emisor

Se transmite a la DIAN antes de entregarse al cliente.

## ¿Cuándo usar cada una?

| Situación | Documento a usar |
|---|---|
| Cliente de mostrador sin NIT, compra de $5.000 | **Tiquete POS** |
| Cliente de mostrador sin NIT, compra de $500.000 | **Factura electrónica** |
| Cliente empresa que pide factura para descontar IVA | **Factura electrónica** (siempre) |
| Cliente persona natural que pide factura nominativa | **Factura electrónica** |
| Cliente persona natural sin NIT, compra menor a 5 UVT | **Tiquete POS** está OK |

> **Regla práctica**: para venta de mostrador rápida a consumidor final con bajo monto, **tiquete POS**. Para venta B2B o cualquier cliente que pida factura nominativa, **factura electrónica**.

## La regla del monto: 5 UVT

La DIAN dice que si el cliente compra por más de **5 UVT** (~$240.000 en 2026), el comprador puede exigir factura electrónica nominativa. Tú estás obligado a emitírsela aunque sea persona natural.

En tu POS, esto debería ser un flag automático: al pasar el umbral, pregunta al cliente si requiere factura electrónica.

## Diferencias técnicas resumidas

| Característica | Tiquete POS | Factura Electrónica |
|---|---|---|
| Resolución DIAN | Sí, distinta a la electrónica | Sí, electrónica |
| CUFE | No | Sí |
| Código QR | No (opcional) | Sí |
| Transmisión a DIAN en tiempo real | No | Sí |
| Identifica al cliente | No (opcional) | Sí (obligatorio) |
| Tamaño de papel típico | 58mm o 80mm térmica | A4 o A5 (PDF) |
| Velocidad de emisión | Instantánea (segundos) | Segundos también si está bien integrado |
| Validez como soporte tributario | Limitada | Completa |

## ¿Y si vendo a un cliente sin NIT? ¿Cómo le hago factura electrónica?

La DIAN permite emitir factura electrónica a **consumidor final** con:
- Documento: CC
- Número: el real del cliente, o `222222222` para "Consumidor Final" genérico
- Nombre: "Consumidor Final" o el nombre real

Tu sistema POS debería tener este cliente pre-configurado. En Emprenddi, por ejemplo, se crea automáticamente cuando registras tu empresa.

## Errores comunes

### ❌ Emitir solo tiquete POS a empresas
Una empresa no puede descontar IVA con un tiquete POS. Si tu cliente es empresa, **debes emitirle factura electrónica** o se molesta y no te volverá a comprar.

### ❌ No tener resolución POS vigente
Las resoluciones DIAN vencen (por fecha o por consumir todo el rango). Si vence, no puedes seguir emitiendo. Renueva con anticipación.

### ❌ Usar el mismo prefijo POS y electrónico
Cada tipo de documento tiene su prefijo único. Mezclarlos genera líos en la DIAN.

### ❌ No guardar copia digital del tiquete POS
Aunque sea papelito, contablemente cuenta. Tu sistema debe guardar todo en BD por al menos 5 años (norma DIAN).

## Lo ideal: un sistema que maneje ambos

El mejor escenario es un POS que **emita tiquete POS por defecto** y, con un solo click, **emita factura electrónica** cuando el cliente la pida. Así no haces dos sistemas paralelos.

Eso es lo que hace Emprenddi: el cajero vende, el POS imprime tiquete; si el cliente dice "necesito factura electrónica", se cambia el botón y la siguiente venta sale a DIAN.

## Conclusión

No tienes que elegir entre uno u otro: **usa los dos**, según el cliente. La mayoría de POS modernos lo manejan automático.

Lo importante:
1. Tener resolución POS vigente para tiquetes rápidos.
2. Tener resolución electrónica (con certificado y proveedor tecnológico) para B2B y ventas grandes.
3. Configurar bien quién es "Consumidor Final" para ventas anónimas.
4. Capacitar al cajero para identificar cuándo cambiar de modo.

> **¿Quieres ver cómo Emprenddi maneja ambos tipos de documentos sin que el cajero se confunda?**
> [Solicita una demo de 30 minutos](/contacto) y te lo mostramos.

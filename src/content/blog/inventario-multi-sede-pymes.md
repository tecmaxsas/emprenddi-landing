---
title: "Cómo manejar inventario en varias sedes sin volverte loco"
description: "Guía para PyMEs colombianas con 2 o más tiendas o bodegas: cómo llevar stock independiente, hacer transferencias entre sedes y consolidar reportes."
publishedAt: 2026-05-20
author: "Equipo Emprenddi"
category: "Inventario"
tags: ["inventario", "multi-sede", "PyMEs", "POS"]
readingMinutes: 6
---

Si tu negocio creció a **2 o más sedes** (tiendas físicas, bodegas, o una mezcla), seguramente ya viviste alguno de estos dolores:

- Le dices al cliente "te lo mando de mi otra tienda" y resulta que tampoco hay stock allá.
- El cajero de una sede vende algo que el cajero de la otra ya había vendido.
- A fin de mes cuadras inventarios y descubres que faltan 30 unidades — pero no sabes en qué sede ni cuándo.
- Tu contador te pide "kardex consolidado" y tú no sabes ni qué es.

En este artículo te explicamos cómo se maneja inventario multi-sede **bien hecho**, sin que termine siendo un caos.

## El error más común: un solo stock global

Mucha gente arranca con un Excel donde tienen "stock total de X producto". Cuando solo hay una sede está bien. **Cuando son varias, esto se vuelve mentira**.

> Si tienes 50 unidades de "Camiseta XL" en total pero 30 están en la tienda Norte y 20 en la tienda Sur, **no es lo mismo** que tener 50 en una sola bolsa. La cajera del Norte que vende basándose en el "stock total" puede prometer 40 cuando solo tiene 30 disponibles físicamente.

La regla #1: **cada sede debe tener su propio stock separado**.

## Cómo se modela bien: stock por sede

Un buen sistema de inventario maneja:

1. **El producto** (Camiseta XL) — catálogo único.
2. **El stock en cada sede** — independiente, calculado en tiempo real.
3. **Movimientos por sede** — cada venta, compra, ajuste, transferencia, queda registrado con sede.

Así, la cajera del Norte ve "30 disponibles" y la del Sur ve "20 disponibles". Si vendes una en Norte, baja a 29 SOLO en Norte. La del Sur sigue viendo 20.

## Las operaciones que necesitas

### 1. Compras a proveedor → entran a UNA sede específica

Cuando te llega mercancía del proveedor, no entra a un "stock global". Entra a la sede que la **recibió físicamente** (típicamente la bodega central).

Si pides 100 camisetas, llegan todas a tu bodega central. **Luego** las transfieres a las tiendas según necesidad.

### 2. Transferencias entre sedes

Cuando mueves stock de una sede a otra, debes registrarlo en el sistema. Una transferencia tiene **dos lados**:

- **Salida** de la sede origen (resta stock)
- **Entrada** a la sede destino (suma stock)

Ambos lados se generan automáticamente con un solo documento de transferencia.

**Importante**: si solo registras "saqué 10 de bodega" pero no "entraron 10 a tienda Norte", tu inventario queda descuadrado. Un buen sistema te obliga a hacer los dos lados juntos.

### 3. Ventas → salen de la sede del POS

Cada cajero está logueado en una sede específica. Cuando vende, el stock baja **solo en esa sede**.

### 4. Ajustes por sede

Si haces conteo físico en una tienda y descubres que faltan 3 unidades (probable pérdida o robo), haces un ajuste **en esa sede específica**, no en el "stock global".

### 5. Aperturas iniciales por sede

Al arrancar el sistema, cargas el stock inicial **por cada sede**. Si la bodega tiene 100 y cada tienda tiene 20, son 3 aperturas separadas.

## Tipos de sede

Un buen sistema te deja clasificar cada sede según su rol:

| Tipo | Características |
|---|---|
| **Tienda** | Vende a clientes finales. POS activo. Stock pequeño (lo que cabe en mostrador). |
| **Bodega** | No vende. Solo almacena y despacha. Stock grande. |
| **Mixta** | Vende y almacena. Típico para PyME que arranca con una sola sede. |
| **Virtual** | Para e-commerce, separado físicamente del mostrador. |

La distinción importa porque te ayuda a ver reportes filtrados: "ventas solo de tiendas", "stock solo en bodegas", etc.

## Reportes que necesitas tener

### Stock por sede (vista en vivo)

Una pantalla donde ves **qué hay en cada sede**, producto por producto. Útil para responder al cliente "¿en qué tienda tengo este producto?".

### Kardex por producto y sede

El histórico completo de movimientos: cuándo entró, cuándo salió, por qué, quién. Si descubres una diferencia, el kardex te dice exactamente cuándo ocurrió.

### Reporte de transferencias

Histórico de movimientos entre sedes. Útil para detectar "siempre se pierde stock en la transferencia hacia X tienda" (puede ser robo del transportador).

### Reporte consolidado

Ventas, stock y movimientos **sumados de todas las sedes**, para análisis de negocio. "Esta semana facturamos $30M en total, de los cuales $20M fueron de tienda Centro".

## Errores frecuentes y cómo evitarlos

### ❌ Cajero con acceso a varias sedes a la vez

Si un cajero puede vender desde la sede que quiera, va a usar la que tenga stock disponible — descontando de inventarios que no le corresponden. **Cada usuario asignado a UNA sede activa por turno**.

### ❌ No usar transferencias formales

"Pasame 10 camisetas a tu tienda" → el otro cajero las recibe pero nadie hace la transferencia en el sistema. Resultado: en el sistema dice que la sede origen tiene 30 unidades cuando físicamente solo tiene 20. **Toda transferencia debe quedar registrada**.

### ❌ Compras "fantasma" sin sede

Algunos sistemas permiten registrar una compra "general" sin asignarla a sede. **Mal**. Todo lo que entra debe entrar a una sede específica.

### ❌ Apertura de inventario sin sede

Cuando arrancas el sistema, si cargas "100 unidades" sin decir en qué sede están, el sistema asume una por default y el caos empieza desde el día 1.

## El sistema contable también necesita saber

Cuando vendes desde sede A vs sede B, contablemente puede haber diferencias:
- Diferentes **resoluciones DIAN** (cada sede con su prefijo y consecutivo)
- Diferentes **centros de costo** (si quieres separar P&G por sede)
- Diferentes **cuentas bancarias** (si cada sede deposita en una cuenta distinta)

Un buen software contable + POS te permite configurar todo esto **sin que el cajero tenga que pensarlo**: él vende, el sistema asigna la sede correcta automáticamente.

## Cuándo migrar a multi-sede en el software

Si todavía tienes 1 sede y planeas abrir la segunda, **prepara el sistema antes**:

1. Crea la segunda sede en el sistema (aunque aún esté vacía).
2. Asigna usuarios y roles a cada sede.
3. Configura impresoras por sede.
4. Define plantillas de impresión por sede si es distinta.
5. Carga la apertura cuando físicamente abras.

Si arrancas la segunda sede sin preparar el sistema, los primeros 15 días son caóticos.

## Conclusión

Multi-sede no es difícil — es **disciplina**. Cada operación (compra, venta, transferencia, ajuste) tiene que estar **vinculada a una sede específica**. Si tu software te lo facilita, gobiernas el caos. Si tu sistema permite "operaciones sin sede", tarde o temprano tu inventario se descuadra.

> **¿Manejas varias sedes y tu inventario es un caos?**
> Emprenddi maneja multi-sede de verdad: cada tienda con su stock, sus consecutivos, su impresora y sus reportes. Transferencias automáticas con asiento contable correcto.
> [Solicita una demo](/contacto) y te mostramos cómo se ve el inventario consolidado.

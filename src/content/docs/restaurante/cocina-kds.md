---
title: Cocina (KDS)
description: Pantalla de cocina (Kitchen Display System) en vivo. Comandas a impresora térmica.
sidebar:
  order: 4
---

El **KDS (Kitchen Display System)** es la pantalla que ve el cocinero con los pedidos en vivo. Reemplaza los papelitos en cocina y permite marcar items como listos.

## Acceso

Panel App → **Restaurante** → **Cocina (KDS)**.

Diseñado para abrir en una **tablet o PC con pantalla grande** en cocina, en modo pantalla completa.

## Layout

Cada **orden activa** es una tarjeta:

```
┌─────────────────────────────────┐
│ Mesa M3 · Mesero: Juan          │
│ Recibido hace: 3 min            │
├─────────────────────────────────┤
│ 🍕 Pizza Mediana                │
│    Masa rellena, +Queso, +Piña  │
│                                 │
│ 🥤 Coca-Cola 350ml × 2          │
│                                 │
│ 🍟 Papas francesas              │
├─────────────────────────────────┤
│ [Marcar todo como listo]        │
└─────────────────────────────────┘
```

## Filtro por categorías

Cada **estación de cocina** (parrilla, ensaladas, repostería, barra) puede tener su propia pantalla filtrada:

**KDS → Configuración → mostrar solo categorías [X, Y, Z]**.

El cocinero de parrilla ve solo carnes; el de barra solo bebidas.

## Estados de un item

| Estado | Color |
|---|---|
| `pending` (recién enviado) | Amarillo / Naranja |
| `in_preparation` (cocinero comenzó) | Azul |
| `ready` (listo, mesero recoge) | Verde |
| `delivered` (mesero entregó al cliente) | Gris (se va de la pantalla) |
| `cancelled` (cancelado en el camino) | Rojo / tachado |

## Marcar como listo

El cocinero hace tap en el item o en la tarjeta entera:

- Item se marca `ready` → el **mesero ve la notificación** en su POS
- Si toda la orden está lista → tarjeta cambia a verde brillante

## Tiempos

Cada tarjeta muestra cuánto tiempo lleva pendiente:

- 0-5 min: verde
- 5-10 min: amarillo
- 10+ min: rojo (alerta, hay demora)

Útil para detectar cuellos de botella.

## Comandas impresas

Independiente del KDS, **cada item se imprime en la impresora correspondiente** según su categoría:

- Producto categoría "Bebidas" → impresora "Barra"
- Producto categoría "Comidas" → impresora "Cocina"

Configurable en cada [Impresora](/docs/administracion/impresoras-qz-tray/).

> Algunos restaurantes prefieren solo KDS (no papel). Otros usan ambos (KDS para visibilidad + papel para llevar a la estación física). Tu decides.

## Cancelar item desde KDS

Si el mesero llama y dice "el cliente cambió de opinión, no quiere la pizza":

- KDS → item → **Cancelar**
- El item queda `cancelled`, no se prepara
- El POS del mesero ve la actualización
- Asiento contable no afectado (no se contabilizó nada todavía)

## Reabrir item

Si por error marcaste como listo algo que aún no estaba:

- Click en item ya `ready` → **Reabrir** → vuelve a `in_preparation`

## Estadísticas

- **Tiempo promedio de preparación** por estación
- **Items más vendidos** del día
- **Tiempos pico** del día (hora más demandante)

## Próximos temas

- [POS Restaurante](/docs/restaurante/pos-restaurante/)
- [Impresoras QZ Tray](/docs/administracion/impresoras-qz-tray/)
- [Modificadores](/docs/restaurante/modificadores/)

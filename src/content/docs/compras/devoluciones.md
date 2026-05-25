---
title: Devoluciones a Proveedor
description: Devolver mercancía al proveedor con asiento contable y movimiento de inventario inverso.
sidebar:
  order: 3
---

Cuando le devuelves mercancía a un proveedor (por defectos, error en envío, exceso de pedido), debes registrarlo formalmente para que **el inventario y la contabilidad reflejen la realidad**.

## Acceso

Panel App → **Compras** → **Devoluciones a Proveedor** → **Nueva**.

O desde una **factura de compra ya posteada** → botón **"Crear devolución"**.

## Datos

- **Factura de compra de origen** (vinculación obligatoria)
- **Sede que devuelve**
- **Fecha de devolución**
- **Líneas** a devolver:
  - Producto (heredado de la factura origen)
  - Cantidad devuelta (puede ser parcial)
  - Costo unitario (heredado)
- **Motivo** (defecto, vencimiento, error, exceso, otro)
- **Notas**

## Postear

Click **Contabilizar**. El sistema:

1. **Movimiento inventario** tipo `return_to_supplier`:
   - Sale del stock de la sede
   - El costo se mantiene como el de entrada original

2. **Asiento contable de reversa** (proporcional si es parcial):
   - DR Proveedores (220505) — reduce CxP
   - CR Mercancías (1435) — sale del inventario
   - CR IVA descontable (240810) — reversa IVA tomado

3. **Si había seriales** del producto devuelto:
   - Los seriales devueltos pasan a estado `returned`
   - Quedan vinculados al documento de devolución

4. **Saldo CxP del proveedor** se reduce.

## Caso especial: devolución de algo ya pagado

Si la factura original **ya estaba pagada** al hacer la devolución, el proveedor te debe ahora:

- **Nota crédito del proveedor**: él te emite NC que aplicas contra futuras compras
- **Reembolso en efectivo/transferencia**: te devuelve el dinero

En cualquier caso, el sistema actualiza CxP y queda en saldo a tu favor (negativo) si no hay nada que compensar.

## Si la factura tiene retenciones

Las retenciones que se practicaron en la factura original también se reversan proporcionalmente en el asiento de devolución. La DIAN ya está informada.

## Anular devolución

Si registraste mal una devolución:

**Devolución posteada → botón "Anular"** → el sistema:
- Devuelve la mercancía al inventario
- Reversa el asiento contable
- Si había seriales en `returned`, vuelven a `in_stock`

## Reportes

- **Devoluciones del periodo** — para análisis de calidad de proveedores
- **Devoluciones por proveedor** — patrones (proveedor X siempre tiene defectos)
- **Devoluciones por producto** — categorías problemáticas

## Próximos temas

- [Factura de Compra](/docs/compras/factura-compra/)
- [Pagos a Proveedores](/docs/compras/pagos-proveedores/)

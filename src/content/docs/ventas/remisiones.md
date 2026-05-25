---
title: Remisiones (Delivery Notes)
description: Despachar mercancía sin facturar todavía. Útil para distribuidoras y B2B con facturación mensual.
sidebar:
  order: 5
---

Las **remisiones** (o "delivery notes") son documentos que **acompañan el envío físico de mercancía** sin generar todavía la factura. Útiles para:

- **Distribuidoras**: el cliente recibe mercancía a lo largo del mes y al final se le hace **una sola factura consolidada**.
- **Ventas a crédito grandes**: la mercancía sale, el cliente la recibe, después se factura formalmente.
- **Despachos a obras o sucursales** del cliente.

## Diferencia con factura

| Aspecto | Remisión | Factura |
|---|---|---|
| Genera asiento contable | No (solo movimiento inventario) | Sí (asiento completo) |
| Sale inventario | **Sí** (al despachar) | Solo si no vino de remisión |
| Va a DIAN | No | Sí (si es electrónica) |
| Genera CxC | No | Sí |
| Crea costo de ventas | No | Sí (al facturar) |

> **El inventario sale en el despacho de la remisión**. La factura posterior solo registra el ingreso contable, no afecta inventario de nuevo.

## Crear remisión

**Panel App → Ventas → Remisiones → Nueva.**

Formulario similar al de factura:

- Cliente
- Sede de despacho
- Fecha de remisión
- Líneas con producto y cantidad (no se cobra precio acá, eso va en la factura)
- Notas

Click **Guardar**. Queda en estado `draft`.

## Estados de una remisión

| Estado | Significado |
|---|---|
| `draft` | Borrador, sin despachar |
| `dispatched` | Mercancía salió de inventario, en tránsito |
| `delivered` | Cliente confirmó recepción |
| `billed` | Ya se convirtió en factura |
| `cancelled` | Anulada |

## Despachar

**Vista remisión → botón "Despachar"**.

Esto:
1. **Crea movimiento de inventario** tipo `delivery_out` por cada línea
2. Marca remisión como `dispatched`
3. La mercancía sale del stock de la sede origen

> **Importante**: el cliente recibe físicamente la mercancía con la remisión impresa. No le entregas factura todavía.

## Convertir remisión en factura

Cuando llegue el momento de facturar (puede ser al cabo de días/semanas):

**Remisión despachada → botón "Convertir a factura"**.

Se crea una **factura de venta** con:
- El mismo cliente
- Las mismas líneas con sus precios
- El asiento de venta normal (DR Cliente / CR Ventas + IVA)
- **NO crea movimiento de inventario** (el inventario ya salió en la remisión)
- **Sí crea asiento de COGS** porque el costo de ventas se reconoce al facturar

La remisión queda marcada como `billed` y enlazada a la factura.

## Facturar varias remisiones juntas

Si tienes 5 remisiones del mes de un mismo cliente y quieres facturar todo en una sola factura:

**Cliente → ver remisiones pendientes → seleccionar varias → Convertir a factura conjunta**.

El sistema crea una factura con las líneas de todas las remisiones (puede sumar líneas iguales o mantenerlas separadas según prefieras).

## Anular remisión

Bloqueada si ya fue facturada (anula la factura primero).

Si está en `dispatched`, al anular el sistema:
1. Devuelve la mercancía al inventario (movimiento inverso)
2. Marca como `cancelled`

## Reportes

- **Remisiones pendientes de facturar** por cliente — para no olvidar facturar nada
- **Remisiones por sede** — qué tanto se despacha desde cada bodega

## Próximos temas

- [Facturas de Venta](/docs/ventas/factura-venta/)
- [Notas Crédito / Débito](/docs/ventas/notas-credito-debito/)

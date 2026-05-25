---
title: Notas Crédito / Débito
description: Modificar facturas ya emitidas. Cuándo usar cada una, cómo crearlas y enviar a DIAN.
sidebar:
  order: 6
---

Las **Notas Crédito (NC)** y **Notas Débito (ND)** son documentos electrónicos que modifican una factura ya emitida y aceptada por DIAN. **No puedes editar una factura electrónica aceptada** — la única forma es emitir una nota.

## Cuándo usar Nota Crédito

Una **NC** reduce el valor a cargo del cliente. Casos típicos:

- **Devolución total o parcial** de mercancía
- **Descuento posterior** otorgado al cliente
- **Anulación** de la factura completa (por error de emisión)
- **Corrección de precios** a la baja

## Cuándo usar Nota Débito

Una **ND** aumenta el valor a cargo del cliente. Más rara, casos típicos:

- **Cobro de intereses de mora**
- **Cargo adicional** por servicios extra no facturados
- **Corrección al alza** de precios facturados por debajo

## Resolución DIAN

Las notas tienen su **propia resolución** (distinta a la de factura):

- **Tipo documento DIAN**: `2` Nota crédito, `3` Nota débito
- **Prefijo propio** (ej. `NC`, `ND`)
- **Rango propio**

Configúralas igual que las resoluciones de factura. Ver [Resoluciones POS y electrónicas](/docs/ventas/resoluciones-pos/).

## Crear nota crédito

### 1. Desde la factura original

**Facturas de Venta → ver factura → botón "Crear Nota Crédito"**.

La NC nace **vinculada a la factura origen**. El sistema requiere esta vinculación por norma DIAN.

### 2. Llenar el motivo

- **Causal DIAN**: selecciona del catálogo (devolución, descuento, anulación, etc.)
- **Observaciones**: descripción libre

### 3. Definir líneas

Puedes hacer:

**NC total** — copia exacta de las líneas de la factura, anula todo
**NC parcial** — solo las líneas/cantidades a devolver/ajustar

Por ejemplo, si la factura tenía 10 unidades de un producto y el cliente devolvió 3, la NC parcial tiene 3 unidades.

### 4. Guardar y postear

Igual que con factura, primero `draft` y después `posted`. Al postear:

1. **Reversa inventario** (si fue devolución de mercancía)
2. **Reversa asiento contable** (proporcional si es parcial)
3. **Envía a DIAN** (recibe CUDE — Código Único de Documento Electrónico)
4. **Reduce saldo CxC** del cliente

## Crear nota débito

Similar a NC pero **aumenta** el valor:

**Facturas de Venta → ver factura → botón "Crear Nota Débito"** → ingresa monto adicional, conceptos.

Al postear:
1. Suma al CxC del cliente
2. Genera asiento (DR Cliente / CR Ingresos extra o cuenta correspondiente)
3. Envía a DIAN

## Efecto en seriales (electrónica)

Si la factura original incluía productos con seriales (computadores, etc.):

- **NC total**: los seriales vuelven a estado `in_stock` (disponibles para vender de nuevo)
- **NC parcial**: solo los seriales devueltos vuelven a `in_stock`

Ver [Seriales](/docs/inventario/seriales/).

## NC para Anular Factura

Si la factura original tenía errores graves (cliente equivocado, productos mal, etc.) **y ya fue aceptada por DIAN**, no la puedes anular. La opción es:

1. Crear **NC total** con causal "Anulación"
2. Crear una **nueva factura** con los datos correctos

El efecto contable y fiscal queda neutro: la factura original sigue existiendo en el histórico, pero la NC la anula.

## Enviar a DIAN

Las NC/ND electrónicas se transmiten a DIAN igual que las facturas. Estados:

| Estado | Significado |
|---|---|
| `pending` | En cola |
| `sent` | En DIAN |
| `accepted` | DIAN aceptó. Llega CUDE |
| `rejected` | DIAN rechazó (revisar causal o líneas) |

## Restricciones

- NC/ND solo aplica a facturas **electrónicas posteadas**
- No se pueden encadenar NC sobre NC (siempre desde la factura origen)
- Si la factura original está `cancelled` (anulada antes de ir a DIAN), no necesitas NC

## Reportes

- **NC del periodo** — agrupadas por causal
- **Impacto en ventas netas** — ventas brutas menos NC = ventas netas
- **NC pendientes en DIAN** — para seguimiento

## Próximos temas

- [Facturas de Venta](/docs/ventas/factura-venta/)
- [Factura electrónica DIAN](/docs/ventas/factura-electronica-dian/)

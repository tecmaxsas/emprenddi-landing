---
title: Factura de Compra
description: Registrar facturas de proveedores, contabilizarlas, generar asiento e ingresar al inventario.
sidebar:
  order: 1
---

La **Factura de Compra** es el documento donde registras lo que un proveedor te facturó. Al contabilizarla, genera el asiento contable correspondiente y suma al inventario.

## Acceso

Panel App → **Compras** → **Facturas de Compra**.

Tabs:
- **Borradores** — sin postear, editables
- **Posteadas** — contabilizadas
- **Anuladas**

## Crear factura de compra

### 1. Click "Nueva"

### 2. Cabecera

| Campo | Notas |
|---|---|
| **Prefijo + Número** | Del proveedor (ej. `FACT-001234`) |
| **Proveedor** | Buscar por NIT o nombre |
| **Sede que recibe** | Donde entrará la mercancía |
| **Fecha factura** | La del documento del proveedor |
| **Plazo pago (días)** | Crédito otorgado (0 si es contado) |
| **Fecha vencimiento** | Calculada automática |
| **N° proveedor** (opcional) | Si quieres guardar el número físico aparte |
| **Moneda** | COP por defecto |

### 3. Líneas

Por cada ítem:
- **Producto** (autocompleta unidad, impuesto compra, cuenta inventario)
- **Descripción** (editable)
- **Cantidad**
- **Costo unitario** (sin IVA)
- **Descuento %**
- **Impuesto** (típicamente IVA-19)

Sistema calcula: subtotal, descuento, IVA, total por línea + generales.

### 4. Captura de seriales (si aplica)

Si algún producto tiene **"Maneja seriales"** activado, aparece un campo `TagsInput` para capturar los números de serie. La cantidad de seriales debe coincidir EXACTAMENTE con la cantidad comprada.

Puedes pegar listas desde Excel (separadas por enter, espacio o coma).

Ver [Seriales](/docs/inventario/seriales/).

### 5. Guardar como borrador

Click **Guardar**. Estado: `draft`. No afecta inventario ni contabilidad todavía.

## Contabilizar (Postear)

Cuando todo está correcto y verificado contra la factura física:

### Click "Contabilizar"

El sistema, en una transacción atómica:

1. **Movimiento de inventario** (tipo `purchase`) por cada línea:
   - Suma al stock de la sede
   - Recalcula **costo promedio ponderado**

2. **Asiento contable**:

   | Cuenta | Débito | Crédito |
   |---|---|---|
   | 143505 Mercancías | subtotal | |
   | 240810 IVA descontable | iva | |
   | 220505 Proveedores | | total |

3. **Crea ProductSerial** records si hay seriales:
   - Status `in_stock`
   - Vinculados a la línea de compra
   - Validación: no duplicar seriales existentes

4. **Cartera con proveedor**:
   - Aumenta CxP por el total
   - Aparece en reporte CxP del tercero
   - Vencimiento según plazo

5. Marca factura `posted`.

## Registrar pago al proveedor

Cuando le pagas (puede ser ese día o después):

### 1. Desde la factura

**Ver factura → botón "Registrar pago"**.

### 2. Llenar

- **Monto** (puede ser parcial)
- **Fecha**
- **Método pago**: efectivo, transferencia, cheque, etc.
- **Cuenta**: banco/caja desde donde sale
- **Referencia**: # transacción, # cheque

### 3. Resultado

- Asiento: `DR 220505 Proveedores / CR Banco o Caja`
- Actualiza `paid_amount` y `payment_status`:
  - `pendiente` → sin pagos
  - `parcial` → algo pagado
  - `pagado` → total
  - `vencido` → fecha vencimiento pasó con saldo

## Anular factura de compra

**Bloqueado si**:
- Tiene pagos registrados → reversa los pagos primero
- Algún serial ya se vendió → anula primero las ventas que los consumieron

**Si está apta**:
- Devuelve el inventario al proveedor (movimiento `return_to_supplier`)
- Crea asiento de reversa (DR↔CR del original)
- Soft-delete de los seriales que entraron
- Marca como `cancelled`

## Caso especial: proveedor sin factura electrónica

Si tu proveedor es **no responsable de IVA** o **persona natural pequeña** que no factura electrónicamente, debes emitir TÚ un **Documento Soporte Electrónico** en lugar de Factura de Compra. Ver [Documento Soporte](/docs/compras/documento-soporte/).

## Próximos temas

- [Documento Soporte Electrónico](/docs/compras/documento-soporte/)
- [Devoluciones a Proveedor](/docs/compras/devoluciones/)
- [Pagos a Proveedores](/docs/compras/pagos-proveedores/)

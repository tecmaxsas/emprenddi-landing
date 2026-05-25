---
title: 6. Registrar tu primera compra
description: Cómo digitar una factura de proveedor, asignarle inventario y generar el asiento contable correcto.
sidebar:
  order: 5
---

Registrar compras correctamente es **tan importante como vender bien**: aquí entra el costo real de tu mercancía y arranca la cadena de inventario → costo de ventas → utilidad.

## Antes de empezar

Necesitas:

- [ ] La **factura física o electrónica** del proveedor
- [ ] El **proveedor** dado de alta en terceros (con NIT correcto)
- [ ] Los **productos** que vas a comprar ya creados en el sistema

Si el proveedor o los productos no existen aún, créalos primero (se puede crear "al vuelo" desde el formulario de compra).

## Paso 1: Crear factura de compra

### 1.1 Ir al menú

Panel App → **Compras** → **Facturas de Compra** → **Nueva**.

### 1.2 Llenar cabecera

- **Tipo**: `Factura de compra`
- **Prefijo y número**: el del proveedor (lo ves en su factura física)
- **Proveedor**: buscar y seleccionar
- **Sede que recibe**: dónde va a entrar la mercancía
- **Fecha de factura**: la que figura en el documento del proveedor
- **Plazo de pago (días)**: ej. 30 si te dan 30 días crédito; 0 si pago contado
- **Fecha vencimiento**: se calcula sola con base en plazo (o ajustas)
- **Moneda**: COP

### 1.3 Agregar líneas

Por cada producto que compraste:

- **Producto**: buscar por código o nombre
- **Cantidad**: la que entra a inventario
- **Costo unitario**: lo que te costó cada unidad SIN IVA
- **Descuento %**: si el proveedor te dio descuento
- **Impuesto**: el IVA que el proveedor te cobró (típicamente IVA-19)

El sistema calcula automáticamente: subtotal, descuento, IVA y total.

### 1.4 Notas (opcional)

Agrega cualquier nota interna (ej. "Pedido entregado completo el 14/05").

### 1.5 Guardar como borrador

Click **Guardar**. La factura queda en estado `draft`. **Aún no afecta inventario ni contabilidad.**

## Paso 2: Verificar totales

Revisa que el **total que calculó el sistema** sea **idéntico** al total de la factura física del proveedor.

Si no coincide:
- Revisa el IVA — ¿el proveedor cobró 19% o 5%?
- Revisa si hay descuentos no capturados
- Revisa que las cantidades sean exactas

**No avances si los totales no cuadran** — corrige primero.

## Paso 3: Contabilizar (Postear)

Cuando todo está bien, click en **Contabilizar** (botón verde arriba a la derecha).

El sistema te muestra un modal de confirmación:

> "Vas a contabilizar la factura POS-XX por $XX. Se generará el asiento contable y los movimientos de inventario. No podrás editarla después."

Click **Contabilizar**.

## Qué pasa al contabilizar

Tres cosas en paralelo, todo automático:

### 1. Movimiento de inventario

Por cada línea con producto que controla inventario:

- Entra al stock de la sede
- Se calcula el **nuevo costo promedio ponderado** del producto

Ejemplo: tenías 100 unidades a $5.000 (= $500.000 valorizado). Compraste 100 más a $6.000 (= $600.000). Ahora tienes 200 unidades a costo promedio **$5.500** (= $1.100.000).

### 2. Asiento contable

| Cuenta | Débito | Crédito |
|---|---|---|
| 1435 Mercancías | (subtotal) | |
| 240810 IVA descontable | (IVA) | |
| 220505 Proveedores nacionales | | (total) |

(Con el tercero del proveedor en la cuenta CxP).

### 3. Cartera con el proveedor

La factura queda registrada como **cuenta por pagar** al proveedor. La verás en:

- Panel App → **Contabilidad** → **Cuentas por pagar**
- También en el detalle del tercero

## Paso 4: Pagar la factura (después)

Cuando le pagas al proveedor (mismo día o más adelante):

### 4.1 Abrir la factura

**Compras → Facturas de Compra →** buscar la factura → **Ver**.

### 4.2 Click en "Registrar pago"

- **Monto**: cuánto pagaste (puede ser parcial)
- **Fecha**: cuándo pagaste
- **Método de pago**: efectivo, transferencia, cheque, etc.
- **Cuenta**: caja, banco origen
- **Referencia**: # de transferencia o # cheque (opcional)

Click **Guardar pago**.

### 4.3 El sistema genera asiento de pago

| Cuenta | Débito | Crédito |
|---|---|---|
| 220505 Proveedores | (monto pagado) | |
| 110505 Caja o 1110xx Banco | | (monto pagado) |

Y actualiza el `payment_status` de la factura:

- `pendiente` → si no pagaste nada
- `parcial` → si pagaste menos del total
- `pagado` → si pagaste el total
- `vencido` → si pasó la fecha de vencimiento sin pagar todo

## Errores comunes

### "El total no me cuadra"
- ¿Marcaste bien el IVA? Algunos proveedores no cobran (régimen simplificado).
- ¿Hay retención en la fuente que aplicas tú? Si sí, debes hacerlo aparte.
- ¿Descuento incluido en el precio o aparte?

### "No puedo contabilizar"
- Verifica que el proveedor tenga **cuentas contables asignadas** (típicamente 220505).
- Verifica que el producto controle inventario y tenga `inventory_account_id`.
- Verifica que tengas permiso `purchases.post`.

### "La factura no aparece en CxP"
- Asegúrate de haberla **posteado** (estado debe ser `posted`, no `draft`).
- Verifica que el proveedor esté correctamente vinculado.

### "Quiero anular una factura ya posteada"
Desde la vista de la factura → botón **Anular factura**. Esto:
- Devuelve el inventario al proveedor (salida del stock)
- Crea un asiento de reversa que neutraliza el original
- **Bloqueado** si la factura tiene pagos registrados (anula los pagos primero).

## Caso especial: documento soporte

Si tu proveedor es **no responsable de IVA** (régimen simplificado) o no te puede emitir factura electrónica, debes emitir tú un **Documento Soporte Electrónico**. Ver [Documento Soporte](/docs/compras/documento-soporte/).

## Próximos temas

- [Factura de compra detallada](/docs/compras/factura-compra/)
- [Documento soporte electrónico](/docs/compras/documento-soporte/)
- [Devoluciones a proveedor](/docs/compras/devoluciones/)
- [Pagos a proveedores](/docs/compras/pagos-proveedores/)

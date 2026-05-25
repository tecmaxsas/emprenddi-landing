---
title: Facturas de Venta
description: Creación, contabilización y gestión de facturas de venta (B2B). Para ventas largas que no van por POS.
sidebar:
  order: 2
---

Las **Facturas de Venta** son el documento contable principal de tus ventas. A diferencia del POS (orientado a venta rápida de mostrador), aquí trabajas con un formulario completo apto para B2B con muchas líneas, descuentos detallados, retenciones, etc.

## Cuándo usar Factura de Venta vs POS

| Característica | POS | Factura de Venta |
|---|---|---|
| Velocidad | Muy rápida (segundos) | Moderada (minutos) |
| Pensada para | Mostrador, alto volumen | B2B, ventas a empresas |
| Líneas típicas | 1-10 | 5-100 |
| Edición posterior | No (se contabiliza al cobrar) | Sí, mientras esté en `draft` |
| DIAN | Tiquete POS o electrónica | Casi siempre electrónica |
| Retenciones B2B | No | Sí |

> **Regla práctica**: usa POS para mostrador y mercancía rápida; usa Factura de Venta cuando le facturas a otra empresa, con muchos ítems y posiblemente retenciones.

## Acceso

Panel App → **Ventas** → **Facturas de Venta**.

Tabs:
- **Borradores** — facturas a medio armar
- **Posteadas** — ya contabilizadas
- **Anuladas** — reversadas

## Crear nueva factura

### 1. Click "Nueva factura"

### 2. Cabecera

| Campo | Notas |
|---|---|
| **Prefijo + Número** | Se asigna automáticamente del consecutivo. Cambiable si tienes permiso |
| **Cliente** | Buscar por nombre/NIT |
| **Sede** | Desde dónde vendes |
| **Fecha** | La fecha del documento |
| **Plazo (días)** | Si das crédito (ej. 30 días) |
| **Vencimiento** | Calculado automático con base en plazo |
| **Tipo factura** | `electronic` (DIAN) o `pos` (talonario local) |
| **Resolución DIAN** | Se autoselecciona según el tipo |
| **Vendedor** | Quién hizo la venta |
| **Moneda** | COP por defecto |

### 3. Agregar líneas

Para cada producto/servicio:

- **Producto** (autocompleta precio, impuesto y descripción)
- **Descripción** (puedes editarla si necesitas detalle distinto)
- **Cantidad**
- **Precio unitario**
- **Descuento %**
- **Impuesto** (IVA-19, IVA-5, etc.)

El sistema calcula automáticamente subtotal, descuento, IVA y total por línea + totales generales.

### 4. Retenciones (B2B)

Si tu cliente es **Gran Contribuyente** o **Agente Retenedor**, te aplica retenciones (fuente, IVA, ICA). El sistema sugiere las correctas según los flags `is_iva_withholder`, `is_self_withholder`, `is_ica_withholder` del cliente.

Click **Agregar retención** y elige tipo y tarifa. El sistema calcula el monto retenido y lo resta del **neto a pagar** (no del total facturado).

### 5. Notas

Texto libre que aparece en el PDF/ticket. Útil para condiciones, número de orden de compra del cliente, etc.

### 6. Guardar borrador

Click **Guardar** — queda en estado `draft`. Aún no afecta inventario ni contabilidad. Puedes editarla las veces que quieras.

## Contabilizar (postear)

Cuando todo está correcto:

### 1. Click "Contabilizar"

Botón verde arriba a la derecha.

### 2. Modal de confirmación

Muestra resumen de lo que se va a generar. Click **Contabilizar**.

### 3. El sistema hace (todo en una transacción):

1. **Reserva número DIAN** del consecutivo si es factura electrónica
2. **Crea movimiento de inventario** por cada línea con producto que controla stock (salida)
3. **Snapshot del costo** (`cost_at_sale`) — promedio ponderado vigente al momento
4. **Asiento de venta**:
   - DR Cuenta cobrar/Caja (según método)
   - CR Ventas (4135)
   - CR IVA generado (240805)
   - CR Retenciones (si aplica)
5. **Asiento de COGS** (si hubo inventario):
   - DR Costo de ventas (6135)
   - CR Inventario (1435)
6. Marca la factura como `posted`
7. Si es electrónica: la envía a **DIAN automáticamente**

## Envío a DIAN

Si la factura es de tipo `electronic` y al postearla todo fue bien, el sistema la transmite a la DIAN via el proveedor tecnológico configurado.

Respuestas posibles:

| `dian_status` | Significado |
|---|---|
| `pending` | Enviada, esperando respuesta |
| `sent` | Recibida por DIAN, en validación |
| `accepted` | DIAN la aceptó, llega CUFE + QR |
| `rejected` | DIAN la rechazó (motivo en `dian_error_message`) |

Si es rechazada, **anula la factura**, corrige el problema y emite una nueva (no puedes "re-enviar" la misma).

## Recibir pago

Cuando el cliente paga (al instante si es contado, después si es a crédito):

### 1. Desde la factura

**Facturas de Venta → ver factura → botón "Registrar pago"**.

### 2. Llenar

- **Monto** (puede ser parcial)
- **Fecha**
- **Método**: efectivo, transferencia, cheque, etc.
- **Cuenta**: caja o banco origen
- **Referencia**: # transacción

### 3. Resultado

- Se actualiza `paid_amount` y `payment_status`:
  - `pendiente` → no hay pagos
  - `parcial` → pagos menores al total
  - `pagado` → pagos cubren total
  - `vencido` → pasó fecha vencimiento y sigue con saldo
- Asiento contable:
  - DR Caja/Banco
  - CR Cuenta por cobrar (1305 con tercero)

## Anular factura

Si después de contabilizar te das cuenta de un error (cliente, monto, productos), puedes **anular**:

### Bloqueada si:
- Tiene pagos registrados — reversa los pagos primero
- Ya fue **aceptada por DIAN** — debes emitir **nota crédito** en su lugar
- Está en estado **sent** (esperando respuesta DIAN) — espera respuesta primero

### Si está apta:

**Vista factura → botón "Anular factura"** → confirmación.

El sistema:
1. Reversa inventario (entrada con tipo `return_from_customer`)
2. Crea asiento de reversa (DR↔CR del original) — efecto neto cero
3. Si tiene COGS, también lo reversa
4. Marca como `cancelled`

## Convertir cotización en factura

Si tenías una cotización aprobada (ver [Cotizaciones](/docs/ventas/cotizaciones/)) puedes convertirla en factura con 1 clic. Trae todos los datos: cliente, líneas, totales.

## Convertir remisión en factura

Si despachaste mercancía con remisión (ver [Remisiones](/docs/ventas/remisiones/)) y ahora vas a facturar, conviertes la remisión y la factura hereda los datos. El inventario YA salió en el dispatch — la factura solo suma costos para el asiento.

## Reportes relacionados

- **Ventas por periodo** — totales agrupados por día/semana/mes
- **Cartera (CxC)** — facturas pendientes de pago
- **Cuentas por cobrar vencidas** — alertas de cobranza

## Próximos temas

- [Factura electrónica DIAN — detalle](/docs/ventas/factura-electronica-dian/)
- [Cotizaciones](/docs/ventas/cotizaciones/)
- [Remisiones (Delivery Notes)](/docs/ventas/remisiones/)
- [Notas Crédito / Débito](/docs/ventas/notas-credito-debito/)

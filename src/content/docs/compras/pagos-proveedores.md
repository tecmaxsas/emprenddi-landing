---
title: Pagos a Proveedores
description: Registrar pagos totales o parciales, manejo de saldos y conciliación.
sidebar:
  order: 4
---

Cuando le pagas a un proveedor (sea al contado al recibir la factura o después si es a crédito), debes **registrar el pago** para que la cartera con proveedores se actualice y el asiento contable refleje la salida de dinero.

## Acceso

Tres formas:

1. **Desde la factura**: Compras → Facturas → ver → botón "Registrar pago"
2. **Desde el tercero**: Terceros → ver proveedor → tab Pagos → Nuevo
3. **Desde panel de Pagos**: Contabilidad → Pagos → Nuevo

## Datos

- **Factura a pagar** (selecciona del CxP del proveedor)
- **Monto**:
  - Total (default): paga el saldo completo
  - Parcial: cualquier monto menor
- **Fecha** del pago
- **Método de pago**: efectivo, transferencia, cheque, débito, crédito, etc.
- **Cuenta**: caja, banco origen
- **Referencia**: # transacción, # cheque (importante para conciliación bancaria)
- **Notas** (opcional)

## Postear

Click **Registrar**. El sistema:

1. **Asiento contable**:
   - DR Proveedores (220505) — reduce CxP
   - CR Banco o Caja (según método y cuenta) — sale el dinero

2. **Actualiza factura origen**:
   - `paid_amount` += monto
   - `payment_status`:
     - sigue `pendiente` si no llega al total
     - cambia a `parcial`
     - cambia a `pagado` al cubrir total

3. **Registra el pago en histórico** del tercero y del documento.

## Pagar varias facturas a la vez

Si haces un solo pago al proveedor que cubre **varias facturas** (común en pagos mensuales):

**Compras → Pagos → Nuevo → Pago masivo**:
- Selecciona proveedor
- El sistema muestra todas sus facturas pendientes
- Marca las que cubre este pago
- Ingresa el monto total y el sistema lo reparte FIFO (más antiguas primero) o como configures
- Genera **un solo asiento contable** consolidado

## Manejo de cheques

Si pagaste con cheque:

- **Método**: `check`
- **Referencia**: número del cheque
- **Cuenta**: la chequera del banco correspondiente

El cheque puede tener fecha de cobro futura. El sistema lo registra como pago `pendiente de canje`. Cuando el banco lo cobra (ves en extracto), marcas como `cobrado` y se asienta definitivamente.

## Anular un pago

**Pago registrado → Anular** → revierte el asiento y restaura el saldo de la factura.

Útil cuando:
- Pagaste por error a la factura incorrecta
- El banco rebotó la transferencia
- Cheque devuelto

## Conciliación bancaria

Al final del mes, cruzas los pagos registrados con el **extracto bancario** real para detectar:
- Pagos que registraste pero el banco no procesó
- Movimientos del banco que no registraste en el sistema
- Diferencias

Ver [Conciliación Bancaria](/docs/contabilidad/conciliacion-bancaria/).

## Reportes

- **Pagos por periodo** agrupados por método/cuenta
- **CxP vencidas** — alerta de pagos próximos a vencer
- **Flujo de caja** — entrada de ventas vs salida de pagos a proveedores

## Errores comunes

### "Pagué más de lo que debía"
El sistema te alerta si el pago excede el saldo de la factura. Si insistes (por anticipo), queda como saldo a favor del proveedor.

### "El proveedor dice que no le llegó"
Verifica:
- Que la cuenta destino sea correcta
- Que la referencia (# transferencia) sea la real del banco
- Que no haya error de digitación

### "Pagué con varios métodos a la vez"
Crea varios pagos sobre la misma factura, uno por método. El `payment_status` solo cambia a `pagado` cuando la suma cubre el total.

## Próximos temas

- [Factura de Compra](/docs/compras/factura-compra/)
- [Conciliación Bancaria](/docs/contabilidad/conciliacion-bancaria/)
- [Reportes — Cuentas por Pagar](/docs/contabilidad/reportes/)

---
title: Conciliación Bancaria
description: Cruzar movimientos del sistema vs extracto bancario. Detectar diferencias.
sidebar:
  order: 7
---

La **conciliación bancaria** es el proceso de cruzar los movimientos registrados en el sistema con los movimientos reales del extracto bancario, para detectar:

- Pagos registrados pero no procesados
- Movimientos del banco no capturados en el sistema
- Errores de digitación
- Comisiones del banco no contabilizadas

Se hace **mensualmente** como mínimo.

## Acceso

Panel App → **Contabilidad** → **Conciliación Bancaria**.

## Flujo

### 1. Descarga extracto del banco

Desde tu portal bancario (Bancolombia, Davivienda, BBVA, etc.) descarga el **extracto del mes** en formato Excel o PDF.

### 2. Importar al sistema

**Conciliación → Nueva → seleccionar cuenta bancaria**:

- Subir el archivo Excel o ingresar movimientos manualmente
- El sistema parsea: fecha, descripción, monto, referencia

### 3. Cruce automático

El sistema intenta **emparejar automáticamente** cada movimiento del banco con un movimiento del sistema usando:

- Monto exacto
- Fecha (o ±2 días de tolerancia)
- Referencia (# transacción)

### 4. Revisar diferencias

Quedan dos listas:

- **Conciliados** (✅): cruzaron OK
- **Sin conciliar** (⚠️): diferencias a investigar:
  - **En extracto, no en sistema**: movimiento que el banco hizo pero no capturaste (intereses ganados, comisiones cobradas, transferencias inesperadas)
  - **En sistema, no en extracto**: pago que registraste pero no se procesó (cheque sin canjear, transferencia rechazada)

### 5. Resolver cada diferencia

Por cada movimiento sin conciliar:

**Opción A: Crear asiento** para capturar el movimiento del banco no registrado:
- Intereses ganados → DR Banco / CR Ingresos financieros
- Comisión bancaria → DR Gasto bancario / CR Banco

**Opción B: Anular movimiento del sistema** que no se procesó (cheque rebotado, transferencia rechazada).

**Opción C: Marcar como diferencia justificada** (con nota): movimientos en tránsito que se conciliarán el siguiente mes.

### 6. Cerrar conciliación

Una vez todo cuadrado (o justificado), click **Cerrar conciliación**.

Queda histórico inmutable. El sistema marca todos los movimientos del periodo como `conciliados`.

## Recurrencia recomendada

- **Semanal**: si manejas muchos movimientos (>50/mes)
- **Mensual**: estándar para PyMEs
- **No menos de mensual**: si no concilias, los errores se acumulan y al final del año no hay manera de resolver

## Errores comunes

### "Faltan movimientos del banco en mi sistema"
Suelen ser:
- **Comisiones** bancarias (cuota de manejo, IVA sobre cuota, etc.)
- **Cuatro por mil** (GMF en Colombia)
- **Intereses ganados** por saldos a favor
- Transferencias que clientes hicieron sin avisar

Captura cada uno con asiento.

### "Pagué con cheque y el banco no lo refleja"
El cheque puede estar **sin canjear** (el beneficiario no lo ha llevado al banco). Hasta que lo canje, el asiento de pago queda registrado pero el banco no lo refleja. Diferencia justificable en notas.

### "Mi extracto no cuadra con mi auxiliar bancario"
Revisa:
- Fechas con desfase (banco lo registra al día siguiente)
- Comisiones que olvidaste capturar
- Transferencias entre tus propias cuentas (debe haber DR en una y CR en otra)

## Reporte: Auxiliar bancario

**Reportes → Libro Auxiliar → cuenta Banco** te muestra cada movimiento del sistema en esa cuenta para cruzar con tu extracto.

## Próximos temas

- [Asientos contables](/docs/contabilidad/asientos-contables/)
- [Reportes](/docs/contabilidad/reportes/)
- [Pagos a Proveedores](/docs/compras/pagos-proveedores/)

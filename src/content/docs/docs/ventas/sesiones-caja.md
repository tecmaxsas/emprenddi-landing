---
title: Sesiones de Caja
description: Apertura, manejo durante el turno y cierre de caja del cajero. Cuadre de efectivo y reportes históricos.
sidebar:
  order: 7
---

Una **sesión de caja** es un turno del cajero: empieza con la **apertura** (digitando el monto inicial) y termina con el **cierre** (digitando lo que físicamente contó). El sistema lleva todo lo vendido en medio.

Las sesiones son la base para:
- **Cuadrar el efectivo** al final del turno (detectar faltantes o sobrantes)
- **Reportes Z** históricos
- **Auditoría** de qué cajero vendió qué

## Abrir caja

El POS te lo pide al entrar si no tienes sesión activa.

**Datos**:
- **Sede**: dónde estás operando
- **Monto inicial**: efectivo físico en caja al empezar (cambio chico, etc.). Si arrancas con caja vacía pon `0`.
- **Notas** (opcional): "Turno mañana — Juan"

Click **Abrir caja**. Empieza el turno.

## Durante el turno

Todas las ventas, anulaciones y movimientos quedan vinculadas a la sesión. Al final el sistema sabe:

- **Total vendido en efectivo**: suma de cobros con método `cash`
- **Total vendido por tarjeta/transferencia/etc.**: agrupado por método
- **Anulaciones**: si las hubo, descuentan del esperado
- **Movimientos manuales de caja** (sacar dinero para gastos pequeños, recibir abonos)

## Movimientos manuales

A veces el cajero saca o mete efectivo durante el turno por motivos no de venta:

### Egreso de caja chica

"Compré papelería por $30.000 en efectivo".

**POS → menú "Movimientos" → Egreso**:
- Monto
- Cuenta destino (5xxx Gasto papelería)
- Notas

El sistema:
- Resta del esperado de cierre
- Crea asiento DR Gasto / CR Caja

### Ingreso a caja

"Le hice un abono al proveedor y me devolvió $50.000 en efectivo, lo meto a caja".

Similar al egreso pero sumando.

## Cerrar caja

Al final del turno:

### 1. Click "Cerrar caja"

Arriba a la derecha del POS.

### 2. El sistema muestra el resumen

Por cada método de pago:

```
Efectivo:
  Esperado: $850.000  (apertura + ventas efectivo - egresos)
  Contado:  [____]    ← tú digitas

Tarjeta débito:
  Esperado: $1.200.000 (datafono debe coincidir)
  Contado:  [____]

Tarjeta crédito:
  ...

Transferencia:
  ...
```

### 3. Digita lo contado físicamente

- **Efectivo**: cuentas billetes y monedas físicos
- **Tarjetas**: verificas el voucher del datafono
- **Transferencias**: confirmas en la app del banco

### 4. Diferencia

El sistema calcula diferencia por método:
- **0**: ✅ perfecto
- **+X**: sobrante (tienes más de lo esperado)
- **−X**: faltante (te falta dinero)

### 5. Notas

Si hay diferencia, **obligatorio** explicar:
- "Cliente dio propina extra y no la registré"
- "Falté $20K, ya hablé con Pedro que lo agarró por error"

### 6. Cerrar definitivo

Click **Cerrar caja**. La sesión queda en estado `closed` y no se puede modificar.

## Modo "Cierre ciego"

Si activas el toggle `pos_blind_cash_close` en Configuraciones POS, el cajero **NO ve el monto esperado** al cerrar. Solo digita lo que contó.

Útil para:
- Detectar problemas sin que el cajero ajuste
- Auditoría más estricta

El gerente luego revisa la diferencia desde **Sesiones de Caja** sin sesgo.

## Historial de sesiones

**Panel App → Ventas → Sesiones de Caja**.

Lista todas las sesiones con:
- Cajero
- Sede
- Hora apertura / cierre
- Total vendido
- Diferencia
- Estado (abierta, cerrada)

Click en una sesión para ver detalle: cada venta, movimiento, cuadre por método.

## Reimprimir cierre Z

Desde una sesión cerrada → **Imprimir cierre** → genera reporte impreso (Z) con totales y diferencias. Útil para contabilidad o llevar a la oficina.

## Errores comunes

### "No me deja abrir caja"
- Verifica que tu usuario tenga permiso `pos.use`.
- Si ya tienes una sesión abierta en otra sede, ciérrala primero (solo puedes tener 1 sesión activa simultánea).

### "Hay diferencia y no sé por qué"
1. Revisa **Movimientos manuales** del turno — quizá olvidaron registrar un egreso.
2. Revisa cada venta del turno — quizá hubo error de digitación.
3. Cuenta el efectivo otra vez (errores de conteo son comunes).
4. Si todo está bien y la diferencia persiste, anota la nota y avisa al gerente.

### "Cerré caja y necesito reabrirla"
No se puede reabrir una sesión cerrada. Si necesitas seguir vendiendo, abre una nueva sesión (te queda historial separado).

### "Quiero cerrar caja pero hay ventas suspendidas"
El sistema te bloquea el cierre si hay ventas suspendidas — debes cobrar las o cancelarlas primero (cualquier sesión nueva las recupera).

## Próximos temas

- [POS Tradicional](/docs/ventas/pos-tradicional/)
- [Reportes — Cierres de caja](/docs/contabilidad/reportes/)

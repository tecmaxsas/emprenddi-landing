---
title: Periodos Fiscales
description: Abrir y cerrar periodos contables. Bloqueo de ediciones tras cierre.
sidebar:
  order: 5
---

Un **periodo fiscal** es un rango de fechas contables (típicamente un año, dividido en meses). Cerrar un periodo **bloquea ediciones** en él, garantizando que los reportes sean estables y los libros oficiales correctos.

## Acceso

Panel App → **Contabilidad** → **Periodos Fiscales**.

## Crear periodo

Al iniciar operaciones (o cada nuevo año fiscal):

- **Nombre** (ej. "Año 2026")
- **Fecha desde** (1 de enero)
- **Fecha hasta** (31 de diciembre)
- **Tipo**: anual / semestral / mensual
- **Estado**: abierto (default)

Una vez creado el periodo anual, el sistema infiere automáticamente los **periodos mensuales** internos para reportes (no requieren creación manual).

## Estados de un periodo

| Estado | Significado |
|---|---|
| `open` | Edición libre, asientos permitidos |
| `closed` | Bloqueado para ediciones |

## Cerrar un mes

Al final de cada mes (típicamente día 5-10 del siguiente mes, una vez tu contador validó):

### 1. Tareas previas al cierre

- [ ] Todas las facturas del mes posteadas
- [ ] Todos los pagos registrados
- [ ] Conciliación bancaria del mes hecha
- [ ] Nómina del mes contabilizada
- [ ] Asientos de provisiones (prima, cesantías, etc.) hechos
- [ ] Diferencias de inventario ajustadas
- [ ] Reportes revisados con el contador

### 2. Cerrar el mes

Periodos Fiscales → seleccionar el mes → **Cerrar**.

El sistema:
- Bloquea ediciones de asientos con fecha en el rango
- Bloquea creación de nuevos asientos con esa fecha
- Bloquea anulación de facturas en ese mes
- Mantiene los reportes congelados (cualquier reporte que generes ahora ya no cambia)

### 3. Si descubres un error después

Si después del cierre encuentras un error, tienes dos opciones:

- **Reabrir el mes** (solo admin con permiso especial): corregir y volver a cerrar. Requiere documentar la razón.
- **Hacer asiento de ajuste en el mes actual** (preferible): no toca el histórico, reflejas la corrección en el mes corriente con descripción "Corrección error mes XX".

## Cerrar el año

Adicional al cierre mensual, al final del año hay un **cierre anual** que:

1. **Cierra el mes de diciembre**
2. **Genera asiento de cierre**: las cuentas de resultado (ingresos, gastos, costos) se cierran contra utilidades del ejercicio
3. **Prepara el siguiente año fiscal** con saldos iniciales heredados

> **Importante**: el cierre de año es un proceso contable serio. Recomendamos hacerlo CON tu contador, no solo. Cualquier error queda en el balance del año siguiente.

## Periodos cerrados y nuevas operaciones

Si tu mes de mayo está cerrado y un cliente te paga en junio una factura de mayo:

- El pago se registra con **fecha de junio** (fecha real del pago)
- Afecta CxC del cliente (reduce saldo)
- El asiento contable es de junio (DR Caja / CR Cliente)
- La factura original de mayo no se toca

## Cierre Z vs Cierre contable

**Cierre Z** = cuadre de caja del cajero al final del turno (operativo, ver [Sesiones de Caja](/docs/ventas/sesiones-caja/))

**Cierre contable** = cierre de periodo fiscal (contable, este artículo)

Son cosas distintas. Puedes hacer cierres Z diarios sin que el mes contable esté cerrado.

## Próximos temas

- [Asientos contables](/docs/contabilidad/asientos-contables/)
- [Conciliación bancaria](/docs/contabilidad/conciliacion-bancaria/)
- [Reportes](/docs/contabilidad/reportes/)

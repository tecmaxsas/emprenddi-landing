---
title: Asientos Contables
description: Asientos manuales y automáticos. Cómo se generan, cómo crear uno desde cero.
sidebar:
  order: 3
---

Un **asiento contable** es un registro de doble partida: cada movimiento de dinero afecta al menos 2 cuentas (una débito y una crédito), con sumas iguales.

## Asientos automáticos

La gran mayoría de tu contabilidad **se genera sola** cuando posteas documentos del sistema:

| Documento | Asiento generado |
|---|---|
| Factura de venta | DR Cliente o Caja / CR Ventas + CR IVA generado + CR Retenciones |
| Factura compra | DR Mercancías + DR IVA descontable / CR Proveedor |
| Pago a proveedor | DR Proveedor / CR Banco o Caja |
| Recibo de cliente | DR Banco o Caja / CR Cliente |
| Ajuste inventario in | DR Mercancías / CR Contrapartida |
| Ajuste inventario out | DR Contrapartida / CR Mercancías |
| Apertura de inventario | DR Mercancías / CR Resultados ej. anteriores |
| Nómina | DR Salarios + DR Aportes / CR Caja + CR Retenciones nómina |
| Anulación de factura | Reversa (DR↔CR del original) |

**No tienes que crear asientos manuales para operaciones rutinarias.**

## Asientos manuales

Necesarios para:

- **Saldos contables iniciales** (al migrar desde otro sistema)
- **Provisiones** (prima de servicios, vacaciones, intereses cesantías)
- **Reclasificaciones** entre cuentas
- **Ajustes contables de cierre** (depreciación si no usas activos fijos, gastos diferidos, etc.)
- **Correcciones** detectadas por contador

## Crear asiento manual

### 1. Acceso

Panel App → **Contabilidad** → **Asientos contables** → **Nuevo**.

### 2. Cabecera

- **Prefijo + Número** (consecutivo automático, ej. `AS-000123`)
- **Fecha** (importante: dentro de un periodo fiscal NO cerrado)
- **Tipo**: `manual`, `apertura`, `cierre`, `provisión`, `ajuste`
- **Descripción** (concepto del asiento)
- **Tercero principal** (si el asiento se relaciona con un tercero)

### 3. Líneas (mínimo 2)

Por cada línea:

- **Cuenta del PUC** (busca por código o nombre)
- **Tercero** (si la cuenta `requires_third_party`)
- **Centro de costo** (si la cuenta lo exige)
- **Descripción** (línea específica)
- **Débito** o **Crédito** (uno de los dos)

El sistema valida: **suma débitos = suma créditos**. Si no cuadra, no deja postear.

### 4. Postear

Click **Contabilizar**. El asiento queda en estado `posted`. Afecta libros oficiales y reportes.

## Ejemplo: saldos contables iniciales

Si vienes de otro sistema con estos saldos al 31/dic del año anterior:

- Caja: $500.000
- Banco: $5.000.000
- Cliente Pedro: $2.000.000 (CxC)
- Mercancías: $10.000.000 (ya hiciste apertura inventario, contabilizado)
- Proveedor ABC: $3.000.000 (CxP)
- Capital social: $14.500.000

**Asiento de apertura** (fecha 31/12 año anterior):

| Cuenta | Tercero | Débito | Crédito |
|---|---|---|---|
| 110505 Caja | — | 500.000 | |
| 111005 Banco | — | 5.000.000 | |
| 130505 Clientes | Pedro | 2.000.000 | |
| 220505 Proveedores | ABC | | 3.000.000 |
| 310505 Capital social | — | | 4.500.000 |
| **TOTAL** | | **7.500.000** | **7.500.000** |

(El 1435 Mercancías por $10M ya quedó del asiento de apertura inventario, no se duplica acá).

## Editar / Anular

- **Editar**: solo en estado `draft`. Una vez posteado, queda bloqueado.
- **Anular**: si te equivocas tras postear:
  - Crear **asiento de reversa** (DR ↔ CR del original) con descripción "Anula AS-XXX"
  - O contactar soporte para anular técnicamente (audit trail más estricto)

## Filtros y búsqueda

- Por **fecha**
- Por **cuenta** (todos los asientos que tocan 1305, por ej.)
- Por **tercero**
- Por **tipo** de asiento
- Por **usuario** que lo creó

## Periodos fiscales

Si un periodo fiscal está **cerrado**, no puedes crear asientos con fecha en ese rango. Ver [Periodos fiscales](/docs/contabilidad/periodos-fiscales/).

## Próximos temas

- [Plan de Cuentas](/docs/contabilidad/plan-cuentas/)
- [Periodos Fiscales](/docs/contabilidad/periodos-fiscales/)
- [Reportes](/docs/contabilidad/reportes/)

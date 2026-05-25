---
title: Parámetros legales
description: SMLMV, UVT, auxilio transporte, tarifas de salud, pensión, ARL, parafiscales.
sidebar:
  order: 2
---

Los **parámetros legales** son los valores y tarifas que la ley colombiana exige aplicar en nómina. Se actualizan **cada año** (típicamente en enero).

## Acceso

Panel App → **Nómina** → **Parámetros**.

## Parámetros que debes mantener actualizados

### Anuales

| Parámetro | Cuándo cambia | Dónde se decreta |
|---|---|---|
| **SMLMV** (Salario Mínimo) | 1 enero cada año | Gobierno Nacional |
| **Auxilio de transporte** | 1 enero cada año | Gobierno Nacional |
| **UVT** | 1 enero cada año | DIAN |

Ejemplos:
- SMLMV 2026: $1.500.000 (placeholder — consulta valor real)
- Auxilio transporte 2026: $175.000 (placeholder)
- UVT 2026: $50.000 (placeholder)

### Aportes parafiscales y seguridad social

Tarifas que la ley fija. Suelen ser estables pero pueden cambiar por reforma.

| Concepto | Empleador | Empleado |
|---|---|---|
| **Salud** | 8.5% | 4% |
| **Pensión** | 12% | 4% |
| **ARL** | 0.522% a 8.7% según riesgo | — |
| **Cesantías** | 8.33% | — |
| **Intereses sobre cesantías** | 1% | — |
| **Prima de servicios** | 8.33% | — |
| **Vacaciones** | 4.17% | — |
| **Caja de compensación** | 4% | — |
| **ICBF** | 3% | — |
| **SENA** | 2% | — |

> Empresas con régimen 1607/2012 (ley primer empleo) tienen exoneración de algunos parafiscales bajo ciertos requisitos.

### Topes IBC

**IBC (Ingreso Base de Cotización)** tiene topes:

- Mínimo: 1 SMLMV
- Máximo: 25 SMLMV

Empleados que ganen más del máximo cotizan sobre el tope, no sobre su salario real.

## Editar parámetros

**Parámetros → editar** → cambiar valor y guardar.

> **Crítico**: cambia los parámetros **antes** de liquidar nómina del periodo afectado. Si liquidas con valor viejo, las cifras quedan mal.

## Casos especiales

### Empresas exoneradas de parafiscales

Si tu empresa califica por **artículo 114-1 ET** (exoneración por trabajadores con salario < 10 SMLMV):

- NO pagas salud (8.5%) ni SENA (2%) ni ICBF (3%) sobre esos trabajadores
- Configurable en Parámetros → "Exoneración 114-1"

### Trabajadores de alto riesgo

ARL tarifa más alta (hasta 8.7%):
- Construcción
- Minería
- Trabajo en alturas
- Empresas químicas

Configurable por contrato del empleado.

### Salario integral

Para salarios > 13 SMLMV puedes acordar **salario integral**:
- Incluye factor prestacional (~30%)
- No causa cesantías, primas, ni vacaciones por separado
- Sí causa seguridad social

Marca el contrato como `salario_integral` para que el sistema lo trate aparte.

## Próximos temas

- [Empleados y contratos](/docs/nomina/empleados-contratos/)
- [Liquidación periódica](/docs/nomina/liquidacion-periodica/)

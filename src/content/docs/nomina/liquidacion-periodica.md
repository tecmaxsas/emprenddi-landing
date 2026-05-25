---
title: Liquidación Periódica
description: Liquidar nómina quincenal o mensual con todas las deducciones legales.
sidebar:
  order: 3
---

La **liquidación periódica** es el cálculo de lo que cada empleado gana al final del periodo (quincena o mes), descontando lo que la ley exige.

## Acceso

Panel App → **Nómina** → **Periodos**.

## Crear periodo

### 1. Definir el periodo

- **Tipo**: quincenal (15 días) o mensual
- **Fecha desde / hasta**
- **Empresa / Sede** (si quieres separar por sede)

### 2. Empleados a incluir

El sistema lista todos los empleados activos con contrato vigente en el periodo. Puedes excluir alguno manualmente si está suspendido.

### 3. Recoger novedades

Antes de liquidar, asegúrate de tener capturadas:

- **Vacaciones** tomadas en el periodo
- **Incapacidades**
- **Bonificaciones**
- **Comisiones**
- **Préstamos** a descontar
- **Aumentos de salario** (cambio de contrato vigente)

## Liquidar

Click **Liquidar periodo**.

Para cada empleado el sistema calcula:

### Devengado (lo que el empleado gana)

| Concepto | Cálculo |
|---|---|
| **Salario** | salario_mensual × días_trabajados / 30 |
| **Auxilio de transporte** | 175.000 × días / 30 (si salario < 2 SMLMV) |
| **Horas extras** | si las capturaste como novedad |
| **Comisiones** | si aplican |
| **Bonificaciones** | constitutivas o no |
| **TOTAL DEVENGADO** | suma |

### Deducciones (descuentos)

| Concepto | Tarifa empleado |
|---|---|
| **Salud (empleado)** | 4% sobre IBC |
| **Pensión (empleado)** | 4% sobre IBC |
| **Fondo de solidaridad** | 1% si IBC > 4 SMLMV |
| **Retención en la fuente** | según tabla DIAN |
| **Préstamos / embargos** | si aplica |
| **TOTAL DEDUCCIONES** | suma |

### Neto a pagar

**Devengado − Deducciones = Neto a transferir al empleado**

## Aportes del empleador (no se descuentan, los paga la empresa)

Aparte del neto al empleado, la empresa paga:

| Concepto | Tarifa |
|---|---|
| Salud (empleador) | 8.5% (o exonerado si 114-1) |
| Pensión (empleador) | 12% |
| ARL | 0.522% a 8.7% |
| Cesantías | 8.33% (al fondo) |
| Intereses sobre cesantías | 1% (al fondo) |
| Prima | 8.33% (causada, pagada en junio/diciembre) |
| Vacaciones | 4.17% (causadas) |
| Caja de compensación | 4% |
| ICBF | 3% (exonerado si 114-1) |
| SENA | 2% (exonerado si 114-1) |

## Asiento contable

Cuando posteas la liquidación, se genera el asiento:

| Cuenta | Débito | Crédito |
|---|---|---|
| 510506 Salario integral | (devengado) | |
| 510527 Auxilio transporte | (auxilio) | |
| 5105xx Otros (horas extras, etc.) | | |
| 510560-510585 Aportes empleador | (aportes) | |
| 510590 Prestaciones causadas | (causadas) | |
| 252010 Cesantías por pagar | | (8.33%) |
| 252510 Intereses sobre cesantías | | (1%) |
| 261005 Prima por pagar | | (8.33%) |
| 251020 Vacaciones por pagar | | (4.17%) |
| 237005 Retenciones nómina (salud, pensión empleado) | | (8%) |
| 236525 Retención en la fuente | | (si aplica) |
| 250505 Salarios por pagar | | (neto a empleado) |
| 220505 Proveedores varios (EPS/AFP/ARL) | | (aportes empleador) |

(El asiento real es más detallado — esto es resumen).

## Imprimir desprendibles

Cada empleado puede recibir su **desprendible de pago** (formato PDF) con:

- Devengado (línea por línea)
- Deducciones (línea por línea)
- Neto
- Acumulados a la fecha

**Periodo → ver → Generar desprendibles** → se descargan en ZIP o se envían por correo a cada empleado.

## Pagar nómina

Cuando transfieres a los empleados:

**Periodo → Registrar pago**:
- Selecciona método (transferencia bancaria masiva)
- Fecha de pago
- Cuenta origen (tu banco)

Asiento:
- DR 250505 Salarios por pagar / CR 1110xx Banco

## Próximos temas

- [Liquidación definitiva](/docs/nomina/liquidacion-definitiva/)
- [Parámetros legales](/docs/nomina/parametros-legales/)

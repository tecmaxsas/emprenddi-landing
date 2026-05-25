---
title: Liquidación Definitiva
description: Liquidar a un empleado que se retira. Cesantías, intereses, prima, vacaciones, indemnización.
sidebar:
  order: 4
---

Cuando un empleado **se retira** (renuncia, despido, terminación de contrato), debes hacer una **liquidación definitiva** que cubre todas las prestaciones acumuladas + lo que la ley exige según el motivo de retiro.

## Acceso

Panel App → **Nómina** → **Empleados** → seleccionar empleado → **Liquidación definitiva**.

O directamente: **Nómina → Liquidaciones definitivas → Nueva**.

## Datos

- **Empleado**
- **Fecha de retiro**
- **Motivo de retiro**:
  - `renuncia` — sin indemnización
  - `terminacion_contrato` — si era contrato fijo y llegó a fin
  - `despido_con_justa_causa` — sin indemnización
  - `despido_sin_justa_causa` — **CON indemnización**
  - `mutuo_acuerdo` — sin indemnización
  - `muerte` — paga a beneficiarios

## Qué se calcula automático

### Cesantías acumuladas

Saldo de cesantías del año en curso (desde el último 14 de febrero o desde la fecha de inicio del contrato, lo que sea más reciente).

**Cesantías = Salario × Días trabajados / 360**

### Intereses sobre cesantías

**Intereses = Cesantías × Días × 12% / 360**

### Prima del periodo

Si te retiras antes de junio o diciembre (fechas de pago de prima), se liquida prorrateada.

**Prima = (Salario + Auxilio transporte) × Días trabajados en el semestre / 360**

### Vacaciones pendientes

Días no tomados a la fecha de retiro × valor día.

**Vacaciones = (Salario + Auxilio transporte) × Días pendientes / 30**

### Indemnización (solo si despido sin justa causa)

| Tipo contrato | Indemnización |
|---|---|
| **Indefinido** | Salarios > 10 SMLMV: 20 días/año; ≤ 10 SMLMV: 30 días/año primer año + 20 días por cada año adicional |
| **Fijo** | Salarios pendientes hasta fin del contrato (lo que faltaba por trabajar) |
| **Obra labor** | Lo que faltaba por terminar la obra (estimado) |
| **Aprendizaje** | Sin indemnización (no aplica) |

El sistema calcula automáticamente según el tipo de contrato y antigüedad.

### Sueldo pendiente

Días trabajados del último periodo no liquidados.

### Otros (descontables)

- Préstamos pendientes
- Equipos no devueltos
- Saldo en mora

## Resumen liquidación

El sistema muestra:

| Concepto | Valor |
|---|---|
| Sueldo proporcional | $XXX |
| Cesantías | $XXX |
| Intereses sobre cesantías | $XXX |
| Prima | $XXX |
| Vacaciones | $XXX |
| **Indemnización** | $XXX |
| **Total devengado** | $XXX |
| Salud y pensión empleado | -$XXX |
| Retención en la fuente | -$XXX |
| Otras deducciones | -$XXX |
| **NETO A PAGAR** | $XXX |

## Postear

Click **Liquidar y postear**. El sistema:

1. **Crea asiento contable**:
   - DR Salarios + DR Cesantías acumuladas + DR Prima + DR Vacaciones + DR Indemnización
   - CR Salarios por pagar + CR Retenciones + CR Aportes
2. **Cierra el contrato del empleado**: `terminated_at` = fecha retiro
3. **Marca empleado como inactivo** (opcional)
4. **Genera el documento de liquidación definitiva** (PDF imprimible para firma)

## Documento de liquidación

PDF con todos los conceptos calculados, listo para que el empleado **firme la paz y salvo** al recibirlo.

Datos críticos en el PDF:
- Resumen del cálculo
- Acumulados
- Pagos a EPS, AFP, ARL pendientes
- Firma empleado y empleador

## Pagar al empleado

Tras postear, registras el pago igual que una nómina normal: transferencia, asiento DR Salarios por pagar / CR Banco.

## Indemnización por despido — cuenta especial

Si activaste **indemnización**, el sistema usa la cuenta **510585 Indemnizaciones laborales** (cuenta separada del salario regular). Útil para reportes y deducibilidad fiscal.

## Casos especiales

### Empleado con préstamos pendientes
Se descuentan del neto. Si el neto es menor al préstamo, el empleado queda con saldo deudor a la empresa (consultar manejo legal).

### Empleado en periodo de prueba
- Renuncia voluntaria → sin indemnización
- Empleador despide sin justa causa antes de los 2 meses → indemnización proporcional

### Empleado con embargo
La cuota del embargo se descuenta del neto y se gira al juzgado correspondiente.

## Próximos temas

- [Empleados y contratos](/docs/nomina/empleados-contratos/)
- [Liquidación periódica](/docs/nomina/liquidacion-periodica/)

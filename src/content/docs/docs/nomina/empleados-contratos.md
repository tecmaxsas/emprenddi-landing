---
title: Empleados y Contratos
description: Crear empleados, gestionar contratos laborales, datos requeridos.
sidebar:
  order: 1
---

Los **empleados** son las personas que trabajan en tu empresa. Cada uno tiene uno o varios **contratos** laborales que definen su vinculación.

## Acceso

Panel App → **Nómina** → **Empleados**.

## Crear empleado

### Datos personales

- **Nombre y apellidos**
- **Documento**: CC, CE, Pasaporte, NIT
- **Número de documento**
- **Fecha de nacimiento**
- **Sexo**
- **Dirección, teléfono, correo**

### Datos laborales / seguridad social

- **EPS**: entidad de salud
- **AFP**: fondo de pensión
- **ARL**: aseguradora de riesgos laborales
- **Caja de compensación**
- **Cesantías**: fondo donde van las cesantías

### Datos bancarios

- **Banco** y **número de cuenta** donde se le hace transferencia de nómina
- **Tipo de cuenta**: ahorros / corriente

### Foto (opcional)

Para identificación en el sistema.

## Crear contrato

Cada empleado tiene un contrato activo. Si reasignas funciones (cambio de salario, jornada), se crea contrato nuevo (cerrando el anterior).

### Datos del contrato

- **Tipo**:
  - `indefinido` — sin fecha fin
  - `fijo` — con fecha fin
  - `obra_labor` — atado a entrega de obra
  - `aprendizaje` — SENA / pasantía
- **Cargo** (descripción libre)
- **Fecha inicio**
- **Fecha fin** (si aplica)
- **Salario**: básico mensual
- **Jornada**: tiempo completo / medio / parcial
- **Auxilio de transporte**: ON si salario < 2 SMLMV
- **Sede** asignada
- **Centro de costo** (si usas)

### Acumulados del contrato

El sistema lleva automáticamente:
- Días trabajados
- Cesantías causadas
- Intereses sobre cesantías
- Prima causada
- Vacaciones causadas (1 día por cada 20 trabajados)

## Cambios de salario

Cuando aumentas el salario:

**Empleado → Crear nuevo contrato**:
- Cierra el anterior con fecha hoy
- Crea uno nuevo con el nuevo salario desde mañana

El sistema mantiene el histórico.

## Vacaciones

Cuando el empleado toma vacaciones:

**Empleado → Novedad → Vacaciones**:
- Fecha desde / hasta
- Días tomados
- Pago anticipado de salario por días de vacaciones

Reduce el saldo de vacaciones causadas.

## Incapacidades

**Empleado → Novedad → Incapacidad**:
- Tipo: general, laboral, maternidad/paternidad
- Días
- Si es por EPS (común) o por ARL (laboral)

Afecta liquidación (los primeros 2 días los paga el empleador, después la EPS).

## Bonificaciones

**Empleado → Novedad → Bonificación**:
- Constitutiva de salario (afecta base de prestaciones) o no
- Monto
- Periodo de la novedad

## Activar / Desactivar empleado

- **Desactivar**: cuando se retira. Cierra contrato y bloquea futuras liquidaciones.
- **Eliminar**: bloqueado si tiene contratos o liquidaciones históricas.

## Próximos temas

- [Parámetros legales](/docs/nomina/parametros-legales/)
- [Liquidación periódica](/docs/nomina/liquidacion-periodica/)
- [Liquidación definitiva](/docs/nomina/liquidacion-definitiva/)

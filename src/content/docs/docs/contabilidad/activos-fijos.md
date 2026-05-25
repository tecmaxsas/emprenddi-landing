---
title: Activos Fijos
description: Maquinaria, vehículos, equipos propios. Registro, depreciación automática.
sidebar:
  order: 6
---

Los **activos fijos** son bienes duraderos que tu empresa **usa para operar** (no para vender). Ejemplos: computadores propios, vehículos, maquinaria, mobiliario.

## Cuándo registrar un activo fijo

Cuando compras un bien que:

- Cuesta más de cierto umbral (típicamente 50 UVT, consulta con tu contador)
- Se usará por **más de un año**
- No está destinado a la venta

Si cumple lo anterior, no va a gasto inmediato sino a **activo** + **depreciación gradual**.

## Acceso

Panel App → **Contabilidad** → **Activos Fijos**.

## Crear activo

### 1. Datos básicos

- **Nombre** (ej. "Computador Dell Vostro")
- **Código interno**
- **Categoría**: equipo de cómputo, vehículo, mobiliario, maquinaria
- **Fecha de adquisición**
- **Valor de compra** (sin IVA, salvo casos especiales)
- **Proveedor** (vinculación opcional a factura de compra)

### 2. Configuración de depreciación

- **Vida útil** (años): según tipo de activo. La DIAN tiene tablas:
  - Equipo de cómputo: 5 años
  - Vehículos: 5 años
  - Maquinaria: 10 años
  - Mobiliario: 10 años
  - Inmuebles: 20-45 años (consultar)
- **Método**: `linea_recta` (lo más común) — depreciación uniforme cada periodo
- **Valor residual** (opcional): valor estimado al final de la vida útil

### 3. Cuentas contables

- **Cuenta de activo** (donde se registra el bien): 15xxx según categoría
- **Cuenta de depreciación acumulada**: 159xxx (contra-cuenta del activo)
- **Cuenta de gasto depreciación**: 5160xx según uso (administración, ventas, producción)

### 4. Asignación (opcional)

- **Sede** donde está físicamente
- **Centro de costo** que lo usa
- **Responsable** (usuario asignado)

## Asiento al registrar

Cuando guardas el activo, se crea:

| Cuenta | Débito | Crédito |
|---|---|---|
| 15xxxx Activo | (valor compra) | |
| 110505 Caja o 1110 Banco (si pagaste) | | (valor) |
| O 220505 Proveedores (si quedó a deber) | | |

Y si compraste con factura de compra, vincula la factura al activo para que tu auditoría sea trazable.

## Depreciación mensual

Cada mes, el sistema **calcula automáticamente** la depreciación de cada activo:

```
Depreciación mensual = (Valor compra - Valor residual) / (Vida útil en años × 12)
```

Ejemplo: Computador Dell de $3.000.000, 5 años, sin residual.

Depreciación mensual = $3.000.000 / (5 × 12) = **$50.000 al mes**.

## Postear depreciación del mes

Tu **contador** o el sistema (si activas la automatización) ejecuta cada mes:

**Activos Fijos → Posteo masivo de depreciación → seleccionar mes**.

Se genera un asiento por todos los activos:

| Cuenta | Débito | Crédito |
|---|---|---|
| 5160xx Gasto depreciación | $XXX | |
| 159xxx Depreciación acumulada | | $XXX |

El valor en libros del activo va bajando mes a mes.

## Reporte de activos

- **Activos vigentes**: con valor en libros actual
- **Depreciación del periodo**: cuánto se depreció este mes/año
- **Activos por categoría / sede / responsable**: dónde están físicamente

Útil para inventario físico anual (validar que existe lo que dice el sistema).

## Cuando un activo se daña / pierde / vende

### Baja por desuso

**Activos → ver activo → Dar de baja**.

Asiento:
| Cuenta | Débito | Crédito |
|---|---|---|
| 159xxx Depreciación acumulada | (acumulado) | |
| 4255 Otros ingresos no operacionales (si hay valor en libros) | | (residual) |
| 15xxxx Activo | | (valor compra original) |

Para activos completamente depreciados, los valores se anulan netos.

### Venta

Si vendes un activo (ej. carro viejo), registra factura de venta de tipo especial. Tu contador debe ajustar el asiento.

## Próximos temas

- [Asientos contables](/docs/contabilidad/asientos-contables/)
- [Reportes](/docs/contabilidad/reportes/)

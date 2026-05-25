---
title: Kardex
description: Histórico detallado de movimientos por producto. Calcular costos, auditar diferencias.
sidebar:
  order: 7
---

El **kardex** es el histórico completo de todos los movimientos de un producto: entradas, salidas, ajustes, transferencias. Cada línea muestra cantidad, costo, saldo después del movimiento y referencia al documento que lo generó.

## Por qué es importante

El kardex te permite:

- **Auditar** diferencias de inventario (cuándo y por qué cambió el stock)
- **Calcular el costo histórico** de un producto vendido en una fecha específica
- **Validar el promedio ponderado** que aplica el sistema
- **Cumplir con la DIAN** (es uno de los libros oficiales)

## Acceso

Panel App → **Inventario** → **Kardex** → seleccionar producto.

## Filtros

- **Producto** (obligatorio)
- **Sede** (opcional, default = todas)
- **Rango de fechas**
- **Tipo de movimiento** (purchase, sale, adjustment_in, etc.)

## Columnas del kardex

| Columna | Significado |
|---|---|
| **Fecha** | Cuándo ocurrió |
| **Tipo** | `purchase`, `sale`, `adjustment_in`, `adjustment_out`, `transfer_in`, `transfer_out`, `opening`, `return_to_supplier`, `return_from_customer` |
| **Documento** | Link a la factura/ajuste/transferencia que lo generó |
| **Sede** | En qué sede ocurrió |
| **Tercero** | Cliente o proveedor (si aplica) |
| **Cantidad** | + entrada, − salida |
| **Costo unitario** | Costo aplicado a ese movimiento |
| **Total** | Cantidad × costo |
| **Saldo después** | Stock acumulado tras el movimiento |
| **Costo promedio** | Promedio ponderado tras el movimiento |

## Cómo se calcula el promedio ponderado

Cada vez que entra mercancía (compra, ajuste in, opening), el sistema recalcula:

```
nuevo_costo_promedio = (cantidad_anterior × costo_anterior + cantidad_entrante × costo_entrante)
                     / (cantidad_anterior + cantidad_entrante)
```

Ejemplo: tienes 100 unidades a $5.000 cada una (valor inventario = $500.000). Compras 100 más a $7.000 (valor = $700.000):

- Saldo: 200 unidades
- Costo promedio: ($500.000 + $700.000) / 200 = **$6.000**

Las próximas salidas (ventas, ajustes) usarán $6.000 como costo unitario.

## Tipos de movimiento

| Tipo | Genera kardex | Genera asiento |
|---|---|---|
| `opening` | + entrada | DR 1435 / CR 3605 |
| `purchase` | + entrada | DR 1435 + 240810 / CR 220505 |
| `sale` | − salida | DR 6135 / CR 1435 (COGS) |
| `adjustment_in` | + entrada | DR 1435 / CR contrapartida |
| `adjustment_out` | − salida | DR contrapartida / CR 1435 |
| `transfer_out` | − salida en origen | Sin asiento (interno) |
| `transfer_in` | + entrada en destino | Sin asiento (interno) |
| `return_to_supplier` | − salida | DR 220505 / CR 1435 + 240810 |
| `return_from_customer` | + entrada | DR 1435 / CR 6135 |

## Stock por sede vs total

El kardex muestra movimientos **por sede**. Si quieres saber el stock total del producto en toda la empresa:

- Reporte **"Stock por sede"** consolidado
- O suma los saldos de cada sede

## Imprimir / Exportar kardex

Botón **Exportar** te da:
- **PDF** (formato libro oficial DIAN — para imprimir)
- **Excel** (para análisis)

El PDF cumple el formato del **Libro de Inventarios** que pide la DIAN para algunas empresas.

## Casos de uso

### Detectar pérdidas
Si tu inventario físico marca 50 unidades pero el sistema dice 53, revisa el kardex desde la última fecha conocida y busca movimientos sospechosos.

### Calcular margen real
Para una venta puntual, el kardex te dice el costo unitario aplicado. Resta del precio de venta = margen real.

### Validar costo promedio
Si dudas del costo aplicado en una venta, revisa el kardex. El costo viene del promedio del momento, no del precio de venta.

### Auditoría externa
Tu contador te pedirá kardex de productos clave para validar el costo de ventas declarado.

## Próximos temas

- [Ajustes de Inventario](/docs/inventario/ajustes/)
- [Reportes — Stock por sede](/docs/contabilidad/reportes/)
- [Productos](/docs/inventario/productos/)

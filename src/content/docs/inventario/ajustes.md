---
title: Ajustes de Inventario
description: Entradas y salidas manuales por daño, pérdida, conteo, expiración. Cómo y cuándo usarlos.
sidebar:
  order: 3
---

Los **ajustes de inventario** son **entradas o salidas manuales** que no provienen de una venta o compra. Sirven para reflejar la realidad cuando algo cambia el stock por causas externas.

## Cuándo usar ajustes

| Razón | Tipo |
|---|---|
| Producto dañado / roto | Salida (out) |
| Producto vencido | Salida (out) |
| Producto perdido / robado | Salida (out) |
| Diferencia tras conteo físico (faltante) | Salida (out) |
| Diferencia tras conteo físico (sobrante) | Entrada (in) |
| Producto regalado / muestra | Salida (out) |
| Encontraste algo perdido | Entrada (in) |
| Producto fabricado in-house (manufactura básica) | Entrada (in) |

## Acceso

Panel App → **Inventario** → **Ajustes de Inventario** → **Nuevo**.

## Datos del ajuste

### Cabecera

- **Sede**: dónde está el inventario afectado
- **Fecha**
- **Dirección**: `in` (entrada) o `out` (salida)
- **Razón** (causal):
  - Daño (`damage`)
  - Pérdida (`loss`)
  - Conteo (`count`) — para diferencias tras inventario físico
  - Expiración (`expiration`)
  - Encontrado (`found`)
  - Otro (`other`)
- **Descripción detallada** (recomendado)
- **Cuenta contrapartida**: cuenta del PUC a la que carga (ej. 519520 Pérdida por mermas)

### Líneas

Por cada producto:
- Producto
- Cantidad
- Costo unitario (en entradas lo digitas, en salidas se toma del promedio actual)
- Notas opcionales

### Seriales

Si algún producto **maneja seriales**:

- **Ajuste in**: capturas los seriales nuevos que ingresan (TagsInput)
- **Ajuste out**: digitas los seriales que salen (deben existir en stock). El sistema los marca como `defective` (si razón = damage) o `returned` (otros)

Ver [Seriales](/docs/inventario/seriales/).

## Postear

Click **Contabilizar**. El sistema:

1. **Movimiento de inventario** tipo `adjustment_in` o `adjustment_out`
2. **Asiento contable**:
   - Para `out`: DR Cuenta contrapartida (gasto) / CR Mercancías (1435)
   - Para `in`: DR Mercancías (1435) / CR Cuenta contrapartida (ej. utilidad por sobrante)
3. **Actualiza stock** de la sede
4. **Si hay seriales**: cambia estado o crea nuevos según corresponda

## Cuentas contrapartida típicas

| Razón | Cuenta sugerida |
|---|---|
| Daño / Pérdida | 519520 Pérdidas en bienes |
| Conteo (faltante) | 519520 Pérdidas en bienes |
| Conteo (sobrante) | 425035 Aprovechamientos |
| Expiración | 519520 o cuenta específica si tienes |
| Encontrado | 425035 Aprovechamientos |
| Producción in-house | 614xxx Costo de producción |

Pregunta a tu contador si dudas.

## Anular ajuste

Si te equivocaste:

**Ajuste posteado → Anular** → reversa stock y asiento.

Bloqueado si el ajuste creó seriales que ya se vendieron o usaron en otras operaciones.

## Mejores prácticas

### Haz inventario físico al menos cada 6 meses
Diferencias entre lo contado y lo del sistema deben capturarse con ajuste tipo `count`. Si no las haces, los reportes van mintiendo.

### Documenta la razón
"Producto roto" no es suficiente. "Caja de 20 productos cayó del estante, 8 unidades aplastadas, ver foto adjunta" es lo correcto. Útil para auditorías y deducibilidad fiscal.

### Centros de costo
Si usas centros de costo, asigna a qué centro pertenece el ajuste (la sede como CdC típicamente).

### Permisos
Solo usuarios con `inventory.adjust` pueden hacer ajustes. Asigna este permiso solo a quien deba (no a cualquier cajero).

## Próximos temas

- [Transferencias entre Sedes](/docs/inventario/transferencias/)
- [Apertura de inventario](/docs/inventario/apertura-inventario/)
- [Kardex](/docs/inventario/kardex/)

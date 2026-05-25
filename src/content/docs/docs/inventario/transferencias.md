---
title: Transferencias entre Sedes
description: Mover stock de una sede a otra de forma controlada con doble validación.
sidebar:
  order: 4
---

Cuando mueves mercancía físicamente entre dos sedes (de bodega central a tienda Norte, por ejemplo), debes registrarlo en el sistema para que **el stock de ambas sedes refleje la realidad**.

## Acceso

Panel App → **Inventario** → **Transferencias entre Sedes** → **Nueva**.

## Datos

- **Sede origen**: de dónde sale
- **Sede destino**: a dónde llega
- **Fecha**
- **Líneas**: producto + cantidad
- **Notas** (ej. "Despacho semanal a tienda Norte — guía 12345")

## Flujo de dos pasos

A diferencia de un ajuste simple, la transferencia tiene **dos etapas**:

### 1. Despachar (sede origen)

Cuando físicamente sacas la mercancía de la bodega origen:

**Transferencia → Despachar**

- Crea movimiento `transfer_out` en sede origen
- Resta del stock origen
- Marca transferencia como `in_transit`

### 2. Recibir (sede destino)

Cuando físicamente llega a la sede destino:

**Transferencia → Confirmar recepción**

- Crea movimiento `transfer_in` en sede destino
- Suma al stock destino
- Marca transferencia como `completed`

> **Por qué dos pasos**: durante el tránsito puede haber problemas (pérdidas, daños). Si solo registras el despacho y nunca llega, el stock destino nunca se actualiza. La doble validación obliga a que alguien en destino confirme.

## Diferencias en recepción

Si en destino reciben **menos** de lo despachado (caja con menos producto, daños en tránsito):

- En la pantalla de recepción, ajusta la cantidad recibida
- El sistema te pide motivo
- Genera **automáticamente** un ajuste `out` por la diferencia con razón = "pérdida en tránsito"
- Útil para detectar problemas (proveedor logística, transportador, etc.)

## Asiento contable

**Sin asiento contable**. Las transferencias entre sedes de la misma empresa **no son una venta** — son traslados internos. El sistema solo afecta inventario, no asientos.

> Excepción: si manejas **centros de costo distintos por sede** (tienda Norte = CdC 100, tienda Sur = CdC 200), puede haber asiento entre centros de costo. Configurar con tu contador.

## Seriales en transferencias

> **Limitación actual**: hoy las transferencias **NO actualizan automáticamente la `location_id`** de los seriales del producto. Si transfieres un producto serializado, el serial sigue marcado con la sede origen. Solución temporal: editar manualmente el serial desde [Inventario → Seriales](/docs/inventario/seriales/).
>
> Está en roadmap mejorarlo para que el tracking sea automático.

## Anular transferencia

**Si está en `in_transit`**: cancela y devuelve el stock a origen.
**Si está `completed`**: tendrás que hacer una transferencia inversa.

## Reportes

- **Transferencias del periodo** por sede origen/destino
- **Pérdidas en tránsito** — patrón puede indicar problema con transportador o sede destino
- **Stock por sede** consolidado tras transferencias

## Mejores prácticas

### Confirma recepción rápido
No dejes transferencias en `in_transit` por días. El stock origen está bajo y el destino aún no se ve actualizado → cajeros del destino venden a ciegas.

### Una transferencia, un evento físico
No agrupes 5 despachos de días distintos en una sola transferencia. Cada movimiento físico real = una transferencia.

### Documenta con guía
Si tu transportador genera guía, anótala en las notas. Ayuda a auditar.

### No pongas cajero a despachar a sí mismo
Idealmente, el que despacha en origen y el que recibe en destino son **personas distintas**. Control cruzado.

## Próximos temas

- [Sedes](/docs/administracion/sedes/)
- [Stock por sede - Reportes](/docs/contabilidad/reportes/)
- [Seriales](/docs/inventario/seriales/)

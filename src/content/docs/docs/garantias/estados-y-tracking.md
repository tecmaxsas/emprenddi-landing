---
title: Estados y Tracking
description: Cómo avanzan los tickets, transiciones permitidas, bitácora visual.
sidebar:
  order: 2
---

Cada ticket de garantía atraviesa **estados** que reflejan el progreso del servicio técnico. Las transiciones están **validadas** — no puedes saltar pasos sin sentido.

## Mapa de transiciones

```
received ──┬─→ in_review ──┬─→ in_repair ──┬─→ resolved ──→ delivered
           │               │               │
           ↓               ↓               ├─→ replaced  ──→ delivered
        rejected         rejected         │
           ↓               ↓               └─→ rejected  ──→ delivered
        delivered      delivered
```

**Reglas**:
- Desde `received`: puedes ir a `in_review` o directo a `rejected` (si es obvio que no aplica)
- Desde `in_review`: puedes ir a `in_repair` o saltar a `resolved`, `replaced`, `rejected`
- Desde `in_repair`: solo a `resolved`, `replaced` o `rejected`
- Desde `resolved`/`replaced`/`rejected`: solo a `delivered`
- `delivered` es **terminal** — no se puede cambiar

## Cambiar estado

**Ticket → botón "Cambiar estado"** → ves solo las opciones **permitidas** por la transición vigente.

Cada cambio:

- Pide **nota** opcional (recomendado obligar al técnico a explicar)
- Si pasas a `resolved`, `replaced` o `rejected`, la nota va a "Resolución" (campo permanente)
- Si pasas a `delivered`, registra `delivered_at = now()`

## Asignar técnico

**Ticket → botón "Asignar técnico"** → seleccionar usuario del equipo.

El técnico asignado:
- Recibe los tickets en su panel de "Mis garantías"
- Puede ser distinto al que la recibió (asesor recibe, técnico repara)

## Comentarios en bitácora

**Ticket → botón "Agregar comentario"** → texto libre.

Cada comentario queda con:
- Fecha y hora
- Usuario que lo agregó
- Texto

Útil para:
- "Llamé al cliente, no contesta"
- "Repuesto pedido al proveedor, llega en 3 días"
- "Cliente acepta cotización adicional por $X"

## Timeline visual

En la vista del ticket verás un **timeline cronológico** con todos los eventos:

- Ticket creado
- Estado cambió de X a Y (por usuario Z, con comentario)
- Técnico asignado (a usuario A, por usuario B)
- Comentario libre (por usuario C)

Reconstruye el histórico completo del servicio. Útil para auditoría y resolución de quejas.

## Vencimiento de garantía

Si el equipo está **fuera de plazo** (fecha_venta + warranty_days < hoy), el sistema:

- Muestra alerta visual roja
- **No bloquea** el ticket — puedes seguir atendiendo pero cobrarás la reparación
- En el comprobante imprimible aparece "GARANTÍA EXPIRADA"

## Reportes de garantía

**Garantías → Reportes**:

- **Tickets por estado** — cuántos pending, in_repair, delivered
- **Tiempo promedio de resolución** — KPI clave de servicio técnico
- **Tickets por técnico** — productividad
- **Tickets por producto** — qué SKUs tienen más fallas
- **Garantías vs reparaciones pagas** — cuánto cuesta la garantía vs ingreso de reparaciones

## Notificación al cliente

Por ahora **manual**: el asesor llama o escribe al cliente cuando el equipo está listo.

Próximamente: notificación automática por **WhatsApp** o email al cambiar a `resolved` con instrucciones de recogida.

## Cuando el cliente recoge el equipo

**Ticket → Cambiar estado a `delivered`**:

- Captura **firma del cliente** (digital o física)
- Imprime comprobante de entrega
- Si hay seriales: el serial sigue en estado `sold` (no cambia)
- Ticket cerrado, no más ediciones

## Próximos temas

- [Tickets de garantía](/docs/garantias/tickets-garantia/)
- [Seriales](/docs/inventario/seriales/)

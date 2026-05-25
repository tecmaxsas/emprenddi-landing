---
title: Tickets de Garantía
description: Crear tickets RMA cuando el cliente trae un equipo defectuoso. Búsqueda por serial.
sidebar:
  order: 1
---

El módulo de **garantías** te permite gestionar tickets de **RMA** (Return Merchandise Authorization) cuando un cliente trae un equipo a reparar o reemplazar bajo garantía.

## Activación

Panel App → **Configuraciones** → tab **Empresa** → sección "Garantías" → toggle **ON**.

Luego, en cada producto que aplique, configura **"Días de garantía"** (ej. 365 para portátiles, 180 para impresoras).

## Acceso

Panel App → **Servicio** → **Garantías** → **Nueva**.

## Crear ticket

### 1. Buscar el equipo

Tres formas:

- **Por número de serie**: si el producto se vendió con serial, pistolea o digita. El sistema autocompleta cliente + factura + producto.
- **Por factura**: busca la factura y selecciona el producto.
- **Manual**: si el equipo no se vendió en tu sistema (ej. cliente compró antes de usar Emprenddi), captura todo manualmente.

### 2. Cabecera

- **Cliente** (autocompleta si buscaste por serial/factura)
- **Producto** (autocompleta)
- **Serial** (si aplica)
- **Sede que recibe**
- **Fecha de reclamo** (cuándo el cliente trae el equipo)
- **RMA / número interno** (opcional, tu propio consecutivo de garantía)

### 3. Calculo automático del plazo

Si el producto tiene `warranty_days` configurado:

- **Fecha de vencimiento de garantía** = fecha de venta + warranty_days
- Si **expirada**, el sistema lo marca pero **no bloquea** (puedes cobrar reparación)

### 4. Reportar problema

- **Descripción del problema** (texto libre): qué dice el cliente que pasó

### 5. Asignar técnico (opcional inicial)

Puedes asignar de una vez o dejar sin asignar y asignar después.

### 6. Guardar

Click **Crear**. El ticket queda en estado `received` y empieza el proceso.

## Imprimir comprobante de recepción

Inmediato tras crear:

**Ticket → botón "Imprimir comprobante"** → genera PDF A5 con:

- Datos cliente (nombre, documento, teléfono)
- Datos equipo (producto, serial, factura)
- Problema reportado
- Fecha de recepción
- Vencimiento de garantía (si aplica)
- **5 condiciones legales** (diagnóstico, garantía aplica solo a defectos de fabricación, tiempos dependen de repuestos, etc.)
- Líneas de firma para técnico y cliente

El cliente se lo lleva firmado. Cuando vuelva a recoger, lo presenta.

## Estados del ticket

| Estado | Significado | Quién avanza |
|---|---|---|
| `received` | Equipo en sede, sin revisar | — |
| `in_review` | Técnico está diagnosticando | Asesor / Técnico |
| `in_repair` | Reparación en curso | Técnico |
| `resolved` | Reparada, lista para entregar | Técnico |
| `replaced` | No se reparó, se reemplazó por nuevo | Técnico |
| `rejected` | Garantía no aplica (mal uso, expirada con cobro) | Asesor |
| `delivered` | Entregada al cliente (terminal) | Asesor |

Ver [Estados y tracking](/docs/garantias/estados-y-tracking/).

## Acciones rápidas

Desde el detalle del ticket:

- **Cambiar estado** (transiciones permitidas según mapa)
- **Asignar técnico**
- **Agregar comentario** (queda en bitácora)
- **Imprimir comprobante** (otro PDF)
- **Marcar como terminal**

## Búsqueda y filtros

**Garantías → Listado**:

- Buscar por número de ticket, RMA, cliente, serial
- Filtrar por estado, técnico asignado, sede, vencimiento

Útil para responder rápido cuando un cliente llama y pregunta "¿cómo va mi equipo?".

## Próximos temas

- [Estados y tracking](/docs/garantias/estados-y-tracking/)
- [Seriales](/docs/inventario/seriales/)
- [Configuración de productos — días de garantía](/docs/inventario/productos/)

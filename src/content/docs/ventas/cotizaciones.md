---
title: Cotizaciones
description: Crear, enviar y convertir cotizaciones en facturas o remisiones.
sidebar:
  order: 4
---

Las **cotizaciones** (también llamadas "propuestas") son ofertas comerciales que envías al cliente antes de cerrar la venta. No afectan inventario ni contabilidad — son **solo informativas**.

## Cuándo usarlas

- B2B: el cliente pide propuesta antes de comprar
- Ventas grandes que requieren aprobación interna del cliente
- Para presentar opciones con varios escenarios

## Crear una cotización

**Panel App → Ventas → Cotizaciones → Nueva.**

El formulario es **muy similar al de factura de venta**:

- Cliente
- Sede (opcional)
- Fecha de la cotización
- Validez (días) — ej. 15 días
- Fecha vencimiento (calculada automática)
- Líneas con producto, cantidad, precio, descuento, impuesto
- Notas / condiciones comerciales

Click **Guardar**. La cotización queda en estado `pendiente`.

## Estados

| Estado | Significado |
|---|---|
| `pendiente` | Recién creada, no enviada todavía |
| `enviada` | Compartida con el cliente |
| `aceptada` | Cliente confirmó que la toma |
| `rechazada` | Cliente la declinó |
| `vencida` | Pasó la fecha de validez sin respuesta |
| `convertida` | Ya se generó factura o remisión desde ella |

Cambias el estado manualmente desde la vista de la cotización.

## Compartir con el cliente

Tres formas:

1. **Imprimir PDF** y entregarla físicamente
2. **Descargar PDF** y enviarla por correo
3. **Copiar link público** (próximamente) — un URL con token que el cliente abre sin necesidad de login

## Convertir cotización en factura

Una vez el cliente aprueba:

**Cotización → botón "Convertir a factura"**.

Se crea una factura de venta nueva con todos los datos ya rellenos: cliente, líneas, precios, impuestos. Tú revisas y la posteas normalmente.

La cotización queda marcada como `convertida` y enlazada a la factura para trazabilidad.

## Convertir cotización en remisión

Si el cliente aprueba pero pide que se entregue mercancía antes de facturar (común en distribuidoras):

**Cotización → botón "Convertir a remisión"** → ver [Remisiones](/docs/ventas/remisiones/).

## Editar cotización

Mientras esté en `pendiente` o `enviada` puedes editarla libremente. Una vez `aceptada` o `convertida` queda bloqueada para mantener historial.

## Reportes

- **Cotizaciones por estado** — pipeline comercial
- **Tasa de conversión** — cuántas cotizaciones se vuelven facturas (métrica clave para tu equipo de ventas)

## Próximos temas

- [Remisiones](/docs/ventas/remisiones/)
- [Facturas de Venta](/docs/ventas/factura-venta/)

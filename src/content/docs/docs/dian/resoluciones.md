---
title: Resoluciones DIAN
description: Solicitar, configurar y gestionar resoluciones DIAN para facturación.
sidebar:
  order: 1
---

Las **resoluciones DIAN** son las autorizaciones que la DIAN te da para emitir documentos con consecutivo numérico legal. Cada tipo de documento (factura, NC, ND, doc soporte, nómina electrónica) necesita su propia resolución.

> Esta página complementa a [Resoluciones POS y electrónicas](/docs/ventas/resoluciones-pos/) — ahí está la configuración paso a paso. Acá enfocamos en gestión general y solicitudes a la DIAN.

## Tipos de resolución

| Tipo DIAN | Para qué | Recurrencia |
|---|---|---|
| **Documento Equivalente POS** | Tiquetes POS rápidos | Por sede o consolidado |
| **Factura Electrónica** | Facturas B2B / nominativas | Una global o por sede |
| **Nota Crédito Electrónica** | Reducir factura ya aceptada | Una global |
| **Nota Débito Electrónica** | Aumentar factura ya aceptada | Una global |
| **Documento Soporte** | Compras a no obligados a facturar | Una global |
| **Nómina Electrónica** | Liquidaciones de nómina | Una global |

## Solicitar a DIAN

### Documento Equivalente POS

1. Entra a **MUISCA** con tu RUT
2. Sistema de Numeración → **"Solicitar autorización de numeración"**
3. Tipo: `Sistema POS` o `Documento Equivalente`
4. Define rango (típico 5.000-50.000 números)
5. Recibes en 1-3 días la resolución (gratis)

### Facturación Electrónica

Requiere previamente:
- Haber **completado la habilitación** en el ambiente Habien (DIAN pruebas)
- Tener **certificado digital** vigente

Pasos:
1. MUISCA → Facturación Electrónica → **"Numeración de Facturación"**
2. Define rango (típico 1-5000 para empezar)
3. La DIAN emite la resolución con **clave técnica**

### Documento Soporte

Similar a Factura Electrónica pero con `document_type_id = 4`.

## Configurar en Emprenddi

Detalle en [Resoluciones POS](/docs/ventas/resoluciones-pos/).

## Renovar resolución

Una resolución se "agota" cuando:

- **Llegas al final del rango** (consumiste todos los números)
- **Vence la fecha**

El sistema te avisa:
- **30 días antes** del vencimiento de fecha
- Cuando llegas al **80% del consumo** del rango

Acción: solicita renovación a la DIAN **con 1 mes de anticipación**. Si te toma por sorpresa, no puedes facturar hasta tener la nueva.

## Asignar resoluciones a sedes

Si tienes varias sedes, cada una usa la resolución asignada en `LocationResolution`:

**Resoluciones → ver resolución → Asignar sede**.

Puedes:
- Asignar la misma resolución a varias sedes
- Tener una resolución distinta por sede (la DIAN te asigna rangos distintos)

## Consumo y consecutivos

Cada documento emitido **consume** un número del rango. El sistema:

1. Reserva el próximo número disponible
2. Asigna al documento
3. Bloquea ese número para que no se reuse

Nunca hay **saltos** ni **repeticiones**.

## Resoluciones inactivas

Cuando una resolución se agota o vence, **márcala inactiva** (no la borres):

- El histórico de documentos emitidos con ella sigue válido
- Aparece en reportes y auditoría
- No se reusa para nuevos documentos

## Próximos temas

- [Configuración resoluciones POS y electrónicas](/docs/ventas/resoluciones-pos/)
- [Factura electrónica DIAN](/docs/ventas/factura-electronica-dian/)
- [Documento soporte](/docs/compras/documento-soporte/)

---
title: Resoluciones POS y Electrónicas
description: Configurar resoluciones DIAN para POS local (talonarios) y facturación electrónica. Asignación a sedes.
sidebar:
  order: 8
---

Cada documento de venta debe llevar un **consecutivo numérico autorizado por la DIAN**. Esto se hace a través de una **resolución DIAN** que define:

- **Prefijo** (ej. `FE`, `POS`, `NC`)
- **Rango numérico** (ej. del 1 al 5000)
- **Fecha de vigencia** (típico 2 años)
- **Tipo de documento** que cubre (factura, NC, ND, documento soporte, etc.)

## Tipos de resolución

### Resolución POS (Documento Equivalente)

Para tiquetes POS de bajo monto a consumidor final. **No requiere CUFE**. La DIAN la entrega con un trámite más simple.

- `kind = 'pos'`
- `document_type_id = 1` (factura)
- Sin clave técnica

### Resolución de Facturación Electrónica DIAN

Para facturas electrónicas con CUFE. Requiere:
- Habilitación previa en Habien (DIAN pruebas)
- Certificado digital
- Clave técnica específica

- `kind = 'electronic'`
- `document_type_id` según documento (1=FE, 2=NC, 3=ND, 4=Soporte, 5=Nómina)
- Con clave técnica

## Solicitar resolución a la DIAN

### Para POS

1. Ingresa a MUISCA con tu RUT
2. Solicita resolución de **"Sistemas POS"** o **"Documento Equivalente"**
3. La DIAN te asigna prefijo y rango (típicamente 5.000 a 50.000 números)
4. La resolución es **gratis**

### Para Electrónica

1. Debes estar previamente **habilitado** en facturación electrónica
2. Solicita en MUISCA → módulo Facturación Electrónica → Numeración
3. Define el rango (puedes empezar con 1-5000)
4. Recibes la resolución con **clave técnica** (un código alfanumérico largo)

## Configurar en Emprenddi

Panel App → **Ventas** → **Resoluciones POS** (también incluye electrónicas).

### Nueva resolución

Click **Nueva**.

Campos:

- **Tipo** (`kind`): `pos` o `electronic`
- **Tipo de documento DIAN** (`document_type_id`):
  - `1` Factura electrónica / POS
  - `2` Nota crédito electrónica
  - `3` Nota débito electrónica
  - `4` Documento soporte
  - `5` Nómina electrónica
  - `6` Factura de exportación
- **Nombre del tipo** (autocompleto)
- **Prefijo** (ej. `FE`, `POS`, `NC`)
- **Número de resolución DIAN** (te lo da la DIAN)
- **Fecha de resolución**
- **Clave técnica** (`technical_key`) — solo electrónica
- **Rango desde** (ej. `1`)
- **Rango hasta** (ej. `5000`)
- **Fecha desde / hasta** (vigencia)
- **Activa**: ON

Click **Guardar**.

## Asignar resolución a sede

Para que el POS use la resolución, debes asignarla a una o más sedes con `LocationResolution`:

**Panel App → Resoluciones → ver resolución → tab "Sedes"** → asignar.

Si tienes 3 sedes (Centro, Norte, Sur), cada una puede tener su propio rango (la DIAN puede asignarte rangos independientes por sede) o todas compartir la misma.

## Consumo y vencimiento

La resolución se "consume" a medida que emites facturas. Cuando llegas al final del rango (o vence la fecha) **el sistema te bloquea la emisión** porque emitir con número fuera de rango es ilegal.

El sistema te avisa:
- **30 días antes** del vencimiento por fecha
- **Al consumir el 80%** del rango

Tu acción: **solicita renovación** a la DIAN con anticipación.

## Múltiples resoluciones simultáneas

Puedes tener varias resoluciones activas al mismo tiempo:

- Una **POS** para tiquetes en cada sede
- Una **electrónica de factura** para B2B
- Una **electrónica de NC**
- Una **electrónica de ND**
- Una **electrónica de documento soporte** para compras a no obligados
- Una **electrónica de nómina** si liquidas nómina electrónica

Cada documento usa la resolución que le corresponde según su tipo.

## Cambio de resolución a mitad de operación

Cuando la resolución se está agotando, **antes de que se acabe** crea la nueva resolución (con rango distinto, ej. 5001-10000). Cuando la primera se agote, el sistema usa automáticamente la siguiente activa.

**No emitas con la nueva mientras la vieja siga vigente** — provoca saltos numéricos que confunden la DIAN.

## Edición y eliminación

- **Eliminar** una resolución: bloqueado si ya tiene documentos emitidos con ella.
- **Editar**: solo campos no críticos (notas). El rango y la clave técnica son inmutables.

## Consultar consecutivo actual

Desde la vista de la resolución verás:
- **Próximo número** a emitir
- **Consumidos** (cuántos llevas)
- **Restantes** del rango

Útil para planificar renovaciones.

## Errores comunes

### "Esta resolución no es válida según DIAN"
- Verifica que el **NIT en la resolución coincida** con el de tu empresa
- Verifica la **clave técnica** (un solo carácter mal y DIAN rechaza)
- Verifica que esté **dentro de la vigencia**

### "El POS dice 'No hay resolución activa'"
- Verifica que la resolución esté `Activa: ON`
- Verifica que esté asignada a la sede donde estás operando
- Si es electrónica, verifica que esté dentro del rango (no agotada ni vencida)

### "Quiero usar el mismo rango POS para varias sedes"
No es buena idea. Cada sede debería tener consecutivos propios para auditoría y trazabilidad. Pide a DIAN rangos independientes.

## Próximos temas

- [Factura electrónica DIAN](/docs/ventas/factura-electronica-dian/)
- [Configuración DIAN](/docs/dian/resoluciones/)
- [Documento Soporte](/docs/compras/documento-soporte/)

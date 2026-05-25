---
title: Factura Electrónica DIAN
description: Configuración y emisión de facturas electrónicas DIAN. Requisitos, flujo, manejo de respuestas.
sidebar:
  order: 3
---

La **factura electrónica DIAN** es el documento de venta electrónico que se transmite a la DIAN antes de entregarse al cliente y recibe un código único (CUFE). Es **obligatoria** para casi todos los responsables de IVA y para cualquier factura nominativa a empresa.

## Requisitos antes de empezar

Necesitas tener configurado:

### 1. Resolución DIAN de facturación electrónica

Solicitada en MUISCA. Te asigna:
- **Prefijo** (ej. `FE`)
- **Rango numérico** (ej. del 1 al 5000)
- **Fecha de vigencia**
- **Clave técnica** (`technical_key`)

### 2. Certificado digital

Comprado a una entidad certificadora autorizada en Colombia (ANDES SCD, Certicámara, Gestión Documental S.A.S., etc.). Cuesta entre $300.000 y $500.000 al año.

Se sube al servidor en `storage/app/dian/{nit}/`.

### 3. Configuración apidian

Emprenddi se integra con **apidian** (proveedor tecnológico autorizado por la DIAN). La configuración global está en `config/dian.php` con el token de tu cuenta apidian.

> **Para clientes nuevos**: este setup lo hace el equipo Emprenddi durante la implementación inicial. No tienes que tocar nada técnico.

### 4. Habilitación en Habien

Antes de emitir en producción, la DIAN requiere que **pruebes en su ambiente de pruebas (Habien)**. Emites 3 facturas de prueba, las validas, y cuando salen OK la DIAN te pasa a producción.

Tu asesor Emprenddi te acompaña en este proceso.

## Configurar resolución en Emprenddi

Panel App → **Ventas** → **Resoluciones POS** (sí, el nombre incluye POS pero también ahí están las electrónicas).

### 1. Click "Nueva resolución"

### 2. Llenar

- **Tipo**: `Electrónica`
- **Tipo documento DIAN**:
  - `1` Factura electrónica
  - `2` Nota crédito
  - `3` Nota débito
  - `4` Documento soporte
  - `5` Nómina electrónica
- **Prefijo** (ej. `FE`)
- **Número de resolución DIAN** (te lo da la DIAN)
- **Fecha de resolución**
- **Clave técnica** (`technical_key` del documento)
- **Rango**: desde y hasta
- **Vigencia**: fechas desde / hasta
- **Activa**: ON

### 3. Vincular a una sede

Para que el POS / facturas usen esa resolución, ve a **LocationResolution** (sub-tab) y asigna la resolución a una o más sedes.

## Flujo de emisión

Cuando emites una factura de tipo `electronic`:

### 1. Construcción del payload UBL 2.1

El sistema arma el XML con la estructura DIAN:
- Datos emisor (tu empresa)
- Datos receptor (cliente con NIT, DV, municipio DIAN, responsabilidades fiscales)
- Líneas con producto, cantidad, precio, IVA, descuento
- Totales con desglose IVA por tarifa
- Retenciones si aplican
- Forma de pago

### 2. Firma electrónica

Tu certificado digital firma el XML — la DIAN verifica que viene de ti.

### 3. Transmisión via apidian

El XML firmado se envía a apidian, quien lo transmite a la DIAN.

### 4. Respuesta DIAN

| Status | Significado | Acción |
|---|---|---|
| `pending` | En transmisión | Esperar |
| `sent` | Recibida por DIAN, validando | Esperar (segundos a minutos) |
| `accepted` | DIAN aceptó. Llegan **CUFE** + **QR** + PDF | Listo |
| `rejected` | DIAN rechazó. Motivo en `dian_error_message` | Anular y corregir |

### 5. Entrega al cliente

Cuando la factura es aceptada, recibes:

- **CUFE** (Código Único de Factura Electrónica)
- **Código QR** (para validación visual)
- **PDF generado por apidian** (la representación visual oficial)
- **XML firmado**

Puedes enviar el PDF por correo al cliente con un clic.

## Datos críticos del cliente

Para que DIAN no rechace, el cliente debe tener bien capturado:

- **NIT con DV** correcto (cálculo del DV automático con `DianDvCalculator`)
- **Tipo de documento**: NIT, CC, CE, Pasaporte
- **Régimen tributario**: Responsable IVA, No responsable, Gran Contribuyente
- **Tax responsibilities**: array DIAN (R-99-PN, O-13, etc.)
- **Municipio DIAN** (`dian_municipality_id`): SI o SI seleccionar del catálogo DIAN (no escribir nombre libre)

Si te faltan datos, la DIAN rechaza con mensajes como:
- "Tipo de identificación inválido"
- "Municipio no existe en catálogo DIAN"
- "Tax responsibility no reconocida"

## Manejo de retenciones B2B

Cuando facturas a un Gran Contribuyente o agente retenedor, ellos te aplican retenciones:

- **ReteFuente** (típicamente 2.5% sobre compras, 4-6% sobre servicios, 10-11% honorarios)
- **ReteIVA** (15% sobre el IVA generado)
- **ReteICA** (varía por municipio, en Bogotá 4.14×1000)

El sistema las calcula y las **resta del neto a pagar** (no del total facturado).

Si el cliente está marcado con `is_iva_withholder = ON`, el sistema sugiere ReteIVA automático. Igual para los otros.

## Anular factura electrónica

**No se puede anular** una factura electrónica ya **aceptada por DIAN**. La única forma de cancelarla contable y fiscalmente es emitir una **Nota Crédito Electrónica** que neutralice el efecto.

Ver [Notas Crédito / Débito](/docs/ventas/notas-credito-debito/).

## Reintento automático

Si la DIAN se cae o apidian tiene un problema temporal, el sistema **reintenta** automáticamente unas horas después. La factura queda en `dian_status = pending` y eventualmente pasa a `sent` y `accepted`.

Si después de 24 horas sigue pendiente, contacta a soporte.

## Reportes DIAN

En **Configuración DIAN** (panel App) puedes consultar:

- Resoluciones vigentes con consumo (¿cuántas facturas has emitido vs el rango?)
- Vencimientos próximos
- Estado de envío del día

## Errores comunes y solución

### "La factura no se envió a DIAN"
1. Revisa que la resolución esté **activa y vigente**.
2. Revisa que el certificado digital no esté **vencido**.
3. Revisa la configuración apidian en `config/dian.php`.
4. Revisa logs Laravel en `storage/logs/laravel.log`.

### "DIAN rechaza con 'NIT inválido'"
El NIT del cliente está mal o el DV está incorrecto. Validar contra RUT y corregir el tercero.

### "DIAN rechaza con 'Tax responsibility no reconocida'"
Las responsabilidades fiscales (`tax_responsibilities`) del cliente no coinciden con el catálogo DIAN actual. Edita el tercero y selecciona desde la lista oficial.

### "Resolución vencida"
Renovar la resolución en MUISCA con anticipación. El sistema te avisa 30 días antes del vencimiento o del fin del rango.

### "Quiero cambiar el plan de mi empresa al envío DIAN"
La facturación electrónica viene incluida en el plan único anual de Emprenddi. No hay costo adicional por factura emitida.

## Próximos temas

- [Notas Crédito / Débito](/docs/ventas/notas-credito-debito/)
- [Resoluciones POS y electrónicas](/docs/ventas/resoluciones-pos/)
- [Documento Soporte Electrónico](/docs/compras/documento-soporte/)

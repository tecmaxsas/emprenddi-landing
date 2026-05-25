---
title: Retenciones
description: ReteFuente, ReteIVA, ReteICA. Cuándo aplicar, cómo configurar.
sidebar:
  order: 2
---

Las **retenciones** son adelantos de impuestos. Cuando compras o vendes a ciertos terceros, debes **retener** un porcentaje y pagarlo directamente a la DIAN o al municipio en nombre del proveedor.

## Tipos de retención

| Tipo | Quién retiene | Tarifa típica |
|---|---|---|
| **ReteFuente (RTF)** | Comprador a vendedor | 2.5% a 11% según concepto |
| **ReteIVA** | Comprador (Gran Cont) al vendedor | 15% del IVA generado |
| **ReteICA** | Comprador a vendedor en algunos municipios | Varía por municipio |

## Quién retiene a quién

### En tus compras

Si tu empresa es **Gran Contribuyente** o **Autorretenedor**, debes practicar retenciones a tus proveedores:

- **ReteFuente** sobre la base de la compra/servicio (según concepto)
- **ReteIVA** sobre el IVA generado por el proveedor
- **ReteICA** según el municipio donde se realice la operación

### En tus ventas

Si tu cliente es **Gran Contribuyente** o **Autorretenedor**, él te retiene a ti. Tu factura debe reflejar esa retención (resta del neto a pagar, no del total facturado).

## Tarifas ReteFuente típicas 2026

| Concepto | Tarifa |
|---|---|
| Compras a personas naturales no declarantes | 2.5% |
| Compras a personas naturales declarantes | 2.5% |
| Servicios en general (persona natural) | 4% |
| Servicios en general (persona jurídica) | 4% |
| Servicios profesionales (no declarantes) | 10% |
| Servicios profesionales (declarantes) | 11% |
| Honorarios | 10% o 11% |
| Arrendamiento bienes inmuebles | 3.5% |
| Comisiones | 10% u 11% |
| Transporte de carga | 1% |
| Transporte de pasajeros | 3.5% |

> **Mínimos UVT**: cada concepto tiene un mínimo en UVT bajo el cual no se retiene. Consulta tabla DIAN o pregunta a tu contador.

## ReteIVA

Si eres **Gran Contribuyente** o tu cliente lo es:

- Tarifa: **15%** del IVA generado por el proveedor en la factura
- Aplica si el proveedor no es Gran Contribuyente
- El comprador retiene y paga directamente a DIAN

## ReteICA

Cada municipio define su tarifa. Algunas referencias:

| Municipio | Comercio | Servicios | Otros |
|---|---|---|---|
| Bogotá | 4.14×1000 | 9.66×1000 | varía |
| Medellín | 7×1000 | 10×1000 | varía |
| Cali | 5×1000 | 8×1000 | varía |

(Valores referenciales — confirma tarifa vigente con tu contador o el portal del municipio.)

## Configurar en Emprenddi

### 1. Activar el impuesto de retención

**Contabilidad → Impuestos → activar las retenciones que aplican**.

### 2. Marcar a tu empresa como retenedor

**Configuraciones → Empresa**:
- ✅ Responsable de retención en la fuente
- ✅ Responsable de ReteIVA (si eres GC)
- ✅ Responsable de ReteICA (si tu municipio lo exige)

### 3. Marcar terceros que son retenedores

En cada **tercero** (cliente o proveedor) marca según corresponda:
- `is_self_withholder` — Autorretenedor
- `is_iva_withholder` — Gran Contribuyente (te retiene IVA)
- `is_ica_withholder` — Retiene ICA

El sistema usa estos flags para sugerir retenciones automáticas al emitir facturas o documento soporte.

## Aplicar retenciones en facturas

### En factura de venta

Cuando facturas a un cliente Gran Contribuyente:

- Sistema sugiere retenciones automáticas
- Tarifas según concepto del producto/servicio
- **Reducen el neto a pagar**, no el total facturado

### En documento soporte

Cuando le pagas a un proveedor:

- TÚ retienes según concepto
- **Reduce lo que le pagas neto** al proveedor
- La retención queda como **CxP a la DIAN** (cuenta 2365)

## Liquidación mensual a DIAN

Cada mes, lo retenido se debe **pagar a la DIAN** mediante el **Formulario 350**:

1. Reporte → **Retenciones del mes**
2. Liquidas formulario 350 en MUISCA
3. Pagas en banco autorizado
4. Registras el pago en el sistema:
   - DR Retenciones por pagar (2365) / CR Banco

## Información Exógena

Todas las retenciones practicadas y recibidas alimentan los **formatos exógena**:

- Formato **1001**: retenciones practicadas
- Formato **1003**: retenciones que te practicaron

Generado automáticamente al final del año. Ver [Información Exógena](/docs/dian/informacion-exogena/).

## Próximos temas

- [Información Exógena](/docs/dian/informacion-exogena/)
- [Impuestos](/docs/contabilidad/impuestos/)
- [Documento Soporte](/docs/compras/documento-soporte/)

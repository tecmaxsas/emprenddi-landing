---
title: Documento Soporte Electrónico
description: Comprobante DIAN obligatorio cuando le compras a no responsables de IVA. Configuración y emisión.
sidebar:
  order: 2
---

El **Documento Soporte Electrónico** es la factura que **tú emites como comprador** cuando le pagas a alguien que no puede emitir factura electrónica. Es una **obligación DIAN** (Resolución 167 de 2021) que muchas PyMEs desconocen.

> Sin documento soporte: **no puedes deducir el gasto** + multas del 5% del valor de la operación.

## Cuándo aplica

Cuando le compras a:

- **Personas naturales no responsables de IVA**
- **Independientes** sin obligación de facturar electrónicamente
- **Comerciantes informales** que solo te dan recibo manual
- **Cualquier proveedor que no te emite factura electrónica**

Ejemplos típicos:

- Técnico independiente que arregla equipos
- Diseñador freelance que te entrega un trabajo
- Compra en plaza de mercado
- Servicios puntuales de un independiente

## Cuándo NO aplica

- Tu proveedor **sí te emite factura electrónica** → usa esa, no necesitas documento soporte
- Compras de tu propia empresa entre sedes → es una transferencia, no compra

## Requisitos

### Resolución DIAN propia

Diferente a la de factura electrónica. La solicitas en MUISCA con `document_type_id = 4`. Te asigna su propio prefijo y rango.

### Certificado digital

El mismo que ya usas para facturación electrónica.

### Configuración en sistema

Panel App → **Ventas → Resoluciones POS** (sí, ahí también) → **Nueva resolución**:
- Tipo: `electronic`
- Document type: `4 Documento Soporte`
- Prefijo, rango, clave técnica DIAN

## Crear documento soporte

### Opción A: Desde una compra "no estándar"

**Panel App → Compras → Documento Soporte → Nuevo**.

### Opción B: Convertir factura de compra a documento soporte

Si recibiste un recibo manual y lo ibas a registrar como factura, mejor crea el documento soporte directamente.

### Datos a llenar

- **Proveedor**: persona o entidad que te vendió (puede tener solo CC, no NIT)
- **Fecha de compra/pago**
- **Sede que recibe**
- **Líneas**:
  - Producto (puede ser servicio sin inventario)
  - Cantidad
  - Costo unitario
  - **Impuesto**: típicamente sin IVA (el proveedor no es responsable). Si aplica IVA en algún caso especial, indícalo.
- **Retenciones** que TÚ practicas al proveedor (ver siguiente sección)
- **Notas**: descripción del servicio o concepto

## Retenciones a practicar

Cuando le pagas a un independiente o persona natural por servicios, **tú estás obligado a retener** en la fuente (si supera el umbral). El documento soporte debe reflejarlo:

| Concepto | Tarifa (2026) |
|---|---|
| Servicios en general (persona natural) | 4% |
| Servicios profesionales (no declarantes) | 10% |
| Servicios profesionales (declarantes) | 11% |
| Honorarios | 10% o 11% |
| Compras a no responsables IVA | 2.5% |
| Arrendamiento de inmuebles | 3.5% |
| Comisiones | 10% u 11% |

El sistema sugiere la retención automática según el concepto del producto/servicio que selecciones (si está bien configurado).

## Postear (Contabilizar)

Click **Contabilizar** — el sistema:

1. **Asiento contable**:
   - DR Gasto (cuenta 5xxx según concepto)
   - DR IVA descontable (si aplica)
   - CR Caja o Banco (lo que pagaste neto)
   - CR Retenciones por pagar (lo retenido al proveedor)

2. **Transmite a DIAN** vía apidian (recibe **CUDE** — Código Único de Documento Electrónico)

3. **Cartera con proveedor**:
   - Si pagaste al contado, queda saldado
   - Si pagaste parcial o no pagaste, queda con saldo en CxP

## Mejores prácticas

### Emite al momento del pago, no después
La DIAN cruza los reportes mensuales de retenciones con los documentos soporte. Si pagas en marzo y emites el soporte en mayo, hay desfase.

### Aplica las retenciones correctas
Mal-calcular retenciones genera multas. Si dudas, consulta con tu contador.

### Lleva el documento al gasto correspondiente
No agrupes gastos distintos en un solo documento. Cada concepto en su línea.

### Guarda el soporte físico (cuando exista)
Aunque emitas el electrónico, conserva el recibo, contrato o evidencia de la prestación del servicio.

## Reportes

- **Documentos soporte del periodo** — para validar con tu contador
- **Retenciones practicadas** — alimenta el formato 1001 de exógena
- **Compras por proveedor** — útil para análisis

## Errores comunes

### "DIAN rechaza el documento"
Verifica que la resolución de documento soporte esté **vigente** y los datos del proveedor (tipo doc, número, municipio DIAN) estén correctos.

### "No sé si aplicar retención"
Las retenciones tienen mínimos en UVT. Si el pago no supera el umbral, no retienes. Consulta el [Estatuto Tributario art. 369](https://estatuto.co/) o pregunta a tu contador.

### "El proveedor ahora dice que sí va a facturar electrónicamente"
Bien. A partir de ese momento usas su factura directamente. Los documentos soporte ya emitidos quedan válidos para los pagos pasados.

## Próximos temas

- [Factura de Compra](/docs/compras/factura-compra/)
- [Pagos a Proveedores](/docs/compras/pagos-proveedores/)
- [Información Exógena](/docs/dian/informacion-exogena/)

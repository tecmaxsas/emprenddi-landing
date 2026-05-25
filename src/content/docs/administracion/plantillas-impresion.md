---
title: Plantillas de Impresión
description: Personaliza el diseño de tirillas POS, facturas, comandas y reportes.
sidebar:
  order: 4
---

Las **plantillas de impresión** definen cómo se ven los documentos que imprime Emprenddi: tirilla POS, factura electrónica, comanda de cocina, reporte de cierre de caja, etc.

## Acceso

Panel App → **Configuraciones → Plantillas de Impresión**.

## Tipos de plantillas

| Plantilla | Formato típico | Uso |
|---|---|---|
| **Tirilla POS** | 80mm térmica | Comprobante venta POS |
| **Factura electrónica** | A4 PDF | Factura formal DIAN |
| **Comanda cocina** | 80mm térmica | Pedido para cocina |
| **Cotización** | A4 PDF | Cotización a cliente |
| **Remisión** | A4 PDF | Entrega sin facturar |
| **Cierre de caja** | 80mm térmica | Reporte fin turno |
| **Recibo de pago** | 80mm o A4 | Comprobante de pago recibido |
| **Etiqueta producto** | Etiquetadora | Código de barras + precio |

## Editar plantilla

Para cada plantilla, click **Editar**. Verás un editor con:

### Variables disponibles

Variables que puedes insertar con `{{ }}`:

**Empresa**:
- `{{empresa.nombre}}`, `{{empresa.nit}}`, `{{empresa.direccion}}`
- `{{empresa.telefono}}`, `{{empresa.email}}`
- `{{sede.nombre}}`, `{{sede.direccion}}`

**Documento**:
- `{{documento.numero}}`, `{{documento.fecha}}`
- `{{documento.cliente.nombre}}`, `{{documento.cliente.documento}}`
- `{{documento.subtotal}}`, `{{documento.iva}}`, `{{documento.total}}`
- `{{documento.forma_pago}}`, `{{documento.vendedor}}`

**Items** (bucle):
```html
{% for item in documento.items %}
{{ item.cantidad }} x {{ item.nombre }} ............ {{ item.total }}
{% endfor %}
```

**DIAN** (solo en facturas electrónicas):
- `{{dian.cufe}}`, `{{dian.qr_url}}`, `{{dian.estado}}`

### Editor visual

Editor con vista previa lado a lado. Cambia y ves el resultado en tiempo real con datos de ejemplo.

### Editor HTML

Para usuarios avanzados — edita HTML/CSS directamente. La plantilla puede usar Tailwind CSS si lo prefieres.

## Plantillas por sede

Puedes tener distintas plantillas por sede si las facturas deben diferir (logos distintos, anuncios distintos).

En cada sede asigna qué plantilla usa para cada tipo de documento.

## Ejemplos prácticos

### Tirilla POS simple

```
==========================
   {{empresa.nombre}}
   NIT: {{empresa.nit}}
   {{sede.direccion}}
==========================
TIRILLA POS  {{documento.numero}}
{{documento.fecha}}
--------------------------
{% for item in documento.items %}
{{ item.cantidad }}x {{ item.nombre }}
                 ${{ item.total }}
{% endfor %}
--------------------------
SUBTOTAL     ${{ documento.subtotal }}
IVA (19%)    ${{ documento.iva }}
TOTAL        ${{ documento.total }}
==========================
Cliente: {{documento.cliente.nombre}}
Vendedor: {{documento.vendedor}}
==========================
   ¡Gracias por tu compra!
==========================
```

### Comanda cocina

```
==========================
COMANDA - MESA 7
{{documento.fecha}}  {{documento.hora}}
Mesero: {{documento.mesero}}
==========================
{% for item in documento.items %}
[{{ item.cantidad }}] {{ item.nombre }}
{% if item.modificadores %}
  > {{ item.modificadores }}
{% endif %}
{% if item.notas %}
  ! {{ item.notas }}
{% endif %}

{% endfor %}
==========================
```

## Personalización con logo

Sube logo de empresa en **Configuraciones → Empresa → Logo**. Luego en la plantilla insertas:

```html
<img src="{{empresa.logo_url}}" style="max-width: 200px;">
```

En tirillas térmicas el logo se imprime en blanco/negro automáticamente.

## Codificación y caracteres especiales

Para tildes y ñ funcionen en impresoras térmicas:
- Usa codificación **CP858** o **UTF-8** según tu impresora
- Configura en **Configuración → Impresoras → Codificación**

## Anchos comunes

| Papel | Caracteres por línea |
|---|---|
| 58mm | 32 chars |
| 80mm | 48 chars |
| A4 | sin límite (HTML) |

Diseña tu plantilla considerando el ancho.

## Restaurar plantilla por defecto

Si rompes una plantilla y quieres empezar de nuevo:

**Plantilla → Restaurar por defecto** vuelve al diseño estándar de Emprenddi.

## Tips

- Mantén tirilla POS corta — papel térmico cuesta
- Comandas cocina: agranda fuente de productos y modificadores (cocina lee de lejos)
- Factura DIAN: respeta orden requerido por DIAN (datos emisor, receptor, items, totales, QR, CUFE)
- Prueba siempre en la impresora real antes de poner en producción

## Próximos temas

- [Impresoras y QZ Tray](/docs/administracion/impresoras-qz-tray/)
- [Configuraciones de Empresa](/docs/administracion/configuraciones-empresa/)

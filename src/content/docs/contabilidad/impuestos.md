---
title: Impuestos
description: IVA, INC, retenciones. Configuración por defecto y casos especiales.
sidebar:
  order: 2
---

Los **impuestos** que aplican a tus ventas y compras vienen pre-cargados en Emprenddi según la normativa colombiana vigente.

## Acceso

Panel App → **Contabilidad** → **Impuestos**.

## Impuestos pre-cargados

| Código | Nombre | Tasa | Aplica a | Cuenta venta | Cuenta compra |
|---|---|---|---|---|---|
| **IVA-19** | IVA general | 19% | sale + purchase | 240805 | 240810 |
| **IVA-5** | IVA reducido | 5% | sale + purchase | 240805 | 240810 |
| **IVA-0** | IVA exento | 0% | sale | 240805 | — |
| **IVA-EXC** | Excluido | — | sale | — | — |
| **INC-8** | Consumo (restaurantes) | 8% | sale | 240805 | — |
| **RTF-COMP** | Retención compras | 2.5% | purchase | — | 2365 |
| **RTF-SVC** | Retención servicios | 4% / 6% | purchase | — | 2365 |
| **RTF-HON** | Retención honorarios | 10% / 11% | purchase | — | 2365 |
| **ReteIVA-15** | ReteIVA | 15% | purchase | — | 2367 |
| **ReteICA-BOG** | ReteICA Bogotá comercio | 4.14×1000 | purchase | — | 2368 |

## Adaptar a tu régimen

### Si eres responsable de IVA
Mantén activos los IVA. El sistema te cobra IVA al vender y te lo descuenta al comprar.

### Si eres no responsable de IVA (régimen simplificado)
Desactiva los IVA. No cobras IVA en tus ventas. Si tu proveedor sí te cobra, va al gasto (no es descontable).

### Si eres Gran Contribuyente
Activas las retenciones que tú practicas a tus proveedores. Cuando emites facturas, configuras `is_self_withholder` en los terceros que lo sean.

## Crear impuesto custom

Solo en casos especiales:

- Impuesto local específico de tu municipio (no preconfigurado)
- ICA con tarifa distinta (cada municipio tiene su tarifa)
- Impuesto al consumo de combustibles o productos específicos

### Llenar

- **Código** (ej. `IMPLOCAL-3`)
- **Nombre**
- **Tipo**: `vat`, `consumption_tax`, `income_withholding`, `vat_withholding`, `ica_withholding`, `other`
- **Tasa** (%)
- **Aplica a**: sale / purchase / both
- **Cuenta venta / compra** (asociar al PUC correcto)
- **Mínimo base UVT** (si solo aplica desde cierto monto)
- **Default para ventas / compras**: ON si quieres que se aplique automáticamente en líneas

## Cambiar ReteICA por municipio

Si NO operas en Bogotá, cambia la tarifa del `ReteICA-BOG` a la de tu municipio:

- Medellín: 7×1000
- Cali: 5×1000
- Barranquilla: 8×1000
- (Consulta la tabla actualizada con tu contador o en el portal del municipio)

Si tienes operaciones en varios municipios, **crea uno por municipio** y asigna según ubicación de la operación.

## IVA diferencial restaurante (comer aquí vs llevar)

Si tienes módulo restaurante:

- **Comer aquí**: INC 8% (típico)
- **Para llevar / domicilio**: IVA 0% o IVA 19% según producto

Activas el toggle `restaurant.iva_diferencial` en Configuraciones → Restaurante. El POS aplica automáticamente según el modo de servicio (dine_in vs takeaway/delivery).

## Asignar impuesto por defecto a productos

En cada **producto** asigna:
- `default_sale_tax_id`: el impuesto que aplicarás al vender
- `default_purchase_tax_id`: el que típicamente te cobran al comprar

Así el POS y las facturas autocompletan sin que el cajero deba pensarlo.

## Próximos temas

- [Plan de Cuentas](/docs/contabilidad/plan-cuentas/)
- [Asientos contables](/docs/contabilidad/asientos-contables/)
- [Retenciones DIAN](/docs/dian/retenciones/)

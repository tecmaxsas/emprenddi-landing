---
title: "Qué es la información exógena DIAN y cómo prepararla bien"
description: "Guía clara sobre la obligación anual de información exógena: qué formatos existen, quiénes la deben presentar y cómo facilitar el proceso con tu software contable."
publishedAt: 2026-05-22
author: "Equipo Emprenddi"
category: "Contabilidad"
tags: ["DIAN", "exógena", "obligaciones tributarias", "PyMEs"]
readingMinutes: 7
---

Si tienes un negocio en Colombia, en algún momento de cada año (típicamente entre **marzo y abril**) tu contador te dirá: "tenemos que reportar la **información exógena** a la DIAN". Y empieza el sufrimiento de buscar datos por todos lados.

En este artículo te explicamos qué es, quién debe presentarla y cómo prepararla sin volverte loco.

## ¿Qué es la información exógena?

Es un **reporte anual** donde le cuentas a la DIAN, **con detalle por tercero**, todas las operaciones que hiciste durante el año pasado: a quién le compraste, a quién le vendiste, a quién le pagaste, cuánto IVA generaste, cuánto retuviste, etc.

> **¿Por qué la DIAN te pide esto?** Para **cruzar información** con lo que tus terceros le reportaron a ella. Si tú dices "le pagué $50 millones al proveedor X" y X reporta "recibí $30 millones del cliente Y (tú)", hay una discrepancia que la DIAN va a investigar.

## ¿Quiénes están obligados?

La DIAN publica cada año una **resolución** (típicamente la 124000xxxx) que define quién debe reportar. En 2024-2025 los obligados son:

- **Personas jurídicas** con ingresos brutos del año anterior > **100 millones de pesos**
- **Personas naturales** con ingresos brutos > **500 millones de pesos**
- **Sector financiero** completo (sin tope)
- **Notarios, cámaras de comercio, fondos de empleados**
- **Contribuyentes que practiquen retención en la fuente**, sin importar ingresos

Si dudas, pregunta a tu contador o consulta la resolución vigente del año que vas a reportar.

## Los formatos más comunes

La DIAN tiene ~10 formatos. Los que casi todos usan son:

| Formato | Qué reporta |
|---|---|
| **1001** | Retenciones practicadas (renta, IVA, ICA) |
| **1003** | Retenciones en la fuente que te practicaron |
| **1005** | IVA descontable |
| **1006** | IVA generado |
| **1007** | Ingresos recibidos |
| **1008** | Cuentas por cobrar al cierre |
| **1009** | Cuentas por pagar al cierre |
| **1010** | Información de socios y accionistas |
| **1011** | Saldos contables (algunas modalidades) |
| **2276** | Pagos o abonos en cuenta (más amplio) |

Cada formato tiene su **estructura XML** que la DIAN define y debes cargar en el portal **MUISCA**.

## ¿Por dónde se carga?

En el portal MUISCA de la DIAN. Necesitas:

1. **Firma electrónica vigente** (la misma de la factura electrónica)
2. **Archivo XML** generado por tu software contable
3. Hacer el cargue formato por formato
4. Esperar la **validación** de la DIAN (puede ser inmediata o tardar minutos)
5. Si hay errores, **corregir y resubir** antes del plazo

## Los errores más comunes

### ❌ Esperar al último día
El portal MUISCA se sobrecarga en los últimos 3 días. La gente intenta cargar y el sistema falla. **Empieza con 1 mes de anticipación**.

### ❌ Reportar con NIT mal escrito
Si tu sistema tiene el NIT de un tercero con un dígito mal, todos los reportes que lo incluyan van con error. La DIAN no perdona.

### ❌ No incluir el tercero "Consumidor Final"
Las ventas de mostrador sin identificar al cliente se reportan en el formato 2276 bajo el NIT genérico `222222222` (Consumidor Final). Si tu sistema no las agrupa bien, te falta información.

### ❌ Mezclar ingresos operacionales y no operacionales
El formato 1007 separa ingresos por actividad. Si todo lo metiste en una sola cuenta del PUC, no podrás desagregarlo a la hora de generar el reporte.

### ❌ No reportar movimientos con tarjetas
Cuando un cliente paga con tarjeta, el adquirente (Credibanco, Redeban) te retiene un porcentaje y lo reporta a la DIAN como retención. Si tú no reportas la venta correctamente, hay descuadre.

## Cómo prepararte bien (durante el año, no en enero)

La clave: que la información esté **bien capturada desde el inicio**, no que la limpies a final de año.

### 1. Captura el NIT correcto desde el primer contacto

Cuando das de alta a un cliente o proveedor, **verifica el NIT con DV** contra el RUT físico. Una vez bien capturado, todos los movimientos quedan trazables.

### 2. Asigna la cuenta del PUC correcta a cada producto

Si vendes computadores y bocadillos, no metas ambos en `413505 Comercio`. Crea subcuentas: `413505-01 Tecnología`, `413505-02 Alimentos`. Así el formato 1007 sale ya separado.

### 3. Marca a quién retienes

Cada vez que pagas a un proveedor sometido a retención, el sistema debe registrar la retención. No la calcules manualmente en Excel — eso se pierde.

### 4. Reconcilia bancos mensual

Si no concilias, llegas a diciembre con cifras que no cuadran y reportas mal.

### 5. Cierra el mes contablemente

Tu software contable debe permitir **cerrar el mes** (bloquear ediciones). Si no, alguien puede modificar un movimiento de marzo en noviembre y ya no cuadra nada.

## Cómo te ayuda el software contable

Un buen software contable debe:

✅ Generar los **archivos XML** de cada formato exógena automáticamente
✅ Permitirte **definir cuáles cuentas del PUC alimentan cada concepto** del reporte
✅ Mostrarte **cifras estimadas todo el año** para que sepas cómo vas
✅ **Bloquear cierres** una vez se hagan
✅ Validar **integridad de NIT y DV** al crear terceros
✅ Permitirte **agregar entradas manuales** para conceptos que no surgen de movimientos contables (ej: aportes de socios)

## Conclusión

La información exógena **no es complicada en sí misma**: es complicada **si no preparas la información durante el año**.

La regla de oro: **buena captura desde el día 1, conciliación mensual, cierres oportunos y software que automatice la generación de XML**.

Si tienes esos cuatro elementos, cuando llegue marzo solo es generar el XML, validar y subir a MUISCA. Una tarde de trabajo, no dos semanas.

> **¿Quieres que tu información exógena salga sin sufrimiento?**
> En Emprenddi cada movimiento contable se etiqueta correctamente desde el inicio. En marzo generas los archivos XML con un clic y los subes a MUISCA.
> [Solicita una demo](/contacto) y te mostramos cómo.

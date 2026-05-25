---
title: Información Exógena
description: Generar reportes anuales DIAN (formatos 1001, 1004, 1005, 1006...) automáticamente desde tus movimientos.
sidebar:
  order: 3
---

La **información exógena** es un reporte anual obligatorio donde le cuentas a la DIAN, detallado por tercero, todas las operaciones del año. La DIAN cruza esto con lo que tus clientes/proveedores reportaron.

> **Sin información exógena bien presentada**: multas DIAN, descuadres tributarios, problemas en próximas declaraciones.

## ¿Estoy obligado?

La resolución anual DIAN (típicamente 124000xxxx) define obligados. En 2024-2025 son:

- Personas jurídicas con ingresos > 100M COP el año anterior
- Personas naturales con ingresos > 500M COP
- Sector financiero (todos)
- Notarios, cámaras de comercio, fondos de empleados
- Cualquier contribuyente que practique retención en la fuente

Si dudas, pregunta a tu contador.

## Formatos más comunes

| Formato | Qué reporta |
|---|---|
| **1001** | Retenciones practicadas (RTF, ReteIVA, ReteICA) |
| **1003** | Retenciones que te practicaron |
| **1004** | Descuentos tributarios |
| **1005** | IVA descontable |
| **1006** | IVA generado |
| **1007** | Ingresos recibidos |
| **1008** | Cuentas por cobrar al cierre |
| **1009** | Cuentas por pagar al cierre |
| **1010** | Socios y accionistas |
| **1011** | Saldos contables (algunas modalidades) |
| **2276** | Pagos o abonos en cuenta (más amplio) |

Cada uno tiene su **estructura XML** específica.

## Acceso en Emprenddi

Panel App → **Contabilidad** → **Información Exógena**.

## Setup inicial

### 1. Mapear conceptos exógena ↔ cuentas PUC

Cada formato tiene **conceptos** (códigos numéricos DIAN). Cada concepto se alimenta de ciertas cuentas del PUC.

**Información Exógena → Configuración → Mapear conceptos**:

Ejemplo formato 1001 (retenciones practicadas):

| Concepto DIAN | Cuenta PUC |
|---|---|
| 5001 Retención compras | 236525 |
| 5002 Retención servicios | 236525 |
| 5003 Retención honorarios | 236525 |
| 5005 ReteIVA | 236740 |

Esto **se hace una sola vez** al configurar. Después es automático.

### 2. Verificar terceros DIAN

Cada tercero debe tener:
- NIT con DV correcto
- Tipo de documento (CC, NIT, CE, etc.)
- Municipio DIAN
- Tax responsibilities

Si te faltan datos, las generaciones futuras fallarán.

## Generar formatos del año

### 1. Selecciona el año fiscal

Por ejemplo, 2025 (se reporta entre marzo y abril del 2026).

### 2. Click "Generar formato"

Selecciona el formato a generar. El sistema:

- Recorre todos los movimientos del año
- Suma por tercero y concepto
- Aplica los topes mínimos (ej. en 1001 solo se reportan terceros con > 10 UVT)
- Genera el XML estándar DIAN

### 3. Validación previa

El sistema te muestra:

- **Total de terceros** en el reporte
- **Total reportado** (debe coincidir con tus auxiliares)
- **Errores** (NITs mal formados, terceros sin municipio, etc.)

Si hay errores, los **corriges** y vuelves a generar.

### 4. Descargar XML

Una vez sin errores, **descargas el XML** y lo cargas en MUISCA.

## Manual entries

Algunos conceptos NO surgen de movimientos contables (ej. aportes de socios al cierre del año). Para estos:

**Información Exógena → Manual entries → Nuevo**:
- Formato
- Concepto
- Tercero
- Monto
- Justificación

Se agregan al XML automáticamente al generar.

## Cargar en MUISCA

1. Entra a MUISCA con tu firma electrónica
2. Sección "Cumplimiento" → "Información Exógena"
3. Selecciona año a reportar
4. Carga cada formato XML uno por uno
5. La DIAN valida en tiempo real
6. Si OK → recibes acuse de recibido
7. Si error → corrige y resube

## Plazos

La DIAN publica calendario anual (Resolución de plazos). Típicamente:

- Grandes contribuyentes: **abril**
- Personas jurídicas: **mayo**
- Personas naturales: **junio**

Plazos según último dígito del NIT, escalonado en el mes.

## Errores comunes

### "Faltan terceros"
Algunos terceros no tienen NIT o tienen DV mal. Edítalos y vuelve a generar.

### "Mi total reportado no cuadra con mi balance"
Revisa los **mapeos de cuentas**. Quizá olvidaste mapear una cuenta auxiliar. O hay cuentas que no van a ese concepto.

### "Operaciones con 'Consumidor Final' (222222222)"
Las ventas anónimas se reportan agrupadas bajo este NIT genérico en formato 2276 (concepto pagos). El sistema lo hace automático.

### "Tarjetas de crédito"
Cuando un cliente paga con tarjeta, el adquirente (Credibanco, Redeban) te retiene y reporta. Asegúrate de capturar esas retenciones en el formato 1003.

## Mejores prácticas

### Durante el año, no en marzo
La clave no es generar en marzo — es **capturar bien todo el año**.

- NITs correctos desde el primer contacto
- Cuentas PUC asignadas según la naturaleza del producto/servicio
- Reconciliación bancaria mensual
- Cierres de mes oportunos

### Generar en pruebas antes
Genera los formatos **2-3 meses antes del plazo** y revisa con tu contador. Detectar errores en febrero es más fácil que en abril a 2 días del vencimiento.

### Guarda los XML
Por norma DIAN los conservas mínimo **5 años**. Tu sistema los archiva pero conviene tener copia de respaldo.

## Próximos temas

- [Retenciones](/docs/dian/retenciones/)
- [Resoluciones DIAN](/docs/dian/resoluciones/)
- [Reportes contables](/docs/contabilidad/reportes/)

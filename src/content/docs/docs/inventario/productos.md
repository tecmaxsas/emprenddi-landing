---
title: Productos
description: Crear, editar y configurar productos. Variables/variantes, imágenes, impuestos y cuentas contables.
sidebar:
  order: 1
---

Los **productos** son el catálogo de todo lo que vendes (bienes físicos, servicios, combos). Cada producto tiene parámetros que afectan cómo se comporta en POS, en compras, en inventario y en contabilidad.

## Acceso

Panel App → **Inventario** → **Productos**.

## Crear producto

### 1. Click "Nuevo producto"

### 2. Tab General

**Sección Imagen del producto**
- Subir PNG/JPG, máx 2 MB
- El editor permite recortar a 1:1 (recomendado, 400×400)
- Aparece en POS, menú QR público, etc.

**Sección Identificación**
- **Código (SKU)**: único por empresa. Recomendado prefijar por categoría (`HW-001`, `PZ-002`)
- **Código de barras**: EAN13/UPC para lectores
- **Marca**: para reportes ABC
- **Nombre**: lo que ve el cajero
- **Descripción**: detalle largo (opcional, sale en facturas)
- **Categoría**: organización y routing impresoras (restaurante)
- **Tipo**:
  - `good` — bien físico que se compra y vende
  - `service` — servicio (no controla inventario)
  - `kit` — combo de productos
  - `consumable` — insumo interno (no se vende)
  - `variable` — producto padre con variantes (no se vende directo)
- **Unidad de medida**: unidad, kg, l, m, hora, etc.

**Sección Comportamiento**
- **Controla inventario**: ON para físicos, OFF para servicios
- **Maneja seriales**: ON para equipos con número de serie (computadores, impresoras)
- **Días de garantía**: 0 = sin garantía. Si lo dejas en 365, al venderse el producto el sistema crea automáticamente el plazo de garantía
- **Se compra / se vende**: para excluir de compras o POS
- **Activo**: ON

### 3. Tab Precios e impuestos

- **Precio de compra default**: autocompleta en factura de compra
- **Precio de venta default**: el que aparece en POS
- **Precio incluye IVA**: si manejas precios "ya con IVA", marcar ON. El sistema desnormaliza al guardar.
- **Precio mínimo de venta** (opcional): para que el cajero no pueda bajar por debajo
- **Impuesto de venta default**: IVA-19, IVA-5, etc.
- **Impuesto de compra default**: el que típicamente te cobran al comprar

### 4. Tab Cuentas contables

Solo si difieren de las default del PUC:

- **Cuenta de inventario** (default 1435)
- **Cuenta de venta** (default 4135)
- **Cuenta de costo** (default 6135)

Útil cuando quieres separar líneas de negocio: por ejemplo, "Pizzas" usa la cuenta de venta `413505-01 Pizzas` y "Bebidas" usa `413505-02 Bebidas`. Así los reportes salen ya desagregados.

### 5. Tab Sedes (multi-sede)

Si tienes varias sedes:
- Marca en qué sedes está disponible el producto
- Por sede puedes override:
  - Precio de venta (ej. más alto en la zona turística)
  - Stock mínimo (alertas)
  - Stock máximo (orden de reposición)
  - Punto de reorden

### 6. Guardar

Click **Guardar**. El producto queda activo.

## Productos con variantes (variables)

Para ropa (talla/color), zapatos (talla/color), etc.

### 1. Crear el producto padre

- **Tipo**: `variable`
- **Se vende**: OFF (no se vende directo, solo sus variantes)
- **Se compra**: OFF
- **Controla inventario**: OFF

### 2. Definir atributos

En el tab Variantes → **Atributos** define:
- Talla: S, M, L, XL
- Color: Rojo, Azul, Verde

### 3. Generar variantes

Botón **"Generar todas las combinaciones"** o crearlas manualmente:
- "Camiseta Roja S"
- "Camiseta Roja M"
- "Camiseta Azul S"
- etc.

Cada variante es un producto independiente con su propio código, precio y stock. El producto padre solo agrupa.

### 4. Las variantes son las que entran al POS

El cajero ve las variantes filtradas por el padre. Si pones "Camiseta" en el buscador, ve todas las variantes para escoger talla/color.

## Cambiar producto después

Edita libremente (precio, descripción, imagen). Los cambios afectan **futuras** ventas — las facturas anteriores mantienen lo que estaba al momento de emisión.

**Lo que NO debes cambiar**:
- Tipo (cambiar de `good` a `service` rompe el histórico)
- Controla inventario (apaga inventario de un producto que ya tiene stock → caos)
- Categoría (puede cambiar routing de impresoras restaurante)

## Desactivar / Eliminar

- **Desactivar**: marca `Activo: OFF`. Ya no aparece en POS ni búsquedas. Su historial queda.
- **Eliminar**: bloqueado si tiene movimientos. Usa "Desactivar" en su lugar.

## Importar productos masivo

Próximamente — desde Excel/CSV. Hoy puedes hacerlo manualmente o pedir a soporte una carga masiva (te pasamos plantilla y nosotros lo cargamos).

## Próximos temas

- [Categorías](/docs/inventario/categorias/)
- [Ajustes de inventario](/docs/inventario/ajustes/)
- [Apertura de inventario](/docs/inventario/apertura-inventario/)
- [Seriales](/docs/inventario/seriales/)

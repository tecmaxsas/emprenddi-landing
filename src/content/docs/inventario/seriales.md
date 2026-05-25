---
title: Gestión de Seriales
description: Para tiendas de electrónica. Cada unidad física vinculada a su compra, venta y garantía.
sidebar:
  order: 6
---

Los **seriales** son el sistema para llevar inventario por **unidad individual identificada con número de serie**. Pensado para tiendas de electrónica, tecnología y cualquier negocio donde cada equipo tiene garantía y necesitas rastrearlo.

> **Ejemplos típicos**: computadores, impresoras, celulares, televisores, monitores, equipos médicos, cajones monederos, herramientas de gama alta.

## Activación

El módulo de seriales es **opcional**. Para activarlo:

### 1. Activar a nivel empresa

Panel App → **Configuraciones** → tab **Empresa** → sección "Inventario por seriales" → toggle **ON**.

### 2. Activar por producto

En cada producto que lo amerite:

**Productos → editar → tab General → "Maneja seriales"** ON.

> No todos los productos necesitan seriales. Cables, accesorios pequeños, mouse genéricos — pueden funcionar como inventario normal sin serial.

## Estados del serial

Cada unidad serializada vive en uno de estos estados:

| Estado | Significado |
|---|---|
| `in_stock` | Disponible para vender |
| `sold` | Vendido a un cliente |
| `returned` | Devuelto por cliente o ajuste de salida |
| `defective` | Marcado como defectuoso (ajuste con razón "damage") |
| `reserved` | Reservado (próximamente, separados/apartados) |

## Flujo end-to-end

### 1. Entrada por compra

Cuando recibes mercancía del proveedor:

**Compras → Factura de Compra → línea con producto serializado** → aparece el `TagsInput` "Números de serie".

- Cantidad = cantidad de seriales (deben coincidir)
- Pegas los seriales (uno por línea, separados por enter, espacio o coma)
- Al **postear** la factura, se crean N registros `ProductSerial` con status `in_stock`

### 2. Entrada por ajuste

Si encuentras unidades no contabilizadas o produces in-house:

**Ajustes → Nuevo → dirección `in`** → captura seriales nuevos.

### 3. Salida por venta (POS tradicional)

En el POS:

**Cajero pistolea el código de barras o el serial** → el sistema:
- Si es un código de barras normal → busca por barcode/code
- Si es un serial in_stock → **trae el producto, asigna el serial a la línea, cantidad = 1**

Por cada venta de producto serializado, hay **una línea por unidad** (1 serial = 1 línea). Esto facilita la garantía individual.

> **No se puede vender un producto serializado sin escanear su serial.** El POS bloquea el tap directo y exige el scan.

### 4. Salida por ajuste

Si pierdes una unidad o detectas defecto:

**Ajustes → Nuevo → dirección `out` → razón** (`damage`, `loss`, etc.) → digitas los seriales que retiras.

- Razón = `damage` → serial pasa a `defective`
- Otras razones → serial pasa a `returned`

### 5. Garantía

Cuando el cliente vuelve con un equipo:

**Garantías → Nueva → buscar por serial** → el sistema autocompleta producto, cliente y factura origen.

Ver [Garantías](/docs/garantias/tickets-garantia/).

## ProductSerialResource

Panel App → **Inventario** → **Seriales**.

Listado con:
- Serial number
- Producto
- Estado (chip de color)
- Sede actual
- Fecha de entrada
- Fecha de venta (si sold)
- Link a factura de compra y de venta

**Filtros**: por estado, producto, sede.
**Buscador**: por número de serie (escribe o pega).

## Vista detalle del serial

Click en un serial → ves el **historial completo**:

- Cuándo entró (factura de compra + proveedor)
- Cuándo se vendió (factura de venta + cliente con teléfono, email)
- Si tiene garantía abierta (ticket vinculado)
- Notas

> **Útil para garantías**: el cliente llega con un equipo, pistoleas el serial, ves todo. **En 5 segundos sabes la fecha de venta, si está bajo garantía, quién lo compró y qué historial de reparaciones tiene**.

## Editar serial

Si necesitas corregir información (sede, notas):

**Vista del serial → Editar**.

**Lo que NO se puede editar**:
- `serial_number` (rompería trazabilidad)
- `product_id` (idem)

Solo: estado, sede, notas.

## Anular operación con seriales

- **Anular factura de compra con seriales**: bloqueado si algún serial ya se vendió. Anula primero esas ventas.
- **Anular factura de venta con seriales**: los seriales vuelven a `in_stock`, disponibles para revender.
- **Anular ajuste con seriales**: revierte el estado al anterior.

## Importar seriales desde Excel

Cuando reciba una factura de compra con 50 seriales, no los tipees uno por uno:

1. Copia la columna de seriales de tu Excel
2. Click en el campo `TagsInput` del POS o factura compra
3. **Pega** (Ctrl+V) — el sistema separa automáticamente por enter/espacio/coma

## Reportes

- **Seriales por estado** — cuántos in_stock, sold, defective
- **Garantías vencidas** — equipos vendidos cuya garantía pasó
- **Top productos con devoluciones** — qué seriales pasaron a returned/defective

## Errores comunes

### "Este serial ya existe"
Validación: no se permite duplicar `serial_number` dentro de la empresa. Verifica si lo capturaste mal en una operación anterior o si físicamente son dos equipos iguales (raro).

### "El POS no me deja vender producto serializado"
Debes pistolear el **serial específico** de la unidad. Tap directo en el grid de productos no funciona — es por diseño, para que no vendas el equipo equivocado.

### "Quiero transferir un serial entre sedes"
Hoy la transferencia entre sedes **no actualiza automáticamente la `location_id`** del serial. Editas el serial manualmente desde Inventario → Seriales → ver → Editar. Esta limitación está en roadmap.

### "Tengo seriales con typo"
Edita el serial desde su vista. El campo `serial_number` es inmutable por diseño para trazabilidad, pero si fue un error genuino, contacta soporte.

## Próximos temas

- [Garantías](/docs/garantias/tickets-garantia/)
- [Productos — Maneja seriales](/docs/inventario/productos/)
- [Factura de Compra con seriales](/docs/compras/factura-compra/)

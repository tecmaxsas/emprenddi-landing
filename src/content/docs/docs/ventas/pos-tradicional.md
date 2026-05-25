---
title: POS Tradicional
description: Pantalla de venta touch para retail. Códigos de barras, descuentos, métodos de pago combinables, impresión térmica.
sidebar:
  order: 1
---

El **POS tradicional** es la pantalla de venta diseñada para retail: tiendas, minimarkets, droguerías, papelerías, tiendas de ropa, electrónica. Optimizado para venta rápida con código de barras o tap en grid.

> Si tu negocio es **restaurante**, ver [POS Restaurante](/docs/restaurante/pos-restaurante/) — es una pantalla distinta con mesas, KDS, modificadores y propinas.

## Acceso

Panel App → **Ventas** → **POS — Punto de Venta**.

Requisitos:
- Tener permiso `pos.use` (lo tienen admin, manager, cashier)
- Tener una **caja abierta** (si no, el sistema te muestra el formulario de apertura)

## Layout

La pantalla se divide en 3 zonas:

```
┌─────────┬──────────────────────────┬──────────┐
│         │                          │          │
│ Catego- │   Grid de productos      │ Carrito  │
│ rías    │   (filtrable + scan)     │ + cobro  │
│         │                          │          │
└─────────┴──────────────────────────┴──────────┘
```

- **Izquierda**: lista de categorías filtrable
- **Centro**: grid de productos con imagen, código y precio
- **Derecha**: carrito + totales + botones de cobro

## Operaciones clave

### Buscar productos

Tres formas:

1. **Click en categoría** → filtra el grid a esa categoría
2. **Barra de búsqueda** arriba → busca por nombre, código o código de barras
3. **Lector de código de barras USB** → al escanear, busca y añade automáticamente

> El POS también detecta **seriales** si tienes la feature activada — al escanear un número de serie, encuentra el producto y lo asigna a la venta. Ver [Seriales](/docs/inventario/seriales/).

### Añadir al carrito

- **Click en una tarjeta**: añade 1 unidad
- **Escanear barras**: añade 1 unidad
- **Si ya existe en el carrito**: aumenta cantidad (excepto si maneja seriales — cada serial es línea separada)

### Editar línea del carrito

Cada línea tiene controles **siempre visibles**:

- `− [cantidad] +`
- Botón `✕` para eliminar

Y un botón **`+` (expandir)** que abre:

- **Precio unitario** (si `pos_allow_price_modification = ON`)
- **Descuento %** por línea (si `pos_allow_discount = ON`)
- **Impuesto** del item (si `pos_allow_tax_modification = ON`)

### Aplicar descuento global

En el bloque amarillo **"Descuento global"** arriba de los totales:

- Toggle **% / $**: tipo de descuento
- Input editable o botones rápidos **5%, 10%, 20%**
- Botón **Quitar** para limpiar

El descuento se reparte proporcionalmente entre todas las líneas (recalcula IVA correctamente, no usa "líneas negativas").

### Aprobación de supervisor

Si el descuento (línea o global) **excede el umbral configurado** (default 10%) y el cajero **no tiene permiso `pos.discount.approve`**, aparece un modal pidiendo:

> **Contraseña de supervisor**

El cajero debe pedir a un admin/manager que digite su contraseña. El sistema valida y aplica el descuento. Si la contraseña no coincide con ningún supervisor, rechaza y no aplica nada.

## Cliente de la venta

Por defecto cada venta sale a **"Consumidor Final"** (NIT 222222222) — apto para venta de mostrador rápida.

Para asignar otro cliente:

- Click en el cliente arriba del carrito → **Cambiar cliente** (atajo F9)
- Buscar por nombre o documento, o
- Crear cliente rápido (solo nombre + documento) con el botón `+`

**Cuándo es importante asignar cliente real**:
- B2B (otra empresa pide factura nominativa)
- Compras de monto alto (> 5 UVT, el cliente puede exigirla)
- Cualquier cliente que quiera descontarse IVA
- Si la configuración `pos_require_customer` está ON, el POS te obliga a seleccionar uno real

## Métodos de cobro

En la barra inferior 5 botones:

### Efectivo

Modal pide **monto recibido**. Calcula el cambio automático.

### Tarjeta (débito o crédito)

Modal pide **referencia** (últimos 4 dígitos o código datafono — opcional).

### Transferencia

Modal pide **referencia** (# transacción).

### Multi-pago

Para cuando el cliente paga con varios métodos a la vez (ej. mitad efectivo, mitad tarjeta). Agregas renglones hasta cuadrar el total.

### A crédito

No cobra nada en el momento. Crea la factura con `payment_status = pendiente` y queda en cartera (CxC) del cliente. Después registras el pago desde la vista de la factura.

## Tipo de documento emitido

Cada venta puede emitirse como:

- **Tiquete POS** (Documento Equivalente) — usa la resolución POS de la sede
- **Factura electrónica DIAN** — usa la resolución electrónica configurada

El cajero elige cuál antes de cobrar (toggle arriba del carrito). El cambio aplica solo a esa venta.

Más detalle: [Resoluciones POS](/docs/ventas/resoluciones-pos/) y [Factura electrónica DIAN](/docs/ventas/factura-electronica-dian/).

## Acciones rápidas (atajos)

| Atajo | Acción |
|---|---|
| **F9** | Cambiar cliente |
| **Enter** en barra de búsqueda | Añadir el primer producto encontrado |
| **Esc** | Cerrar modal activo |

## Sesiones de caja

El POS funciona en **sesiones**: abres caja al iniciar turno, cierras al final. Todo lo vendido queda asociado a esa sesión.

Ver [Sesiones de caja](/docs/ventas/sesiones-caja/).

## Suspender y recuperar venta

Si llegó un cliente que se demora ("ya vuelvo, espérame") y necesitas atender al siguiente:

- **Suspender** la venta actual con el botón **Suspender** (le pones un nombre identificador)
- Atiende al siguiente cliente
- Cuando vuelve el primero, **Recuperar** desde el botón Recuperar y aparece la venta tal cual

## Configuración relacionada

Las opciones del POS se controlan desde **Configuraciones → tab POS**:

| Setting | Default |
|---|---|
| `pos_allow_price_modification` | ON |
| `pos_allow_discount` | ON |
| `pos_allow_tax_modification` | ON |
| `pos_require_customer` | OFF |
| `pos_allow_negative_stock` | OFF |
| `pos_print_after_sale` | ON |
| `pos_discount_supervisor_threshold` | 10% |

Ver [Configuraciones POS](/docs/administracion/configuraciones-empresa/).

## Impresión

Si tienes **impresora térmica configurada con QZ Tray** (ver [Impresoras QZ Tray](/docs/administracion/impresoras-qz-tray/)), el ticket sale automáticamente al cerrar venta.

Si no, el ticket se abre en una **ventana del navegador** para que lo imprimas manualmente (Ctrl+P).

## Problemas comunes

**"El POS no me deja abrir caja"**
Verifica que tu usuario tenga permiso `pos.use` y que la sede esté activa.

**"No me sale la impresora"**
Verifica que QZ Tray esté corriendo en bandeja del sistema. El nombre de la impresora en el sistema debe coincidir EXACTO con el de Windows (cuidado con mayúsculas/espacios).

**"Aparece warning de stock pero quiero vender igual"**
Si `pos_allow_negative_stock` está OFF, el sistema bloquea ventas que dejarían stock negativo. Pídele a admin activarlo (no recomendado) o ajusta inventario.

**"Error al cerrar caja: diferencia muy alta"**
No hay error, es advertencia. El sistema te muestra esperado vs contado. Si hay diferencia mayor a $50.000 te pide nota explicativa antes de cerrar.

## Próximos temas

- [Sesiones de caja](/docs/ventas/sesiones-caja/)
- [Factura electrónica DIAN](/docs/ventas/factura-electronica-dian/)
- [Resoluciones POS](/docs/ventas/resoluciones-pos/)

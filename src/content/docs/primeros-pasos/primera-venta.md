---
title: 5. Hacer tu primera venta
description: Tutorial paso a paso para realizar tu primera venta en el POS desde cero.
sidebar:
  order: 4
---

Hagamos juntos tu **primera venta** para que veas el flujo completo: abrir caja → vender → cobrar → imprimir ticket → ver el asiento contable generado automáticamente.

## Antes de empezar

Asegúrate de tener:

- [ ] Al menos **1 producto** creado ([cómo crear productos](/docs/inventario/productos/))
- [ ] **Inventario inicial cargado** (si el producto controla stock)
- [ ] **Una sede activa** (ya viene "Sede Principal" desde el registro)
- [ ] Tu **rol** (admin, manager o cashier)

## Paso 1: Abrir caja

El POS **no funciona si no hay caja abierta**. Esto sirve para que tu cierre de caja al final del día tenga un punto de partida.

### 1.1 Entrar al POS

Panel App → menú lateral → **Ventas** → **POS — Punto de Venta**.

### 1.2 Pantalla de apertura

Si no hay caja abierta, te muestra el formulario:

- **Sede**: selecciona donde estás operando (típicamente "Sede Principal")
- **Monto inicial**: lo que hay físicamente en la caja al empezar el turno
  - Si arrancas vacío, pon `0`
  - Si hay billetes/monedas de cambio, suma todo y ponlo
- **Notas** (opcional): "Apertura matutina Juan"
- Click **Abrir caja**.

Te queda la caja con un saldo inicial y empieza el turno.

## Paso 2: Vender un producto

### 2.1 Agregar producto al carrito

Tres formas:

- **Click en una tarjeta**: del grid de productos visible.
- **Escribir el código** o nombre en la barra de búsqueda arriba y presionar Enter.
- **Escanear código de barras** con un lector USB (Enter automático).

El producto se añade al carrito (lado derecho) con cantidad `1`.

### 2.2 Modificar la línea (opcional)

En la línea del carrito puedes:

- **Cambiar cantidad**: botones `−` `+` o tecleando en el input
- **Click en el icono `+`** (expandir) para ver:
  - **Precio**: editable si la configuración lo permite
  - **Desc %**: descuento por línea
  - **Impuesto**: cambiar el IVA por línea (si está habilitado)
- **Eliminar línea**: botón `✕` rojo

### 2.3 Aplicar descuento global (opcional)

En la sección **"Descuento global"** (bloque amarillo arriba de los totales):

- Toggle **% / $** según prefieras
- Digita el valor o usa los botones rápidos **5%, 10%, 20%**
- El descuento se distribuye proporcionalmente entre las líneas

> Si el descuento excede el umbral configurado, el sistema te pide **PIN de un supervisor** con permiso `pos.discount.approve`.

### 2.4 Seleccionar cliente (opcional)

Por defecto el POS pone **"Consumidor Final"** (NIT 222222222). Para asignar otro:

- Click en el cliente arriba del carrito → **Cambiar cliente** (o tecla F9)
- Buscar por nombre o documento
- O crear cliente rápido (solo nombre + documento) con el botón `+`

## Paso 3: Cobrar

En la barra inferior tienes 5 botones de cobro: **Efectivo, Tarjeta, Transferencia, Multi-pago, A crédito**.

### Opción A: Pago simple en efectivo

Click en **Efectivo**. Se abre un modal con:

- **Monto a cobrar** (= total de la venta)
- **Recibido**: digita lo que el cliente te da
- **Cambio**: se calcula solo
- Click **Cobrar**.

### Opción B: Pago con tarjeta

Click en **Tarjeta**. Modal pide:

- **Referencia** (opcional): los últimos 4 dígitos de la tarjeta o el código del datafono
- Click **Cobrar**.

### Opción C: Pago mixto

Si el cliente paga con varios métodos a la vez (ej. parte efectivo, parte tarjeta), click en **Multi-pago**:

- Agrega varios renglones, uno por método
- Cuadra el total exacto
- Click **Cobrar**.

### Opción D: A crédito

Si el cliente se va sin pagar (B2B típicamente):

- Click **A crédito**
- El sistema crea una factura de venta con **payment_status = pendiente** y queda en CxC del cliente
- Después registras el pago desde **Ventas → Facturas de Venta → buscar la factura → Recibir pago**.

## Paso 4: Verificar la impresión

Si tienes impresora térmica configurada con QZ Tray, el ticket sale automáticamente cuando cierras la venta.

Si no tienes impresora, el sistema abre el ticket en una **nueva ventana del navegador** para que lo imprimas manualmente.

## Paso 5: Ver el asiento contable generado

Lo más importante: la venta ya generó **asientos automáticos**. Compruébalo:

### 5.1 Ver el asiento de la venta

Panel App → **Contabilidad** → **Asientos contables**. El más reciente arriba.

Para una venta de $10.000 en efectivo con IVA 19%:

| Cuenta | Débito | Crédito |
|---|---|---|
| 110505 Caja | $10.000 | |
| 4135 Ventas | | $8.403 |
| 240805 IVA generado | | $1.597 |

### 5.2 Ver el asiento de COGS (costo de ventas)

Si el producto controla inventario, hay un **segundo asiento** automático que registra el costo de la mercancía vendida:

| Cuenta | Débito | Crédito |
|---|---|---|
| 6135 Costo de ventas | $5.000 | |
| 1435 Mercancías | | $5.000 |

(Donde $5.000 es el costo promedio del producto en tu inventario).

### 5.3 Ver el movimiento de inventario

Panel App → **Inventario** → **Kardex** → buscar tu producto. Verás un movimiento tipo `sale` con cantidad `-1` y el costo unitario aplicado.

## Paso 6: Cerrar caja (al final del día)

Al final del turno, **cierra la caja** para cuadrar:

### 6.1 Click en "Cerrar caja"

Arriba a la derecha del POS.

### 6.2 Digita lo que físicamente contaste

El sistema te muestra:

- **Esperado**: lo que el sistema calcula (apertura + ingresos − egresos)
- **Contado**: tú lo digitas
- **Diferencia**: la calcula automática

### 6.3 Notas y cierre

Si hay diferencia (faltante o sobrante), añade una nota explicando. Click en **Cerrar caja**.

Queda registrado en **Ventas → Sesiones de Caja** para consulta histórica y reportes.

## ¡Listo!

Ya hiciste tu primera venta completa. El flujo es:

1. Abrir caja
2. Vender (POS)
3. Cobrar
4. Imprimir
5. (Al final del día) Cerrar caja

Y **automáticamente** el sistema:
- Generó factura POS o electrónica
- Creó asiento de venta + asiento de COGS
- Actualizó inventario
- Sumó al saldo del cliente (si fue a crédito)
- Registró el ingreso de caja

## Próximos temas

Ahora que conoces el flujo básico, profundiza en:

- [POS tradicional — todas las opciones](/docs/ventas/pos-tradicional/)
- [Factura electrónica DIAN](/docs/ventas/factura-electronica-dian/)
- [Notas crédito y débito](/docs/ventas/notas-credito-debito/)
- [Sesiones de caja](/docs/ventas/sesiones-caja/)
- [Productos y categorías](/docs/inventario/productos/)

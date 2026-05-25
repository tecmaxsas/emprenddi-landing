---
title: POS Restaurante
description: Pantalla de venta para restaurantes con mesas, cursos, modificadores, propinas y división de cuenta.
sidebar:
  order: 1
---

El **POS Restaurante** es la pantalla optimizada para servicio en mesa: gestión de mesas, envío a cocina por categoría, modificadores, cursos, propinas y división de cuenta.

> Distinto al [POS Tradicional](/docs/ventas/pos-tradicional/) que es para retail rápido.

## Activación

Panel App → **Configuraciones** → tab **Empresa** → activar módulo Restaurante.

Después en **tab Restaurante** activas los features específicos que apliquen:

- Mesas y zonas
- Cocina (KDS)
- Modificadores
- Cursos (entrada → fuerte → postre)
- Propinas
- División de cuenta
- Half-and-half (pizzas dos sabores)
- IVA diferencial comer aquí / para llevar
- Domicilios
- Reservaciones
- Carta QR pública

## Acceso

Panel App → **Restaurante** → **POS Restaurante**.

Requiere caja abierta (igual que POS tradicional).

## Layout

```
┌────────────────────────────┬───────────────────────────┐
│                            │                           │
│   Mapa de mesas            │   Panel orden activa      │
│   (zonas + estado mesas)   │   (catálogo + items +     │
│   + reservaciones          │    acciones de cierre)    │
│   + domicilios activos     │                           │
│                            │                           │
└────────────────────────────┴───────────────────────────┘
```

- **Izquierda**: mapa de mesas, filtro por zonas
- **Derecha** (solo cuando hay orden activa): catálogo arriba + items + totales + acciones

## Flujo típico

### 1. Cliente entra y se sienta en una mesa

Click en la mesa → si está libre, abre **orden nueva**.

### 2. Toma de pedido

- Buscar producto en catálogo arriba
- Click → se añade al carrito de la mesa
- Si el producto tiene **modificadores**, abre modal para personalizar ("sin queso", "con salsa extra")
- Si está activado **cursos**, asigna a curso 1, 2, 3 (entrada/fuerte/postre)

### 3. Enviar a cocina

Botón **"Enviar TODO a cocina"** o por curso individual:

- Las comandas se imprimen automáticamente en las impresoras correctas (cocina, barra) según categoría del producto
- Aparecen en la **pantalla KDS** del cocinero

### 4. Items adicionales

Si el cliente pide más cosas durante la comida, se añaden al carrito y se envían a cocina.

### 5. Cliente pide la cuenta

**Cobrar cuenta y facturar**:

- Si activaste **propinas**: aparecen botones rápidos 5%, 10%, 15% o monto fijo
- Si activaste **división de cuenta**:
  - Una cuenta: todo junto
  - Dividir por item: asigna cada producto a etiqueta A, B, C...
- Procesar pago: efectivo, tarjeta, transferencia, mixto
- Imprime ticket / factura

### 6. Cerrar mesa

Tras cobrar, la mesa vuelve a estado **Libre**, lista para el siguiente cliente.

## Operaciones de mesa

### Transferir mesa

Si los clientes se cambian a otra mesa:

**Mesa actual → Transferir → seleccionar mesa libre destino**.

Toda la orden se mueve a la nueva mesa.

### Juntar mesas

Si llega un grupo grande:

**Mesa 1 → Juntar → seleccionar Mesa 2**.

Las órdenes de ambas mesas se consolidan en la mesa 1.

### Cerrar mesa sin facturar (casa invita)

Si decides regalar la cuenta:

**Cerrar sin facturar** → confirmación → mesa libre + no se genera factura (registro interno aparte).

### Cancelar orden

**Cancelar orden (sin cobrar)** → confirmación → liberar mesa sin emitir documento.

> Usar solo en caso real (cliente se fue sin pagar, error de captura). Queda registro de la anulación.

## Modos de servicio

Cada orden puede ser:

- **Comer aquí** (dine_in) — en mesa
- **Para llevar** (takeaway) — sin mesa, recoge en mostrador
- **Domicilio** (delivery) — se envía al cliente

El **IVA puede ser diferencial** si lo activaste:
- Comer aquí: INC 8%
- Para llevar: IVA 0% o 19% según producto

## Nueva orden sin mesa

Para ventas "para llevar" o "domicilio":

- Botón **"Nueva para llevar"** en el mapa
- Crea orden sin mesa, modo `takeaway`

Para domicilio:
- Botón **"Nuevo domicilio"**
- Captura datos cliente: nombre, teléfono, dirección
- Asigna repartidor (después o durante)
- Genera link de tracking público

## Próximos temas

- [Zonas y Mesas](/docs/restaurante/zonas-mesas/)
- [Modificadores](/docs/restaurante/modificadores/)
- [Cocina (KDS)](/docs/restaurante/cocina-kds/)
- [Reservaciones](/docs/restaurante/reservaciones/)
- [Domicilios](/docs/restaurante/domicilios/)
- [Carta QR](/docs/restaurante/carta-qr/)

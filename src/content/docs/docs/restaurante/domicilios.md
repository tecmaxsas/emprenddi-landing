---
title: Domicilios
description: Pedidos a domicilio. Asignación de domiciliario, tarifa de envío y seguimiento.
sidebar:
  order: 6
---

El módulo de **domicilios** registra pedidos para entrega a domicilio con dirección, domiciliario asignado y tarifa de envío diferenciada.

## Activación

Panel App → **Configuraciones → Restaurante** → activar "Domicilios".

## Configuración previa

### 1. Crear domiciliarios

Panel App → **Restaurante → Domiciliarios → Crear**:

- **Nombre**
- **Teléfono**
- **Tipo**: propio / tercero (Rappi, iFood, Didi)
- **Activo**

### 2. Tarifa de envío

Panel App → **Configuraciones → Domicilios**:

- **Tarifa fija** (ej. $5.000)
- **Tarifa por zona** (opcional — define zonas con tarifas distintas)
- **Tarifa por distancia** (opcional, requiere integración de mapas)

### 3. Producto "Servicio de envío"

Crea un producto tipo **servicio** llamado "Envío a domicilio" con la tarifa configurada. Este se agrega automáticamente al pedido domicilio para que aparezca en factura.

## Crear pedido domicilio

**POS Restaurante → tab Domicilios → Nuevo**:

### Datos del cliente

- **Nombre** + **teléfono**
- **Dirección completa** (calle, número, barrio, referencias)
- **Sede que prepara**
- **Notas** (ej. "tocar timbre 3 veces", "casa con reja verde")

### Productos

Agrega ítems de la carta normalmente. Aplican modificadores, descuentos y promociones igual que en mesa.

### Envío

El sistema agrega automáticamente el ítem "Envío a domicilio" con la tarifa configurada. Editable si necesitas cobrar tarifa diferente.

### Forma de pago

- **Contraentrega**: el domiciliario cobra al cliente (efectivo / transferencia)
- **Pagado online**: el cliente pagó por anticipado (Wompi, Bold, link de pago)
- **Pendiente**: se registra como cuenta por cobrar

## Estados del pedido

| Estado | Significado |
|---|---|
| `pending` | Recibido, esperando preparación |
| `preparing` | En cocina |
| `ready` | Listo, esperando domiciliario |
| `dispatched` | Domiciliario lo recogió, en ruta |
| `delivered` | Entregado al cliente |
| `cancelled` | Cancelado (antes de despachar) |

## Asignar domiciliario

Cuando el pedido está `ready`:

**Pedido → Asignar domiciliario → seleccionar**:

- Cambia estado a `dispatched`
- Domiciliario aparece en pantalla "domicilios activos"
- Se imprime ticket con dirección y total a cobrar

## Marcar como entregado

Cuando el domiciliario regresa:

**Pedido → Marcar como entregado**:

- Si fue contraentrega → se registra pago (efectivo o transferencia)
- Estado pasa a `delivered`
- Pedido sale de la lista activa

## Liquidación de domiciliarios

**Restaurante → Domiciliarios → tab Liquidación**:

Por cada domiciliario:
- Pedidos despachados en el período
- Total entregado al restaurante (efectivos cobrados)
- Pago al domiciliario (por entrega o porcentaje configurado)
- Diferencia a entregar/pagar

Útil para domiciliarios propios. Si son terceros (Rappi etc.) la conciliación es por reporte de la plataforma.

## Integración con plataformas externas

Cuando recibes pedido por **Rappi / iFood / Didi**:

1. Crea pedido domicilio en POS normalmente
2. Selecciona domiciliario tipo **tercero** (ej. "Rappi")
3. La forma de pago suele ser **pagado online**
4. La plataforma factura su comisión aparte (típicamente 20-25%)

Para contabilidad: registra la comisión como gasto y el ingreso por el monto bruto del pedido, no el neto.

## Vista mapa (opcional)

Si activas integración con Google Maps:

**Domicilios → tab Mapa**:
- Pines en el mapa por pedido activo
- Domiciliario asignado con su ruta
- Tiempos estimados

## Tips operativos

- Llama al cliente si la dirección es ambigua antes de despachar (evita devoluciones)
- Cobra envío a sedes lejanas con tarifa diferenciada
- Lleva inventario aparte si tienes vajilla desechable para domicilios
- Imprime 2 copias del ticket: una para cocina, una para el domiciliario

## Próximos temas

- [POS Restaurante](/docs/restaurante/pos-restaurante/)
- [Carta QR Online](/docs/restaurante/carta-qr/)

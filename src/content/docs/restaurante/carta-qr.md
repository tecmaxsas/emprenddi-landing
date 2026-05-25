---
title: Carta QR Online
description: Carta digital con QR para mesa. El cliente ordena desde su celular sin descargar app.
sidebar:
  order: 7
---

La **Carta QR** publica tu carta en una URL pública con código QR. El cliente escanea desde su celular, ve la carta, agrega productos y envía el pedido directo al POS.

## Beneficios

- Reduce mesoneros (cliente ordena solo)
- Menú siempre actualizado (sin reimprimir)
- Imágenes de productos atractivas
- Permite pedidos sin contacto físico
- Funciona también para pre-pedidos antes de llegar

## Activación

Panel App → **Configuraciones → Restaurante** → activar "Carta QR".

## Publicar tu carta

### 1. Selecciona productos

Panel App → **Restaurante → Carta QR → Productos**:

Marca cuáles productos del catálogo aparecen en la carta pública.

Para cada producto pública:
- **Foto** (sube imagen del plato)
- **Descripción atractiva** (ingredientes, picante, vegetariano)
- **Disponible** (puedes ocultar productos agotados temporalmente)
- **Etiquetas** (vegano, sin gluten, picante, recomendado)

### 2. Organiza categorías

Las categorías del catálogo se reflejan en la carta. Puedes reordenarlas con drag-and-drop:

- Bebidas primero
- Entradas
- Platos fuertes
- Postres
- Adicionales

### 3. Personaliza la carta

**Configuración → diseño**:
- **Logo en cabecera**
- **Imagen de portada** (banner de bienvenida)
- **Colores**: primario, fondo, texto
- **Idiomas**: español + inglés (opcional)

### 4. Publica

Click **Publicar**. La carta queda accesible en:

```
https://emprenddi.com/carta/<tu-empresa>
```

## Generar QR por mesa

Panel App → **Restaurante → Carta QR → QR por Mesa**:

Para cada mesa genera un QR único que **identifica la mesa al ordenar**. Así cuando el cliente envía pedido, llega ya asignado a su mesa correcta.

URL de cada QR:
```
https://emprenddi.com/carta/<empresa>?mesa=<id-mesa>
```

**Imprimir QR**:
- Descarga PDF de QR por mesa con tamaño imprimible
- Pega en la mesa (laminada o adhesivo)

## Flujo del cliente

1. Cliente llega a mesa 7
2. Escanea QR pegado en la mesa
3. Se abre carta digital con productos
4. Selecciona "Pollo a la plancha + Limonada"
5. Agrega modificadores si aplica
6. Click **Enviar pedido**
7. Pedido aparece en POS marcado como "Mesa 7 — desde QR"

## Recepción en POS

Cuando llega un pedido por QR:

- **Notificación visible** en POS y panel KDS
- Mesero confirma el pedido (acepta o ajusta)
- Una vez confirmado, va a cocina automáticamente

Opción de **modo automático**: pedido va directo a cocina sin confirmación (más rápido pero más riesgo de error).

## Pago

Dos modos de pago disponibles:

### Modo 1: Cliente paga al final por POS

El cliente come, al terminar pide la cuenta y paga en POS normal. La carta QR solo sirvió para ordenar más rápido.

### Modo 2: Cliente paga online por QR

El cliente paga al enviar el pedido con tarjeta o link de pago (Wompi, Bold). Útil para domicilios pero también restaurante.

Activar en **Configuración → Carta QR → permitir pago online**.

## Carta para domicilios

La carta QR también funciona para pedidos a domicilio. URL alternativa:

```
https://emprenddi.com/carta/<empresa>/domicilio
```

Aquí el cliente pone su dirección y los datos del pedido en lugar del número de mesa.

## Estadísticas

- **Productos más vistos** en la carta
- **Productos más pedidos** desde QR vs mesero
- **Conversión** (visitas a la carta vs pedidos enviados)
- **Mesas más activas**

## Tips operativos

- Sube buenas fotos: aumentan ventas hasta 30%
- Marca tus best-sellers con etiqueta "Recomendado"
- Oculta productos agotados rápido para no frustrar al cliente
- Imprime QR con instrucción visible: "Escanéame para pedir"
- Considera dar Wi-Fi gratis con clave visible (sin internet no escanean)

## Próximos temas

- [POS Restaurante](/docs/restaurante/pos-restaurante/)
- [Modificadores](/docs/restaurante/modificadores/)
- [Domicilios](/docs/restaurante/domicilios/)

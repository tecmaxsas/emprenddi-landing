---
title: Modificadores
description: Personalización de platos. "Sin queso", "con salsa extra", grupos obligatorios u opcionales.
sidebar:
  order: 3
---

Los **modificadores** son opciones de personalización que el cliente puede pedir sobre un producto. Ej: "pizza sin queso", "hamburguesa con tocino extra", "café deslactosado".

## Activación

Panel App → **Configuraciones → Restaurante** → activa "Modificadores".

## Estructura

**Grupos de modificadores** → contienen **modificadores individuales**.

Ejemplo:

```
Grupo: "Tipo de masa" (obligatorio, min=1 max=1)
├── Masa delgada (+$0)
├── Masa rellena (+$3.000)
└── Masa integral (+$2.000)

Grupo: "Adiciones" (opcional, min=0 max=5)
├── Queso extra (+$2.000)
├── Piña (+$1.500)
├── Pepperoni (+$3.000)
├── Champiñones (+$2.000)
└── Cebolla extra (+$0)
```

## Crear grupo

Panel App → **Restaurante → Modificadores → Grupos → Nuevo**.

- **Nombre** (ej. "Tipo de masa")
- **Descripción** (ej. "Elige el tipo de masa para tu pizza")
- **Obligatorio**: ON si el cliente debe elegir al menos uno
- **Mínimo selección** (`min_select`): cuántos como mínimo (típico 1 si obligatorio, 0 si opcional)
- **Máximo selección** (`max_select`): cuántos como máximo (1 = solo uno; 5 = hasta 5)

## Crear modificadores dentro del grupo

Para cada opción del grupo:

- **Nombre** (ej. "Queso extra")
- **Precio adicional** (puede ser 0 o positivo)
- **Activo**: ON
- **Orden** (cómo aparece en la lista)

## Asociar grupos a productos

Cada producto puede tener varios grupos:

**Producto → Editar → tab Modificadores → Asociar grupos**.

Una pizza típica tiene:
- Grupo "Tipo de masa" (obligatorio)
- Grupo "Tamaño" (obligatorio)
- Grupo "Adiciones" (opcional)

## Flujo en POS

Cuando el mesero añade un producto con modificadores:

1. Click producto → modal de modificadores se abre
2. Para cada **grupo obligatorio** debe elegir mínimo `min_select`
3. Para **grupos opcionales** puede saltarse
4. El precio del producto se suma al precio base
5. Click **Agregar al pedido** → el item entra al carrito con la selección capturada
6. La **comanda a cocina** sale con el detalle de modificadores: "Pizza Mediana, masa rellena, +queso extra, +piña"

## Modificadores vs combos vs variantes

- **Modificadores**: opciones de personalización (sin queso, con salsa) — mismo producto, ajustes
- **Combo / Kit**: producto que reúne varios productos como uno (Combo Familiar = 1 pizza + 4 gaseosas)
- **Variantes**: producto base con versiones distintas (camiseta talla S, M, L)

Cada uno tiene su lugar.

## Reportes

- **Modificadores más vendidos** — qué tan pedidos son
- **Margen con modificadores** — calcular si los modificadores son rentables

## Próximos temas

- [POS Restaurante](/docs/restaurante/pos-restaurante/)
- [Productos](/docs/inventario/productos/)
- [Cocina (KDS)](/docs/restaurante/cocina-kds/)

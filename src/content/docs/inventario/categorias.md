---
title: Categorías
description: Organizar productos en categorías. Routing de impresoras en restaurante.
sidebar:
  order: 2
---

Las **categorías** organizan tus productos para:

- **Filtrarlos** en el POS (tab por categoría)
- **Reportes** segmentados por categoría
- **Routing de impresoras** en restaurante (bebidas → barra, comidas → cocina)
- **Centros de costo** ligados a categorías

## Acceso

Panel App → **Catálogo** → **Categorías**.

## Crear categoría

- **Nombre** (ej. "Bebidas", "Pizzas", "Computadores")
- **Padre** (opcional) — para anidamiento jerárquico
- **Activa**: ON

## Estructura jerárquica

Puedes anidar categorías:

```
Tecnología
├── Computadores
│   ├── Portátiles
│   └── Desktop
├── Impresoras
└── Accesorios
    ├── Cables
    └── Periféricos
```

Los productos se asignan a categorías finales (hijos), no a las padres.

## Recomendaciones por tipo de negocio

### Retail (electrónica)
- Computadores, Impresoras, Periféricos, Cables, Accesorios, Servicios

### Ropa
- Camisetas, Pantalones, Vestidos, Calzado, Accesorios

### Restaurante
- Bebidas, Entradas, Fuertes, Postres, Especiales, Para llevar

### Mixto
- Adapta según tu giro

## Routing de impresoras restaurante

En restaurante, cuando creas una impresora con propósito **`kitchen`** o **`bar`**, le asignas las **categorías que debe imprimir**:

- Impresora "Cocina" → categorías "Entradas", "Fuertes", "Postres"
- Impresora "Barra" → categoría "Bebidas"

Cuando el mesero envía la orden a cocina, cada producto va a la impresora correcta según su categoría.

## Editar / Desactivar

- **Editar**: cambiar nombre, jerarquía, status
- **Desactivar**: ya no aparece en filtros del POS pero los productos que la usan siguen funcionando
- **Eliminar**: bloqueado si tiene productos asociados

## Próximos temas

- [Productos](/docs/inventario/productos/)
- [POS Restaurante - Impresoras](/docs/administracion/impresoras-qz-tray/)

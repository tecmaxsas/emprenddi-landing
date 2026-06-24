---
title: Categorías
description: Organizar productos en categorías. Cuentas contables por defecto. Routing de impresoras en restaurante.
sidebar:
  order: 2
---

Las **categorías** organizan tus productos para:

- **Filtrarlos** en el POS (tab por categoría)
- **Reportes** segmentados por categoría
- **Cuentas contables por defecto** que heredan los productos (sin tener que configurarlas uno por uno)
- **Routing de impresoras** en restaurante (bebidas → barra, comidas → cocina)

## Acceso

Panel App → **Catálogo** → **Categorías**.

## Crear categoría

**Datos básicos:**
- **Nombre** (ej. "Bebidas", "Pizzas", "Computadores")
- **Padre** (opcional) — para anidamiento jerárquico
- **Código** (opcional) — interno
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

Los productos se asignan a categorías finales (hijos), no a las padres. Las padres sirven para agrupar y para **propagar cuentas contables por herencia** (ver siguiente sección).

## Cuentas contables por defecto

Cuando creas un nuevo producto **no necesitas configurarle las cuentas contables si su categoría ya las define** — las hereda automáticamente.

En la edición de cada categoría hay una sección **"Cuentas contables por defecto"** con 3 selects:

| Cuenta | Para qué | PUC típico |
|---|---|---|
| **Cuenta de inventario** | Donde se registra el stock contablemente al comprar/recibir | `1435` Mercancías no fabricadas |
| **Cuenta de ingreso por venta** | Crédito en el asiento de la factura | `4135` Comercio al por mayor y al por menor |
| **Cuenta de costo de venta** | Débito en el asiento de COGS al cobrar | `6135` Costo comercio al por mayor y al por menor |

### Cascada de resolución

Cuando se postea un movimiento (compra, venta, ajuste), el sistema resuelve la cuenta en este orden:

```
Producto (si tiene override)
  → Categoría del producto
    → Categoría padre (recursivo)
      → Cuenta del PUC por defecto (1435 / 4135 / 6135)
```

Si nada en la cadena resuelve, el asiento se omite con un mensaje claro.

### Ejemplo práctico

| Configuración | Resultado |
|---|---|
| Categoría "Pizzas" → cuenta venta `4135` | Toda venta de pizza va a `4135` |
| Categoría "Servicios" → cuenta venta `4140` | Toda venta de servicio va a `4140` |
| Producto "Pizza Premium" sin override | Hereda `4135` (de su categoría) |
| Producto "Pizza con receta especial" con override `413505-01` | Va a `413505-01` (gana el override del producto) |

Una factura con productos de distintas categorías genera un asiento contable con **N líneas DR + N líneas CR** automáticamente balanceadas — sin mezclar cuentas.

### Lo que NO se hereda: los impuestos

Los **impuestos (IVA)** se siguen configurando **producto por producto**, no por categoría. La razón: dentro de una misma categoría suelen coexistir tasas distintas — por ejemplo, una categoría "Alimentos" puede tener productos con IVA 5%, IVA 0% y exentos. Forzar herencia generaría errores fáciles.

## Recomendaciones por tipo de negocio

### Retail (electrónica)
- Computadores, Impresoras, Periféricos, Cables, Accesorios, Servicios
- Categoría "Servicios" → cuenta de venta distinta para separar reportes

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

- **Editar**: cambiar nombre, jerarquía, cuentas, status
- **Desactivar**: ya no aparece en filtros del POS pero los productos que la usan siguen funcionando
- **Eliminar**: bloqueado si tiene productos asociados

> Si cambias las cuentas de una categoría, **solo afecta los asientos futuros**. Los movimientos ya contabilizados conservan las cuentas con las que se postearon.

## Próximos temas

- [Productos](/docs/inventario/productos/)
- [Plan de Cuentas (PUC)](/docs/contabilidad/plan-cuentas/)
- [POS Restaurante - Impresoras](/docs/administracion/impresoras-qz-tray/)

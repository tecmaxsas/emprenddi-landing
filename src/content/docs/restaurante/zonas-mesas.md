---
title: Zonas y Mesas
description: Configurar zonas (salón, terraza) y mesas con código, capacidad y posición visual.
sidebar:
  order: 2
---

Para que el POS de restaurante funcione, debes configurar las **zonas** (áreas físicas del restaurante) y las **mesas** dentro de cada zona.

## Crear zonas

Panel App → **Restaurante** → **Zonas de atención** → **Nueva**.

Datos:

- **Nombre** (ej. "Salón principal", "Terraza", "Barra")
- **Color** (para distinguir visualmente en el mapa)
- **Activa**: ON
- **Sede**: a qué sede pertenece (si tienes varias)

Sugerencias por tipo de negocio:

- **Restaurante** clásico: Salón, Terraza, Privado
- **Bar**: Barra, Mesas, VIP
- **Café**: Interior, Exterior
- **Comida rápida**: Mostrador (sin mesas), Mesas

## Crear mesas

Panel App → **Restaurante** → **Mesas** → **Nueva**.

Datos:

- **Código** (ej. "M1", "T-05", "BAR-2") — corto, visible para el mesero
- **Nombre / Descripción** (opcional, "Mesa redonda 4 personas")
- **Zona** asignada
- **Capacidad** (número de personas)
- **Posición X / Y** (opcional, para mapa visual)
- **Activa**: ON

## Mapa visual

Si configuras posiciones X/Y, el sistema dibuja un **plano del restaurante**. Útil pero opcional — un grid simple también funciona.

## Estados de mesa

En el POS, cada mesa se muestra con color según estado:

| Estado | Color |
|---|---|
| Libre | Verde |
| Ocupada | Naranja / Rojo |
| Reservada | Amarillo |

El estado se actualiza automático:
- Abrir orden → ocupada
- Cobrar/cerrar → libre
- Reservación próxima → reservada (1 hora antes)

## Operaciones de mesa (desde POS)

### Transferir

Mover una orden a otra mesa (cliente se cambió).

### Juntar

Combinar dos mesas en una sola orden (grupo grande).

### Liberar

Forzar a libre (si quedó "ocupada" por error).

## Borrar mesa

Bloqueado si tiene **órdenes activas o históricas**. Marca como inactiva en lugar de borrar.

## Próximos temas

- [POS Restaurante](/docs/restaurante/pos-restaurante/)
- [Reservaciones](/docs/restaurante/reservaciones/)

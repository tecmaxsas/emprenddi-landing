---
title: Reservaciones
description: Agenda de reservas. Asignación de mesa, llegada y no-shows.
sidebar:
  order: 5
---

Las **reservaciones** te permiten capturar reservas de clientes con anticipación y bloquear mesas para sus horarios.

## Activación

Panel App → **Configuraciones → Restaurante** → activar "Reservaciones".

## Acceso

Panel App → **Restaurante** → **Reservaciones**.

## Crear reserva

Datos:

- **Cliente**: nombre + teléfono (no requiere ser cliente registrado)
- **Fecha y hora**
- **Personas**
- **Mesa sugerida** (opcional — el sistema sugiere según capacidad)
- **Notas** (cumpleaños, alergias, preferencias)
- **Sede**

Click **Guardar**.

## Estados

| Estado | Descripción |
|---|---|
| `pending` | Confirmada, esperando llegada |
| `arrived` | Cliente llegó, mesa ocupada |
| `completed` | Cliente terminó, mesa libre |
| `cancelled` | Cancelada por el cliente |
| `no_show` | Cliente no llegó (registro útil para detectar patrones) |

## Vista calendario

**Reservaciones → tab Calendario** muestra todas las reservas por día/semana/mes con mesas asignadas.

Útil para:
- Planear personal por hora
- Evitar overbooking
- Avisar a cocina de horarios pico

## Aviso visual en POS

Cuando el POS abre una mesa que tiene reserva próxima (típicamente 1 hora antes), aparece **alerta amarilla**: "Mesa reservada a las 8 PM por Pedro González".

Si la reserva está muy cerca (15 min), pasa a **rojo**: "RESERVA INMINENTE — no asignar".

## Confirmar llegada

Cuando el cliente reservado llega:

**Reservación → Marcar como arrived**:
- Mesa pasa a `ocupada`
- POS abre orden automáticamente

## No-show

Si pasa 30 min de la hora reservada sin llegar el cliente:

**Reservación → Marcar como no-show**:
- Mesa vuelve a libre
- Queda registrado para futura referencia (clientes repetidamente "no-show" suelen marcarse o pedírseles tarjeta de garantía)

## Cancelar reservación

Si el cliente avisa que no puede:

**Reservación → Cancelar**:
- Mesa vuelve a libre antes de la hora reservada
- Queda histórico

## Estadísticas

- **Tasa de no-shows** por día/cliente
- **Reservas por hora del día** (cuándo es tu pico)
- **Promedio de personas por reserva**

## Próximos temas

- [POS Restaurante](/docs/restaurante/pos-restaurante/)
- [Zonas y Mesas](/docs/restaurante/zonas-mesas/)

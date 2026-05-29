---
title: Citas y Agendamiento
description: Agenda de citas de servicio (cliente + profesional + servicio) con calendario mes/semana. Atiende y cobra en el POS con un clic; la cita queda enlazada a la factura.
sidebar:
  order: 12
---

El módulo de **citas** te permite agendar servicios para tus clientes, asignarles un profesional, verlos en un **calendario** y cerrar el ciclo cobrando en el POS. Ideal para salones, barberías, consultorios, spas y talleres.

## Activación

Es un **módulo opcional** — viene desactivado por defecto.

Panel App → **Configuraciones → Citas** → activa **"Activar módulo de citas"**.

Parámetros de comportamiento:

| Parámetro | Para qué |
|---|---|
| **Duración por defecto** | Minutos sugeridos al crear una cita (ej. 30). Se autocalcula el fin. |
| **Cliente obligatorio** | Exige seleccionar cliente al agendar |
| **Permitir solapamiento** | Si está apagado, avisa cuando un profesional ya tiene una cita en ese horario |

Una vez activo, en el sidebar (grupo **Ventas**) aparecen **Agenda** (calendario) y **Citas** (gestión).

## Agendar una cita

Panel App → **Ventas → Citas → Nueva cita** (o el botón **+ Nueva cita** desde la Agenda).

| Campo | Notas |
|---|---|
| **Cliente** | Cliente del directorio (obligatorio si lo activaste en Configuraciones) |
| **Profesional** | Empleado que atiende. Opcional (puede quedar sin asignar) |
| **Servicio** | Producto de tipo **"Servicio"**. Recomendado: se precarga en el POS al cobrar |
| **Inicio / Fin** | El fin se autocalcula con la duración por defecto; puedes ajustarlo |
| **Estado** | Inicia en "Agendada" |
| **Notas** | Texto libre |

> Si **no permites solapamiento**, al guardar el sistema valida que el profesional no tenga otra cita cruzada en ese horario.

> El **servicio** debe existir como producto de tipo "Servicio" en tu catálogo. Sin servicio, la cita funciona igual, pero al cobrar el carrito del POS abrirá vacío.

## Estados de la cita

```
Agendada → Confirmada → Atendida → Completada
                                  ↘ Cancelada / No asistió
```

| Estado | Significado |
|---|---|
| **Agendada** | Estado inicial |
| **Confirmada** | El cliente confirmó |
| **Atendida** | El cliente llegó / servicio en curso (habilita el cobro) |
| **Completada** | Cobrada — con la factura enlazada |
| **Cancelada** | Cancelada |
| **No asistió** | El cliente no llegó |

## Calendario (Agenda)

Panel App → **Ventas → Agenda**.

- **Vista Mes / Semana** (toggle). El mes muestra el grid completo con las citas como chips coloreados por estado.
- **Navegación** ← Anterior / Hoy / Siguiente → (avanza por mes o por semana según la vista).
- **Click en un día** del mes → salta a la vista de **semana** anclada en esa fecha.
- **Click en una cita** → abre su edición.

## Atender y cobrar

El botón **"Atender y cobrar"** (en la lista de Citas y en la edición) cierra el ciclo:

1. Marca la cita como **Atendida**.
2. Abre el **POS** con el **cliente** y el **servicio precargados**.
3. El cajero ajusta el carrito si hace falta y procesa el cobro.
4. Al finalizar la venta, la cita pasa a **Completada** con la **factura enlazada**.

> Disponible para usuarios con permiso de gestionar citas y de usar el POS.

## En el Escritorio

Si tienes el módulo activo, el [Escritorio](/docs/primeros-pasos/escritorio/) muestra la sección **"Citas de hoy"**: agendadas, pendientes por atender, completadas y la próxima cita.

## Permisos

| Permiso | Para qué |
|---|---|
| `appointments.view` | Ver la agenda y las citas |
| `appointments.manage` | Crear, reprogramar, atender y cancelar citas |

Por defecto los tienen **Administrador**, **Gerente**, **Cajero** y **Vendedor** (el front-desk agenda y atiende).

## Casos prácticos

### Salón / barbería
- Servicios como productos: "Corte", "Tinte", "Manicure" (tipo Servicio, con precio).
- Profesional = el estilista. Apaga "permitir solapamiento" para no agendar dos clientes a la vez.
- Cliente llega → "Atender y cobrar" → POS con el corte precargado → cobro → cita completada.

### Consultorio
- Servicio "Consulta general". Duración por defecto 30 min.
- Cliente obligatorio activado (historia ligada al cliente).
- Agenda en vista semana para ver el día a día del profesional.

## Próximos temas

- [POS Tradicional](/docs/ventas/pos-tradicional/)
- [Factura de Venta](/docs/ventas/factura-venta/)
- [Productos (servicios)](/docs/inventario/productos/)
- [El Escritorio](/docs/primeros-pasos/escritorio/)

---
title: Promociones y Descuentos
description: Promociones automáticas (%, monto fijo, 2x1, volumen, combos, happy hour) y cupones con código. Se aplican solas al cobrar.
sidebar:
  order: 9
---

Las **promociones** te permiten configurar descuentos automáticos que se aplican solos al carrito cuando se cumplen las condiciones (días, horas, productos, montos mínimos). Reemplazan los "descuentos manuales" que el cajero tenía que recordar aplicar.

También soporta **cupones con código** que el cliente o cajero ingresa manualmente en POS (ej. `BIENVENIDO10`).

## Activación

Es un **módulo opcional** — viene desactivado por defecto.

Panel App → **Configuraciones → Promociones** → activa **"Activar promociones"**.

Una vez activo, en el sidebar aparece **Ventas → Promociones** y los descuentos empiezan a aplicarse automáticamente en POS.

En la misma página puedes prender/apagar tipos específicos (ej. apagar "BOGO" si nunca haces 2x1).

## Tipos de promoción

| Tipo | Para qué sirve | Ejemplo |
|---|---|---|
| **Porcentaje** | Descuento % sobre productos del alcance | 10% off en Bebidas |
| **Monto fijo** | Descuento $ fijo sobre el carrito | $5.000 off compras > $50.000 |
| **2x1 / 3x2 (BOGO)** | Compra X, lleva Y gratis (la más barata) | Compra 2 hamburguesas, paga 1 |
| **Volumen escalonado** | Descuento mayor según cantidad | 4-9 und 5%, 10-19 und 10%, 20+ 15% |
| **Combo / Bundle** | Conjunto de productos a precio fijo | Hamburguesa + Papas + Bebida = $25.000 |
| **Happy Hour** | Cualquier tipo, limitado a días + horas | 20% off bebidas Lun-Vie 5-7 PM |

Cada tipo se configura en su sección dedicada del formulario.

## Crear una promoción

Panel App → **Ventas → Promociones → Crear**.

El formulario tiene **6 pestañas**:

### 1. General
- **Nombre** (visible al cajero y cliente)
- **Descripción** (interna, opcional)
- **Activa** (si está apagada no se aplica aunque siga vigente)
- **Tipo** (lista solo los habilitados en Configuraciones)
- **Requiere código** (cupón) + **Código** (ej. `BIENVENIDO10`)

### 2. Descuento
Los campos cambian según el tipo seleccionado:

- **Porcentaje**: input %
- **Monto fijo**: input $ COP
- **BOGO**: cuántas comprar, cuántas regalar, estrategia ("la más barata" recomendado)
- **Volumen**: tabla de escalones (desde, hasta, %)
- **Combo**: productos del combo + cantidades + precio final del combo

### 3. Alcance — a qué productos aplica
- **Todos los productos**
- **Categorías específicas** (multi-select)
- **Productos específicos** (multi-select hasta 500)

### 4. Condiciones
- **Cantidad mínima** de unidades en carrito
- **Monto mínimo** del subtotal
- **Modos de servicio** (restaurante): comer aquí / para llevar / domicilio
- **Límites de uso** (solo cupones): total + por cliente

### 5. Vigencia
- **Fecha desde / hasta** (opcional)
- **Happy Hour**: días de la semana (Lun-Dom) + rango horario (desde / hasta)

### 6. Comportamiento
- **Combinable con otras** (stackable) — si está off, es exclusiva
- **Prioridad** (mayor = se evalúa primero)

## Cómo se aplican en POS

### Promociones automáticas
Se aplican **solas** cuando el cajero agrega productos al carrito y se cumplen las condiciones. El cajero ve una etiqueta verde con el nombre de la promoción y el descuento.

```
🎟️ 10% off Bebidas         −$1.500
🎟️ Happy Hour Cervezas     −$3.200
```

### Cupones con código
En el panel de carrito hay un campo **"Código de cupón"**:
1. Cajero ingresa el código (o cliente lo dicta)
2. Click **Aplicar** o Enter
3. Si el código es válido y se cumplen las condiciones → descuento aplica
4. Si no → notificación "Cupón no aplicable" con el motivo

Para quitar el cupón: botón **✕** al lado del input.

### Distribución del descuento
- El descuento se distribuye proporcionalmente entre las líneas del alcance
- Los impuestos se recalculan sobre la base con descuento aplicado
- En **POS Restaurante con split bill** (varias tabs): se prorratea entre los tabs proporcional al subtotal de cada uno

## Restaurante: Happy Hour

Para activar Happy Hour:
1. Configuraciones → Promociones → activa "Happy Hour"
2. Crea una promo de cualquier tipo
3. En tab **Vigencia**: marca los días (ej. Lun-Vie) + rango horario (ej. 17:00 - 19:00)
4. En tab **Alcance**: limita a la categoría "Bebidas"

Ejemplo: "20% off bebidas Lun-Vie 5-7 PM"
- Lunes 3 PM → no aplica
- Lunes 6 PM → aplica 20% en todas las bebidas
- Sábado 6 PM → no aplica (sábado no está en días permitidos)

## Cupones — límites de uso

Los cupones tienen 2 límites configurables:

| Límite | Para qué sirve |
|---|---|
| **Usos totales máximos** | Cuántas veces puede usarse en total. Después de N usos, el cupón se "agota". |
| **Usos por cliente** | Cuántas veces puede usarlo el mismo cliente. Útil para "WELCOME10 solo aplica una vez por cliente". Requiere que la venta tenga cliente identificado (no Consumidor Final). |

## Combinar varias promociones

Por defecto, **solo aplica una promoción a la vez** (la de mayor prioridad).

Si quieres permitir combinar (apilar):
1. Configuraciones → Promociones → activa **"Permitir apilar promociones"**
2. En cada promoción que quieras combinable, marca **"Combinable con otras"** en tab Comportamiento

Las promociones combinables se aplican TODAS si cumplen sus condiciones. Las exclusivas (sin "combinable") detienen la cadena al aplicarse.

## Duplicar promociones

Para crear una variación de una promoción existente:
- En la lista, action **Duplicar** (icono 📄)
- Se crea una copia con sufijo "(copia)" y desactivada
- Edita los cambios y activa cuando esté lista

Útil para: "Black Friday" copiado de "Cyber Monday" del año anterior.

## Reporte de uso

Panel App → **Reportes → Uso de Promociones**.

Tabla con todas las promociones y sus métricas en el rango seleccionado:
- Tipo, descripción
- Veces usada en el período
- Total descontado en $
- Usos totales (acumulado histórico)
- Última vez usada
- Vencimiento

Filtros: tipo, solo activas, rango de fechas.

**Header summary**: "Total: X usos · $Y en descuentos".

## Casos prácticos

### Ejemplo 1: Tienda de barrio
- **Promoción permanente**: 5% off pago en efectivo (no requiere código, sin vigencia)
- **Mensual**: cupón `MES_X` 10% off compras > $50K, máx 100 usos
- **Quincena**: BOGO en aceite 2x1

### Ejemplo 2: Restaurante
- **Happy hour**: 20% off bebidas Lun-Vie 5-7 PM
- **Almuerzo ejecutivo**: combo Sopa + Plato + Bebida = $18K (Lun-Vie 12-3 PM)
- **Para llevar**: 10% off al marcar "Para llevar" (incentivo)

### Ejemplo 3: Distribuidora mayorista
- **Volumen**: 5% off 10-49 und, 10% off 50-99, 15% off 100+
- **Cliente VIP**: cupón `VIP2026` 15% off sin mínimo, max 1 uso por cliente

## Buenas prácticas

- **No abuses de los descuentos**: cada promoción reduce margen. Mide el impacto en el reporte.
- **Cupones con vigencia limitada**: úsalos para urgencia ("solo este mes"). Sin vigencia se vuelven permanentes y pierden efecto.
- **No apiles sin control**: si activas "Permitir apilar", revisa que combinaciones extremas (cupón 20% + 2x1 + Happy hour) no te dejen vendiendo a pérdida.
- **Prioridad**: la promo exclusiva más valiosa para el cliente debe tener prioridad mayor (gana sobre las menos valiosas).

## Próximos temas

- [POS Tradicional](/docs/ventas/pos-tradicional/)
- [POS Restaurante](/docs/restaurante/pos-restaurante/)
- [Tarjetas Regalo (Gift Cards)](/docs/ventas/gift-cards/)

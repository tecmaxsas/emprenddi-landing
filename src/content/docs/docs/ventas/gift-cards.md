---
title: Tarjetas Regalo (Gift Cards)
description: Vende bonos prepagados con saldo. El cliente los entrega como regalo y el receptor los redime en POS.
sidebar:
  order: 10
---

Las **tarjetas regalo** (gift cards) son bonos prepagados que vendes en POS. El cliente paga un monto, recibe un código único, y el destinatario lo usa después como medio de pago en cualquier venta futura.

Casos típicos:
- Restaurante: cliente compra gift card de $100K para regalar en cumpleaños
- Retail en diciembre: gift cards de $50K para regalos de navidad
- Tienda de ropa: gift card como devolución cuando no quieres dar efectivo
- Programa de fidelización: gift card como premio por compras acumuladas

## Activación

Es un **módulo opcional** — viene desactivado.

Panel App → **Configuraciones → Gift Cards** → activa **"Activar tarjetas regalo"**.

Al activar, automáticamente:
1. Aparece **Ventas → Tarjetas Regalo** en el sidebar
2. Se crea el producto especial **"Tarjeta Regalo"** (código `GIFTCARD`) que el cajero usa en POS para emitir
3. Se habilita el campo "Código gift card" en POS para redimir

## Configuración

En **Configuraciones → Gift Cards** puedes ajustar:

| Opción | Para qué sirve | Default |
|---|---|---|
| **Permitir redención parcial** | Si está off, el cliente debe usar todo el saldo de una. Si on, puede usar parte y guardar el resto. | On |
| **Pedir datos del destinatario al emitir** | Nombre + email/teléfono del receptor (obligatorio si está on). | Off |
| **Enviar email al emitir** | Manda el código por correo automáticamente al destinatario. Requiere SMTP configurado. | Off |
| **Permitir recargar saldo** | Permite agregar saldo a una gift card existente (vs. crear una nueva). | Off |
| **Meses de vigencia por defecto** | Cuánto duran las gift cards desde emisión (0 = sin expiración). | 12 |
| **Cuenta contable de pasivo** | Cuenta del PUC donde se registra el pasivo al emitir. | 240825 Anticipos recibidos |

## Cómo funciona contablemente

Una gift card es **dinero adelantado** que la empresa debe al tenedor. Es un **pasivo** en el balance hasta que se redime.

**Al emitir** (vender por $100K en efectivo):
```
DR Caja                    $100.000
   CR Anticipos recibidos        $100.000
```

**Al redimir** (cliente paga $80K de su compra con la gift card):
```
DR Anticipos recibidos      $80.000
   CR Cuentas por cobrar / Ventas    $80.000
```

El saldo restante en la gift card sigue como pasivo hasta que se use o expire.

## Vender (emitir) una gift card

### Desde POS Tradicional

1. **POS** → agrega el producto **"Tarjeta Regalo"** al carrito
2. Se abre modal pidiendo:
   - **Monto** (campo grande, ej. $50.000)
   - **Para (destinatario)** — opcional
   - **Email destinatario** — opcional
   - **De parte de** — opcional
3. Click **Agregar al carrito** → la línea aparece con descripción "Tarjeta Regalo $50.000"
4. Cobra normal (efectivo, tarjeta, etc.)
5. Al confirmar venta, **notificación persistente** muestra el código generado:

```
🎁 Gift Cards emitidas:
  • GC-AB7XY-K2M3P · $50.000

Entrega este código al cliente.
```

6. Anota el código en la tarjeta física o envíalo por mensaje

### Desde POS Restaurante

Igual: el cajero abre la mesa → agrega "Tarjeta Regalo" → modal pide monto + destinatario → confirma → al cobrar la cuenta, la notificación trae el código.

### Desde Admin (sin POS)

Para emitir sin pasar por POS:

Panel App → **Ventas → Tarjetas Regalo → Emitir tarjeta**:
- Saldo inicial
- Moneda
- Fecha de expiración
- Datos del destinatario (si aplica)
- Notas internas

Click **Crear** → notificación con código generado.

## Redimir una gift card en POS

### Desde POS Tradicional

1. Cajero agrega productos al carrito normal
2. En la sección "Gift Cards" del panel de carrito, ingresa el **código** (ej. `GC-AB7XY-K2M3P`)
3. Click **Redimir** o Enter
4. Si el código es válido:
   - Notificación: "Gift card aplicada. Saldo: $X. Se redime: $Y"
   - La gift card aparece como badge violeta con el monto cubierto
5. El total a pagar se reduce — el cliente cubre el resto con efectivo/tarjeta
6. Si el saldo es mayor que el total, redime solo lo necesario y guarda el resto en la tarjeta

### Desde POS Restaurante

Igual: en el panel de orden, sección "Gift Cards" → ingresa código → Redimir → al cobrar, el modal muestra cuánto cubre la gift card y cuánto falta pagar.

### Combinación con otros pagos

Las gift cards son **un método de pago más**. Se combinan libremente con efectivo, tarjeta, transferencia, etc.

Ejemplo: Total $120K = $50K gift card + $70K en efectivo.

## Limitaciones / validaciones

- **No se acepta una misma gift card 2 veces** en la misma venta
- **No se redime más del saldo disponible**
- **No se redime si la tarjeta está expirada/cancelada** (notificación clara)
- **Si "Permitir redención parcial" está off**: debe redimirse el saldo completo o nada
- **Si total = $0** después de gift cards: la venta queda procesada (no necesita pagos adicionales)

## Gestión administrativa

Panel App → **Ventas → Tarjetas Regalo** lista todas las gift cards emitidas.

### Vista de la tabla

| Columna | Detalle |
|---|---|
| **Código** | Mono, copyable, en negrita |
| **Estado** | Badge: Activa / Redimida / Expirada / Cancelada |
| **Saldo inicial** | Monto con que se cargó |
| **Saldo actual** | Disponible (verde si >0) |
| **Destinatario** | Nombre del receptor (si se capturó) |
| **Expira** | Fecha de vencimiento (rojo si pasó) |
| **Emitida** | Fecha de emisión |

### Filtros
- Estado (Activa / Redimida / Expirada / Cancelada)
- Por expirar en 30 días (rápido)
- Con saldo disponible

### Acciones por tarjeta

**Ver detalle**: Infolist con todos los datos + secciones de:
- Tarjeta: código + estado + vence
- Saldo: inicial + actual + redimido
- Emisión: fecha + usuario + factura origen
- Destinatario: si se capturó
- Notas

**Editar datos**: solo permite cambiar notas y datos del destinatario. Saldo, código y estado son **inmutables** desde edit.

**Ajustar saldo** (permiso `gift_cards.cancel`):
- Modal con: dirección (sumar/restar), monto, motivo obligatorio
- Crea transacción tipo "Ajuste" en el ledger
- Útil para: regalar saldo extra al cliente, descontar por reclamo, corregir error

**Anular** (permiso `gift_cards.cancel`):
- Saldo va a 0
- Estado pasa a "Cancelada"
- Irreversible
- Motivo obligatorio

## Historial de movimientos (ledger inmutable)

Cada gift card tiene un **historial completo** de todos los movimientos de saldo:

| Tipo | Cuándo se crea | Monto |
|---|---|---|
| **Emisión** | Al crear la tarjeta | + (carga inicial) |
| **Redención** | Cada vez que se usa en POS | − |
| **Devolución** | Si se devuelve una venta donde se usó | + |
| **Ajuste** | Acción admin "Ajustar saldo" | + o − |
| **Anulación** | Acción admin "Anular" | − (lleva a 0) |
| **Expiración** | Cuando vence | − (lleva a 0) |

Cada transacción registra: fecha/hora, tipo, monto, saldo después, factura (si aplica), usuario, notas.

Visible en el detalle de la tarjeta, tab **"Historial de movimientos"**.

## Permisos

| Permiso | Para quién |
|---|---|
| `gift_cards.view` | Ver listado y detalle (todos los roles operativos) |
| `gift_cards.issue` | Emitir nuevas tarjetas desde admin o POS (cajero) |
| `gift_cards.redeem` | Redimir en POS (cajero) |
| `gift_cards.cancel` | Anular, ajustar saldo (admin / manager) |

Roles por defecto:
- **Cajero**: view + issue + redeem (no cancel)
- **Manager / Admin**: todos

## Reporte de gift cards

Panel App → **Reportes → Estado Gift Cards**.

### Header con KPIs
```
📤 Emitidas $X · 💳 Redimidas $Y · 🔵 En circulación $Z
```

- **Emitidas**: $ con que se cargaron tarjetas en el período
- **Redimidas**: $ consumido en POS en el período
- **En circulación**: pasivo total — saldo de TODAS las activas con balance > 0 (no filtra por período)

### Tabla detallada
Lista cada gift card con su estado, saldo inicial, saldo actual, redimido, emisión, expiración, último uso.

Filtros: rango fechas emisión, estado, vencen en 30 días.

## Conciliación contable

El **"En circulación"** del reporte debe coincidir con el saldo de la cuenta contable de pasivo gift card (`240825` por defecto).

**Cómo conciliar**:
1. Reporte → Estado Gift Cards → leer "En circulación: $X"
2. Reportes → Libro Mayor → cuenta 240825 → ver saldo al final del período
3. Ambos deben ser iguales (con tolerancia de centavos por redondeo)

Si hay diferencia: revisa transacciones manuales que toquen 240825 sin pasar por emisión/redención (típico: ajustes contables manuales).

## Casos prácticos

### Programa "Regala una experiencia"
Cliente compra gift card de $200K para cumpleaños de su pareja:
- Cajero: agrega "Tarjeta Regalo" → modal → $200K + nombre del destinatario + email
- Cliente paga $200K en efectivo
- Sistema emite código `GC-XXXXX-XXXXX`
- Cajero imprime tarjeta física con el código o envía por WhatsApp

### Devolución sin efectivo
Cliente devuelve mercancía de $80K pero no quiere efectivo (política de la tienda):
- Cajero: emite gift card de $80K a nombre del cliente
- Cliente sale con código, puede usarlo cuando quiera

### Programa de fidelización
Cliente acumula compras > $1M en el año:
- Manager: emite gift card de $50K desde admin como premio
- Notas: "Premio fidelización 2026"
- Envía código al cliente

### Combo navideño
Empresa compra 50 gift cards de $30K para regalar a empleados:
- Manager: emite 50 gift cards desde admin (una por una)
- Imprime las 50 con sus códigos
- Empresa las distribuye en sobres

## Buenas prácticas

- **Configura la cuenta contable** antes de emitir la primera. Si quedan en 240825 default y luego tu contador prefiere otra, tienes que reclasificar manualmente.
- **Vencimiento razonable** (12-24 meses): muy corto frustra al cliente, sin vencimiento te queda pasivo eterno.
- **Concilia mensualmente** el "En circulación" del reporte con la cuenta contable.
- **Educar al cajero**: el código se entrega UNA SOLA VEZ en la notificación. Si la pierde, el admin tiene que buscar la tarjeta en el listado.
- **Para alto volumen**: imprime tarjetas físicas con QR del código — más profesional y reduce errores de tecleo al redimir.

## Próximos temas

- [Promociones y Descuentos](/docs/ventas/promociones/)
- [POS Tradicional](/docs/ventas/pos-tradicional/)
- [POS Restaurante](/docs/restaurante/pos-restaurante/)
- [Reportes Contables](/docs/contabilidad/reportes/)

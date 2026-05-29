---
title: Comisiones por Vendedor
description: Calcula comisiones por vendedor sobre las ventas, con reglas de % por producto/categoría, causación al facturar o al cobrar, y liquidación contable por período.
sidebar:
  order: 11
---

El módulo de **comisiones** calcula automáticamente cuánto gana cada vendedor sobre sus ventas, según reglas de porcentaje que tú defines, y te permite **liquidarlas por período** generando el asiento contable correspondiente.

## Activación

Es un **módulo opcional** — viene desactivado por defecto.

Panel App → **Configuraciones → Comisiones** → activa **"Activar comisiones por vendedor"**.

Al activarlo se despliegan los parámetros del cálculo:

| Parámetro | Opciones | Recomendado |
|---|---|---|
| **Base de cálculo** | Subtotal (sin IVA) · Total (con IVA) · Utilidad (venta − costo) | Subtotal sin IVA |
| **Momento de causación** | Al cobrar (factura pagada total) · Al facturar (al emitir) | Al cobrar |
| **Cuenta de gasto** | Cuenta del PUC para el gasto (débito) | 530515 Comisiones |
| **Cuenta por pagar** | Cuenta del PUC del pasivo (crédito) | 233520 Comisiones |

Si dejas las cuentas vacías, el sistema usa **530515** y **233520** automáticamente.

Una vez activo, en el sidebar aparecen **Ventas → Comisiones**, **Ventas → Liquidación Comisiones** y **Reportes → Comisiones por Vendedor**.

## Reglas de porcentaje por vendedor

Panel App → **Ventas → Comisiones**.

Cada regla define el **% que gana un vendedor**. El patrón recomendado:

1. Una regla **"Todos los productos"** por vendedor → su **% base**.
2. Reglas por **categoría** o **producto** específico → **override** del base en esos casos.

**Resolución:** cuando se vende un producto, gana la regla más específica que aplique:

```
Producto específico  >  Categoría  >  Todos los productos
```

### Ejemplo

| Vendedor | Alcance | % |
|---|---|---|
| Ana | Todos los productos | 3% |
| Ana | Categoría "Electrónicos" | 5% |
| Ana | Producto "iPhone 15" | 8% |

- Ana vende un cargador (categoría Hogar) → **3%** (base)
- Ana vende un televisor (Electrónicos) → **5%**
- Ana vende un iPhone 15 → **8%**

## Causación automática

No tienes que registrar nada manualmente. Según el **momento de causación** que elegiste:

- **Al facturar**: la comisión se causa al postear (contabilizar) la factura.
- **Al cobrar**: la comisión se causa cuando la factura queda **totalmente pagada**.

La comisión causada queda en estado **Pendiente**. Si la factura se **anula**, la comisión se **reversa** automáticamente.

## Liquidación

Panel App → **Ventas → Liquidación Comisiones**.

Crea una liquidación de un vendedor para un período. Al confirmarla:

- Se genera el **asiento contable**: débito a la cuenta de gasto, crédito a comisiones por pagar (prefijo `CM`).
- Las comisiones incluidas pasan de **Pendiente** a **Liquidada**.

Desde la liquidación puedes ver el detalle de las ventas (comisiones) que la componen y el asiento generado.

## Reporte

Panel App → **Reportes → Comisiones por Vendedor**.

Tabla del detalle de cada comisión causada en el rango: factura, base, monto, estado.

- **Filtros**: rango de fechas, vendedor, estado.
- **Header summary**: "Total: $X · Pendiente de liquidar: $Y".

## Permisos

| Permiso | Para qué |
|---|---|
| `commissions.view` | Ver comisiones causadas, reglas y reporte |
| `commissions.manage` | Crear / editar reglas de % por vendedor |
| `commissions.settle` | Liquidar y contabilizar comisiones |

Por defecto, **Administrador** y **Gerente** tienen todos; el **Contador** puede ver y liquidar.

## Buenas prácticas

- **Define siempre una regla base "Todos los productos"** por cada vendedor; las de categoría/producto son solo para excepciones.
- **"Al cobrar" protege tu caja**: el vendedor gana la comisión cuando el dinero entró, no cuando solo se facturó (ideal si vendes a crédito).
- **Base "Utilidad"** es la más justa si tus márgenes varían mucho entre productos, pero requiere que los costos estén bien cargados.
- **Liquida por períodos fijos** (quincenal/mensual) para que el asiento contable cuadre con tu nómina o pagos a vendedores.

## Próximos temas

- [Factura de Venta](/docs/ventas/factura-venta/)
- [POS Tradicional](/docs/ventas/pos-tradicional/)
- [Reportes contables](/docs/contabilidad/reportes/)

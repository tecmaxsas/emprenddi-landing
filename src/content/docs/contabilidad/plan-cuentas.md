---
title: Plan de Cuentas (PUC)
description: El catálogo contable colombiano viene pre-cargado. Crear subcuentas personalizadas.
sidebar:
  order: 1
---

El **Plan Único de Cuentas (PUC)** es el catálogo estándar de cuentas contables colombianas (Decreto 2650/1993). Emprenddi lo viene pre-cargado con ~120 cuentas listas para usar.

## Acceso

Panel App → **Contabilidad** → **Plan de Cuentas**.

## Estructura

Jerárquica de 6 dígitos:

- **1 dígito = Clase** (1 Activo, 2 Pasivo, 3 Patrimonio, 4 Ingreso, 5 Gasto, 6 Costo, 7 Costo producción, 8/9 Orden)
- **2 dígitos = Grupo**
- **4 dígitos = Cuenta**
- **6 dígitos = Subcuenta** (la más detallada, donde se mueve dinero)

## Cuentas clave que se usan automáticamente

| Código | Cuenta | Uso |
|---|---|---|
| 110505 | Caja general | Pagos efectivo |
| 1110xx | Bancos | Transferencias, tarjetas |
| 1305 | Clientes | CxC |
| 1435 | Mercancías | Inventario |
| 2205 | Proveedores nacionales | CxP |
| 240805 | IVA generado | Pasivo por IVA cobrado |
| 240810 | IVA descontable | IVA pagado en compras |
| 2365/2367/2370 | Retenciones | ReteFuente, ReteIVA, ReteICA |
| 4135 | Comercio | Ingresos por ventas |
| 6135 | Costo de ventas | COGS |
| 3605 | Resultados ejercicios anteriores | Apertura |

## Crear subcuenta

Solo si tienes necesidades específicas:

### Caso típico: varios bancos

Tu PUC trae `111005 Bancolombia` genérico. Si tienes Bancolombia, Davivienda y BBVA:

1. Mantén `111005 Bancolombia` o renómbralo
2. Crea `111010 Davivienda`, `111015 BBVA` (sub-cuentas de 1110 Bancos)
3. Asocia cada método de pago a su banco correspondiente

### Caso típico: separar ingresos por línea

Si vendes pizzas y bebidas y quieres ver utilidad por separado:

- `413505-01 Comercio Pizzas`
- `413505-02 Comercio Bebidas`

Asignas en cada producto su `sale_account_id` correspondiente.

## Crear cuenta nueva

**Plan de Cuentas → Nueva cuenta**:

- **Código**: respeta el patrón (debe colgar de un padre existente)
- **Nombre**
- **Tipo**: activo/pasivo/patrimonio/ingreso/gasto/costo
- **Naturaleza**: débito o crédito (se autocompleta)
- **Acepta movimientos**: ON (si es nivel hoja) / OFF (si es agrupadora)
- **Requiere tercero**: ON para cuentas como 1305 Clientes, 2205 Proveedores (cada movimiento debe llevar `third_party_id`)
- **Requiere centro de costo**: ON si quieres exigirlo

## Cuentas del sistema

Las cuentas pre-cargadas tienen `is_system = true` y están protegidas:
- No se pueden borrar
- No se pueden inactivar
- Solo se puede cambiar nombre

Esto evita romper la integración con asientos automáticos.

## Editar / Inactivar

- **Editar**: nombre, configuración de tercero/CdC
- **Inactivar**: si dejas de usar una cuenta, márcala `Activa: OFF`. No aparece en formularios futuros pero los movimientos históricos quedan.
- **Eliminar**: bloqueado si tiene movimientos. Usa inactivar.

## Próximos temas

- [Asientos Contables](/docs/contabilidad/asientos-contables/)
- [Impuestos](/docs/contabilidad/impuestos/)
- [Centros de costo](/docs/contabilidad/centros-costo/)

---
title: Centros de Costo
description: Reportar utilidad por división, sede o línea de negocio. Opcional pero potente.
sidebar:
  order: 4
---

Los **centros de costo (CdC)** te permiten reportar la utilidad por **división, departamento, sede o línea de negocio**. Son **opcionales** — si tu empresa es simple no los necesitas.

## Cuándo activarlos

Útiles si:

- Tienes **varias líneas de negocio** y quieres saber cuál es más rentable (ej. en un restaurante: comida vs domicilios vs eventos)
- Tienes **varias sedes** y quieres ver utilidad por sede
- Tienes **departamentos** internos con presupuesto propio
- Tienes **proyectos** que rastreas individualmente (consultorías por proyecto)

## Acceso

Panel App → **Contabilidad** → **Centros de Costo**.

## Crear centro de costo

- **Código** (ej. `CDC-001`)
- **Nombre** (ej. "Restaurante Salón", "Domicilios", "Tienda Norte")
- **Padre** (opcional, para jerarquía)
- **Activo**

## Configurar qué cuentas requieren CdC

En el PUC, marca con `requires_cost_center = true` las cuentas que **siempre** deben llevar CdC:

- Cuentas de gasto (51xxxx, 52xxxx)
- Cuentas de costo (61xxxx, 71xxxx)
- Cuentas de ingreso si separas por CdC (41xxxx)

Cuando un asiento toca esas cuentas, el sistema **exige** asignar CdC en la línea.

## Asignar CdC a operaciones

### En facturas de venta

Cada línea puede tener su CdC. Por defecto se asigna el CdC de la sede o del producto. Override manualmente si necesitas.

### En facturas de compra

Igual. Útil para separar gastos por sede.

### En ajustes y otros documentos

Lo asignas al crear el documento.

### En asientos manuales

Por línea.

## Reportes por centro de costo

- **P&G por CdC**: ingresos, gastos y utilidad por cada centro
- **Balance comparativo CdC**: cuál genera más, cuál tiene más pérdida
- **Detalle por CdC**: drill-down de cada centro

## Ejemplo: restaurante con domicilios

**Estructura sugerida**:
```
CDC-100 Operación
├── CDC-110 Restaurante Salón
├── CDC-120 Restaurante Terraza
└── CDC-130 Domicilios
```

- Ventas en mesa de salón → CDC-110
- Ventas en mesa de terraza → CDC-120
- Ventas a domicilio → CDC-130

**Gastos**:
- Domiciliarios (pagos a repartidores) → CDC-130
- Personal de salón → CDC-110

**Resultado al final del mes**:

| Centro | Ingresos | Gastos | Utilidad |
|---|---|---|---|
| CDC-110 Salón | $20M | $12M | $8M ✅ |
| CDC-120 Terraza | $15M | $9M | $6M ✅ |
| CDC-130 Domicilios | $8M | $9M | -$1M ❌ |

Dato accionable: los domicilios pierden plata. Decisiones a tomar (subir tarifa de envío, reducir personal de domicilios, evaluar continuar o no).

## Cuándo NO usar CdC

- Empresa muy pequeña (1 sede, 1 línea de negocio): es overhead innecesario
- Si no piensas analizar los reportes: solo agrega trabajo al cajero/contador sin valor
- Si no tienes claro qué centros definir: mejor no usarlos hasta tener claridad

## Próximos temas

- [Plan de Cuentas — requires_cost_center](/docs/contabilidad/plan-cuentas/)
- [Reportes](/docs/contabilidad/reportes/)

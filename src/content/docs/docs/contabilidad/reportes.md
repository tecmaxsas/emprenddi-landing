---
title: Reportes Contables
description: Libros oficiales DIAN, Balance, Cartera, Cuentas por Pagar, Kardex, Ventas, Cierres.
sidebar:
  order: 8
---

Emprenddi genera todos los **reportes contables oficiales** que la DIAN exige y los **reportes operativos** que necesitas para tomar decisiones.

## Acceso

Panel App → **Contabilidad** → **Reportes**.

## Libros oficiales DIAN

Obligatorios por norma, presentables ante DIAN o auditoría.

### Libro Diario

Listado cronológico de todos los asientos contables del periodo.

- **Filtros**: rango de fechas
- **Exporta**: PDF (formato oficial) o Excel

### Libro Mayor

Para cada cuenta del PUC, muestra todos los movimientos (DR/CR) y el saldo acumulado.

- **Filtros**: rango fechas, cuentas específicas
- **Exporta**: PDF o Excel

### Libro Auxiliar

Detalle de movimientos por cuenta **con tercero**. Más detallado que el Mayor.

- **Filtros**: cuenta + tercero + fechas
- **Exporta**: PDF o Excel

Útil cuando un cliente pide su estado de cuenta (DR/CR de la cuenta 1305 con su NIT).

### Balance de Prueba

Saldos iniciales, débitos, créditos y saldos finales de todas las cuentas en un periodo.

- **Filtros**: rango de fechas, nivel de detalle (clase, grupo, cuenta, subcuenta)
- **Exporta**: PDF o Excel

Es el reporte que tu **contador analiza primero** para verificar que todo cuadre.

### Libro de Inventarios y Balances

Saldo de cada cuenta a una fecha específica. La DIAN puede pedirlo en auditoría.

## Reportes operativos

### Cartera (CxC)

Todas las facturas pendientes de cobro, agrupadas por cliente.

- **Vencidas vs por vencer**
- **Antigüedad**: 0-30, 31-60, 61-90, +90 días
- **Por sede / vendedor**

Decisiones que toma: a quién cobrar primero, qué clientes castigar como incobrables.

### Cuentas por Pagar (CxP)

Lo mismo pero del lado de proveedores.

- **Vencimientos próximos**: para planear caja
- **Por proveedor**: cuánto le debes a cada uno

### Cierres de Caja

Histórico de sesiones del POS.

- Por cajero
- Por sede
- Diferencias detectadas

### Kardex

Histórico por producto. Ver [Kardex](/docs/inventario/kardex/).

### Stock por sede

Snapshot del inventario actual por sede.

- Cantidad
- Valor (costo promedio)
- Categoría

Útil para tomar decisiones de reposición.

### Ventas por periodo

Totales agrupados por:
- Día / semana / mes / año
- Vendedor
- Sede
- Categoría
- Cliente
- Método de pago

Decisiones: cuándo es tu hora pico, qué vendedor rinde más, qué categoría rota mejor.

### Ventas vs costo de ventas

Para calcular **margen real**: ventas brutas - costo - descuentos - retenciones = margen.

## Reportes DIAN

### Información Exógena

Generación automática de los formatos 1001, 1004, 1005, 1006, etc. Ver [Información Exógena](/docs/dian/informacion-exogena/).

### Retenciones del mes

Total retenido y pagadero a la DIAN. Usa para liquidar formulario 350.

### IVA bimestral

Cálculo del IVA generado - IVA descontable + retenciones de IVA. Usa para liquidar formulario 300.

## Exportar reportes

Cada reporte tiene botones:

- **Imprimir** (PDF en pantalla)
- **Descargar PDF**
- **Descargar Excel** (para analizar)
- **Copiar enlace** (compartir con tu contador externo si tiene acceso al portal)

## Reportes consolidados vs por sede

Cualquier reporte se puede filtrar por sede o ver **consolidado** (suma de todas las sedes).

Útil para:
- Reporte de propietario: total consolidado
- Reporte por gerente de sede: solo su sede

## Programar reportes automáticos

Próximamente — programar que cierto reporte se envíe por correo automáticamente cada semana o mes.

## Próximos temas

- [Información Exógena](/docs/dian/informacion-exogena/)
- [Asientos contables](/docs/contabilidad/asientos-contables/)

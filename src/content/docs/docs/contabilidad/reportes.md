---
title: Reportes Contables
description: Libros oficiales DIAN, Balance, Cartera, Cuentas por Pagar, Kardex, Ventas, Cierres. Todos exportan a Excel y PDF.
sidebar:
  order: 8
---

Emprenddi genera todos los **reportes contables oficiales** que la DIAN exige y los **reportes operativos** que necesitas para tomar decisiones. **Todos** se pueden descargar en **Excel** y **PDF** (ver [Cómo exportar](#cómo-exportar)).

> Los **estados financieros bajo NIIF** (Estado de Resultados, Balance General e Indicadores Financieros) tienen su propia página: [Estados Financieros e Indicadores](/docs/contabilidad/estados-financieros/).

## Acceso

Panel App → **Reportes** (grupo en el menú lateral).

## Libros oficiales DIAN

Obligatorios por norma, presentables ante DIAN o auditoría.

### Libro Diario

Listado cronológico de todos los asientos contables `posted` del período.

- **Filtros**: rango de fechas, tipo de asiento (venta, compra, nómina, manual, etc.)
- **Columnas**: Fecha · Asiento · Tipo · Ref · Tercero · Concepto · Débito · Crédito
- **Exporta**: Excel (.xlsx) e Imprimir / Guardar PDF

### Libro Mayor y Auxiliar

Para una cuenta del PUC, muestra todos los movimientos (DR/CR) en el período con **saldo corriente** (running balance) calculado por SQL window function. El "auxiliar" es el mismo Mayor filtrado por tercero o centro de costo.

- **Filtros**: cuenta (obligatoria), rango de fechas, tercero opcional, centro de costo opcional
- **Cabecera con tarjetas**: saldo inicial, total débito período, total crédito período, saldo final
- **Exporta**: Excel (.xlsx) e Imprimir / Guardar PDF

Útil cuando un cliente pide su estado de cuenta (DR/CR de la 1305 con su NIT).

### Balance de Comprobación

Saldos iniciales, débitos y créditos del período, y saldos finales de todas las cuentas. Es el reporte que tu contador analiza primero para verificar que todo cuadre.

- **Filtros**: rango de fechas, nivel del PUC (1 clase, 2 grupo, 3 cuenta, 4 subcuenta, 5 auxiliar), solo cuentas con movimiento
- **Columnas**: Código · Cuenta · Saldo inicial · Débito período · Crédito período · Saldo final
- **Exporta**: Excel (.xlsx) e Imprimir / Guardar PDF

## Reportes operativos

### Cartera (Cuentas por Cobrar)

Facturas de venta `posted` con saldo pendiente, a una fecha de corte.

- **Filtros**: fecha de corte, cliente, solo vencidas, incluir pagadas (auditoría)
- **Columnas**: Factura · Cliente · Fecha · Vence · **Días vencido** (badge: gris ≤0, amarillo 1-30, rojo >30) · Total · Pagado · Saldo · Estado de pago
- **Exporta**: Excel (.xlsx) e Imprimir / Guardar PDF

Decisiones que toma: a quién cobrar primero, qué clientes castigar como incobrables.

### Cuentas por Pagar

Lo mismo del lado de proveedores.

- **Filtros**: fecha de corte, proveedor, solo vencidas, incluir pagadas
- **Columnas**: Factura · N° prov. · Proveedor · Fecha · Vence · Días vencido · Total · Pagado · Saldo · Estado
- **Exporta**: Excel (.xlsx) e Imprimir / Guardar PDF

Decisiones: vencimientos próximos (planear caja), cuánto le debes a cada proveedor.

### Ventas por Período

Facturas de venta `posted` del rango seleccionado.

- **Filtros**: rango de fechas, sede, vendedor
- **Columnas**: Número · Fecha · Cliente · Sede · Vendedor · Subtotal · IVA · Total · Pagado · Estado de pago
- **Resumen** en cabecera: "Total N facturas — $X"
- **Exporta**: Excel (.xlsx) e Imprimir / Guardar PDF

Para análisis de margen y utilidad, complementa con el [Estado de Resultados Integral](/docs/contabilidad/estados-financieros/).

### Kardex

Histórico de movimientos por producto en una sede.

- **Filtros**: producto, sede (ambos obligatorios), rango de fechas, tipos de movimiento
- **Columnas**: Fecha · Tipo · Ref · Tercero · Concepto · Entrada · Salida · Costo unit. · Total · **Saldo qty** · **Saldo $** · Asiento
- **Totales en cabecera**: total entradas, total salidas
- **Exporta**: Excel (.xlsx) e Imprimir / Guardar PDF

Ver también [Kardex en Inventario](/docs/inventario/kardex/).

### Stock por Sede

Matriz **producto × sede** con el saldo actual en cantidad. Una sola query agregada para no hacer N+1.

- **Filtros**: categoría, solo con stock > 0
- **Columnas dinámicas**: una columna por sede activa, más una columna **Total**
- **Coloreado**: rojo si stock ≤ 0, amarillo si stock ≤ mínimo configurado, neutro si OK
- **Exporta**: Excel (.xlsx) e Imprimir / Guardar PDF

Útil para tomar decisiones de reposición y traslados entre sedes.

### Cierres de Caja

Histórico de sesiones cerradas del POS.

- **Filtros**: rango de cierres, sede, cajero, solo con diferencia
- **Columnas**: # · Sede · Cajero · Abrió · Cerró · Apertura · Ventas · # Fact. · Esperado · Contado · **Diferencia** (verde = cuadra, info = sobrante, rojo = faltante) · Notas
- **Exporta**: Excel (.xlsx) e Imprimir / Guardar PDF

## Reportes DIAN

### Información Exógena

Generación automática de los formatos 1001, 1004, 1005, 1006, etc. Ver [Información Exógena](/docs/dian/informacion-exogena/).

## Cómo exportar

Cada reporte tiene **dos botones** en la parte superior, justo encima de la tabla:

### 📊 Descargar Excel
Genera un archivo `.xlsx` con el nombre de la empresa, el título del reporte, el período/contexto, las cabeceras y todas las filas (sin paginación). Las columnas numéricas vienen con formato `#,##0` para separadores de miles automáticos. Se abre en Excel, Google Sheets o LibreOffice.

### 🖨️ Imprimir / Guardar PDF
Abre el diálogo de impresión del navegador con **CSS optimizado para papel**: oculta la barra lateral, los filtros, la paginación y los botones; fuerza colores claros sobre fondo blanco. Desde el diálogo puedes imprimir o elegir **"Guardar como PDF"** (Chrome/Edge/Brave) o **"Microsoft Print to PDF"** (Windows).

> El **Excel** respeta los filtros activos en la página (rango de fechas, sede, cliente, etc.) y devuelve **todas las filas**, no solo la página actual.

> Para el **PDF** de tablas grandes: sube la paginación a "100" antes de pulsar el botón — el navegador imprime solo lo visible en pantalla. (El Excel no tiene esta limitación.)

## Reportes consolidados vs por sede

Los reportes operativos (Ventas, Cartera, CxP, Cierres, Kardex) pueden filtrarse por **sede** o ver el **consolidado** (todas las sedes). El reporte **Stock por Sede** siempre muestra todas las sedes en columnas separadas.

Útil para:
- **Reporte de propietario**: total consolidado (sin filtrar sede)
- **Reporte por gerente de sede**: solo su sede

## Programar reportes automáticos

Próximamente — programar el envío por correo de un reporte cada semana/mes.

## Próximos temas

- [Estados Financieros e Indicadores](/docs/contabilidad/estados-financieros/)
- [Información Exógena](/docs/dian/informacion-exogena/)
- [Asientos contables](/docs/contabilidad/asientos-contables/)
- [Plan de Cuentas](/docs/contabilidad/plan-cuentas/)

---
title: Estados Financieros e Indicadores
description: Estado de Resultados Integral (P&G), Estado de Situación Financiera (Balance General) e Indicadores Financieros (liquidez, rentabilidad, endeudamiento, actividad). Con exportación a Excel y PDF.
sidebar:
  order: 9
---

Bajo **NIIF para PYMES** la empresa debe poder generar los **estados financieros** en cualquier momento. Emprenddi los calcula automáticamente leyendo los asientos contables `posted` y agregando por **prefijos del PUC colombiano**.

Son **3 informes** que se alimentan del mismo motor:

| Informe | Qué responde | Período |
|---|---|---|
| **Estado de Resultados Integral** (P&G) | ¿Cuánto gané o perdí? | Un rango (mes, trimestre, año) |
| **Estado de Situación Financiera** (Balance) | ¿Cuánto tengo, debo y vale la empresa? | Una fecha de corte |
| **Indicadores Financieros** | ¿Qué tan sana está? | Combinación de los dos anteriores |

## Acceso

Panel App → **Reportes** → **Estado de Resultados** / **Balance General** / **Indicadores Financieros**.

## 1. Estado de Resultados Integral (P&G)

Muestra el desempeño económico del negocio en un período. También se conoce como *Estado de Pérdidas y Ganancias* o *Income Statement*.

### Estructura (PUC)

```
(+) Ingresos operacionales         (cuenta 41)
(−) Costo de ventas                (cuenta 61 / 62 / 7)
(=) UTILIDAD BRUTA

(−) Gastos de administración       (cuenta 51)
(−) Gastos de ventas               (cuenta 52)
(=) UTILIDAD OPERACIONAL (EBIT)

(+) Ingresos no operacionales      (cuenta 42)
(−) Gastos no operacionales        (cuenta 53, incluye financieros 5305)
(=) UTILIDAD ANTES DE IMPUESTOS

(−) Impuesto de renta              (cuenta 54)
(=) UTILIDAD NETA

(+/-) Otro Resultado Integral (ORI)
(=) RESULTADO INTEGRAL TOTAL
```

> El **ORI** (variaciones en inversiones, diferencia en cambio, revaluaciones, pensiones actuariales) requiere registros NIIF específicos. En la versión actual aparece en 0 — se calculará automáticamente en versiones futuras.

### Filtros y períodos rápidos

- **Desde / Hasta**: rango libre.
- Atajos: **Mes actual**, **Trimestre**, **Año**.

### Análisis vertical

A la derecha de cada valor verás un **porcentaje** que representa la participación sobre los ingresos operacionales. Útil para detectar dónde se va el dinero:

- Costo de ventas / Ingresos = % de costo
- Gastos de administración / Ingresos = peso administrativo
- Utilidad neta / Ingresos = margen final

Los porcentajes mayores a ±999% se ocultan (evita cifras sin sentido cuando el período tiene poco volumen).

## 2. Estado de Situación Financiera (Balance General)

Fotografía de la empresa **a una fecha específica**. Muestra lo que tiene, lo que debe y lo que vale, cumpliendo la **ecuación contable**:

```
ACTIVO = PASIVO + PATRIMONIO
```

### Estructura (PUC)

| Sección | Cuentas | Ejemplos |
|---|---|---|
| **Activo corriente** | 11, 12, 13, 14, 17 | Caja, bancos, cartera, inventarios, anticipos |
| **Activo no corriente** | 15, 16, 18, 19 | Propiedad, planta y equipo, intangibles, inversiones LP |
| **Pasivo corriente** | 21–26 | Proveedores, impuestos por pagar, obligaciones CP |
| **Pasivo no corriente** | 27, 28 | Obligaciones LP, diferidos |
| **Patrimonio** | 31–38 | Capital, reservas, utilidades retenidas, **+ Resultado del ejercicio** |

### Resultado del ejercicio (calculado)

Durante el año en curso, la utilidad **aún no se ha cerrado** contra las cuentas de patrimonio (eso pasa al final del ejercicio). El sistema calcula automáticamente la utilidad del año (desde el 1 de enero hasta la fecha de corte) y la suma como una línea **"+ Resultado del ejercicio (calculado)"** en Patrimonio.

Esto hace que **la ecuación contable cuadre todo el año**, sin necesidad de hacer un cierre formal.

### Validación de cuadre

Al final del balance verás:

- ✅ **"La ecuación contable cuadra"** → Activos = Pasivos + Patrimonio. Todo correcto.
- ⚠️ **"Diferencia: $X"** → Hay asientos descuadrados. Revisa el Libro Diario para encontrar el asiento problema.

### Filtros y cortes rápidos

- **Corte al**: cualquier fecha.
- Atajos: **Hoy**, **Fin de mes**, **Fin de año**.

## 3. Indicadores Financieros

Razones financieras calculadas a partir del ERI y del Balance. **4 categorías**:

### 🔵 Liquidez — ¿Puede pagar sus deudas a corto plazo?

| Indicador | Fórmula | Referencia |
|---|---|---|
| **Razón corriente** | Activo corriente / Pasivo corriente | > 1.5 ideal |
| **Prueba ácida** | (AC − Inventarios) / Pasivo corriente | > 1.0 |
| **Capital de trabajo** | AC − PC (en $) | Positivo |

### 🟢 Rentabilidad — ¿Qué tan rentable es?

| Indicador | Fórmula | Qué mide |
|---|---|---|
| **Margen bruto** | Utilidad bruta / Ventas | Eficiencia del costo |
| **Margen operacional** | EBIT / Ventas | Rentabilidad del core |
| **Margen neto** | Utilidad neta / Ventas | Ganancia final |
| **ROE** | Utilidad neta / Patrimonio | Retorno al socio |
| **ROA** | Utilidad neta / Activos totales | Eficiencia de los activos |

### 🟡 Endeudamiento — ¿Qué tan endeudada está?

| Indicador | Fórmula | Referencia |
|---|---|---|
| **Nivel de endeudamiento** | Pasivo total / Activo total | < 60% sano |
| **Apalancamiento** | Pasivo total / Patrimonio | < 1.5 cómodo |
| **Cobertura de intereses** | EBIT / Gastos financieros (5305) | > 2x cómodo |

### 🟠 Actividad — ¿Qué tan bien usa sus recursos?

| Indicador | Fórmula | Qué mide |
|---|---|---|
| **Rotación de cartera** | Ventas / Cuentas por cobrar | Veces que cobra al año |
| **Días de cartera** | 365 / Rotación | Días promedio para cobrar |
| **Rotación de inventario** | Costo de ventas / Inventario | Velocidad de venta |
| **Ciclo operativo** | Días cartera + Días inventario | Tiempo del ciclo de caja |

### Semáforo de salud

Cada indicador trae un pill coloreado:

- 🟢 **Saludable** — dentro del rango óptimo
- 🟡 **Atención** — aceptable pero vigilar
- 🔴 **Crítico** — fuera del umbral, requiere acción
- ⚪ **Informativo** — no aplica umbral universal (depende del sector)

> Los umbrales son referencias generales — ajústalos al criterio de tu contador y al sector específico.

## Exportación — Excel y PDF

Los 3 informes tienen **dos botones de exportación** en la parte superior:

### 📊 Descargar Excel

Genera un archivo **`.xlsx`** listo para abrir en Excel, Google Sheets o LibreOffice. Incluye:

- Cabecera con el nombre de la empresa y el período.
- Secciones, subtotales (negrita y fondo) y totales destacados.
- Celdas numéricas con formato **`#,##0`** (separadores de miles automáticos).

### 🖨️ Imprimir / Guardar PDF

Abre el diálogo de impresión del navegador con un **CSS específico para papel**:

- Oculta la barra lateral, los filtros y los botones.
- Fuerza colores claros (light mode) para que el PDF salga limpio sobre fondo blanco.
- Margen A4 con cortes de página entre secciones.

Desde el diálogo puedes elegir **"Guardar como PDF"** (en Chrome, Edge, Brave) o **"Microsoft Print to PDF"** (Windows). El archivo queda con la misma estructura y colores que viste en pantalla.

> Esta opción no depende de librerías externas — usa el motor de impresión nativo del navegador, por lo que la fidelidad visual es muy alta y no agrega tiempo de generación.

## Cómo se calculan (motor compartido)

Los 3 informes consumen el mismo motor (`FinancialStatementsEngine`):

1. **Lee `journal_entry_lines`** de asientos en estado `posted` dentro del rango de fechas.
2. **Agrega por prefijo de código PUC** (1xx activos, 2xx pasivos, 3xx patrimonio, 4xx ingresos, 5xx gastos, 6xx/7xx costos).
3. **Respeta la naturaleza** débito/crédito de cada cuenta para signar el saldo (los activos y gastos suman DR−CR; los pasivos, patrimonio e ingresos suman CR−DR).
4. **Solo cuentas con movimiento** y de nivel ≤ 4 del PUC aparecen en el detalle (no se muestran auxiliares).

## Permisos

| Permiso | Para qué |
|---|---|
| `reports.income_statement` | Ver y exportar el Estado de Resultados |
| `reports.balance_sheet` | Ver y exportar el Balance General |
| `reports.financial_indicators` | Ver y exportar los Indicadores |

Por defecto los tienen **Administrador**, **Gerente**, **Contador interno** y **Contador externo** (Portal Contador).

## Relación entre los tres

```
ERI ───► genera Utilidad ───► alimenta Patrimonio del Balance
Balance ─► cifras base ───► alimentan Indicadores
Indicadores ─► interpretan ambos ─► soportan decisiones
```

## Próximos temas

- [Plan de Cuentas (PUC)](/docs/contabilidad/plan-cuentas/)
- [Asientos contables](/docs/contabilidad/asientos-contables/)
- [Reportes contables (Libros DIAN, Cartera, Kardex)](/docs/contabilidad/reportes/)
- [Portal del Contador](/docs/administracion/portal-contador/)

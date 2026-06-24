---
title: Guía para el contador
description: Cómo ingresar y parametrizar Emprenddi paso a paso desde la perspectiva del contador. Checklist completo y orden de dependencias.
sidebar:
  order: 0
  badge:
    text: Empieza aquí
    variant: success
---

Esta guía es para **el contador** (interno o externo) que va a operar Emprenddi: cómo ingresar, qué parametrizar y en qué orden para que toda la contabilidad funcione correctamente desde el día uno.

## 1. Ingreso al sistema

Hay **dos caminos** según tu vínculo con la empresa.

### a) Contador interno (empleado de la empresa)

- **URL**: `https://pos.emprenddi.com/app/login`
- El **administrador** de la empresa crea tu usuario en **Administración → Usuarios** y te asigna el rol **"Contador"**.
- Recibes el correo de invitación con un link para establecer tu contraseña.
- Una vez dentro tienes acceso a **Contabilidad**, **Reportes**, **Nómina**, **Impuestos**, **Plan de Cuentas**, **DIAN** y los permisos para crear/postear/anular asientos.

### b) Contador externo (atiendes varias empresas)

- **URL**: `https://pos.emprenddi.com/contador/login`
- El **Portal del Contador** te muestra el listado de empresas que te dieron acceso. Con un click cambias de empresa sin tener que cerrar sesión.
- Cada empresa te invita desde su panel: **Administración → Usuarios → Invitar contador externo** (te llega un correo).
- Detalle completo en [Portal del Contador](/docs/administracion/portal-contador/).

> Tip: el portal externo tiene **permisos limitados a contabilidad** — no puedes modificar precios, cancelar ventas POS ni cambiar la configuración de la empresa. Eso lo hace el administrador.

## 2. Checklist de parametrización inicial

Te recomendamos hacerlo en una sesión continua de **≈ 2 horas** con el dueño o administrador del negocio para resolver dudas en vivo. El orden importa porque cada paso depende del anterior.

### Paso 1 · Datos de la empresa

**Ruta**: Configuraciones → tab **Empresa**.

Verifica que estén correctos:

| Campo | Por qué importa |
|---|---|
| Razón social | Debe coincidir con el RUT. Aparece en facturas y libros DIAN |
| NIT + DV | Validado contra el RUT. Si está mal, los envíos DIAN fallan |
| Régimen tributario | Determina si el sistema activa o no retenciones |
| Dirección y municipio | Obligatorios para Facturación Electrónica DIAN |
| Correo y teléfono | Se envían a DIAN en el registro inicial |

Detalle: [Configuraciones de empresa](/docs/administracion/configuraciones-empresa/).

### Paso 2 · Plan de Cuentas (PUC)

**Ruta**: Contabilidad → **Plan de Cuentas**.

- El sistema viene precargado con el **PUC colombiano comercial** completo (clases 1-9, hasta nivel subcuenta).
- Revisa cuentas críticas que tu empresa va a usar y agrega **cuentas auxiliares** si necesitas separar (ej. 4135**05**-01 para una sublínea específica).
- Marca como **inactivas** las cuentas que no apliquen a tu negocio para que no aparezcan en los selects.

Detalle: [Plan de Cuentas](/docs/contabilidad/plan-cuentas/).

### Paso 3 · Impuestos

**Ruta**: Contabilidad → **Impuestos**.

Configura los impuestos según el régimen del cliente:

- **IVA 19%, 5%, 0%, Exento** (todos los que tu negocio maneje)
- **ReteFuente** por concepto (compras, servicios, honorarios, arriendos...)
- **ReteIVA** y **ReteICA** (solo si la empresa es agente retenedor)
- **Impuesto al consumo 8%** (solo restaurantes)

Por cada impuesto define la **cuenta contable** (ej. IVA generado → 240805, ReteFuente → 2365xx).

Detalle: [Impuestos](/docs/contabilidad/impuestos/).

### Paso 4 · Métodos de pago

**Ruta**: Contabilidad → **Métodos de pago**.

Cada método (efectivo, tarjeta crédito, tarjeta débito, transferencia, etc.) debe estar asociado a la **cuenta bancaria/caja real**:

| Método | Cuenta sugerida |
|---|---|
| Efectivo POS | 1105 — Caja |
| Tarjeta crédito | 1110 — Bancos (la cuenta donde llega la liquidación) |
| Transferencia | 1110 — Bancos |
| Crédito (CxC) | 1305 — Clientes |

Si configuras mal aquí, los pagos del POS no llegan a la cuenta correcta.

### Paso 5 · Cuentas contables por categoría ⭐

**Ruta**: Catálogo → **Categorías** → editar.

Esto es **clave** para que la contabilidad funcione sin tener que tocar cada producto:

- En cada categoría defines la **cuenta de inventario (1435)**, **cuenta de ingreso por venta (4135)** y **cuenta de costo (6135)**.
- Los productos de esa categoría **heredan** estas cuentas automáticamente. Si un producto puntual necesita una cuenta distinta, se sobrescribe ahí.
- Funciona en cascada: producto → categoría → categoría padre → cuenta PUC default.

Esto te ahorra horas de configuración cuando hay cientos de productos.

Detalle: [Categorías → Cuentas contables](/docs/inventario/categorias/#cuentas-contables-por-defecto).

### Paso 6 · Sedes / Bodegas

**Ruta**: Operación → **Sedes**.

Si la empresa tiene varias sedes/bodegas, créalas todas antes de cargar inventario:

- Define una **Bodega Central** (`type: warehouse`, `is_main: true`) si distribuyes a varios puntos.
- Cada **Sede** (`type: store`) maneja su propio inventario.
- El stock se transfiere entre sedes con **Inventario → Transferencias** (genera asiento contable automático).

### Paso 7 · Resoluciones DIAN (solo si factura electrónicamente)

**Ruta**: Administración → **Facturación Electrónica DIAN**.

Proceso en orden estricto por tabs:

1. **Datos de la empresa** — registra la empresa contra apidian.emprenddi.com.
2. **Software** — ID Software + PIN entregados por DIAN.
3. **Certificado** — `.p12` + contraseña + fechas de expedición y vencimiento.
4. **Resoluciones** — carga las resoluciones autorizadas (botón **"Consultar resoluciones DIAN"** las trae automáticamente) y asigna cada una a una sede.
5. **Pruebas y ambiente** — envía el Set de Habilitación y cambia a producción cuando DIAN lo apruebe.

Cada tab muestra la **respuesta cruda de la API** debajo del botón para diagnosticar cualquier error.

### Paso 8 · Períodos fiscales

**Ruta**: Contabilidad → **Períodos fiscales**.

Define el **ejercicio actual** (típicamente 1 enero — 31 diciembre). Sin un período abierto no puedes contabilizar asientos.

### Paso 9 · Saldos iniciales

**Ruta**: Contabilidad → **Asientos contables** → tipo "Saldos iniciales".

Si la empresa viene de un sistema anterior, migra los saldos cuenta por cuenta: efectivo, bancos, cartera, inventario, propiedad y equipo, pasivos, patrimonio. **El asiento debe cuadrar** (DR = CR).

### Paso 10 · Inventario inicial

**Ruta**: Inventario → **Apertura de inventario**.

Carga el stock real con su costo unitario y sede. El sistema genera automáticamente el movimiento de inventario y el asiento DR 1435 / CR 1115 (o la cuenta de apertura que elijas).

Si la empresa maneja muchos SKUs, soporte puede ayudarte con una **carga masiva** desde Excel.

### Paso 11 · Nómina (si la empresa la liquida en Emprenddi)

**Ruta**: Nómina → **Parámetros**.

- Salario mínimo, UVT, auxilio de transporte vigentes.
- Cuentas contables por concepto (sueldos por pagar → 2505, salud → 2370xx, etc.).
- Empleados y contratos.

### Paso 12 · Información Exógena DIAN

**Ruta**: DIAN → **Información Exógena**.

Configura los **conceptos** que correspondan a cada cuenta contable (formatos 1001, 1004, 1005, 1006, 1007, 1008, 1009). Sin esta configuración no podrás generar los archivos al año fiscal.

### Paso 13 · Usuarios y permisos

**Ruta**: Administración → **Usuarios**.

Verifica que el administrador haya creado el equipo:

- **Cajeros** — solo POS, ver inventario, cerrar caja
- **Vendedores** — POS, cotizaciones, ver cartera
- **Gerente** — todo menos roles y configuración de empresa
- **Contador** — tú (lectura completa de contabilidad + postear/anular)

## 3. Tu día a día como contador

| Acción | Ruta |
|---|---|
| Crear / postear / anular asientos manuales | Contabilidad → Asientos contables |
| Conciliar movimientos bancarios | Contabilidad → Conciliación bancaria |
| Liquidar nómina del período | Nómina → Períodos |
| Generar Información Exógena | DIAN → Información Exógena |

## 4. Reportes que vas a consumir

**Ruta**: Reportes (sidebar lateral).

| Reporte | Para qué |
|---|---|
| **Estado de Resultados Integral** (P&G) | Utilidad del período por cuenta |
| **Balance General** | Foto de activos, pasivos y patrimonio a una fecha |
| **Indicadores Financieros** | Liquidez, rentabilidad, endeudamiento, actividad |
| **Libro Diario** | Asientos cronológicos (obligatorio DIAN) |
| **Libro Mayor y Auxiliar** | Movimientos por cuenta + tercero |
| **Balance de Comprobación** | Verificar cuadre antes del cierre |
| **Cartera (CxC)** | Facturas pendientes de cobro |
| **Cuentas por Pagar** | Lo que la empresa le debe a proveedores |
| **Kardex** | Histórico por producto + sede |
| **Stock por Sede** | Snapshot del inventario actual |
| **Cierres de Caja** | Diferencias entre esperado y contado por cajero |

**Todos** los reportes exportan a **Excel** (con formato monetario) y **PDF** (vía impresión del navegador). Detalle: [Reportes contables](/docs/contabilidad/reportes/).

## 5. Cierre del ejercicio

Al cerrar año fiscal:

1. **Balance de Comprobación** ajustado al 31 dic → todo cuadrado.
2. **Estado de Resultados** del ejercicio.
3. **Asiento de cierre**: cancelar cuentas de ingresos (CR) contra cuentas de gastos/costos (DR) → utilidad o pérdida del ejercicio → 3605xx.
4. **Generar Información Exógena** (formatos 1001 a 1009 según aplique).
5. **Imprimir y archivar** Libro Diario y Libro Mayor del año (PDF + Excel).
6. **Cambiar el ambiente DIAN** y la resolución si vence al fin de año.

## 6. Referencias rápidas

- [Configuraciones de empresa](/docs/administracion/configuraciones-empresa/)
- [Plan de Cuentas (PUC)](/docs/contabilidad/plan-cuentas/)
- [Impuestos](/docs/contabilidad/impuestos/)
- [Asientos contables](/docs/contabilidad/asientos-contables/)
- [Categorías y herencia de cuentas](/docs/inventario/categorias/)
- [Estados Financieros e Indicadores](/docs/contabilidad/estados-financieros/)
- [Reportes contables](/docs/contabilidad/reportes/)
- [Portal del Contador](/docs/administracion/portal-contador/)
- [Información Exógena](/docs/dian/informacion-exogena/)
- [Conciliación bancaria](/docs/contabilidad/conciliacion-bancaria/)
- [Períodos fiscales](/docs/contabilidad/periodos-fiscales/)

## ¿Dudas?

- **Soporte técnico** — WhatsApp [+57 324 641 5947](https://wa.me/573246415947), lunes a viernes 8 a.m. - 6 p.m.
- **Correo** — soporte@emprenddi.com

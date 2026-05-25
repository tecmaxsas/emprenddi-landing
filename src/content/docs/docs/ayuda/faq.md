---
title: Preguntas Frecuentes
description: Respuestas rápidas a las dudas más comunes de usuarios de Emprenddi.
sidebar:
  order: 1
---

## General

### ¿Emprenddi es solo para Colombia?

Sí. Emprenddi está construido específicamente para empresas en Colombia: factura electrónica DIAN, retenciones colombianas, prestaciones sociales, RUT, régimen simple, exógena. No tiene sentido fuera del país.

### ¿Necesito instalar algo?

No. Emprenddi funciona en el navegador (Chrome, Edge, Firefox, Safari). Solo necesitas internet.

La única excepción es **QZ Tray** (gratuito) si quieres imprimir tirilla térmica desde el navegador sin diálogos.

### ¿Funciona sin internet?

No. Emprenddi requiere conexión a internet para operar (es SaaS en la nube). Si tu conexión es inestable, considera tener Wi-Fi de respaldo (plan de datos celular).

### ¿En qué dispositivos funciona?

- **Computador** (Windows, Mac, Linux) — recomendado para administración
- **Tablet** (iPad, Android) — funciona bien para POS y restaurante
- **Celular** — funciona pero la interfaz es más práctica en pantalla grande

### ¿Cuánto cuesta?

Plan único $1.600.000/año (todo incluido — facturación electrónica DIAN ilimitada, inventario, contabilidad, nómina, restaurante, multi-sede, multi-usuario). [Ver precios](/precios).

## Datos y migración

### ¿Cómo migro mis datos desde otro sistema?

- **Productos**: cargas un Excel/CSV con tu catálogo
- **Clientes y proveedores**: idem
- **Saldos iniciales** (de cuentas contables, cartera, inventario): se cargan con asientos de apertura
- **Facturas históricas**: típicamente NO se migran (solo se carga el saldo)

Ofrecemos acompañamiento de migración. Escríbenos.

### ¿Mis datos están seguros?

Sí. Backups automáticos cada hora en infraestructura redundante. Datos cifrados en reposo y en tránsito (HTTPS).

### ¿Soy dueño de mis datos?

Sí, siempre. Puedes exportar todo en cualquier momento desde **Configuraciones → Exportar datos**.

### ¿Pueden los empleados de Emprenddi ver mis datos?

No. Tu información es privada. Solo accedemos si **tú nos lo solicitas** explícitamente para soporte. Toda acción nuestra queda en log de auditoría que tú puedes ver.

## DIAN y facturación electrónica

### ¿Emprenddi es proveedor tecnológico DIAN?

No. Emprenddi es un software de gestión que **integra con un proveedor tecnológico autorizado**. La facturación electrónica funciona porque el proveedor (con autorización DIAN) firma y envía los XML.

### ¿Necesito ir a la DIAN antes de empezar?

Sí. Necesitas:
1. **Resolución DIAN** de numeración de facturación electrónica (FE)
2. **Resolución DIAN** de POS DIAN si vendes con tirilla POS
3. **Habilitar tu empresa** como facturador electrónico ante la DIAN

Si no las tienes, te orientamos cómo gestionarlas. Suele tomar 1-3 días hábiles.

### ¿Qué pasa si la DIAN rechaza mi factura?

El sistema muestra el motivo y permite **reenvío automático** después de corregir. La mayoría de rechazos son por datos del cliente mal cargados (NIT con error, DV incorrecto, etc.).

### ¿Cuánto tarda en validarse una factura?

Típicamente **5-30 segundos**. En picos de alta carga DIAN puede tardar más. El sistema reintenta automáticamente.

### ¿Puedo facturar a un cliente extranjero?

Sí, con tratamiento de **exportación** (IVA 0%, identificación con pasaporte o ID extranjero). El sistema soporta este caso.

## POS y operación

### ¿Puedo trabajar offline en POS?

Funcionalidad limitada. Si pierdes internet temporalmente, el POS sigue tomando órdenes pero **no emite factura DIAN** hasta que vuelva la conexión. Las órdenes quedan en cola y se emiten en lote al reconectar.

### ¿Cuántas cajas/terminales puedo tener?

Ilimitadas. Solo cuentan **usuarios**, no terminales. Si tienes 5 cajas con 10 cajeros que rotan, son 10 usuarios y 5 instancias del POS.

### ¿Puedo abrir el mismo POS en varios computadores?

Sí, cada uno es una sesión independiente. La caja se asocia al usuario logueado, no al equipo.

### ¿Cómo manejo descuentos?

Configurable: el usuario puede tener tope de descuento (ej. máx 10% sin autorización). Para descuentos mayores se requiere clave de admin.

### ¿Puedo aceptar pagos con tarjeta?

Emprenddi **registra** el pago con tarjeta pero no procesa la transacción. Para procesar tarjetas necesitas un datafono físico (Bold, Wompi POS, datafono bancario). Emprenddi se integra con Bold y Wompi para conciliación automática.

## Restaurante

### ¿Sirve para café, bar, comida rápida?

Sí. El módulo restaurante cubre mesas, barra, autoservicio, comida rápida, food truck, cafetería. Configurable según tu modelo.

### ¿Tiene Display de Cocina (KDS)?

Sí. Pantalla aparte para cocina con órdenes en tiempo real, tiempos de preparación y alertas. [Ver KDS](/docs/restaurante/cocina-kds/).

### ¿Maneja modificadores (sin cebolla, etc.)?

Sí. Modificadores con grupos (obligatorios y opcionales), precios extra, máximos. [Ver Modificadores](/docs/restaurante/modificadores/).

### ¿Permite carta QR para que cliente ordene desde su mesa?

Sí. Carta digital con QR único por mesa. El pedido llega directo a cocina. [Ver Carta QR](/docs/restaurante/carta-qr/).

## Inventario

### ¿Maneja kits y combos?

Sí. Un combo puede ser un producto que **descuenta múltiples insumos** del inventario al venderse.

### ¿Soporta seriales (IMEI, números de serie)?

Sí. Productos serializados con tracking individual. [Ver Seriales](/docs/inventario/seriales/).

### ¿Soporta lotes y vencimientos?

Sí. Productos con manejo de lotes (FIFO/FEFO) y alertas de vencimiento.

### ¿Multi-bodega?

Sí. Cada sede es una bodega. Transferencias entre sedes con documentos formales.

## Contabilidad

### ¿Está alineado con normas colombianas?

Sí. PUC colombiano (Decreto 2650/1993 actualizado). NIIF aplicable. Cumple con todas las normas vigentes.

### ¿Genera estados financieros oficiales?

Sí: balance general, estado de resultados (P&G), estado de cambios en patrimonio, flujo de efectivo, notas a los estados financieros.

### ¿Maneja activos fijos con depreciación?

Sí. Línea recta o saldos decrecientes, asientos automáticos de depreciación mensual. [Ver Activos Fijos](/docs/contabilidad/activos-fijos/).

### ¿Conciliación bancaria?

Sí. Cargas el extracto y el sistema sugiere matching automático. [Ver Conciliación](/docs/contabilidad/conciliacion-bancaria/).

## Nómina

### ¿Calcula prestaciones sociales?

Sí. Cesantías, intereses a cesantías, prima, vacaciones — todo automático.

### ¿Genera nómina electrónica DIAN?

Sí. Soporte nativo de Documento Soporte de Nómina Electrónica.

### ¿Soporta nómina por horas, por turnos, comisiones?

Sí. Configurable por empleado.

## Garantías

### ¿Sirve para electrodomésticos, celulares, etc.?

Sí. Tickets de garantía con tracking de estado, técnico asignado, costos, fechas. [Ver Garantías](/docs/garantias/tickets-garantia/).

## Soporte y entrenamiento

### ¿Ofrecen capacitación?

Sí, incluida en el plan. Hacemos onboarding con tu equipo (POS, contabilidad, configuración) cuando arrancas.

### ¿Cómo contacto soporte?

Tenemos dos líneas separadas:

- **🛠 Soporte Técnico** (clientes activos, errores, dudas operativas): WhatsApp **+57 324 641 5947**
- **💬 Ventas / Demos** (nuevos clientes, cotizaciones, renovaciones): WhatsApp **+57 314 440 5766**
- 📧 Email general: **comercial@emprenddi.com**

Horario: lunes a viernes 8 a.m. - 6 p.m., sábados 9 a.m. - 2 p.m. [Más info](/docs/ayuda/contacto-soporte/).

### ¿Tienen comunidad de usuarios?

Estamos creando un grupo de WhatsApp y foro. Pregúntanos al soporte para invitarte.

## Próximos temas

- [Errores Comunes](/docs/ayuda/errores-comunes/)
- [Contacto Soporte](/docs/ayuda/contacto-soporte/)

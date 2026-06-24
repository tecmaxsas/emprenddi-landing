---
title: Configuraciones de Empresa
description: Datos fiscales, logo, numeración de documentos y preferencias generales.
sidebar:
  order: 5
---

Las **configuraciones de empresa** son los parámetros maestros que afectan toda tu operación: datos fiscales, formatos de números, monedas, preferencias de POS, etc.

## Acceso

Panel App → **Configuraciones → Empresa**.

## Pestañas principales

### 1. Datos generales

- **Razón social** (nombre legal en RUT)
- **Nombre comercial** (cómo te conoce el público)
- **NIT** + dígito de verificación
- **Tipo de persona**: jurídica / natural
- **Régimen tributario**: responsable IVA / no responsable IVA / régimen simple
- **Responsabilidades fiscales** (códigos DIAN del RUT — 05, 09, 11, 42, 47, 48, etc.)
- **Actividad económica principal** (código CIIU)
- **Logo** (PNG transparente recomendado, max 1 MB)

### 2. Contacto

- **Dirección fiscal** (la del RUT)
- **Ciudad / departamento**
- **Teléfono**
- **Email**
- **Sitio web** (opcional)
- **Contacto comercial** (nombre + teléfono)

### 3. Numeración de documentos

Define el prefijo y siguiente número para cada tipo de documento interno (los que **no** son DIAN, los DIAN van por resolución):

- **Cotizaciones**: prefijo `COT-`, siguiente `1`
- **Remisiones**: prefijo `REM-`, siguiente `1`
- **Pedidos**: prefijo `PED-`, siguiente `1`
- **Recibos de pago**: prefijo `RC-`, siguiente `1`
- **Notas internas**: prefijo `NOT-`, siguiente `1`

Para **facturas DIAN** y **POS DIAN** los números vienen de la **resolución** ([ver Resoluciones DIAN](/docs/dian/resoluciones/)).

### 4. Moneda y formato

- **Moneda base**: COP (Peso colombiano)
- **Separador decimal**: coma o punto
- **Separador de miles**: punto o coma
- **Decimales en precios**: 0 (recomendado para COP)
- **Decimales en cantidades**: 0, 2, 3 según tu negocio
- **Mostrar símbolo $**: sí / no

### 5. IVA y tributos

- **IVA por defecto** en productos nuevos (19%, 5%, 0%, exento)
- **Aplicar IVA en compras** automáticamente
- **Manejo de impuesto al consumo** (restaurantes — 8%)
- **Retenciones por defecto** (ReteFuente, ReteIVA, ReteICA)

### 6. POS

- **Tipo de factura por defecto**: **POS** (no electrónica) o **Electrónica** (DIAN). El POS abre con esta opción seleccionada en cada venta; el cajero igual puede cambiarla manualmente al cobrar. Útil para empresas que **solo facturan electrónicamente** y quieren evitar el clic adicional en cada venta.
- **Solicitar cliente en cada venta**: sí / no
- **Cliente genérico** (predeterminado cuando no se selecciona)
- **Permitir venta sin stock**: sí / no
- **Permitir descuentos**: sí / no
- **Tope máximo de descuento** sin autorización (ej. 10%)
- **Permitir modificar precio en el carrito**: sí / no
- **Permitir modificar / agregar impuesto por línea**: sí / no
- **Imprimir ticket automáticamente al cerrar venta**: sí / no
- **Propina sugerida (%)**: 0 = desactivada
- **Cierre de caja oculto**: el cajero no ve el monto esperado al cerrar turno (detecta diferencias sin sesgar)

### 7. DIAN

- **Modo**: habilitación (pruebas) / producción
- **Software ID** (asignado por DIAN)
- **PIN** del software
- **Proveedor tecnológico** integrado
- **Auto-emitir facturas al guardar**: sí / no

### 8. Email

- **SMTP host** (servidor de correo saliente)
- **SMTP puerto**, usuario, password
- **Email remitente** (desde el cual salen correos)
- **Adjuntar PDF en envío de factura**: sí / no
- **Adjuntar XML DIAN**: sí / no

### 9. Inventario

- **Permitir stock negativo**: sí / no
- **Calcular costo**: promedio ponderado (recomendado) / PEPS / UEPS
- **Alerta de stock bajo**: sí / no
- **Días de cobertura para alertar** (ej. <15 días de stock disponible)

### 10. Restaurante (solo si activo)

- **Modo de servicio por defecto**: mesa / domicilio / para llevar
- **IVA diferencial mesa vs llevar**: sí / no
- **Aplicar propina sugerida**: % o desactivado
- **Tiempo de inactividad para alerta** en mesa (ej. 45 min sin pedir)

### 11. Personal

- **Activar nómina electrónica**: sí / no
- **Día de pago**: quincenal / mensual + día específico
- **Calcular prestaciones automáticamente**: sí / no

## Cambios sensibles

Algunos cambios afectan documentos ya emitidos:

- **Cambiar NIT** → solo permitido si NO hay documentos DIAN emitidos
- **Cambiar IVA por defecto** → afecta solo productos NUEVOS, no los existentes
- **Cambiar numeración interna** → no afecta documentos pasados pero puede crear conflictos si bajas el contador

El sistema te avisa con popup antes de aplicar cambios sensibles.

## Backup automático

Toda la información de tu empresa se respalda automáticamente cada hora en infraestructura redundante. Si necesitas exportación manual:

**Configuraciones → Exportar datos** descarga ZIP con tu información (productos, clientes, facturas, contabilidad) en CSV/JSON.

## Multi-empresa

Si manejas varias empresas, las configuraciones son **independientes por empresa**. Cambia entre empresas con el selector arriba derecha.

## Próximos temas

- [Resoluciones DIAN](/docs/dian/resoluciones/)
- [Usuarios y Roles](/docs/administracion/usuarios-roles/)
- [Parametrización Inicial](/docs/primeros-pasos/parametrizacion-inicial/)

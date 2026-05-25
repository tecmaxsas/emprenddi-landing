---
title: 2. Parametrización inicial
description: Los ajustes que debes revisar después de registrarte para que el sistema refleje tu negocio correctamente.
sidebar:
  order: 2
---

Aunque al registrarte el sistema queda **operativo**, hay parámetros que **dependen de tu negocio específico** y que conviene revisar antes de empezar a operar en serio. Esta guía te lleva por todo.

## Checklist de parametrización

Te recomendamos hacerlo en **una sola sesión de 2 horas**, idealmente con tu asesor de Emprenddi:

- [ ] [Verificar datos de la empresa](#1-verificar-datos-de-la-empresa)
- [ ] [Cargar el logo](/docs/primeros-pasos/cargar-logo/)
- [ ] [Revisar Plan de Cuentas (PUC)](#3-revisar-el-puc)
- [ ] [Activar impuestos correctos](#4-activar-impuestos)
- [ ] [Configurar métodos de pago con cuentas bancarias reales](#5-metodos-de-pago)
- [ ] [Crear sedes adicionales](#6-sedes-adicionales)
- [ ] [Configurar comportamiento del POS](#7-configuracion-pos)
- [ ] [Crear usuarios para tu equipo](/docs/primeros-pasos/crear-usuarios/)
- [ ] [Crear categorías y productos prioritarios](/docs/inventario/productos/)
- [ ] [Cargar 20-50 terceros frecuentes](#9-terceros-clientes-y-proveedores)
- [ ] [Cargar inventario inicial](/docs/inventario/apertura-inventario/)
- [ ] [Asiento de saldos contables iniciales](/docs/contabilidad/asientos-contables/)
- [ ] [Configurar resoluciones DIAN (si vas a usar)](/docs/dian/resoluciones/)
- [ ] [Configurar impresoras térmicas (si tienes)](/docs/administracion/impresoras-qz-tray/)

## 1. Verificar datos de la empresa

**Ruta**: panel App → **Configuraciones** → tab **Empresa**.

Revisa que estén correctos:

| Campo | Por qué importa |
|---|---|
| Nombre comercial | Aparece en tickets POS y facturas |
| Razón social | Obligatorio para DIAN. Debe coincidir con tu RUT |
| NIT + DV | Validar contra el RUT físico |
| Régimen | Define si el sistema activa retenciones e IVA |
| Email, teléfono, dirección | Datos públicos en facturas y menú QR |
| Moneda | COP por defecto — **no cambiar** después de iniciar |
| Zona horaria | `America/Bogota` por defecto |

## 2. Cargar el logo

Ver [Cargar logo](/docs/primeros-pasos/cargar-logo/) — sale en tickets POS, facturas, comprobantes de garantía y menú público del restaurante.

## 3. Revisar el PUC

El Plan de Cuentas viene **pre-sembrado** con la estructura del Decreto 2650/1993. **No necesitas crear cuentas a menos que tu negocio tenga necesidades específicas**.

**Ruta**: panel App → **Contabilidad** → **Plan de Cuentas**.

Cuentas clave que se usan automáticamente:

| Código | Para qué |
|---|---|
| 110505 | Caja general (pagos efectivo) |
| 1110xx | Bancos (transferencias/tarjetas) |
| 1305 | Clientes — cartera CxC |
| 1435 | Inventario |
| 2205 | Proveedores nacionales (CxP) |
| 240805 | IVA generado |
| 240810 | IVA descontable |
| 2365 / 2367 | Retenciones |
| 4135 | Ingresos por ventas |
| 6135 | Costo de ventas |

**Cuándo crear subcuentas custom**:
- Tienes **varias cuentas bancarias** → crear `111005-01 Bancolombia`, `111005-02 Davivienda`, etc.
- Quieres separar ingresos por línea de negocio → `413505-01 Restaurante`, `413505-02 Domicilios`, etc.

Ver más en [Plan de Cuentas](/docs/contabilidad/plan-cuentas/).

## 4. Activar impuestos

**Ruta**: panel App → **Contabilidad** → **Impuestos**.

Vienen pre-sembrados:

- IVA-19, IVA-5, IVA-0 (exento), IVA-EXC (excluido)
- INC-8 (consumo restaurantes)
- Retenciones en la fuente (compras, servicios, honorarios)
- ReteIVA, ReteICA

**Activa o desactiva** según tu régimen. Si eres **no responsable de IVA**, desactiva los IVA. Si tu municipio no es Bogotá, ajusta la tarifa de ReteICA.

Ver [Impuestos](/docs/contabilidad/impuestos/).

## 5. Métodos de pago

**Ruta**: panel App → **Configuraciones** → **Métodos de pago**.

Vienen 8 pre-configurados. **Lo crítico**: si tienes **más de una cuenta bancaria**, crea subcuentas en el PUC y duplica los métodos de pago apuntando a la cuenta correcta. Si no, todos los pagos por transferencia entran a la misma cuenta y los bancos quedan mal contabilizados.

Ejemplo: si recibes pagos por Bancolombia y Davivienda, crea dos métodos "Transferencia Bancolombia" y "Transferencia Davivienda" asociados a las cuentas contables respectivas.

## 6. Sedes adicionales

**Ruta**: panel App → **Operación** → **Sedes**.

Viene 1 sede creada: **"Sede Principal"** (tipo `mixed`).

Crea más si:
- Tienes **varias tiendas físicas** → una sede `store` por tienda
- Hay **bodega central separada** → sede `warehouse`
- Tienes tienda virtual → sede `virtual`

Cada sede tiene su propio inventario, sus propios consecutivos DIAN y su propia plantilla de impresión asignable.

Ver [Sedes](/docs/administracion/sedes/).

## 7. Configuración POS

**Ruta**: panel App → **Configuraciones** → tab **POS**.

| Toggle | Recomendación |
|---|---|
| Permitir modificar precio en el carrito | ON para retail; OFF si tu cadena tiene precio fijo |
| Permitir descuento por línea | ON usualmente |
| Permitir modificar/agregar impuesto por línea | ON |
| Cliente obligatorio | OFF para POS rápido; ON para B2B |
| Permitir vender sin stock | OFF por seguridad |
| Imprimir ticket automático al cerrar venta | ON |
| Propina sugerida % | 10% típico restaurante |
| **Umbral % para aprobación de supervisor** | 10% (si excedes, pide PIN supervisor) |

Ver [POS tradicional](/docs/ventas/pos-tradicional/).

## 8. Configuración Restaurante (si aplica)

Si tu negocio es restaurante, activa los features en **Configuraciones → tab Restaurante**.

Más detalle en [POS Restaurante](/docs/restaurante/pos-restaurante/).

## 9. Terceros (clientes y proveedores)

**Ruta**: panel App → **Contabilidad** → **Terceros**.

Pre-creado el **Consumidor Final** (NIT 222222222). **No lo borres** — el POS lo usa como fallback.

Te recomendamos cargar los **20-50 terceros más frecuentes** (clientes habituales, proveedores) **antes de arrancar** para no crearlos sobre la marcha en POS.

Datos críticos para DIAN: NIT con DV, `dian_municipality_id` (catálogo, no escribir libre), régimen, `tax_responsibilities`.

## 10. Inventario inicial

**CRÍTICO**. Antes de empezar a vender, debes cargar el **stock físico actual** con un conteo. Si no lo haces, los costos al vender serán 0 → utilidad inflada → contabilidad equivocada.

Ver [Apertura de inventario](/docs/inventario/apertura-inventario/).

## 11. Saldos contables iniciales

Si vienes de **otro sistema contable**, debes registrar los saldos (caja, bancos, CxC, CxP, capital) con un **asiento manual** de fecha del corte.

Ver [Asientos contables](/docs/contabilidad/asientos-contables/).

## 12. Resoluciones DIAN

Si vas a usar **POS local** (talonarios DIAN) o **facturación electrónica DIAN**, configura las resoluciones.

Ver [Resoluciones DIAN](/docs/dian/resoluciones/).

## 13. Impresoras térmicas

Si tienes impresora térmica (ticket POS, comandas restaurante), instala QZ Tray y registra la impresora.

Ver [Impresoras QZ Tray](/docs/administracion/impresoras-qz-tray/).

## Próximo paso

Una vez tengas los pasos críticos hechos (1-7), procede a [crear usuarios para tu equipo](/docs/primeros-pasos/crear-usuarios/).

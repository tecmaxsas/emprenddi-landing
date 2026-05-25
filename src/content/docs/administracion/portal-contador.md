---
title: Portal del Contador
description: Acceso especial para tu contador con permisos limitados a contabilidad y reportes.
sidebar:
  order: 6
---

El **portal del contador** es un rol con acceso especial diseñado para tu contador externo. Le permite revisar la contabilidad, descargar reportes y conciliar sin tener acceso a operaciones sensibles (no puede modificar precios, eliminar ventas, etc.).

## Por qué usar el rol contador

Antes era común:
- **Mala práctica 1**: dar acceso de admin al contador → riesgo de borrar o cambiar cosas
- **Mala práctica 2**: exportar todo a Excel y enviar al contador → lleva tiempo, hay riesgo de error

Con el portal, el contador entra directo, ve lo que necesita y trabaja sin intermediarios.

## Crear acceso para contador

Panel App → **Configuraciones → Usuarios → Crear**:

- **Nombre**: nombre del contador
- **Email**: el suyo (recibirá su acceso allí)
- **Rol**: selecciona **Contador**
- **Sedes**: todas (necesita ver consolidado)
- **Activo**: sí

Click **Guardar**. Recibe correo con instrucciones de login.

## Qué puede hacer el contador

### ✅ Permitido

- **Ver** plan de cuentas, asientos contables, cuentas auxiliares
- **Crear asientos manuales** (notas de ajuste, depreciaciones, provisiones)
- **Cerrar/abrir períodos** fiscales
- **Cerrar año** y generar asiento de cierre
- **Descargar reportes**: P&G, balance general, balance de comprobación, libro mayor, libro diario, auxiliar de cuentas
- **Conciliación bancaria**
- **Ver libros oficiales**: socios, mayor, diario, inventarios y balances
- **Generar información exógena** ([ver Exógena](/docs/dian/informacion-exogena/))
- **Ver retenciones practicadas y autorretenciones**
- **Descargar certificados de retención**
- **Cargar/editar PUC** (con cuidado)
- **Cargar/editar tarifas de impuestos**

### ❌ No permitido (por defecto)

- Crear/editar productos
- Crear/editar clientes o proveedores
- Crear facturas de venta o compra
- Modificar precios
- Eliminar documentos (los anula con nota crédito si necesita)
- Cambiar configuraciones de empresa
- Crear otros usuarios
- Acceder al POS

Si necesitas dar permisos adicionales, créale un **rol custom** ([ver Usuarios y Roles](/docs/administracion/usuarios-roles/)).

## Vista del portal

Cuando el contador entra ve:

### Dashboard

Resumen del estado contable:
- Asientos del mes
- Ventas/compras del mes
- IVA y retenciones generados
- Saldos clave (caja, bancos, cartera, proveedores)
- Cuentas que no balancean (alerta)
- Período actual y estado (abierto/cerrado)

### Menú lateral simplificado

- **Contabilidad** (asientos, PUC, períodos, conciliación)
- **Reportes** (P&G, balance, libros, auxiliares)
- **Impuestos** (IVA, retenciones, exógena)
- **Documentos** (vista solo lectura de facturas de venta y compra)

No ve POS, productos, clientes, proveedores, ni configuraciones operativas.

## Flujo típico mensual

### Día 1 del mes (cerrar mes anterior)

1. Verifica que **todas las facturas** del mes anterior están registradas
2. Genera **balance de comprobación** del mes
3. Revisa **cuentas auxiliares** clave (clientes, proveedores, bancos)
4. **Concilia bancos** del mes anterior
5. Registra **ajustes** necesarios (depreciaciones, provisiones, diferencias)
6. **Cierra el período**

### Quincenal (IVA bimestral / cuatrimestral)

1. Genera **reporte de IVA** generado y descontable
2. Calcula IVA a pagar/saldo a favor
3. Genera asiento de pago de IVA
4. Hace declaración en DIAN

### Anual

1. **Cierre del año** (genera asiento de cierre de cuentas de resultado)
2. Genera **estados financieros** finales (P&G + Balance General + Cambios en Patrimonio + Flujo de Efectivo)
3. **Información exógena**
4. **Renta** (cálculo y declaración)

## Notas para el contador

Si quieres que tu contador vea instrucciones específicas al entrar:

**Configuraciones → Mensaje al contador** — puedes dejarle un texto que verá en su dashboard. Ej:

> "Por favor concilia banco antes del día 5. Toda factura de compra debe cargarse máximo el día 15 para incluirla en el período. Para dudas: WhatsApp 312-345-6789."

## Compartir con varios contadores

Si tu contabilidad la lleva una **firma contable** (no una sola persona), crea un usuario contador por cada persona del equipo. Cada uno con su login y auditoría individual.

## Auditoría del contador

Toda acción del contador queda en el **log de auditoría** ([ver Usuarios](/docs/administracion/usuarios-roles/)). Si elimina un asiento o cierra un período, queda registrado quién y cuándo.

## Próximos temas

- [Plan de Cuentas](/docs/contabilidad/plan-cuentas/)
- [Reportes Contables](/docs/contabilidad/reportes/)
- [Períodos Fiscales](/docs/contabilidad/periodos-fiscales/)
- [Información Exógena](/docs/dian/informacion-exogena/)

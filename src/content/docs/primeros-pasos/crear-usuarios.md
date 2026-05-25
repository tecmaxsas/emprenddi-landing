---
title: 4. Crear usuarios para tu equipo
description: Cómo invitar a cajeros, contadores y otros miembros del equipo con los roles correctos.
sidebar:
  order: 4
---

Tu cuenta inicial te crea como **administrador**, pero generalmente quieres que tu equipo entre con sus propios usuarios. Cada persona con su email y contraseña, con permisos solo para lo que necesita hacer.

## Roles disponibles

Emprenddi viene con **6 roles pre-configurados**:

| Rol | Para quién | Resumen de permisos |
|---|---|---|
| **admin** | Dueño / gerente general | TODO. Sin restricciones |
| **manager** | Subgerente | Casi todo menos: usuarios, configuración empresa, configuración POS, plan de cuentas, impuestos, DIAN |
| **accountant** | Contador interno | Contabilidad + reportes + pagos + nómina + exógena. NO crea ventas ni POS |
| **cashier** | Cajero POS | POS + cerrar caja + cobros + productos (view) + terceros + inventario (view) + restaurante + seriales (view) + garantías (view, create) |
| **seller** | Vendedor | Productos (view) + crear ventas + cotizaciones + terceros + inventario (view) + seriales (view) |
| **accountant_external** | Contador externo | Para el Portal del Contador. Lectura amplia + edición contable. NO POS ni configuración |

Un usuario puede tener **varios roles a la vez** (ej. admin + cajero) pero normalmente uno solo es suficiente.

## Crear un usuario

### 1. Ir a Usuarios

Panel App → **Administración** → **Usuarios**.

### 2. Click en "Nuevo usuario"

Llena el formulario:

- **Nombre y apellidos**
- **Email** — será su usuario para entrar
- **Contraseña** — pon una inicial; el usuario debería cambiarla al entrar
- **Activo**: ON
- **Roles**: marca el rol o roles que corresponden

### 3. Guarda y comparte las credenciales

El sistema **no envía email automático** al usuario nuevo. Tienes que compartirle:

- **URL**: `https://pos.emprenddi.com/app/login`
- **Email**: el que registraste
- **Contraseña inicial**: la que pusiste

Cuando el usuario entre, debería cambiarla desde **Mi perfil** (arriba a la derecha → su nombre).

## Personalizar permisos

Si los 6 roles default no te calzan, puedes:

### Opción A: Crear un rol nuevo

**Administración → Roles → Nuevo rol**. Le das nombre y eliges qué permisos tiene de la lista (~70 permisos disponibles).

### Opción B: Modificar un rol existente

**Administración → Roles → Editar el rol** y ajustar permisos.

> **Cuidado**: si modificas un rol que ya está asignado a usuarios, los cambios afectan a TODOS ellos al instante.

## Asignar usuario a sede

Si tu negocio tiene **varias sedes**, asocia cada cajero a su sede correspondiente. Esto evita que un cajero venda desde la sede equivocada (descontando inventario que no le corresponde).

Por ahora la asignación se hace **al iniciar sesión** del cajero (selecciona su sede). Próximamente podrás fijar la sede del usuario en el perfil.

## Permiso especial: aprobar descuentos POS

Si activaste el umbral de descuento con supervisor (ver [Configuración POS](/docs/primeros-pasos/parametrizacion-inicial/#7-configuración-pos)), el usuario que aprueba descuentos altos debe tener el permiso `pos.discount.approve` (admin y manager lo tienen por default).

## Desactivar / Borrar un usuario

- **Desactivar** (recomendado): no puede entrar pero su historial queda. Útil para ex-empleados.
- **Borrar** (no recomendado): se mantienen sus referencias en facturas/asientos antiguos como "Usuario eliminado".

Ve a **Usuarios → Editar** y marca `Activo: OFF` para desactivar.

## Recuperar contraseña

Si un usuario olvida su contraseña:

1. En el login, click en **"¿Olvidaste tu contraseña?"**
2. Ingresa el email
3. Recibe un link de recuperación válido por 60 minutos
4. Sigue el link y crea una contraseña nueva

Si el usuario no recibe el email, verifica que el correo no esté en spam. Como admin también puedes restablecer manualmente desde **Usuarios → Editar → Cambiar contraseña**.

## Auditoría

Cada acción crítica del sistema queda registrada con el usuario que la hizo:

- Quién contabilizó una factura (`posted_by_user_id`)
- Quién creó un asiento manual (`created_by_user_id`)
- Quién aprobó un descuento POS
- Quién hizo una transferencia entre sedes

Esto te da trazabilidad completa.

## Próximo paso

Continúa con [hacer tu primera venta](/docs/primeros-pasos/primera-venta/).

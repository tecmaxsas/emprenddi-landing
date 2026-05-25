---
title: Usuarios y Roles
description: Crea usuarios, asígnales rol y restringe lo que cada uno puede ver y hacer.
sidebar:
  order: 1
---

Emprenddi separa accesos por **rol**. Cada usuario tiene un rol y el rol determina qué módulos ve, qué acciones puede hacer y qué reportes accede.

## Acceso

Panel App → **Configuraciones → Usuarios**.

## Crear usuario

Click **Crear** y completa:

- **Nombre** completo
- **Email** (será su login)
- **Contraseña inicial** (el usuario podrá cambiarla luego)
- **Rol** (selecciona uno de los predefinidos o crea uno custom)
- **Sedes** (a qué sedes tiene acceso — puede ser una, varias o todas)
- **Activo**

Click **Guardar**. El usuario recibe correo de bienvenida con instrucciones de login.

## Roles predefinidos

| Rol | Para quién | Acceso típico |
|---|---|---|
| **Admin** | Dueño / gerente | Todo, sin restricciones |
| **Cajero/Vendedor** | Personal de POS | Solo POS, ventas, abrir/cerrar caja |
| **Contador** | Contador externo o interno | Contabilidad, reportes, ajustes |
| **Inventario** | Bodeguero | Productos, ajustes, transferencias, kardex |
| **Comprador** | Encargado de compras | Compras, proveedores, pagos |
| **Mesero/Cocina** | Restaurante operativo | POS Restaurante, KDS, comandas |

## Crear rol custom

Si los predefinidos no encajan:

Panel App → **Configuraciones → Roles → Crear**:

- **Nombre del rol** (ej. "Supervisor de turno")
- **Permisos**: marca módulo por módulo qué puede ver/crear/editar/eliminar

### Matriz de permisos

Por cada módulo del sistema (Ventas, Compras, Productos, Clientes, etc.):

| Permiso | Significado |
|---|---|
| `view_any` | Ver listado |
| `view` | Ver detalle |
| `create` | Crear nuevo |
| `update` | Editar existente |
| `delete` | Eliminar |
| `restore` | Restaurar eliminado (soft delete) |
| `force_delete` | Borrado definitivo |

### Permisos especiales

- **`approve_invoices`**: aprobar facturas que requieren autorización
- **`override_price`**: cambiar precio en POS por debajo del configurado
- **`apply_discount`**: aplicar descuentos manuales
- **`open_close_register`**: abrir y cerrar caja
- **`view_reports`**: acceder a reportes contables
- **`emit_dian`**: emitir facturas electrónicas a DIAN

## Restricción por sede

Un usuario puede tener acceso a una, varias o todas las sedes.

- **Una sede**: solo ve datos de esa sede (productos, ventas, inventario)
- **Todas las sedes**: ve consolidado (típico para admin)

Esto aplica filtros automáticos en listas, reportes y POS.

## Sesiones y seguridad

### Cerrar sesión por inactividad

**Configuración → Seguridad**:
- Cierre automático después de X minutos sin actividad (default: 30 min)
- Útil para cajas compartidas

### 2FA (autenticación de dos factores)

Opcional pero recomendado para admins:
- Usuario → Mi Perfil → **Activar 2FA**
- Escanea QR con Google Authenticator o Authy
- Cada login pide código de 6 dígitos

### Bloqueo por intentos fallidos

Después de 5 intentos fallidos, cuenta se bloquea por 15 min. Admin puede desbloquear manualmente.

## Auditoría

Cada acción importante queda registrada con: usuario, fecha/hora, acción, módulo, IP.

**Configuración → Auditoría** muestra el log completo. Filtros por usuario, módulo o rango de fechas.

Útil para investigar: quién eliminó una factura, quién cambió un precio, quién aplicó un descuento grande.

## Desactivar usuario

Si un empleado se va:

Usuario → **Desactivar** (no eliminar — preserva auditoría e historial).

Pierde acceso inmediato pero su histórico queda intacto.

## Próximos temas

- [Sedes y Multi-empresa](/docs/administracion/sedes/)
- [Configuraciones de Empresa](/docs/administracion/configuraciones-empresa/)
- [Portal del Contador](/docs/administracion/portal-contador/)

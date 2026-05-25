---
title: Sedes
description: Múltiples sucursales con inventario, caja y reportes separados o consolidados.
sidebar:
  order: 2
---

Una **sede** es un punto físico de tu negocio (tienda, sucursal, restaurante, bodega). Cada sede tiene su propio inventario, sus propias cajas y sus propias ventas. Los reportes contables se consolidan automáticamente.

## Cuándo usar varias sedes

- Tienes **varios locales físicos** abiertos al público
- Tienes **una bodega central + tiendas** que se surten de ella
- Tienes **distintas líneas de negocio en una misma empresa** (ej. restaurante + tienda) y quieres separarlas
- Operas **food trucks**, ferias o puntos eventuales

## Crear sede

Panel App → **Configuraciones → Sedes → Crear**:

- **Nombre** (ej. "Centro", "Norte", "Bodega Principal")
- **Código** corto (ej. `SED-CTR`)
- **Dirección** completa
- **Ciudad / departamento**
- **Teléfono**
- **Tipo**: tienda / bodega / mixta
- **Resolución DIAN** asociada (cada sede puede tener resolución propia o compartir)
- **Resolución POS** asociada (idem)
- **Activa**

## Configurar sede

### Cajas

Cada sede puede tener una o varias cajas (terminales POS). Configura cada caja en **Configuraciones → Cajas**, asociándola a su sede.

### Inventario

Activa inventario por sede en **Configuraciones → Inventario**. Una vez activo:
- Cada producto puede tener stock en múltiples sedes
- Las ventas descuentan del stock de la sede que vende
- Las compras ingresan al stock de la sede que recibe
- Las transferencias mueven stock entre sedes ([ver Transferencias](/docs/inventario/transferencias/))

### Usuarios

En cada usuario asignas a qué sedes tiene acceso. Un cajero de la Sede Norte solo verá ventas y stock de su sede.

### Plantillas de impresión

Puedes tener distintas plantillas por sede si las facturas tienen diferencias (logos, datos de contacto, anuncios).

## Vista consolidada

Como admin con acceso a todas las sedes, puedes:

- **Seleccionar sede** en cada listado (filtrar por sede)
- **Ver consolidado** (todas las sedes juntas)
- **Reportes comparativos** entre sedes (cuál vende más, cuál tiene más stock)

## Multi-empresa

Si manejas **varias razones sociales** (NITs diferentes), eso son **empresas distintas** dentro de Emprenddi, no sedes. Cada empresa tiene su propia base de datos lógica, su propia contabilidad y su propio plan de cuentas.

Casos típicos de multi-empresa:
- Holding con varias sociedades
- Restaurante y constructora del mismo dueño
- Tu empresa + sociedad de tu socio

Cada usuario puede pertenecer a una o varias empresas. Cambia de empresa con el selector arriba derecha.

## Ejemplo práctico

**Empresa "Restaurantes ABC SAS"** con:
- Sede "Local Centro" — tienda + cocina
- Sede "Local Terraza" — solo tienda (la cocina es central)
- Sede "Bodega Principal" — solo almacén

Flujo típico:
1. Compras de insumos llegan a **Bodega Principal**
2. **Transferencia** envía insumos a cada sede según consumo
3. Cada sede **vende** desde su POS, descontando inventario propio
4. Reportes consolidados muestran utilidad total y por sede

## Eliminar sede

Una sede solo puede eliminarse si:
- No tiene ventas registradas
- No tiene stock asignado

En la práctica, **desactiva** la sede en lugar de eliminarla (preserva histórico).

## Próximos temas

- [Inventario por sede — Transferencias](/docs/inventario/transferencias/)
- [Usuarios y Roles](/docs/administracion/usuarios-roles/)
- [Centros de Costo](/docs/contabilidad/centros-costo/)

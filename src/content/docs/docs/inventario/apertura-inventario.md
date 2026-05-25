---
title: Apertura de Inventario
description: Cargar el stock inicial cuando arrancas el sistema. Crítico para que costos y contabilidad sean correctos.
sidebar:
  order: 5
---

La **apertura de inventario** es el primer movimiento de inventario que haces al empezar a usar Emprenddi. Cargas el stock **físico actual** que tienes en cada sede al momento del corte.

> **CRÍTICO**: si no haces apertura y empiezas a vender, los costos al vender serán **cero** → utilidad inflada → contabilidad equivocada → problemas con tu contador y la DIAN.

## Cuándo hacer apertura

- **Empresa nueva** que empieza a operar: día 1
- **Empresa que migra desde otro sistema**: el día del corte (típicamente cierre de mes o año)
- **Nueva sede abierta** después: cuando llega la mercancía inicial a esa sede

## Antes de empezar

Necesitas:

- [ ] **Conteo físico** en cada sede (idealmente fuera del horario operativo para evitar discrepancias)
- [ ] El **costo unitario real** de cada producto (lo que te costó comprarlo, NO el precio de venta)
- [ ] Productos ya **creados** en el sistema
- [ ] Permiso `inventory.adjust` o `products.manage_initial_stock`

## Crear apertura

### 1. Acceso

Panel App → **Inventario** → **Aperturas** → **Nueva**.

### 2. Cabecera

- **Sede** (importante: una apertura por sede)
- **Fecha del corte** (típicamente 31 de diciembre del año anterior si vienes de otro sistema)
- **Notas** (ej. "Apertura por migración desde Siigo")

### 3. Líneas

Por cada producto que tienes físicamente:

- **Producto**
- **Cantidad** (la contada físicamente)
- **Costo unitario** (cuánto te costó cada unidad). Si tienes precios distintos por lote, usa el promedio ponderado o el último

> **Tip**: si tienes muchos productos, exporta tu inventario actual a Excel, ajusta y pide a soporte cargarlo masivo. Tenemos plantilla estándar.

### Seriales (si aplica)

Si algún producto **maneja seriales**, captura los seriales actuales con TagsInput. La cantidad de seriales = cantidad cargada.

### 4. Postear

Click **Contabilizar**. El sistema:

1. **Crea movimiento de inventario** tipo `opening` por cada línea
2. **Genera asiento contable**:
   - DR Mercancías (1435) por el valor total
   - CR Cuenta de patrimonio (típicamente 3605 Resultados ejercicios anteriores)
3. **Crea ProductSerial** records si hay seriales (status `in_stock`)
4. **Stock disponible** para vender desde el día siguiente

## Asiento contable detallado

Si abres con $5 millones de inventario:

| Cuenta | Débito | Crédito |
|---|---|---|
| 1435 Mercancías | $5.000.000 | |
| 3605 Resultados ejercicios anteriores | | $5.000.000 |

**¿Por qué 3605?** Porque el inventario que ya tenías es **patrimonio acumulado** de operaciones pasadas (en el sistema anterior). No es ingreso ni gasto del periodo actual.

Si prefieres otra cuenta de contrapartida (ej. 360510 Reservas), configúrala con tu contador antes de postear.

## Una apertura por sede

Si tienes **3 sedes**, debes hacer **3 aperturas separadas** (una por sede). El stock de cada sede es independiente.

Ejemplo:
- Bodega Central: 100 unidades de Camiseta XL
- Tienda Norte: 30 unidades de Camiseta XL
- Tienda Sur: 20 unidades de Camiseta XL

Tres aperturas, cada una con la cantidad correspondiente.

## Una apertura por producto

Cada producto se carga **una sola vez** en cada sede. Si descubres después que olvidaste un producto, usa un **ajuste de entrada** (no otra apertura).

## Anular apertura

**Bloqueado** una vez posteada, porque cambiar el inventario base afectaría todo el histórico subsiguiente. Si te equivocaste:

1. Haz un **ajuste correctivo** (entrada o salida) con la diferencia
2. Documenta la causa en las notas

## Saldos contables iniciales (aparte)

La apertura de inventario solo cubre **mercancías**. Si tu empresa también tiene saldos en:

- Caja, bancos
- CxC clientes
- CxP proveedores
- Capital social
- Etc.

Debes hacer un **asiento manual aparte** ([Asientos Contables](/docs/contabilidad/asientos-contables/)).

## Mejores prácticas

### Hazla con el contador
La apertura es contable y fiscal, no solo operativa. Tu contador debe validar las cuentas y los saldos.

### Concilia con tu sistema anterior
Tras la apertura, el balance del sistema (caja + bancos + inventario + CxC − CxP = patrimonio) debe coincidir con el balance final del sistema anterior. Si no, hay error.

### Documenta el conteo físico
Guarda el Excel del conteo firmado por quien lo hizo. Útil para futuras auditorías.

### Hazla en horario no operativo
Si vendes mientras haces el conteo, el inventario cambia y nunca cuadra. Idealmente un domingo o feriado.

## Problemas comunes

### "Ya empecé a vender y no había hecho apertura"
Anula las ventas hechas (NC), haz apertura, vuelve a emitir ventas. Si no es viable, registra una apertura con fecha actual y haz ajustes correctivos del costo de las ventas ya hechas (consulta con contador, es delicado).

### "Mi conteo no cuadra con lo del sistema anterior"
Documenta la diferencia. Es información valiosa: probablemente había errores en el sistema anterior (faltantes o sobrantes). El ajuste va al asiento de apertura.

### "Quiero hacer aperturas parciales"
Cada apertura es un documento contable. Mejor una sola apertura por sede con todo el catálogo que muchas parciales.

## Próximos temas

- [Productos](/docs/inventario/productos/)
- [Asientos Contables — Saldos iniciales](/docs/contabilidad/asientos-contables/)
- [Kardex](/docs/inventario/kardex/)

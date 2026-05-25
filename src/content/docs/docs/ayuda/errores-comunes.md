---
title: Errores Comunes
description: Soluciones a los problemas más frecuentes que encuentran los usuarios.
sidebar:
  order: 2
---

## DIAN

### "DIAN rechazó la factura — NIT del cliente no existe"

**Causa**: el NIT del cliente está mal cargado o no tiene dígito de verificación.

**Solución**:
1. Edita el cliente
2. Verifica NIT y DV en consulta RUT pública DIAN
3. Reenvía factura desde **Documento → Reenviar a DIAN**

### "DIAN rechazó — DV (dígito de verificación) no coincide"

**Causa**: el DV calculado no coincide con el cargado.

**Solución**: Emprenddi calcula DV automáticamente. Edita el cliente y deja el campo DV en blanco; el sistema lo calcula.

### "Factura quedó en estado 'enviada' pero nunca llegó respuesta de DIAN"

**Causa**: caída temporal del servicio DIAN o demora en procesamiento.

**Solución**:
1. Espera 5-10 minutos
2. Click **Refrescar estado** en el documento
3. Si sigue sin respuesta a las 30 min, contacta soporte (reenvío manual)

### "No puedo emitir factura — resolución vencida"

**Causa**: tu resolución DIAN venció o agotó números.

**Solución**:
1. Solicita nueva resolución en MUISCA
2. Cárgala en **Configuraciones → Resoluciones DIAN**
3. Activa la nueva

### "Error: no tengo software ID o PIN"

**Causa**: falta configurar credenciales DIAN del proveedor tecnológico.

**Solución**: contacta soporte para configurar tu integración con el PT.

## POS

### "No imprime la tirilla"

Ver guía detallada en [Impresoras y QZ Tray](/docs/administracion/impresoras-qz-tray/#solucionar-problemas-comunes).

### "El POS dice 'sin stock' pero sí tengo producto"

**Causa**: stock por sede mal cargado, o producto vendido sin descontar bien.

**Solución**:
1. Revisa **Inventario → Stock por sede** del producto
2. Si está mal, haz **Ajuste de inventario** ([ver Ajustes](/docs/inventario/ajustes/))
3. Configura **"permitir venta sin stock"** en Configuraciones si tu negocio lo necesita

### "Aplicó IVA donde no debía / no aplicó donde sí debía"

**Causa**: producto mal configurado en tarifa de IVA.

**Solución**:
1. Edita producto
2. Verifica campo **IVA** (19%, 5%, 0%, exento)
3. Verifica que el cliente NO tenga marcada exención si no aplica

### "El total no cuadra con lo que cobré"

**Causa**: típicamente diferencias de redondeo o descuentos no contabilizados.

**Solución**:
1. Verifica detalle del documento (subtotal, IVA, descuento, total)
2. Si redondeo: configura **decimales en precios** en Configuraciones
3. Si descuento: revisa que el descuento aplicado quedó registrado

### "Caja no me deja cerrar — diferencia muy alta"

**Causa**: descuadre real entre lo registrado y lo contado.

**Solución**:
1. Revisa **detalle de movimientos** del turno
2. Revisa si hubo retiros sin registrar
3. Si la diferencia es justificable, agrega **observación** en cierre y cierra
4. Si es sospechosa, investiga antes de cerrar

## Inventario

### "El costo del producto es $0"

**Causa**: no hay compras registradas o el método de costeo no está configurado.

**Solución**:
1. Verifica método de costeo en **Configuraciones → Inventario** (recomendado: promedio ponderado)
2. Carga al menos una compra del producto para que tenga costo
3. Si es saldo inicial, regístralo con **Apertura de inventario** ([ver Apertura](/docs/inventario/apertura-inventario/))

### "Stock negativo en producto"

**Causa**: vendiste más de lo que tenías cargado.

**Solución**:
1. Ajusta stock positivamente con **Ajuste de inventario**
2. Revisa compras pendientes de registrar
3. Configura **"NO permitir stock negativo"** en Configuraciones para evitar el problema en futuro

### "Importé Excel de productos y no aparecen"

**Causa**: errores en el formato del Excel.

**Solución**:
1. Descarga **plantilla oficial** desde **Inventario → Productos → Importar → Descargar plantilla**
2. Verifica que columnas requeridas estén completas (nombre, código, precio, IVA)
3. Reimporta — el sistema muestra qué filas tuvieron error y por qué

## Contabilidad

### "El balance no cuadra"

**Causa**: asiento sin contrapartida, asiento desbalanceado o cuenta sin saldo inicial cargado.

**Solución**:
1. Genera **balance de comprobación** y busca cuentas con saldo inesperado
2. Revisa **asientos manuales recientes** — pueden tener error de captura
3. Si es saldo inicial faltante, regístralo con asiento de apertura

### "Período cerrado — no me deja registrar factura"

**Causa**: intentas registrar documento con fecha de período ya cerrado.

**Solución**:
- Si la factura es realmente de período cerrado: pide al contador que **reabra el período**, registra, cierra de nuevo
- Si la factura es del período actual: cambia la fecha al período actual

### "El IVA descontable no aparece en mi declaración"

**Causa**: compras sin marcar IVA o IVA mal codificado.

**Solución**:
1. Revisa compra → debe tener IVA detallado por línea
2. Verifica que el producto tenga IVA configurado
3. Verifica que la cuenta del IVA descontable esté bien en el PUC (típicamente 240802 o similar)

## Nómina

### "No me liquida correctamente prestaciones"

**Causa**: parámetros legales desactualizados o empleado mal configurado.

**Solución**:
1. Verifica **parámetros del año vigente** ([ver Parámetros Legales](/docs/nomina/parametros-legales/))
2. Verifica datos del empleado: fecha de ingreso, salario, tipo contrato
3. Reliquidación con **Nómina → Recalcular**

### "Empleado salió pero no se liquidó correctamente"

**Causa**: no se hizo **liquidación definitiva** ([ver Liquidación Definitiva](/docs/nomina/liquidacion-definitiva/)).

**Solución**: la liquidación periódica solo paga salario y prestaciones del mes. La liquidación definitiva (al retiro) calcula vacaciones pendientes, cesantías acumuladas, intereses, indemnización si aplica.

## Sesión / login

### "No puedo entrar — clave correcta pero dice error"

**Causa probable**: cuenta bloqueada por 5 intentos fallidos, o usuario desactivado.

**Solución**:
1. Espera 15 min y vuelve a intentar
2. Si sigues bloqueado, pide al admin que te desbloquee
3. Si dice "usuario desactivado", el admin debe reactivarte

### "Me cerró sesión y perdí la venta que estaba haciendo"

**Causa**: cierre por inactividad o pérdida de conexión.

**Solución**:
- Los **borradores** se auto-guardan cada 30 segundos. Al volver a entrar, busca **POS → tab Borradores**
- Si era una orden de restaurante en mesa, la mesa queda abierta — vuelve a entrar y continúa

## Conectividad

### "El sistema está lento"

**Causa**: conexión a internet lenta o pico de uso temporal en servidor.

**Solución**:
1. Test de velocidad: necesitas mínimo 5 Mbps
2. Cierra pestañas innecesarias del navegador
3. Reinicia router
4. Si persiste, contacta soporte

### "Error de conexión cada rato"

**Causa**: red inestable.

**Solución**:
1. Verifica Wi-Fi (cambia a cableado si puedes)
2. Considera plan de datos celular como respaldo
3. Considera router con dual-WAN para failover

## Si nada funciona

Contacta a soporte. WhatsApp **+57 314 440 5766** o email **comercial@emprenddi.com**.

Cuando contactes, incluye:
- Tu razón social (o NIT)
- Descripción del error (qué intentaste hacer, qué pasó)
- Captura de pantalla del error
- Si el error apareció hace poco o desde siempre

## Próximos temas

- [FAQ](/docs/ayuda/faq/)
- [Contacto Soporte](/docs/ayuda/contacto-soporte/)

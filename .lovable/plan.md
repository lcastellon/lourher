# Carrusel de publicaciones y contacto privado

## Resultado
- Añadir un banner editorial en “Publicaciones destacadas” que muestre una publicación a la vez y avance automáticamente cada 10 segundos.
- Incluir controles anterior/siguiente, indicadores y pausa al interactuar, conservando la lista completa debajo.
- Sustituir el correo visible del pie por un formulario con nombre, correo, asunto y mensaje.
- Mostrar confirmación o error junto al formulario y mantener la dirección de destino fuera del navegador.

## Envío de mensajes
- Enviar cada formulario directamente al correo institucional mediante el servicio de correo administrado del proyecto.
- Validar los campos en el servidor y añadir una trampa antispam sencilla.
- El envío quedará disponible cuando se configure y verifique un dominio remitente propio para este proyecto; no se crearán colas ni tablas de correo.

## Detalles técnicos
- Mantener la dirección visual “Prismatic field notes”, los datos actuales y la navegación de una sola página.
- Crear un componente interactivo pequeño para el carrusel y el formulario.
- Crear la plantilla y el punto de envío del mensaje sin exponer la dirección destinataria al código público.
- Verificar escritorio y móvil, movimiento reducido, envío, estados de error y compilación.

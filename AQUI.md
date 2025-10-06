
Este proyecto es una aplicación web desarrollada en **Angular** que permite la gestión completa de envíos de paquetes, incluyendo **creación de órdenes, actualización de estado y seguimiento**.  
El objetivo principal es practicar diseño web, experiencia de usuario y el uso de **formularios reactivos** en Angular.

---

Descripción del sitio

La aplicación cuenta con tres pantallas principales:

1. **Creación de Orden**  
   - Registra la información del paquete y del remitente.
   - Campos obligatorios:
     - Nombre completo del remitente (solo letras, mínimo 3 y máximo 50 caracteres).
     - Dirección de entrega (mínimo 10 y máximo 100 caracteres).
     - Correo electrónico válido (solo Gmail o Outlook).
     - Descripción del paquete (mínimo 40 y máximo 120 caracteres).
   - Al finalizar, genera:
     - Número de paquete único.
     - Identificador de rastreo de 12 caracteres para seguimiento.
   - Mensajes de éxito y error mediante pop-ups/modales.

2. **Actualizar Orden**  
   - Permite buscar un paquete por número de orden.
   - Una vez cargado, se pueden actualizar:
     - Estado del paquete (En preparación, En tránsito, Entregado, Cancelado).
     - Comentario sobre la actualización (20-40 caracteres).
     - Responsable de la actualización (solo letras).
   - Cada actualización queda registrada en un historial.

3. **Seguimiento de Paquete**  
   - Permite consultar el historial completo de actualizaciones de un paquete.
   - Se muestran en orden ascendente por fecha:
     - Fecha de actualización.
     - Comentario registrado.
     - Responsable del cambio.
   - Solo se necesita el identificador de rastreo del paquete.

---

Características principales

- Diseño moderno y **estético** con colores pastel y elementos visuales interactivos.  
- **Responsive Web Design:** se adapta a distintos tamaños de pantalla.  
- Validación de formularios con retroalimentación inmediata.  
- Pop-ups y modales para informar al usuario sobre errores o éxito de acciones.  
- Uso de **Angular standalone components**, formularios reactivos y servicios compartidos.  
- No se utiliza almacenamiento persistente; la práctica se enfoca en **interfaz y experiencia de usuario**.

---

Tecnologías utilizadas

- Angular (TypeScript, Reactive Forms)  
- HTML5 y CSS3  
- Bootstrap 5 y Bootstrap Icons (para estilizado adicional)  
- Modal propio para mensajes de alerta

---

Inicializar tu probrama
-Abres git bash
-Navegas en la carpeta de tu proyecto
-Y al ingresar a tu carpeta donde esta el proyecto ejecutas el comando ng serve y te dara la direccion que debes de pegar en tu navegador.

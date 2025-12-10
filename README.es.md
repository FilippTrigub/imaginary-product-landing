# Página de aterrizaje de NovaSphere v2

NovaSphere v2 es una página de aterrizaje conceptual que presenta "el futuro de la computación personal" con una interfaz holográfica, procesamiento cuántico y seguridad neuronal. Este repositorio contiene todos los recursos del sitio de marketing, incluidos el marcado, los estilos, los scripts y los medios.

## Características

- **Sección hero** que introduce el dispositivo NovaSphere con botones de llamada a la acción
- **Cuadrícula de características** que destaca la interfaz holográfica, el procesamiento cuántico, la seguridad neuronal y la batería infinita
- **Planes de precios** con niveles Estándar, Pro y Empresarial
- **Narrativa de visión del producto** con estadísticas, hoja de ruta a largo plazo e imágenes
- **Sección Acerca de** que describe la visión del equipo
- **Formulario de contacto** para recopilar consultas de usuarios
- **Pie de página** con navegación, datos de contacto y enlaces legales

## Estructura del proyecto

```
/
├── index.html        # Página de aterrizaje principal
├── header.html       # Marcado opcional de encabezado (no enlazado por defecto)
├── team.html         # Página de equipo como marcador de posición
├── styles.css        # Estilos globales del sitio
├── script.js         # Archivo JavaScript como marcador de posición
├── images/
│   ├── logo.svg      # Recurso del logotipo de NovaSphere
│   └── product.svg   # Ilustración del dispositivo
└── README*.md        # Documentación en varios idiomas
```

## Comenzando

1. Clona o descarga este repositorio.
2. Abre `index.html` en cualquier navegador moderno de escritorio o móvil.
3. Asegúrate de que el directorio `images/` permanezca relativo a los archivos HTML para que los recursos se carguen correctamente.

> La página es completamente estática y no requiere proceso de compilación ni dependencias externas más allá de la fuente alojada en Google (Montserrat).

## Personalización

- Actualiza el contenido de `index.html` para reflejar el mensaje de tu producto.
- Modifica la paleta de colores y la tipografía en `styles.css` para que coincidan con tu identidad de marca.
- Sustituye `images/logo.svg` y `images/product.svg` por tus propios recursos, manteniendo los mismos nombres de archivo o actualizando las referencias en el HTML.
- Mejora la interactividad añadiendo lógica en `script.js` (actualmente vacío).

## Notas de accesibilidad y rendimiento

- Estructura HTML semántica con encabezados claros e identificadores de sección para la navegación
- Los controles del formulario incluyen etiquetas asociadas
- Diseño responsive manejado mediante flexbox en CSS
- Recursos externos mínimos para mantener los tiempos de carga bajos

## Licencia

Este proyecto se ofrece con fines demostrativos. Siéntete libre de reutilizar y adaptar la página de aterrizaje para uso personal o educativo. El uso comercial debe respetar los nombres originales de marca registrada y reemplazarlos por tu propia identidad.

## Créditos

- Concepto y texto: NovaSphere (empresa ficticia)
- Ilustraciones y logotipos: archivos SVG ubicados en la carpeta `images/`
- Tipografía: [Montserrat](https://fonts.google.com/specimen/Montserrat) de Google Fonts
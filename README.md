# NovaSphere v2.0

Una página de aterrizaje moderna y responsiva para NovaSphere - un dispositivo de computación personal futurista que presenta interfaces holográficas, procesamiento cuántico y tecnología energética revolucionaria.

## Descripción General

Este proyecto muestra una página de aterrizaje de producto construida con HTML limpio, CSS y JavaScript vanilla. Demuestra prácticas modernas de desarrollo web con diseño responsivo, animaciones suaves y una experiencia de usuario atractiva.

## Características

### Aspectos Destacados del Producto
- **Interfaz Holográfica** - Contenido digital interactivo en 3D
- **Procesamiento Cuántico** - Computación de alto rendimiento y eficiencia energética
- **Seguridad Neural** - Autenticación biométrica avanzada
- **Batería Infinita** - Tecnología revolucionaria de recolección de energía

### Capacidades del Sitio Web
- Diseño completamente responsivo optimizado para todos los tamaños de pantalla
- Navegación con desplazamiento suave con enlaces de anclaje
- Tarjetas de características animadas al desplazarse
- Niveles de precios interactivos (Estándar, Pro, Empresarial)
- Formulario de contacto con validación
- Página de presentación de miembros del equipo
- Tipografía moderna usando la familia de fuentes Montserrat
- Estilo limpio y profesional con efectos hover

## Estructura del Proyecto

```
.
├── index.html          # Página de aterrizaje principal
├── team.html           # Presentación de miembros del equipo
├── styles.css          # Estilos globales
├── script.js           # Funcionalidad interactiva
├── header.html         # Componente de encabezado reutilizable
└── images/             # Logo e imágenes del producto
    ├── logo.svg
    └── product.svg
```

## Páginas

### Página de Aterrizaje Principal (index.html)
- Sección hero con introducción del producto
- Presentación de características clave
- Planes de precios (3 niveles)
- Sección de Producto y Visión con hoja de ruta de 5 años
- Sección Acerca de
- Formulario de contacto
- Pie de página completo

### Página del Equipo (team.html)
- Sección Conoce al equipo
- Cuatro miembros clave del equipo con biografías
- CEO y Fundador, CTO, Jefe de Investigación, Director de Diseño

## Stack Tecnológico

- **HTML5** - Marcado semántico con características de accesibilidad
- **CSS3** - Estilo moderno con diseños flexbox y grid
- **JavaScript (Vanilla)** - Sin frameworks, manipulación pura del DOM
- **Google Fonts** - Familia de fuentes Montserrat

## Configuración e Instalación

### Requisitos Previos
- Un navegador web moderno (Chrome, Firefox, Safari, Edge)
- Un servidor web local (opcional, pero recomendado para la mejor experiencia)

### Inicio Rápido

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd novasphere
```

2. Abrir directamente en el navegador:
```bash
# Simplemente abre el archivo index.html en tu navegador
open index.html
```

O usar un servidor de desarrollo local:

```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (http-server)
npx http-server -p 8000

# Usando PHP
php -S localhost:8000
```

3. Navegar a `http://localhost:8000` en tu navegador

## Desglose de Características

### Desplazamiento Suave
Haz clic en cualquier enlace de navegación para desplazarte suavemente a la sección correspondiente con un desplazamiento de encabezado para una visualización óptima.

### Manejo de Formularios
El formulario de contacto incluye validación básica y manejo de envío. Actualmente muestra un mensaje de alerta (la versión de producción se integraría con una API backend).

### Animaciones de Desplazamiento
Las tarjetas de características se desvanecen y se deslizan hacia arriba cuando entran en el viewport, creando una experiencia de desplazamiento atractiva.

### Diseño Responsivo
El diseño se adapta perfectamente a través de dispositivos:
- Escritorio: Diseños completos de múltiples columnas
- Tablet: Columnas de cuadrícula ajustadas
- Móvil: Diseño apilado de una sola columna

## Personalización

### Actualizar Contenido
- Edita archivos HTML para modificar el contenido de texto
- Actualiza `styles.css` para cambios de diseño
- Modifica `script.js` para cambios de comportamiento

### Esquema de Colores
Colores principales utilizados:
- Primario: `#6C63FF` (púrpura-azul)
- Secundario: `#4CAF50` (verde)
- Neutral: Varios grises para texto y fondos

### Imágenes
Reemplaza las imágenes de marcador de posición en el directorio `/images`:
- `logo.svg` - Logo de la empresa
- `product.svg` - Imagen de presentación del producto
- Las fotos del equipo usan placeholder.com (reemplazar con fotos reales)

## Compatibilidad de Navegadores

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)

## Rendimiento

- Dependencias mínimas (sin frameworks)
- CSS optimizado con selectores eficientes
- Estructura compatible con carga diferida
- Tiempos de carga rápidos

## Mejoras Futuras

Características potenciales para agregar:
- Integración backend para formulario de contacto
- Modal de video de demostración del producto
- Sección de blog
- Testimonios de clientes
- Registro de boletín informativo
- Soporte multiidioma
- Alternador de modo oscuro

## Contribuciones

Este es un proyecto de demostración. Siéntete libre de hacer fork y personalizar para tus propios proyectos.

## Licencia

Copyright 2025 NovaSphere Inc. Todos los derechos reservados.

---

**Versión:** 2.0
**Última Actualización:** 2025-12-19
**Estado:** Desarrollo Activo

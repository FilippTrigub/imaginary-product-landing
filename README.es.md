# NovaSphere v2.0 - Página de Aterrizaje

Una página de aterrizaje moderna y responsiva para NovaSphere, un dispositivo revolucionario de computación personal ficticio que cuenta con interfaces holográficas y tecnología de procesamiento cuántico.

## 🚀 Descripción General

Este proyecto presenta una página de aterrizaje completa de producto construida con HTML, CSS y JavaScript vanilla. Demuestra principios modernos de diseño web, animaciones suaves y diseños responsivos adecuados para comercializar un producto tecnológico de vanguardia.

## ✨ Características

- **Diseño Responsivo**: Diseño completamente responsivo que funciona perfectamente en dispositivos de escritorio, tabletas y móviles
- **UI/UX Moderna**: Diseño limpio y profesional con animaciones y transiciones suaves
- **Elementos Interactivos**: 
  - Navegación con desplazamiento suave
  - Tarjetas de características animadas al desplazarse
  - Formulario de contacto interactivo con validación
  - Efectos hover en tarjetas de precios y botones
- **Múltiples Páginas**:
  - Página de aterrizaje principal (`index.html`)
  - Página del equipo (`team.html`)
- **Las Secciones Incluyen**:
  - Sección hero con llamada a la acción
  - Exhibición de características con diseño de cuadrícula
  - Niveles de precios (Estándar, Pro, Empresarial)
  - Visión del producto y estadísticas
  - Sección Acerca de
  - Formulario de contacto
  - Pie de página completo

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura de marcado semántico
- **CSS3**: Estilo moderno con diseños Flexbox y Grid
- **JavaScript (ES6+)**: Funcionalidad interactiva y animaciones
- **Google Fonts**: Familia de fuentes Montserrat para tipografía
- **Gráficos SVG**: Imágenes vectoriales escalables para logo y visuales del producto

## 📁 Estructura del Proyecto

```
/vercel/sandbox/
├── index.html          # Página de aterrizaje principal
├── team.html           # Página de miembros del equipo
├── header.html         # Componente de encabezado (si se usa)
├── styles.css          # Hoja de estilos principal
├── script.js           # Funcionalidad JavaScript
├── .gitignore          # Reglas de ignorar de Git
├── README.md           # Documentación del proyecto
└── images/
    ├── logo.svg        # Logo de NovaSphere
    └── product.svg     # Imagen del producto
```

## 🚦 Comenzando

### Requisitos Previos

- Un navegador web moderno (Chrome, Firefox, Safari, Edge)
- Un servidor web local (opcional, pero recomendado para la mejor experiencia)

### Instalación y Ejecución

1. **Clonar o descargar este repositorio**

2. **Opción A: Abrir directamente en el navegador**
   ```bash
   # Simplemente abrir el archivo HTML
   open index.html
   # o hacer doble clic en index.html en tu explorador de archivos
   ```

3. **Opción B: Usar un servidor de desarrollo local (recomendado)**
   
   Usando Python:
   ```bash
   # Python 3
   python -m http.server 8000
   # Luego visitar http://localhost:8000
   ```
   
   Usando Node.js:
   ```bash
   # Instalar http-server globalmente
   npm install -g http-server
   
   # Ejecutar servidor
   http-server -p 8000
   # Luego visitar http://localhost:8000
   ```
   
   Usando PHP:
   ```bash
   php -S localhost:8000
   # Luego visitar http://localhost:8000
   ```

4. **Navegar a las páginas**:
   - Página principal: `http://localhost:8000/index.html`
   - Página del equipo: `http://localhost:8000/team.html`

## 🎨 Personalización

### Cambiar Colores

Editar las variables CSS o valores de color en `styles.css`:
- Los colores primarios se usan para botones y acentos
- Los colores de fondo se pueden modificar en clases específicas de sección

### Modificar Contenido

- **Contenido de Texto**: Editar directamente en `index.html` y `team.html`
- **Imágenes**: Reemplazar archivos en el directorio `images/`
- **Precios**: Actualizar tarjetas de precios en la sección `#pricing`
- **Características**: Modificar tarjetas de características en la sección `#features`

### Agregar Nuevas Secciones

1. Agregar estructura HTML en `index.html`
2. Estilizar la sección en `styles.css`
3. Agregar cualquier comportamiento interactivo en `script.js`

## 📱 Puntos de Ruptura Responsivos

El diseño se adapta a diferentes tamaños de pantalla:
- **Escritorio**: > 1024px
- **Tableta**: 768px - 1024px
- **Móvil**: < 768px

## 🌐 Compatibilidad de Navegadores

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)
- Opera (última versión)

## 📝 Componentes Clave

### Navegación
- Encabezado fijo con navegación de desplazamiento suave
- Menú responsivo (se puede mejorar con menú hamburguesa móvil)

### Sección Hero
- Titular y subtítulo llamativos
- Botones de llamada a la acción
- Exhibición de imagen del producto

### Cuadrícula de Características
- Cuadrícula responsiva de 4 columnas
- Tarjetas de características basadas en iconos
- Animaciones hover

### Tarjetas de Precios
- Estructura de precios de tres niveles
- Insignia destacada "Más Popular"
- Listas de características claras y CTAs

### Formulario de Contacto
- Validación de formulario del lado del cliente
- Mensaje de éxito al enviar
- Diseño de formulario limpio y accesible

## 🔧 Mejoras Futuras

Posibles mejoras para este proyecto:
- [ ] Agregar menú hamburguesa móvil
- [ ] Implementar backend para formulario de contacto
- [ ] Agregar sección de video demo
- [ ] Incluir testimonios de clientes
- [ ] Agregar sección de blog/noticias
- [ ] Implementar alternancia de modo oscuro
- [ ] Agregar animaciones de carga
- [ ] Incluir acordeón de preguntas frecuentes
- [ ] Agregar registro de boletín informativo
- [ ] Implementar seguimiento de análisis

## 📄 Licencia

Este es un proyecto de demostración para un producto ficticio. Siéntete libre de usar este código como plantilla para tus propios proyectos.

## 👥 Créditos

**Equipo NovaSphere** (Ficticio):
- Sarah Chen - CEO y Fundadora
- Marcus Rodriguez - Director de Tecnología
- Dra. Aisha Patel - Jefa de Investigación
- James Wilson - Director de Diseño

---

**Versión**: 2.0  
**Última Actualización**: Noviembre 2025  
**© 2025 NovaSphere Inc.** - Todos los derechos reservados (Compañía Ficticia)

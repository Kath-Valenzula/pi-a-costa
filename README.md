#  Piña Costa - Tienda de Moda Online

Bienvenidos a **Piña Costa**, una tienda web femenina y lujosa desarrollada como proyecto de interfaz gráfica con HTML, CSS, JavaScript y Bootstrap 5. Este sitio simula una experiencia real de ecommerce con funcionalidades modernas como catálogo, carrito, wishlist, sistema de recompensas Eco-Points, QR y un maniquí virtual interactivo.

---

##  Tecnologías Utilizadas

- HTML5 + CSS3 (estética pastel, elegante y responsiva)
- JavaScript (con localStorage / sessionStorage)
- Bootstrap 5
- Librerías externas:
  - [`qrcodejs`](https://cdnjs.com/libraries/qrcodejs)
  - [`html5-qrcode`](https://unpkg.com/html5-qrcode)

---

##  Estructura del Proyecto

piña-costa/
│
├── index.html # Página principal con pop-up e introducción
├── css/
│ ├── estilos.css # Estilos generales (tipografía, colores, hero)
│ └── maniqui.css # Estilos del maniquí virtual
├── js/
│ └── app.js # Toda la lógica JS centralizada
├── assets/
│ └── logo.jpg # Logo de la tienda
├── cliente/
│ ├── login.html # Login real con validación
│ ├── registro.html # Registro de nuevos usuarios
│ ├── perfil.html # Perfil con idioma y puntos Eco
│ ├── catalogo.html # Catálogo de productos
│ ├── carrito.html # Carrito de compras
│ ├── wishlist.html # Lista de favoritos
│ ├── maniqui.html # Maniquí virtual Mix & Match
│ └── qr-escaner.html # Escaneo de QR desde cámara
├── admin/
│ └── admin-productos.html # CRUD de productos
└── README.md # Documentación del proyecto


---

##  Funcionalidades

###  Usuario
- Registro y login funcional con `localStorage`
- Cambiar idioma ES/EN (perfil)
- Acumular y visualizar Eco-Points

###  Cliente
- Navegación clara y estética responsive
- Catálogo dinámico con botones
- Wishlist con favoritos persistentes
- Carrito con resumen total
- Escaneo y generación de QR por producto

###  Admin
- CRUD de productos sin servidor (localStorage)
- Imágenes, precios y nombre editable

###  Extra
- Pop-up de bienvenida
- Maniquí virtual combinable
- Recompensas Eco-Points por acciones

---

##  ¿Cómo usar?

1. Abre `index.html` en tu navegador.
2. Regístrate o inicia sesión.
3. Explora el catálogo, guarda productos, escanea QR o prueba combinaciones.
4. Accede al perfil para ver tus puntos y cambiar idioma.

---

##  Créditos

Desarrollado por: Kath Stark 

// Pop-up
function cerrarPopup() {
  document.getElementById("popup")?.remove();
}

// Mock productos
const productos = [
  { id: 1, nombre: "Vestido Rosa", precio: 39000 },
  { id: 2, nombre: "Blusa Verde", precio: 29000 },
  { id: 3, nombre: "Falda Dorada", precio: 31000 }
];

// Carrito
function agregarAlCarrito(id) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto agregado al carrito");
  sumarEcoPoints(10);
}

function mostrarCarrito() {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let lista = document.getElementById("carrito-lista");
  let total = 0;
  lista.innerHTML = "";
  carrito.forEach(p => {
    total += p.precio;
    const item = document.createElement("li");
    item.className = "list-group-item";
    item.innerText = `${p.nombre} - $${p.precio}`;
    lista.appendChild(item);
  });
  document.getElementById("carrito-total").innerText = total;
}

// Wishlist
function agregarAWishlist(id) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const producto = productos.find(p => p.id === id);
  wishlist.push(producto);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  alert("Producto agregado a wishlist");
  sumarEcoPoints(5);
}

function mostrarWishlist() {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  let lista = document.getElementById("wishlist-lista");
  lista.innerHTML = "";
  wishlist.forEach(p => {
    const item = document.createElement("li");
    item.className = "list-group-item";
    item.innerText = `${p.nombre} - $${p.precio}`;
    lista.appendChild(item);
  });
}

// CRUD - ADMIN
function getProductos() {
  return JSON.parse(localStorage.getItem("productos")) || [];
}

function setProductos(productos) {
  localStorage.setItem("productos", JSON.stringify(productos));
}

function guardarProducto() {
  const id = document.getElementById("producto-id").value;
  const nombre = document.getElementById("nombre").value;
  const precio = parseInt(document.getElementById("precio").value);
  const imagen = document.getElementById("imagen").value || "https://via.placeholder.com/200x250";

  let productos = getProductos();

  if (id) {
    const i = productos.findIndex(p => p.id == id);
    productos[i] = { id: parseInt(id), nombre, precio, imagen };
  } else {
    const nuevo = { id: Date.now(), nombre, precio, imagen };
    productos.push(nuevo);
  }

  setProductos(productos);
  mostrarProductosAdmin();
  document.getElementById("form-producto").reset();
  document.getElementById("producto-id").value = "";
}

function mostrarProductosAdmin() {
  const tabla = document.getElementById("tabla-productos");
  const productos = getProductos();
  tabla.innerHTML = "";

  productos.forEach(p => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${p.imagen}" width="50"></td>
      <td>${p.nombre}</td>
      <td>$${p.precio}</td>
      <td>
        <button class="btn btn-warning btn-sm" onclick="editarProducto(${p.id})">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${p.id})">Eliminar</button>
      </td>
    `;
    tabla.appendChild(row);
  });
}

function editarProducto(id) {
  const productos = getProductos();
  const producto = productos.find(p => p.id == id);
  document.getElementById("producto-id").value = producto.id;
  document.getElementById("nombre").value = producto.nombre;
  document.getElementById("precio").value = producto.precio;
  document.getElementById("imagen").value = producto.imagen;
}

function eliminarProducto(id) {
  let productos = getProductos();
  productos = productos.filter(p => p.id != id);
  setProductos(productos);
  mostrarProductosAdmin();
}

// === REGISTRO ===
function registrarUsuario() {
  const nombre = document.getElementById("nombre-registro").value.trim();
  const email = document.getElementById("email-registro").value.trim().toLowerCase();
  const clave = document.getElementById("clave-registro").value;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (usuarios.find(u => u.email === email)) {
    alert("Este correo ya está registrado.");
    return;
  }

  usuarios.push({ nombre, email, clave, idioma: "es" });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("Registro exitoso. Ahora puedes iniciar sesión.");
  window.location.href = "login.html";
}

// === LOGIN ===
function loginUsuario() {
  const email = document.getElementById("email-login").value.trim().toLowerCase();
  const clave = document.getElementById("clave-login").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuario = usuarios.find(u => u.email === email && u.clave === clave);

  if (!usuario) {
    alert("Correo o clave incorrectos.");
    return;
  }

  sessionStorage.setItem("usuarioActivo", email);
  alert("Bienvenido/a " + usuario.nombre);
  window.location.href = "perfil.html";
}
// === PUNTOS ===
document.getElementById("eco-puntos").textContent = usuario.puntos || 0;

function sumarEcoPoints(puntosGanados) {
  const email = sessionStorage.getItem("usuarioActivo");
  if (!email) return;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const index = usuarios.findIndex(u => u.email === email);

  if (index !== -1) {
    usuarios[index].puntos = (usuarios[index].puntos || 0) + puntosGanados;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    if (document.getElementById("eco-puntos")) {
      document.getElementById("eco-puntos").textContent = usuarios[index].puntos;
    }
  }
}

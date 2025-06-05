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

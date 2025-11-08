function getCart() {
  return JSON.parse(localStorage.getItem('carrito')) || [];
}

function saveCart(cart) {
  localStorage.setItem('carrito', JSON.stringify(cart));
}

function updateCartCount() {
  const countElem = document.getElementById('cartCount');
  if (countElem) {
    countElem.textContent = getCart().length;
  }
}

function renderCart() {
  const cart = getCart();
  const container = document.getElementById('cartContainer');
  const summary = document.getElementById('cartSummary');
  container.innerHTML = '';
  summary.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = '<p class="text-center">Tu carrito está vacío.</p>';
    updateCartCount();
    return;
  }

  const list = document.createElement('ul');
  list.className = 'list-group mb-3';

  cart.forEach((p, index) => {
    total += p.precio;
    const item = document.createElement('li');
    item.className = 'list-group-item d-flex align-items-center';
    item.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" class="cart-img rounded"/>
      <div class="flex-grow-1">
        <h6 class="mb-1">${p.nombre}</h6>
        <small class="text-muted">$${p.precio}</small>
      </div>
      <button class="btn btn-sm btn-outline-danger ms-2" onclick="removeItem(${index})">Eliminar</button>
    `;
    list.appendChild(item);
  });

  container.appendChild(list);
  summary.innerHTML = `<h5 class="text-end">Total: $${total}</h5>`;
  updateCartCount();
}

function removeItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

function emptyCart() {
  saveCart([]);
  renderCart();
}

document.addEventListener('DOMContentLoaded', renderCart);
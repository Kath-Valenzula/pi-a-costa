// === LOGIN SIMULADO ===
// Guardar usuario (esto se haría desde un login real)
if (!localStorage.getItem("usuarios")) {
  localStorage.setItem("usuarios", JSON.stringify([
    { nombre: "Claudia", email: "claudia@pinacosta.cl", idioma: "es" }
  ]));
  sessionStorage.setItem("usuarioActivo", "claudia@pinacosta.cl");
}

// === MOSTRAR PERFIL ===
function mostrarPerfil() {
  const emailActivo = sessionStorage.getItem("usuarioActivo");
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  const usuario = usuarios.find(u => u.email === emailActivo);

  if (!usuario) return;

  document.getElementById("nombre-usuario").textContent = usuario.nombre;
  document.getElementById("correo-usuario").textContent = usuario.email;
  document.getElementById("idioma").value = usuario.idioma || "es";
  cambiarIdioma(usuario.idioma || "es");
}

// === IDIOMA ===
function cambiarIdioma(idiomaManual) {
  const idioma = idiomaManual || document.getElementById("idioma").value;
  const traducciones = {
    es: {
      titulo: "Mi Perfil",
      "lbl-nombre": "Nombre:",
      "lbl-email": "Correo:",
    },
    en: {
      titulo: "My Profile",
      "lbl-nombre": "Name:",
      "lbl-email": "Email:",
    }
  };

  const t = traducciones[idioma];
  document.getElementById("titulo").textContent = t.titulo;
  document.getElementById("lbl-nombre").textContent = t["lbl-nombre"];
  document.getElementById("lbl-email").textContent = t["lbl-email"];

  const emailActivo = sessionStorage.getItem("usuarioActivo");
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  const index = usuarios.findIndex(u => u.email === emailActivo);
  if (index !== -1) {
    usuarios[index].idioma = idioma;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
}

// === SESIÓN ===
function verificarSesion() {
  if (!sessionStorage.getItem("usuarioActivo")) {
    alert("Debes iniciar sesión para acceder al perfil.");
    window.location.href = "../index.html";
  }
}

function cerrarSesion() {
  sessionStorage.removeItem("usuarioActivo");
  alert("Sesión cerrada.");
  window.location.href = "../index.html";
}

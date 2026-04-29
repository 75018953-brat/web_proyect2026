document.addEventListener("DOMContentLoaded", () => {
  console.log("Sitio cargando correctamente");

  // 🔝 Botón hacia arriba
  const btnTop = document.getElementById("btnTop");

  if (btnTop) {
    window.addEventListener("scroll", () => {
      btnTop.style.display = window.scrollY > 200 ? "block" : "none";
    });

    btnTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 🌙 Modo oscuro
  const btnModo = document.getElementById("modoOscuro");

  if (btnModo) {
    btnModo.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }
});

const btnLike = document.getElementById("btnLike");
const contador = document.getElementById("contadorLikes");

let likes = 0;
let activo = false;

btnLike.addEventListener("click", () => {
  if (!activo) {
    likes++;
    activo = true;
    btnLike.classList.add("activo");
    btnLike.innerHTML = "💚 Te gusta";
  } else {
    likes--;
    activo = false;
    btnLike.classList.remove("activo");
    btnLike.innerHTML = "❤️ Me gusta";
  }

  contador.textContent = likes;
});
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

let likes = 0;

document.getElementById("btnLike").addEventListener("click", () => {
  likes++;
  document.getElementById("contadorLikes").textContent = likes;
});
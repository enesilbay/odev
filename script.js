// script.js
function filmAra() {
  const arama = document.getElementById("aramaKutusu").value.toLowerCase();
  const filmler = document.getElementsByClassName("film");

  Array.from(filmler).forEach(film => {
    const baslik = film.querySelector("h3").textContent.toLowerCase();
    film.style.display = baslik.includes(arama) ? "block" : "none";
  });
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("aramaKutusu").addEventListener("keyup", filmAra);
});
document.addEventListener("DOMContentLoaded", function () {
  const temaButonu = document.getElementById("temaButonu");

  temaButonu.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Temayı localStorage ile hatırlamak istersen:
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("tema", "dark");
    } else {
      localStorage.setItem("tema", "light");
    }
  });

  // Sayfa yüklenince önceki tema uygulanır
  if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark-mode");
  }
});
window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 500);
});
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


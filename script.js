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

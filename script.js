function filmAra() {
  const arama = document.getElementById("aramaKutusu").value.toLowerCase();
  const filmler = document.getElementsByClassName("film");

  for (let i = 0; i < filmler.length; i++) {
    const baslik = filmler[i].getElementsByTagName("h3")[0].textContent.toLowerCase();
    if (baslik.includes(arama)) {
      filmler[i].style.display = "block";
    } else {
      filmler[i].style.display = "none";
    }
  }
}

// Sayfa yüklendikten sonra input'a dinleyici ekleyelim:
window.addEventListener("DOMContentLoaded", function() {
  document.getElementById("aramaKutusu").addEventListener("keyup", filmAra);
});

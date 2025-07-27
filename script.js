document.addEventListener("DOMContentLoaded", function () {
      const buttons = document.querySelectorAll(".wa-button");
      buttons.forEach(btn => {
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          fetch("https://script.google.com/macros/s/AKfycbyvBlzGHcKHcTfaxd96KtgDBvHyKpasFmNTT-33tTy2zQVQbh_90BTtcqio-t4SrqYiqQ/exec")
            .then(res => res.text())
            .then(link => {
              window.open(link, "_blank");
            })
            .catch(() => alert("Gagal membuka WhatsApp. Silakan coba lagi."));
        });
      });
    });

function sendToAppsScript() {
  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("tanggal").value;
  const durasi = document.getElementById("durasi").value;

  const scriptURL = "https://script.google.com/macros/s/AKfycbxaT8_SJ0-xg0xnXsleZ1S56z6Q9GlOKI1B0_sf1OMtzhJwS52up7T9BQndfFg4QYZajg/exec";

  const url = `${scriptURL}?nama=${encodeURIComponent(nama)}&tanggal=${tanggal}&durasi=${durasi}`;

  window.open(url, "_blank");

  return false;
}

window.onscroll = function() {
      const btn = document.getElementById("toTopBtn");
      btn.style.display = window.scrollY > 300 ? "block" : "none";
    };

  const container = document.getElementById('galeriContainer');
  document.querySelector('.galeri-prev').onclick = () => {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  };
  document.querySelector('.galeri-next').onclick = () => {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  };

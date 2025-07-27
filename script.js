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
 document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById('galeriContainer');
  const prevBtn = document.querySelector('.galeri-prev');
  const nextBtn = document.querySelector('.galeri-next');

  if (container && prevBtn && nextBtn) {
    prevBtn.onclick = () => {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    };
    nextBtn.onclick = () => {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    };
  }
});


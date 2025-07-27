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

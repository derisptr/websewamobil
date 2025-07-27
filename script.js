document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".wa-button");
    buttons.forEach(btn => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        fetch("https://script.google.com/macros/s/AKfycbyvBlzGHcKHcTfaxd96KtgDBvHyKpasFmNTT-33tTy2zQVQbh_90BTtcqio-t4SrqYiqQ/exec") // ← API milikmu
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


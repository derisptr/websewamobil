document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("hubungiBtn");
  if (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const pesan = "Halo, saya ingin bertanya tentang layanan sewa mobil.";
      const scriptURL = "https://script.google.com/macros/s/AKfycbyvBlzGHcKHcTfaxd96KtgDBvHyKpasFmNTT-33tTy2zQVQbh_90BTtcqio-t4SrqYiqQ/exec";
      const url = `${scriptURL}?pesan=${encodeURIComponent(pesan)}`;
      window.open(url, "_blank");
    });
  }
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


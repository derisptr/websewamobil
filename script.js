const statusMap = {};
    fetch("https://script.google.com/macros/s/AKfycbxtp1gBvsMW53gR5u0E-8zuR584_7XdRNPclFW87aVW0KGTF4rBPcPLloF2jQO6TaD1Tw/exec")
      .then(res => res.json())
      .then(data => {
        data.forEach(mobil => {
          const id = mobil.ID;
          const status = mobil.Status;
          const span = document.getElementById("status-" + id);
          if (span) {
            span.textContent = status;
            span.style.color = status === "tersedia" ? "green" : "red";
          }
        });
      })
      .catch(err => console.error("Gagal mengambil data status mobil:", err));

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
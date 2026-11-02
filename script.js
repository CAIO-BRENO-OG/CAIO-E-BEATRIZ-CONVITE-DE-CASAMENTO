(() => {
  const c = window.WEDDING_CONFIG || {};
  const $ = (id) => document.getElementById(id);
  const setText = (selector, value) => {
    if (value == null || value === "") return;
    document.querySelectorAll(`[data-config="${selector}"]`).forEach(el => el.textContent = value);
  };

  setText("bride", c.bride);
  setText("groom", c.groom);
  setText("venue", c.venue);
  setText("address", c.address);
  setText("dressCode", c.dressCode);

  const target = new Date(c.date || "2027-01-17T16:00:00-03:00");
  const dateText = c.dateLabel || "17 de janeiro de 2027";
  const timeText = c.timeLabel || "Às 16:00 H";
  $("date-large").textContent = target.toLocaleDateString("pt-BR", {day:"2-digit", month:"2-digit", year:"numeric", timeZone:"America/Sao_Paulo"}).replaceAll("/", ".");
  $("weekday").textContent = target.toLocaleDateString("pt-BR", {weekday:"long", timeZone:"America/Sao_Paulo"}).toUpperCase();
  $("time-large").textContent = timeText.toUpperCase();
  $("ceremony-date").textContent = dateText;
  $("ceremony-time").textContent = timeText;
  $("footer-date").textContent = `${dateText} · ${timeText.replace(/^Às /i, "")}`;
  document.title = `${c.groom || "Caio"} & ${c.bride || "Beatriz"} | Nosso casamento`;

  const map = $("map-link");
  map.href = c.mapUrl || "https://www.google.com/maps";

  function updateCountdown() {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) {
      ["days","hours","minutes","seconds"].forEach(id => $(id).textContent = "0");
      document.querySelector(".section-lead").textContent = "Chegou o nosso grande dia!";
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    $("days").textContent = days;
    $("hours").textContent = String(hours).padStart(2, "0");
    $("minutes").textContent = String(minutes).padStart(2, "0");
    $("seconds").textContent = String(seconds).padStart(2, "0");
  }
  updateCountdown();
  window.setInterval(updateCountdown, 1000);

  $("rsvp-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = $("guest-name").value.trim();
    const count = $("guest-count").value;
    if (!name) return;
    const phone = (c.whatsapp || "").replace(/\D/g, "");
    if (!phone || phone.includes("X")) {
      alert("Antes de publicar, informe o número de WhatsApp no arquivo config.js.");
      return;
    }
    const message = `Olá! Sou ${name} e gostaria de confirmar minha presença no casamento de ${c.groom} e ${c.bride}. Somos ${count} pessoa(s).`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });

})();

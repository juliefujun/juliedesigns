// ── Typing effect (home page) ─────────────────────────────
(function () {
  const words = [
    "designer.",
    "crafter.",
    "photographer.",
    "coffee enthusiast.",
    "cat lover.",
  ];
  const el = document.getElementById("typed-word");
  if (!el) return;
  let wi = 0,
    ci = 0,
    deleting = false;
  const SPEED_TYPE = 80,
    SPEED_DEL = 45,
    PAUSE = 1800;

  function tick() {
    const word = words[wi];
    if (!deleting) {
      ci++;
      el.textContent = word.slice(0, ci);
      if (ci === word.length) {
        deleting = true;
        setTimeout(tick, PAUSE);
        return;
      }
    } else {
      ci--;
      el.textContent = word.slice(0, ci);
      if (ci === 0) {
        deleting = false;
        wi = (wi + 1) % words.length;
      }
    }
    setTimeout(tick, deleting ? SPEED_DEL : SPEED_TYPE);
  }
  tick();
})();


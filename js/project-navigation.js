// ── Project page navigation & hero back-button contrast ───
function relativeLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c /= 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(l1, l2) {
  const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}

function setBackBtnColor(heroEl) {
  const img = heroEl.querySelector("img");
  const btn = heroEl.querySelector(".back-btn");
  if (!img || !btn) return;

  const sample = () => {
    try {
      const canvas = document.createElement("canvas");
      canvas.width = 60;
      canvas.height = 60;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, 60, 60);
      const px = ctx.getImageData(0, 0, 60, 60).data;
      let r = 0,
        g = 0,
        b = 0,
        n = 0;
      for (let i = 0; i < px.length; i += 4) {
        r += px[i];
        g += px[i + 1];
        b += px[i + 2];
        n++;
      }
      const lBg = relativeLuminance(r / n, g / n, b / n);
      const lWhite = relativeLuminance(255, 255, 255);
      const lDark = relativeLuminance(26, 24, 20);
      if (contrastRatio(lWhite, lBg) >= contrastRatio(lDark, lBg)) {
        btn.style.color = "#fff";
        btn.style.background = "rgba(0,0,0,0.22)";
      } else {
        btn.style.color = "#1A1814";
        btn.style.background = "rgba(255,255,255,0.55)";
      }
    } catch (e) {
      /* cross-origin safety */
    }
  };

  if (img.complete && img.naturalWidth) {
    sample();
  } else {
    img.addEventListener("load", sample);
  }
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 80;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".project-hero").forEach(setBackBtnColor);
});


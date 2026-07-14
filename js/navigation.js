// ── Navigation active state ───────────────────────────────
(function () {
  const path = window.location.pathname;
  const works = document.getElementById("nav-works");
  const about = document.getElementById("nav-about");
  if (!works || !about) return;

  const isAbout = path.includes("about");
  works.classList.toggle("active-link", !isAbout);
  about.classList.toggle("active-link", isAbout);
})();


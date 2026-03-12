(() => {
  // Footer: año automático
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Header: agrega estilo "elevado" cuando haces scroll (mejor contraste)
  const topbar = document.querySelector("[data-elevate]");
  const setElevated = () => {
    if (!topbar) return;
    const elevated = window.scrollY > 8;
    topbar.classList.toggle("is-elevated", elevated);
  };
  setElevated();
  window.addEventListener("scroll", setElevated, { passive: true });

  // Menú responsive (mobile): abrir/cerrar
  const nav = document.querySelector("[data-nav]");
  const navToggle = document.querySelector("[data-nav-toggle]");

  const closeNav = () => {
    if (!nav) return;
    nav.classList.remove("is-open");
    if (navToggle) navToggle.setAttribute("aria-label", "Abrir menú");
  };

  if (nav && navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    });

    nav.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const link = target.closest("a");
      if (link) closeNav();
    });
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
  });

  // Animación suave al aparecer (IntersectionObserver)
  const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));
  if (revealEls.length === 0) return;

  const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  if (prefersReducedMotion) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.18 }
  );

  revealEls.forEach((el) => io.observe(el));
})();

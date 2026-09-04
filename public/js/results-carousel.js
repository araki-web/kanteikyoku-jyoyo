(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  document.querySelectorAll("[data-results-carousel-shell]").forEach((shell) => {
    const carousel = shell.querySelector("[data-results-carousel]");
    const pages = [...shell.querySelectorAll(".results-page")];
    const previous = shell.querySelector("[data-results-carousel-prev]");
    const next = shell.querySelector("[data-results-carousel-next]");
    const dots = [...shell.querySelectorAll("[data-results-carousel-dot]")];
    const status = shell.querySelector("[data-results-carousel-status]");
    let currentPage = 0;
    let frame = 0;

    const update = (page) => {
      currentPage = Math.max(0, Math.min(page, pages.length - 1));
      previous.disabled = currentPage === 0;
      next.disabled = currentPage === pages.length - 1;
      dots.forEach((dot, index) => {
        if (index === currentPage) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
      status.textContent = `${currentPage + 1} / ${pages.length}`;
    };

    const show = (page, behavior = "smooth") => {
      const target = Math.max(0, Math.min(page, pages.length - 1));
      carousel.scrollTo({
        left: carousel.clientWidth * target,
        behavior: prefersReducedMotion.matches ? "auto" : behavior,
      });
      update(target);
    };

    previous.addEventListener("click", () => show(currentPage - 1));
    next.addEventListener("click", () => show(currentPage + 1));
    dots.forEach((dot, index) => dot.addEventListener("click", () => show(index)));
    carousel.addEventListener("scroll", () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (window.innerWidth >= 700) update(Math.round(carousel.scrollLeft / carousel.clientWidth));
      });
    }, { passive: true });
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 700) show(currentPage, "auto");
    });

    update(0);
  });
})();

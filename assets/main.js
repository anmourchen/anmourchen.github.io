// Theme toggle (light/dark). Initial theme is applied inline in <head> to avoid flash.
(function () {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.addEventListener("click", function () {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
      btn.setAttribute("aria-label", next === "dark" ? "Switch to light mode" : "Switch to dark mode");
    });
  }

  // Selected / All publications toggle
  const toggleBtns = document.querySelectorAll(".pub-toggle button");
  const pubRoot = document.getElementById("publications");
  function setView(view) {
    if (!pubRoot) return;
    pubRoot.dataset.view = view;
    toggleBtns.forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.view === view))
    );
    // Year headers: hide those with no visible paper in selected view
    pubRoot.querySelectorAll(".year-group").forEach((g) => {
      const hasVisible = g.querySelector(
        view === "selected" ? '.paper[data-selected="true"]' : ".paper"
      );
      g.style.display = hasVisible ? "" : "none";
    });
  }
  toggleBtns.forEach((b) =>
    b.addEventListener("click", () => setView(b.dataset.view))
  );
  setView("selected");
})();

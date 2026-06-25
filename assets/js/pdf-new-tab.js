// Open all PDF links in a new tab.
// al-folio's jekyll-link-attributes plugin only adds target="_blank" to
// EXTERNAL links, so same-origin PDFs (CVs, syllabi, future papers) would
// otherwise replace the current tab. This covers every <a> whose href points
// to a .pdf — local or external, present or added later — with no per-link
// markup. rel="noopener" is added for the standard new-tab security hygiene.
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll('a[href$=".pdf"], a[href*=".pdf?"], a[href*=".pdf#"]');
  links.forEach(function (a) {
    a.setAttribute("target", "_blank");
    var rel = a.getAttribute("rel") || "";
    if (rel.indexOf("noopener") === -1) {
      a.setAttribute("rel", (rel + " noopener").trim());
    }
  });

  // Teaching page: Reading List toggles. Each .rl-toggle button shows/hides the
  // .reading-list that immediately follows it within the same .course block.
  // (We use a button + sibling list rather than <details> so the toggle can
  // live in the aligned button grid while the list spans full width below.)
  var toggles = document.querySelectorAll(".rl-toggle");
  toggles.forEach(function (btn) {
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("role", "button");
    btn.setAttribute("tabindex", "0");
    function toggle() {
      var list = btn.closest(".course").querySelector(".reading-list");
      if (!list) return;
      var open = list.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    }
    btn.addEventListener("click", toggle);
    btn.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
  });
});

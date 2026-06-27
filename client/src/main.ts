const DEFAULT_SECTION_HASH = "#home";
const ACTIVE_LINK_CLASSES = ["border-brand-yellow", "text-brand-yellow"];
const INACTIVE_LINK_CLASSES = ["border-transparent", "text-brand-white"];

const navLinks =
  document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]");

function setActiveLink(hash: string): void {
  const activeHash = hash || DEFAULT_SECTION_HASH;

  navLinks.forEach((link) => {
    const isActive = link.hash === activeHash;

    ACTIVE_LINK_CLASSES.forEach((className) => {
      link.classList.toggle(className, isActive);
    });
    INACTIVE_LINK_CLASSES.forEach((className) => {
      link.classList.toggle(className, !isActive);
    });

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

window.addEventListener("hashchange", () => {
  setActiveLink(window.location.hash);
});

setActiveLink(window.location.hash);

const navLinks =
  document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]");

const activeClasses = ["border-brand-yellow", "text-brand-yellow"];
const inactiveClasses = ["border-transparent", "text-brand-white"];

function setActiveLink(hash: string) {
  navLinks.forEach((link) => {
    const isActive = link.hash === hash;

    link.classList.toggle(activeClasses[0], isActive);
    link.classList.toggle(activeClasses[1], isActive);
    link.classList.toggle(inactiveClasses[0], !isActive);
    link.classList.toggle(inactiveClasses[1], !isActive);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => setActiveLink(link.hash));
});

window.addEventListener("hashchange", () => {
  setActiveLink(window.location.hash || "#home");
});

setActiveLink(window.location.hash || "#home");

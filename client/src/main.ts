const DEFAULT_SECTION_HASH = "#home";
const ACTIVE_LINK_CLASSES = ["border-brand-yellow", "text-brand-yellow"];
const INACTIVE_LINK_CLASSES = ["border-transparent", "text-brand-white"];

const navLinks =
  document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]");
const mobileMenuToggle = document.querySelector<HTMLButtonElement>(
  "[data-mobile-menu-toggle]",
);
const mobileMenu = document.querySelector<HTMLElement>("[data-mobile-menu]");
const mobileMenuBackdrop = document.querySelector<HTMLButtonElement>(
  "[data-mobile-menu-backdrop]",
);
const mobileNavLinks = document.querySelectorAll<HTMLAnchorElement>(
  "[data-mobile-nav-link]",
);
const allNavLinks = [...navLinks, ...mobileNavLinks];

function setMobileMenuOpen(isOpen: boolean): void {
  if (!mobileMenuToggle || !mobileMenu || !mobileMenuBackdrop) {
    return;
  }

  mobileMenu.hidden = !isOpen;
  mobileMenuBackdrop.hidden = !isOpen;
  mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
  mobileMenuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close menu" : "Open menu",
  );
  document.body.classList.toggle("mobile-menu-open", isOpen);
}

function setActiveLink(hash: string): void {
  const activeHash = hash || DEFAULT_SECTION_HASH;

  allNavLinks.forEach((link) => {
    const isActive = link.hash === activeHash;

    if (link.hasAttribute("data-nav-link")) {
      ACTIVE_LINK_CLASSES.forEach((className) => {
        link.classList.toggle(className, isActive);
      });
      INACTIVE_LINK_CLASSES.forEach((className) => {
        link.classList.toggle(className, !isActive);
      });
    }

    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

window.addEventListener("hashchange", () => {
  setActiveLink(window.location.hash);
  setMobileMenuOpen(false);
});

mobileMenuToggle?.addEventListener("click", () => {
  const isOpen = mobileMenuToggle.getAttribute("aria-expanded") === "true";
  setMobileMenuOpen(!isOpen);
});

mobileMenuBackdrop?.addEventListener("click", () => {
  setMobileMenuOpen(false);
});

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setMobileMenuOpen(false);
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMobileMenuOpen(false);
  }
});

setActiveLink(window.location.hash);

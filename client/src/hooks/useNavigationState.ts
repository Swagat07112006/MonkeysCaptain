import { useEffect } from "react";

export function useNavigationState() {
  useEffect(() => {
    const DEFAULT_SECTION_HASH = "#home";
    const ACTIVE_LINK_CLASSES = ["border-brand-yellow", "text-brand-yellow"];
    const INACTIVE_LINK_CLASSES = ["border-transparent", "text-brand-white"];

    const navLinks =
      document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]");
    const mobileMenuToggle = document.querySelector<HTMLButtonElement>(
      "[data-mobile-menu-toggle]",
    );
    const mobileMenu =
      document.querySelector<HTMLElement>("[data-mobile-menu]");
    const mobileMenuBackdrop = document.querySelector<HTMLButtonElement>(
      "[data-mobile-menu-backdrop]",
    );
    const mobileNavLinks = document.querySelectorAll<HTMLAnchorElement>(
      "[data-mobile-nav-link]",
    );
    const allNavLinks = [...Array.from(navLinks), ...Array.from(mobileNavLinks)];

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

    let isClickScrolling = false;
    let clickScrollTimeout: number | undefined;

    const handleHashChange = () => {
      setActiveLink(window.location.hash);
      setMobileMenuOpen(false);

      isClickScrolling = true;
      if (clickScrollTimeout) {
        window.clearTimeout(clickScrollTimeout);
      }
      clickScrollTimeout = window.setTimeout(() => {
        isClickScrolling = false;
      }, 1000);
    };
    const handleToggleClick = () => {
      const isOpen = mobileMenuToggle?.getAttribute("aria-expanded") === "true";
      setMobileMenuOpen(!isOpen);
    };
    const handleCloseClick = () => setMobileMenuOpen(false);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    const sectionIds = ["home", "menu", "about", "gallery", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    let activeSectionObserver: IntersectionObserver | null = null;

    if ("IntersectionObserver" in window) {
      activeSectionObserver = new IntersectionObserver(
        () => {
          if (isClickScrolling) return;

          let activeId = "";
          const detectionLine = window.innerWidth < 640 ? 150 : 120;

          sections.forEach((sect) => {
            const rect = sect.getBoundingClientRect();
            if (rect.top <= detectionLine && rect.bottom >= detectionLine) {
              activeId = sect.id;
            }
          });

          // Fallback: if we are at the very bottom of the page, activate the last visible section
          if (
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 100
          ) {
            activeId = sectionIds[sectionIds.length - 1];
          }

          if (activeId) {
            setActiveLink(`#${activeId}`);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: [0, 0.1, 0.2, 0.3],
        }
      );

      sections.forEach((section) => activeSectionObserver?.observe(section));
    }

    window.addEventListener("hashchange", handleHashChange);
    mobileMenuToggle?.addEventListener("click", handleToggleClick);
    mobileMenuBackdrop?.addEventListener("click", handleCloseClick);
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", handleCloseClick);
    });
    window.addEventListener("keydown", handleKeyDown);
    setActiveLink(window.location.hash);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      mobileMenuToggle?.removeEventListener("click", handleToggleClick);
      mobileMenuBackdrop?.removeEventListener("click", handleCloseClick);
      mobileNavLinks.forEach((link) => {
        link.removeEventListener("click", handleCloseClick);
      });
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("mobile-menu-open");

      if (activeSectionObserver) {
        activeSectionObserver.disconnect();
      }
      if (clickScrollTimeout) {
        window.clearTimeout(clickScrollTimeout);
      }
    };
  }, []);
}

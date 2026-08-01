import { useEffect, useState } from "react";
import { brandAssets, navItems } from "../content/siteContent";
import { EventLink } from "./EventLink";
import { MobileMenuButton } from "./MobileMenuButton";

export function SiteHeader({ isHome }: { isHome: boolean }) {
  const [isSmall, setIsSmall] = useState(!isHome);

  useEffect(() => {
    const handleScrollAndHash = () => {
      const hasScrolled = window.scrollY > 20;
      setIsSmall(!isHome || hasScrolled);
    };

    handleScrollAndHash();
    window.addEventListener("scroll", handleScrollAndHash, { passive: true });
    window.addEventListener("hashchange", handleScrollAndHash);

    return () => {
      window.removeEventListener("scroll", handleScrollAndHash);
      window.removeEventListener("hashchange", handleScrollAndHash);
    };
  }, [isHome]);

  return (
    <header className={`site-header ${isSmall ? "is-compact" : ""}`}>
      <div
        className={"site-header-inner relative mx-auto w-full max-w-7xl"}
      >
        <a
          href="/"
          aria-label="The Monkey's Captain home"
        >
          <img
            className={`site-logo absolute left-6 z-30 transition-all
              duration-300 ease-out max-[40rem]:left-[1.1rem] xl:left-10
              ${
                isSmall
                  ? `top-2 w-28 max-[40rem]:top-2.5 max-[40rem]:w-24
                    xl:top-1.5 xl:w-[7.5rem]`
                  : `-top-4 w-52 max-[40rem]:top-4
                    max-[40rem]:w-[clamp(7.5rem,34vw,10rem)] xl:-top-6
                    xl:w-64`
              } `}
            src={brandAssets.monkeyLogo}
            srcSet={brandAssets.monkeyLogoSrcSet}
            sizes="(max-width: 640px) 160px, 256px"
            alt="The Monkey's Captain"
            width={1024}
            height={1024}
          />
        </a>
        <nav
          className={`desktop-nav relative z-20 mx-auto flex w-full
            justify-center max-[40rem]:hidden`}
          aria-label="Primary navigation"
        >
          <div className="flex items-center gap-9 text-sm font-medium">
            {navItems.map((item, index) => (
              <a
                className={
                  (isHome && index === 0) || (!isHome && item.href === "/menu/")
                    ? `border-brand-yellow text-brand-yellow border-b-2
                      px-0.5 pb-1.5 transition-colors duration-200`
                    : `text-brand-white hover:text-brand-yellow
                      border-b-2 border-transparent px-0.5 pb-1.5
                      transition-colors duration-200`
                }
                data-nav-link
                href={item.href}
                aria-current={
                  (isHome && index === 0) || (!isHome && item.href === "/menu/")
                    ? "page"
                    : undefined
                }
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
        <EventLink
          href={isHome ? "#contact" : "/#contact"}
          className={`header-event-link bg-brand-yellow absolute top-1/2
            right-6 z-20 flex -translate-y-1/2 items-center gap-2
            rounded-full px-5 py-2.5 text-sm font-semibold
            text-neutral-950 transition-colors duration-200
            hover:bg-yellow-300 focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-yellow-300 max-[40rem]:hidden
            xl:right-10`}
        />
        <MobileMenuButton />
        <button
          className={`mobile-nav-backdrop fixed inset-0 z-30 hidden
            bg-black/60`}
          type="button"
          aria-label="Close menu"
          data-mobile-menu-backdrop
          hidden
        />
        <nav
          className={`mobile-nav fixed top-0 right-0 bottom-0 z-40
            hidden w-4/5 max-w-80 content-start gap-2 border-l
            border-white/15 px-4 pt-26 pb-5`}
          id="mobile-menu"
          aria-label="Mobile navigation"
          data-mobile-menu
          hidden
        >
          {navItems.map((item) => (
            <a
              className="mobile-nav-link"
              data-mobile-nav-link
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

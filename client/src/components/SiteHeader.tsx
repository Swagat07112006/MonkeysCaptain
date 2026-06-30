import { brandAssets, navItems } from "../content/siteContent";
import { EventLink } from "./EventLink";
import { MobileMenuButton } from "./MobileMenuButton";

export function SiteHeader() {
  return (
    <header
      className={`site-header relative z-20 mx-auto w-full max-w-7xl
        pt-7 max-[40rem]:absolute max-[40rem]:inset-x-0
        max-[40rem]:top-0 max-[40rem]:z-30 max-[40rem]:h-34
        max-[40rem]:max-w-none max-[40rem]:pt-0`}
      id="home"
    >
      <img
        className={`site-logo absolute -top-4 left-6 z-30 w-52
          max-[40rem]:top-4 max-[40rem]:left-[1.1rem]
          max-[40rem]:w-[clamp(7.5rem,34vw,10rem)] xl:-top-6 xl:left-10
          xl:w-64`}
        src={brandAssets.monkeyLogo}
        alt="The Monkey's Captain"
        width={1024}
        height={1024}
      />
      <nav
        className={`desktop-nav relative z-20 mx-auto flex w-full
          justify-center max-[40rem]:hidden`}
        aria-label="Primary navigation"
      >
        <div className="flex items-center gap-9 text-sm font-medium">
          {navItems.map((item, index) => (
            <a
              className={
                index === 0
                  ? `border-brand-yellow text-brand-yellow border-b-2
                    px-0.5 pb-1.5 transition-colors duration-200`
                  : `text-brand-white hover:text-brand-yellow border-b-2
                    border-transparent px-0.5 pb-1.5 transition-colors
                    duration-200`
              }
              data-nav-link
              href={item.href}
              aria-current={index === 0 ? "page" : undefined}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
      <EventLink
        className={`header-event-link bg-brand-yellow absolute top-4
          right-6 z-20 flex items-center gap-2 rounded-full px-5 py-2.5
          text-sm font-semibold text-neutral-950 transition-colors
          duration-200 hover:bg-yellow-300 focus-visible:outline-2
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
        className={`mobile-nav fixed top-0 right-0 bottom-0 z-40 hidden
          w-4/5 max-w-80 content-start gap-2 border-l border-white/15
          px-4 pt-26 pb-5`}
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
    </header>
  );
}

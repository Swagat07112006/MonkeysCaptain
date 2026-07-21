import { ChevronRightIcon } from "./icons/SiteIcons";
import { EventLink } from "./EventLink";
import { MapsLink } from "./MapsLink";
import { MAPS_URL } from "../content/siteContent";

export function HeroActions() {
  return (
    <>
      <div
        className={`desktop-hero-actions mt-8 flex flex-wrap
          items-center gap-4 max-[40rem]:hidden`}
      >
        <EventLink
          className={`bg-brand-yellow inline-flex min-h-12 items-center
            justify-center gap-2 rounded-full px-6 py-3 text-sm
            font-bold text-neutral-950 transition duration-200 ease-out
            hover:-translate-y-0.5 hover:bg-yellow-300
            focus-visible:outline-2 focus-visible:outline-offset-4
            focus-visible:outline-yellow-300`}
        />
        <MapsLink />
      </div>
      <div
        className={`mobile-hero-actions hidden items-center gap-3
          max-[40rem]:mt-[1.9rem] max-[40rem]:flex max-[40rem]:flex-col`}
      >
        <a
          className={`bg-brand-yellow inline-flex items-center
            justify-center gap-2 rounded-full font-bold text-neutral-950
            transition-colors duration-200 hover:bg-yellow-300
            focus-visible:outline-2 focus-visible:outline-offset-4
            focus-visible:outline-yellow-300`}
          href="#contact"
        >
          Book for Your Event
          <ChevronRightIcon
            className="size-5"
            strokeWidth={3}
          />
        </a>
        <a
          className={`border-brand-yellow text-brand-white
            hover:bg-brand-yellow inline-flex items-center
            justify-center gap-2 rounded-full border font-bold
            transition-colors duration-200 hover:text-neutral-950
            focus-visible:outline-2 focus-visible:outline-offset-4
            focus-visible:outline-yellow-300`}
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Find Us on Maps
          <ChevronRightIcon
            className="text-brand-yellow size-5"
            strokeWidth={3}
          />
        </a>
      </div>
    </>
  );
}

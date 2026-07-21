import { MAPS_URL } from "../content/siteContent";
import { LocationPinOutlineIcon } from "./icons/SiteIcons";

export function MapsLink() {
  return (
    <a
      className={`text-brand-white group hover:text-brand-yellow
        inline-flex min-h-12 items-center justify-center gap-3 px-2 py-3
        text-sm font-bold transition duration-200 ease-out
        focus-visible:outline-2 focus-visible:outline-offset-4
        focus-visible:outline-yellow-300`}
      href={MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LocationPinOutlineIcon
        className={`border-brand-yellow text-brand-yellow size-9
          rounded-full border p-2 transition-transform duration-200
          ease-out group-hover:-translate-y-0.5`}
      />
      <span
        className={`border-brand-yellow/50
          group-hover:border-brand-yellow border-b pb-1
          transition-colors duration-200`}
      >
        Find Us on Maps
      </span>
    </a>
  );
}

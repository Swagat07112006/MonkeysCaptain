import { eventTypes } from "../content/siteContent";
import { ArrowRightIcon, CalendarIcon, PartyIcon } from "./icons/SiteIcons";

export function EventCateringBanner() {
  return (
    <aside
      className={`mt-[1.35rem] grid
        grid-cols-[minmax(24rem,1.35fr)_minmax(24rem,1fr)_max-content]
        items-center gap-[1.45rem] rounded-[1.4rem] border border-dashed
        border-[oklch(82%_0.19_85/0.88)]
        bg-[radial-gradient(ellipse_at_0%_50%,oklch(82%_0.19_85/0.13),transparent_19rem),linear-gradient(90deg,oklch(5%_0.012_250/0.96),oklch(9%_0.02_80/0.92))]
        px-[1.55rem] py-[1.05rem]`}
      aria-label="Event catering"
    >
      <div className="flex min-w-0 items-center gap-5">
        <PartyIcon className="text-brand-yellow w-[4.4rem] flex-none" />
        <div>
          <p
            className={`text-base leading-none
              text-[oklch(96%_0.008_85)] uppercase`}
          >
            Planning a party or get together?
          </p>
          <strong
            className={`text-brand-yellow mt-1.5 block
              [font-family:Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]
              text-[clamp(2.1rem,3.1vw,3rem)] leading-[0.92]
              tracking-[0.04em] uppercase`}
          >
            We Cater Events!
          </strong>
        </div>
      </div>
      <ul
        className={`grid grid-cols-2 gap-x-5 gap-y-[0.46rem] border-l
          border-[oklch(82%_0.19_85/0.75)] pl-[1.45rem] text-base
          leading-tight text-[oklch(94%_0.008_85)]`}
      >
        {eventTypes.map((eventType) => (
          <li
            className={`before:text-brand-yellow relative pl-[1.4rem]
            before:absolute before:left-0 before:font-black
            before:content-['✓']`}
            key={eventType}
          >
            {eventType}
          </li>
        ))}
      </ul>
      <a
        className={`flex min-h-[5.2rem] min-w-[17rem] items-center
          justify-center gap-[0.9rem]
          bg-[linear-gradient(90deg,transparent_0.25rem,var(--color-brand-yellow)_0.25rem)]
          bg-[length:100%_100%] bg-left bg-no-repeat px-4 py-3
          [font-family:Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]
          text-[1.45rem] leading-[0.96] tracking-[0.02em]
          text-[oklch(7%_0.014_80)] uppercase transition-transform
          duration-200 ease-out
          [clip-path:polygon(7%_0,100%_0,93%_100%,0_100%)]
          hover:-translate-y-0.5 focus-visible:-translate-y-0.5
          focus-visible:outline-none`}
        href="#contact"
      >
        <CalendarIcon className="size-[2.9rem]" />
        <span>
          Book For
          <br />
          Your Event
        </span>
        <ArrowRightIcon
          className="size-8"
          strokeWidth="2.6"
        />
      </a>
    </aside>
  );
}

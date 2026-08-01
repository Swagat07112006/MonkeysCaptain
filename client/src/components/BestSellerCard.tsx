import type { MenuItem } from "../content/siteContent";

export function BestSellerCard({ item }: { item: MenuItem }) {
  return (
    <article
      className={`overflow-hidden rounded-[0.72rem] border
        border-[oklch(82%_0.19_85/0.82)]
        bg-[linear-gradient(180deg,oklch(12%_0.018_80/0.96),oklch(7%_0.014_80)),oklch(6%_0.012_250)]
        shadow-[0_1.4rem_2.1rem_oklch(0%_0_0/0.28),inset_0_0.08rem_0_oklch(96%_0.008_85/0.06)]`}
    >
      <div
        className={`relative aspect-[1.18/1] overflow-hidden
          bg-[oklch(4%_0.01_250)] after:pointer-events-none
          after:absolute after:inset-x-0 after:bottom-0 after:h-[42%]
          after:bg-[linear-gradient(180deg,transparent,oklch(0%_0_0/0.5))]
          after:content-['']`}
      >
        <img
          className={`h-full w-full object-cover contrast-[1.04]
            saturate-[1.08]`}
          src={item.image}
          alt={item.alt}
          width={1024}
          height={1024}
        />
        {item.isBestSeller && (
          <span
            className={`bg-brand-yellow absolute top-[0.82rem]
              left-[0.9rem] z-1 grid size-[3.55rem] place-items-center
              rounded-full text-center
              [font-family:Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]
              text-[0.68rem] leading-[0.82] text-[oklch(7%_0.014_80)]
              uppercase
              shadow-[0_0.35rem_0.7rem_oklch(0%_0_0/0.32),inset_0_-0.12rem_0_oklch(60%_0.16_72/0.34)]`}
          >
            Best
            <br />
            Seller
          </span>
        )}
      </div>
      <div className="px-[0.95rem] pt-[0.9rem] pb-[0.86rem] text-center">
        <h3
          className={`[font-family:Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]
            grid min-h-[2.3rem] place-items-center
            text-[clamp(1rem,1.25vw,1.2rem)] leading-[1]
            text-balance text-[oklch(96%_0.008_85)] uppercase
            [text-shadow:0_0.35rem_0.8rem_oklch(0%_0_0/0.44)]`}
        >
          {item.name}
        </h3>
        <p
          className={`mt-3 min-h-[3.15rem]
            text-[clamp(0.82rem,1vw,0.95rem)] leading-[1.55]
            text-[oklch(91%_0.008_85)]`}
        >
          {item.description}
        </p>
        <div
          className={`text-brand-yellow mt-[0.74rem] border-t
            border-dashed border-[oklch(82%_0.19_85/0.36)] pt-[0.62rem]
            [font-family:Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]
            tracking-[0.02em]`}
        >
          {typeof item.price === "string" ? (
            <strong className="block text-[clamp(1.9rem,2.55vw,2.35rem)] leading-[0.9]">
              {item.price}
            </strong>
          ) : (
            <div className="grid grid-cols-2 divide-x divide-brand-yellow/25">
              {item.price.map((option) => (
                <div key={option.label} className="px-1">
                  <span className="block font-sans text-[0.58rem] leading-none font-black tracking-[0.04em] text-brand-white/65 uppercase">
                    {option.label}
                  </span>
                  <strong className="mt-1 block text-[clamp(1.35rem,2vw,1.8rem)] leading-none">
                    {option.value}
                  </strong>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

import { brandAssets } from "../content/siteContent";

export function MobileHeroStall() {
  return (
    <div
      className={`mobile-hero-stall hidden max-[40rem]:relative
        max-[40rem]:-mx-9 max-[40rem]:mt-[clamp(0.7rem,3vw,1rem)]
        max-[40rem]:-mb-[clamp(8.7rem,28vw,10.75rem)] max-[40rem]:block
        max-[40rem]:h-[clamp(31rem,132vw,48rem)]
        max-[40rem]:overflow-hidden
        max-[40rem]:before:pointer-events-none
        max-[40rem]:before:absolute max-[40rem]:before:inset-x-0
        max-[40rem]:before:top-0 max-[40rem]:before:z-1
        max-[40rem]:before:h-[10%] max-[40rem]:before:content-['']
        max-[40rem]:after:pointer-events-none max-[40rem]:after:absolute
        max-[40rem]:after:inset-x-0 max-[40rem]:after:bottom-0
        max-[40rem]:after:z-1 max-[40rem]:after:h-[22%]
        max-[40rem]:after:content-['']`}
      aria-hidden="true"
    >
      <picture>
        <source
          media="(min-width: 40.0625rem)"
          srcSet="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        />
        <source
          media="(max-width: 40rem)"
          srcSet={brandAssets.heroMobileSrcSet}
          sizes="100vw"
        />
        <img
          className={`max-[40rem]:absolute max-[40rem]:inset-0
            max-[40rem]:h-full max-[40rem]:w-full
            max-[40rem]:object-cover max-[40rem]:object-[center_70%]
            max-[40rem]:contrast-[1.04] max-[40rem]:saturate-[1.08]`}
          src={brandAssets.heroMobileImage}
          alt=""
          width={941}
          height={1672}
          fetchPriority="high"
          decoding="async"
        />
      </picture>
    </div>
  );
}

import type { CSSProperties } from "react";

import bestSellersRays from "../assets/best-sellers-rays.svg";
import { galleryImages } from "../content/siteContent";

export function GallerySection() {
  return (
    <section
      className={`gallery-section relative -mt-px overflow-hidden
        bg-[radial-gradient(ellipse_at_50%_0%,oklch(76%_0.18_82/0.1),transparent_34rem),linear-gradient(180deg,oklch(6%_0.012_250),oklch(3.4%_0.01_250)_82%)]
        px-[clamp(1rem,4vw,2rem)] py-[clamp(3rem,8vw,5rem)]
        text-[oklch(96%_0.008_85)]`}
      id="gallery"
      aria-labelledby="gallery-title"
    >
      <div className="relative z-1 mx-auto w-[min(100%,92rem)]">
        <div
          className={`gallery-title-lockup text-brand-yellow mx-auto
            flex w-max max-w-full items-center justify-center
            gap-[clamp(0.48rem,2.8vw,1.45rem)]`}
        >
          <span
            className={`gallery-rays h-[clamp(2.15rem,8vw,5.4rem)]
              aspect-[112/122] -rotate-[10deg] bg-current opacity-90`}
            style={
              {
                mask: `url(${bestSellersRays}) center / contain no-repeat`,
                WebkitMask: `url(${bestSellersRays}) center / contain no-repeat`,
              } as CSSProperties
            }
            aria-hidden="true"
          />
          <h2
            className={`gallery-heading relative
              w-max max-w-full text-center
              font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]
              text-[clamp(2.35rem,11vw,5.7rem)] leading-[0.9] font-black
              tracking-[0.035em] uppercase
              [text-shadow:0_0.15rem_0_oklch(48%_0.15_74/0.72),0_0.75rem_1.5rem_oklch(0%_0_0/0.58)]`}
            id="gallery-title"
          >
            Gallery
          </h2>
          <span
            className={`gallery-rays h-[clamp(2.15rem,8vw,5.4rem)]
              aspect-[112/122] rotate-[10deg] scale-x-[-1] bg-current
              opacity-90`}
            style={
              {
                mask: `url(${bestSellersRays}) center / contain no-repeat`,
                WebkitMask: `url(${bestSellersRays}) center / contain no-repeat`,
              } as CSSProperties
            }
            aria-hidden="true"
          />
        </div>

        <div
          className="gallery-masonry mt-[clamp(2.1rem,5vw,3.6rem)]"
          aria-label="The Monkey's Captain gallery"
        >
          {galleryImages.map((image) => (
            <figure
              className="gallery-tile mb-[clamp(0.78rem,1.8vw,1.15rem)]"
              key={image.alt}
            >
              <img
                className="block h-auto w-full"
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

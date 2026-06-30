import { HeartDoodle } from "./HeartDoodle";

export function HeroCopy() {
  return (
    <>
      <h1
        className="hero-heading"
        id="hero-title"
      >
        <span className="text-brand-white">HOT FOOD.</span>
        <span className="text-brand-yellow">HUNGRY HEARTS.</span>
      </h1>
      <HeartDoodle />
      <div
        className={`hero-brush max-[40rem]:mt-[0.65rem]
          max-[40rem]:w-[min(96%,25rem)]`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 430 24"
          role="presentation"
        >
          <path
            d="M1 21L41 13C127 10 214 8 300 5L429 0L426 4L423 4 L422 7L419 8L418 11L414 11L411 15L326 14L273 15 L221 16L170 18L119 18L73 21L36 19Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <p
        className={`text-brand-white mt-5 max-w-sm text-lg leading-snug
          font-medium max-[40rem]:mt-[1.15rem] max-[40rem]:max-w-88
          max-[40rem]:text-[clamp(1.16rem,4.65vw,1.55rem)]
          max-[40rem]:leading-[1.35]`}
      >
        Your go to spot for quick evening snacks in Dumduma.
      </p>
    </>
  );
}

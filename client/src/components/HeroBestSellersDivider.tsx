import heroBestSellersDivider from "../assets/hero-best-sellers-divider.svg";

export function HeroBestSellersDivider() {
  return (
    <div
      className={`relative z-10 -mt-[0.6rem] block w-full overflow-hidden
        bg-[oklch(6%_0.012_250)]`}
      aria-hidden="true"
    >
      <img
        className={`block h-[clamp(0.75rem,2.4vw,1.2rem)] w-screen
          min-w-full max-w-none object-cover`}
        src={heroBestSellersDivider}
        alt=""
        width={1448}
        height={19}
      />
    </div>
  );
}

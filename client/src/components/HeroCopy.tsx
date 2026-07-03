import heroBrushStroke from "../assets/hero-brush-stroke.svg";
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
        <img src={heroBrushStroke} alt="" width={395} height={32} />
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

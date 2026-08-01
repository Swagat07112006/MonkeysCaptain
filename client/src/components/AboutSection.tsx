import aboutFounderPortrait from "../assets/about-founder-real-edited.png";
import heroBrushStroke from "../assets/hero-brush-stroke.svg";

export function AboutSection() {
  return (
    <section
      className={`about-section px-[clamp(1rem,4vw,2rem)]
        pt-[clamp(3.2rem,7vw,5rem)] pb-[clamp(3rem,8vw,5.5rem)]
        text-[oklch(96%_0.008_85)]`}
      id="about"
      aria-labelledby="about-title"
    >
      <p className="about-label mx-auto mb-[clamp(1.8rem,4vw,2.6rem)] w-max max-w-full text-center text-brand-yellow">
        About Us
      </p>
      <div
        className={`mx-auto grid w-[min(100%,76rem)] items-center
          gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)]`}
      >
        <figure
          className={`about-image-panel relative min-h-[clamp(22rem,42vw,34rem)]
            overflow-hidden rounded-[0.65rem] border border-brand-yellow/55
            bg-[oklch(5%_0.012_250)] shadow-[0_1.1rem_2rem_oklch(0%_0_0/0.42),0_0_1.4rem_oklch(82%_0.19_85/0.12)]`}
        >
          <img
            className={`about-founder-image absolute inset-0 size-full object-cover
              contrast-[1.06] saturate-[1.12]`}
            src={aboutFounderPortrait}
            alt="Founder of The Monkey's Captain"
            width={1024}
            height={1024}
          />
          <div
            className={`absolute inset-0
              bg-[linear-gradient(180deg,oklch(0%_0_0/0.08),oklch(0%_0_0/0.34)),radial-gradient(ellipse_at_52%_92%,oklch(82%_0.19_85/0.2),transparent_42%)]`}
            aria-hidden="true"
          />
        </figure>

        <div className="about-copy max-w-[38rem]">
          <h2
            className={`about-heading grid max-w-[12ch]
              font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]
              text-[clamp(3rem,7.2vw,6.45rem)] leading-[0.86] font-black
              tracking-[0.02em] uppercase
              [text-shadow:0_0.14rem_0_oklch(0%_0_0/0.72),0_0.75rem_1.5rem_oklch(0%_0_0/0.58)]`}
            id="about-title"
          >
            <span>The Captain</span>
            <span className="text-brand-yellow">Behind The Menu</span>
          </h2>
          <img
            className="mt-3 h-auto w-[min(100%,19rem)]"
            src={heroBrushStroke}
            alt=""
            aria-hidden="true"
          />

          <div className="mt-7 grid gap-4 text-[0.96rem] leading-7 text-brand-white/90">
            <p>
              The Monkey&apos;s Captain started as a lively food stall with a
              simple mission: serve the kind of snacks people remember after
              the evening is over.
            </p>
            <p>
              Every item is made fresh, served fast, and packed with the kind
              of flavour that keeps people coming back.
            </p>
            <p className="font-extrabold text-brand-yellow">
              Good food. Happy people. That&apos;s the goal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

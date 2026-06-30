export function HeartDoodle() {
  return (
    <svg
      className={`mobile-heart-doodle text-brand-yellow hidden
        max-[40rem]:absolute max-[40rem]:top-0
        max-[40rem]:right-[clamp(0rem,2vw,0.45rem)] max-[40rem]:block
        max-[40rem]:w-[clamp(2.75rem,11vw,3.6rem)]
        max-[40rem]:rotate-[7deg]`}
      viewBox="0 0 92 78"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M45 65C27 50 12 39 12 23c0-8 6-14 14-14 7 0 12 5 16 11 4-6 9-11 16-11 8 0 14 6 14 14 0 16-15 27-33 42Z"
        stroke="currentColor"
        strokeWidth={6}
        strokeLinejoin="round"
      />
      <path
        d="M7 47H1M16 63l-5 5M75 59l7 6M82 37h8M72 15l5-9"
        stroke="currentColor"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </svg>
  );
}

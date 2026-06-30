export type SvgIconProps = {
  className?: string;
  strokeWidth?: string | number;
};

export function Arrow640Icon({ className }: SvgIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 640"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z" />
    </svg>
  );
}

export function ChevronRightIcon({ className, strokeWidth = 2 }: SvgIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function LocationPinOutlineIcon({ className }: SvgIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 0 1 16 0" />
      <circle
        cx={12}
        cy={10}
        r="2.5"
      />
    </svg>
  );
}

export function StarBadgeIcon() {
  return (
    <svg
      className={`size-[1.55rem] fill-current
        max-[40rem]:size-[clamp(1rem,5.2vw,1.2rem)]`}
      viewBox="0 0 24 24"
      role="presentation"
    >
      <path d="m12 2.3 2.78 5.64 6.22.9-4.5 4.38 1.06 6.2L12 16.5l-5.56 2.92 1.06-6.2L3 8.84l6.22-.9Z" />
    </svg>
  );
}

export function CustomersIcon() {
  return (
    <svg
      className={`size-[1.55rem] fill-current
        max-[40rem]:size-[clamp(1rem,5.2vw,1.2rem)]`}
      viewBox="0 0 24 24"
      role="presentation"
    >
      <path d="M16.5 11.4a4 4 0 1 0-3.05-6.6 5.6 5.6 0 0 1 0 5.2 4 4 0 0 0 3.05 1.4Z" />
      <path d="M7.5 11.4a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M2.25 20.2c.65-3.75 2.6-5.8 5.25-5.8s4.6 2.05 5.25 5.8Z" />
      <path d="M12.4 20.2c-.28-1.9-.95-3.45-2.05-4.62a6.95 6.95 0 0 1 3.98-1.18c2.6 0 4.55 2.05 5.2 5.8Z" />
    </svg>
  );
}

export function LocationPinFillIcon() {
  return (
    <svg
      className={`size-[1.55rem] fill-current
        max-[40rem]:size-[clamp(1rem,5.2vw,1.2rem)]`}
      viewBox="0 0 24 24"
      role="presentation"
    >
      <path d="M12 2.4A7.35 7.35 0 0 0 4.65 9.75c0 5.35 6.35 11.2 6.62 11.45a1.08 1.08 0 0 0 1.46 0c.27-.25 6.62-6.1 6.62-11.45A7.35 7.35 0 0 0 12 2.4Zm0 10.15a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z" />
    </svg>
  );
}

export function StarsIcon() {
  return (
    <svg
      className={`trust-stars text-brand-yellow mt-[0.8rem] h-[1.18rem]
        w-[6.8rem] max-[40rem]:mt-[0.58rem]
        max-[40rem]:h-[clamp(0.78rem,4vw,0.95rem)]
        max-[40rem]:w-[clamp(4.55rem,22vw,5.55rem)]`}
      viewBox="0 0 120 20"
      fill="currentColor"
      aria-label="Five star Google rating"
    >
      {[10, 35, 60, 85, 110].map((x) => (
        <path
          d={`m${x} 1.8 2.35 4.76 5.25.76-3.8 3.7.9 5.23L${x} 13.78l-4.7 2.47.9-5.23-3.8-3.7 5.25-.76Z`}
          key={x}
        />
      ))}
    </svg>
  );
}

export function MenuBookIcon({ className }: SvgIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20" />
    </svg>
  );
}

export function ArrowRightIcon({ className, strokeWidth = 2 }: SvgIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function PartyIcon({ className }: SvgIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 52 12-34 22 22z" />
      <path d="m24 18 22 22" />
      <path d="M42 12h.01M51 20h.01M16 15h.01M53 34h.01M31 10l3-5M48 6l-2 6M10 30l-6-2" />
    </svg>
  );
}

export function CalendarIcon({ className }: SvgIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  );
}

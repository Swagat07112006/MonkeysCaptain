import type { ReactNode } from "react";
import {
  CustomersIcon,
  LocationPinFillIcon,
  StarBadgeIcon,
  StarsIcon,
} from "./icons/SiteIcons";

export function TrustHighlights() {
  return (
    <div
      className={`hero-highlights mt-10 grid max-w-136 grid-cols-3
        divide-x divide-white/15 border-t border-white/10 pt-6
        max-[40rem]:relative max-[40rem]:z-3 max-[40rem]:mt-0
        max-[40rem]:max-w-none max-[40rem]:grid-cols-3
        max-[40rem]:rounded-[1.05rem] max-[40rem]:border
        max-[40rem]:border-white/18 max-[40rem]:px-[0.2rem]
        max-[40rem]:pt-[0.68rem] max-[40rem]:pb-[0.72rem] mb-8`}
      aria-label="What makes our food special"
    >
      <TrustItem
        icon={<StarBadgeIcon />}
        label="Google Rating"
        sublabel="(13 Reviews)"
      >
        <StarsIcon />
      </TrustItem>
      <TrustItem
        icon={<CustomersIcon />}
        label="Happy Customers"
        sublabel="Served"
      >
        <span
          className={`trust-value text-brand-white mt-[0.42rem]
            text-[clamp(1.75rem,2.7vw,2.35rem)] leading-[0.9] font-black
            tracking-[0.015em] max-[40rem]:mt-[0.36rem]
            max-[40rem]:text-[clamp(1.12rem,6vw,1.55rem)]`}
        >
          1000+
        </span>
      </TrustItem>
      <TrustItem
        icon={<LocationPinFillIcon />}
        sublabel="Bhubaneshwar"
      >
        <span
          className={`trust-value trust-value--place text-brand-white
            mt-[0.42rem] max-w-32 text-[clamp(0.74rem,1.24vw,0.9rem)]
            leading-[1.18] font-black tracking-normal
            max-[40rem]:mt-[0.36rem] max-[40rem]:max-w-[5.8rem]
            max-[40rem]:text-[clamp(0.58rem,2.7vw,0.74rem)]`}
        >
          Serving Dumduma
        </span>
      </TrustItem>
    </div>
  );
}

export function TrustItem({
  icon,
  children,
  label,
  sublabel,
}: {
  icon: ReactNode;
  children: ReactNode;
  label?: string;
  sublabel: string;
}) {
  return (
    <div
      className={`flex min-w-0 flex-col items-center gap-[0.28rem]
        px-[clamp(0.7rem,1.8vw,1.45rem)] text-center
        max-[40rem]:gap-[0.27rem]
        max-[40rem]:px-[clamp(0.3rem,2.3vw,0.58rem)]`}
    >
      <span
        className={`trust-icon border-brand-yellow text-brand-yellow
          grid size-[3.15rem] place-items-center rounded-full
          border-[0.12rem] bg-[oklch(4%_0.012_250/0.82)]
          max-[40rem]:size-[clamp(2.1rem,10vw,2.45rem)]
          max-[40rem]:border-[0.1rem]`}
        aria-hidden="true"
      >
        {icon}
      </span>
      {children}
      {label ? (
        <span
          className={`trust-label text-brand-white block max-w-[7.8rem]
            text-[0.78rem] leading-[1.18] font-extrabold
            max-[40rem]:max-w-[5.7rem]
            max-[40rem]:text-[clamp(0.48rem,2.15vw,0.62rem)]
            max-[40rem]:leading-[1.16]`}
        >
          {label}
        </span>
      ) : null}
      <span
        className={`trust-sub block max-w-[7.8rem] text-[0.71rem]
          leading-[1.18] font-[650] text-[oklch(88%_0.01_85)]
          max-[40rem]:max-w-[5.7rem]
          max-[40rem]:text-[clamp(0.45rem,1.95vw,0.56rem)]
          max-[40rem]:leading-[1.16]`}
      >
        {sublabel}
      </span>
    </div>
  );
}

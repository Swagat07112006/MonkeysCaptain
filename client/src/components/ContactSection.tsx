import type { ReactNode } from "react";

import { MAPS_URL, brandAssets } from "../content/siteContent";

const PHONE_DISPLAY = "+91 82492 46576";
const PHONE_LINK = "+918249246576";
const EMAIL = "captain@monkeyscaptain.com";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function DetailRow({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="contact-detail-row">
      <span className="contact-detail-icon">{icon}</span>
      <div>
        <p>{label}</p>
        <div>{children}</div>
      </div>
    </div>
  );
}

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-glow" aria-hidden="true" />

      <div className="contact-shell">
        <header className="contact-intro">
          <div>
            <p className="contact-kicker">Contact us</p>
            <h2 id="contact-title">
              Hungry? Let&apos;s
              <span>make it happen.</span>
            </h2>
          </div>
          <p className="contact-intro-copy">
            Quick orders, big parties, or a little feedback—reach the Captain
            directly. No call centres. No long forms.
          </p>
        </header>

        <div className="contact-layout">
          <div className="contact-booking-card">
            <img
              className="contact-watermark"
              src={brandAssets.monkeyLogo}
              alt=""
              aria-hidden="true"
            />
            <div className="contact-booking-copy">
              <span className="contact-status">
                <i aria-hidden="true" />
                Taking orders now
              </span>
              <p className="contact-eyebrow">Fastest way to reach us</p>
              <h3>Chat with the Captain</h3>
              <p>
                Send your order or event details on WhatsApp. We&apos;ll confirm
                availability, menu, and pricing with you.
              </p>
            </div>

            <div className="contact-primary-actions">
              <a
                className="contact-whatsapp-button"
                href={`https://wa.me/${PHONE_LINK}`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-whatsapp-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12.04 2a9.84 9.84 0 0 0-8.5 14.8L2 22l5.34-1.5A9.95 9.95 0 1 0 12.04 2Zm5.8 14.05c-.25.7-1.45 1.34-2 1.42-.52.08-1.18.11-1.9-.11-.44-.14-1-.33-1.72-.64-3.03-1.31-5-4.37-5.15-4.57-.15-.2-1.23-1.64-1.23-3.13 0-1.5.79-2.23 1.06-2.54.28-.3.61-.38.82-.38h.58c.18 0 .43-.07.67.51.25.6.85 2.08.93 2.23.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.32.4-.45.53-.15.15-.3.31-.13.61.18.3.78 1.29 1.68 2.09 1.15 1.03 2.12 1.35 2.42 1.5.3.15.48.13.65-.07.18-.2.75-.88.95-1.18.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.23.58.35.07.13.07.73-.18 1.43Z" />
                  </svg>
                </span>
                <span>
                  <small>Order on WhatsApp</small>
                  {PHONE_DISPLAY}
                </span>
                <ArrowIcon />
              </a>
              <a className="contact-call-link" href={`tel:${PHONE_LINK}`}>
                Prefer a call? <strong>Call us directly</strong>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <aside className="contact-details-card" aria-label="Visit details">
            <p className="contact-card-number">01 / VISIT</p>
            <h3>Find the stall</h3>
            <div className="contact-detail-list">
              <DetailRow icon={<PinIcon />} label="Location">
                <p>The Monkey&apos;s Captain</p>
                <a href={MAPS_URL} target="_blank" rel="noreferrer">
                  View address in Google Maps
                </a>
              </DetailRow>
              <DetailRow icon={<ClockIcon />} label="Serving hours">
                <p>Open daily · 4:00 PM–11:30 PM</p>
                <span>Open all 7 days</span>
              </DetailRow>
            </div>
            <div className="contact-email-row">
              <span>For detailed enquiries</span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </aside>

          <div className="contact-review-card">
            <div className="contact-review-heading">
              <div>
                <p className="contact-card-number">02 / GOOGLE REVIEW</p>
                <h3>Loved your bite?</h3>
              </div>
              <div className="contact-review-rating" aria-label="Rated 5 out of 5 from 13 Google reviews">
                <span className="contact-review-score">5.0</span>
                <span className="contact-review-count">13 Google reviews</span>
              </div>
            </div>

            <div className="contact-google-review">
              <div className="contact-google-review-copy">
                <span className="contact-google-mark" aria-hidden="true">
                  G
                </span>
                <div>
                  <h4>Share it on Google Maps</h4>
                  <p>
                    Your review helps more hungry people find the Captain.
                    Choose your stars and write a few words on Google.
                  </p>
                </div>
              </div>
              <a
                className="contact-google-review-button"
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Find The Monkey's Captain on Google Maps and leave a review"
              >
                Review on Google
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>

        <footer className="contact-footer">
          <div>
            <img src={brandAssets.monkeyLogo} alt="" aria-hidden="true" />
            <p>
              The Monkey&apos;s Captain
              <span>Good food. Happy people.</span>
            </p>
          </div>
          <p>© {new Date().getFullYear()} The Monkey&apos;s Captain</p>
          <div className="contact-socials">
            <span>Follow the feast</span>
            <a
              href="https://www.instagram.com/the_monkeys_captain/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}

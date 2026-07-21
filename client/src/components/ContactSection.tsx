import React, { useState } from "react";
import { MAPS_URL } from "../content/siteContent";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        feedback: "",
    });
    const [rating, setRating] = useState(5);
    const [hoverRating, setHoverRating] = useState<number | null>(null);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate API submission
        setTimeout(() => {
            setStatus("success");
            // Reset form controls
            setFormData({
                name: "",
                feedback: "",
            });
            setRating(5);
        }, 1000);
    };

    return (
        <section
            className="contact-section relative px-[clamp(1rem,4vw,2rem)] pt-[clamp(3.2rem,7vw,5rem)] pb-[clamp(3rem,8vw,5.5rem)] text-[oklch(96%_0.008_85)] overflow-hidden"
            id="contact"
            aria-labelledby="contact-title"
        >
            <div className="relative z-1 mx-auto w-[min(100%,76rem)]">
                <p className="contact-label mx-auto mb-[clamp(1.4rem,3vw,2rem)] w-max max-w-full text-center text-brand-yellow font-[Impact,Haettenschweiler,sans-serif] uppercase tracking-[0.035em] text-[clamp(1.2rem,2.8vw,2.15rem)]">
                    Contact Us
                </p>

                <div className="grid gap-[clamp(2rem,4vw,3rem)] lg:grid-cols-[1.35fr_1fr] items-start">
                    {/* Column 1: Info Cards (Main visual highlight, gold borders, glowing orders panel) */}
                    <div className="contact-highlight-panel p-[clamp(1.5rem,4vw,2.2rem)] rounded-2xl border border-brand-yellow/30 bg-[oklch(6%_0.012_250/0.75)] shadow-2xl relative">
                        <h2
                            className="font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[clamp(2rem,5vw,3.6rem)] leading-[0.95] font-black tracking-[0.02em] uppercase mb-3 [text-shadow:0_0.1rem_0_oklch(0%_0_0/0.72)]"
                            id="contact-title"
                        >
                            Direct Bookings <br />
                            <span className="text-brand-yellow">& Culinary Orders</span>
                        </h2>
                        <p className="text-[0.95rem] leading-7 text-brand-white/80 max-w-[34rem] mb-6">
                            Skip the wait! For catering requests, party bookings, or immediate stall orders, connect with the Captain directly.
                        </p>

                        <div className="grid gap-4 sm:grid-cols-2 mb-6">
                            {/* WhatsApp Link Card - Highlighted with Green accents */}
                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-info-card group flex items-start gap-4 p-4 rounded-xl border border-[#25D366]/20 bg-[#25D366]/5 backdrop-blur-sm shadow-md hover:border-[#25D366]/40 hover:bg-[#25D366]/10 transition-all duration-200"
                            >
                                <div className="contact-card-icon-wrapper flex size-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] group-hover:scale-105 transition-all">
                                    <svg className="size-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.063 5.321 5.388.001 11.967.001c3.186.001 6.182 1.24 8.437 3.497 2.254 2.256 3.493 5.252 3.493 8.44 0 6.577-5.325 11.897-11.905 11.897-2.001 0-3.959-.5-5.698-1.462L0 24zm6.59-4.846c1.6.95 3.197 1.45 4.817 1.453 5.373 0 9.743-4.368 9.746-9.741.002-2.602-1.01-5.05-2.85-6.892L16.48 5.86c-1.84-1.84-4.29-2.853-6.89-2.855-5.377 0-9.748 4.37-9.75 9.743-.001 1.733.456 3.424 1.32 4.925L.234 22.8l5.228-1.37a9.716 9.716 0 001.185-.276zm11.382-7.8c-.3-.15-1.786-.88-2.062-.98-.276-.1-.478-.15-.678.15-.2.3-.778.98-.952 1.18-.174.2-.348.225-.648.075-.3-.15-1.267-.467-2.414-1.492-.893-.796-1.496-1.78-1.67-2.08-.174-.3-.02-.462.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C9.375 7 8.75 5.46 8.49 4.82c-.25-.6-.51-.52-.68-.53-.17-.01-.37-.01-.57-.01-.2 0-.52.075-.8.375-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.07 2.89 1.22 3.1.15.2 2.1 3.2 5.08 4.5.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.08 1.786-.73 2.037-1.43.25-.7.25-1.3.175-1.43-.075-.125-.275-.2-.575-.35z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-[#25D366] text-xs tracking-wider uppercase mb-0.5">Order WhatsApp</h3>
                                    <p className="text-[0.82rem] text-brand-white/95 font-medium">+91 98765 43210</p>
                                    <span className="text-[0.62rem] font-bold text-[#E9FCD4]/60 group-hover:text-brand-yellow transition-colors select-none">
                                        Chat to Order &rarr;
                                    </span>
                                </div>
                            </a>

                            {/* Call Direct */}
                            <a
                                href="tel:+919876543210"
                                className="contact-info-card group flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[oklch(5%_0.01_250/0.45)] backdrop-blur-sm shadow-md hover:border-brand-yellow/30 hover:bg-[oklch(8%_0.015_250/0.5)] transition-all duration-200"
                            >
                                <div className="contact-card-icon-wrapper flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 text-brand-yellow group-hover:scale-105 transition-all">
                                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-brand-yellow text-xs tracking-wider uppercase mb-0.5">Call Direct</h3>
                                    <p className="text-[0.82rem] text-brand-white/95 font-medium">+91 98765 43210</p>
                                    <span className="text-[0.62rem] font-bold text-brand-white/40 group-hover:text-brand-yellow transition-colors select-none">
                                        Call Captain &rarr;
                                    </span>
                                </div>
                            </a>

                            {/* Card - Location */}
                            <a
                                href={MAPS_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-info-card group flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[oklch(5%_0.01_250/0.45)] backdrop-blur-sm shadow-md hover:border-brand-yellow/30 hover:bg-[oklch(8%_0.015_250/0.5)] transition-all duration-200"
                            >
                                <div className="contact-card-icon-wrapper flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 text-brand-yellow group-hover:scale-105 transition-all">
                                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-brand-yellow text-xs tracking-wider uppercase mb-0.5">Our Location</h3>
                                    <p className="text-[0.85rem] text-brand-white/90">Stall #4, Beach Promenade</p>
                                    <span className="text-[0.62rem] font-bold text-brand-white/40 group-hover:text-brand-yellow transition-colors select-none">
                                        Open in Maps &rarr;
                                    </span>
                                </div>
                            </a>

                            {/* Email Card */}
                            <a
                                href="mailto:captain@monkeyscaptain.com"
                                className="contact-info-card group flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[oklch(5%_0.01_250/0.45)] backdrop-blur-sm shadow-md hover:border-brand-yellow/30 hover:bg-[oklch(8%_0.015_250/0.5)] transition-all duration-200"
                            >
                                <div className="contact-card-icon-wrapper flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 text-brand-yellow group-hover:scale-105 transition-all">
                                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m3 8 7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-brand-yellow text-xs tracking-wider uppercase mb-0.5">Email Direct</h3>
                                    <p className="text-[0.82rem] text-brand-white/95 font-medium">captain@monkeyscaptain.com</p>
                                    <span className="text-[0.62rem] font-bold text-brand-white/40 group-hover:text-brand-yellow transition-colors select-none">
                                        Send Mail &rarr;
                                    </span>
                                </div>
                            </a>
                        </div>

                        {/* Sub-grid with Hours / Socials */}
                        <div className="border-t border-brand-yellow/15 pt-5 flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-brand-white/55 block mb-1">Stall Service Hours</span>
                                <p className="text-[0.82rem] font-medium text-brand-white/85">Tue - Sun: 4:00 PM - 11:30 PM <span className="text-white/30 ml-2 font-normal">| Mon Closed</span></p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-brand-white/55">Socials:</span>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-white hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-all duration-200"
                                    aria-label="Instagram"
                                >
                                    <svg className="size-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a3.838 3.838 0 1 1 0-7.676 3.838 3.838 0 0 1 0 7.676zm6.406-11.845a1.44a1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-white hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-all duration-200"
                                    aria-label="Facebook"
                                >
                                    <svg className="size-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Form (Feedback & Stars Rating) - Styled Secondary */}
                    <div className="contact-form-panel p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-md relative">
                        {status === "success" ? (
                            <div className="flex flex-col items-center justify-center py-6 text-center animate-fade-in">
                                <div className="flex size-14 items-center justify-center rounded-full bg-brand-yellow/10 text-brand-yellow mb-4 border border-brand-yellow/30 animate-bounce">
                                    <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="font-extrabold text-brand-yellow text-lg tracking-wider uppercase mb-1">Feedback Submitted!</h3>
                                <p className="text-brand-white/80 text-[0.88rem] max-w-sm mb-6">
                                    Thank you for rating us {rating} stars! Your feedback helps the Captain make every bite legendary.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setStatus("idle")}
                                    className="bg-brand-yellow hover:bg-yellow-300 text-neutral-950 font-bold border border-transparent rounded-full px-6 py-2.5 text-xs transition-colors duration-200 cursor-pointer"
                                >
                                    Send Another Review
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="grid gap-4">
                                <h3 className="font-extrabold text-md tracking-wider uppercase mb-1 text-brand-yellow border-b border-white/10 pb-1.5">
                                    Rate Your Experience
                                </h3>

                                <div className="grid gap-1">
                                    <label htmlFor="name" className="text-[0.65rem] font-bold uppercase tracking-wider text-brand-white/60">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        disabled={status === "submitting"}
                                        placeholder="Enter your name"
                                        className="w-full bg-black/40 border border-white/10 rounded-xl p-2.5 text-xs focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow text-brand-white placeholder-white/20 transition-all font-medium"
                                    />
                                </div>

                                <div className="grid gap-1">
                                    <label className="text-[0.65rem] font-bold uppercase tracking-wider text-brand-white/60">
                                        Your Rating
                                    </label>
                                    <div className="flex items-center gap-1.5 my-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => setRating(star)}
                                                onMouseEnter={() => setHoverRating(star)}
                                                onMouseLeave={() => setHoverRating(null)}
                                                disabled={status === "submitting"}
                                                className="text-brand-yellow focus:outline-none transition-transform active:scale-90 duration-100 cursor-pointer disabled:opacity-50"
                                                aria-label={`Rate ${star} Stars`}
                                            >
                                                <svg
                                                    className={`size-7 ${star <= (hoverRating ?? rating)
                                                            ? "fill-current"
                                                            : "fill-transparent stroke-current stroke-1.5"
                                                        }`}
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="m12 2.3 2.78 5.64 6.22.9-4.5 4.38 1.06 6.2L12 16.5l-5.56 2.92 1.06-6.2L3 8.84l6.22-.9Z" />
                                                </svg>
                                            </button>
                                        ))}
                                        <span className="text-[0.68rem] font-bold uppercase tracking-widest text-brand-white/40 ml-1.5">
                                            ({hoverRating ?? rating} / 5 Stars)
                                        </span>
                                    </div>
                                </div>

                                <div className="grid gap-1">
                                    <label htmlFor="feedback" className="text-[0.65rem] font-bold uppercase tracking-wider text-brand-white/60">
                                        Your Feedback
                                    </label>
                                    <textarea
                                        id="feedback"
                                        name="feedback"
                                        value={formData.feedback}
                                        onChange={handleChange}
                                        required
                                        disabled={status === "submitting"}
                                        rows={2}
                                        placeholder="Tell us what you loved, or how we can improve..."
                                        className="w-full bg-black/40 border border-white/10 rounded-xl p-2.5 text-xs focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow text-brand-white placeholder-white/20 resize-none transition-all font-medium"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="bg-brand-yellow hover:bg-yellow-300 text-neutral-950 font-bold border border-transparent rounded-full px-5 py-2.5 text-xs transition-colors duration-200 mt-1 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === "submitting" ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-1.5 h-4 w-4 text-neutral-950" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Submitting...
                                        </>
                                    ) : (
                                        "Submit Review"
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

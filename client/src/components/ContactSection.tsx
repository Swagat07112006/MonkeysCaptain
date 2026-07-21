import React, { useState } from "react";
import { MAPS_URL } from "../content/siteContent";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
                email: "",
                subject: "General Inquiry",
                message: "",
            });
        }, 1200);
    };

    return (
        <section
            className="contact-section relative px-[clamp(1rem,4vw,2rem)] pt-[clamp(3.2rem,7vw,5rem)] pb-[clamp(3rem,8vw,5.5rem)] text-[oklch(96%_0.008_85)] overflow-hidden"
            id="contact"
            aria-labelledby="contact-title"
        >
            <div className="relative z-1 mx-auto w-[min(100%,76rem)]">
                <p className="contact-label mx-auto mb-[clamp(1.4rem,3vw,2rem)] w-max max-w-full text-center text-brand-yellow">
                    Contact Us
                </p>

                <div className="grid gap-[clamp(2.5rem,6vw,4rem)] lg:grid-cols-[1fr_1.3fr] items-start">
                    {/* Column 1: Info Cards */}
                    <div className="contact-info-panel grid gap-6">
                        <h2
                            className="font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] font-black tracking-[0.02em] uppercase mb-4 [text-shadow:0_0.14rem_0_oklch(0%_0_0/0.72),0_0.75rem_1.5rem_oklch(0%_0_0/0.58)]"
                            id="contact-title"
                        >
                            Book The Captain <br />
                            <span className="text-brand-yellow">For Your Event</span>
                        </h2>
                        <p className="text-[0.98rem] leading-7 text-brand-white/80 max-w-[34rem] mb-6">
                            Have a query, want to reserve the monkey-chef stall for a kitty party, or book catering setup for college fest? Drop us a line and let's get cooking!
                        </p>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                            {/* Card - Location (Clickable Link card) */}
                            <a
                                href={MAPS_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-info-card group flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[oklch(5%_0.01_250/0.45)] backdrop-blur-sm shadow-md hover:border-brand-yellow/30 hover:bg-[oklch(8%_0.015_250/0.5)] transition-all duration-200"
                            >
                                <div className="contact-card-icon-wrapper flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 text-brand-yellow group-hover:bg-brand-yellow/20 group-hover:scale-105 transition-all">
                                    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-brand-yellow text-sm tracking-wider uppercase mb-1 flex items-center gap-1.5">
                                        Our Location
                                        <span className="text-[0.68rem] font-bold lowercase tracking-normal text-brand-white/40 group-hover:text-brand-yellow transition-colors duration-200 select-none">
                                            (view on map)
                                        </span>
                                    </h3>
                                    <p className="text-[0.9rem] text-brand-white/90">Stall #4, Beach Promenade, Ocean Drive</p>
                                </div>
                            </a>

                            {/* Card - Details */}
                            <div className="contact-info-card flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[oklch(5%_0.01_250/0.45)] backdrop-blur-sm shadow-md">
                                <div className="contact-card-icon-wrapper flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 text-brand-yellow">
                                    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-brand-yellow text-sm tracking-wider uppercase mb-1">Phone & Email</h3>
                                    <p className="text-[0.9rem] text-brand-white/90 mb-0.5">Call: +91 98765 43210</p>
                                    <p className="text-[0.9rem] text-brand-white/80">Mail: captain@monkeyscaptain.com</p>
                                </div>
                            </div>

                            {/* Card - Hours */}
                            <div className="contact-info-card flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[oklch(5%_0.01_250/0.45)] backdrop-blur-sm shadow-md">
                                <div className="contact-card-icon-wrapper flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-yellow/10 text-brand-yellow">
                                    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-brand-yellow text-sm tracking-wider uppercase mb-1">Business Hours</h3>
                                    <p className="text-[0.9rem] text-brand-white/90 mb-0.5">Tue - Sun: 4:00 PM - 11:30 PM</p>
                                    <p className="text-[0.9rem] text-brand-white/60">Monday: Closed</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-4 flex items-center gap-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-brand-white/60">Follow Us:</span>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-white hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-all duration-200"
                                aria-label="Instagram"
                            >
                                <svg className="size-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a3.838 3.838 0 1 1 0-7.676 3.838 3.838 0 0 1 0 7.676zm6.406-11.845a1.44a1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                                </svg>
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-white hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-all duration-200"
                                aria-label="Facebook"
                            >
                                <svg className="size-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Form */}
                    <div className="contact-form-panel p-8 rounded-2xl border border-brand-yellow/20 bg-[oklch(6%_0.012_250/0.7)] backdrop-blur-md shadow-2xl relative">
                        {status === "success" ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <div className="flex size-20 items-center justify-center rounded-full bg-brand-yellow/10 text-brand-yellow mb-6 border border-brand-yellow/30">
                                    <svg className="size-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="font-extrabold text-brand-yellow text-2xl tracking-wider uppercase mb-2">Message Sent!</h3>
                                <p className="text-brand-white/80 text-[0.96rem] max-w-sm mb-8">
                                    The Captain received your transmission. We will get back to you as fast as the grill lights up!
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setStatus("idle")}
                                    className="bg-brand-yellow hover:bg-yellow-300 text-neutral-950 font-bold border border-transparent rounded-full px-8 py-3 text-sm transition-colors duration-200"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="grid gap-5">
                                <h3 className="font-extrabold text-[1.2rem] tracking-wider uppercase mb-2 text-brand-yellow border-b border-white/10 pb-2">
                                    Drop a Message
                                </h3>

                                <div className="grid gap-1">
                                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-brand-white/60">
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
                                        className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow text-brand-white placeholder-white/20 transition-all font-medium"
                                    />
                                </div>

                                <div className="grid gap-1">
                                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-brand-white/60">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        disabled={status === "submitting"}
                                        placeholder="Enter your email"
                                        className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow text-brand-white placeholder-white/20 transition-all font-medium"
                                    />
                                </div>

                                <div className="grid gap-1">
                                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-brand-white/60">
                                        Subject
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            disabled={status === "submitting"}
                                            className="w-full appearance-none bg-black/40 border border-white/10 rounded-xl p-3 pr-10 text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow text-brand-white transition-all font-medium cursor-pointer"
                                        >
                                            <option value="General Inquiry" className="bg-neutral-950 text-white">General Inquiry</option>
                                            <option value="Event Catering" className="bg-neutral-950 text-white">Event Catering Booking</option>
                                            <option value="Stall Booking" className="bg-neutral-950 text-white">Stall Reservation</option>
                                            <option value="Feedback" className="bg-neutral-950 text-white">Feedback</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-brand-yellow">
                                            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-1">
                                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-brand-white/60">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        disabled={status === "submitting"}
                                        rows={4}
                                        placeholder="Tell the Captain about your event, cravings, or feedback..."
                                        className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow text-brand-white placeholder-white/20 resize-none transition-all font-medium"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="bg-brand-yellow hover:bg-yellow-300 text-neutral-950 font-bold border border-transparent rounded-full px-6 py-3.5 text-sm transition-colors duration-200 mt-2 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === "submitting" ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-neutral-950" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Sending Transmission...
                                        </>
                                    ) : (
                                        "Send Message"
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

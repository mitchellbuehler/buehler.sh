"use client";

import { useState, type FormEvent } from "react";
import { contactConfig } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        `https://formspree.io/f/${contactConfig.formspreeId}`,
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        }
      );

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="section-container border-t border-base-border/60"
    >
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
        <div className="lg:col-span-2">
          <p className="eyebrow">Contact</p>
          <h2 className="section-heading mt-3">
            {contactConfig.heading.split(" ").slice(0, -1).join(" ")}{" "}
            <em className="text-clay not-italic font-display">
              {contactConfig.heading.split(" ").slice(-1)}
            </em>
          </h2>
          <span className="accent-line" />
          <p className="text-text-body text-[17px] leading-[1.7]">
            {contactConfig.subheading}
          </p>
        </div>

        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden
            />

            <div>
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-wider text-text-muted mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-base-raised border border-base-border rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-wider text-text-muted mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-base-raised border border-base-border rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-wider text-text-muted mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-base-raised border border-base-border rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none font-body"
              />
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <svg
                      className="animate-spin"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeOpacity="0.25"
                        strokeWidth="3"
                      />
                      <path
                        d="M12 2a10 10 0 0 1 10 10"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    Sending…
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {status === "sent" && (
                <span className="text-emerald-800 text-sm font-medium">
                  Thanks! I&apos;ll be in touch soon.
                </span>
              )}
              {status === "error" && (
                <span className="text-clay text-sm font-medium">
                  Something went wrong. Please try again.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

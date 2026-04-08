import Image from "next/image";
import { siteConfig, socialLinks } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Soft sage / clay glows */}
      <div
        aria-hidden
        className="absolute top-1/4 -left-32 w-[28rem] h-[28rem] rounded-full bg-accent/15 blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-10 right-0 w-[24rem] h-[24rem] rounded-full bg-clay/10 blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-md px-6">
        <div
          className="bg-base-raised border border-base-border rounded-2xl shadow-card p-8 md:p-10 text-center opacity-0 animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          {/* Headshot */}
          <div className="relative mx-auto w-32 h-32 md:w-36 md:h-36 mb-6">
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-base-raised shadow-card border border-base-border">
              <Image
                src="/headshot.jpg"
                alt={`${siteConfig.name} Buehler`}
                fill
                priority
                sizes="(max-width: 768px) 128px, 144px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Eyebrow */}
          <p className="eyebrow mb-2">{siteConfig.domain}</p>

          {/* Name */}
          <h1 className="font-display text-4xl md:text-5xl text-text-primary leading-[1.05] tracking-tight">
            Mitchell Buehler
          </h1>

          {/* Role */}
          <p className="font-body text-text-body mt-3 text-base">
            {siteConfig.title}
            <span className="text-text-muted"> at </span>
            <span className="text-text-primary font-medium">
              {siteConfig.company}
            </span>
          </p>

          {/* Location */}
          <p className="flex items-center justify-center gap-1.5 text-sm text-text-muted mt-2">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {siteConfig.location}
          </p>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-base-border" />
            <span className="text-clay text-xs">✦</span>
            <div className="flex-1 h-px bg-base-border" />
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-base-border bg-base/40 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/50 transition-all"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full border border-base-border bg-base/40 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/50 transition-all"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
                </svg>
              </a>
            )}
            <a
              href="#contact"
              aria-label="Contact"
              className="w-10 h-10 rounded-full border border-base-border bg-base/40 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/50 transition-all"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-2.5">
            <a href="#projects" className="btn-primary flex-1">
              View Projects
            </a>
            <a href="#about" className="btn-ghost flex-1">
              About Me
            </a>
          </div>
        </div>

        {/* Tagline below the card */}
        <p
          className="text-center text-text-muted text-sm mt-6 italic font-display opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {siteConfig.tagline}
        </p>
      </div>
    </section>
  );
}

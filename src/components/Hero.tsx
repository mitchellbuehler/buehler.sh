import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background glow orbs */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-accent/10 blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-accent/5 blur-[100px] pointer-events-none"
      />

      <div className="section-container !py-0 pt-32">
        <div className="max-w-3xl">
          <p
            className="eyebrow opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            {siteConfig.domain}
          </p>

          <h1
            className="font-display text-6xl md:text-7xl lg:text-8xl text-text-primary leading-[0.95] mt-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            {siteConfig.name}
            <span className="text-accent">.</span>
          </h1>

          <p
            className="font-display text-2xl md:text-3xl text-text-muted mt-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {siteConfig.title} at{" "}
            <span className="text-text-body">{siteConfig.company}</span>
          </p>

          <p
            className="text-text-body text-lg md:text-xl mt-8 max-w-2xl leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            {siteConfig.tagline}
          </p>

          <div
            className="flex flex-wrap gap-4 mt-12 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn-ghost">
              Get in Touch
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

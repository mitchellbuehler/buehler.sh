import Image from "next/image";
import { about, siteConfig } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Polaroid-style portrait + caption */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="relative max-w-sm mx-auto lg:mx-0">
            {/* Main portrait polaroid */}
            <div className="polaroid rotate-[-2deg] transition-transform duration-500 hover:rotate-0">
              <div className="relative aspect-[4/5] overflow-hidden bg-base-subtle">
                <Image
                  src="/headshot.jpg"
                  alt="Mitchell Buehler"
                  fill
                  sizes="(max-width: 1024px) 320px, 400px"
                  className="object-cover"
                />
              </div>
              <p className="text-center text-text-muted font-display italic text-sm mt-3">
                {siteConfig.location}
              </p>
            </div>

            {/* Decorative tape accent */}
            <div
              aria-hidden
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-clay/30 rounded-sm rotate-[-1deg]"
              style={{
                boxShadow: "0 1px 3px rgba(31,29,23,0.1)",
              }}
            />
          </div>
        </div>

        {/* Right: Bio + expertise */}
        <div className="lg:col-span-7">
          <p className="eyebrow">About</p>
          <h2 className="section-heading mt-3">
            Technical depth,
            <br />
            <em className="text-clay not-italic font-display">
              human translation.
            </em>
          </h2>
          <span className="accent-line" />

          <div className="space-y-5">
            {about.summary.map((paragraph, i) => (
              <p
                key={i}
                className="text-text-body text-[17px] leading-[1.7]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="pt-10">
            <p className="eyebrow mb-4">What I work on</p>
            <ul className="flex flex-wrap gap-2">
              {about.expertise.map((item) => (
                <li
                  key={item}
                  className="text-sm text-text-body bg-base-raised border border-base-border px-3.5 py-1.5 rounded-full hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-container border-t border-base-border/60"
    >
      <div className="max-w-3xl mb-14">
        <p className="eyebrow">Experience</p>
        <h2 className="section-heading mt-3">
          Where I&apos;ve built
          <br />
          <em className="text-clay not-italic font-display">and shipped.</em>
        </h2>
        <span className="accent-line" />
        <p className="text-text-body text-[17px] leading-[1.7] max-w-2xl">
          A decade across IT, support engineering, and pre/post-sales — each
          role building on the last.
        </p>
      </div>

      <ol className="relative space-y-6 max-w-3xl">
        {experience.map((item, idx) => (
          <li key={idx} className="relative">
            <div className="card group">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="font-display text-2xl text-text-primary leading-tight">
                    {item.role}
                  </h3>
                  <p className="text-accent text-sm font-medium mt-1 flex items-center gap-2">
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
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                    {item.company}
                  </p>
                </div>
                <span className="badge badge-completed shrink-0">
                  {item.period}
                </span>
              </div>
              <p className="text-text-body leading-relaxed">
                {item.description}
              </p>
              {item.highlights.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-text-muted text-sm leading-relaxed"
                    >
                      <span className="text-clay mt-1.5 shrink-0">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

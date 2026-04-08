import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-container border-t border-base-border/50"
    >
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
        <div className="lg:col-span-2">
          <p className="eyebrow">Experience</p>
          <h2 className="section-heading mt-4">
            Where I've built
            <br />
            and shipped.
          </h2>
          <span className="accent-line" />
        </div>

        <div className="lg:col-span-3">
          <ol className="relative space-y-12">
            {experience.map((item, idx) => (
              <li key={idx} className="relative lg:pl-8">
                <span
                  aria-hidden
                  className="hidden lg:block absolute left-0 top-3 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-base"
                />
                {idx < experience.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden lg:block absolute left-[5px] top-6 bottom-[-3rem] w-px bg-base-border"
                  />
                )}

                <div className="inline-block badge badge-completed mb-3">
                  {item.period}
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-text-primary leading-tight">
                  {item.role}
                </h3>
                <p className="text-accent text-sm font-medium mt-1 mb-4">
                  {item.company}
                </p>
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
                        <span className="text-accent mt-1.5 shrink-0">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
        <div className="lg:col-span-2">
          <p className="eyebrow">About</p>
          <h2 className="section-heading mt-4">
            Technical depth,
            <br />
            human translation.
          </h2>
          <span className="accent-line" />
        </div>

        <div className="lg:col-span-3 space-y-6">
          {about.summary.map((paragraph, i) => (
            <p
              key={i}
              className="text-text-body text-lg leading-relaxed"
            >
              {paragraph}
            </p>
          ))}

          <div className="pt-6">
            <p className="eyebrow mb-4">Areas of Expertise</p>
            <ul className="flex flex-wrap gap-2">
              {about.expertise.map((item) => (
                <li
                  key={item}
                  className="text-sm text-text-body bg-base-subtle border border-base-border px-3 py-1.5 rounded-full hover:border-accent/40 hover:text-accent transition-colors duration-200"
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

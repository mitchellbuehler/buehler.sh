import Image from "next/image";
import { projects, type ProjectStatus } from "@/lib/data";

const statusClass: Record<ProjectStatus, string> = {
  active: "badge-active",
  completed: "badge-completed",
  paused: "badge-paused",
};

const statusLabel: Record<ProjectStatus, string> = {
  active: "Active",
  completed: "Completed",
  paused: "Paused",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-container border-t border-base-border/60"
    >
      <div className="max-w-2xl mb-14">
        <p className="eyebrow">Projects</p>
        <h2 className="section-heading mt-3">
          Things I&apos;m{" "}
          <em className="text-clay not-italic font-display">building.</em>
        </h2>
        <span className="accent-line" />
        <p className="text-text-body text-[17px] leading-[1.7]">
          A mix of shipped apps, hardware experiments, and internal programs.
          Some are live, some are evolving, all of them taught me something.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          const CardTag = project.link ? "a" : "div";
          const cardProps = project.link
            ? {
                href: project.link,
                target: "_blank",
                rel: "noopener noreferrer",
              }
            : {};

          return (
            <CardTag
              key={project.title}
              {...cardProps}
              className="card group flex flex-col !p-0 overflow-hidden"
            >
              {/* Image area */}
              <div className="relative aspect-[16/10] bg-base-subtle border-b border-base-border overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <ProjectFallback title={project.title} />
                )}
                <div className="absolute top-3 left-3">
                  <span className={`badge ${statusClass[project.status]} backdrop-blur-md bg-opacity-90`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {statusLabel[project.status]}
                  </span>
                </div>
                {project.link && (
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-base-raised/90 backdrop-blur-md border border-base-border flex items-center justify-center text-text-muted group-hover:text-accent group-hover:border-accent/50 transition-all">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-2xl text-text-primary mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-base-border/60">
                  {project.tags.map((tag) => (
                    <li key={tag} className="tech-tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </CardTag>
          );
        })}
      </div>
    </section>
  );
}

function ProjectFallback({ title }: { title: string }) {
  // Stylized initial-based fallback when no image is provided
  const initial = title.charAt(0);
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/20 via-base-subtle to-clay/15">
      <span className="font-display text-7xl text-accent/40">{initial}</span>
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(107,127,92,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(201,98,44,0.15) 0%, transparent 50%)",
        }}
      />
    </div>
  );
}

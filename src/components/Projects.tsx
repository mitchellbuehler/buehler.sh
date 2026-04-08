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
      className="section-container border-t border-base-border/50"
    >
      <div className="max-w-2xl">
        <p className="eyebrow">Projects</p>
        <h2 className="section-heading mt-4">Things I'm building.</h2>
        <span className="accent-line" />
        <p className="text-text-body text-lg leading-relaxed">
          A mix of shipped apps, hardware experiments, and internal programs.
          Some are live, some are evolving, all of them taught me something.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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
              className="card group flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className={`badge ${statusClass[project.status]}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {statusLabel[project.status]}
                </span>
                {project.link && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-text-muted group-hover:text-accent transition-colors"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                )}
              </div>

              <h3 className="font-display text-2xl text-text-primary mb-3 leading-tight">
                {project.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-base-border/50">
                {project.tags.map((tag) => (
                  <li key={tag} className="tech-tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </CardTag>
          );
        })}
      </div>
    </section>
  );
}

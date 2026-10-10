import { projects } from "@/data/portfolio";

// Colour pairs for the posters. Each poster blends from the first colour to the second.
const posterColours = [
  ["#1d4ed8", "#0e7490"],
  ["#6d28d9", "#be185d"],
  ["#0f766e", "#15803d"],
  ["#b45309", "#b91c1c"],
  ["#4338ca", "#1d4ed8"],
  ["#be123c", "#7c3aed"],
];

export default function Projects() {
  return (
    // A grid: one column on phones, two on tablets, three on wide screens.
    <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => {
        // "%" gives the remainder after dividing. It makes the colours start
        // again from the first pair when there are more projects than pairs.
        const [from, to] = posterColours[index % posterColours.length];

        return (
          <article key={project.title} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface">
            {/* THE POSTER: a coloured block with the number, type and title.
                "style" sets the colours directly, because they come from the list above. */}
            <div
              style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
              className="flex min-h-44 flex-col justify-between gap-6 p-6 text-white"
            >
              <p className="flex items-center justify-between font-mono text-xs">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{project.type}</span>
              </p>
              <h3 className="font-display text-3xl font-semibold uppercase leading-tight">{project.title}</h3>
            </div>

            {/* THE DETAILS under the poster */}
            <div className="flex grow flex-col gap-4 p-6">
              <p className="text-muted">{project.description}</p>

              {/* One small tag per tool */}
              <ul className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <li key={tool} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
                    {tool}
                  </li>
                ))}
              </ul>

              {/* Links, shown only if at least one address is set.
                  "||" means "or". "mt-auto" pushes them to the bottom of the card. */}
              {(project.github || project.live) && (
                <div className="mt-auto flex flex-wrap gap-5 font-medium">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      View code ↗
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      Live site ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
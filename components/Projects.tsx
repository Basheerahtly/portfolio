import Image from "next/image";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    // A grid: one column on small screens, two on large ones.
    <div className="mt-8 grid gap-5 lg:grid-cols-2">
      {/* One card per project */}
      {projects.map((project) => (
        <article key={project.title} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface">
          {/* Screenshot, shown only if an image file name is set */}
          {project.image && (
            <div className="relative aspect-video bg-placeholder">
              <Image
                src={`/projects/${project.image}`}
                alt={`Screenshot of ${project.title}`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          )}

          <div className="flex grow flex-col gap-3 p-6">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-muted">{project.description}</p>

            {/* One small tag per tool */}
            <ul className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <li key={tool} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
                  {tool}
                </li>
              ))}
            </ul>

            {/* Links, each shown only if its address is set.
                "mt-auto" pushes them to the bottom of the card. */}
            <div className="mt-auto flex flex-wrap gap-5 pt-3 font-medium">
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
          </div>
        </article>
      ))}
    </div>
  );
}
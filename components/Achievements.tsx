import Image from "next/image";
import { achievements } from "@/data/portfolio";

export default function Achievements() {
  return (
    // A grid: one column on phones, two on tablets, three on wide screens.
    <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {/* One card per achievement */}
      {achievements.map((item) => (
        <article key={item.title} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface">
          {/* THE TEXT. "grow" lets it fill the card, so photos line up at the bottom. */}
          <div className="flex grow flex-col gap-2 p-6">
            <p className="font-mono text-sm text-muted">{item.year}</p>

            {/* The result, in large gold letters, with a short gold line under it */}
            <p className="font-display text-5xl font-bold uppercase leading-none text-amber-600">
              {item.highlight}
            </p>
            <span className="my-2 block h-0.5 w-12 bg-amber-600" />

            <h3 className="text-lg font-semibold">{item.title}</h3>
            {item.issuer && <p className="font-medium text-accent">{item.issuer}</p>}
            {item.description && <p className="text-muted">{item.description}</p>}
          </div>

          {/* THE PHOTO, shown only if an image file name is set.
              It is a link, so clicking opens the full picture in a new tab. */}
          {item.image && (
            <a
              href={`/achievements/${item.image}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-4/3 overflow-hidden bg-placeholder"
            >
              <Image
                src={`/achievements/${item.image}`}
                alt={`Picture for: ${item.title}`}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-300 hover:scale-105"
              />
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
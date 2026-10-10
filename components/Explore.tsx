import { sections } from "@/data/portfolio";

// A row of small cards under the introduction. Each card jumps to one section.
export default function Explore() {
  return (
    <div>
      {/* Small label, in the same style as the section numbers */}
      <p className="flex items-center gap-3 font-mono text-sm text-accent">
        Explore
        <span className="h-px w-12 bg-accent" />
      </p>

      {/* Two cards per row on phones, three on tablets, six on wide screens */}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-6">
        {sections.map((section, index) => {
          // Skip the two sections that do not need a card.
          // Returning null means "draw nothing for this item".
          if (section.id === "about") {
            return null;
          }

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="flex min-w-0 flex-col gap-1 rounded-2xl border border-border bg-surface p-3 transition duration-200 hover:border-accent motion-safe:hover:-translate-y-1 sm:p-4"
            >
              {/* index + 1 gives the same number the section heading shows */}
              <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
              <span className="font-display text-base font-semibold uppercase sm:text-xl">{section.navLabel}</span>
              <span className="text-sm text-muted">{section.blurb}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
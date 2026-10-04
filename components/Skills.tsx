import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    // A grid: one column on phones, two on tablets, three on wide screens.
    <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {/* Outer loop: one card per group */}
      {skillGroups.map((group) => (
        <div key={group.title} className="rounded-2xl border border-border bg-surface p-6">
          <h3 className="font-semibold">{group.title}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {/* Inner loop: one tag per skill inside this group */}
            {group.items.map((item) => (
              <li key={item} className="rounded-full border border-border px-3 py-1 text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
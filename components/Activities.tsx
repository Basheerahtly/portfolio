import { activities } from "@/data/portfolio";

export default function Activities() {
  return (
    // A grid: one column on small screens, two columns on large ones.
    <div className="mt-8 grid gap-5 lg:grid-cols-2">
      {/* One card per activity */}
      {activities.map((item) => (
        // The key joins role and organisation, because two items share the role "Executive Member".
        <article key={item.role + item.organisation} className="rounded-2xl border border-border bg-surface p-6">
          <p className="font-mono text-sm text-muted">{item.period}</p>
          <h3 className="mt-2 text-lg font-semibold">{item.role}</h3>
          <p className="font-medium text-accent">{item.organisation}</p>
          {/* Only show the description if it is not empty */}
          {item.description && <p className="mt-3 text-muted">{item.description}</p>}
        </article>
      ))}
    </div>
  );
}
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    // <ol> is an "ordered list", the right tag for items in a sequence.
    // Its left border draws the vertical line of the timeline.
    <ol className="mt-8 flex max-w-3xl flex-col gap-10 border-l-2 border-border pl-8">
      {/* One timeline entry per school in the list */}
      {education.map((item) => (
        <li key={item.school} className="relative">
          {/* The small circle sitting on the timeline line */}
          <span className="absolute -left-[41px] top-0.5 h-4 w-4 rounded-full border-2 border-accent bg-background" />
          <p className="font-mono text-sm text-muted">{item.years}</p>
          <h3 className="mt-1 text-xl font-semibold">{item.school}</h3>
          <p className="mt-1 font-medium text-accent">{item.course}</p>

          {/* Bullet points: one per highlight. "list-disc" draws the round bullets. */}
          <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
            {item.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
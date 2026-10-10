// The big heading at the top of each section.
// It receives two values: "number" (such as "02") and "title" (such as "Skills").
export default function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div>
      {/* Small label: the section number followed by a short blue line */}
      <p className="flex items-center gap-3 font-mono text-sm text-accent">
        {number}
        <span className="h-px w-12 bg-accent" />
      </p>
      {/* The title: "font-display" is the new font, "uppercase" turns it into capitals,
          and "leading-none" keeps the lines close together if it wraps. */}
      <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-none md:text-7xl">
        {title}
      </h2>
    </div>
  );
}
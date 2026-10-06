import Image from "next/image";
import { certificates } from "@/data/portfolio";

export default function Certificates() {
  return (
    // A grid: one column on phones, two on tablets, three on wide screens.
    <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {/* One card per certificate */}
      {certificates.map((item) => (
        <article key={item.title} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface">
          {/* The picture, shown only if an image file name is set */}
          {item.image && (
            <a
              href={`/certificates/${item.image}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-4/3 overflow-hidden bg-placeholder"
            >
              <Image
                src={`/certificates/${item.image}`}
                alt={`Picture of: ${item.title}`}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-300 hover:scale-105"
              />
            </a>
          )}

          <div className="flex grow flex-col items-start gap-2 p-6">
            {/* The type label. Certifications get the blue style, certificates a plain one. */}
            <span
              className={
                item.type === "Certification"
                  ? "rounded-full bg-accent px-3 py-1 text-xs font-semibold text-on-accent"
                  : "rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
              }
            >
              {item.type}
            </span>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="font-medium text-accent">{item.issuer}</p>
            <p className="font-mono text-sm text-muted">{item.date}</p>

            {/* Verification link, shown only if a link is set */}
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-auto pt-2 font-medium text-accent hover:underline">
                Verify ↗
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
import Image from "next/image";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="about" className="flex min-h-screen flex-wrap items-center gap-14 px-8 py-16 md:px-16">
      {/* LEFT SIDE: the text */}
      <div className="flex min-w-0 grow basis-96 flex-col items-start gap-5">
        {/* Status badge. "&&" means: only show this if status is not empty. */}
        {profile.status && (
          <p className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            {profile.status}
          </p>
        )}

        {/* &apos; is how an apostrophe is written inside JSX text */}
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl xl:text-6xl">
          Hi, I&apos;m <span className="text-accent">{profile.name}</span>
        </h1>
        <p className="text-2xl font-semibold">{profile.role}</p>
        <p className="max-w-xl text-lg text-muted">{profile.bio}</p>

        {/* Skill tags: one tag per item in the skills list */}
        <ul className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <li key={skill} className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium">
              {skill}
            </li>
          ))}
        </ul>

        {/* Buttons. The CV button only appears once a CV file name is set. */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a href="#projects" className="rounded-xl bg-accent px-6 py-3 font-semibold text-on-accent transition hover:opacity-90">
            View projects
          </a>
          {profile.cv && (
            <a href={`/${profile.cv}`} download className="rounded-xl border-2 border-accent px-6 py-3 font-semibold text-accent transition hover:bg-accent hover:text-on-accent">
              Download CV
            </a>
          )}
        </div>

        {/* Links. target="_blank" opens the link in a new tab. */}
        <div className="flex flex-wrap gap-6 pt-2 font-medium">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            GitHub ↗
          </a>
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              LinkedIn ↗
            </a>
          )}
          <a href={`mailto:${profile.email}`} className="hover:text-accent">
            Email ↗
          </a>
        </div>
      </div>

      {/* RIGHT SIDE: the photo */}
      <div className="relative h-110 w-full max-w-90">
        {/* Blue outline, shifted slightly so it peeks out behind the photo */}
        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border-2 border-accent" />

        {/* "? :" means: if a photo is set, show it, otherwise show the grey box */}
        {profile.photo ? (
          <Image
            src={`/${profile.photo}`}
            alt={`Photo of ${profile.name}`}
            fill
            sizes="360px"
            priority
            className="rounded-3xl object-cover"
          />
        ) : (
          <div className="relative flex h-full items-center justify-center rounded-3xl bg-placeholder font-mono text-sm text-muted">
            Your photo
          </div>
        )}

        {/* Small card that overlaps the photo */}
        <div className="absolute -left-6 bottom-7 rounded-2xl border border-border bg-surface px-4 py-3 shadow-lg">
          <p className="font-mono text-xs text-muted">Studying</p>
          <p className="font-semibold">{profile.course}</p>
          <p className="text-sm text-muted">{profile.university}</p>
        </div>
      </div>
    </section>
  );
}
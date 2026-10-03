// Bringing in the content from the data file.
// "@/" is a shortcut meaning "start from the project's main folder".
import { profile } from "@/data/portfolio";

// A "component" is a function that returns what appears on screen.
// Next.js shows this one as the home page.
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
      {/* Curly braces mean "insert a value here" */}
      <h1 className="text-5xl font-bold">{profile.name}</h1>
      <p className="text-xl">{profile.headline}</p>
      <p className="max-w-xl opacity-70">{profile.bio}</p>
      <a href={`mailto:${profile.email}`} className="underline">
        Contact me
      </a>
    </main>
  );
}
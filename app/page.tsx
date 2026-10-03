// Bringing in the content from the data file.
// "@/" is a shortcut meaning "start from the project's main folder".

import Sidebar from "@/components/Sidebar";
import { sections } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Sidebar />
      {/* "md:ml-64" pushes the content right so the sidebar doesn't cover it */}
      <main className="md:ml-64">
        {/* Each section's id matches a sidebar link, which is how clicking jumps to it */}
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="min-h-screen p-8 md:p-16">
            <h2 className="text-3xl font-bold">{section.label}</h2>
            <p className="mt-4 opacity-70">Content coming soon.</p>
          </section>
        ))}
      </main>
    </>
  );
}
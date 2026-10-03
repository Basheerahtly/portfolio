import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import { sections } from "@/data/portfolio";

export default function Home() {
  // Every section except "about", because the Hero component now covers it.
  // .filter() keeps only the items that pass the test, like Where() in C#.
  const otherSections = sections.filter((section) => section.id !== "about");

  return (
    <>
      <Sidebar />
      {/* "md:ml-64" pushes the content right so the sidebar doesn't cover it */}
      <main className="md:ml-64">
        <Hero />
        {otherSections.map((section) => (
          <section key={section.id} id={section.id} className="min-h-screen border-t border-border p-8 md:p-16">
            <h2 className="text-3xl font-bold">{section.label}</h2>
            <p className="mt-4 text-muted">Content coming soon.</p>
          </section>
        ))}
      </main>
    </>
  );
}
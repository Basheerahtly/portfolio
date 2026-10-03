import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import { profile, sections } from "@/data/portfolio";

export default function Home() {
  // Every section except "about", because the Hero component covers it.
  // .filter() keeps only the items that pass the test, like Where() in C#.
  const otherSections = sections.filter((section) => section.id !== "about");

  return (
    <>
      <Sidebar />
      {/* "md:ml-64" pushes the content right so the sidebar doesn't cover it */}
      <main className="md:ml-64">
        <Hero />
        {otherSections.map((section) => (
          <section key={section.id} id={section.id} className="min-h-screen border-t border-border">
            {/* This inner box keeps the content from stretching on big screens */}
            <div className="mx-auto w-full max-w-6xl px-8 py-16 md:px-16">
              <h2 className="text-3xl font-bold">{section.label}</h2>

              {/* The Contact section shows the form. The others show a placeholder for now. */}
              {section.id === "contact" ? (
                <>
                  <p className="mb-8 mt-4 max-w-xl text-muted">{profile.contactIntro}</p>
                  <ContactForm />
                </>
              ) : (
                <p className="mt-4 text-muted">Content coming soon.</p>
              )}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
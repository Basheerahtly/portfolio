import Achievements from "@/components/Achievements";
import Activities from "@/components/Activities";
import ContactForm from "@/components/ContactForm";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";
import Skills from "@/components/Skills";
import { profile, sections } from "@/data/portfolio";

// Decides what goes inside each section, based on the section's id.
// Each time we build a new section, we add a few lines here.
function SectionContent({ id }: { id: string }) {
  if (id === "skills") {
    return <Skills />;
  }
  if (id === "projects") {
    return <Projects />;
  }
  if (id === "experience") {
    return <Activities />;
  }
  if (id === "education") {
    return <Education />;
  }
  if (id === "achievements") {
    return <Achievements />;
  }
  if (id === "contact") {
    return (
      <>
        <p className="mb-8 mt-4 max-w-xl text-muted">{profile.contactIntro}</p>
        <ContactForm />
      </>
    );
  }
  // Any section we haven't built yet shows this placeholder.
  return <p className="mt-4 text-muted">Content coming soon.</p>;
}

export default function Home() {
  // Every section except "about", because the Hero component covers it.
  const otherSections = sections.filter((section) => section.id !== "about");

  return (
    <>
      <Sidebar />
      {/* "md:ml-64" pushes the content right so the sidebar doesn't cover it */}
      <main className="md:ml-64">
        <Hero />
        {otherSections.map((section) => (
          <section key={section.id} id={section.id} className="border-t border-border">
            {/* This inner box keeps the content from stretching on big screens */}
            <div className="mx-auto w-full max-w-6xl px-8 py-16 md:px-16">
              <h2 className="text-3xl font-bold">{section.label}</h2>
              <SectionContent id={section.id} />
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

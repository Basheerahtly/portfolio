import Achievements from "@/components/Achievements";
import Activities from "@/components/Activities";
import Certificates from "@/components/Certificates";
import ContactForm from "@/components/ContactForm";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Navbar from "@/components/navBar"; 
 import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { profile, sections } from "@/data/portfolio";

// Decides what goes inside each section, based on the section's id.
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
  if (id === "certificates") {
    return <Certificates />;
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
  // A safety net: any section without content shows this line.
  return <p className="mt-4 text-muted">Content coming soon.</p>;
}

export default function Home() {
  // Every section except "about", because the Hero component covers it.
  const otherSections = sections.filter((section) => section.id !== "about");

  return (
    <>
      <Navbar />
      <main>
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
import Achievements from "@/components/Achievements";
import Certificates from "@/components/Certificates";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Navbar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
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
    return <Journey />;
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
        {/* "index" is the position of each section in the list: 0, 1, 2 and so on */}
        {otherSections.map((section, index) => (
          <section key={section.id} id={section.id} className="border-t border-border">
            {/* This inner box keeps the content from stretching on big screens */}
            <div className="mx-auto w-full max-w-6xl px-8 py-16 md:px-16">
              {/* Everything inside Reveal fades in when scrolled into view */}
              <Reveal>
                {/* index + 2 because the introduction counts as section 01.
                    padStart(2, "0") adds a zero in front, turning "2" into "02". */}
                <SectionHeading number={String(index + 2).padStart(2, "0")} title={section.label} />
                <SectionContent id={section.id} />
              </Reveal>
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
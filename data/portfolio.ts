//file holding the content of the website.
// Only file to edit when uploading site in future

// "export" lets other files use this.
// "const" creates a named value, here an object (a group of labelled values).
export const profile = {
  name: "Hajrah Basheerah Tourabally",
  headline: "Computer Science (AI) student at Asia Pacific University, Malaysia",
    bio: "Computer Science (AI) student exploring generative AI and LLMs. I enjoy a good challenge and I'm looking for an internship where I can build real things.",
  github: "https://github.com/Basheerahtly",
  role: "Aspiring AI Engineer",
  status: "Open to internships",
  course: "CS (Hons) in AI",
  university: "Asia Pacific University",
  skills: ["Python", "C#", "SQL"],
  linkedin: "https://www.linkedin.com/in/hajrah-basheerah-tourabally-7249b2191/",
  photo: "hajrah.jpg",
  cv: "Hajrah_Tourabally_CV.pdf",

};


// The sections of the site, in the order they appear.
// "id" is used in the link (lowercase, no spaces). "label" is what visitors see.
export const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates & Licenses" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

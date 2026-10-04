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
  status: "Open to internships and projects",
  course: "CS (Hons) in AI",
  university: "Asia Pacific University",
  skills: ["Python", "C#", "SQL"],
  linkedin: "https://www.linkedin.com/in/hajrah-basheerah-tourabally-7249b2191/",
  photo: "hajrah.jpg",
  cv: "Hajrah_Tourabally_CV.pdf",
    // Access key from web3forms.com. It delivers contact form messages to your email.
  contactKey: "b406849d-1014-4a3d-be94-b23ee53b1e32",
  // Short invitation shown above the contact form.
  contactIntro: "Have an internship opportunity or a project in mind? Send me a message and I will reply by email.",

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


export const education = [
  {
    school: "Asia Pacific University of Technology & Innovation (APU), Malaysia",
    course: "BSc (Hons) Computer Science (Artificial Intelligence)",
    years: "2025 - 2028",
    details: "Currently in Year 2 Semester 1",
  },
  {
    school: "Droopnath Ramphul State College, Mauritius",
    course: "O-Level & A-Level (Economics Stream)",
    years: "2017 - 2024",
    details: "Ranked 10th at National Level in O-Level Exams (2022), 16th at National Level in A-level Exams(Economics Side) & 139th in Top 500 Scholarship (2024) in Mauritius",
  },
];

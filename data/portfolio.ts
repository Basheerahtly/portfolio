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
  { id: "experience", label: "Leadership & Activities" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates & Licenses" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];



export const education = [
  {
    school: "Asia Pacific University of Technology and Innovation (APU)",
    course: "Bachelor of Computer Science (Artificial Intelligence) (Hons)",
    years: "Sep 2025 - Sep 2028 (expected)",
    highlights: [
      "First Class in Year 1, with a CGPA of 3.86"],
  },
  {
    school: "Droopnath Ramphul State College, Mauritius",
    course: "Cambridge A-Level (HSC) and O-Level (SC)",
    years: "Jan 2017 - Nov 2024",
    highlights: [
      "A-Level (2024): A* in Mathematics, Computer Science and Economic(Principal Subjects), a in French and General Paper(Subsidiary Subjects), ranked 16th Economics side nationally and 138th in Top 500 nationally",
      "O-Level (2022): five A* and three A grades, ranked 10th nationally in Economics"],
  },
];




export const skillGroups = [
  {
    title: "Programming languages",
    items: ["Python", "C#", "Java", "SQL"],
  },
  {
    title: "Artificial intelligence",
    items: ["AI Agents", "Prompt Engineering", "Generative AI and LLMs"],
  },
  {
    title: "Systems and tools",
    items: ["Linux (Ubuntu)", "System Administration", "Cisco Networking", "Git and GitHub"],
  },
  {
    title: "Web development (currently learning)",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Professional skills",
    items: ["Public Speaking", "Leadership", "Teamwork", "Project Management", "Problem Solving"],
  },
];


// Your leadership roles and activities, newest first.
// To add one later, copy a block (from "{" to "},") and change the details.
// To hide the description for an item, leave it as "".
export const activities = [
  {
    role: "Member",
    organisation: "Rotaract Club of APU",
    period: "ADD DATES",
    description: "ADD ONE SENTENCE about what you do in the club.",
  },
  {
    role: "Crew Member",
    organisation: "Math Airport, APU",
    period: "ADD DATE",
    description: "ADD ONE SENTENCE about what you did at this event.",
  },
  {
    role: "Executive Member",
    organisation: "Benevolent Club, Droopnath Ramphul State College",
    period: "2023",
    description: "Took part in community outreach, including a visit to an ashram to spend time with elderly residents.",
  },
  {
    role: "Executive Member",
    organisation: "Art Club, Droopnath Ramphul State College",
    period: "2022 - 2023",
    description: "Helped organise school events, including a blood donation drive, prize-giving, Music Day and a Christmas party.",
  },
  {
    role: "Class Captain",
    organisation: "Droopnath Ramphul State College",
    period: "2019 - 2022",
    description: "Served as class captain for four consecutive years.",
  },
  {
    role: "Vice-Treasurer",
    organisation: "Health & Wellness Club, Droopnath Ramphul State College",
    period: "2020",
    description: "",
  },
];
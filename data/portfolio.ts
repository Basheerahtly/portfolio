//file holding the content of the website.
// Only file to edit when uploading site in future

// "export" lets other files use this.
// "const" creates a named value, here an object (a group of labelled values).
export const profile = {
  name: "Hajrah Basheerah Tourabally",
  headline: "Computer Science (AI) student at Asia Pacific University, Malaysia",
  bio: "Computer Science (AI) student exploring generative AI and LLMs. I enjoy a good challenge and I'm looking for an internship where I can build real things.",
  github: "https://github.com/Basheerahtly",
  email: "touraballybasheerahh@gmail.com",
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


export const sections = [
  { id: "about", label: "About", navLabel: "About", blurb: "Who I am" },
  { id: "skills", label: "Skills", navLabel: "Skills", blurb: "What I work with" },
  { id: "projects", label: "Projects", navLabel: "Projects", blurb: "Things I have built" },
  { id: "experience", label: "Leadership & Activities", navLabel: "Activities", blurb: "Roles I have held" },
  { id: "education", label: "Education", navLabel: "Education", blurb: "Where I studied" },
  { id: "certificates", label: "Certificates", navLabel: "Certificates", blurb: "Courses and workshops" },
  { id: "achievements", label: "Achievements", navLabel: "Achievements", blurb: "Awards and rankings" },
  { id: "contact", label: "Contact", navLabel: "Contact", blurb: "Get in touch" },
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

// Your achievements, newest first.
// "image" is the file name of a picture inside the folder public/achievements.
// Leave image, issuer or description as "" to hide that part.
// To add an achievement later, copy a block (from "{" to "},") and change the details.
export const achievements = [
  {
    title: "Duke of Edinburgh's International Award, Silver",
    issuer: "The Duke of Edinburgh's International Award",
    year: "2024",
    description: "",
    image: "",
  },
  {
    title: "Ranked 16th on the Economics side at A-Level",
    issuer: "Cambridge A-Level (Higher School Certificate)",
    year: "2024",
    description: "Also placed 139th in the Top 500 scholarship ranking.",
    image: "a_levels.jpg",
  },
  {
    title: "Ranked 1st In Computer Science At School Level (Grade 12)",
    issuer: "Droopnath Ramphul State College",
    year: "2023",
    description: "Also placed 139th in the Top 500 scholarship ranking.",
    image: "grade12_award.jpg",
  },
  {
    title: "Ranked 10th nationally in Economics at O-Level",
    issuer: "Cambridge O-Level (School Certificate)",
    year: "2022",
    description: "",
    image: "o-levels.jpg",
  },
  {
    title: "Winning team, Green Your School Contest",
    issuer: "Droopnath Ramphul State College",
    year: "2021",
    description: "",
    image: "",
  },
  {
    title: "Finalist, InnovED 2020",
    issuer: "National Productivity and Competitiveness Council (NPCC)",
    year: "2020",
    description: "",
    image: "",
  },
  {
    title: "Winning team, Junior Hackathon 2019",
    issuer: "Polytechnics Mauritius",
    year: "2019",
    description: "",
    image: "junior_hackaton.jpg",
  },
];


// Your projects, best or newest first.
// "type" is shown on the poster, for example "Personal project".
// "tools" is a list of the technologies used.
// "github" is the link to the code. "live" is the link to the working site or app.
// Leave github or live as "" to hide that link.
// To add a project later, copy a block (from "{" to "},") and change the details.
export const projects = [
  {
    title: "Portfolio Website",
    type: "Personal project",
    description:
      "My personal website, built from scratch with light and dark themes, scroll animations and a working contact form.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Basheerahtly/portfolio",
    live: "",
  },
  {
    title: "Luminae: AI Career Guidance Chatbot",
    type: "University project",
    description:
      "An AI chatbot that gives career guidance, using a knowledge base built on the RIASEC framework.",
    tools: ["Botpress"],
    github: "",
    live: "",
  },
  {
    title: "Restaurant Management System",
    type: "University project",
    description:
      "A desktop restaurant management application built as a team. I developed the chef-role features.",
    tools: ["C#"],
    github: "",
    live: "",
  },
  {
    title: "Hotel Management System",
    type: "University project",
    description:
      "A hotel management system built as a team. I developed the hotel manager features.",
    tools: ["Python"],
    github: "",
    live: "",
  },
  {
    title: "LAN and WAN Network Design",
    type: "University project",
    description:
      "Designed a LAN and WAN network and completed the full device configurations.",
    tools: ["Cisco Packet Tracer"],
    github: "",
    live: "",
  },
  {
    title: "Shape-Generating Script",
    type: "University project",
    description:
      "A shell script that generates shapes in a Linux (Ubuntu) environment.",
    tools: ["Shell scripting", "Linux (Ubuntu)"],
    github: "",
    live: "",
  },
];

// Your certificates and certifications. Put certifications first, then newest first.
// "type" is "Certification" (earned by passing an official exam)
// or "Certificate" (given for completing a course, workshop or event).
// "link" is a web address where the credential can be checked.
// "image" is the file name of a picture inside the folder public/certificates.
// Leave link or image as "" to hide that part.
export const certificates = [
  {
    title: "Mathematical Olympiad, Certificate of Participation",
    issuer: "Universiti Teknologi MARA",
    date: "May 2026",
    type: "Certificate",
    link: "",
    image: "",
  },
  {
    title: "Build Your First AI Agent: Hands-On Workshop",
    issuer: "Asia Pacific University of Technology and Innovation (APU)",
    date: "Apr 2026",
    type: "Certificate",
    link: "",
    image: "",
  },
  {
    title: "AI Amplified Scholar",
    issuer: "Asia Pacific University of Technology and Innovation (APU)",
    date: "Apr 2026",
    type: "Certificate",
    link: "",
    image: "",
  },
  {
    title: "Public Speaking Masterclasses, Certificate of Excellence",
    issuer: "Shaun Payen Public Speaking Masterclasses",
    date: "Jun 2025",
    type: "Certificate",
    link: "",
    image: "",
  },
  {
    title: "Universal ICT Education Programme",
    issuer: "Ministry of Education and Human Resources, Mauritius",
    date: "Oct 2019",
    type: "Certificate",
    link: "",
    image: "",
  },
];
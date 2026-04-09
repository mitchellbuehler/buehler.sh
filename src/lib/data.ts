// ============================================================
// SITE CONTENT — Edit this file to update all website content.
// Components import from here so content changes never
// require touching UI code.
// ============================================================

export const siteConfig = {
  name: "Mitchell",
  title: "Director, Solution Engineering",
  company: "Tanium",
  domain: "Autonomous IT & Cybersecurity",
  location: "Oak Park, IL",
  tagline: "Bridging the gap between complex technology and business outcomes.",
  description:
    "Director of Solution Engineering at Tanium with 10+ years across cybersecurity, endpoint operations, and enterprise IT. I help enterprise organizations understand, evaluate, and realize value from security and operations platforms, translating C-level business challenges into scalable technical architectures.",
};

// -----------------------------------------------------------
// ABOUT / BIO
// -----------------------------------------------------------
export const about = {
  summary: [
    "I'm a technical leader with 10+ years across cybersecurity, endpoint operations, and enterprise IT, currently leading Solution Engineering at Tanium. My role sits between the deeply technical and the strategically commercial: running proof-of-value engagements, building executive business cases, and translating C-level conversations into scalable technical architectures.",
    "I started in hands-on IT and support engineering, moved into post-sales as a Technical Account Manager for Fortune 500 customers, and now lead pre-sales for enterprise deals across the Americas. I care about solving hard problems through technology and mentoring engineers along the way.",
    "Outside of work, I'm a builder. I develop apps, tinker with hardware projects, explore how AI is reshaping the way we build and work, and renovate a 1920s home in the Chicago area. I believe the best technical minds are the ones who never stop being curious.",
  ],
  expertise: [
    "Endpoint Security & Management",
    "Proof-of-Value Engagements",
    "Technical Sales & Solution Architecture",
    "Executive Business Reviews",
    "Enterprise IT Operations",
    "Vulnerability & Risk Management",
    "Automation & Integration (Python, PowerShell, Bash)",
    "AI & LLM-Powered Workflows",
    "Mentoring & Enablement",
  ],
};

// -----------------------------------------------------------
// EXPERIENCE
// -----------------------------------------------------------
export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Director, Solution Engineering",
    company: "Tanium",
    period: "2025 – Present",
    description:
      "Leading pre-sales technical strategy for enterprise accounts across the Americas, turning C-level business problems into technical solutions that close.",
    highlights: [],
  },
  {
    role: "Director, Technical Account Management",
    company: "Tanium",
    period: "2021 – 2025",
    description:
      "Owned the technical relationship for a portfolio of Fortune 500 customers, from onboarding through expansion and ongoing platform strategy.",
    highlights: [],
  },
  {
    role: "Senior Technical Support Engineer",
    company: "McAfee",
    period: "2018 – 2021",
    description:
      "Worked with enterprise customers on the McAfee endpoint security suite, handling escalations, live webinars, and internal enablement.",
    highlights: [],
  },
  {
    role: "Earlier Career",
    company: "IT, Systems Admin & Entrepreneurship",
    period: "2012 – 2018",
    description:
      "Hands-on IT support, systems administration, and a co-founded server hosting company. The foundation everything else is built on.",
    highlights: [],
  },
];

// -----------------------------------------------------------
// PROJECTS
// -----------------------------------------------------------
export type ProjectStatus = "active" | "completed" | "paused";

export interface ProjectItem {
  title: string;
  description: string;
  status: ProjectStatus;
  tags: string[];
  link?: string; // Optional external URL (GitHub, App Store, etc.)
  image?: string; // Optional image path under /public
}

export const projects: ProjectItem[] = [
  {
    title: "Which Hood",
    description:
      "An iOS app that identifies which Chicago neighborhood you're currently in using GPS and GeoJSON boundary data. Built with Swift, integrating AdMob for monetization.",
    status: "active",
    tags: ["Swift", "iOS", "GeoJSON", "MapKit"],
    link: "/whichhood",
    image: "/projects/whichhood.png",
  },
  {
    title: "Hackintosh Build",
    description:
      "Converted a Dell Optiplex 5080 Micro (Comet Lake) into a fully functional macOS workstation using OpenCore. Custom USB mapping, kext configuration, and iterative boot debugging. EFI published for other 5080 Micro owners.",
    status: "completed",
    tags: ["OpenCore", "macOS", "Hardware", "Networking"],
    link: "https://github.com/mitchellbuehler/optiplex-5080-hackintosh",
    image: "/projects/hackintosh.jpg",
  },
  // ADD MORE PROJECTS — copy the structure above.
];

// -----------------------------------------------------------
// SOCIAL LINKS
// -----------------------------------------------------------
export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/mbuehler1/",
  github: "https://github.com/mitchellbuehler",
  // twitter: "https://twitter.com/YOUR_HANDLE",
};

// -----------------------------------------------------------
// CONTACT FORM CONFIG
// -----------------------------------------------------------
export const contactConfig = {
  formspreeId: "maqlkzvb",
  heading: "Get in Touch",
  subheading:
    "Have a question, want to collaborate, or just want to connect? Drop me a note.",
};

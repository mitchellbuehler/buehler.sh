// ============================================================
// SITE CONTENT — Edit this file to update all website content.
// Components import from here so content changes never
// require touching UI code.
// ============================================================

export const siteConfig = {
  name: "Mitchell",
  title: "Sales Engineer",
  company: "Tanium",
  domain: "Autonomous IT & Cybersecurity",
  location: "Chicago, IL",
  tagline: "Bridging the gap between complex technology and business outcomes.",
  description:
    "Sales Engineer specializing in Autonomous IT and endpoint management. I help enterprise organizations understand, evaluate, and realize value from security and operations platforms — translating deep technical capabilities into measurable business impact.",
};

// -----------------------------------------------------------
// ABOUT / BIO
// -----------------------------------------------------------
export const about = {
  summary: [
    "I'm a Sales Engineer working at the intersection of cybersecurity, IT operations, and enterprise transformation. My role sits between the deeply technical and the strategically commercial — running proof-of-value engagements, building executive business cases, and delivering demos that turn complexity into clarity.",
    "Beyond the day job, I'm a builder. I develop apps, tinker with hardware projects, and renovate a 1920s home in one of Chicago's most architecturally significant neighborhoods. I believe the best technical minds are the ones who never stop being curious.",
  ],
  expertise: [
    "Endpoint Security & Management",
    "Proof-of-Value Engagements",
    "Technical Sales & Demo Delivery",
    "Competitive Positioning",
    "Executive Business Case Development",
    "Enterprise IT Operations",
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
    role: "Sales Engineer",
    company: "Tanium",
    period: "Present",
    description:
      "Leading technical sales motions for enterprise accounts in the Autonomous IT and cybersecurity space.",
    highlights: [
      "Run end-to-end proof-of-value engagements for Fortune 500 prospects",
      "Built and delivered executive business case materials driving multi-million dollar ELA approvals",
      "Developed 'Demo the Demo' enablement program for the SE team",
      "Competitive positioning and technical differentiation across endpoint management landscape",
    ],
  },
  // ADD MORE ROLES — copy the structure above:
  // {
  //   role: "Previous Title",
  //   company: "Previous Company",
  //   period: "2020 – 2023",
  //   description: "One-sentence summary.",
  //   highlights: ["Achievement 1", "Achievement 2"],
  // },
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
}

export const projects: ProjectItem[] = [
  {
    title: "Which Hood",
    description:
      "An iOS app that identifies which Chicago neighborhood you're currently in using GPS and GeoJSON boundary data. Built with Swift, integrating AdMob for monetization.",
    status: "active",
    tags: ["Swift", "iOS", "GeoJSON", "MapKit"],
  },
  {
    title: "Hackintosh Build",
    description:
      "Converted a Dell Optiplex 5080 Micro (Comet Lake) into a fully functional macOS workstation using OpenCore. Custom USB mapping, kext configuration, and iterative boot debugging.",
    status: "completed",
    tags: ["OpenCore", "macOS", "Hardware", "Networking"],
  },
  // ADD MORE PROJECTS — copy the structure above.
];

// -----------------------------------------------------------
// SOCIAL LINKS
// -----------------------------------------------------------
export const socialLinks = {
  linkedin: "https://linkedin.com/in/YOUR_LINKEDIN", // Replace
  github: "https://github.com/YOUR_GITHUB",           // Replace or remove
  // twitter: "https://twitter.com/YOUR_HANDLE",
};

// -----------------------------------------------------------
// CONTACT FORM CONFIG
// -----------------------------------------------------------
export const contactConfig = {
  formspreeId: "FORMSPREE_FORM_ID", // Replace with your Formspree form ID
  heading: "Get in Touch",
  subheading:
    "Have a question, want to collaborate, or just want to connect? Drop me a note.",
};

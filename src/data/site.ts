export const profile = {
  name: "Akbar CP",
  role: "Full Stack & Flutter Developer",
  location: "Kochi, Kerala, India",
  email: "hello@akbarcp.com",
  since: 2020,
  summary:
    "I design and build digital products that solve real-world problems — from real-time vessel tracking to AI-assisted learning apps.",
  about: [
    "I'm a developer based in Kochi who has been shipping mobile apps since 2020. I started out freelancing on Fiverr, owning projects end to end — from the first requirements call to the App Store listing.",
    "Since then I've helped build Eduport, one of Kerala's leading EdTech platforms, and today I lead mobile development for MarineRadar at Lascade, tracking more than a million ships worldwide in real time.",
    "I care about the whole loop: think it through, build it properly, launch it, then keep making it better.",
  ],
};

export const socials = [
  { label: "GitHub", handle: "am607", url: "https://github.com/am607" },
  { label: "LinkedIn", handle: "in/akbarcp", url: "https://www.linkedin.com/in/akbarcp/" },
  { label: "X", handle: "@AkbarMasterpadi", url: "https://x.com/AkbarMasterpadi" },
];

export type Project = {
  name: string;
  org: string;
  year: string;
  blurb: string;
  highlights: string[];
  stack: string[];
  links: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    name: "MarineRadar",
    org: "Lascade",
    year: "2024 — now",
    blurb:
      "A real-time vessel tracking app that combines AIS and satellite data to follow more than 1 million ships worldwide.",
    highlights: ["Live map with streaming positions", "AIS + satellite data", "Android & iOS"],
    stack: ["Flutter", "Django", "Socket.io", "Google Maps API", "Docker"],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.lascade.marinetracker&hl=en_IN",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/in/app/marineradar-vessel-finder/id6560109315",
      },
    ],
  },
  {
    name: "Eduport Learning App",
    org: "Eduport",
    year: "2022 — 2024",
    blurb:
      "The learning app behind one of Kerala's leading EdTech platforms, with “Eduport Adapt” AI for personalised learning and gamified engagement.",
    highlights: ["AI-personalised learning paths", "Video streaming", "Gamified progress"],
    stack: ["Flutter", "Firebase", "Clean Architecture", "Analytics"],
    links: [
      { label: "Web", url: "https://web.eduport.app/" },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.irah.eduportlms&hl=en_IN",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/in/app/eduport-sslc-11-12-science/id6443499408",
      },
    ],
  },
  {
    name: "Client apps",
    org: "Freelance",
    year: "2020 — 2022",
    blurb:
      "Mobile applications for clients around the world via Fiverr, owning the full lifecycle from requirements to store release.",
    highlights: ["End-to-end delivery", "UI/UX design", "Store deployment"],
    stack: ["Flutter", "Firebase", "API Integration"],
    links: [],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    company: "Lascade",
    role: "Full Stack Developer",
    period: "Jun 2024 — Present",
    location: "Kochi, India",
    description:
      "Spearheading mobile development for MarineRadar, a real-time vessel tracking application built on AIS and satellite data.",
    technologies: ["Flutter", "Dart", "Django", "Docker", "Google Maps API", "Socket.io", "REST APIs", "DevOps"],
  },
  {
    company: "Eduport Pvt Ltd",
    role: "Flutter Developer",
    period: "Aug 2022 — Jun 2024",
    location: "Kochi, India",
    description:
      "Key contributor to the Eduport Learning App, featuring “Eduport Adapt” AI for personalised learning and gamified student engagement.",
    technologies: ["Flutter", "Firebase", "Clean Architecture", "Video Streaming", "Analytics"],
  },
  {
    company: "Freelance",
    role: "Flutter Developer",
    period: "Mar 2020 — Apr 2022",
    location: "Remote",
    description:
      "Delivered mobile applications for diverse clients on Fiverr, managing everything from requirement gathering to app store deployment.",
    technologies: ["Flutter", "Firebase", "UI/UX Design", "API Integration"],
  },
];

export const skills = [
  { group: "Mobile", items: ["Flutter", "Dart", "Firebase", "Google Maps", "Video streaming"] },
  { group: "Backend", items: ["Django", "REST APIs", "Socket.io", "Docker", "DevOps"] },
  { group: "Craft", items: ["Clean Architecture", "UI/UX design", "Analytics", "Store releases"] },
];

export const process = [
  { step: "01", title: "Think", text: "Ideation & strategy — understand the problem before writing code." },
  { step: "02", title: "Build", text: "Engineering & craft — clean architecture that's easy to change." },
  { step: "03", title: "Launch", text: "Deployment & release — to the stores, to real users." },
  { step: "04", title: "Scale", text: "Growth & optimisation — measure, learn, and improve." },
];

export const site = {
  name: "Jaan Siparsa",
  email: "jaansi@berkeley.edu",
} as const;

export type PageSlug = "about" | "creations" | "curations" | "experiences";

export const pages: Record<PageSlug, { title: string; paragraphs: string[] }> =
  {
    about: {
      title: "about",
      paragraphs: [
        "Hi, I'm Jaansi",
        "I am from Michigan and Punjab and Andhra Pradesh and Maryland and Florida and California",
        "I like learning && building && sharing knowledge && helping people!",
        "Super glad you're here <3",
      ],
    },
    creations: {
      title: "creations",
      paragraphs: ["work in progress! adding more soon"],
    },
    curations: {
      title: "curations",
      paragraphs: [
        "I suppose we are what we consume",
        "an archive of things that left a mark.",
      ],
    },
    experiences: {
      title: "experiences",
      paragraphs: ["fun things I have been up to"],
    },
  };

export const aboutLinks = [
  { label: "email", href: "mailto:jaansi@berkeley.edu" },
  { label: "github", href: "https://github.com/jaansiparsa" },
  { label: "linkedin", href: "https://www.linkedin.com/in/jaansi" },
  { label: "beli", href: "https://beliapp.co/app/jaansi" },
] as const;

export type DesktopItem = {
  id: PageSlug;
  icon: string;
  label: string;
  to: string;
  top: string;
  left?: string;
  right?: string;
  size?: "md" | "lg";
};

export const desktopItems: DesktopItem[] = [
  {
    id: "about",
    icon: "/purplefolder.png",
    label: "about",
    to: "/about",
    top: "30%",
    left: "12%",
  },
  {
    id: "creations",
    icon: "/yellowfolder.png",
    label: "creations",
    to: "/creations",
    top: "7%",
    left: "38%",
    size: "md",
  },
  {
    id: "curations",
    icon: "/greenfolder.png",
    label: "curations",
    to: "/curations",
    top: "30%",
    right: "5%",
  },
  {
    id: "experiences",
    icon: "/pinkfolder.png",
    label: "experiences",
    to: "/experiences",
    top: "52%",
    right: "8%",
  },
];

export type Experience = {
  id: string;
  experience: string;
  period?: string;
  location?: string;
  image?: string;
  work?: string;
  lines?: string[];
};

export const experiences: Experience[] = [
  {
    id: "nooks",
    experience: "swe intern @ Nooks",
    period: "fall 2026",
    location: "san francisco",
    image: "/experiences/nooks.png",
  },
  {
    id: "doordash",
    experience: "swe intern @ Doordash",
    location: "san francisco",
    period: "summer 2026",
  },
  {
    id: "met-student-board",
    experience: "giving back to M.E.T.",
    period: "may 2026",
    image: "/experiences/studentboard.jpg",
    lines: [
      "elected President for 2026-27 academic year, VP of Marketing & Engagement for 2025-26",
      "if you're at the intersection of business x tech and interested in partnering, please reach out!",
    ],
  },
  {
    id: "brex",
    experience: "swe intern @ Brex",
    period: "fall 2025",
    location: "new york city",
    image: "/experiences/brexinterns.jpeg",
    work: "worked on bill pay and fraud detection agents",
  },
  {
    id: "nyc",
    experience: "moved to nyc at 18",
    image: "/experiences/nyc.jpeg",
    lines: [
      "lived in brooklyn, jersey city, and a 10-woman bedroom in a UWS hostel!",
      "knew no one!  had lots of fun",
    ],
  },
  {
    id: "ml-at-berkeley",
    experience: "education & research committee @ machine learning at berkeley",
    period: "2025 — present",
  },
  {
    id: "berkeley-education",
    experience: "ML in education research",
    period: "2024 — 2025",
    lines: [
      "worked under Zach Pardos on OATutor",
      "modeling student knowledge representations with Bayesian Knowledge Tracing",
    ],
  },
  {
    id: "taro",
    experience: "fullstack @ Taro",
    period: "summer 2025",
    lines: [
      "actually learned how to code (thanks to incredible mentors, Alex and Rahul)",
      "revamped courses tab and built homepage (check it out [here](https://www.jointaro.com/)!)",
      "acquired by Handshake in Dec 2025",
    ],
  },
  {
    id: "adobe",
    experience: "data & AI engineering @ Adobe",
    period: "summer 2025",
    image: "/experiences/adobe.png",
    lines: [
      "video marketing AI",
      "led team for contract project with [Delta Consulting](https://delta.studentorg.berkeley.edu/)",
    ],
  },
  {
    id: "skydiving",
    experience: "jumped out of a plane",
    period: "may 2025",
    image: "/experiences/skydiving.jpg",
  },
  {
    id: "sony",
    experience: "machine learning for Sony Playstation",
    period: "spring 2025",
    image: "/experiences/sony.png",
    lines: [
      "NLP for harmful text detection in PlayStation gaming chats",
      "contract project with [Berkeley Codebase](https://codebase.studentorg.berkeley.edu/)",
    ],
  },
  {
    id: "hair-dye",
    experience: "dyed hair for the first time",
    period: "december 2024",
    image: "/experiences/hairdye.png",
    lines: [
      "thought it would be very short term",
      "have dyed it three times since",
      "lowkey addicted now",
    ],
  },
  {
    id: "unicef",
    experience: "built software for UNICEF",
    period: "fall 2024",
    work: "learning passport — cost modeling & course recommendations",
  },
  {
    id: "berkeley-start",
    experience: "started at uc berkeley",
    period: "august 2024",
    image: "/experiences/biggame.png",
    lines: [
      "pursuing dual degrees in electrical engineering & computer science and business administration",
      "M.E.T. program",
      "go bears!",
    ],
  },
  {
    id: "live",
    experience: "solved puzzles with kids",
    period: "2023 — 2024",
    image: "/experiences/teachinglive.png",
    lines: [
      "TA for [LIVE by Po-Shen Loh](https://live.poshenloh.com/)",
      "taught 200+ students from 5+ countries",
      "I love teaching so much <3",
    ],
  },
];

export type CreationKind = "project" | "writing" | "art" | "other";

export type Creation = {
  id: string;
  kind: CreationKind;
  title: string;
  description: string[];
  href?: string;
};

export const creations: Creation[] = [
  {
    id: "discover-met",
    kind: "project",
    title: "M.E.T. student blog",
    description: [
      "an inside look at engineering x business at Berkeley-- written by students, for students",
    ],
    href: "https://discovermet.vercel.app/",
  },
  {
    id: "hydrate",
    kind: "project",
    title: "hydrate",
    description: [
      "dating app where you get matched based on how yummy you think different water fountains are",
      "unfortunately did not win most useless hack at penn apps 2025",
    ],
    href: "https://upenn-hydrate.vercel.app/",
  },
  {
    id: "foodwell",
    kind: "project",
    title: "foodwell",
    description: [
      "end-to-end instacart but better (from taste profile to meal plans to ingredients at ur door!)",
      "won first place at YC Challenge at HackMIT 2025",
    ],
  },
];

export const curationsBooks = [
  {
    title: "a beautiful mind",
    cover: "/curations/abeautifulmind.jpg",
  },
  {
    title: "a brief history of time",
    cover: "/curations/abriefhistoryoftime.jpg",
  },
  {
    title: "the book thief",
    cover: "/curations/thebookthief.png",
  },
  {
    title: "the poppy war",
    cover: "/curations/thepoppywar.jpg",
  },
] as const;

export function isPageSlug(value: string | undefined): value is PageSlug {
  return value !== undefined && value in pages;
}

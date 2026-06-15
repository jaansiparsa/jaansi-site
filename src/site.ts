export const site = {
  name: "Jaansi Parsa",
  email: "jaansi@berkeley.edu",
} as const;

export type PageSlug = "about" | "creations" | "curations" | "experiences";

export const pages: Record<PageSlug, { title: string; paragraphs: string[] }> =
  {
    about: {
      title: "about",
      paragraphs: [
        "Hi, I'm Jaansi",
        "I am from Michigan and Punjab and Telengana and Maryland and Florida and California",
        "I like learning && building && sharing knowledge && helping people!",
        "Super glad you're here <3",
      ],
    },
    creations: {
      title: "creations",
      paragraphs: ["more coming soon!"],
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
    period: "fall 2026, san francisco",
    image: "/experiences/nooks.png",
  },
  {
    id: "doordash",
    experience: "machine learning for Doordash ads economics",
    lines: [
      "thinking about ads auctions and optimization",
      "ACTUALLY getting to apply knowledge from my favorite classes (yay!)",
    ],
    period: "summer 2026, san francisco",
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
    period: "fall 2025, new york city",
    image: "/experiences/brexinterns.jpeg",
    work: "worked on bill pay and fraud detection agents",
  },
  {
    id: "nyc",
    experience: "moved to nyc at 19",
    image: "/experiences/nyc.jpeg",
    lines: [
      "lived in brooklyn, jersey city, and a 10-woman bedroom in a UWS hostel!",
      "knew no one! made friends ate food had lots of fun",
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
    lines: [
      "added course recommendations feature to Learning Passport, UNICEF's learning platform used by 6M+ students in developing countries",
    ],
  },
  {
    id: "berkeley-start",
    experience: "started at UC Berkeley",
    period: "august 2024",
    image: "/experiences/biggame.png",
    lines: [
      "pursuing dual degrees in electrical engineering & computer science and business administration as part of the Management, Entrepreneurship, and Technology (M.E.T.) program",
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
    ],
  },
];

export type CreationKind =
  | "project"
  | "blog"
  | "essay"
  | "writing"
  | "art"
  | "video"
  | "other";

export type Creation = {
  id: string;
  kind: CreationKind;
  title: string;
  description: string[];
  date?: string;
  href?: string;
};

export const creations: Creation[] = [
  {
    id: "passport-pictures-and-other-strangers",
    kind: "essay",
    title: "Passport Pictures and Other Strangers",
    description: ["My passport arrived in the mail today."],
    date: "June 14, 2026",
    href: "/blog/passport-pictures-and-other-strangers",
  },
  {
    id: "my-first-puzzles",
    kind: "blog",
    title: "My First Puzzles",
    description: ["Akari"],
    date: "June 13, 2026",
    href: "/blog/my-first-puzzles",
  },
  // {
  //   id: "my-introductory-foray-into-puzzles",
  //   kind: "blog",
  //   title: "My Introductory Foray into Puzzles",
  //   description: ["The first time I was happy Claude let me down"],
  //   date: "June 13, 2026",
  //   href: "/blog/my-introductory-foray-into-puzzles",
  // },
  {
    id: "satellite",
    kind: "video",
    title: "Satellite",
    description: ["Showing my world my world!"],
    date: "June 10, 2026",
    href: "/video/satellite",
  },
  {
    id: "what-is-your-goal-in-life",
    kind: "essay",
    title: "What is your goal in life?",
    description: ["I hope it is not happiness."],
    date: "May 23, 2026",
    href: "/blog/what-is-your-goal-in-life",
  },
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
    title: "Hydrate",
    description: [
      "dating app where you get matched based on how yummy you think different water fountains are",
      "unfortunately did not win most useless hack at penn apps 2025",
    ],
    href: "https://upenn-hydrate.vercel.app/",
  },
  {
    id: "foodwell",
    kind: "project",
    title: "Foodwell",
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

export const curationsMusic = [
  {
    title: "what you know",
    cover: "/curations/music/whatyouknow.jpeg",
  },
  {
    title: "white keys",
    cover: "/curations/music/whitekeys.jpg",
  },
  {
    title: "open my door",
    cover: "/curations/music/openmydoor.jpeg",
  },
  {
    title: "empire ants",
    cover: "/curations/music/empireants.jpeg",
  },
  {
    title: "die hard",
    cover: "/curations/music/diehard.jpg",
  },
  {
    title: "matt maltese entire discography",
    cover: "/curations/music/mattmaltese.jpg",
  },
] as const;

export function isPageSlug(value: string | undefined): value is PageSlug {
  return value !== undefined && value in pages;
}

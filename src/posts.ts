import articleMarkdown from "./content/what-is-your-goal-in-life.md?raw";
import firstPuzzlesMarkdown from "./content/my-first-puzzles.md?raw";
import forayMarkdown from "./content/my-introductory-foray-into-puzzles.md?raw";
import passportMarkdown from "./content/passport-pictures-and-other-strangers.md?raw";

export type BlogPost = {
  slug: string;
  title: string;
  description: string[];
  date?: string;
  body: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "passport-pictures-and-other-strangers",
    title: "Passport Pictures and Other Strangers",
    description: ["My passport arrived in the mail today."],
    date: "June 14, 2026",
    body: passportMarkdown,
  },
  {
    slug: "my-first-puzzles",
    title: "My First Puzzles",
    description: ["Akari"],
    date: "June 13, 2026",
    body: firstPuzzlesMarkdown,
  },
  {
    slug: "my-introductory-foray-into-puzzles",
    title: "My Introductory Foray into Puzzles",
    description: ["The first time I was happy Claude let me down"],
    date: "June 13, 2026",
    body: forayMarkdown,
  },
  {
    slug: "what-is-your-goal-in-life",
    title: "What is your goal in life?",
    description: ["I hope it is not happiness."],
    date: "May 23, 2026",
    body: articleMarkdown,
  },
];

export function getBlogPost(slug: string | undefined): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function isBlogPostSlug(
  slug: string | undefined,
): slug is BlogPost["slug"] {
  return blogPosts.some((post) => post.slug === slug);
}

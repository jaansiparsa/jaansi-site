import articleMarkdown from "./content/what-is-your-goal-in-life.md?raw";

export type BlogPost = {
  slug: string;
  title: string;
  description: string[];
  body: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-your-goal-in-life",
    title: "What is your goal in life?",
    description: ["I hope it is not happiness."],
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

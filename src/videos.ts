export type Video = {
  slug: string;
  title: string;
  description: string[];
  date?: string;
  youtubeId: string;
};

export const videos: Video[] = [
  {
    slug: "u4kscpqtfiq",
    title: "Satellite",
    description: ["Showing my world my world!"],
    date: "June 10, 2026",
    youtubeId: "U4ksCpQTFIQ",
  },
];

export function getVideo(slug: string | undefined): Video | undefined {
  return videos.find((video) => video.slug === slug);
}

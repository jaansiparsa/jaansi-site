export type Video = {
  slug: string;
  title: string;
  description: string[];
  date?: string;
  youtubeId?: string;
  src?: string;
  intro?: string[];
  footer?: string[];
};

export const videos: Video[] = [
  {
    slug: "flipper",
    title: "Flipper",
    description: ["a heads up style karaoke game"],
    intro: ["currently in beta testing! on app store soon xx"],
    src: "/karaokedemo.MP4",
    footer: [
      "for now here is a vid of my friends playing to pass the time waiting for the SF fireworks",
    ],
  },
  {
    slug: "satellite",
    title: "Satellite",
    description: ["Showing my world my world!"],
    date: "June 10, 2026",
    youtubeId: "U4ksCpQTFIQ",
  },
];

export function getVideo(slug: string | undefined): Video | undefined {
  return videos.find((video) => video.slug === slug);
}

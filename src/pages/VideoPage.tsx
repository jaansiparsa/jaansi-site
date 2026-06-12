import { Link, Navigate, useParams } from "react-router-dom";
import { getVideo } from "../videos";
import "./VideoPage.css";
import "./ContentPage.css";

export function VideoPage() {
  const { slug } = useParams();
  const video = getVideo(slug);

  if (!video) return <Navigate to="/creations" replace />;

  return (
    <article className="content-page video-page">
      <Link to="/creations" className="content-back">
        ← creations
      </Link>
      <h1>{video.title}</h1>
      {video.description.map((line) => (
        <p key={line} className="video-subtitle">
          {line}
        </p>
      ))}
      {video.date && <time className="video-date">{video.date}</time>}
      <div className="video-embed">
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </article>
  );
}

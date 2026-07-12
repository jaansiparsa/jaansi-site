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
      {video.intro?.map((line) => (
        <p key={line} className="video-body">
          {line}
        </p>
      ))}
      <div className="video-embed">
        {video.src ? (
          <video controls playsInline preload="metadata" title={video.title}>
            <source src={video.src} type="video/mp4" />
          </video>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>
      {video.footer?.map((line) => (
        <p key={line} className="video-body">
          {line}
        </p>
      ))}
    </article>
  );
}

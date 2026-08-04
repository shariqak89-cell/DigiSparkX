import { PlayCircle } from "lucide-react";

type Video = {
  title: string;
  description?: string | null;
  youtubeUrl: string;
  youtubeId: string;
  videoFileUrl?: string | null;
  source?: string | null;
  category?: string | null;
};

export function YouTubeSlider({ videos }: { videos: Video[] }) {
  const list = videos.length ? videos : [];
  const loop = [...list, ...list];

  return (
    <div className="youtube-slider" aria-label="DigiSparkX course videos">
      <div className="youtube-track">
        {loop.map((video, index) => (
          <a key={`${video.youtubeId}-${index}`} className="youtube-card" href={video.youtubeUrl} target="_blank" rel="noreferrer">
            <span className="youtube-thumb">
              {video.videoFileUrl ? (
                <video src={video.videoFileUrl} muted loop playsInline preload="metadata" />
              ) : (
                <img src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`} alt={video.title} loading="lazy" />
              )}
              <span><PlayCircle size={38} fill="currentColor" /></span>
            </span>
            <small>{video.category || "Course Video"}</small>
            <h3>{video.title}</h3>
            {video.description && <p>{video.description}</p>}
          </a>
        ))}
      </div>
    </div>
  );
}

import { PlayCircle } from "lucide-react";

type Video = {
  title: string;
  description?: string | null;
  youtubeUrl?: string | null;
  youtubeId?: string | null;
  videoFileUrl?: string | null;
  source?: string | null;
  category?: string | null;
};

function videoHref(video: Video) {
  if (video.youtubeUrl) return video.youtubeUrl;
  if (video.youtubeId) return `https://www.youtube.com/watch?v=${video.youtubeId}`;
  return video.videoFileUrl || "#";
}

function videoThumb(video: Video) {
  return video.youtubeId ? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg` : "";
}

export function YouTubeSlider({ videos }: { videos: Video[] }) {
  const list = videos.length ? videos : [];
  const loop = [...list, ...list];

  return (
    <div className="youtube-slider" aria-label="DigiSparkX course videos">
      <div className="youtube-track">
        {loop.map((video, index) => (
          <a key={`${video.youtubeId || video.videoFileUrl || video.title}-${index}`} className="youtube-card" href={videoHref(video)} target="_blank" rel="noreferrer">
            <span className="youtube-thumb">
              {video.videoFileUrl ? (
                <video src={video.videoFileUrl} muted loop playsInline preload="metadata" />
              ) : (
                <img src={videoThumb(video)} alt={video.title} loading="lazy" />
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

export function YouTubeGrid({ videos }: { videos: Video[] }) {
  return (
    <div className="youtube-grid" aria-label="DigiSparkX course videos grid">
      {videos.map((video, index) => (
        <a key={`${video.youtubeId || video.videoFileUrl || video.title}-${index}`} className="youtube-card" href={videoHref(video)} target="_blank" rel="noreferrer">
          <span className="youtube-thumb">
            {video.videoFileUrl ? (
              <video src={video.videoFileUrl} muted loop playsInline preload="metadata" />
            ) : (
              <img src={videoThumb(video)} alt={video.title} loading="lazy" />
            )}
            <span><PlayCircle size={38} fill="currentColor" /></span>
          </span>
          <small>{video.category || "Course Video"}</small>
          <h3>{video.title}</h3>
          {video.description && <p>{video.description}</p>}
        </a>
      ))}
    </div>
  );
}

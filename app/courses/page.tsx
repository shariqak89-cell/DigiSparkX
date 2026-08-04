import { CourseCard } from "@/components/Cards";
import { QuoteBand } from "@/components/DigiJavedStyle";
import { YouTubeSlider } from "@/components/YouTubeSlider";
import { courses } from "@/data/content";
import { getPublishedCourseVideos } from "@/lib/published-content";

export const metadata = { title: "Courses" };
export const dynamic = "force-dynamic";

const tracks = [
  ["AI Foundation", "Learn AI basics, prompt engineering, content creation and automation workflows."],
  ["Digital Growth", "SEO, Google Ads, Facebook Ads, social media marketing and personal branding."],
  ["Web Development", "Website development, frontend, backend, full stack and deployment workflows."],
  ["Creative Skills", "Graphic design, Canva, Photoshop, video editing and motion graphics."]
];

export default async function CoursesPage() {
  const videos = await getPublishedCourseVideos();

  return (
    <>
      <section className="section program-hero">
        <div className="shell">
          <span className="eyebrow yellow">DigiSparkX Courses</span>
          <h1>Learn practical digital and AI skills with real projects.</h1>
          <p className="lead">Choose a course, learn by doing, build your portfolio and turn your knowledge into career, freelancing or business opportunities.</p>
          <div className="metric-row"><span>Project-Based</span><span>Mentor Guidance</span><span>Certificate</span><span>Career Ready</span></div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head"><div><span className="eyebrow pink">Course tracks</span><h2>Pick the skill path that matches your goal.</h2></div></div>
          <div className="info-grid">{tracks.map(([title, text]) => <article className="info-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section videos">
        <div className="shell">
          <div className="section-head"><div><span className="eyebrow pink">Learning videos</span><h2>Watch DigiSparkX lessons and creator classes.</h2><p>Videos from the DigiSparkX YouTube channel and backend uploads appear here.</p></div></div>
          <YouTubeSlider videos={videos} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-10">
            <span className="eyebrow pink">All courses</span>
            <h2 className="mt-4 text-5xl font-black">Professional courses for real-world skills.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => <CourseCard key={course.slug} course={course} />)}
          </div>
        </div>
      </section>

      <QuoteBand />
    </>
  );
}

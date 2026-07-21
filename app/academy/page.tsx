import { CourseCard } from "@/components/Cards";
import { SectionHeader } from "@/components/SectionHeader";
import { courses } from "@/data/content";

export const metadata = { title: "Academy" };

export default function AcademyPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="DigiSparkX Academy" title="Learn professional digital skills with practical training." text="Courses are built around real tools, real workflows and portfolio-building assignments." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => <CourseCard key={course.slug} course={course} />)}
        </div>
      </div>
    </section>
  );
}

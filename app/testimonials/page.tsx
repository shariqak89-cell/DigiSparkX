import { TestimonialCard } from "@/components/Cards";
import { ReviewForm } from "@/components/ReviewForm";
import { SectionHeader } from "@/components/SectionHeader";
import { testimonials } from "@/data/content";

export const metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  const average = testimonials.reduce((sum, item) => sum + item.rating, 0) / testimonials.length;
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="Testimonials & Ratings" title={`${average.toFixed(1)} average rating from approved reviews.`} text="Visitors can submit ratings, and admin approval keeps public reviews high-quality and trustworthy." />
        <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((item) => <TestimonialCard key={item.name} item={item} />)}
          </div>
          <ReviewForm />
        </div>
      </div>
    </section>
  );
}

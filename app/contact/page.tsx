import { ContactAside, DigiContactForm, PageHero } from "@/components/DigiJavedStyle";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Get in touch" title="Let's build the future together." text="Have questions about our programs, corporate training, partnerships or digital services? Reach out to the DigiSparkX team." />
      <section className="section">
        <div className="shell contact-grid">
          <div>
            <span className="eyebrow pink">Contact form</span>
            <h2>Tell us your goal, interest area and requirement.</h2>
            <p className="lead">Use this form for the AI Foundation Program, corporate training, schools, digital products, website development, automation or general enquiries.</p>
            <DigiContactForm />
          </div>
          <ContactAside />
        </div>
      </section>
    </>
  );
}

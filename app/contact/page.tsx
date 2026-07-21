import { ContactAside, DigiContactForm, PageHero } from "@/components/DigiJavedStyle";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Request a quote" title="Tell us what you want to create." text="Share the service, project goal, budget and deadline. We’ll help shape the rest." />
      <section className="section">
        <div className="shell contact-grid">
          <div>
            <span className="eyebrow pink">Project details</span>
            <h2>A better estimate starts with a clear brief.</h2>
            <DigiContactForm />
          </div>
          <ContactAside />
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import { BrainCircuit, Check, Globe2, Palette, UserRound } from "lucide-react";
import { PageHero, QuoteBand } from "@/components/DigiJavedStyle";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  const journey = [
    ["1989", "Mohammed Javed began his professional journey with a strong foundation in business, learning, discipline and client service."],
    ["1994", "Adopted computer technology, digital publishing and modern graphic workflows, building a lifelong habit of learning new tools."],
    ["35+ Years of Excellence", "More than three decades of practical experience now power DigiSparkX across websites, branding, digital marketing, AI, automation and business growth."]
  ];
  const whyChoose = [
    "35+ Years of Professional Experience",
    "Modern Website Development",
    "Professional Graphic Designing",
    "E-commerce Development",
    "Complete Branding Solutions",
    "AI & Business Automation",
    "Digital Marketing Strategy",
    "SEO & Ads Support",
    "Fast Turnaround Time",
    "Personalized Customer Support",
    "Practical Training & Student Mentorship",
    "Quality Assurance on Every Project"
  ];

  return (
    <>
      <PageHero eyebrow="About Us – DigiSparkX" title="Crafting Quality. Building Trust. Inspiring the Next Generation." text="From a small vision to a complete digital services and learning company." />
      <section className="section about-story-section">
        <div className="shell about-story-grid">
          <div className="about-story-title">
            <span className="eyebrow pink">Our story</span>
            <h2>Founded with quality, honesty and a love for learning.</h2>
            <div className="about-stamp"><b>35+</b><span>Years of experience</span></div>
          </div>
          <div className="about-rich-copy">
            <p>Founded with the vision of helping businesses grow smarter, DigiSparkX is led by CEO Mohammed Javed and built on a strong foundation of practical experience, honesty, creativity and continuous learning. What began as a small professional journey has grown into a trusted digital company offering website development, branding, digital marketing, AI automation, software solutions, e-commerce and professional training.</p>
            <p>Driven by a passion for learning and innovation, Mohammed Javed embraced computer technology early, beginning with DOS-based systems and later mastering Windows-based publishing, design and digital workflows through professional training and continuous self-learning. This commitment to staying ahead of technology has helped DigiSparkX evolve with every generation of the digital industry.</p>
            <p>Today, DigiSparkX is not only a digital services company but also a complete creative and learning solutions company. Along with premium digital services, we provide Graphic Designing, Branding, Website Development, E-commerce Website Development, UI/UX Design, Digital Marketing Creatives, SEO, AI Automation, Business Automation, Software Development, Product Presentation and Professional Business Identity Design — helping businesses build a powerful brand from concept to completion.</p>
          </div>
        </div>
      </section>
      <section className="section dark-section about-capabilities">
        <div className="shell split">
          <div><Image src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80" alt="AI and digital automation by DigiSparkX" width={1200} height={900} /></div>
          <div>
            <span className="eyebrow yellow">Design, digital & AI</span>
            <h2>A complete creative partner for modern businesses.</h2>
            <p>One of our greatest strengths is our commitment to sharing knowledge. We proudly mentor students, aspiring designers, marketers and developers by providing practical industry experience, real client project guidance and professional direction. We believe that knowledge grows when it is shared, and we are dedicated to helping the next generation build successful careers in design, marketing and technology.</p>
            <p>Our experience extends beyond traditional digital services. Through years of continuous learning and professional collaborations, we have gained valuable exposure to modern business workflows, advanced graphic production techniques, e-commerce development, AI tools, automation systems and global design practices inspired by international standards.</p>
            <p>Now, the next generation including Junaid Javed, Iqra Javed and Fatima Javed is connected with the DigiSparkX vision, carrying forward a legacy of innovation, quality, customer satisfaction and trust.</p>
            <div className="feature-list">
              <div><Palette /><span><b>Creative design</b>Branding, graphics, UI/UX and business identity</span></div>
              <div><Globe2 /><span><b>Web & e-commerce</b>Websites, stores and online business solutions</span></div>
              <div><BrainCircuit /><span><b>AI automation</b>Smart systems that save time and improve response</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section about-products">
        <div className="shell about-highlight">
          <span className="eyebrow pink">What we deliver</span>
          <h2>From a single landing page to complete business automation.</h2>
          <p>Whether you need Websites, E-commerce Stores, Web Applications, Mobile Apps, UI/UX Design, Logo Design, Branding, Graphic Design, Social Media Creatives, SEO, Digital Marketing, Google Ads, Facebook Ads, Video Editing, AI Automation, Business Automation, CRM, ERP, Hosting, Domain Setup or Website Maintenance, DigiSparkX is your trusted partner for delivering premium quality with precision and on-time service.</p>
          <p>Every project we undertake reflects our commitment to excellence, creativity, attention to detail and customer satisfaction. From a single business profile to large-scale digital systems, our goal remains the same — to transform your ideas into outstanding digital products that leave a lasting impression.</p>
        </div>
      </section>
      <section className="section journey-section">
        <div className="shell">
          <div className="section-head centered"><div><span className="eyebrow pink">Our Journey</span><h2>Built step by step, decade by decade.</h2></div></div>
          <div className="journey-grid">{journey.map(([year, text]) => <article key={year}><b>{year}</b><p>{text}</p></article>)}</div>
        </div>
      </section>
      <section className="section mission-section">
        <div className="shell mission-grid">
          <article><span className="eyebrow pink">Our Mission</span><h2>Deliver quality and empower learning.</h2><p>To deliver premium-quality digital and creative solutions while empowering businesses with modern branding, technology and AI, and helping aspiring professionals gain practical industry experience through mentorship and real-world learning.</p></article>
          <article><span className="eyebrow yellow">Our Vision</span><h2>Traditional discipline, modern technology.</h2><p>To become one of India&apos;s trusted digital solution companies by combining practical experience with modern technology, innovation, AI automation and continuous learning.</p></article>
        </div>
      </section>
      <section className="section why-section">
        <div className="shell">
          <div className="section-head"><div><span className="eyebrow pink">Why Choose DigiSparkX?</span><h2>Reliable quality with complete support.</h2></div></div>
          <div className="why-grid">{whyChoose.map((item) => <div key={item}><Check size={18} strokeWidth={3} /><span>{item}</span></div>)}</div>
        </div>
      </section>
      <QuoteBand />
    </>
  );
}

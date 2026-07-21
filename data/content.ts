import {
  BrainCircuit,
  Code2,
  Film,
  Globe2,
  GraduationCap,
  LineChart,
  Megaphone,
  Palette,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  Users,
  Workflow
} from "lucide-react";

export const company = {
  name: "DigiSparkX",
  tagline: "Grow Smarter, Go Digital",
  email: "digisparkxuniverse@gmail.com",
  ceo: "Mohammed Javed",
  directors: ["Junaid Javed", "Iqra Javed", "Fatima Javed"],
  address: "DigiSparkX, Delhi, India",
  phone: "+91 98992 84296",
  logo: "/brand/digisparkx-logo-transparent.png",
  mapQuery: "Delhi India"
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

export const allLinks = [
  ...navItems,
  { href: "/projects", label: "Projects" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/sitemap", label: "Sitemap" }
];

export const stats = [
  { value: "35+", label: "Years business legacy" },
  { value: "120+", label: "Digital & print clients served" },
  { value: "40+", label: "Skills taught in academy" },
  { value: "99%", label: "Quality-first delivery mindset" }
];

export const serviceHighlights = [
  { title: "Build", text: "Websites, web apps, mobile apps, CRM, ERP and automation systems.", icon: Code2 },
  { title: "Brand", text: "Logo, identity, graphics, motion, social creatives and campaigns.", icon: Palette },
  { title: "Grow", text: "SEO, Google Ads, Facebook Ads, analytics, funnels and marketing.", icon: LineChart },
  { title: "Teach", text: "Professional courses, mentorship, practical projects and certificates.", icon: GraduationCap }
];

export const services = [
  {
    slug: "website-development",
    title: "Website Development",
    category: "Development",
    description: "Fast, secure and premium business websites built with modern UI, conversion strategy, SEO foundations and scalable architecture.",
    priceFrom: 14999,
    features: ["Responsive design", "SEO setup", "CMS-ready structure", "Performance optimization"],
    process: ["Discovery", "Wireframe", "Design", "Development", "QA", "Launch"],
    faqs: [{ q: "Can you redesign an old website?", a: "Yes, we can redesign, migrate and optimize existing websites." }]
  },
  {
    slug: "web-applications",
    title: "Web Applications",
    category: "Development",
    description: "Custom dashboards, portals, SaaS platforms and business tools designed for real operations and future scaling.",
    priceFrom: 49999,
    features: ["Role-based access", "Database design", "Admin dashboard", "API integrations"],
    process: ["Requirement mapping", "Architecture", "Sprint development", "Testing", "Deployment"],
    faqs: [{ q: "Do you build secure admin panels?", a: "Yes, with authentication, validation, logging and permissions." }]
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    category: "Development",
    description: "Android and iOS-ready app experiences for startups, education, commerce, booking and internal workflows.",
    priceFrom: 69999,
    features: ["Modern UI", "API backend", "Push-ready architecture", "Store deployment guidance"],
    process: ["Product scope", "Prototype", "Build", "Testing", "Release"],
    faqs: [{ q: "Can you build MVP apps?", a: "Yes, we build MVPs that can grow into full products." }]
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    category: "Design",
    description: "Research-led interfaces, wireframes, design systems and prototypes that feel beautiful and easy to use.",
    priceFrom: 9999,
    features: ["User flows", "Wireframes", "Figma designs", "Design systems"],
    process: ["Research", "Journey map", "Wireframe", "Visual design", "Prototype"],
    faqs: [{ q: "Do you provide source design files?", a: "Yes, final design files can be shared with the client." }]
  },
  {
    slug: "graphic-designing",
    title: "Graphic Designing",
    category: "Design",
    description: "High-impact social posts, brochures, banners, business profiles, thumbnails and marketing creatives.",
    priceFrom: 2999,
    features: ["Social media creatives", "Print-ready files", "Brand consistency", "Fast delivery"],
    process: ["Brief", "Moodboard", "Design", "Revision", "Delivery"],
    faqs: [{ q: "Can you design for printing too?", a: "Yes, files can be prepared for print and digital use." }]
  },
  {
    slug: "logo-branding",
    title: "Logo Design & Branding",
    category: "Branding",
    description: "Professional logo systems, typography, colors, brand guidelines and complete business identity kits.",
    priceFrom: 7999,
    features: ["Logo concepts", "Color palette", "Typography", "Brand guide"],
    process: ["Brand discovery", "Concepts", "Refinement", "Final assets"],
    faqs: [{ q: "Will the logo be unique?", a: "Yes, we create custom brand identities based on your positioning." }]
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    category: "Creative",
    description: "Reels, ads, course videos, YouTube edits, brand stories and professional promo cuts.",
    priceFrom: 4999,
    features: ["Cuts and transitions", "Subtitles", "Sound polish", "Brand styling"],
    process: ["Footage review", "Rough cut", "Final edit", "Export"],
    faqs: [{ q: "Do you make reels?", a: "Yes, we edit short-form vertical videos for social platforms." }]
  },
  {
    slug: "motion-graphics",
    title: "Motion Graphics",
    category: "Creative",
    description: "Animated explainers, logo reveals, promo motion, product animations and kinetic typography.",
    priceFrom: 9999,
    features: ["Logo animation", "Explainer motion", "Animated ads", "Sound sync"],
    process: ["Storyboard", "Styleframes", "Animation", "Final render"],
    faqs: [{ q: "Can you animate brand assets?", a: "Yes, we can animate your logo and design system." }]
  },
  {
    slug: "seo",
    title: "SEO",
    category: "Marketing",
    description: "Technical SEO, on-page strategy, content optimization and search growth systems.",
    priceFrom: 12000,
    features: ["Technical audit", "Keyword mapping", "Schema", "Content plan"],
    process: ["Audit", "Strategy", "Implementation", "Reporting"],
    faqs: [{ q: "Do you guarantee ranking?", a: "We do not promise fake guarantees; we build sustainable search improvements." }]
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "Marketing",
    description: "Full-funnel marketing campaigns across search, social, content, landing pages and analytics.",
    priceFrom: 15000,
    features: ["Campaign strategy", "Creatives", "Analytics", "Conversion focus"],
    process: ["Research", "Campaign setup", "Optimization", "Reporting"],
    faqs: [{ q: "Can you manage complete marketing?", a: "Yes, from creative to ads and reporting." }]
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    category: "Marketing",
    description: "Content calendars, creatives, reels strategy, community growth and brand engagement.",
    priceFrom: 10000,
    features: ["Content plan", "Post design", "Reel ideas", "Monthly reports"],
    process: ["Brand audit", "Calendar", "Publishing", "Optimization"],
    faqs: [{ q: "Do you create posts?", a: "Yes, we design and plan content for platforms." }]
  },
  {
    slug: "google-facebook-ads",
    title: "Google Ads & Facebook Ads",
    category: "Marketing",
    description: "Performance campaigns for leads, sales, traffic and remarketing with clear measurement.",
    priceFrom: 12000,
    features: ["Campaign setup", "Pixel tracking", "A/B testing", "Performance reporting"],
    process: ["Offer review", "Tracking setup", "Launch", "Optimization"],
    faqs: [{ q: "Is ad spend included?", a: "Ad spend is separate and paid directly by the client." }]
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    category: "Automation",
    description: "AI workflows, chatbots, lead routing, document automation and smart business operations.",
    priceFrom: 24999,
    features: ["AI workflows", "Chat automation", "CRM integration", "Lead notifications"],
    process: ["Workflow audit", "Prototype", "Integration", "Training"],
    faqs: [{ q: "Can AI reduce manual work?", a: "Yes, we identify repeatable tasks and automate them safely." }]
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    category: "Automation",
    description: "Automated lead management, reminders, reporting, invoicing and internal operation flows.",
    priceFrom: 29999,
    features: ["Workflow mapping", "Automation setup", "Dashboards", "Team training"],
    process: ["Process audit", "Automation plan", "Build", "Monitor"],
    faqs: [{ q: "Do you automate WhatsApp/email flows?", a: "We can integrate approved platforms and compliant workflows." }]
  },
  {
    slug: "software-development",
    title: "Software Development",
    category: "Development",
    description: "Custom software for operations, education, commerce, agencies and growing teams.",
    priceFrom: 79999,
    features: ["Custom architecture", "Secure backend", "Admin roles", "Maintenance plan"],
    process: ["Scope", "Architecture", "Build", "QA", "Support"],
    faqs: [{ q: "Can you build enterprise tools?", a: "Yes, we can design scalable tools with clear access control." }]
  },
  {
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    category: "Commerce",
    description: "Online stores, product catalogs, payment-ready flows, order management and growth setup.",
    priceFrom: 34999,
    features: ["Catalog", "Cart", "Checkout-ready structure", "SEO products"],
    process: ["Catalog plan", "Design", "Build", "Testing", "Launch"],
    faqs: [{ q: "Can you add payment gateway?", a: "Yes, with available gateway credentials." }]
  },
  {
    slug: "custom-crm-erp",
    title: "Custom CRM & ERP Systems",
    category: "Business Systems",
    description: "Lead pipelines, customer records, operations dashboards, inventory flows and reports.",
    priceFrom: 99999,
    features: ["CRM pipeline", "Role permissions", "Reports", "Data import"],
    process: ["Workflow study", "Data model", "Build", "Migration", "Training"],
    faqs: [{ q: "Can it be customized later?", a: "Yes, the system is designed to evolve." }]
  },
  {
    slug: "portfolio-landing-pages",
    title: "Portfolio & Landing Pages",
    category: "Growth",
    description: "Sharp, focused pages for professionals, creators, ad campaigns and product launches.",
    priceFrom: 7999,
    features: ["Conversion copy", "Fast loading", "Lead form", "Analytics"],
    process: ["Goal", "Copy", "Design", "Build", "Launch"],
    faqs: [{ q: "Can you make it quickly?", a: "Yes, landing pages can be delivered fast after content approval." }]
  },
  {
    slug: "hosting-domain-maintenance",
    title: "Hosting, Domain & Maintenance",
    category: "Support",
    description: "Domain setup, hosting, website care, backups, uptime checks, updates and security monitoring.",
    priceFrom: 3999,
    features: ["Domain setup", "Hosting guidance", "Backups", "Monthly support"],
    process: ["Audit", "Setup", "Monitoring", "Maintenance"],
    faqs: [{ q: "Do you provide monthly maintenance?", a: "Yes, we offer care plans based on website needs." }]
  }
];

export const courses = [
  { slug: "digital-marketing", title: "Digital Marketing Mastery", category: "Marketing", description: "Learn funnels, content, ads, analytics and growth strategy with practical campaign work.", duration: "10 weeks", difficulty: "Beginner to Pro", mentor: "DigiSparkX Growth Team", certificate: true, price: 9999, active: true },
  { slug: "website-development", title: "Website Development", category: "Development", description: "Build responsive websites using modern frontend tools, hosting workflows and real client briefs.", duration: "12 weeks", difficulty: "Beginner", mentor: "Junaid Javed", certificate: true, price: 12999, active: true },
  { slug: "frontend-development", title: "Frontend Development", category: "Development", description: "HTML, CSS, JavaScript, React, TypeScript, animations, accessibility and production UI systems.", duration: "14 weeks", difficulty: "Intermediate", mentor: "DigiSparkX Dev Team", certificate: true, price: 15999, active: true },
  { slug: "backend-development", title: "Backend Development", category: "Development", description: "APIs, authentication, databases, security, deployments and scalable backend patterns.", duration: "14 weeks", difficulty: "Intermediate", mentor: "DigiSparkX Dev Team", certificate: true, price: 17999, active: true },
  { slug: "full-stack-development", title: "Full Stack Development", category: "Development", description: "Frontend, backend, database, authentication and deployment in a complete project-based program.", duration: "24 weeks", difficulty: "Career Track", mentor: "DigiSparkX Engineering Team", certificate: true, price: 29999, active: true },
  { slug: "graphic-design", title: "Graphic Design", category: "Creative", description: "Branding, composition, typography, color, Canva, Photoshop and practical design assignments.", duration: "10 weeks", difficulty: "Beginner", mentor: "DigiSparkX Design Team", certificate: true, price: 8999, active: true },
  { slug: "video-editing", title: "Video Editing", category: "Creative", description: "Edit reels, ads, YouTube videos and course content with polished storytelling and exports.", duration: "8 weeks", difficulty: "Beginner", mentor: "DigiSparkX Studio", certificate: true, price: 8999, active: true },
  { slug: "ai-tools-chatgpt", title: "AI Tools, ChatGPT & Prompt Engineering", category: "AI", description: "Use AI tools for writing, design, automation, research, business productivity and freelancing.", duration: "6 weeks", difficulty: "All Levels", mentor: "DigiSparkX AI Lab", certificate: true, price: 6999, active: true },
  { slug: "seo-ads", title: "SEO, Google Ads & Facebook Ads", category: "Marketing", description: "Learn organic search, paid campaigns, tracking, conversion and reporting through real examples.", duration: "8 weeks", difficulty: "Intermediate", mentor: "DigiSparkX Growth Team", certificate: true, price: 11999, active: true },
  { slug: "freelancing-business-growth", title: "Freelancing & Business Growth", category: "Career", description: "Portfolio building, pricing, client communication, proposals, personal branding and growth systems.", duration: "6 weeks", difficulty: "All Levels", mentor: "Mohammed Javed", certificate: true, price: 7999, active: true }
];

export const portfolioItems = [
  {
    title: "SparkCommerce Launch",
    category: "E-commerce",
    description: "A premium store experience with product storytelling, checkout-ready architecture and SEO collection pages.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=80",
    tech: ["Next.js", "Prisma", "Stripe-ready", "SEO"],
    client: "Retail Brand",
    review: "DigiSparkX created a polished system that helped us look credible from day one.",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Academy Growth Portal",
    category: "Education",
    description: "Course landing pages, lead capture, admin workflows and student communication assets.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "Dashboard", "CMS", "Email"],
    client: "Training Institute",
    review: "The new portal made our course presentation far more professional.",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "AI Lead Automation",
    category: "Automation",
    description: "Lead forms, routing, notifications, status tracking and admin visibility for faster response.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    tech: ["AI Workflow", "CRM", "Automation", "Analytics"],
    client: "Service Business",
    review: "Our team stopped losing enquiries because everything started flowing into one dashboard.",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Brand Identity Sprint",
    category: "Branding",
    description: "Logo system, color palette, typography, social kit and business launch creatives.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1200&q=80",
    tech: ["Brand Strategy", "Figma", "Illustrator", "Social Kit"],
    client: "Startup Founder",
    review: "They translated our rough idea into a brand that looked confident and premium.",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

export const testimonials = [
  { name: "Ayesha Khan", role: "Founder", rating: 5, text: "Their design sense is sharp and the communication was very clear. The final website felt premium." },
  { name: "Rahul Mehra", role: "Retail Owner", rating: 5, text: "DigiSparkX helped us with website, creatives and marketing direction in one place." },
  { name: "Sana Ali", role: "Student", rating: 5, text: "The academy training felt practical. We worked on real examples, not only theory." }
];

export const pricing = [
  { name: "Starter", price: "₹14,999+", description: "For new businesses and professionals.", features: ["5-page website", "Contact form", "Mobile responsive", "Basic SEO", "Launch support"] },
  { name: "Growth", price: "₹49,999+", description: "For brands that need conversion and content.", features: ["Custom design", "CMS sections", "Advanced SEO", "Analytics", "Marketing-ready pages"], popular: true },
  { name: "Scale", price: "Custom", description: "For apps, portals, CRM and automation.", features: ["Discovery workshop", "Secure backend", "Role dashboard", "Database", "Maintenance roadmap"] }
];

export const blogPosts = [
  {
    slug: "why-every-business-needs-a-digital-growth-system",
    title: "Why Every Business Needs a Digital Growth System",
    excerpt: "A website alone is not enough. Growth comes from design, content, search, trust and automation working together.",
    content: "Modern businesses need a connected digital system: a clear website, optimized landing pages, trust-building content, analytics, SEO and follow-up automation. DigiSparkX helps companies move from scattered online activity to a focused growth engine.",
    status: "PUBLISHED" as const,
    publishedAt: new Date(),
    categories: ["Digital Marketing", "Business Growth"],
    tags: ["growth", "website", "automation"],
    featuredImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    seoTitle: "Business Digital Growth System | DigiSparkX",
    seoDescription: "Learn why businesses need websites, SEO, content and automation working together."
  },
  {
    slug: "how-students-can-build-real-digital-skills",
    title: "How Students Can Build Real Digital Skills",
    excerpt: "The fastest way to learn is by working on practical projects, real tools and honest feedback.",
    content: "Digital education becomes powerful when students learn by doing. DigiSparkX Academy focuses on practical exercises, professional tools, portfolio building and mentorship so learners can gain confidence for real client work.",
    status: "PUBLISHED" as const,
    publishedAt: new Date(),
    categories: ["Academy", "Careers"],
    tags: ["students", "skills", "academy"],
    featuredImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    seoTitle: "Build Real Digital Skills | DigiSparkX Academy",
    seoDescription: "Practical learning approach for website development, marketing, design and AI skills."
  }
];

export const faqs = [
  { q: "Is DigiSparkX a service company or academy?", a: "Both. Clients can hire DigiSparkX for professional digital services, and learners can join DigiSparkX Academy for practical skill training." },
  { q: "Can I request a custom website or software?", a: "Yes. We build websites, web apps, CRM, ERP systems, e-commerce platforms and automation tools." },
  { q: "Do you provide certificates for courses?", a: "Yes, academy courses include certificates after completion requirements are met." },
  { q: "Will contact form submissions go to email and database?", a: "Yes. With SMTP and PostgreSQL environment variables configured, forms send email and store records securely." },
  { q: "Can the admin edit content without code?", a: "Yes. The admin dashboard and CMS APIs are structured for managing services, courses, portfolio, testimonials, blogs, leads and settings." }
];

export const dashboardCards = [
  { label: "Leads", value: "Live DB", icon: Users },
  { label: "Courses", value: courses.length.toString(), icon: GraduationCap },
  { label: "Services", value: services.length.toString(), icon: Workflow },
  { label: "Reviews", value: "Moderated", icon: Star }
];

export const iconMap = {
  Code2,
  Palette,
  Megaphone,
  Search,
  BrainCircuit,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Film,
  Globe2,
  ShieldCheck
};

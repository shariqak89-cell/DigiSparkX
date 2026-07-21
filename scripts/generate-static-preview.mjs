import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const out = path.join(root, "docs");
const logoSrc = path.join(root, "public", "brand", "digisparkx-logo.jpeg");
const logoDir = path.join(out, "brand");
const logoOut = path.join(logoDir, "digisparkx-logo.jpeg");

fs.mkdirSync(logoDir, { recursive: true });
fs.copyFileSync(logoSrc, logoOut);

const services = [
  "Website Development", "Web Applications", "Mobile Apps", "UI/UX Design", "Graphic Designing", "Logo Design & Branding",
  "Video Editing", "Motion Graphics", "SEO", "Digital Marketing", "Social Media Marketing", "Google Ads & Facebook Ads",
  "AI Automation", "Business Automation", "Software Development", "E-commerce Solutions", "Custom CRM & ERP",
  "Portfolio Websites", "Landing Pages", "Hosting, Domain & Maintenance"
];

const courses = [
  "Digital Marketing", "Website Development", "Frontend Development", "Backend Development", "Full Stack Development",
  "Graphic Design", "Video Editing", "AI Tools", "ChatGPT", "Prompt Engineering", "SEO", "Google Ads", "Facebook Ads",
  "Canva", "Photoshop", "Illustrator", "WordPress", "Programming", "Freelancing", "Business Growth", "Personal Branding"
];

const pages = [
  ["index", "Home", "A premium digital services and academy company."],
  ["about", "About", "DigiSparkX is led by CEO Mohammed Javed with directors Junaid Javed, Iqra Javed and Fatima Javed."],
  ["services", "Services", "Hire DigiSparkX for websites, apps, branding, marketing, automation, CRM, ERP and growth systems."],
  ["academy", "Academy", "Learn professional skills through practical courses, mentorship and project-based training."],
  ["portfolio", "Portfolio", "Showcase of digital projects, branding systems, automations and learning platforms."],
  ["projects", "Projects", "Business websites, e-commerce builds, CRM systems, academy portals and automation workflows."],
  ["testimonials", "Testimonials", "Client and student reviews with 1–5 star rating architecture and admin moderation."],
  ["pricing", "Pricing", "Starter, Growth and Scale plans based on project scope and business goals."],
  ["blog", "Blog", "Articles on digital growth, design, AI, development, marketing and skills."],
  ["careers", "Careers", "Opportunities for interns, creators, developers, designers and marketers."],
  ["faq", "FAQ", "Answers for services, academy, projects, timelines, certificates and support."],
  ["contact", "Contact", "Email digisparkxuniverse@gmail.com to start a project or academy enquiry."],
  ["privacy-policy", "Privacy Policy", "We protect enquiry data and use it only to respond and deliver services."],
  ["terms-and-conditions", "Terms & Conditions", "Project and course terms depend on agreed scope, approvals and payment milestones."],
  ["refund-policy", "Refund Policy", "Refunds depend on service stage, course access and agreed proposal terms."],
  ["sitemap", "Sitemap", "All public pages of DigiSparkX."],
  ["404", "404", "Page not found."]
];

const nav = pages
  .filter(([slug]) => !["404", "privacy-policy", "terms-and-conditions", "refund-policy"].includes(slug))
  .map(([slug, title]) => `<a href="${slug === "index" ? "/DigiSparkX/" : `/DigiSparkX/${slug}/`}">${title}</a>`)
  .join("");

const css = `
:root{--bg:#f7f9ff;--text:#061632;--muted:#667085;--spark:#ff7a00;--blue:#0b58d9;--card:rgba(255,255,255,.76);--border:rgba(6,22,50,.12)}
*{box-sizing:border-box}body{margin:0;font-family:Inter,Segoe UI,system-ui,sans-serif;color:var(--text);background:radial-gradient(circle at 10% 0,rgba(16,215,255,.2),transparent 34rem),radial-gradient(circle at 90% 0,rgba(255,122,0,.22),transparent 30rem),var(--bg)}a{text-decoration:none;color:inherit}.wrap{width:min(1180px,calc(100% - 32px));margin:auto}.glass{background:var(--card);border:1px solid var(--border);backdrop-filter:blur(18px);box-shadow:0 24px 70px rgba(6,22,50,.12)}header{position:sticky;top:0;z-index:10;background:rgba(255,255,255,.72);backdrop-filter:blur(18px);border-bottom:1px solid var(--border)}.head{height:78px;display:flex;align-items:center;justify-content:space-between;gap:18px}.brand{display:flex;align-items:center;gap:12px;font-weight:900}.brand img{width:54px;height:54px;border-radius:18px;object-fit:cover}nav{display:flex;gap:6px;flex-wrap:wrap}nav a{font-weight:800;font-size:14px;padding:10px 12px;border-radius:999px}nav a:hover{background:#0616320d}.btn{display:inline-flex;align-items:center;justify-content:center;border-radius:999px;padding:14px 20px;font-weight:900;background:linear-gradient(135deg,var(--blue),var(--spark));color:#fff;box-shadow:0 18px 45px rgba(255,122,0,.25)}.hero{padding:88px 0 58px}.grid{display:grid;gap:22px}.hero-grid{grid-template-columns:1.05fr .95fr;align-items:center}.eyebrow{display:inline-flex;border:1px solid var(--border);border-radius:999px;padding:8px 13px;font-size:13px;font-weight:900;color:var(--muted);background:var(--card)}h1{font-size:clamp(44px,7vw,86px);line-height:.94;margin:22px 0;font-weight:1000;letter-spacing:-.055em}.gradient{background:linear-gradient(100deg,var(--blue),var(--spark),#10d7ff);-webkit-background-clip:text;color:transparent}.lead{font-size:20px;line-height:1.75;color:var(--muted);max-width:780px}.card{border-radius:30px;padding:26px}.logo-card{text-align:center}.logo-card img{width:260px;max-width:100%;border-radius:46px}.stats,.cards{grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}.stat strong{font-size:36px}.section{padding:70px 0}.section h2{font-size:clamp(34px,4vw,54px);margin:12px 0;font-weight:1000;letter-spacing:-.04em}.pill{display:inline-flex;padding:8px 12px;border-radius:999px;background:#0616320a;margin:5px;font-weight:800}.contact{display:grid;grid-template-columns:1fr 1fr;gap:22px}.field{width:100%;border:1px solid var(--border);border-radius:18px;padding:14px 16px;margin:7px 0;background:#fff}.footer{padding:42px 0;border-top:1px solid var(--border);color:var(--muted)}@media(max-width:900px){.hero-grid,.contact{grid-template-columns:1fr}nav{display:none}.head{height:auto;padding:12px 0}}
`;

function pageHtml(slug, title, intro) {
  const isHome = slug === "index";
  const pathPrefix = slug === "index" ? "" : "../";
  const serviceCards = services.map((s) => `<div class="glass card"><h3>${s}</h3><p>Professional ${s.toLowerCase()} service with strategy, premium design, secure execution and launch support.</p></div>`).join("");
  const courseCards = courses.map((c) => `<div class="glass card"><h3>${c}</h3><p>Practical course with mentor guidance, assignments and certificate-ready learning path.</p></div>`).join("");
  const body = isHome
    ? `<section class="hero"><div class="wrap hero-grid grid"><div><span class="eyebrow">Digital Services + Academy</span><h1>Build, brand and grow with <span class="gradient">DigiSparkX.</span></h1><p class="lead">DigiSparkX helps clients launch powerful websites, software, branding, marketing and AI automation — while training learners with practical digital skills.</p><p><a class="btn" href="/DigiSparkX/contact/">Start a Project</a></p></div><div class="glass card logo-card"><img src="brand/digisparkx-logo.jpeg" alt="DigiSparkX logo"><h2>Grow Smarter, Go Digital</h2></div></div></section><section class="section"><div class="wrap stats grid">${["35+ Years business legacy","120+ Digital projects mindset","40+ Skills taught","99% Quality-first delivery"].map(x=>`<div class="glass card stat"><strong>${x.split(" ")[0]}</strong><p>${x.replace(x.split(" ")[0]+" ","")}</p></div>`).join("")}</div></section><section class="section"><div class="wrap"><h2>Featured Services</h2><div class="cards grid">${serviceCards}</div></div></section><section class="section"><div class="wrap"><h2>Academy Courses</h2><div class="cards grid">${courseCards}</div></div></section>`
    : `<section class="section"><div class="wrap"><span class="eyebrow">${title}</span><h1>${title}</h1><p class="lead">${intro}</p>${slug === "services" ? `<div class="cards grid">${serviceCards}</div>` : ""}${slug === "academy" ? `<div class="cards grid">${courseCards}</div>` : ""}${slug === "contact" ? `<div class="contact"><div class="glass card"><h2>Official Contact</h2><p><b>Email:</b> digisparkxuniverse@gmail.com</p><p><b>CEO:</b> Mohammed Javed</p><p><b>Directors:</b> Junaid Javed, Iqra Javed, Fatima Javed</p></div><form class="glass card" action="mailto:digisparkxuniverse@gmail.com"><input class="field" placeholder="Name"><input class="field" placeholder="Email"><input class="field" placeholder="Phone"><textarea class="field" placeholder="Message" rows="6"></textarea><button class="btn">Send Enquiry</button></form></div>` : ""}</div></section>`;

  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} | DigiSparkX</title><meta name="description" content="${intro}"><link rel="icon" href="${pathPrefix}brand/digisparkx-logo.jpeg"><style>${css}</style></head><body><header><div class="wrap head"><a class="brand" href="/DigiSparkX/"><img src="${pathPrefix}brand/digisparkx-logo.jpeg" alt="DigiSparkX logo"><span>DigiSparkX<br><small>Grow Smarter, Go Digital</small></span></a><nav>${nav}</nav><a class="btn" href="/DigiSparkX/contact/">Contact</a></div></header>${body}<footer class="footer"><div class="wrap"><b>DigiSparkX</b> · CEO Mohammed Javed · digisparkxuniverse@gmail.com<br><a href="/DigiSparkX/privacy-policy/">Privacy</a> · <a href="/DigiSparkX/terms-and-conditions/">Terms</a> · <a href="/DigiSparkX/refund-policy/">Refund</a></div></footer><script>document.addEventListener('click',e=>{const b=e.target.closest('.btn');if(!b)return;for(let i=0;i<10;i++){const s=document.createElement('span');s.style.cssText='position:fixed;left:'+e.clientX+'px;top:'+e.clientY+'px;width:8px;height:8px;border-radius:99px;background:linear-gradient(135deg,#ff7a00,#10d7ff);pointer-events:none;z-index:99;transition:.7s;';document.body.appendChild(s);requestAnimationFrame(()=>{s.style.transform='translate('+((Math.random()-.5)*120)+'px,'+((Math.random()-.5)*120)+'px) scale(0)';s.style.opacity=0});setTimeout(()=>s.remove(),750)}})</script></body></html>`;
}

for (const [slug, title, intro] of pages) {
  const dir = slug === "index" ? out : path.join(out, slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), pageHtml(slug, title, intro));
}

fs.copyFileSync(path.join(out, "404", "index.html"), path.join(out, "404.html"));
fs.writeFileSync(path.join(out, ".nojekyll"), "");

console.log(`Static preview generated in ${out}`);

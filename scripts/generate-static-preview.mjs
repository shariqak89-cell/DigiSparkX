import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const out = path.join(root, "docs");
const logoSrc = path.join(root, "public", "brand", "digisparkx-logo-transparent.png");
const logoDir = path.join(out, "brand");
const logoOut = path.join(logoDir, "digisparkx-logo-transparent.png");

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
  .filter(([slug]) => ["index", "about", "services", "portfolio", "contact"].includes(slug))
  .map(([slug, title]) => `<a href="${slug === "index" ? "/DigiSparkX/" : `/DigiSparkX/${slug}/`}">${title}</a>`)
  .join("");

const css = `
:root{--bg:#fffdf8;--ivory:#f7f2e9;--text:#171717;--muted:#67635d;--spark:#ff7a00;--blue:#07295f;--cyan:#0ca7d2;--card:rgba(255,253,248,.86);--border:#d9d1c5}
*{box-sizing:border-box}body{margin:0;font-family:Inter,Segoe UI,system-ui,sans-serif;color:var(--text);background:var(--bg)}a{text-decoration:none;color:inherit}.wrap{width:min(1300px,calc(100% - 48px));margin:auto}.glass{background:var(--card);border:1px solid var(--border);backdrop-filter:blur(18px);box-shadow:0 22px 60px rgba(32,27,22,.09)}.top{background:var(--text);color:#fff;font-size:12px}.top .wrap{height:34px;display:flex;align-items:center;justify-content:space-between;opacity:.88}header{position:sticky;top:0;z-index:10;background:rgba(255,253,248,.96);backdrop-filter:blur(12px);border-bottom:1px solid var(--border)}.head{height:92px;display:flex;align-items:center;justify-content:space-between;gap:28px}.brand{display:flex;align-items:center;gap:12px;font-weight:900}.brand img{width:108px;height:78px;object-fit:contain}.brand small{color:var(--spark);letter-spacing:.16em;text-transform:uppercase}nav{display:flex;gap:30px}nav a{font-weight:900;font-size:15px;padding:34px 0;position:relative}nav a:after{content:"";position:absolute;left:0;right:0;bottom:24px;height:2px;background:var(--spark);transform:scaleX(0);transition:.24s}nav a:hover:after{transform:scaleX(1)}.btn{display:inline-flex;align-items:center;justify-content:center;border-radius:4px;padding:14px 20px;font-weight:900;background:linear-gradient(135deg,var(--blue),var(--spark));color:#fff;box-shadow:0 18px 45px rgba(255,122,0,.25)}.hero{background:var(--ivory);overflow:hidden}.hero-inner{min-height:590px;display:grid;grid-template-columns:1.08fr .92fr;gap:48px;align-items:center}.cmyk{width:238px;height:6px;background:linear-gradient(90deg,var(--cyan) 0 25%,#ef2a72 25% 50%,#f4c415 50% 75%,var(--text) 75%)}.eyebrow{display:inline-flex;border:1px solid var(--border);border-radius:4px;padding:8px 13px;font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:.14em;color:var(--spark);background:var(--card)}h1{font-size:clamp(48px,6vw,78px);line-height:.95;margin:22px 0;font-weight:1000;letter-spacing:-.055em}.gradient{background:linear-gradient(100deg,var(--blue),var(--spark),#10d7ff);-webkit-background-clip:text;color:transparent}.lead{font-size:19px;line-height:1.75;color:var(--muted);max-width:760px}.logo-card{min-height:520px;border-radius:90px 0 0 0;background:#171717;display:grid;place-items:center;position:relative;overflow:hidden}.logo-card:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 30% 20%,rgba(12,167,210,.35),transparent 24rem),radial-gradient(circle at 80% 70%,rgba(255,122,0,.34),transparent 22rem)}.logo-card img{position:relative;width:390px;max-width:86%;filter:drop-shadow(0 30px 40px rgba(0,0,0,.4))}.stats,.cards{grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}.stat strong{font-size:36px;color:var(--blue)}.section{padding:86px 0}.section h2{font-size:clamp(36px,4.5vw,60px);line-height:1.04;margin:14px 0;font-weight:1000;letter-spacing:-.045em}.card{border-radius:4px;padding:26px}.service-card{border-top:1px solid var(--border);padding-top:18px}.service-icon{height:190px;background:#eee7dc;display:grid;place-items:center;font-size:56px;color:var(--blue);margin-bottom:18px}.contact{display:grid;grid-template-columns:1fr 1fr;gap:22px}.field{width:100%;border:1px solid var(--border);border-radius:4px;padding:14px 16px;margin:7px 0;background:#fff}.footer{background:#eee7dc;padding:50px 0;border-top:1px solid var(--border);color:var(--muted)}@media(max-width:900px){.hero-inner,.contact{grid-template-columns:1fr}nav{display:none}.head{height:auto;padding:12px 0}.top{display:none}.logo-card{min-height:410px}.wrap{width:calc(100% - 28px)}}
`;

function pageHtml(slug, title, intro) {
  const isHome = slug === "index";
  const pathPrefix = slug === "index" ? "" : "../";
  const serviceCards = services.map((s) => `<div class="glass card"><h3>${s}</h3><p>Professional ${s.toLowerCase()} service with strategy, premium design, secure execution and launch support.</p></div>`).join("");
  const courseCards = courses.map((c) => `<div class="glass card"><h3>${c}</h3><p>Practical course with mentor guidance, assignments and certificate-ready learning path.</p></div>`).join("");
  const body = isHome
    ? `<section class="hero"><div class="wrap hero-inner"><div><div class="cmyk"></div><p class="eyebrow">Digital Services Company</p><h1>Grow smarter with <span class="gradient">premium digital solutions.</span></h1><p class="lead">DigiSparkX builds modern websites, software, branding, marketing systems and AI automation for businesses that want a sharp professional online presence.</p><p><a class="btn" href="/DigiSparkX/contact/">Start a Project</a></p></div><div class="logo-card"><img src="brand/digisparkx-logo-transparent.png" alt="DigiSparkX logo"></div></div></section><section class="section"><div class="wrap stats grid">${["35+ Business legacy","120+ Digital mindset","40+ Professional skills","99% Quality-first"].map(x=>`<div class="glass card stat"><strong>${x.split(" ")[0]}</strong><p>${x.replace(x.split(" ")[0]+" ","")}</p></div>`).join("")}</div></section><section class="section"><div class="wrap"><span class="eyebrow">Our Services</span><h2>Everything your business needs to go digital.</h2><div class="cards grid">${serviceCards}</div></div></section>`
    : `<section class="section"><div class="wrap"><span class="eyebrow">${title}</span><h1>${title}</h1><p class="lead">${intro}</p>${slug === "services" ? `<div class="cards grid">${serviceCards}</div>` : ""}${slug === "academy" ? `<div class="cards grid">${courseCards}</div>` : ""}${slug === "contact" ? `<div class="contact"><div class="glass card"><h2>Official Contact</h2><p><b>Email:</b> digisparkxuniverse@gmail.com</p><p><b>CEO:</b> Mohammed Javed</p><p><b>Directors:</b> Junaid Javed, Iqra Javed, Fatima Javed</p></div><form class="glass card" action="mailto:digisparkxuniverse@gmail.com"><input class="field" placeholder="Name"><input class="field" placeholder="Email"><input class="field" placeholder="Phone"><textarea class="field" placeholder="Message" rows="6"></textarea><button class="btn">Send Enquiry</button></form></div>` : ""}</div></section>`;

  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} | DigiSparkX</title><meta name="description" content="${intro}"><link rel="icon" href="${pathPrefix}brand/digisparkx-logo-transparent.png"><style>${css}</style></head><body><div class="top"><div class="wrap"><span>digisparkxuniverse@gmail.com</span><span>Delhi, India</span></div></div><header><div class="wrap head"><a class="brand" href="/DigiSparkX/"><img src="${pathPrefix}brand/digisparkx-logo-transparent.png" alt="DigiSparkX logo"><span>DigiSparkX<br><small>Grow Smarter, Go Digital</small></span></a><nav>${nav}</nav><a class="btn" href="/DigiSparkX/contact/">Contact</a></div></header>${body}<footer class="footer"><div class="wrap"><b>DigiSparkX</b> · CEO Mohammed Javed · digisparkxuniverse@gmail.com<br><a href="/DigiSparkX/privacy-policy/">Privacy</a> · <a href="/DigiSparkX/terms-and-conditions/">Terms</a> · <a href="/DigiSparkX/refund-policy/">Refund</a></div></footer><script>document.addEventListener('click',e=>{const b=e.target.closest('.btn');if(!b)return;for(let i=0;i<10;i++){const s=document.createElement('span');s.style.cssText='position:fixed;left:'+e.clientX+'px;top:'+e.clientY+'px;width:8px;height:8px;border-radius:99px;background:linear-gradient(135deg,#ff7a00,#10d7ff);pointer-events:none;z-index:99;transition:.7s;';document.body.appendChild(s);requestAnimationFrame(()=>{s.style.transform='translate('+((Math.random()-.5)*120)+'px,'+((Math.random()-.5)*120)+'px) scale(0)';s.style.opacity=0});setTimeout(()=>s.remove(),750)}})</script></body></html>`;
}

for (const [slug, title, intro] of pages) {
  const dir = slug === "index" ? out : path.join(out, slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), pageHtml(slug, title, intro));
}

fs.copyFileSync(path.join(out, "404", "index.html"), path.join(out, "404.html"));
fs.writeFileSync(path.join(out, ".nojekyll"), "");

console.log(`Static preview generated in ${out}`);

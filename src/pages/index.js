import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { SITE } from "../site"

const SERVICES = [
  {
    title: "Web Development",
    body: "Fast, responsive, SEO-ready websites built with modern standards — corporate sites, landing pages and WordPress builds.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18M8 21h8" />
      </>
    ),
  },
  {
    title: "Web Applications",
    body: "Custom web apps and dashboards with secure backends, clean APIs and intuitive interfaces tailored to your workflow.",
    icon: (
      <>
        <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    title: "E-commerce Solutions",
    body: "WooCommerce and custom storefronts with payments, inventory and a checkout experience designed to convert.",
    icon: (
      <>
        <circle cx="9" cy="20" r="1.4" />
        <circle cx="18" cy="20" r="1.4" />
        <path d="M2 3h3l2.5 13h11l2-9H6" />
      </>
    ),
  },
  {
    title: "Custom Applications",
    body: "Bespoke tools, plugins, integrations and automations — API connections, third-party services and tailored functionality.",
    icon: (
      <>
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </>
    ),
  },
  {
    title: "Web Design & UI/UX",
    body: "Refreshing outdated sites and apps with thoughtful interface design, better performance and modern accessibility.",
    icon: (
      <>
        <path d="M12 2a7 7 0 0 0-7 7c0 3 2 5 2 7h10c0-2 2-4 2-7a7 7 0 0 0-7-7zM9 21h6" />
      </>
    ),
  },
  {
    title: "Website Maintenance",
    body: "Ongoing updates, security hardening, backups and quick fixes — reliable support so your site keeps running smoothly.",
    icon: (
      <>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
]

const STEPS = [
  { t: "Discover", b: "We talk through your goals, scope and requirements to define exactly what success looks like." },
  { t: "Design", b: "Structure, layout and approach are mapped out and agreed before any heavy lifting begins." },
  { t: "Build", b: "Development happens in clear milestones with regular updates so you always know where things stand." },
  { t: "Support", b: "After launch, I stay on hand for updates, fixes and improvements as your needs grow." },
]

const PORTFOLIO = [
  {
    name: "2ULaundry",
    url: "https://2ulaundry.com/",
    tag: "Backend Development",
    client: "Alex",
    country: "USA",
    body: "Server-side development for an on-demand laundry pickup & delivery service — reliable backend logic, scheduling and third-party integrations.",
  },
  {
    name: "XPT Trainer",
    url: "https://thexpt.com/",
    tag: "WordPress Maintenance",
    client: "Brady Popping",
    country: "USA",
    body: "Ongoing WordPress maintenance for a fitness-equipment store — updates, security hardening, performance tuning and dependable uptime.",
  },
  {
    name: "MyDygz",
    url: "https://www.mydygz.com/",
    tag: "Web Application",
    client: "Lynda",
    country: "USA",
    body: "Web application work for an all-in-one life-management and organization platform with task, event and collaboration features.",
  },
]

const IndexPage = () => (
  <Layout>
    <section className="hero">
      <div className="wrap">
        <span className="eyebrow reveal">
          <span className="pulse"></span>Available for new projects
        </span>
        <h1 className="reveal">
          Custom web &amp; software,{" "}
          <span className="accent">built to ship.</span>
        </h1>
        <p className="lead reveal">
          {SITE.name} designs, builds and maintains websites, web applications
          and e-commerce platforms for businesses around the world &mdash; clean
          engineering, clear communication, dependable delivery.
        </p>
        <div className="hero-cta reveal">
          <Link to="/contact" className="btn btn-primary">
            Get in touch &rarr;
          </Link>
          <a href="#services" className="btn btn-ghost">
            View services
          </a>
        </div>
        <div className="stats reveal">
          <div className="stat">
            <div className="num">6+ yrs</div>
            <div className="lbl">Development experience</div>
          </div>
          <div className="stat">
            <div className="num">40+</div>
            <div className="lbl">Projects delivered</div>
          </div>
          <div className="stat">
            <div className="num">Global</div>
            <div className="lbl">Clients served</div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" className="section">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-tag">What I do</div>
          <h2>Services</h2>
          <p>
            End-to-end technology services &mdash; from a single landing page to
            a full custom application, plus the ongoing support to keep it
            running.
          </p>
        </div>
        <div className="grid">
          {SERVICES.map((s) => (
            <div className="card reveal" key={s.title}>
              <div className="ico">
                <svg viewBox="0 0 24 24">{s.icon}</svg>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="portfolio" className="section section-alt">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-tag">Selected work</div>
          <h2>Portfolio</h2>
          <p>
            A few recent projects delivered for clients in the United States
            &mdash; spanning backend engineering, WordPress maintenance and web
            applications.
          </p>
        </div>
        <div className="work-grid">
          {PORTFOLIO.map((w) => (
            <a
              className="work-card reveal"
              key={w.url}
              href={w.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="work-thumb">
                <span className="thumb-fallback">{w.name}</span>
                <img
                  src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(
                    w.url
                  )}?w=1200`}
                  alt={`${w.name} website preview`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />
              </div>
              <div className="work-body">
                <span className="work-tag">{w.tag}</span>
                <h3>{w.name}</h3>
                <p>{w.body}</p>
                <div className="work-client">
                  <span className="flag" role="img" aria-label="United States">
                    &#127482;&#127480;
                  </span>{" "}
                  {w.client} &middot; {w.country}
                </div>
                <span className="work-link">Visit site &rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    <section id="about" className="section">
      <div className="wrap about">
        <div className="reveal">
          <div className="sec-tag">About</div>
          <h2>Engineering you can rely on.</h2>
          <p>
            {SITE.name} is an independent development practice led by{" "}
            {SITE.owner}, focused on building dependable software for businesses
            of every size. The approach is simple: understand the problem, build
            it well, and stay available afterwards.
          </p>
          <p>
            Every project is handled with direct communication, clear timelines
            and clean, maintainable code &mdash; whether it&rsquo;s a brochure
            website or a complex application.
          </p>
          <ul className="checklist">
            <li>
              <span className="tick">&#10003;</span> Direct, responsive
              communication throughout the project
            </li>
            <li>
              <span className="tick">&#10003;</span> Transparent pricing and
              realistic timelines
            </li>
            <li>
              <span className="tick">&#10003;</span> Clean, well-documented and
              maintainable code
            </li>
            <li>
              <span className="tick">&#10003;</span> Post-launch support and
              long-term partnership
            </li>
          </ul>
        </div>
        <div className="panel-card reveal">
          <h4>Technologies &amp; tools</h4>
          <div className="stack">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React",
              "Node.js",
              "PHP",
              "WordPress",
              "WooCommerce",
              "MySQL",
              "REST APIs",
              "Git",
              "Linux",
            ].map((t) => (
              <span className="chip" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id="process" className="section">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-tag">How it works</div>
          <h2>A straightforward process</h2>
          <p>
            Clear stages from first conversation to ongoing support &mdash; no
            surprises, just steady progress.
          </p>
        </div>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step reveal" key={s.t}>
              <h3>{s.t}</h3>
              <p>{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="wrap">
        <div className="contact-card reveal">
          <div className="sec-tag">Get in touch</div>
          <h2>Let&rsquo;s build something.</h2>
          <p>
            Have a project in mind or just want to talk through an idea? Reach
            out and I&rsquo;ll get back to you quickly.
          </p>
          <div className="contact-methods">
            <Link to="/contact" className="btn btn-primary">
              Start a project &rarr;
            </Link>
            <a href={`mailto:${SITE.email}`} className="btn btn-ghost">
              {SITE.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => <Seo />

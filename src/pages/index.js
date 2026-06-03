import React, { useEffect } from "react"
import "../styles/robindevtech.css"

const IndexPage = () => {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in")
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    const els = document.querySelectorAll(".reveal")
    els.forEach((el, i) => {
      el.style.transitionDelay = ((i % 6) * 0.06) + "s"
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <nav>
            <div className="brand">
              <span className="dot"></span>RobinDevTech
            </div>
            <div className="navlinks">
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#process">Process</a>
              <a href="#contact">Contact</a>
            </div>
            <a href="#contact" className="btn btn-primary nav-cta">Start a project</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <span className="eyebrow reveal"><span className="pulse"></span>Available for new projects</span>
          <h1 className="reveal">Custom web &amp; software, <span className="accent">built to ship.</span></h1>
          <p className="lead reveal">RobinDevTech designs, builds and maintains websites, web applications and e-commerce platforms for businesses around the world &mdash; clean engineering, clear communication, dependable delivery.</p>
          <div className="hero-cta reveal">
            <a href="#contact" className="btn btn-primary">Get in touch &rarr;</a>
            <a href="#services" className="btn btn-ghost">View services</a>
          </div>
          <div className="stats reveal">
            <div className="stat"><div className="num">6+ yrs</div><div className="lbl">Development experience</div></div>
            <div className="stat"><div className="num">40+</div><div className="lbl">Projects delivered</div></div>
            <div className="stat"><div className="num">Global</div><div className="lbl">Clients served</div></div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-tag">What I do</div>
            <h2>Services</h2>
            <p>End-to-end technology services &mdash; from a single landing page to a full custom application, plus the ongoing support to keep it running.</p>
          </div>
          <div className="grid">
            <div className="card reveal">
              <div className="ico"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 21h8"/></svg></div>
              <h3>Web Development</h3>
              <p>Fast, responsive, SEO-ready websites built with modern standards &mdash; corporate sites, landing pages and WordPress builds.</p>
            </div>
            <div className="card reveal">
              <div className="ico"><svg viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3"/><circle cx="12" cy="12" r="3"/></svg></div>
              <h3>Web Applications</h3>
              <p>Custom web apps and dashboards with secure backends, clean APIs and intuitive interfaces tailored to your workflow.</p>
            </div>
            <div className="card reveal">
              <div className="ico"><svg viewBox="0 0 24 24"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.5 13h11l2-9H6"/></svg></div>
              <h3>E-commerce Solutions</h3>
              <p>WooCommerce and custom storefronts with payments, inventory and a checkout experience designed to convert.</p>
            </div>
            <div className="card reveal">
              <div className="ico"><svg viewBox="0 0 24 24"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg></div>
              <h3>Custom Development</h3>
              <p>Bespoke plugins, integrations and automations &mdash; API connections, third-party services and tailored functionality.</p>
            </div>
            <div className="card reveal">
              <div className="ico"><svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 3 2 5 2 7h10c0-2 2-4 2-7a7 7 0 0 0-7-7zM9 21h6"/></svg></div>
              <h3>UI / UX &amp; Redesign</h3>
              <p>Refreshing outdated sites and apps with thoughtful interface design, better performance and modern accessibility.</p>
            </div>
            <div className="card reveal">
              <div className="ico"><svg viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3"/><circle cx="12" cy="12" r="3"/></svg></div>
              <h3>Maintenance &amp; Support</h3>
              <p>Ongoing updates, security hardening, backups and quick fixes &mdash; reliable support so your site keeps running smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="wrap about">
          <div className="reveal">
            <div className="sec-tag">About</div>
            <h2>Engineering you can rely on.</h2>
            <p>RobinDevTech is an independent development practice focused on building dependable software for businesses of every size. The approach is simple: understand the problem, build it well, and stay available afterwards.</p>
            <p>Every project is handled with direct communication, clear timelines and clean, maintainable code &mdash; whether it&rsquo;s a brochure website or a complex application.</p>
            <ul className="checklist">
              <li><span className="tick">&#10003;</span> Direct, responsive communication throughout the project</li>
              <li><span className="tick">&#10003;</span> Transparent pricing and realistic timelines</li>
              <li><span className="tick">&#10003;</span> Clean, well-documented and maintainable code</li>
              <li><span className="tick">&#10003;</span> Post-launch support and long-term partnership</li>
            </ul>
          </div>
          <div className="panel-card reveal">
            <h4>Technologies &amp; tools</h4>
            <div className="stack">
              <span className="chip">HTML5</span>
              <span className="chip">CSS3</span>
              <span className="chip">JavaScript</span>
              <span className="chip">React</span>
              <span className="chip">Node.js</span>
              <span className="chip">PHP</span>
              <span className="chip">WordPress</span>
              <span className="chip">WooCommerce</span>
              <span className="chip">MySQL</span>
              <span className="chip">REST APIs</span>
              <span className="chip">Git</span>
              <span className="chip">Linux</span>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="section">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sec-tag">How it works</div>
            <h2>A straightforward process</h2>
            <p>Clear stages from first conversation to ongoing support &mdash; no surprises, just steady progress.</p>
          </div>
          <div className="steps">
            <div className="step reveal"><h3>Discover</h3><p>We talk through your goals, scope and requirements to define exactly what success looks like.</p></div>
            <div className="step reveal"><h3>Design</h3><p>Structure, layout and approach are mapped out and agreed before any heavy lifting begins.</p></div>
            <div className="step reveal"><h3>Build</h3><p>Development happens in clear milestones with regular updates so you always know where things stand.</p></div>
            <div className="step reveal"><h3>Support</h3><p>After launch, I stay on hand for updates, fixes and improvements as your needs grow.</p></div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="wrap">
          <div className="contact-card reveal">
            <div className="sec-tag">Get in touch</div>
            <h2>Let&rsquo;s build something.</h2>
            <p>Have a project in mind or just want to talk through an idea? Reach out and I&rsquo;ll get back to you quickly.</p>
            <div className="contact-methods">
              <a href="mailto:hello@robindevtech.in" className="btn btn-primary">hello@robindevtech.in</a>
              <a href="tel:+910000000000" className="btn btn-ghost">+91 00000 00000</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="wrap foot">
          <div className="brand"><span className="dot"></span>RobinDevTech</div>
          <div>&copy; {new Date().getFullYear()} RobinDevTech &middot; Web &amp; Software Development &middot; India</div>
        </div>
      </footer>
    </>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <html lang="en" />
    <title>RobinDevTech — Custom Web & Software Development</title>
    <meta name="description" content="RobinDevTech provides custom web development, web application engineering, e-commerce solutions and ongoing technical support for businesses worldwide." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />
  </>
)

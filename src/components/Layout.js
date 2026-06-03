import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { SITE } from "../site"
import "../styles/robindevtech.css"

const NAV = [
  { label: "Services", to: "/#services" },
  { label: "Work", to: "/#portfolio" },
  { label: "About", to: "/#about" },
  { label: "Process", to: "/#process" },
  { label: "Contact", to: "/contact" },
]

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showCookie, setShowCookie] = useState(false)

  // Scroll-reveal animations (works on every page).
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
      el.style.transitionDelay = (i % 6) * 0.06 + "s"
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  // Cookie consent.
  useEffect(() => {
    try {
      if (!window.localStorage.getItem("rdt-cookie-consent")) {
        setShowCookie(true)
      }
    } catch (e) {
      /* localStorage unavailable */
    }
  }, [])

  const acceptCookies = () => {
    try {
      window.localStorage.setItem("rdt-cookie-consent", "accepted")
    } catch (e) {}
    setShowCookie(false)
  }

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <nav>
            <Link
              to="/"
              className="brand-link"
              aria-label={SITE.name}
              onClick={() => setMenuOpen(false)}
            >
              <img
                src="/robindevtech-logo.svg"
                alt={SITE.name}
                className="brand-logo"
              />
            </Link>

            <button
              className="nav-toggle"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className={`navlinks ${menuOpen ? "open" : ""}`}>
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn btn-primary nav-cta-mobile"
                onClick={() => setMenuOpen(false)}
              >
                Start a project
              </Link>
            </div>

            <Link to="/contact" className="btn btn-primary nav-cta">
              Start a project
            </Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="wrap foot-grid">
          <div className="foot-brand">
            <img
              src="/robindevtech-logo.svg"
              alt={SITE.name}
              className="foot-logo"
            />
            <p>{SITE.tagline}</p>
            <a href={`mailto:${SITE.email}`} className="foot-email">
              {SITE.email}
            </a>
          </div>

          <div className="foot-col">
            <h5>Navigate</h5>
            <Link to="/#services">Services</Link>
            <Link to="/#portfolio">Work</Link>
            <Link to="/#about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="foot-col">
            <h5>Services</h5>
            <Link to="/#services">Web Development</Link>
            <Link to="/#services">Web Applications</Link>
            <Link to="/#services">E-commerce</Link>
            <Link to="/#services">Maintenance &amp; Support</Link>
          </div>

          <div className="foot-col">
            <h5>Legal</h5>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>

        <div className="wrap foot-bottom">
          <span>
            &copy; {new Date().getFullYear()} {SITE.name} &middot; {SITE.location}
          </span>
          <span>Web &amp; Software Development</span>
        </div>
      </footer>

      {showCookie && (
        <div className="cookie-banner" role="dialog" aria-label="Cookie notice">
          <p>
            We use essential cookies to make this site work and analytics to
            understand how it&rsquo;s used. By continuing, you agree to our{" "}
            <Link to="/cookie-policy">Cookie Policy</Link>.
          </p>
          <div className="cookie-actions">
            <Link to="/cookie-policy" className="btn btn-ghost">
              Learn more
            </Link>
            <button className="btn btn-primary" onClick={acceptCookies}>
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Layout

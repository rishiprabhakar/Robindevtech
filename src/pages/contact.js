import React, { useState } from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { SITE } from "../site"

const ContactPage = () => {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const f = e.target
    const name = f.name.value.trim()
    const email = f.email.value.trim()
    const subject = f.subject.value.trim() || "New project enquiry"
    const message = f.message.value.trim()

    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `${message}\n\n` +
      `— sent from ${SITE.url}`

    const mailto =
      `mailto:${SITE.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`

    window.location.href = mailto
    setSent(true)
  }

  return (
    <Layout>
      <section className="page-hero">
        <div className="wrap">
          <div className="sec-tag reveal">Contact</div>
          <h1 className="reveal">Let&rsquo;s talk about your project.</h1>
          <p className="lead reveal">
            Tell me a little about what you need and I&rsquo;ll get back to you,
            usually within one business day.
          </p>
        </div>
      </section>

      <section className="section section-top-0">
        <div className="wrap contact-grid">
          <div className="reveal">
            <form className="form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@company.com" />
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="What can I help with?" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" required placeholder="A few details about your project, timeline and budget…"></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                Send message &rarr;
              </button>
              {sent && (
                <p className="form-note">
                  Your email app should have opened with the message ready to
                  send. If it didn&rsquo;t, email me directly at{" "}
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
                </p>
              )}
            </form>
          </div>

          <aside className="contact-info reveal">
            <h3>Other ways to reach me</h3>
            <ul className="info-list">
              <li>
                <span className="info-label">Email</span>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <span className="info-label">Phone</span>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
              </li>
              <li>
                <span className="info-label">Location</span>
                <span>{SITE.location} &middot; working with clients worldwide</span>
              </li>
              <li>
                <span className="info-label">Hours</span>
                <span>Mon&ndash;Fri, 10:00&ndash;19:00 IST</span>
              </li>
            </ul>
            <p className="info-foot">
              Prefer email? Drop a line anytime and include as much detail as
              you can — goals, timeline and budget all help me give you a useful
              first reply.
            </p>
          </aside>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage

export const Head = () => (
  <Seo
    title="Contact"
    path="/contact"
    description={`Get in touch with ${SITE.name} for web development, web applications, e-commerce and website maintenance.`}
  />
)

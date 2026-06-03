import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const ThankYouPage = () => (
  <Layout>
    <section className="section error-section">
      <div className="wrap">
        <div className="sec-tag">Message sent</div>
        <h1 className="error-title">Thank you!</h1>
        <p className="lead">
          Your message has been sent &mdash; I&rsquo;ll get back to you, usually
          within one business day.
        </p>
        <div className="hero-cta">
          <Link to="/" className="btn btn-primary">
            Back to home
          </Link>
          <Link to="/#portfolio" className="btn btn-ghost">
            View my work
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default ThankYouPage

export const Head = () => <Seo title="Thank you" path="/thank-you" />

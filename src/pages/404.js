import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <section className="section error-section">
      <div className="wrap">
        <div className="sec-tag">Error 404</div>
        <h1 className="error-title">Page not found</h1>
        <p className="lead">
          The page you were looking for doesn&rsquo;t exist or may have been
          moved.
        </p>
        <div className="hero-cta">
          <Link to="/" className="btn btn-primary">
            Back to home
          </Link>
          <Link to="/contact" className="btn btn-ghost">
            Contact me
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage

export const Head = () => <Seo title="Page not found" path="/404" />

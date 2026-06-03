import React from "react"
import { Link } from "gatsby"
import "../styles/robindevtech.css"

const NotFoundPage = () => (
  <section className="section" style={{ minHeight: "70vh", display: "grid", placeItems: "center", textAlign: "center" }}>
    <div className="wrap">
      <div className="sec-tag">Error 404</div>
      <h1 style={{ fontSize: "clamp(2.4rem,6vw,4rem)", margin: "14px 0 16px" }}>Page not found</h1>
      <p style={{ color: "var(--muted)", marginBottom: "28px" }}>The page you were looking for doesn&rsquo;t exist.</p>
      <Link to="/" className="btn btn-primary">Back to home</Link>
    </div>
  </section>
)

export default NotFoundPage

export const Head = () => <title>Page not found — RobinDevTech</title>

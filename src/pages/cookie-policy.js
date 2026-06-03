import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { SITE, LEGAL_UPDATED } from "../site"

const CookiePolicyPage = () => (
  <Layout>
    <section className="page-hero">
      <div className="wrap">
        <div className="sec-tag reveal">Legal</div>
        <h1 className="reveal">Cookie Policy</h1>
        <p className="lead reveal">Last updated: {LEGAL_UPDATED}</p>
      </div>
    </section>

    <section className="section section-top-0">
      <div className="wrap prose reveal">
        <p>
          This Cookie Policy explains how {SITE.name} uses cookies and similar
          technologies on {SITE.url}. It should be read together with our{" "}
          <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>

        <h2>1. What are cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a
          website. They are widely used to make websites work, to improve their
          performance, and to provide information to the site owners.
        </p>

        <h2>2. Types of cookies we use</h2>
        <ul>
          <li>
            <strong>Essential cookies</strong> — required for the website to
            function properly, such as remembering that you have accepted this
            cookie notice. These cannot be switched off in our systems.
          </li>
          <li>
            <strong>Analytics cookies</strong> — help us understand how visitors
            interact with the website by collecting information anonymously, so
            we can improve it over time.
          </li>
          <li>
            <strong>Preference cookies</strong> — remember choices you make to
            give you a better experience.
          </li>
        </ul>

        <h2>3. Managing cookies</h2>
        <p>
          When you first visit our site you are shown a cookie notice. You can
          also control and delete cookies through your browser settings. Most
          browsers let you refuse or remove cookies; however, disabling certain
          cookies may affect how the website functions.
        </p>

        <h2>4. Third-party cookies</h2>
        <p>
          Some cookies may be set by third-party services that appear on our
          pages, such as analytics providers. These third parties have their own
          privacy and cookie policies which govern their use of such
          information.
        </p>

        <h2>5. Changes to this policy</h2>
        <p>
          We may update this Cookie Policy from time to time. Any changes will be
          posted on this page with a revised &ldquo;last updated&rdquo; date.
        </p>

        <h2>6. Contact</h2>
        <p>
          If you have questions about our use of cookies, contact us at{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </div>
    </section>
  </Layout>
)

export default CookiePolicyPage

export const Head = () => <Seo title="Cookie Policy" path="/cookie-policy" />

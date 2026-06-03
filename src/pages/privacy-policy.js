import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { SITE, LEGAL_UPDATED } from "../site"

const PrivacyPolicyPage = () => (
  <Layout>
    <section className="page-hero">
      <div className="wrap">
        <div className="sec-tag reveal">Legal</div>
        <h1 className="reveal">Privacy Policy</h1>
        <p className="lead reveal">Last updated: {LEGAL_UPDATED}</p>
      </div>
    </section>

    <section className="section section-top-0">
      <div className="wrap prose reveal">
        <p>
          This Privacy Policy explains how {SITE.name} (&ldquo;we&rdquo;,
          &ldquo;us&rdquo; or &ldquo;I&rdquo;), operated by {SITE.owner}, collects,
          uses and protects information when you visit {SITE.url} or engage our
          services. We are committed to handling your data responsibly and only
          for the purposes described below.
        </p>

        <h2>1. Information we collect</h2>
        <p>We may collect the following information:</p>
        <ul>
          <li>
            <strong>Contact details</strong> you provide directly — such as your
            name, email address, phone number and the contents of any message
            you send through our contact form or by email.
          </li>
          <li>
            <strong>Project information</strong> you share with us while
            discussing or delivering work.
          </li>
          <li>
            <strong>Technical and usage data</strong> collected automatically,
            such as your IP address, browser type, device information and pages
            visited, primarily through cookies and analytics tools.
          </li>
        </ul>

        <h2>2. How we use your information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>respond to enquiries and provide quotes;</li>
          <li>deliver, manage and support the services you request;</li>
          <li>send project-related communication and invoices;</li>
          <li>improve our website and understand how it is used;</li>
          <li>comply with legal and accounting obligations.</li>
        </ul>

        <h2>3. Legal basis</h2>
        <p>
          We process personal data where it is necessary to perform a contract
          with you, where we have a legitimate interest in operating our
          business, where you have given consent, or where we are required to do
          so by law.
        </p>

        <h2>4. Sharing your information</h2>
        <p>
          We do not sell your personal data. We may share information with
          trusted third-party service providers who help us operate the website
          and deliver our services — for example hosting, email and analytics
          providers — who are only permitted to use it on our instructions. We
          may also disclose information where required by law.
        </p>

        <h2>5. Cookies</h2>
        <p>
          Our website uses cookies and similar technologies. For details on what
          we use and how to control them, please see our{" "}
          <Link to="/cookie-policy">Cookie Policy</Link>.
        </p>

        <h2>6. Data retention</h2>
        <p>
          We keep personal data only for as long as necessary to fulfil the
          purposes described in this policy, including any legal, accounting or
          reporting requirements.
        </p>

        <h2>7. Your rights</h2>
        <p>
          Depending on your location, you may have the right to access, correct,
          delete or restrict the use of your personal data, and to object to its
          processing. To exercise any of these rights, contact us at{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>

        <h2>8. Data security</h2>
        <p>
          We take reasonable technical and organisational measures to protect
          your information against unauthorised access, loss or misuse. However,
          no method of transmission over the internet is completely secure.
        </p>

        <h2>9. Third-party links</h2>
        <p>
          Our website may contain links to external sites. We are not
          responsible for the privacy practices or content of those websites.
        </p>

        <h2>10. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with a revised &ldquo;last updated&rdquo; date.
        </p>

        <h2>11. Contact</h2>
        <p>
          If you have any questions about this Privacy Policy or how your data is
          handled, contact {SITE.owner} at{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </div>
    </section>
  </Layout>
)

export default PrivacyPolicyPage

export const Head = () => (
  <Seo title="Privacy Policy" path="/privacy-policy" />
)

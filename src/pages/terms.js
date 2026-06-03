import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { SITE, LEGAL_UPDATED } from "../site"

const TermsPage = () => (
  <Layout>
    <section className="page-hero">
      <div className="wrap">
        <div className="sec-tag reveal">Legal</div>
        <h1 className="reveal">Terms of Service</h1>
        <p className="lead reveal">Last updated: {LEGAL_UPDATED}</p>
      </div>
    </section>

    <section className="section section-top-0">
      <div className="wrap prose reveal">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern the use of{" "}
          {SITE.url} and the services provided by {SITE.name}, operated by{" "}
          {SITE.owner} (&ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;I&rdquo;). By
          using this website or engaging our services, you agree to these Terms.
        </p>

        <h2>1. Services</h2>
        <p>
          We provide web development, web application development, e-commerce,
          web design and website maintenance services. The specific scope,
          deliverables, timeline and fees for any engagement will be agreed
          separately in a written proposal, quote or statement of work.
        </p>

        <h2>2. Quotes and engagement</h2>
        <p>
          Quotes are valid for the period stated in the proposal. A project is
          considered confirmed once you accept the proposal in writing and any
          required deposit has been received.
        </p>

        <h2>3. Fees and payment</h2>
        <ul>
          <li>
            Fees are as set out in the agreed proposal and are quoted exclusive
            of any applicable taxes unless stated otherwise.
          </li>
          <li>
            For most projects a deposit is payable before work begins, with the
            balance due at agreed milestones or on completion.
          </li>
          <li>
            Invoices are payable within the period stated on the invoice.
            International payments may be made through the payment methods we
            specify at the time of invoicing.
          </li>
        </ul>

        <h2>4. Refunds and cancellation</h2>
        <p>
          Because work is delivered as bespoke professional services, fees for
          work already completed are non-refundable. If you cancel a project
          before completion, you remain responsible for payment for all work
          performed up to the cancellation date. Any deposit covers initial
          scoping and scheduling and is non-refundable once work has commenced.
          Specific cancellation terms for a given project will be set out in its
          proposal.
        </p>

        <h2>5. Client responsibilities</h2>
        <p>
          You agree to provide the content, access, approvals and feedback needed
          to complete the work in a timely manner. Delays in providing these may
          affect the project timeline. You confirm that any materials you supply
          do not infringe the rights of any third party.
        </p>

        <h2>6. Intellectual property</h2>
        <p>
          Unless agreed otherwise in writing, ownership of the final deliverables
          transfers to you once all invoices have been paid in full. We retain
          the right to display the completed work in our portfolio unless you
          request otherwise.
        </p>

        <h2>7. Revisions and additional work</h2>
        <p>
          The number of revisions included is defined in the project proposal.
          Work that falls outside the agreed scope will be quoted and billed
          separately.
        </p>

        <h2>8. Warranties and liability</h2>
        <p>
          We deliver services with reasonable skill and care. To the maximum
          extent permitted by law, our total liability arising from any
          engagement is limited to the fees paid for that engagement, and we are
          not liable for indirect or consequential losses.
        </p>

        <h2>9. Third-party services</h2>
        <p>
          Projects may rely on third-party platforms, hosting, plugins or APIs.
          We are not responsible for the availability, performance or policies of
          those third parties.
        </p>

        <h2>10. Confidentiality</h2>
        <p>
          Each party agrees to keep confidential any non-public information
          shared during an engagement and to use it only for the purpose of
          delivering the project.
        </p>

        <h2>11. Changes to these Terms</h2>
        <p>
          We may update these Terms from time to time. The version published on
          this page applies to your use of the website. Terms specific to a
          project are those agreed in its proposal.
        </p>

        <h2>12. Contact</h2>
        <p>
          Questions about these Terms can be sent to {SITE.owner} at{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </div>
    </section>
  </Layout>
)

export default TermsPage

export const Head = () => <Seo title="Terms of Service" path="/terms" />

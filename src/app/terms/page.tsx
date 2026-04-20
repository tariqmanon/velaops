import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "VelaOps Terms of Service — the terms governing your use of our website and managed AI agent services.",
};

// TEMPLATE — review with a UK lawyer before publishing. Placeholders marked [LIKE THIS] must be filled in.

export default function TermsPage() {
  return (
    <>
      <section style={{ background: "var(--black)", padding: "8rem clamp(2rem,4vw,4rem) 4rem" }}>
        <div className="mx-auto max-w-3xl">
          <div className="s-label">Legal</div>
          <h1 className="section-h text-[var(--white)]">Terms of<br /><em>Service.</em></h1>
          <p className="mt-6 text-base text-[var(--grey)]">Last updated: [DATE TO FILL IN]</p>
        </div>
      </section>

      <article style={{ background: "var(--dark)", padding: "4rem clamp(2rem,4vw,4rem) 8rem" }}>
        <div className="prose prose-lg prose-invert mx-auto max-w-3xl">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the VelaOps website and our managed AI agent services (&ldquo;Services&rdquo;). By using our website or engaging our Services, you agree to these Terms.
          </p>

          <h2>1. Who we are</h2>
          <p>
            VelaOps is a trading name of <strong>[LEGAL COMPANY NAME]</strong> (company number <strong>[COMPANY NUMBER]</strong>), registered in England and Wales at <strong>[REGISTERED ADDRESS]</strong>.
          </p>

          <h2>2. The Services</h2>
          <p>
            VelaOps provides managed AI agent operations. Our Services include designing, deploying and running AI agent stacks on behalf of clients, delivering weekly outputs such as prospect lists, outreach sequences, content and performance reports.
          </p>
          <p>
            Specific deliverables, pricing and service levels are set out in your <strong>Order Form</strong> or <strong>Service Agreement</strong>, which forms part of these Terms.
          </p>

          <h2>3. Fees and payment</h2>
          <ul>
            <li>Subscription fees are billed monthly in advance.</li>
            <li>Setup fees are invoiced upon engagement and are non-refundable once work commences.</li>
            <li>API usage fees are billed separately at exact cost with no markup, invoiced monthly in arrears.</li>
            <li>All fees are exclusive of VAT, which will be added where applicable.</li>
            <li>Invoices are payable within <strong>[PAYMENT TERMS — e.g. 14 days]</strong>. Late payments may incur interest at the statutory rate.</li>
          </ul>

          <h2>4. Your responsibilities</h2>
          <p>To receive the Services, you agree to:</p>
          <ul>
            <li>Provide accurate information about your business and target market.</li>
            <li>Grant access to the tools and systems required for the agents to operate.</li>
            <li>Review and approve outputs in a timely manner where your approval is required.</li>
            <li>Comply with all applicable laws, including anti-spam legislation (PECR, GDPR) for any outreach activities.</li>
          </ul>

          <h2>5. Our responsibilities</h2>
          <ul>
            <li>We will deliver the Services with reasonable skill and care.</li>
            <li>We will keep your data confidential and handle it in accordance with our <a href="/privacy">Privacy Policy</a>.</li>
            <li>We will notify you of any material changes to the Services.</li>
          </ul>

          <h2>6. Intellectual property</h2>
          <p>
            You retain ownership of all data, content and outputs produced on your behalf through the Services. We retain ownership of our underlying methodology, software, prompts and tools.
          </p>

          <h2>7. Term and termination</h2>
          <ul>
            <li>Subscriptions are month-to-month unless otherwise agreed.</li>
            <li>Either party may cancel with <strong>[NOTICE PERIOD — e.g. 30 days]</strong> written notice.</li>
            <li>We may suspend or terminate Services if you breach these Terms or fail to pay invoices when due.</li>
            <li>On termination, we will provide a reasonable handover of any outputs produced but owned by you.</li>
          </ul>

          <h2>8. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, our total liability to you for any claim arising out of the Services is limited to the total fees paid by you in the <strong>[3 / 6 / 12] months</strong> immediately preceding the event giving rise to the claim.
          </p>
          <p>
            We are not liable for indirect, consequential or loss-of-profit damages. Nothing in these Terms excludes liability for death or personal injury caused by our negligence, or for fraud.
          </p>

          <h2>9. Confidentiality</h2>
          <p>
            Each party agrees to keep the other&apos;s confidential information confidential and to use it only for the purposes of performing under these Terms.
          </p>

          <h2>10. Governing law</h2>
          <p>
            These Terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the English courts.
          </p>

          <h2>11. Changes to these Terms</h2>
          <p>
            We may update these Terms from time to time. Material changes will be notified to active clients. Continued use of the Services after a change constitutes acceptance of the updated Terms.
          </p>

          <h2>12. Contact</h2>
          <p>
            Questions about these Terms? Email <a href="mailto:hello@velaops.ai">hello@velaops.ai</a>.
          </p>
        </div>
      </article>
    </>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "VelaOps Privacy Policy — how we collect, use, store and protect your personal data under UK GDPR.",
};

// TEMPLATE — review with a UK lawyer before publishing. Placeholders marked [LIKE THIS] must be filled in.

export default function PrivacyPage() {
  return (
    <>
      <section style={{ background: "var(--black)", padding: "8rem clamp(2rem,4vw,4rem) 4rem" }}>
        <div className="mx-auto max-w-3xl">
          <div className="s-label">Legal</div>
          <h1 className="section-h text-[var(--white)]">Privacy<br /><em>Policy.</em></h1>
          <p className="mt-6 text-base text-[var(--grey)]">Last updated: [DATE TO FILL IN]</p>
        </div>
      </section>

      <article style={{ background: "var(--dark)", padding: "4rem clamp(2rem,4vw,4rem) 8rem" }}>
        <div className="prose prose-lg prose-invert mx-auto max-w-3xl">
          <p>
            This Privacy Policy explains how VelaOps (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses and protects personal data when you visit <a href="https://velaops.ai">velaops.ai</a> or use our services. We are committed to protecting your privacy in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>

          <h2>1. Who we are</h2>
          <p>
            VelaOps is a trading name of <strong>[LEGAL COMPANY NAME]</strong>, a company registered in England and Wales (company number <strong>[COMPANY NUMBER]</strong>), with its registered office at <strong>[REGISTERED ADDRESS]</strong>.
          </p>
          <p>
            We are the data controller for any personal data we collect about you. If you have any questions about this policy or your data, contact us at <a href="mailto:hello@velaops.ai">hello@velaops.ai</a>.
          </p>

          <h2>2. What data we collect</h2>
          <p>We collect the following categories of personal data:</p>
          <ul>
            <li><strong>Contact information:</strong> name, work email, company name — when you submit our contact form or sign up for our service.</li>
            <li><strong>Communication records:</strong> emails, call notes, and any other correspondence you share with us.</li>
            <li><strong>Business data:</strong> if you become a client, we process business data (e.g. prospect lists, CRM records, email content) strictly on your behalf to deliver the service.</li>
            <li><strong>Website usage data:</strong> IP address, browser type, pages viewed, and session duration, collected via <strong>[ANALYTICS PROVIDER — e.g. Vercel Analytics, Plausible, Google Analytics]</strong>.</li>
          </ul>

          <h2>3. How we use your data</h2>
          <p>We use personal data for the following purposes:</p>
          <ul>
            <li>To respond to your enquiries and deliver our services (lawful basis: contract).</li>
            <li>To send you relevant updates if you&apos;ve opted in (lawful basis: consent).</li>
            <li>To operate and improve our website (lawful basis: legitimate interests).</li>
            <li>To comply with legal obligations (lawful basis: legal obligation).</li>
          </ul>

          <h2>4. Data sharing</h2>
          <p>We only share personal data with:</p>
          <ul>
            <li><strong>Service providers</strong> who help us run our business (e.g. email infrastructure, hosting, analytics). These are bound by confidentiality and data processing agreements.</li>
            <li><strong>AI model providers</strong> (e.g. Anthropic, OpenAI) to operate the agent services — subject to their enterprise data handling terms.</li>
            <li><strong>Legal authorities</strong> where required by law.</li>
          </ul>
          <p>We never sell your data.</p>

          <h2>5. International transfers</h2>
          <p>
            Some of our service providers are based outside the UK. Where data is transferred outside the UK, we rely on adequacy decisions or standard contractual clauses to ensure your data remains protected.
          </p>

          <h2>6. How long we keep data</h2>
          <p>
            We keep personal data only for as long as necessary. Contact enquiries are retained for <strong>[RETENTION PERIOD — e.g. 24 months]</strong>. Client business data is retained for the duration of our service agreement plus 6 months, unless you request deletion earlier.
          </p>

          <h2>7. Your rights under UK GDPR</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Ask us to correct inaccurate data</li>
            <li>Ask us to delete your data (&ldquo;right to erasure&rdquo;)</li>
            <li>Restrict or object to our processing</li>
            <li>Request your data in a portable format</li>
            <li>Withdraw consent at any time (where consent is the lawful basis)</li>
          </ul>
          <p>
            To exercise any of these rights, email <a href="mailto:hello@velaops.ai">hello@velaops.ai</a>. You also have the right to complain to the UK Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk/">ico.org.uk</a>.
          </p>

          <h2>8. Cookies</h2>
          <p>
            We use essential cookies to operate the website and <strong>[OPTIONAL: analytics cookies to understand how visitors use the site]</strong>. You can control cookies via your browser settings.
          </p>

          <h2>9. Security</h2>
          <p>
            We take reasonable technical and organisational measures to protect personal data, including encryption in transit, access controls, and regular security reviews. No system is perfectly secure, but we commit to notifying you promptly in the event of a data breach affecting your personal data.
          </p>

          <h2>10. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Material changes will be communicated via email or a prominent notice on our website.
          </p>

          <h2>11. Contact</h2>
          <p>
            Questions about this policy? Email <a href="mailto:hello@velaops.ai">hello@velaops.ai</a>.
          </p>
        </div>
      </article>
    </>
  );
}

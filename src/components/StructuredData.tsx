export function OrganisationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VelaOps",
    url: "https://velaops.ai",
    description:
      "VelaOps builds and operates custom AI agent networks for UK businesses. Marketing, outreach, content and reporting — fully managed.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://velaops.ai/contact",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  date,
  slug,
}: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    url: `https://velaops.ai/blog/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "VelaOps",
      url: "https://velaops.ai",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

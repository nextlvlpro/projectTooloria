const StructuredData = ({
  type = 'website',
  url = 'https://tooloria.org',
  title = 'Tooloria - Free Online Tools',
  description = 'Tooloria offers free online tools for applicants and Common Service Center/Lok Mitra kendra users.',
  image = 'https://tooloria.org/og-image.png',
  faq = [],
}) => {
  const baseJsonLd = {
    '@context': 'https://schema.org',
    '@type': type === 'tool' ? 'SoftwareApplication' : 'WebSite',
    name: title,
    url,
    description,
    ...(type === 'tool' && {
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'All',
      image,
    }),
  }

  const faqJsonLd =
    faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map(({ question, answer }) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: answer,
            },
          })),
        }
      : null

  const structuredData = [baseJsonLd, faqJsonLd].filter(Boolean)

  return structuredData.map((json, i) => (
    <script
      key={i}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  ))
}

export default StructuredData

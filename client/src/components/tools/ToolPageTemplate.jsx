// File: src/components/tools/ToolPageTemplate.jsx
// Server Component - No interactivity, pure rendering

import {
  generateToolStructuredData,
  generateBreadcrumbData,
  generateFAQData
} from '@/utils/seo-utils';
import {
  HowToUseSection,
  FeaturesSection,
  UseCasesSection,
  BestPracticesSection,
  BenefitsSection,
  CTASection
} from './PageSections';

const ToolPageTemplate = ({
  config,
  children,
  // Static sections (no interactivity)
  howToSteps = null,
  features = null,
  useCases = null,
  bestPractices = null,
  benefits = null,
  cta = null
}) => {
  // Generate structured data
  const toolStructuredData = generateToolStructuredData(config);
  const breadcrumbData = generateBreadcrumbData(config.breadcrumbs || []);
  const faqData = generateFAQData(config.faqs || []);

  return (
    <>
      {/* Structured Data - Always include */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolStructuredData) }}
      />
      {breadcrumbData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
      )}
      {faqData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* SEO-optimized Header - Always include */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {config.h1 || config.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            {config.description}
          </p>
        </header>

        {/* Main Tool Component - Always include */}
        <div className="mb-16">
          {children}
        </div>

        {/* Static Sections */}
        {features && (
          <FeaturesSection
            title={config.featuresTitle}
            features={features}
            columns={features.length <= 4 ? features.length : 3}
          />
        )}

        {useCases && (
          <UseCasesSection
            title={config.useCasesTitle}
            useCases={useCases}
          />
        )}

        {howToSteps && (
          <HowToUseSection
            title={config.howToTitle}
            steps={howToSteps}
          />
        )}

        {benefits && (
          <BenefitsSection
            title={config.benefitsTitle}
            benefits={benefits}
            columns={benefits.length <= 3 ? benefits.length : 3}
          />
        )}

        {bestPractices && (
          <BestPracticesSection
            title={config.bestPracticesTitle}
            dos={bestPractices.dos}
            donts={bestPractices.donts}
          />
        )}

        {cta && (
          <CTASection
            title={cta.title}
            description={cta.description}
            primaryButton={cta.primaryButton}
            secondaryButton={cta.secondaryButton}
          />
        )}
      </div>
    </>
  );
};

export default ToolPageTemplate;
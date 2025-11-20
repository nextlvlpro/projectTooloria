// File: src/app/tools/utility/page.jsx
// Refactored using the new reusable components and utilities

import { utilityTools } from '../toolsinfo';
import { generateToolMetadata, generateCollectionStructuredData } from '@/utils/seo-utils';
import { createToolCategoryConfig } from '@/utils/tools-page-factory';
import ToolsGrid from '@/components/tools/ToolsGrid';
import { 
  FeaturesSection, 
  UseCasesSection, 
  BenefitsSection,
  CTASection 
} from '@/components/tools/PageSections';

// Generate page config using factory
const pageConfig = createToolCategoryConfig('utility', utilityTools);

// SEO Metadata using utility
export const metadata = generateToolMetadata(pageConfig);

export default function UtilityToolsPage() {
  // Generate structured data
  const structuredData = generateCollectionStructuredData(pageConfig);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Free Utility Tools
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            {pageConfig.description}
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div>
              <span className="font-semibold text-green-600">{pageConfig.toolsCount.available}</span> Available
            </div>
            <div>
              <span className="font-semibold text-orange-600">{pageConfig.toolsCount.comingSoon}</span> Coming Soon
            </div>
            <div>
              <span className="font-semibold">{pageConfig.toolsCount.total}</span> Total Tools
            </div>
          </div>
        </header>

        {/* Tools Grid - Reusable component handles available/coming soon logic */}
        <ToolsGrid 
          tools={utilityTools} 
          title="Utility Tools"
          showComingSoon={true}
        />

        {/* Features Section */}
        <FeaturesSection 
          title="Key Features"
          features={pageConfig.features}
          columns={4}
        />

        {/* Use Cases Section */}
        <UseCasesSection 
          title="Perfect for Service Centers"
          useCases={pageConfig.useCases}
        />

        {/* Benefits Section */}
        <BenefitsSection 
          title="Why Choose Our Utility Tools?"
          benefits={[
            {
              icon: '🔒',
              title: 'Privacy First',
              description: 'All processing happens locally in your browser. No data leaves your device.'
            },
            {
              icon: '⚡',
              title: 'Lightning Fast', 
              description: 'Instant processing with no waiting for uploads or downloads.'
            },
            {
              icon: '💰',
              title: 'Always Free',
              description: 'No subscriptions, no hidden costs, no registration required.'
            }
          ]}
          columns={3}
        />

        {/* CTA Section */}
        <CTASection 
          title="Start Using Our Utility Tools Today"
          description="Join thousands of service centers using Tooloria to serve customers more efficiently."
          primaryButton={{
            text: "Try QR Code Generator",
            href: "/tools/utility/qr-generator"
          }}
          secondaryButton={{
            text: "Explore All Tools", 
            href: "/tools"
          }}
        />
      </div>
    </>
  );
}
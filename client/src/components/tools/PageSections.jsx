"use client"
// File: src/components/tools/PageSections.jsx
// Reusable components for common page sections

import Link from 'next/link';
import { Button } from '@/components/ui';

// How to use section - generic steps component
export const HowToUseSection = ({ title, steps, className = "" }) => {
  return (
    <section className={`mt-16 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        {title || "How to Use"}
      </h2>
      
      <div className={`grid gap-6 ${steps.length === 4 ? 'md:grid-cols-4' : steps.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
              {index + 1}
            </div>
            <h3 className="font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Features grid section
export const FeaturesSection = ({ title, features, columns = 3 }) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        {title}
      </h2>
      
      <div className={`grid ${gridCols[columns]} gap-6`}>
        {features.map((feature, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-2xl mb-3">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Use cases section - perfect for service centers
export const UseCasesSection = ({ title, useCases }) => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        {title || "Perfect for Service Centers"}
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {useCases.map((useCase, index) => (
          <div key={index} className="text-center p-6">
            <div className="text-4xl mb-4">{useCase.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              {useCase.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {useCase.description}
            </p>
            {useCase.tools && (
              <div className="space-y-1">
                {useCase.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="text-xs text-blue-600 dark:text-blue-400">
                    • {tool}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// Best practices section with do's and don'ts
export const BestPracticesSection = ({ title, dos, donts }) => {
  return (
    <section className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-8">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        {title || "Best Practices"}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3">✅ Do's</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {dos.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-red-800 dark:text-red-300 mb-3">❌ Don'ts</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {donts.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// Benefits section
export const BenefitsSection = ({ title, benefits, columns = 3 }) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        {title || "Why Choose Our Tools?"}
      </h2>
      
      <div className={`grid ${gridCols[columns]} gap-6`}>
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xl mx-auto mb-3">
              {benefit.icon}
            </div>
            <h3 className="font-semibold mb-2">{benefit.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Examples section with interactive buttons
export const ExamplesSection = ({ title, examples, onExampleClick }) => {
  return (
    <section className="mt-16">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        {title || "Popular Examples"}
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {examples.map((example, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">{example.icon}</div>
              <h3 className="font-semibold">{example.title}</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
              {example.details.map((detail, detailIndex) => (
                <div key={detailIndex}>{detail}</div>
              ))}
            </div>
            {onExampleClick && (
              <button
                onClick={() => onExampleClick(example)}
                className="w-full px-3 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Use This Example
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// CTA section
export const CTASection = ({ title, description, primaryButton, secondaryButton }) => {
  return (
    <section className="text-center">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryButton && (
            <Link href={primaryButton.href}>
              <Button size="lg" className="px-8">
                {primaryButton.text}
              </Button>
            </Link>
          )}
          {secondaryButton && (
            <Link href={secondaryButton.href}>
              <Button variant="outline" size="lg" className="px-8">
                {secondaryButton.text}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

// Tips section
export const TipsSection = ({ tips, className = "" }) => {
  return (
    <div className={`bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 ${className}`}>
      <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">💡 Tips</h4>
      <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
        {tips.map((tip, index) => (
          <li key={index}>• {tip}</li>
        ))}
      </ul>
    </div>
  );
};

// Quick actions section
export const QuickActionsSection = ({ actions, className = "" }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={action.onClick}
          disabled={action.disabled}
          className={`w-full px-4 py-3 rounded-lg font-medium transition-colors ${
            action.variant === 'primary'
              ? 'bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50'
              : action.variant === 'success'
              ? 'bg-green-600 text-white hover:bg-green-700 disabled:opacity-50'
              : 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          {action.icon && <span className="mr-2">{action.icon}</span>}
          {action.text}
        </button>
      ))}
    </div>
  );
};
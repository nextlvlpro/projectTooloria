// File: src/components/tools/ToolsGrid.jsx
import Link from 'next/link';
import { Button } from '@/components/ui';

const ToolsGrid = ({ tools, title, showComingSoon = true }) => {
  const availableTools = tools.filter(tool => tool.status === 'available');
  const comingSoonTools = tools.filter(tool => tool.status === 'coming-soon');

  return (
    <div className="space-y-16">
      {/* Available Tools */}
      {availableTools.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {title ? `${title} - Available Now` : 'Available Now'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableTools.map((tool, index) => (
              <ToolCard key={index} tool={tool} />
            ))}
          </div>
        </section>
      )}

      {/* Coming Soon Tools */}
      {showComingSoon && comingSoonTools.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Coming Soon
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoonTools.map((tool, index) => (
              <ToolCard key={index} tool={tool} isComingSoon={true} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

const ToolCard = ({ tool, isComingSoon = false }) => {
  const CardWrapper = ({ children }) => {
    if (isComingSoon) {
      return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 opacity-75 h-full">
          {children}
        </div>
      );
    }

    return (
      <Link href={tool.href}>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all hover:scale-105 cursor-pointer h-full">
          {children}
        </div>
      </Link>
    );
  };

  return (
    <CardWrapper>
      {/* Tool Icon & Badge */}
      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl">{tool.icon}</div>
        <div className="flex flex-col items-end gap-1">
          {tool.popular && !isComingSoon && (
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded-full font-medium">
              Popular
            </span>
          )}
          {isComingSoon && (
            <span className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 text-xs px-2 py-1 rounded-full font-medium">
              Coming Soon
            </span>
          )}
        </div>
      </div>

      {/* Tool Info */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {tool.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
        {tool.description}
      </p>

      {/* Features */}
      <div className="mb-4">
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
          {isComingSoon ? 'Planned Features:' : 'Features:'}
        </div>
        <div className="flex flex-wrap gap-1">
          {tool.features.slice(0, 3).map((feature, featureIndex) => (
            <span
              key={featureIndex}
              className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-auto">
        {isComingSoon ? (
          <Button disabled className="w-full cursor-not-allowed">
            Coming Soon
          </Button>
        ) : (
          <Button className="w-full">
            Use {tool.name}
          </Button>
        )}
      </div>
    </CardWrapper>
  );
};

export default ToolsGrid;
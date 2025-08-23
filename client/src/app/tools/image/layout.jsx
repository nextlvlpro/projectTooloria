import Link from 'next/link';

export const metadata = {
  title: 'Image Tools - Resize, Compress & Edit Images | Tooloria',
  description: 'Free online image tools for service centers. Resize images, compress photos, convert formats, and edit pictures. Perfect for Lok Mitra Kendras and government centers.',
  keywords: [
    'image resizer',
    'image compressor',
    'photo editor online',
    'image converter',
    'resize photo',
    'compress image',
    'image tools free',
    'service center image tools'
  ],
  openGraph: {
    title: 'Free Image Tools for Service Centers | Tooloria',
    description: 'Resize, compress and edit images instantly. Free online tools perfect for service centers and Lok Mitra Kendras.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://tooloria.org/tools/image',
  },
};

// Image tools navigation data
const imageTools = [
  {
    name: 'Image Resizer',
    href: '/tools/image',
    description: 'Resize images to specific dimensions or percentages',
    icon: '📏',
    status: 'available'
  },
  {
    name: 'Image Compressor',
    href: '/tools/image/compress',
    description: 'Reduce image file size while maintaining quality',
    icon: '🗜️',
    status: 'available'
  },
  {
    name: 'Format Converter',
    href: '/tools/image/convert',
    description: 'Convert between JPG, PNG, WebP and other formats',
    icon: '🔄',
    status: 'available'
  },
  {
    name: 'Image Cropper',
    href: '/tools/image/crop',
    description: 'Crop images to specific areas or aspect ratios',
    icon: '✂️',
    status: 'coming-soon'
  },
  {
    name: 'Background Remover',
    href: '/tools/image/remove-bg',
    description: 'Remove background from images automatically',
    icon: '🎭',
    status: 'coming-soon'
  }
];

export default function ImageToolsLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="flex-shrink-0 h-4 w-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <Link href="/tools" className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Tools
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="flex-shrink-0 h-4 w-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 dark:text-gray-100 font-medium">Image Tools</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Tools Navigation Sidebar - Desktop Only */}
        <aside className="hidden lg:block w-48 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen">
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 uppercase tracking-wide">Image Tools</h3>
            <nav className="space-y-1">
              {imageTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className={`group flex items-center px-2 py-2 text-sm rounded-md transition-colors ${
                    tool.status === 'coming-soon' 
                      ? 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                  }`}
                >
                  <span className="text-base mr-2">{tool.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="truncate">{tool.name}</span>
                      {tool.status === 'coming-soon' && (
                        <span className="ml-1 px-1.5 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded">
                          Soon
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
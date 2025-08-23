'use client';

import { useState } from 'react';
import { 
  Button, 
  Input, 
  Textarea, 
  FileUpload,
  LoadingSpinner, 
  LoadingDots, 
  ProgressBar,
  SkeletonLoader
} from '@/components/ui';

export default function ComponentsDemo() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(45);
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const incrementProgress = () => {
    setProgress(prev => Math.min(prev + 10, 100));
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Tooloria UI Components
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Complete design system for service center tools
          </p>
        </div>

        <div className="grid gap-12">
          {/* Buttons Section */}
          <section className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
              Buttons
            </h2>
            <div className="space-y-6">
              {/* Button Variants */}
              <div>
                <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-300 mb-4">
                  Variants
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="warning">Warning</Button>
                  <Button variant="error">Error</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="gradient">Gradient</Button>
                </div>
              </div>

              {/* Button Sizes */}
              <div>
                <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-300 mb-4">
                  Sizes
                </h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="xs" variant="primary">Extra Small</Button>
                  <Button size="sm" variant="primary">Small</Button>
                  <Button size="md" variant="primary">Medium</Button>
                  <Button size="lg" variant="primary">Large</Button>
                  <Button size="xl" variant="primary">Extra Large</Button>
                </div>
              </div>

              {/* Button States */}
              <div>
                <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-300 mb-4">
                  States
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Normal</Button>
                  <Button variant="primary" loading={loading}>
                    {loading ? 'Loading...' : 'Click to Load'}
                  </Button>
                  <Button variant="primary" disabled>Disabled</Button>
                  <Button 
                    variant="primary" 
                    leftIcon={
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    }
                  >
                    With Icon
                  </Button>
                  <Button variant="primary" fullWidth className="max-w-xs">
                    Full Width
                  </Button>
                </div>
                <div className="mt-4">
                  <Button onClick={handleLoadingDemo} variant="outline">
                    Test Loading State
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Inputs Section */}
          <section className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
              Input Fields
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Input
                  label="Default Input"
                  placeholder="Enter your text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Input
                  label="Email Input"
                  type="email"
                  placeholder="user@example.com"
                  leftIcon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  }
                />
                <Input
                  label="Password Input"
                  type="password"
                  placeholder="Enter password"
                />
                <Input
                  label="Search Input"
                  placeholder="Search files..."
                  leftIcon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  }
                />
              </div>
              
              <div className="space-y-4">
                <Input
                  label="Required Field"
                  placeholder="This field is required"
                  required
                  helper="This information is mandatory"
                />
                <Input
                  label="Input with Error"
                  placeholder="Enter valid email"
                  error="Please enter a valid email address"
                />
                <Input
                  label="Disabled Input"
                  placeholder="This is disabled"
                  disabled
                  value="Cannot edit this"
                />
                <Input
                  label="Filled Variant"
                  variant="filled"
                  placeholder="Filled background style"
                />
              </div>
            </div>
          </section>

          {/* Textarea Section */}
          <section className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
              Textarea
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Textarea
                label="Description"
                placeholder="Enter a detailed description..."
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
                helper="Provide as much detail as possible"
              />
              <Textarea
                label="Comments"
                placeholder="Add your comments..."
                maxLength={500}
                showCount
                rows={6}
              />
            </div>
          </section>

          {/* File Upload Section */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              File Upload
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <FileUpload
                  label="Dropzone Variant"
                  accept=".pdf,.jpg,.png"
                  multiple
                  maxSize={5 * 1024 * 1024} // 5MB
                  onFileSelect={(files) => console.log('Selected files:', files)}
                  helper="PDF, JPG, PNG files up to 5MB"
                />
              </div>
              
              <div className="space-y-4">
                <FileUpload
                  variant="button"
                  label="Button Variant"
                  accept=".pdf"
                  onFileSelect={(file) => console.log('Selected file:', file)}
                  helper="Single PDF file only"
                />
              </div>
            </div>
          </section>

          {/* Loading Components Section */}
          <section className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
              Loading Components
            </h2>
            <div className="space-y-8">
              {/* Spinners */}
              <div>
                <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-300 mb-4">
                  Loading Spinners
                </h3>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <LoadingSpinner variant="primary" />
                    <p className="text-sm text-neutral-500 mt-2">Primary</p>
                  </div>
                  <div className="text-center">
                    <LoadingSpinner variant="success" />
                    <p className="text-sm text-neutral-500 mt-2">Success</p>
                  </div>
                  <div className="text-center">
                    <LoadingSpinner variant="warning" />
                    <p className="text-sm text-neutral-500 mt-2">Warning</p>
                  </div>
                  <div className="text-center">
                    <LoadingSpinner variant="error" />
                    <p className="text-sm text-neutral-500 mt-2">Error</p>
                  </div>
                </div>
              </div>

              {/* Loading Dots */}
              <div>
                <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-300 mb-4">
                  Loading Dots
                </h3>
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <LoadingDots variant="primary" size="sm" />
                    <p className="text-sm text-neutral-500 mt-2">Small</p>
                  </div>
                  <div className="text-center">
                    <LoadingDots variant="secondary" size="md" />
                    <p className="text-sm text-neutral-500 mt-2">Medium</p>
                  </div>
                  <div className="text-center">
                    <LoadingDots variant="success" size="lg" />
                    <p className="text-sm text-neutral-500 mt-2">Large</p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-300 mb-4">
                  Progress Bar
                </h3>
                <div className="space-y-4 max-w-md">
                  <ProgressBar 
                    progress={progress} 
                    variant="primary" 
                    showLabel 
                  />
                  <ProgressBar 
                    progress={75} 
                    variant="success" 
                    size="lg"
                  />
                  <Button onClick={incrementProgress} variant="outline" size="sm">
                    Increase Progress (+10%)
                  </Button>
                </div>
              </div>

              {/* Skeleton Loader */}
              <div>
                <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-300 mb-4">
                  Skeleton Loader
                </h3>
                <div className="max-w-md">
                  <SkeletonLoader lines={4} />
                </div>
              </div>
            </div>
          </section>

          {/* Color Palette */}
          <section className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
              Color Palette
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {/* Primary Colors */}
              <div>
                <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                  Primary
                </h3>
                <div className="space-y-2">
                  {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
                    <div
                      key={shade}
                      className={`w-full h-8 rounded-md bg-primary-${shade} flex items-center justify-center text-xs font-medium ${shade > 400 ? 'text-white' : 'text-neutral-900'}`}
                    >
                      {shade}
                    </div>
                  ))}
                </div>
              </div>

              {/* Secondary Colors */}
              <div>
                <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                  Secondary
                </h3>
                <div className="space-y-2">
                  {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
                    <div
                      key={shade}
                      className={`w-full h-8 rounded-md bg-secondary-${shade} flex items-center justify-center text-xs font-medium ${shade > 400 ? 'text-white' : 'text-neutral-900'}`}
                    >
                      {shade}
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Colors */}
              <div>
                <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                  Success
                </h3>
                <div className="space-y-2">
                  {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
                    <div
                      key={shade}
                      className={`w-full h-8 rounded-md bg-success-${shade} flex items-center justify-center text-xs font-medium ${shade > 400 ? 'text-white' : 'text-neutral-900'}`}
                    >
                      {shade}
                    </div>
                  ))}
                </div>
              </div>

              {/* Warning Colors */}
              <div>
                <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                  Warning
                </h3>
                <div className="space-y-2">
                  {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
                    <div
                      key={shade}
                      className={`w-full h-8 rounded-md bg-warning-${shade} flex items-center justify-center text-xs font-medium ${shade > 400 ? 'text-white' : 'text-neutral-900'}`}
                    >
                      {shade}
                    </div>
                  ))}
                </div>
              </div>

              {/* Error Colors */}
              <div>
                <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                  Error
                </h3>
                <div className="space-y-2">
                  {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
                    <div
                      key={shade}
                      className={`w-full h-8 rounded-md bg-error-${shade} flex items-center justify-center text-xs font-medium ${shade > 400 ? 'text-white' : 'text-neutral-900'}`}
                    >
                      {shade}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
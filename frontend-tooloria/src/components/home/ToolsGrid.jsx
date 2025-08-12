import Link from "next/link"
import ToolCard from "../shared/ToolCard"

const tools = [
  { name: 'PDF Compressor', slug: 'padf-tool/pdf-compressor', emoji: '🗜️', description: 'Easily compress PDF files to reduce their size.' },
  { name: 'Image Resizer', slug: 'image-tools/resize-compress', emoji: '📷', description: 'Easily resize images to a specific width or height.' },

  { name: 'CSC Form Photo Cropper', slug: 'image-tool/photo-cropper', emoji: '🪪', description: 'Crop photos for CSC forms.' },
  // Add more tools here
]

export default function ToolsGrid() {
  return (
    <section className="px-6" id="tools">
      <h2 className="text-3xl font-bold text-center mb-8 bg-primary text-white p-2 rounded-lg">Popular Tools</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tools.map(tool => (
          <ToolCard
            key={tool.slug}
            title={tool.name}
            description={tool.description}
            icon={tool.emoji}
            href={`/${tool.slug}`}
          />
        ))}
      </div>
    </section>
  )
}

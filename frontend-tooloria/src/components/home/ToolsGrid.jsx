const tools = [
  { name: 'PDF Compressor', slug: 'pdf-compressor', emoji: '🗜️' },
  { name: 'Image Resizer', slug: 'image-resizer', emoji: '📷' },
  { name: 'CSC Form Photo Cropper', slug: 'csc-photo-cropper', emoji: '🪪' },
  // Add more tools here
]

export default function ToolsGrid() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Popular Tools</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tools.map(tool => (
          <a
            key={tool.slug}
            href={`/${tool.slug}`}
            className="block border rounded-xl p-6 text-center hover:shadow-md transition"
          >
            <div className="text-3xl">{tool.emoji}</div>
            <div className="mt-4 text-lg font-semibold">{tool.name}</div>
          </a>
        ))}
      </div>
    </section>
  )
}

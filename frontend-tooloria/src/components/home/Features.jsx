const features = [
  { title: 'Fast & Free', description: 'No ads, no paywalls. 100% free tools.', icon: '⚡' },
  { title: 'CSC/LMK Ready', description: 'Optimized tools for form filling, ID resizing, etc.', icon: '📄' },
  { title: 'Privacy First', description: 'Your files never leave your browser.', icon: '🔒' },
]

export default function Features() {
  return (
    <section className="px-6 py-12">
      <div className="grid md:grid-cols-3 gap-6 text-center">
        {features.map((f, i) => (
          <div key={i} className="p-6 border rounded-xl bg-white shadow-sm">
            <div className="text-3xl">{f.icon}</div>
            <h3 className="text-xl font-semibold mt-4">{f.title}</h3>
            <p className="text-muted mt-2">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

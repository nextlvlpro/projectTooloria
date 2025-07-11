//root page.jsx
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import ToolsGrid from '@/components/home/ToolsGrid'
import CtaSection from '@/components/home/CtaSection'
import { generatePageMetadata } from '@/components/shared/metadataGen'
import StructuredData from '@/components/shared/JsonLdGen'


export const metadata = generatePageMetadata({
  title: 'Tooloria - All-in-One Free Tools',
  description: 'Fast, free online tools for developers and CSC users — no login required.',
})

export default function page() {
  const faq = [
    {
      question: 'Is Tooloria free to use?',
      answer: 'Yes, Tooloria is 100% free with no login required.',
    },
    {
      question: 'Can I use Tooloria tools for CSC work?',
      answer: 'Yes, many of our tools are built with CSC/LMK users in mind.',
    },
  ]

  return (
    <>
       <StructuredData
        type="website"
        title="Tooloria - Free Online Tools"
        description="Tooloria offers free online tools for applicants and Common Service Center/Lok Mitra kendra users."
        url="https://tooloria.org"
        
        faq={faq}
      />


      <main className="space-y-16">
        <Hero />
        <Features />
        <ToolsGrid />
        <CtaSection />
      </main>
    </>
  )
}

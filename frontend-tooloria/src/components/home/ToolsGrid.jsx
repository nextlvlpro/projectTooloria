import React from 'react'
import ToolInfoCard from '../cards/ToolInfoCard';
import QrCodeIcon from '../icons/QrCodeIcon';
const tools = [
    {
      id: 1,
      name: "Unit Converter",
      description: "Convert between units easily",
      href: "/unit-converter",
      icon: "🔄",
    },
    // {
    //   id: 2,
    //   name: "Text Formatter",
    //   description: "Format and beautify your text",
    //   href: "/text-formatter",
    //   icon: "✍️",
    // },
    // {
    //   id: 3,
    //   name: "Character Counter",
    //   description: "Count characters and words",
    //   href: "/counter",
    //   icon: "🔢",
    // },
    {
      id: 2,
      name: "QR Code Generator",
      description: "Generate QR codes easily",
      href: "/qr-code-generator",
      icon: <QrCodeIcon/>,
    },
    {
      id: 3,
      name: "Image Compressor",
      description: "Compress images easily",
      href: "/image-compress",
      icon: "📸",
    },
    // add more tools...
  ];
  

export default function ToolsGrid() {
  return (
    <section className="flex flex-wrap sm:flex-row md:flex-row flex-col gap-4 p-5">
      {tools.map(({ id, name, description, href, icon }) => (
        <ToolInfoCard
          key={id}
          title={name}
          description={description}
          href={href}
          icon={icon}
        />
      ))}
    </section>
  )
}

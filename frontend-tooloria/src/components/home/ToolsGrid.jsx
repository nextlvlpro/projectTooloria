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
    {
      id: 4,
      name: "IP Checker",
      description: "Check your IP address easily",
      href: "/ip-checker",
      icon: "🌐",
    },
    {
      id: 5,
      name: "IP Lookup",
      description: "Lookup any IP address easily",
      href: "/ip-lookup",
      icon: "🌐?",
    },
    {
      id: 6,
      name: "Game Dictionary",
      description: "Lookup any game term easily",
      href: "/game-dictionary",
      icon: "🎮",
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

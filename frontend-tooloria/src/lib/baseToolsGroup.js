 const toolGroups = [
    {
      id: 1,
      groupName: "Unit Converter",
      tools: [
        {
          id: "vol",
          title: "Volume Converter",
          description: "Convert between different volume units",
          href: "/unit-converter/volume",
          icon: "🧴",
        },
        {
          id: "length",
          title: "Length Converter",
          description: "Convert length units easily",
          href: "/unit-converter/length",
          icon: "📏",
        },
        {
          id: "temp",
          title: "Temperature Converter",
          description: "Convert temperature units",
          href: "/unit-converter/temperature",
          icon: "🌡️",
        },
        {
          id: "weight",
          title: "Weight Converter",
          description: "Convert weight units easily",
          href: "/unit-converter/weight",
          icon: "⚖️",
        },
        {
          id: "alltools",
          title: "All Tools",
          description: "All tools",
          href: "/unit-converter",
          icon: "📐",
        },
        // ...more subtools
      ],
    },
    {
      id: 2,
      groupName: "Dev Tools",
      tools: [
        {
          id: "devTools",
          title: "All Dev Tools",
          description: "handy tools for developers",
          href: "/dev-tools",
          icon: "🛠️",
        },
        {
          id: "base64-text",
          title: "text to Base64 Encoder/Decoder",
          description: "Encode and decode Base64 strings",
          href: "/dev-tools/base64-text-encode",
          icon: "💻",
        },
      ],
    },
    {
      id: 3,
      groupName: "Image & QR Tools",
      tools: [
        {
          id: "qr",
          title: "QR Code Generator",
          description: "Generate QR codes easily",
          href: "/qr-code-generator",
          icon: "🔲",
        },
        {
          id: "imgCompress",
          title: "Image Compressor",
          description: "Compress images quickly",
          href: "/image-compress",
          icon: "📸",
        },
      ],
    },
    {
      id: 4,
      groupName: "IP Tools",
      tools: [
        {
          id: "ipCheck",
          title: "IP Checker",
          description: "Check your IP address",
          href: "/ip-checker",
          icon: "🌐",
        },
        {
          id: "ipLookup",
          title: "IP Lookup",
          description: "Lookup IP addresses",
          href: "/ip-lookup",
          icon: "🔍",
        },
      ],
    },
  ];

  export default {toolGroups};
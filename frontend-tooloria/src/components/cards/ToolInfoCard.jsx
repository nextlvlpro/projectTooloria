import React from "react";
import Link from "next/link";

export default function ToolInfoCard({ title, description, href, icon }) {
  return (
    <Link href={href}  aria-label={`Go to ${title}`}>
      <div className="group relative rounded-2xl p-6 w-[80vw] sm:w-[250px] h-[220px] bg-bg border dark:border-muted border-gray-300 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-textAccent flex flex-col">
        <div className="text-textAccent text-3xl mb-3 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h2 className="text-textMain text-lg font-semibold group-hover:text-textAccent transition-colors mb-2">
          {title}
        </h2>
        <p className="text-textMuted text-sm flex-grow line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  );
}

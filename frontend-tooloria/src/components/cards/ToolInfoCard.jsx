import React from "react";
import Link from "next/link";

export default function ToolInfoCard({ title, description, href, icon }) {
  return (
    <Link href={href} className="block">
      <div className="group relative rounded-2xl p-6 sm:w-[250px] h-[200px] bg-bg border dark:border-muted border-gray-300 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-textAccent">
        <div className="text-textAccent text-2xl mb-2 group-hover:scale-110 transition-transform">{icon}</div>
        <h2 className="text-textMain text-lg font-semibold group-hover:text-textAccent transition-colors">
          {title}
        </h2>
        <p className="text-textMuted text-sm mt-2">{description}</p>
      </div>
    </Link>
  );
}

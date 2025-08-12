// components/shared/ToolCard.jsx
import Link from "next/link";

export default function ToolCard({ title, description, icon, href }) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-between rounded-2xl border border-gray-200 bg-primary/70 text-white p-6 shadow-sm transition hover:shadow-md hover:border-purple-300"
    >
      <div className="text-3xl mb-4 text-primary group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm mt-1">{description}</p>
      <span className="absolute right-4 bottom-4 text-sm font-medium group-hover:underline">
        Open →
      </span>
    </Link>
  );
}

// app/contact/page.tsx

import { Linkedin, Mail, Github } from "lucide-react";

export const metadata = {
  title: "Contact | Tooloria",
  description: "Connect with the Tooloria team via LinkedIn, GitHub, and more.",
};

export default function page() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 text-textMain">
      <h1 className="text-4xl font-bold mb-8 text-textAccent">Contact Us</h1>

      <ul className="space-y-6 text-lg">
        <li className="flex items-center gap-4">
          <Linkedin className="w-6 h-6 text-blue-600" />
          <a
            href="https://www.linkedin.com/in/bhs12899/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </li>

        <li className="flex items-center gap-4">
          <Github className="w-6 h-6" />
          <a
            href="https://github.com/nextlvlpro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </li>

        <li className="flex items-center gap-4">
          <Mail className="w-6 h-6 text-red-500" />
          <a href="mailto:bhanusharma089@gmail.com" className="hover:underline">
            bhanusharma089@gmail.com
          </a>
        </li>
      </ul>
    </main>
  );
}

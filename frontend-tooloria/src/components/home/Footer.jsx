import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg text-textMain py-8 px-6 md:px-20 select-none border-t border-muted">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-semibold tracking-wide">
          Tooloria &copy; {new Date().getFullYear()}
        </div>

        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-textAccent transition-colors">Home</Link>
          <Link href="/tools" className="hover:text-textAccent transition-colors">Tools</Link>
          <Link href="/about" className="hover:text-textAccent transition-colors">About</Link>
          <Link href="/contact" className="hover:text-textAccent transition-colors">Contact</Link>
        </nav>

        <div className="flex gap-6">
          {[ 
            { href: "https://github.com/yourprofile", Icon: Github },
            { href: "https://twitter.com/yourprofile", Icon: Twitter },
            { href: "https://linkedin.com/in/yourprofile", Icon: Linkedin }
          ].map(({ href, Icon }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textMain hover:text-textAccent transition-colors"
              aria-label={`Visit our ${href.split("//")[1].split("/")[0]}`}
            >
              <Icon 
                size={24} 
                className="hover:scale-110 transition-transform duration-300"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-textMuted select-text">
        Designed & built with 💜 by Bhanu
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg text-textMain py-8 px-6 md:px-20 select-none border-t border-muted">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-semibold tracking-wide">
          Tooloria &copy; {new Date().getFullYear()}
        </div>

        <nav className="flex gap-6 text-sm font-medium">  
          <Link href="/" className="hover:text-textAccent transition-colors">Home</Link>
          <Link href="/about" className="hover:text-textAccent transition-colors">About</Link>
          <Link href="/contact" className="hover:text-textAccent transition-colors">Contact</Link>
          <Link href="/privacy" className="hover:text-textAccent transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-textAccent transition-colors">Terms of Service</Link>
          <Link href="/cookie-policy" className="hover:text-textAccent transition-colors">Cookie Policy</Link>
        </nav>

        <div className="flex gap-6">
          {[
            { href: "https://github.com/nextlvlpro", Icon: Github },
            { href: "https://www.linkedin.com/in/bhs12899/", Icon: Linkedin },
            { href: "https://mail.google.com/mail/?view=cm&fs=1&to=bhanusharma089@gmail.com", Icon: Mail }
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

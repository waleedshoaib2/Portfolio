"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Philosophy", href: "/philosophy" },
  { label: "Notes", href: "/notes" },
  { label: "Career", href: "/career" },
  { label: "Projects", href: "/projects" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Research", href: "/research" },
  { label: "Certifications", href: "/certifications" },
  { label: "Library", href: "/library" },
  { label: "Contact", href: "/contact" }
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="pt-12 px-6 md:px-12 max-w-[800px] mx-auto w-full">
      <nav className="flex flex-wrap items-center gap-x-6 gap-y-4 pb-6 border-b border-border">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`font-[family-name:var(--font-source-sans)] text-[16px] transition-colors ${
                isActive
                  ? "font-bold text-text-primary cursor-default"
                  : "text-accent hover:underline"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

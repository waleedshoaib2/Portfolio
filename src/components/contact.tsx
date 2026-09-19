"use client";

import { Reveal } from "./reveal";

const links = [
  {
    label: "Email",
    value: "waleedshoaib20@gmail.com",
    href: "mailto:waleedshoaib20@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[18px] h-[18px]">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "waleedshoaibai",
    href: "https://linkedin.com/in/waleedshoaibai",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[18px] h-[18px]">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "waleedshoaib2",
    href: "https://github.com/waleedshoaib2",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[18px] h-[18px]">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "Substack",
    value: "waleedshoaibai",
    href: "https://waleedshoaibai.substack.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[18px] h-[18px]">
        <path d="M4 4h16M4 8h16M4 12l8 6 8-6" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+92 332 5776168",
    href: "https://wa.me/923325776168",
  },
  {
    label: "Curriculum Vitae",
    value: "Download PDF",
    href: "/cv.pdf",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-16 px-6 md:px-12 max-w-[800px] mx-auto ">
      <h2 className="font-[family-name:var(--font-sora)] text-[24px] font-bold text-text-primary mb-8 pb-4">
        Contact
      </h2>

      <div className="space-y-4 font-[family-name:var(--font-source-sans)] text-[16px] text-text-secondary">
        <p>
          I am currently based in Islamabad, Saudi Arabia. Open to academic collaborations and advisory roles.
        </p>
        
        <ul className="list-disc pl-5 space-y-2 mt-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-accent hover:underline"
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              >
                {link.label}: {link.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

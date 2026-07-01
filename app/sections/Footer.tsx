"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  { href: "/services/ai-development", label: "AI Development" },
  { href: "/services/web-development", label: "Web Development" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-slate-200 bg-white px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              M
            </span>
            MOT
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@mot.id"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
            >
              hello@mot.id
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-8 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} MOT. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

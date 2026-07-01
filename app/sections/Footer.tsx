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
      className="border-t border-slate-800/50 bg-slate-950/80 px-4 py-12 backdrop-blur-xl sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25">
              M
            </span>
            MOT
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@mot.id"
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              hello@mot.id
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800/50 pt-8 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} MOT. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

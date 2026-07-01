"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/ai-development", label: "AI Development" },
      { href: "/services/web-development", label: "Web Development" },
    ],
  },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  const handleHomeAnchor = (anchor: string) => {
    if (isHome) return anchor;
    return `/${anchor}`;
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25">
            M
          </span>
          MOT
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-slate-700/50 bg-slate-900/90 py-2 shadow-xl backdrop-blur-xl"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800/50 hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            )
          )}
          {isHome && (
            <>
              <Link
                href={handleHomeAnchor("#process")}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                Process
              </Link>
              <Link
                href={handleHomeAnchor("#testimonials")}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                Testimonials
              </Link>
            </>
          )}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 px-5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40"
          >
            Book a Call
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-300 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-800/50 bg-slate-950/95 backdrop-blur-xl md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <p className="px-3 py-2 text-sm font-semibold text-white">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-md px-6 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800/50 hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800/50 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            {isHome && (
              <>
                <Link
                  href={handleHomeAnchor("#process")}
                  className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800/50 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Process
                </Link>
                <Link
                  href={handleHomeAnchor("#testimonials")}
                  className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800/50 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Testimonials
                </Link>
              </>
            )}
            <Link
              href="/contact"
              className="mt-4 block rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-indigo-500/25"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

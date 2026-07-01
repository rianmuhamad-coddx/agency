"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-950 via-slate-950 to-cyan-950" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Build{" "}
            <span className="gradient-text">Smarter?</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            Book a free 30-minute strategy call. We&apos;ll map out what to build
            first — whether it&apos;s an AI agent, a website, or both.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 px-8 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40"
            >
              Book a Free Call
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:hello@mot.id?subject=Project%20Inquiry"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-8 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-slate-800/50"
            >
              <Mail className="h-5 w-5" />
              Send an Inquiry
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Prefer email? Reach us at{" "}
            <a
              href="mailto:hello@mot.id"
              className="font-semibold text-cyan-400 hover:text-cyan-300"
            >
              hello@mot.id
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

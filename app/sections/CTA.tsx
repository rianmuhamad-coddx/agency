"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function CTA() {
  return (
    <section id="contact" className="bg-indigo-600 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Build Smarter?
          </h2>
          <p className="mt-6 text-lg leading-8 text-indigo-100">
            Book a free 30-minute strategy call. We&apos;ll map out what to build
            first — whether it&apos;s an AI agent, a website, or both.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-semibold text-indigo-700 transition-all hover:bg-indigo-50 hover:shadow-lg"
            >
              Book a Free Call
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:hello@mot.id?subject=Project%20Inquiry"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-indigo-400 px-8 text-base font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              <Mail className="h-5 w-5" />
              Send an Inquiry
            </Link>
          </div>
          <p className="mt-6 text-sm text-indigo-200">
            Prefer email? Reach us at{" "}
            <a
              href="mailto:hello@mot.id"
              className="font-semibold underline hover:text-white"
            >
              hello@mot.id
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

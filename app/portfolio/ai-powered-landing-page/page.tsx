import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/app/sections/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Case Study: AI-Powered Landing Page — MOT",
  description:
    "How MOT built a conversion-focused landing page with an embedded AI agent that qualifies leads instantly.",
};

const highlights = [
  "High-converting landing page design",
  "Lead capture forms processed by AI in real time",
  "Automatic lead scoring and prioritization",
  "Direct handoff to sales team for hot leads",
];

const technologies = ["Next.js", "Tailwind CSS", "OpenAI GPT", "Formspree", "CRM Webhooks"];

export default function AIPoweredLandingPageCaseStudy() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
          </div>
          <div className="mx-auto max-w-4xl">
            <AnimatedSection>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Link>
              <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-cyan-400">
                Web + AI
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                AI-Powered Landing{" "}
                <span className="gradient-text">Page</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-400">
                A startup product landing page where every lead capture form is
                instantly processed by an AI qualification agent — enabling faster
                follow-ups and higher conversion rates.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection>
              <div className="rounded-3xl border border-slate-700/50 bg-gradient-to-br from-cyan-950/80 to-slate-900/80 p-8 text-white shadow-2xl shadow-cyan-500/10 backdrop-blur-xl sm:p-12">
                <Globe className="h-12 w-12 text-cyan-400" />
                <h2 className="mt-6 text-2xl font-bold">The Challenge</h2>
                <p className="mt-4 text-slate-400">
                  The startup was driving traffic to their landing page but
                  struggling to qualify and respond to leads quickly. Form
                  submissions piled up, and hot leads often went cold before anyone
                  followed up.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="mt-12">
              <h2 className="text-2xl font-bold text-white">
                What We <span className="gradient-text">Built</span>
              </h2>
              <ul className="mt-6 space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-400" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="mt-12">
              <h2 className="text-2xl font-bold text-white">Technologies</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700/50 bg-slate-900/50 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="mt-12">
              <h2 className="text-2xl font-bold text-white">Results</h2>
              <p className="mt-4 text-lg leading-8 text-slate-400">
                Lead response time dropped to under a minute. The sales team now
                receives pre-qualified leads with context, allowing them to focus
                on prospects most likely to convert.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5} className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 px-8 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40"
              >
                Build Something Similar
                <ArrowRight className="h-5 w-5" />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

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
        <section className="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Link>
              <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Web + AI
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                AI-Powered Landing Page
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                A startup product landing page where every lead capture form is
                instantly processed by an AI qualification agent — enabling faster
                follow-ups and higher conversion rates.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection>
              <div className="rounded-3xl bg-indigo-600 p-8 text-white sm:p-12">
                <Globe className="h-12 w-12 text-indigo-200" />
                <h2 className="mt-6 text-2xl font-bold">The Challenge</h2>
                <p className="mt-4 text-indigo-100">
                  The startup was driving traffic to their landing page but
                  struggling to qualify and respond to leads quickly. Form
                  submissions piled up, and hot leads often went cold before anyone
                  followed up.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900">What We Built</h2>
              <ul className="mt-6 space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-600" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900">Technologies</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900">Results</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Lead response time dropped to under a minute. The sales team now
                receives pre-qualified leads with context, allowing them to focus
                on prospects most likely to convert.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5} className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 text-base font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-lg"
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

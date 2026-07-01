import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Bot, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/app/sections/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Case Study: Startup Company Profile — MOT",
  description:
    "How MOT built a company profile website with an embedded agentic live chat for investors and potential users.",
};

const highlights = [
  "Clean, professional company profile design",
  "Agentic live chat embedded across key pages",
  "Answers investor and user questions in real time",
  "Captures and qualifies visitor intent automatically",
];

const technologies = ["Next.js", "Tailwind CSS", "OpenAI GPT", "Vector DB", "WhatsApp API"];

export default function StartupCompanyProfileCaseStudy() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />
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
                Startup Company{" "}
                <span className="gradient-text">Profile</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-400">
                A company profile website for an early-stage startup, complete with
                an agentic live chat that answers questions from investors,
                partners, and potential users 24/7.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection>
              <div className="rounded-3xl border border-slate-700/50 bg-gradient-to-br from-violet-950/80 to-slate-900/80 p-8 text-white shadow-2xl shadow-violet-500/10 backdrop-blur-xl sm:p-12">
                <Bot className="h-12 w-12 text-cyan-400" />
                <h2 className="mt-6 text-2xl font-bold">The Challenge</h2>
                <p className="mt-4 text-slate-400">
                  The startup needed a credible digital presence to attract
                  investors and early users. At the same time, the small team
                  couldn&apos;t respond to every inquiry manually around the clock.
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
                The website became the startup&apos;s primary trust-building asset.
                The embedded agent handled the majority of visitor questions,
                freeing the team to focus on product and investor meetings.
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

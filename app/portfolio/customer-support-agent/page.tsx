import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Bot, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/app/sections/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Case Study: Customer Support Agent — MOT",
  description:
    "How MOT built an agentic AI customer support system that checks orders, triages issues, and escalates to humans when needed.",
};

const highlights = [
  "Checks order status across internal systems automatically",
  "Assesses issue complexity and decides resolution path",
  "Escalates to human agents only when necessary",
  "Reduces first-response time from hours to seconds",
];

const technologies = ["OpenAI GPT", "LangChain", "REST APIs", "Webhook Integrations"];

export default function CustomerSupportAgentCaseStudy() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
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
                Agentic AI
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Customer Support{" "}
                <span className="gradient-text">Agent</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-400">
                An autonomous AI agent that handles customer inquiries end-to-end —
                checking order status, resolving common issues, and escalating only
                when a human is truly needed.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection>
              <div className="rounded-3xl border border-slate-700/50 bg-gradient-to-br from-indigo-950/80 to-slate-900/80 p-8 text-white shadow-2xl shadow-indigo-500/10 backdrop-blur-xl sm:p-12">
                <Bot className="h-12 w-12 text-cyan-400" />
                <h2 className="mt-6 text-2xl font-bold">The Challenge</h2>
                <p className="mt-4 text-slate-400">
                  The startup&apos;s support team was overwhelmed with repetitive
                  order-status questions. Most tickets were simple lookups, but
                  agents had to handle each one manually — slowing response times
                  and increasing cost.
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
                The agent now handles over 60% of inbound support requests without
                human intervention. Response times dropped from hours to seconds,
                and the support team can focus on complex, high-value
                conversations.
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

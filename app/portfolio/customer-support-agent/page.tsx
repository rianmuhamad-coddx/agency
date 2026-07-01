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
                Agentic AI
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Customer Support Agent
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                An autonomous AI agent that handles customer inquiries end-to-end —
                checking order status, resolving common issues, and escalating only
                when a human is truly needed.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection>
              <div className="rounded-3xl bg-indigo-600 p-8 text-white sm:p-12">
                <Bot className="h-12 w-12 text-indigo-200" />
                <h2 className="mt-6 text-2xl font-bold">The Challenge</h2>
                <p className="mt-4 text-indigo-100">
                  The startup&apos;s support team was overwhelmed with repetitive
                  order-status questions. Most tickets were simple lookups, but
                  agents had to handle each one manually — slowing response times
                  and increasing cost.
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
                The agent now handles over 60% of inbound support requests without
                human intervention. Response times dropped from hours to seconds,
                and the support team can focus on complex, high-value
                conversations.
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

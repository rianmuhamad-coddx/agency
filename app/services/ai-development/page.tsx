import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, CheckCircle, Layers, MessageSquare, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/app/sections/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Agentic AI Development — MOT",
  description:
    "MOT builds custom AI agents that plan, decide, and act. From customer support to sales qualification and operations automation.",
};

const offerings = [
  {
    icon: Bot,
    title: "Custom AI Agent Development",
    description:
      "We design and build agents tailored to your workflow — whether it's customer support, sales qualification, onboarding, or operations.",
  },
  {
    icon: Layers,
    title: "AI Integration",
    description:
      "Connect your agent to CRMs, helpdesks, WhatsApp Business, payment gateways, internal databases, and any API your business already uses.",
  },
  {
    icon: Settings,
    title: "AI Consulting & Architecture",
    description:
      "Not sure where to start? We map your processes, identify the highest-value automation opportunities, and design the architecture before writing code.",
  },
];

const useCases = [
  "Customer support agents that triage, resolve, and escalate issues autonomously",
  "Sales agents that verify leads, score qualification, and prioritize follow-ups",
  "Onboarding agents that adapt guidance based on user progress and behavior",
  "Operations agents that monitor data and trigger actions across tools",
];

export default function AIDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedSection>
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
                Services
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Agentic AI{" "}
                <span className="gradient-text">Development</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-400">
                AI agents that plan, decide, and act — not just chat. We build
                autonomous systems that integrate with your tools and scale with
                your startup.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 px-8 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40"
                >
                  Discuss Your AI Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/services/web-development"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 px-8 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-slate-800/50"
                >
                  Explore Web Development
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="relative px-4 py-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
          <div className="mx-auto max-w-7xl">
            <AnimatedSection className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                What We <span className="gradient-text">Build</span>
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                End-to-end agentic AI solutions, from strategy to deployment.
              </p>
            </AnimatedSection>

            <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3">
              {offerings.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="glass-card rounded-3xl p-8 h-full">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 text-cyan-400 ring-1 ring-white/10">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <AnimatedSection>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Use <span className="gradient-text">Cases</span>
                </h2>
                <p className="mt-4 text-lg text-slate-400">
                  Here are some of the agentic AI systems we can build for your
                  startup.
                </p>
                <ul className="mt-8 space-y-4">
                  {useCases.map((useCase) => (
                    <li key={useCase} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-400" />
                      <span className="text-slate-300">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="rounded-3xl border border-slate-700/50 bg-gradient-to-br from-indigo-950/80 to-slate-900/80 p-8 text-white shadow-2xl shadow-indigo-500/10 backdrop-blur-xl sm:p-12">
                  <MessageSquare className="h-12 w-12 text-cyan-400" />
                  <h3 className="mt-6 text-2xl font-bold">
                    Not sure which process to automate first?
                  </h3>
                  <p className="mt-4 text-slate-400">
                    Book a free AI consultation. We&apos;ll map your workflows and
                    identify the highest-impact place to start.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 px-8 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40"
                  >
                    Book Free Consultation
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

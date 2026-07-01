import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, Globe, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/app/sections/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Portfolio — MOT",
  description:
    "See selected projects built by MOT for startups. Agentic AI systems, AI-integrated websites, and more.",
};

const projects = [
  {
    icon: MessageSquare,
    slug: "customer-support-agent",
    title: "Customer Support Agent",
    category: "Agentic AI",
    description:
      "An AI agent that checks order status, assesses issue complexity, and decides whether to resolve or escalate to a human agent — automatically.",
    tags: ["AI Agent", "Customer Support", "Automation"],
  },
  {
    icon: Globe,
    slug: "ai-powered-landing-page",
    title: "AI-Powered Landing Page",
    category: "Web + AI",
    description:
      "A conversion-focused landing page where every lead capture form is instantly processed by a qualification agent for faster follow-up.",
    tags: ["Landing Page", "Lead Qualification", "AI Integration"],
  },
  {
    icon: Bot,
    slug: "startup-company-profile",
    title: "Startup Company Profile",
    category: "Web + AI",
    description:
      "A company profile website with an embedded agentic live chat that answers investor and user questions in real time.",
    tags: ["Company Profile", "Live Chat", "AI Agent"],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedSection>
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
                Portfolio
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Selected <span className="gradient-text">Work</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-400">
                A collection of agentic AI systems and websites we&apos;ve built for
                startups.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="relative px-4 py-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950" />
          <div className="mx-auto max-w-7xl">
            <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <StaggerItem key={project.title}>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="group flex flex-col rounded-3xl glass-card p-8 h-full transition-transform duration-300 hover:-translate-y-2"
                  >
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 text-cyan-400 ring-1 ring-white/10 transition-colors group-hover:from-indigo-500/30 group-hover:to-cyan-500/30">
                        <project.icon className="h-6 w-6" />
                      </div>
                      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-cyan-400">
                        {project.category}
                      </p>
                      <h2 className="mt-2 text-xl font-bold text-white">
                        {project.title}
                      </h2>
                      <p className="mt-4 flex-1 text-base leading-7 text-slate-400">
                        {project.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-slate-700/50 bg-slate-900/50 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300">
                        Read case study
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

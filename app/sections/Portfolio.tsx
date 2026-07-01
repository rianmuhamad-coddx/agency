"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Globe, MessageSquare } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const projects = [
  {
    icon: MessageSquare,
    slug: "customer-support-agent",
    title: "Customer Support Agent",
    category: "Agentic AI",
    description:
      "An AI agent that checks order status, assesses issue complexity, and decides whether to resolve or escalate to a human agent — automatically.",
  },
  {
    icon: Globe,
    slug: "ai-powered-landing-page",
    title: "AI-Powered Landing Page",
    category: "Web + AI",
    description:
      "A conversion-focused landing page where every lead capture form is instantly processed by a qualification agent for faster follow-up.",
  },
  {
    icon: Bot,
    slug: "startup-company-profile",
    title: "Startup Company Profile",
    category: "Web + AI",
    description:
      "A company profile website with an embedded agentic live chat that answers investor and user questions in real time.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Selected Work
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Real Projects Built for Real Startups
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A glimpse of what we can build together.
          </p>
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm h-full"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                  <project.icon className="h-6 w-6" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-indigo-600">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-7 text-slate-600">
                  {project.description}
                </p>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-colors group-hover:text-indigo-700"
                >
                  Read case study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

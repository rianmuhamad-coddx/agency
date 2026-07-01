"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Globe } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const services = [
  {
    icon: Bot,
    title: "Agentic AI Development",
    description:
      "AI agents that plan, decide, and act — not just chat. We design, build, and deploy custom agents that integrate with your existing tools.",
    items: [
      "Custom AI Agent Development",
      "AI Integration (CRM, WhatsApp, Helpdesk)",
      "AI Consulting & Architecture",
    ],
    cta: "Explore AI Services",
    href: "/services/ai-development",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Fast, clean, and conversion-focused websites. Built to stand alone or work hand-in-hand with your AI systems.",
    items: [
      "Landing Page & Company Profile",
      "Web + AI Integration",
      "Revamp & Maintenance",
    ],
    cta: "Explore Web Services",
    href: "/services/web-development",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            What We Build
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Two Services. One Team. Zero Coordination Headaches.
          </h2>
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm h-full"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-colors group-hover:text-indigo-700"
                >
                  {service.cta}
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

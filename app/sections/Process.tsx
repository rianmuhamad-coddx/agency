"use client";

import { motion } from "framer-motion";
import { Search, Map, Code2, Rocket } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, users, and goals. The best solutions come from asking the right questions first.",
  },
  {
    icon: Map,
    step: "02",
    title: "Design & Plan",
    description:
      "We define the scope, architecture, and delivery milestones. No surprises — you know exactly what we're building and when.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Build & Iterate",
    description:
      "We ship fast, review weekly, and adjust quickly. Your feedback shapes the product at every step.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Support",
    description:
      "We deploy, monitor, and stick around. As your startup grows, your product grows with it.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            How We Work
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From First Call to Shipped Product in Weeks
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            No bloated process. Just a clear path from idea to reality.
          </p>
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 h-full"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span className="text-3xl font-extrabold text-slate-200">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

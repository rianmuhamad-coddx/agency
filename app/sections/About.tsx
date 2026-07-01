"use client";

import { motion } from "framer-motion";
import { Target, Rocket, Eye, Handshake } from "lucide-react";
import { AnimatedSection, AnimatedItem, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const values = [
  {
    icon: Target,
    title: "Results first, tools second",
    desc: "We focus on the outcome your startup needs — not forcing a specific tech stack.",
  },
  {
    icon: Rocket,
    title: "Startup-ready",
    desc: "Our pace, scope, and pricing are designed for early-stage reality.",
  },
  {
    icon: Eye,
    title: "Move fast, build right",
    desc: "Speed doesn't mean shortcuts. We ship quickly without ruining the foundation.",
  },
  {
    icon: Handshake,
    title: "Transparent by design",
    desc: "You always know what's being built, where the progress is, and why decisions are made.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Why MOT
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Built for Startups, Not Enterprises
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              MOT is a small, hands-on agency. We don't chase volume — we partner
              with founders who need real tech built fast. From AI agents that
              think and act on their own, to websites that convert visitors into
              customers.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We believe early-stage startups deserve the same caliber of
              technology that big companies build — without the bureaucracy,
              delays, or bloated teams.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ y: -6, borderColor: "rgba(99, 102, 241, 0.3)" }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 h-full"
                >
                  <value.icon className="h-8 w-8 text-indigo-600" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {value.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

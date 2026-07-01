"use client";

import { motion } from "framer-motion";
import { Target, Rocket, Eye, Handshake } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

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
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
              Why MOT
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built for Startups,{" "}
              <span className="gradient-text">Not Enterprises</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              MOT is a small, hands-on agency. We don't chase volume — we partner
              with founders who need real tech built fast. From AI agents that
              think and act on their own, to websites that convert visitors into
              customers.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-400">
              We believe early-stage startups deserve the same caliber of
              technology that big companies build — without the bureaucracy,
              delays, or bloated teams.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card rounded-2xl p-6 h-full"
                >
                  <value.icon className="h-8 w-8 text-cyan-400" />
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
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

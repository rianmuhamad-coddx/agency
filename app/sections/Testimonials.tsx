"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const testimonials = [
  {
    quote:
      "MOT helped us launch our AI agent in just three weeks. It felt like having an internal tech team, but without the overhead.",
    name: "Rian",
    role: "Founder",
    company: "MOT",
  },
  {
    quote:
      "Finally, a team that understands startup speed. They shipped our landing page fast and it actually converts.",
    name: "Alexandra",
    role: "Co-Founder",
    company: "SaaS Startup",
  },
  {
    quote:
      "The integration between our website and AI agent was seamless. Our support workload dropped significantly within days.",
    name: "Dimas",
    role: "Head of Operations",
    company: "E-commerce Brand",
  },
];

export default function Testimonials() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
            What Founders Say
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by Founders Who{" "}
            <span className="gradient-text">Move Fast</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <StaggerItem key={item.name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="glass-card relative rounded-3xl p-8 h-full"
              >
                <Quote className="h-8 w-8 text-indigo-400/40" />
                <p className="mt-4 text-base leading-7 text-slate-300">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-sm font-bold text-white">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

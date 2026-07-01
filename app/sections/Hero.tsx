"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:px-8 lg:pb-32 lg:pt-44">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/50 px-4 py-1.5 text-sm font-medium text-cyan-400 shadow-lg backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4" />
          AI Agentic & Web Development Agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          We Build the{" "}
          <span className="gradient-text">Intelligence</span> Behind Your
          Startup
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl"
        >
          MOT helps early-stage startups ship agentic AI systems and
          high-converting websites — without hiring a full tech team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 px-8 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40"
          >
            Book a Free Strategy Call
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="#portfolio"
            className="inline-flex h-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 px-8 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-slate-800/50"
          >
            See Our Work
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 text-left sm:grid-cols-3"
        >
          {[
            { label: "Ship in weeks", desc: "Iterative delivery, no long cycles" },
            { label: "Startup pricing", desc: "Built for early-stage budgets" },
            { label: "End-to-end team", desc: "AI + web in one partner" },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="glass-card rounded-2xl p-5"
            >
              <p className="font-semibold text-white">{item.label}</p>
              <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

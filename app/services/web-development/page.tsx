import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Globe, Layout, Sparkles, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/app/sections/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Web Development — MOT",
  description:
    "MOT builds fast, clean, and conversion-focused websites for startups — from landing pages to AI-integrated web experiences.",
};

const offerings = [
  {
    icon: Layout,
    title: "Website & Landing Page",
    description:
      "Custom, responsive, and conversion-optimized websites — from company profiles to product landing pages that turn visitors into leads.",
  },
  {
    icon: Sparkles,
    title: "Web + AI Integration",
    description:
      "Websites designed to work with AI agents from day one: agentic live chat, smart forms, embedded onboarding assistants, and more.",
  },
  {
    icon: Wrench,
    title: "Revamp & Maintenance",
    description:
      "Improve what you already have. Redesign, optimize performance, add new features, or get ongoing maintenance for your existing site.",
  },
];

const features = [
  "Clean, modern design tailored to your brand",
  "Mobile-first, fully responsive development",
  "SEO-friendly structure and fast performance",
  "Easy-to-manage code with future growth in mind",
  "Optional AI integrations for smarter user experiences",
];

export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-3xl" />
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedSection>
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
                Services
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Web <span className="gradient-text">Development</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-400">
                Fast, clean, and conversion-focused websites for startups. Built
                to stand alone or integrate seamlessly with your AI systems.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 px-8 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40"
                >
                  Start Your Website
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/services/ai-development"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 px-8 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-slate-800/50"
                >
                  Explore AI Development
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
                Websites that look great, load fast, and drive results.
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
                  Built for Performance &{" "}
                  <span className="gradient-text">Growth</span>
                </h2>
                <p className="mt-4 text-lg text-slate-400">
                  Every website we build is optimized for speed, search, and
                  conversion — with a foundation that grows as your startup
                  scales.
                </p>
                <ul className="mt-8 space-y-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-400" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="rounded-3xl border border-slate-700/50 bg-gradient-to-br from-indigo-950/80 to-slate-900/80 p-8 text-white shadow-2xl shadow-cyan-500/10 backdrop-blur-xl sm:p-12">
                  <Globe className="h-12 w-12 text-cyan-400" />
                  <h3 className="mt-6 text-2xl font-bold">
                    Need a website that converts?
                  </h3>
                  <p className="mt-4 text-slate-400">
                    Tell us about your product and audience. We&apos;ll design a
                    website that turns visitors into qualified leads.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 px-8 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40"
                  >
                    Get a Free Quote
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

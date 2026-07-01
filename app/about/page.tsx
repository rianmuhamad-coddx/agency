import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lightbulb, Target, Users, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/app/sections/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About — MOT",
  description:
    "MOT is a hands-on agency that builds agentic AI and websites for early-stage startups. Quality over quantity, partner over vendor.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Accessible AI",
    desc: "We make agentic AI reachable for startups, not just enterprises.",
  },
  {
    icon: Zap,
    title: "Fast Time-to-Market",
    desc: "Iterative delivery so your solution ships in weeks, not months.",
  },
  {
    icon: Users,
    title: "True Partnership",
    desc: "We grow with you as a long-term tech extension of your team.",
  },
  {
    icon: Target,
    title: "One Team, Two Needs",
    desc: "AI systems and websites built together, under one roof.",
  },
];

const team = [
  {
    name: "Rian",
    role: "Founder & Tech Lead",
    bio: "Building agentic AI and web products for early-stage startups.",
  },
  {
    name: "TBD",
    role: "AI Engineer",
    bio: "Placeholder for future team member.",
  },
  {
    name: "TBD",
    role: "Full-Stack Developer",
    bio: "Placeholder for future team member.",
  },
];

export default function AboutPage() {
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
                About MOT
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                We Build the{" "}
                <span className="gradient-text">Intelligence</span> Behind Your
                Startup
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-400">
                MOT (Mind of Things) is a technology agency specializing in
                agentic AI and web development for startups. We are not a
                platform. We are a small, hands-on team that works directly with
                founders from idea to launch.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="relative px-4 py-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <AnimatedSection>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Why We <span className="gradient-text">Exist</span>
                </h2>
                <div className="mt-6 space-y-4 text-lg leading-8 text-slate-400">
                  <p>
                    Too many great startup ideas stall because the founder lacks
                    the time, team, or budget to build the technology behind it.
                  </p>
                  <p>
                    MOT exists to close that gap. We handle the complex work —
                    agentic AI systems that think and act, and websites that
                    convert — so founders can focus on business, customers, and
                    growth.
                  </p>
                  <p>
                    As a small agency, we choose projects carefully. We prefer
                    quality partnerships over volume, and long-term collaboration
                    over one-off delivery.
                  </p>
                </div>
              </AnimatedSection>

              <StaggerContainer className="grid gap-6 sm:grid-cols-2">
                {values.map((value) => (
                  <StaggerItem key={value.title}>
                    <div className="glass-card rounded-2xl p-6 h-full">
                      <value.icon className="h-8 w-8 text-cyan-400" />
                      <h3 className="mt-4 text-lg font-semibold text-white">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-400">{value.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Meet the <span className="gradient-text">Team</span>
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                Small team, big impact. We keep things lean so we can move fast.
              </p>
            </AnimatedSection>

            <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <StaggerItem key={member.name}>
                  <div className="glass-card rounded-3xl p-8 text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-2xl font-bold text-white shadow-lg shadow-indigo-500/25">
                      {member.name[0]}
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-cyan-400">
                      {member.role}
                    </p>
                    <p className="mt-4 text-sm text-slate-400">{member.bio}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-950 via-slate-950 to-cyan-950" />
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let&apos;s Build Something{" "}
                <span className="gradient-text">Together</span>
              </h2>
              <p className="mt-6 text-lg text-slate-400">
                Have a project in mind? We&apos;d love to hear about it.
              </p>
              <Link
                href="/contact"
                className="mt-10 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 px-8 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40"
              >
                Start a Conversation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

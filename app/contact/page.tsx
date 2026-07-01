import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/app/sections/Footer";
import ContactForm from "@/components/ContactForm";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact — MOT",
  description:
    "Get in touch with MOT. Book a free strategy call or send us an inquiry about your AI or web project.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@mot.id",
    href: "mailto:hello@mot.id",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 812-3456-7890",
    href: "tel:+6281234567890",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote-first, based in Indonesia",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedSection>
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
                Contact
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Let&apos;s Build Something{" "}
                <span className="gradient-text">Together</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-400">
                Book a free 30-minute strategy call or send us an inquiry. We
                typically respond within 24 hours.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-3">
              <AnimatedSection className="lg:col-span-1">
                <div className="rounded-3xl glass-card p-8">
                  <h2 className="text-2xl font-bold text-white">
                    Get in Touch
                  </h2>
                  <p className="mt-4 text-slate-400">
                    Prefer to reach out directly? Use the contact info below.
                  </p>
                  <div className="mt-8 space-y-6">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 text-cyan-400 ring-1 ring-white/10">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-slate-400 transition-colors hover:text-cyan-400"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-slate-400">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 rounded-2xl bg-gradient-to-br from-indigo-950/80 to-slate-900/80 p-6 text-white ring-1 ring-white/10 backdrop-blur-xl">
                    <h3 className="text-lg font-bold">Free Strategy Call</h3>
                    <p className="mt-2 text-sm text-slate-400">
                      30 minutes to map your project, identify the best starting
                      point, and get a rough estimate.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="lg:col-span-2">
                <div className="rounded-3xl glass-card p-8 sm:p-12">
                  <h2 className="text-2xl font-bold text-white">
                    Send an Inquiry
                  </h2>
                  <p className="mt-4 text-slate-400">
                    Tell us about your project. The more details, the better we
                    can help.
                  </p>
                  <div className="mt-8">
                    <ContactForm />
                  </div>
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

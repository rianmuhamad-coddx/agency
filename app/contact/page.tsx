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
        <section className="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedSection>
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Contact
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Let&apos;s Build Something Together
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Book a free 30-minute strategy call or send us an inquiry. We
                typically respond within 24 hours.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-3">
              <AnimatedSection className="lg:col-span-1">
                <div className="rounded-3xl bg-slate-50 p-8">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Get in Touch
                  </h2>
                  <p className="mt-4 text-slate-600">
                    Prefer to reach out directly? Use the contact info below.
                  </p>
                  <div className="mt-8 space-y-6">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-slate-600 transition-colors hover:text-indigo-600"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-slate-600">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 rounded-2xl bg-indigo-600 p-6 text-white">
                    <h3 className="text-lg font-bold">Free Strategy Call</h3>
                    <p className="mt-2 text-sm text-indigo-100">
                      30 minutes to map your project, identify the best starting
                      point, and get a rough estimate.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="lg:col-span-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Send an Inquiry
                  </h2>
                  <p className="mt-4 text-slate-600">
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

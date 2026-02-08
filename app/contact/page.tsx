import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Siddharth for graphic design and content writing projects. Let's discuss your creative needs and bring your vision to life.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageTransition>
          <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                  <span className="w-8 h-px bg-primary" />
                  Get in Touch
                  <span className="w-8 h-px bg-primary" />
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance">
                  {"Let's Create Something"}
                  <br />
                  <span className="text-primary">Amazing Together</span>
                </h1>
                <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  Whether you need a complete brand overhaul or compelling
                  content, I&apos;m here to help bring your vision to life.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                <div className="lg:col-span-3">
                  <ContactForm />
                </div>
                <div className="lg:col-span-2">
                  <ContactInfo />
                </div>
              </div>
            </div>
          </section>
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}

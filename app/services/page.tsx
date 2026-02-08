import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { ServicesGrid } from "@/components/services/services-grid";
import { Process } from "@/components/services/process";
import { CTA } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Graphic design and content writing services by Siddharth. Brand identity, editorial design, social media content, copywriting, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageTransition>
          <ServicesGrid />
          <Process />
          <CTA />
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { AboutHero } from "@/components/about/about-hero";
import { Timeline } from "@/components/about/timeline";
import { Skills } from "@/components/about/skills";
import { Philosophy } from "@/components/about/philosophy";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Siddharth - a passionate graphic designer and content writer with 5+ years of experience crafting visual stories and compelling narratives.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageTransition>
          <AboutHero />
          <Timeline />
          <Skills />
          <Philosophy />
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/home/hero";
import { MarqueeStrip } from "@/components/home/marquee-strip";
import { FeaturedWork } from "@/components/home/featured-work";
import { Stats } from "@/components/home/stats";
import { CTA } from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <FeaturedWork />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

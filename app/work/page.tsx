import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { WorkGrid } from "@/components/work/work-grid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Browse Siddharth's portfolio of graphic design and content writing projects. From brand identities to editorial design and content strategies.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageTransition>
          <WorkGrid />
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}

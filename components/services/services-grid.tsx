"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";
import {
  Palette,
  PenTool,
  Layout,
  FileText,
  Share2,
  Package,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Comprehensive brand identity systems including logos, color palettes, typography, and brand guidelines that establish a distinctive visual presence.",
    features: ["Logo Design", "Color Systems", "Brand Guidelines", "Visual Language"],
  },
  {
    icon: Layout,
    title: "Editorial & Print Design",
    description:
      "Beautiful layouts for magazines, brochures, catalogs, and print materials that balance aesthetics with readability.",
    features: ["Magazine Layouts", "Brochures", "Catalogs", "Annual Reports"],
  },
  {
    icon: Share2,
    title: "Social Media Design",
    description:
      "Scroll-stopping social media content and templates designed to boost engagement and maintain consistent brand presence.",
    features: ["Post Templates", "Story Design", "Ad Creatives", "Content Calendars"],
  },
  {
    icon: FileText,
    title: "Content Writing",
    description:
      "Compelling, SEO-optimized content that tells your brand story. From blog posts to website copy, every word is crafted with purpose.",
    features: ["Blog Posts", "Website Copy", "SEO Content", "Email Campaigns"],
  },
  {
    icon: PenTool,
    title: "Copywriting",
    description:
      "Persuasive copy that converts. Taglines, product descriptions, and marketing materials that speak directly to your audience.",
    features: ["Taglines", "Ad Copy", "Product Descriptions", "CTAs"],
  },
  {
    icon: Package,
    title: "Packaging Design",
    description:
      "Eye-catching packaging that stands out on shelves and creates memorable unboxing experiences for customers.",
    features: ["Product Packaging", "Label Design", "Box Design", "Mockups"],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={cn(
        "group relative p-8 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-500",
        !isVisible && "opacity-0",
        isVisible && "animate-fade-up",
        index % 3 === 1 && "delay-200",
        index % 3 === 2 && "delay-400"
      )}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>

      <h3 className="text-xl font-serif font-bold text-foreground mb-3">
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Features list */}
      <ul className="space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServicesGrid() {
  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="What I Offer"
          description="Comprehensive creative services that cover every aspect of visual communication and content strategy."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

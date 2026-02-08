"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@siddharth.design",
    href: "mailto:hello@siddharth.design",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India (Remote Worldwide)",
    href: null,
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Mon - Fri, 10am - 7pm IST",
    href: null,
  },
];

const socials = [
  { name: "Behance", href: "#" },
  { name: "Dribbble", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Twitter / X", href: "#" },
];

export function ContactInfo() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        "space-y-8",
        !isVisible && "opacity-0",
        isVisible && "animate-slide-in-right"
      )}
    >
      {/* Contact details */}
      <div className="space-y-6">
        <h3 className="text-lg font-serif font-bold text-foreground">
          Contact Details
        </h3>
        <div className="space-y-4">
          {contactDetails.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground font-medium">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Social links */}
      <div className="space-y-4">
        <h3 className="text-lg font-serif font-bold text-foreground">
          Follow Me
        </h3>
        <div className="space-y-2">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-3 px-4 rounded-lg border border-border hover:border-primary/30 hover:bg-card transition-all group"
            >
              <span className="text-sm font-medium text-foreground">
                {social.name}
              </span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* Quick note */}
      <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Quick response guaranteed.</span>{" "}
          I typically respond to inquiries within 24 hours. For urgent projects,
          feel free to mention it in your message.
        </p>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Coffee, Zap, ArrowUpRight } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 lg:py-32" data-testid="section-about">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTag label="About" />

          <div className="grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-16 mt-8">
            {/* Main text */}
            <div>
              <h2
                className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground mb-6 leading-snug"
                data-testid="heading-about"
              >
                I build mobile experiences
                <br />
                <span className="grad">that scale to millions.</span>
              </h2>

              <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed" data-testid="text-about-bio">
                <p>
                  I'm a Senior React Native Developer and Team Lead at Microlent System, where I architect
                  cross-platform mobile applications that serve real users across iOS and Android.
                </p>
                <p>
                  Over 4+ years I've led development teams, owned client relationships end-to-end,
                  and shipped complex features — from AI-powered personalization engines to
                  real-time Firebase systems and secure payment flows.
                </p>
                <p>
                  I believe great mobile software lives in the details: precise performance tuning,
                  thoughtful UX patterns, and clean architecture that teams can maintain and extend.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 mt-7 text-sm font-semibold text-foreground hover:text-primary transition-colors link-underline group"
              >
                Open to new opportunities
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Right: Info tiles */}
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: MapPin,
                  label: "Location",
                  value: "India",
                  sub: "Open to onsite, remote & hybrid",
                },
                {
                  icon: Coffee,
                  label: "Current role",
                  value: "Team Lead",
                  sub: "Microlent System Pvt. Ltd.",
                },
                {
                  icon: Zap,
                  label: "Specialization",
                  value: "React Native",
                  sub: "iOS & Android",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="surface p-4 flex items-start gap-3.5 hover:border-border/80 transition-colors"
                  data-testid={`card-about-${i}`}
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">{item.label}</div>
                    <div className="text-sm font-semibold text-foreground">{item.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function SectionTag({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 mb-2">
      <div className="w-1 h-3 rounded-full bg-primary" />
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
    </div>
  );
}

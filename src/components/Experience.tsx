import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SectionTag } from "./About";

const JOBS = [
  {
    role: "React Native Developer & Team Lead",
    company: "Microlent System Pvt. Ltd.",
    type: "Full-time",
    period: "Nov 2021 — Present",
    duration: "4+ yrs",
    location: "Jodhpur, Rajasthan, India",
    achievements: [
      { heading: "Mobile Architecture", detail: "Architected and deployed 3+ production cross-platform mobile apps for iOS & Android serving thousands of active users" },
      { heading: "Team Leadership", detail: "Led and mentored a team of 3–5 engineers for 1+ year — sprint planning, code reviews, delivery management and onboarding" },
      { heading: "Client Relations", detail: "Drove end-to-end client relationships from technical discovery through production delivery; earned Outstanding Client Management Award" },
      { heading: "Firebase Engineering", detail: "Engineered Firebase integrations for real-time data sync, secure authentication, and scalable backend services across multiple apps" },
      { heading: "Payment Integration", detail: "Implemented secure PayPal API payment flows for premium subscriptions and in-app purchase monetization" },
      { heading: "Performance", detail: "Optimized rendering pipelines and API response times, built a reusable component library that measurably cut development time" },
    ],
  },
];

export function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 lg:py-32 border-t border-border" data-testid="section-experience">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTag label="Experience" />
          <div className="mt-2 mb-10">
            <h2
              className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground"
              data-testid="heading-experience"
            >
              Work history
            </h2>
          </div>

          {JOBS.map((job, ji) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-12"
              data-testid={`card-experience-${ji}`}
            >
              {/* Left: meta */}
              <div className="lg:pt-1">
                <div className="lg:sticky lg:top-24">
                  <div className="font-heading font-bold text-base text-foreground mb-1" data-testid={`text-role-${ji}`}>{job.role}</div>
                  <a
                    href="#"
                    className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors block mb-3"
                  >
                    {job.company}
                  </a>
                  <div className="flex flex-col gap-1.5 text-xs text-muted-foreground">
                    <span className="font-mono">{job.period}</span>
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 rounded-full border border-border text-[10px] font-medium">{job.type}</span>
                      <span className="px-2 py-0.5 rounded-full border border-border text-[10px] font-medium">{job.duration}</span>
                    </div>
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>

              {/* Right: achievements */}
              <div className="flex flex-col gap-0 border-l border-border pl-6 lg:pl-8">
                {job.achievements.map((a, ai) => (
                  <motion.div
                    key={ai}
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.2 + ai * 0.07 }}
                    className="relative pb-6 group"
                    data-testid={`text-achievement-${ji}-${ai}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[29px] lg:-left-[37px] top-1 w-2 h-2 rounded-full border-2 border-border bg-background group-hover:border-primary transition-colors" />

                    <div className="text-xs font-semibold text-foreground mb-1">{a.heading}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a.detail}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

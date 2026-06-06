import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SectionTag } from "./About";
import { GraduationCap } from "lucide-react";

export function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 lg:py-32 border-t border-border" data-testid="section-education">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTag label="Education" />
          <h2
            className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground mt-2 mb-8"
            data-testid="heading-education"
          >
            Academic background
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="surface p-6 flex items-start gap-5 hover:border-border/80 transition-colors max-w-xl"
            data-testid="card-education"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-heading font-bold text-foreground mb-0.5" data-testid="text-degree">
                Bachelor of Computer Applications (BCA)
              </h3>
              <div className="text-sm font-semibold text-primary mb-2" data-testid="text-university">
                Jai Narayan Vyas University
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span>Jodhpur, Rajasthan, India</span>
                <span className="font-mono">(2018 – Sept 2021)</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

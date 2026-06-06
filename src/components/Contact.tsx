import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { SectionTag } from "./About";
import { Send, Github, Linkedin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [busy, setBusy] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { toast.error("All fields are required."); return; }
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent — I'll reply within 24 hours.");
    }, 1200);
  };

  const INPUT = "w-full px-3 py-2.5 text-sm bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all";

  return (
    <section id="contact" className="py-24 lg:py-32 border-t border-border" data-testid="section-contact">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTag label="Contact" />
          <div className="mt-2 mb-10">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground" data-testid="heading-contact">
              Let's work together
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-sm">
              Open to senior roles, freelance projects, and interesting builds..
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-14">
            {/* Form */}
            <motion.form
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.15 }}
              onSubmit={submit}
              className="flex flex-col gap-4"
              data-testid="form-contact"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className={INPUT}
                    data-testid="input-contact-name"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com"
                    className={INPUT}
                    data-testid="input-contact-email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about the role, project, or opportunity..."
                  className={`${INPUT} resize-none`}
                  data-testid="input-contact-message"
                />
              </div>
              <button
                type="submit"
                disabled={busy}
                className="self-start inline-flex items-center gap-2 h-9 px-5 rounded-md bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                data-testid="button-submit-contact"
              >
                {busy ? (
                  <>
                    <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    Send message
                  </>
                )}
              </button>
            </motion.form>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="flex flex-col gap-3"
            >
              {[
                { icon: Mail, label: "Email", value: "rv61229@gmail.com", href: "mailto:rv61229@gmail.com" },
                { icon: Phone, label: "Phone", value: "(+91) 8769920555", href: "tel:+918769920555" },
                { icon: Github, label: "GitHub", value: "github.com/rahulv009", href: "https://github.com/rahulv009" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/rahul-vyas", href: "https://www.linkedin.com/in/rahul-vyas-75aa231b0" },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.07 }}
                  className="surface p-4 flex items-center gap-3 hover:border-border/80 transition-colors group"
                  data-testid={`link-contact-${item.label.toLowerCase()}`}
                >
                  <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</div>
                    <div className="text-sm font-medium text-foreground">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

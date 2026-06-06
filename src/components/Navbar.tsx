import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 shrink-0" data-testid="link-logo">
          <span className="font-mono text-muted-foreground text-sm">~/</span>
          <span className="font-heading font-bold text-base text-foreground tracking-tight">rahul</span>
          <span className="font-heading font-bold text-base tracking-tight text-primary">.vyas</span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-0.5" data-testid="nav-desktop">
          {LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => go(l.href)}
              className="px-3.5 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-foreground/5 transition-colors duration-150 font-medium"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => go("#contact")}
            className="hidden md:inline-flex items-center h-8 px-4 rounded-md text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-colors shadow-sm"
            data-testid="button-hire-me"
          >
            Hire Me
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors"
            data-testid="button-mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={18} />
                </motion.span>
              ) : (
                <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl"
          >
            <div className="max-w-5xl mx-auto px-5 py-3 flex flex-col gap-1">
              {LINKS.map((l, i) => (
                <motion.button
                  key={l.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => go(l.href)}
                  className="text-left px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-foreground/5 transition-colors"
                >
                  {l.label}
                </motion.button>
              ))}
              <button
                onClick={() => go("#contact")}
                className="mt-2 py-2.5 text-sm font-semibold text-white bg-primary rounded-md"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

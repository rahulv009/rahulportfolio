import { Github, Linkedin, Mail } from "lucide-react";

const resumePdf = "/resume.pdf";

export function Footer() {
  return (
    <footer className="border-t border-border py-8" data-testid="footer">
      <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span className="font-mono text-muted-foreground text-sm">~/</span>
          <span className="font-heading font-bold text-sm text-foreground">rahul</span>
          <span className="font-heading font-bold text-sm text-primary">.vyas</span>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: "https://github.com/rahulv009", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/rahul-vyas-75aa231b0", label: "LinkedIn" },
            { icon: Mail, href: "mailto:rv61229@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
              title={label}
              data-testid={`link-footer-${label.toLowerCase()}`}
            >
              <Icon className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a
            href={resumePdf}
            download="Rahul_Vyas_Resume.pdf"
            className="hover:text-foreground transition-colors"
            data-testid="link-footer-resume"
          >
            Resume
          </a>
          <span>&copy; {new Date().getFullYear()} Rahul Vyas</span>
        </div>
      </div>
    </footer>
  );
}

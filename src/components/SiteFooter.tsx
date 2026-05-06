import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1440px] px-6 md:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="block size-4 bg-gradient-brand" />
            <span className="font-mono text-sm font-bold uppercase tracking-[0.2em]">
              Nuvo<span className="text-gradient">.Core</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            HR Tech engineered for precision. We machine the exact talent and
            technical capacity required to lock your roadmap into place.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 border border-border bg-background px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary animate-pulse-dot" />
            Protocol 4.0 — Live
          </div>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="size-9 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="size-9 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="size-9 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Facebook className="size-4" />
            </a>
          </div>
        </div>
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Services
          </div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/recruitment" className="hover:text-primary transition-colors">HR Services</Link></li>
            <li><Link to="/it-services" className="hover:text-primary transition-colors">IT Services</Link></li>
            <li><Link to="/trainings" className="hover:text-primary transition-colors">Trainings</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Company
          </div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1440px] px-6 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <span>© {new Date().getFullYear()} Nuvo Informatics. All systems aligned.</span>
          <span>Built for organizations that don't tolerate variance.</span>
        </div>
      </div>
    </footer>
  );
}

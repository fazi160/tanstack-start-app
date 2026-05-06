import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/recruitment", label: "HR_Services" },
  { to: "/it-services", label: "IT_Services" },
  { to: "/trainings", label: "Trainings" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-stretch justify-between px-4 sm:px-6 md:px-8">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <span className="block size-4 bg-gradient-brand transition-transform group-hover:rotate-45" />
          <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
            Nuvo<span className="text-gradient">.Informatics</span>
          </span>
        </Link>
        <nav className="hidden h-full items-stretch font-mono text-xs md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center border-l border-border px-5 text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/"
            className="ml-2 my-2 flex items-center bg-gradient-brand px-5 font-bold uppercase tracking-wider text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Initiate →
          </Link>
        </nav>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex items-center justify-center px-3 text-foreground"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-md font-mono text-xs">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border px-4 py-4 text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block bg-gradient-brand px-4 py-4 text-center font-bold uppercase tracking-wider text-primary-foreground"
          >
            Initiate →
          </Link>
        </nav>
      )}
    </header>
  );
}

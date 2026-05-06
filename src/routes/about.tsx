import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nuvo Informatics" },
      {
        name: "description",
        content:
          "Nuvo Informatics is an HR tech firm engineered for organizations that won't tolerate variance. Methodology, principles, and team.",
      },
      { property: "og:title", content: "About — Nuvo Informatics" },
      {
        property: "og:description",
        content:
          "Surgical, authoritative, data-driven. The methodology behind Nuvo Informatics.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const principles = [
    ["Variance is the enemy", "Hiring should not be a coin flip. We engineer for repeatable, measurable fit."],
    ["Senior engineers, always", "No L1 tiers, no junior staffers running searches. Principals own outcomes."],
    ["Tight shortlists", "Five great candidates beat fifty average ones. We refuse to flood your inbox."],
    ["Outcomes, not activity", "We're measured on lock rate, retention and output lift — not interviews scheduled."],
  ];

  return (
    <>
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="absolute -top-40 left-1/3 size-[600px] rounded-full pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-16 sm:py-20 lg:py-28">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary animate-fade-up">About</div>
          <h1 className="mt-6 max-w-4xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.02] animate-fade-up" style={{ animationDelay: "0.1s" }}>
            HR tech, <span className="text-gradient">engineered</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Nuvo Informatics was founded on the belief that talent infrastructure
            deserves the same precision as technical infrastructure. We're
            engineers, operators and recruiters who got tired of watching great
            companies lose to broken hiring processes.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
          <SectionHeader eyebrow="Operating Principles" title={<>Four rules. <span className="text-gradient">Non-negotiable</span>.</>} />
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
            {principles.map(([t, d], i) => (
              <div key={t} className="bg-background p-10 animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="font-mono text-[11px] uppercase tracking-widest text-primary">RULE {String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight">{t}</h3>
                <p className="mt-3 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader eyebrow="Origin" title={<>Why we started.</>} />
          </div>
          <div className="space-y-6 text-lg text-muted-foreground text-pretty">
            <p>
              We spent a decade inside scaling tech orgs — building platforms,
              hiring teams, and watching the same patterns repeat: agencies
              optimizing for placements, not retention; in-house teams drowning
              in JD-driven volume; founders losing months to misaligned hires.
            </p>
            <p>
              Nuvo Informatics is the firm we wanted to hire when we were on the
              other side of the table. <span className="text-foreground font-medium">Surgical, accountable, and built around outcomes.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to talk methodology?</h2>
          <Link to="/contact" className="mt-8 inline-flex bg-gradient-brand text-primary-foreground px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] glow-brand">
            Open a channel →
          </Link>
        </div>
      </section>
    </>
  );
}

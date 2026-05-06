import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nuvo Informatics — HR Tech for Recruitment, IT & Staff Augmentation" },
      {
        name: "description",
        content:
          "Calculate organizational deficits and machine the exact technical talent and IT capacity required. Recruitment, IT services and embedded pods.",
      },
      { property: "og:title", content: "Nuvo Informatics — HR Tech, Engineered" },
      {
        property: "og:description",
        content:
          "Recruitment, IT services and staff augmentation for organizations that don't tolerate variance.",
      },
    ],
  }),
  component: Index,
});

const SERVICES = [
  {
    code: "01",
    name: "HR Services",
    to: "/recruitment" as const,
    blurb:
      "Recruitment, payroll, statutory compliance, HR policy and audit — your complete people function, operated with precision.",
    metric: "14d avg time-to-lock",
  },
  {
    code: "02",
    name: "IT Services",
    to: "/it-services" as const,
    blurb:
      "Cloud, infrastructure, security and managed services delivered by senior engineers — not ticket queues.",
    metric: "99.98% uptime SLA",
  },
  {
    code: "03",
    name: "Trainings",
    to: "/trainings" as const,
    blurb:
      "IT-focused trainings: website & mobile app development, DevOps, cybersecurity and tailored corporate programs.",
    metric: "48h to deploy",
  },
];

const STATS = [
  { v: "1,200+", l: "Engineers placed" },
  { v: "0.5%", l: "12-month attrition" },
  { v: "34.2%", l: "Avg output lift" },
  { v: "48h", l: "Time to commit" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-grid-drift opacity-20 pointer-events-none" />
        <div
          className="absolute -top-40 -right-40 size-[600px] rounded-full pointer-events-none animate-fade-in"
          style={{ background: "var(--gradient-glow)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 size-[500px] rounded-full pointer-events-none animate-fade-in"
          style={{ background: "var(--gradient-glow)" }}
        />

        <div className="relative mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 border-x border-border">
          {/* Left */}
          <div className="lg:col-span-5 border-b lg:border-b-0 border-r-0 lg:border-r border-border p-6 sm:p-10 lg:p-16 flex flex-col justify-center">
            <div className="mb-8 flex items-center gap-4 animate-fade-up">
              <div className="h-px w-8 bg-gradient-brand" />
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary animate-pulse-dot" />
                Protocol 4.0 Active
              </div>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.02] text-balance animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Structural <span className="text-gradient">alignment</span>,
              <br />
              achieved.
            </h1>

            <p
              className="mt-6 max-w-[42ch] text-base sm:text-lg text-muted-foreground text-pretty animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              We don't source candidates. We calculate organizational deficits
              and machine the exact technical talent, IT services and
              engineering capacity required to lock your roadmap into place.
            </p>

            <div
              className="mt-10 flex items-stretch h-14 w-max font-mono text-xs animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                to="/contact"
                className="bg-gradient-brand text-primary-foreground px-7 font-bold uppercase tracking-[0.18em] flex items-center gap-3 hover:opacity-90 transition-opacity glow-brand"
              >
                Initiate sequence
                <span className="block size-2 bg-primary-foreground" />
              </Link>
              <Link
                to="/about"
                className="border border-border border-l-0 px-7 text-foreground hover:bg-surface transition-colors flex items-center"
              >
                Methodology →
              </Link>
            </div>
          </div>

          {/* Right — interface mock */}
          <div className="lg:col-span-7 bg-surface p-4 sm:p-8 lg:p-16 relative flex items-center justify-center min-h-[420px] sm:min-h-[520px]">
            <div className="w-full max-w-xl border border-border bg-background panel-shadow animate-scale-in">
              <div className="border-b border-border px-4 py-3 flex justify-between items-center bg-panel">
                <span className="text-[11px] font-mono text-muted-foreground">
                  Talent_Matrix // Slot_Analysis_9481
                </span>
                <div className="flex gap-1.5">
                  <div className="size-2 bg-border" />
                  <div className="size-2 bg-border" />
                  <div className="size-2 bg-primary animate-pulse-dot" />
                </div>
              </div>

              <div className="p-8 flex flex-col gap-8 relative">
                {/* Void */}
                <div className="border border-dashed border-border p-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold uppercase tracking-wide">
                      Node 04 · Principal Rust Engineer
                    </div>
                    <div className="mt-1 text-[11px] font-mono text-muted-foreground">
                      Req: low-latency distributed systems
                    </div>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-destructive bg-destructive/10 px-2 py-1">
                    Critical Void
                  </span>
                </div>

                {/* Connector */}
                <div className="absolute left-1/2 top-[112px] bottom-[112px] -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none">
                  <div className="h-8 w-px bg-gradient-brand" />
                  <div className="border border-primary bg-background size-6 flex items-center justify-center z-10 glow-brand">
                    <div className="size-2 bg-gradient-brand" />
                  </div>
                  <div className="h-8 w-px bg-gradient-brand" />
                </div>

                {/* Match */}
                <div className="border border-primary bg-neon-soft p-5 flex items-center justify-between relative">
                  <div className="flex items-center gap-4">
                    <div className="size-12 bg-gradient-brand shrink-0 grid place-items-center font-mono text-xs font-bold text-primary-foreground">
                      MK
                    </div>
                    <div>
                      <div className="text-sm font-bold uppercase tracking-wide">
                        M. Kensley
                      </div>
                      <div className="mt-1 text-[11px] font-mono text-muted-foreground">
                        Prev: HFT architecture
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-sm font-bold text-primary">
                      99.84% FIT
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Variance: 0.0016
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border grid grid-cols-3 divide-x divide-border bg-panel">
                {[
                  ["Time to lock", "14 days"],
                  ["Retention", "< 0.5%"],
                  ["Output lift", "+34.2%"],
                ].map(([l, v], i) => (
                  <div key={l} className="p-4">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                      {l}
                    </div>
                    <div className={`font-mono text-base ${i === 2 ? "text-primary" : ""}`}>
                      {v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo marquee */}
      <section className="border-b border-border overflow-hidden bg-surface/50">
        <div className="mx-auto max-w-[1440px] px-6 md:px-8 py-6 flex items-center gap-8">
          <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground shrink-0">
            Trusted by
          </div>
          <div className="flex-1 overflow-hidden relative">
            <div className="flex gap-12 animate-marquee whitespace-nowrap font-bold text-lg tracking-tight text-muted-foreground/70">
              {[..."NORDIC HELIX • OBSIDIAN LABS • PARALLAX • KENSEI • VERTEX-9 • CIPHER ROW • LUMEN GRID • HALCYON IO".split(" • "),
                ..."NORDIC HELIX • OBSIDIAN LABS • PARALLAX • KENSEI • VERTEX-9 • CIPHER ROW • LUMEN GRID • HALCYON IO".split(" • ")
              ].map((b, i) => (
                <span key={i} className="hover:text-foreground transition-colors">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
          <SectionHeader
            eyebrow="Service Modules"
            title={<>Three modules. <span className="text-gradient">One operating system</span> for your talent infrastructure.</>}
            description="Engaged independently or composed into a complete HR tech stack — we adapt to your organizational shape, never the reverse."
          />

          <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Link
                key={s.code}
                to={s.to}
                className="group bg-background p-8 hover:bg-surface transition-colors animate-fade-up flex flex-col"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  <span>Module {s.code}</span>
                  <span className="text-primary">{s.metric}</span>
                </div>
                <h3 className="mt-8 text-2xl font-bold tracking-tight">{s.name}</h3>
                <p className="mt-3 text-muted-foreground text-pretty flex-1">{s.blurb}</p>
                <div className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary group-hover:gap-3 transition-all">
                  Open module <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {STATS.map((s, i) => (
            <div
              key={s.l}
              className="bg-surface p-8 animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold tracking-tighter text-gradient">
                {s.v}
              </div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
          <SectionHeader
            eyebrow="Methodology"
            title={<>From organizational <span className="text-gradient">deficit</span> to deployed capacity in four phases.</>}
          />
          <div className="mt-16 grid gap-px bg-border md:grid-cols-4">
            {[
              ["01", "Diagnose", "Map the deficit. Quantify variance, surface bottlenecks, define the lock criteria."],
              ["02", "Calibrate", "Tune sourcing models against your stack, culture, compensation band, and timeline."],
              ["03", "Lock", "Present a tight shortlist of high-fit candidates. Median 14 days from brief to signed."],
              ["04", "Sustain", "Embedded check-ins, replacement guarantees, performance telemetry through month 12."],
            ].map(([n, t, d], i) => (
              <div
                key={n}
                className="bg-background p-8 animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="font-mono text-xs text-primary">PHASE {n}</div>
                <div className="mt-6 text-xl font-bold">{t}</div>
                <p className="mt-3 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-glow)" }}
        />
        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 text-center">
          <SectionHeader
            align="center"
            eyebrow="Initiate"
            title={<>Ready to <span className="text-gradient">eliminate variance</span> from your org chart?</>}
            description="A 30-minute diagnostic call. We surface deficits and propose a sequencing plan — no obligation, no pipeline games."
          />
          <div className="mt-10 flex justify-center">
            <Link
              to="/contact"
              className="bg-gradient-brand text-primary-foreground px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] glow-brand hover:opacity-90 transition-opacity"
            >
              Book diagnostic →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/staff-augmentation")({
  head: () => ({
    meta: [
      { title: "Staff Augmentation — Nuvo Informatics" },
      {
        name: "description",
        content:
          "Inject pre-vetted, elite engineering pods directly into your roadmap. Capacity in 48 hours, no restructuring required.",
      },
      { property: "og:title", content: "Staff Augmentation — Nuvo Informatics" },
      {
        property: "og:description",
        content:
          "Embedded engineering pods. Top 1% talent density. Bypass the hiring pipeline entirely.",
      },
    ],
  }),
  component: Page,
});

const PODS = [
  { t: "Tactical Pod", size: "1–2 engineers", d: "Surgical capacity to unblock a specific stream. Engagement from 4 weeks." },
  { t: "Squad", size: "3–5 engineers + lead", d: "A self-directed team that owns a roadmap area end-to-end. 3-month minimum." },
  { t: "Studio", size: "6–10 hybrid team", d: "Embedded design + engineering + PM. Build a product without growing headcount." },
];

function Page() {
  return (
    <>
      <Hero />

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
          <SectionHeader
            eyebrow="Engagement Models"
            title={<>Three pod shapes. <span className="text-gradient">All elite</span>.</>}
          />
          <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
            {PODS.map((p, i) => (
              <div key={p.t} className="bg-background p-10 animate-fade-up flex flex-col" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="font-mono text-[11px] uppercase tracking-widest text-primary">{p.size}</div>
                <h3 className="mt-6 text-3xl font-bold tracking-tight">{p.t}</h3>
                <p className="mt-4 text-muted-foreground flex-1">{p.d}</p>
                <div className="mt-8 h-px bg-border" />
                <div className="mt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  Deploy in 48h
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live roster mock */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="Live Roster"
              title={<>Bench-ready talent, <span className="text-gradient">streaming live</span>.</>}
              description="Our active roster is monitored continuously. Available pods are matched against your stack and timeline within hours of brief."
            />
          </div>
          <div className="border border-border bg-background panel-shadow animate-scale-in">
            <div className="border-b border-border px-4 py-3 flex justify-between items-center bg-panel">
              <span className="text-[11px] font-mono text-muted-foreground">roster.stream // active</span>
              <span className="text-[11px] font-mono text-primary inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary animate-pulse-dot" /> SECURE
              </span>
            </div>
            <div className="p-6 flex flex-col gap-3">
              {[
                ["DV", "D. Vance", "Sr. Systems Architect", "Rust · Go"],
                ["ER", "E. Rostova", "Core Infrastructure", "K8s · Terraform"],
                ["KO", "K. Okafor", "Fullstack / React", "TS · Next"],
                ["NS", "N. Sato", "Applied ML Engineer", "PyTorch · CUDA"],
              ].map(([i, n, r, s], idx) => (
                <div
                  key={i}
                  className="flex items-center gap-4 border border-border bg-background p-3 animate-fade-up hover:border-primary transition-colors"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="size-12 bg-gradient-brand grid place-items-center font-mono text-xs font-bold text-primary-foreground shrink-0">
                    {i}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold">{n}</div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-primary">{r}</div>
                  </div>
                  <div className="hidden sm:block font-mono text-[11px] text-muted-foreground tabular-nums">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Need capacity yesterday?</h2>
          <Link to="/contact" className="mt-8 inline-flex bg-gradient-brand text-primary-foreground px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] glow-brand">
            Deploy a pod →
          </Link>
        </div>
      </section>
    </>
  );
}

function Hero() {
  return (
    <section className="relative border-b border-border overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute -top-40 right-0 size-[500px] rounded-full pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-16 sm:py-20 lg:py-28">
        <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.02] animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Bypass the <span className="text-gradient">pipeline</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Stop losing sprint cycles to endless hiring loops. We inject pre-vetted,
          elite engineering pods directly into your roadmap — capacity in 48 hours.
        </p>
      </div>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { Cloud, Cog, ShieldCheck, Database, Headphones, Rocket, Globe, type LucideIcon } from "lucide-react";

export const Route = createFileRoute("/it-services")({
  head: () => ({
    meta: [
      { title: "IT Services — Nuvo Informatics" },
      {
        name: "description",
        content:
          "Cloud, infrastructure, security and managed services delivered by senior engineers. 99.98% uptime SLA.",
      },
      { property: "og:title", content: "IT Services — Nuvo Informatics" },
      {
        property: "og:description",
        content:
          "Senior-engineer-led IT services: cloud, DevOps, security, managed platforms. No ticket queues.",
      },
    ],
  }),
  component: Page,
});

const CAPABILITIES: { code: string; t: string; d: string; Icon: LucideIcon }[] = [
  { code: "CLD", t: "Cloud Architecture", d: "AWS, GCP and Azure designs that survive scale, audits and your CFO.", Icon: Cloud },
  { code: "DEV", t: "DevOps & Platform", d: "K8s, Terraform, CI/CD, observability — built to be handed back, not held hostage.", Icon: Cog },
  { code: "SEC", t: "Security & Compliance", d: "SOC 2, ISO 27001, penetration testing, AppSec reviews.", Icon: ShieldCheck },
  { code: "DAT", t: "Data Platforms", d: "Warehouses, lakes, streaming pipelines, governance.", Icon: Database },
  { code: "MGD", t: "Managed Services", d: "24/7 SRE coverage with named senior engineers — not an L1 tier.", Icon: Headphones },
  { code: "MOD", t: "Modernization", d: "Legacy → cloud-native. Zero-downtime cutovers, measured deliveries.", Icon: Rocket },
  { code: "WEB", t: "Web & Product Development", d: "Custom websites, web apps and full product builds — design, engineering and launch under one roof.", Icon: Globe },
];

function Page() {
  return (
    <>
      <Hero />
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
          <SectionHeader
            eyebrow="Capabilities"
            title={<>Built and operated by <span className="text-gradient">senior engineers</span>.</>}
            description="No outsourced L1 tier, no ticket purgatory. Every engagement is staffed with named principals accountable for outcomes."
          />
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c, i) => (
              <div key={c.code} className="bg-background p-8 animate-fade-up" style={{ animationDelay: `${i * 0.06}s` }}>
                <div className="flex items-center justify-between">
                  <div className="size-12 grid place-items-center bg-gradient-brand text-primary-foreground glow-brand">
                    <c.Icon className="size-6" strokeWidth={1.75} />
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-primary">{c.code}</div>
                </div>
                <h3 className="mt-5 text-xl font-bold">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SLA />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative border-b border-border overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute -top-40 left-0 size-[500px] rounded-full pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-16 sm:py-20 lg:py-28">
        <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.02] animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Infrastructure that holds <span className="text-gradient">under load</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Cloud, DevOps, security and managed services delivered the way they
          should be — by the engineers who'd want to run them themselves.
        </p>
      </div>
    </section>
  );
}

function SLA() {
  const m = [
    ["99.98%", "Uptime SLA"],
    ["< 8min", "P1 response"],
    ["100%", "Senior-engineer staffed"],
    ["24/7", "Named coverage"],
  ];
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {m.map(([v, l], i) => (
            <div key={l} className="bg-surface p-8 animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="text-4xl md:text-5xl font-bold tracking-tighter text-gradient">{v}</div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Need a partner that owns the outcome?</h2>
        <Link to="/contact" className="mt-8 inline-flex bg-gradient-brand text-primary-foreground px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] glow-brand">
          Scope an engagement →
        </Link>
      </div>
    </section>
  );
}

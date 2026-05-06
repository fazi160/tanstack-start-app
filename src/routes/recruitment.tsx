import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { Crown, Server, Layout, Brain, ShieldCheck, Compass, Wallet, FileCheck2, BookOpen, ClipboardCheck, Users, Megaphone, Landmark, type LucideIcon } from "lucide-react";

export const Route = createFileRoute("/recruitment")({
  head: () => ({
    meta: [
      { title: "Recruitment Engine — Nuvo Informatics" },
      {
        name: "description",
        content:
          "Pre-vetted technical talent calibrated to your stack and culture. Median 14 days from brief to signed offer.",
      },
      { property: "og:title", content: "Recruitment Engine — Nuvo Informatics" },
      {
        property: "og:description",
        content:
          "Top-percentile engineers, product, and data talent. Locked into your org with < 0.5% 12-month attrition.",
      },
    ],
  }),
  component: Page,
});

const SPECIALTIES: [string, string, LucideIcon][] = [
  ["Engineering Leadership", "VP, Director, Staff+ — calibrated for scale, ego, and clarity.", Crown],
  ["Backend & Infra", "Distributed systems, Rust, Go, Kubernetes, low-latency platforms.", Server],
  ["Frontend & Product", "React, performance-obsessed, design-system fluent.", Layout],
  ["Data & ML", "Applied ML, MLOps, data platform, quantitative.", Brain],
  ["Security", "AppSec, cloud security, SRE-adjacent.", ShieldCheck],
  ["Product & Design", "Senior PMs and design leaders for technical products.", Compass],
  ["HR", "HRBPs, talent partners and people-ops leaders who scale culture with the org.", Users],
  ["Sales & Marketing", "Quota-carrying AEs, growth, demand gen and brand leaders for revenue compounding.", Megaphone],
  ["Finance", "Controllers, FP&A, finance leadership — numbers tight, controls tighter.", Landmark],
];

const HR_SERVICES: [string, string, LucideIcon][] = [
  ["Payroll Management", "End-to-end payroll processing, salary disbursement, payslips, reimbursements and year-end tax workings — accurate, on-time, every cycle.", Wallet],
  ["Statutory Management", "PF, ESI, PT, LWF, gratuity and labour-law filings handled by specialists. Zero-defect compliance with audit-grade documentation.", FileCheck2],
  ["HR Policy", "Drafting and modernizing employee handbooks, leave, POSH, code of conduct and performance frameworks aligned to your culture and law.", BookOpen],
  ["HR Audit", "Independent diagnostic of your HR function — compliance, process, documentation and risk — delivered as a remediation roadmap.", ClipboardCheck],
];

function Page() {
  return (
    <>
      <Hero />
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
          <SectionHeader
            eyebrow="Specialties"
            title={<>We recruit where <span className="text-gradient">precision matters most</span>.</>}
          />
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {SPECIALTIES.map(([t, d, Icon], i) => (
              <div
                key={t}
                className="bg-background p-8 animate-fade-up"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="size-12 grid place-items-center bg-gradient-brand text-primary-foreground glow-brand">
                  <Icon className="size-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-xl font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
          <SectionHeader
            eyebrow="HR Services"
            title={<>Beyond hiring — your <span className="text-gradient">complete HR backbone</span>.</>}
            description="Payroll, statutory, policy and audit — operated by senior HR practitioners so your people function runs without variance."
          />
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
            {HR_SERVICES.map(([t, d, Icon], i) => (
              <div
                key={t}
                className="bg-surface p-8 animate-fade-up flex gap-6"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="shrink-0 size-12 bg-gradient-brand grid place-items-center text-primary-foreground glow-brand">
                  <Icon className="size-6" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Process />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative border-b border-border overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div
        className="absolute -top-40 right-0 size-[500px] rounded-full pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-16 sm:py-20 lg:py-28">
        <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.02] animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Talent, machined to <span className="text-gradient">99.8% fit</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Stop running the same broken pipeline. We replace volume sourcing with
          calibrated matching — a tight shortlist of pre-vetted candidates,
          measured against your exact technical, cultural and operational signals.
        </p>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["Brief", "60-minute diagnostic. We extract the real requirement, not the JD."],
    ["Source", "Network + targeted outbound. Quality over reach."],
    ["Calibrate", "Two rounds of internal vetting before you see a profile."],
    ["Lock", "Tight shortlist (3-5). Offer support. Replacement guarantee."],
  ];
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
        <SectionHeader eyebrow="Process" title={<>How a search runs.</>} />
        <div className="mt-16 grid gap-px bg-border md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <div key={t} className="bg-surface p-8 animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="font-mono text-xs text-primary">PHASE {String(i + 1).padStart(2, "0")}</div>
              <div className="mt-6 text-xl font-bold">{t}</div>
              <p className="mt-3 text-sm text-muted-foreground">{d}</p>
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
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
          Have a critical role to lock?
        </h2>
        <Link
          to="/contact"
          className="mt-8 inline-flex bg-gradient-brand text-primary-foreground px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] glow-brand"
        >
          Brief us →
        </Link>
      </div>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { Code2, Server, ShieldCheck, Users2, BrainCircuit, TestTube2, type LucideIcon } from "lucide-react";

export const Route = createFileRoute("/trainings")({
  head: () => ({
    meta: [
      { title: "Trainings — Nuvo Informatics" },
      {
        name: "description",
        content:
          "IT and corporate trainings: Website & Mobile App development, DevOps, Cybersecurity and tailored corporate programs.",
      },
      { property: "og:title", content: "Trainings — Nuvo Informatics" },
      {
        property: "og:description",
        content:
          "Hands-on IT trainings led by senior practitioners. Web, Mobile, DevOps, Cybersecurity and corporate upskilling.",
      },
    ],
  }),
  component: Page,
});

const PROGRAMS: { t: string; d: string; Icon: LucideIcon }[] = [
  {
    t: "Website & Mobile App Development",
    d: "Full-stack web (React, Next.js, Node) and mobile (React Native, Flutter) bootcamps — from fundamentals to deployment.",
    Icon: Code2,
  },
  {
    t: "DevOps Engineering",
    d: "CI/CD pipelines, Docker, Kubernetes, Terraform, observability and cloud-native operations on AWS / Azure / GCP.",
    Icon: Server,
  },
  {
    t: "Cybersecurity Training",
    d: "Defensive and offensive security: network hardening, OWASP, SIEM, ethical hacking, incident response, compliance.",
    Icon: ShieldCheck,
  },
  {
    t: "Corporate Trainings",
    d: "Tailored upskilling for engineering and business teams — Agile, cloud transformation, AI literacy, plus management trainings including HR, soft skills, role management, leadership, change management and employee engagement.",
    Icon: Users2,
  },
  {
    t: "Data & AI",
    d: "Python for data, SQL, machine learning, LLM application development and MLOps fundamentals.",
    Icon: BrainCircuit,
  },
  {
    t: "Quality Engineering",
    d: "Manual & automated testing, Selenium, Cypress, Playwright, performance and API testing.",
    Icon: TestTube2,
  },
];

function Page() {
  return (
    <>
      <Hero />

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
          <SectionHeader
            eyebrow="Programs"
            title={<>Curriculum built by <span className="text-gradient">practitioners</span>.</>}
            description="Every program is designed and delivered by senior engineers actively shipping in production — not career trainers."
          />
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map(({ t, d, Icon }, i) => (
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
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              ["2,400+", "Learners trained"],
              ["92%", "Placement / role uplift"],
              ["40+", "Corporate clients"],
              ["100%", "Practitioner-led"],
            ].map(([v, l], i) => (
              <div key={l} className="bg-surface p-8 animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="text-4xl md:text-5xl font-bold tracking-tighter text-gradient">{v}</div>
                <div className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Upskill your team, <span className="text-gradient">on your schedule</span>.
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex bg-gradient-brand text-primary-foreground px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] glow-brand"
          >
            Request a curriculum →
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
      <div
        className="absolute -top-40 right-0 size-[500px] rounded-full pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-16 sm:py-20 lg:py-28">
        <h1
          className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.02] animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Web and Mobile App Development, DevOps,{" "}
          <span className="text-gradient">Cybersecurity and more</span>.
        </h1>
        <p
          className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          IT and corporate training programs across web, mobile, DevOps,
          cybersecurity and AI — designed by engineers, delivered with rigor.
        </p>
      </div>
    </section>
  );
}

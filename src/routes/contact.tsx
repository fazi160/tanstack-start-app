import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nuvo Informatics" },
      {
        name: "description",
        content:
          "Open a channel. 30-minute diagnostic to surface deficits and propose a sequencing plan.",
      },
      { property: "og:title", content: "Contact — Nuvo Informatics" },
      {
        property: "og:description",
        content: "Initiate sequence. Book a diagnostic with the Nuvo Informatics team.",
      },
    ],
  }),
  component: Page,
});

const SERVICES = ["HR Services", "IT Services", "Trainings", "Not sure yet"];

function Page() {
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState(SERVICES[0]);

  return (
    <>
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="absolute -top-40 right-0 size-[600px] rounded-full pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20 lg:py-28">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary animate-fade-up">
            Contact // Initiate
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.02] animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Open a <span className="text-gradient">channel</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
            A 30-minute diagnostic. We surface deficits and propose a sequencing
            plan — no obligation, no pipeline games.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-10">
            <SectionHeader eyebrow="Direct Channels" title={<>Reach the team.</>} />
            <div className="space-y-6">
              {[
                ["EMAIL", "nuvoinformatics@gmail.com"],
                ["ADDRESS", "1st Floor, Nest, Ernakulam, Kerala, India"],
              ].map(([l, v]) => (
                <div key={l} className="border border-border p-5 hover:border-primary transition-colors">
                  <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{l}</div>
                  <div className="mt-2 font-mono text-base">{v}</div>
                </div>
              ))}
            </div>
            <div className="border border-border bg-surface p-6">
              <div className="font-mono text-[11px] uppercase tracking-widest text-primary inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary animate-pulse-dot" /> Response SLA
              </div>
              <div className="mt-3 text-2xl font-bold">Within 4 business hours.</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Mon–Fri · 09:00 AM – 06:00 PM IST. After hours, expect a reply by 10:00 AM next business day.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="border border-border bg-surface p-8 panel-shadow"
            >
              {submitted ? (
                <div className="py-12 text-center animate-scale-in">
                  <div className="mx-auto size-12 bg-gradient-brand grid place-items-center font-mono text-primary-foreground glow-brand">
                    ✓
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">Channel open.</h3>
                  <p className="mt-2 text-muted-foreground">
                    We've received your brief. Expect a reply within 4 business hours.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Name" name="name" required />
                    <Field label="Company" name="company" required />
                  </div>
                  <Field label="Work email" name="email" type="email" required />
                  <div>
                    <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      Module of interest
                    </label>
                    <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {SERVICES.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setService(s)}
                          className={`font-mono text-[11px] uppercase tracking-widest border p-3 transition-colors ${
                            service === s
                              ? "border-primary bg-neon-soft text-primary"
                              : "border-border text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      Brief
                    </label>
                    <textarea
                      name="brief"
                      rows={5}
                      required
                      placeholder="What's the deficit? Timeline? Stack?"
                      className="mt-3 w-full bg-background border border-border p-4 text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-brand text-primary-foreground py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] glow-brand hover:opacity-90 transition-opacity"
                  >
                    Initiate sequence →
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-3 w-full bg-background border border-border p-4 text-sm focus:border-primary focus:outline-none transition-colors"
      />
    </div>
  );
}

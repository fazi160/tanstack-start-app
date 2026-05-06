interface Props {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, description, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      <div className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}>
        <div className="h-px w-8 bg-gradient-brand" />
        <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </div>
      </div>
      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg text-muted-foreground text-pretty">{description}</p>
      )}
    </div>
  );
}

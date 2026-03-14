export function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Clone & Configure",
      description:
        "Clone the repo, set your brand voice, product context, and goals. The agent system initializes with your identity.",
      detail: "5 minutes to set up. Zero infrastructure to manage.",
    },
    {
      step: "02",
      title: "Plan Your Sprint",
      description:
        "Run /sprint to plan your first week. Define content goals, assign tasks, set deadlines. The agents organize around your objectives.",
      detail: "Tasks auto-assign based on agent specialization.",
    },
    {
      step: "03",
      title: "Activate Agents",
      description:
        "Run /activate tunde to switch into an agent's persona and produce work. Or run /heartbeat to orchestrate all agents at once.",
      detail: "Each agent produces real, publishable deliverables.",
    },
    {
      step: "04",
      title: "Review & Publish",
      description:
        "Content flows through the waterfall automatically. Review in the Marketing Hub dashboard, approve, and publish across all channels.",
      detail: "From brief to published in hours, not weeks.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-brand uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            From zero to marketing machine{" "}
            <span className="text-muted-foreground">in 4 steps</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className="relative flex gap-6 md:gap-8"
              >
                {/* Step number */}
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-mono font-bold text-sm">
                    {s.step}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-3" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.description}</p>
                  <p className="mt-2 text-xs text-brand font-medium">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Command showcase */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="rounded-xl border border-border/60 bg-accent text-accent-foreground overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
              </div>
              <span className="text-[10px] text-white/40 font-mono ml-2">claude-code</span>
            </div>
            <div className="p-5 font-mono text-sm space-y-3">
              <div>
                <span className="text-green-400">$</span>{" "}
                <span className="text-white">/heartbeat</span>
              </div>
              <div className="text-white/60 text-xs leading-relaxed">
                <p>Agency Heartbeat — 2026-03-14 10:00 UTC</p>
                <p className="mt-1">Sprint 2: Day 3 of 7 | 27/42 tasks done</p>
                <p className="mt-1">
                  Tunde: ✍️ ACTIVE — Writing LinkedIn posts{"\n"}
                  Amara: 📱 ACTIVE — Scheduling Twitter threads{"\n"}
                  Chidi: 🔍 ACTIVE — SEO re-audit running{"\n"}
                  Dayo: 🎨 ACTIVE — Carousel designs (44 slides){"\n"}
                  Kemi: 🚀 PENDING — Awaiting Brevo setup{"\n"}
                  Ife: 📊 ACTIVE — GA4 dashboards{"\n"}
                  Femi: ⚙️ ACTIVE — CMS API fix
                </p>
                <p className="mt-1 text-green-400">All agents synced. 3 handoffs ready.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

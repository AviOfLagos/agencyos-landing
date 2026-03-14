export function Metrics() {
  const metrics = [
    { value: "7", label: "AI Agents", sublabel: "Specialized roles" },
    { value: "42", label: "Tasks / Sprint", sublabel: "Average throughput" },
    { value: "6x", label: "Faster", sublabel: "Than traditional teams" },
    { value: "$0", label: "Salaries", sublabel: "Zero headcount" },
  ];

  const comparisons = [
    {
      task: "Blog post (2,500 words, SEO-optimized)",
      traditional: "3-5 days",
      agencyos: "2 hours",
    },
    {
      task: "20 social media posts across platforms",
      traditional: "1 week",
      agencyos: "4 hours",
    },
    {
      task: "Full SEO audit + fix brief",
      traditional: "2 weeks",
      agencyos: "1 day",
    },
    {
      task: "Dealer outreach sequence (3 emails)",
      traditional: "3 days",
      agencyos: "1 hour",
    },
    {
      task: "Complete sprint (research to publish)",
      traditional: "4 weeks",
      agencyos: "1 week",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Big numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                {m.value}
              </p>
              <p className="text-sm font-medium text-foreground mt-2">{m.label}</p>
              <p className="text-xs text-muted-foreground">{m.sublabel}</p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-center text-xl font-semibold text-foreground mb-8">
            Traditional team vs AgencyOS
          </h3>

          <div className="rounded-xl border border-border/60 overflow-hidden">
            <div className="grid grid-cols-3 gap-0 bg-muted/50 px-5 py-3 border-b border-border/40">
              <p className="text-xs font-medium text-muted-foreground">Task</p>
              <p className="text-xs font-medium text-muted-foreground text-center">Traditional</p>
              <p className="text-xs font-medium text-brand text-center">AgencyOS</p>
            </div>
            {comparisons.map((c, i) => (
              <div
                key={c.task}
                className={`grid grid-cols-3 gap-0 px-5 py-3.5 ${
                  i < comparisons.length - 1 ? "border-b border-border/30" : ""
                }`}
              >
                <p className="text-sm text-foreground pr-4">{c.task}</p>
                <p className="text-sm text-muted-foreground text-center">{c.traditional}</p>
                <p className="text-sm text-brand font-medium text-center">{c.agencyos}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

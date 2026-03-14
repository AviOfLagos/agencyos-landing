export function Problem() {
  const problems = [
    {
      icon: "💸",
      title: "Hiring is expensive",
      description:
        "A content writer, SEO specialist, social media manager, designer, and growth marketer. That's 5 salaries before you publish a single post.",
    },
    {
      icon: "🐌",
      title: "Coordination kills speed",
      description:
        "Writer waits for briefs. Designer waits for copy. Social waits for designs. Email waits for everyone. Your content waterfall is a content bottleneck.",
    },
    {
      icon: "📉",
      title: "Inconsistency kills brands",
      description:
        "Different voices across channels. SEO ignored. Social posted randomly. No analytics loop. Your marketing looks like 5 different companies.",
    },
  ];

  return (
    <section id="problem" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-brand uppercase tracking-wider mb-3">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Marketing teams are broken
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Building a marketing team is slow, expensive, and fragile.
            Most startups can&apos;t afford one — and those that can still struggle with coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="relative p-6 md:p-8 rounded-2xl bg-background border border-border/60 hover:border-border transition-colors"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="text-3xl mb-4 block">{p.icon}</span>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

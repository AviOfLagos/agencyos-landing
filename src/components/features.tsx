export function Features() {
  const features = [
    {
      icon: "📋",
      title: "Sprint Planning",
      description: "Organize work into weekly sprints with task dependencies, priorities, and deadlines. See what every agent is working on at a glance.",
    },
    {
      icon: "🔄",
      title: "Content Waterfall",
      description: "Research → Strategy → Writing → SEO → Social → Outreach. Each agent's output automatically feeds the next agent's input.",
    },
    {
      icon: "💬",
      title: "Daily Standups",
      description: "Automated daily standup reports showing what each agent completed, what's next, and what's blocked. CEO-ready in 30 seconds.",
    },
    {
      icon: "📊",
      title: "Marketing Hub Dashboard",
      description: "Real-time dashboard showing sprints, tasks, agents, calendar, content drafts, and analytics. Built with Next.js and SQLite.",
    },
    {
      icon: "📱",
      title: "Multi-Platform Publishing",
      description: "Compose and schedule content for Twitter/X, Instagram, LinkedIn, Facebook, and TikTok. Platform-native formatting, hashtags, and CTAs.",
    },
    {
      icon: "🔍",
      title: "SEO Engine",
      description: "Automated SEO audits, keyword research, schema markup, sitemap generation, and competitor analysis. From 38/100 to 80+ in weeks.",
    },
    {
      icon: "✉️",
      title: "Email & Outreach",
      description: "Cold email sequences, dealer outreach, newsletter writing, and lead capture. Integrated with Brevo for sending.",
    },
    {
      icon: "🧠",
      title: "Agent Memory",
      description: "Each agent has short-term and long-term memory. They remember past work, learn from feedback, and improve over time.",
    },
    {
      icon: "🔗",
      title: "Tool Integrations",
      description: "Buffer for social scheduling, Google Analytics, Search Console, Canva, Brevo — all connected through MCP servers and APIs.",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-brand uppercase tracking-wider mb-3">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Everything a marketing team does.
            <br />
            <span className="text-muted-foreground">Automated.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 rounded-xl border border-border/40 hover:border-border hover:bg-muted/20 transition-all duration-200"
            >
              <span className="text-2xl block mb-3">{f.icon}</span>
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Extensibility() {
  const extensions = [
    {
      icon: "🤖",
      title: "Add New Agents",
      description:
        "Need a PR specialist? A paid ads manager? A community manager? Create a new agent in minutes — just define their identity, skills, and tools. They plug right into the waterfall.",
      example: "8 files → new agent operational",
    },
    {
      icon: "⚡",
      title: "Install New Skills",
      description:
        "Browse and install marketing skills from a growing library. SEO, copywriting, email, social — or create your own custom skills that encode your unique workflows.",
      example: "/install competitor-watch → instant capability",
    },
    {
      icon: "🔌",
      title: "Connect New Tools",
      description:
        "Add MCP servers for any platform: Slack, Notion, HubSpot, Mailchimp, Ahrefs — whatever your stack needs. Agents get new tools without code changes.",
      example: "MCP server → agents use it automatically",
    },
    {
      icon: "📹",
      title: "Learn from Any Video",
      description:
        "Extract transcripts and marketing strategies from YouTube, Instagram, TikTok, and 1,000+ platforms. Save strategies to a searchable library. Turn competitor content into your playbook.",
      example: "/process-video URL → strategies extracted",
    },
    {
      icon: "📚",
      title: "Strategy Library",
      description:
        "Save and categorize marketing strategies from research, competitors, and industry leaders. Search by category (Content, Growth, SEO, Social, Paid). Agents reference the library for inspiration.",
      example: "/list-strategies SEO → instant reference",
    },
    {
      icon: "🔀",
      title: "Custom Workflows",
      description:
        "Define your own content waterfall. Change handoff triggers, approval rules, and quality gates. Make the system match how YOUR team works, not the other way around.",
      example: "Edit triggers.md → new workflow live",
    },
  ];

  return (
    <section id="extensibility" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-brand uppercase tracking-wider mb-3">
            Infinitely Extensible
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Grows with your ambition
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            AgencyOS isn&apos;t a locked-down SaaS. It&apos;s an open platform you own.
            Add agents, skills, tools, and workflows as your needs evolve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {extensions.map((ext) => (
            <div
              key={ext.title}
              className="group p-6 rounded-2xl border border-border/40 hover:border-brand/30 hover:bg-brand-muted/30 transition-all duration-300"
            >
              <span className="text-2xl block mb-3">{ext.icon}</span>
              <h3 className="font-semibold text-foreground mb-2">{ext.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{ext.description}</p>
              <code className="text-xs bg-muted px-2 py-1 rounded text-brand font-mono">
                {ext.example}
              </code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

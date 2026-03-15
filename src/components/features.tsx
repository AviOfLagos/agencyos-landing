export function Features() {
  const features = [
    {
      icon: "📋",
      title: "Sprint Planning & Task Board",
      description: "Weekly sprints with task dependencies, priorities, deadlines, and blocking detection. Visual board with color-coded statuses. Run /sprint to plan, /board to view.",
    },
    {
      icon: "🔄",
      title: "Autonomous Content Waterfall",
      description: "Research → Strategy → Writing → SEO → Social → Outreach. Trigger-based handoffs — when one agent finishes, the next starts automatically. Zero meetings.",
    },
    {
      icon: "💬",
      title: "Daily Standups & Heartbeats",
      description: "Run /standup for a full team report with executive summary. Run /heartbeat for live sync. CEO gets a 30-second TL;DR with blockers and priorities.",
    },
    {
      icon: "📊",
      title: "Marketing Hub Dashboard",
      description: "Real-time Next.js dashboard: sprints, tasks, agents, calendar, content drafts, standups, tools directory, and 47 documented commands. Self-hosted.",
    },
    {
      icon: "📱",
      title: "6-Platform Publishing",
      description: "Twitter/X, Instagram, LinkedIn, Facebook, TikTok, and email. Platform-native formatting, hashtag strategy, and optimal posting times. Buffer integration for scheduling.",
    },
    {
      icon: "🔍",
      title: "Full SEO Suite",
      description: "10 SEO skills: audits, keyword research, schema markup (JSON-LD), sitemap generation, competitor pages, hreflang, geo SEO, programmatic SEO, and technical SEO.",
    },
    {
      icon: "📹",
      title: "Video Intelligence",
      description: "Extract transcripts from 1,000+ video platforms via yt-dlp. Auto-save marketing strategies from competitor content. Searchable strategy library by category.",
    },
    {
      icon: "🧠",
      title: "Agent Memory System",
      description: "Short-term memory (active context, blockers), long-term memory (learnings, patterns). Agents remember past work, brand voice, and product positioning across sessions.",
    },
    {
      icon: "✉️",
      title: "Email & Cold Outreach",
      description: "Cold email sequences, nurture campaigns, newsletters, and lead capture. Resend integration for transactional email. SPF/DKIM/DMARC setup guides included.",
    },
    {
      icon: "🎨",
      title: "Brand-Aware Design System",
      description: "AI image prompt injection with your brand colors, typography, and photography style. Design tool integration ready. Every visual asset is automatically on-brand.",
    },
    {
      icon: "🔒",
      title: "Quality Gates & Escalation",
      description: "Auto-approve content that passes quality checks. 4-level escalation (Agent → Cross-agent → CMO → CEO). Only humans approve money, credentials, and legal decisions.",
    },
    {
      icon: "🔗",
      title: "MCP Tool Ecosystem",
      description: "Connect any marketing tool via MCP servers — Buffer, GA4, Search Console, Resend, and more. Extensible architecture means you can add tools without changing agent code.",
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

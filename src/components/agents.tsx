export function Agents() {
  const agents = [
    {
      name: "Avi",
      role: "Project Owner (Autonomous PM)",
      emoji: "👔",
      color: "bg-slate-700",
      colorLight: "bg-slate-700/10",
      skills: ["Sprint planning", "Decision-making", "Agent coordination", "Escalation management"],
      description:
        "The autonomous CEO proxy. Runs 4-hour heartbeat cycles, makes all operational decisions, unblocks agents, and never waits for human confirmation unless truly needed.",
    },
    {
      name: "Tunde",
      role: "Content Writer",
      emoji: "✍️",
      color: "bg-blue-500",
      colorLight: "bg-blue-500/10",
      skills: ["Blog writing", "Copywriting", "Brand voice", "Long-form SEO content"],
      description:
        "Transforms briefs into compelling, SEO-optimized blog posts and website copy. Writes in your brand voice with cultural context awareness.",
    },
    {
      name: "Amara",
      role: "Social Media Manager",
      emoji: "📱",
      color: "bg-pink-500",
      colorLight: "bg-pink-500/10",
      skills: ["Platform-native content", "Hashtag strategy", "Content calendar", "Community"],
      description:
        "Adapts content into platform-specific posts for Twitter/X, Instagram, LinkedIn, TikTok, and Facebook. Manages scheduling and engagement.",
    },
    {
      name: "Chidi",
      role: "SEO Specialist",
      emoji: "🔍",
      color: "bg-green-500",
      colorLight: "bg-green-500/10",
      skills: ["Technical SEO", "Keyword research", "Schema markup", "Site audits"],
      description:
        "Handles all search engine optimization — from technical fixes and keyword strategy to schema markup that gets you ranking.",
    },
    {
      name: "Dayo",
      role: "Creative Strategist",
      emoji: "🎨",
      color: "bg-amber-500",
      colorLight: "bg-amber-500/10",
      skills: ["Campaign concepts", "Visual direction", "Content briefs", "AI design prompts"],
      description:
        "Creates campaign concepts, visual direction, content briefs, and design assets. Bridges strategy and execution with creative vision.",
    },
    {
      name: "Kemi",
      role: "Growth & Outreach",
      emoji: "🚀",
      color: "bg-purple-500",
      colorLight: "bg-purple-500/10",
      skills: ["Email marketing", "Cold outreach", "Lead generation", "Partnerships"],
      description:
        "Drives growth through outreach campaigns, email sequences, and strategic partnerships to expand your reach and revenue.",
    },
    {
      name: "Ife",
      role: "Analytics & Research",
      emoji: "📊",
      color: "bg-cyan-500",
      colorLight: "bg-cyan-500/10",
      skills: ["Market research", "Competitor analysis", "Data analytics", "Trend spotting"],
      description:
        "Provides the research foundation — competitor analysis, market trends, content gaps, and performance metrics that guide every decision.",
    },
    {
      name: "Femi",
      role: "Technical Lead",
      emoji: "⚙️",
      color: "bg-orange-500",
      colorLight: "bg-orange-500/10",
      skills: ["Dev specs", "CMS management", "API integrations", "Internal tools"],
      description:
        "Bridges marketing and development — creating specs, building internal tools, managing integrations, and ensuring technical deliverables ship.",
    },
  ];

  return (
    <section id="agents" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-brand uppercase tracking-wider mb-3">
            Meet the Team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            8 agents. Zero salaries.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Each agent has their own personality, specialized skills, memory, and task queue.
            They hand off work to each other automatically through the content waterfall.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="group relative p-6 rounded-2xl bg-background border border-border/60 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${agent.colorLight} flex items-center justify-center text-2xl shrink-0`}>
                  {agent.emoji}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{agent.name}</h3>
                  <p className="text-xs text-muted-foreground">{agent.role}</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {agent.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {agent.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex px-2 py-0.5 rounded-full bg-muted text-[10px] font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* CMO card */}
          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-brand/5 to-accent/5 border border-brand/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-2xl shrink-0">
                🧠
              </div>
              <div>
                <h3 className="font-semibold text-foreground">You (CMO)</h3>
                <p className="text-xs text-muted-foreground">Chief Marketing Officer</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              You orchestrate the team. Set goals, review work, approve content, and make strategic decisions.
              The agents handle execution — you drive direction.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["Sprint planning", "Content approval", "Strategy", "Budget"].map((s) => (
                <span key={s} className="inline-flex px-2 py-0.5 rounded-full bg-brand/10 text-[10px] font-medium text-brand">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

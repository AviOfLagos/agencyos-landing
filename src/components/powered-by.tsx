export function PoweredBy() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-brand uppercase tracking-wider mb-3">
            The Engine
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Powered by{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent">
              Claude Code
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            AgencyOS runs on Anthropic&apos;s Claude Code &mdash; the AI coding agent that can
            read files, execute commands, manage git, and orchestrate complex workflows.
            Your agents aren&apos;t chatbots. They&apos;re autonomous workers with real tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left: What Claude Code provides */}
          <div className="p-6 rounded-2xl bg-background border border-border/60">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              What Powers the Agents
            </h3>
            <ul className="space-y-3">
              {[
                "File system access — agents read briefs, write content, update task boards",
                "CLI tool execution — yt-dlp, ffmpeg, git, npm, and more",
                "MCP server connections — Buffer, Google Analytics, Search Console, Brevo",
                "Persistent memory — agents remember past work across sessions",
                "Slash commands — /heartbeat, /standup, /activate, /sprint",
                "Browser automation — post to social media, check analytics, audit sites",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <svg className="w-4 h-4 text-brand shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Skills ecosystem */}
          <div className="p-6 rounded-2xl bg-background border border-border/60">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </span>
              20+ Marketing Skills Built In
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Content Strategy", "SEO Audit", "Copywriting", "Email Sequences",
                "Launch Strategy", "Pricing Strategy", "Programmatic SEO",
                "Marketing Psychology", "Cold Email", "Social Content",
                "Free Tool Strategy", "YouTube Transcripts", "Instagram Research",
                "Video Processing", "Schema Markup", "Sitemap Generation",
                "Competitor Analysis", "Hreflang", "Geo SEO", "Social Carousels",
                "Infographic Design", "Brand Guidelines",
              ].map((skill) => (
                <span
                  key={skill}
                  className="inline-flex px-2.5 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Plus: custom skill creation, MCP server installation, and API connector building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

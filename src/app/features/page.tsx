import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WaitlistForm } from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "Features — Everything a Marketing Team Does, Automated | AgencyOS",
  description:
    "Sprint planning, content waterfall, 6-platform publishing, full SEO suite, video intelligence, agent memory, email outreach, brand-aware design, and MCP ecosystem.",
};

const featureGroups = [
  {
    category: "Planning & Management",
    features: [
      {
        icon: "📋",
        title: "Sprint Planning & Task Board",
        description:
          "Weekly sprints with task dependencies, priorities, deadlines, and blocking detection. Visual board with color-coded statuses.",
        commands: ["/sprint", "/board", "/assign"],
        details:
          "42 tasks per sprint across 8 agents. RICE/ICE scoring for prioritization. Automatic dependency tracking — blocked tasks are skipped, future work pulled forward.",
      },
      {
        icon: "💬",
        title: "Daily Standups & Heartbeats",
        description:
          "Automated progress reports with executive summaries, blockers, and next priorities.",
        commands: ["/standup", "/heartbeat"],
        details:
          "4-hour heartbeat cycles keep the team moving. Standups include KPI tracking, velocity metrics, and CEO action items. Every report is saved for historical reference.",
      },
      {
        icon: "📊",
        title: "Marketing Hub Dashboard",
        description:
          "Real-time Next.js dashboard: sprints, tasks, agents, calendar, content drafts, standups, tools directory, and 47 documented commands.",
        commands: ["/agency-status"],
        details:
          "Self-hosted dashboard with full visibility into agent activity, content pipeline, and performance metrics. Built with Next.js 15, deployable to Vercel in one command.",
      },
    ],
  },
  {
    category: "Content & Publishing",
    features: [
      {
        icon: "🔄",
        title: "Autonomous Content Waterfall",
        description:
          "Research → Strategy → Writing → SEO → Social → Outreach. Trigger-based handoffs between agents.",
        commands: ["/activate"],
        details:
          "When Tunde finishes a blog post, Chidi automatically SEO-optimizes it, Amara adapts it to 6 social platforms, and Kemi includes it in the next email campaign. Zero meetings. Zero delays.",
      },
      {
        icon: "📱",
        title: "6-Platform Publishing",
        description:
          "Twitter/X, Instagram, LinkedIn, Facebook, TikTok, and email. Platform-native formatting with optimal posting times.",
        commands: [],
        details:
          "Each platform gets content formatted for its algorithm. Threads for Twitter, carousels for Instagram, professional posts for LinkedIn, engaging stories for Facebook, short-form for TikTok. Buffer integration for scheduling.",
      },
      {
        icon: "✉️",
        title: "Email & Cold Outreach",
        description:
          "Cold email sequences, nurture campaigns, newsletters, and lead capture with email marketing integration.",
        commands: [],
        details:
          "Design multi-step email sequences with personalization tokens. Cold outreach with follow-up automation. Newsletter creation with subscriber management. SPF/DKIM/DMARC setup guides included.",
      },
    ],
  },
  {
    category: "SEO & Discovery",
    features: [
      {
        icon: "🔍",
        title: "Full SEO Suite (10 Skills)",
        description:
          "Comprehensive SEO: audits, keyword research, schema markup, sitemap generation, competitor analysis, and more.",
        commands: ["/seo", "/seo-audit", "/seo-page"],
        details:
          "10 specialized SEO skills: audit, page analysis, content optimization, technical SEO, schema markup (JSON-LD), sitemap generation, geo SEO, programmatic SEO, competitor pages, and hreflang. Covers everything from local search to international markets.",
      },
      {
        icon: "📹",
        title: "Video Intelligence",
        description:
          "Extract transcripts from 1,000+ video platforms. Auto-save marketing strategies from competitor content.",
        commands: ["/process-video", "/save-strategy", "/list-strategies"],
        details:
          "Uses yt-dlp to extract transcripts from YouTube, Instagram, TikTok, and 1,000+ other platforms. Automatically categorize and save marketing strategies. Build a searchable strategy library organized by category (content, growth, social, SEO, paid, general).",
      },
      {
        icon: "🔬",
        title: "Instagram Research",
        description:
          "Analyze high-performing Instagram content from tracked accounts to inform your strategy.",
        commands: ["/instagram-research"],
        details:
          "Identify what content performs best in your niche. Analyze engagement patterns, posting frequency, hashtag effectiveness, and content formats. Feed insights directly into your content strategy.",
      },
    ],
  },
  {
    category: "Intelligence & Memory",
    features: [
      {
        icon: "🧠",
        title: "Agent Memory System",
        description:
          "Short-term memory (active context) and long-term memory (learnings, patterns) that persist across sessions.",
        commands: [],
        details:
          "Every agent maintains two memory files. Short-term memory tracks current work, active blockers, and recent decisions. Long-term memory accumulates patterns, lessons learned, and strategic notes. This means agents get smarter over time.",
      },
      {
        icon: "🎨",
        title: "Brand-Aware Everything",
        description:
          "Brand voice, visual identity, and product positioning are injected into every piece of content automatically.",
        commands: [],
        details:
          "A centralized brand voice file is law for all content. Visual brand style guide with colors, typography, and photography direction. AI image prompts automatically include your brand palette. No asset is ever off-brand.",
      },
      {
        icon: "🔒",
        title: "Quality Gates & Escalation",
        description:
          "4-level escalation system. Auto-approve content that passes quality checks. Only escalate what truly needs a human.",
        commands: [],
        details:
          "Level 0: Agent handles autonomously. Level 1: Cross-agent coordination. Level 2: CMO decision. Level 3: CEO required (money, credentials, legal). Research, SEO briefs, and content briefs auto-approve. Blog drafts auto-approve if quality gate passes.",
      },
    ],
  },
  {
    category: "Extensibility & Tools",
    features: [
      {
        icon: "🔗",
        title: "MCP Tool Ecosystem",
        description:
          "Connect any tool via MCP servers. Buffer, GA4, Search Console, Canva, email platforms — all integrated without changing agent code.",
        commands: [],
        details:
          "Model Context Protocol (MCP) allows agents to interact with external tools through a standardized interface. Add new tools by configuring a server — no code changes to agents required. Currently supports browser automation, file system, search, and more.",
      },
      {
        icon: "➕",
        title: "Add Agents in Minutes",
        description:
          "Create a new agent with 8 files and it's immediately operational. No code changes, no deployments.",
        commands: [],
        details:
          "Each agent is defined by 8 markdown files: identity, writing style, core skills, tools, tasks, heartbeat, short-term memory, and long-term memory. Create the directory, add the files, update the roster — the new agent joins the team instantly.",
      },
      {
        icon: "⚡",
        title: "22+ Marketing Skills",
        description:
          "Pre-installed skills for content strategy, copywriting, SEO, email, social, pricing, launch planning, and more.",
        commands: [],
        details:
          "Skills are specialized capabilities that any agent can use: content-strategy, copywriting, marketing-psychology, product-marketing-context, launch-strategy, pricing-strategy, seo-audit, programmatic-seo, email-sequence, free-tool-strategy, social-content, cold-email, and more. Install new skills with a single command.",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-20 md:py-28 bg-gradient-to-b from-muted/40 to-background">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm font-medium text-brand uppercase tracking-wider mb-3">
              Features
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Everything a marketing team does.
              <br />
              <span className="text-muted-foreground">Automated.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Sprint planning, content waterfall, 6-platform publishing, full SEO suite,
              video intelligence, agent memory, and an infinitely extensible tool ecosystem.
            </p>
          </div>
        </section>

        {featureGroups.map((group) => (
          <section
            key={group.category}
            className="py-16 border-b border-border/30 last:border-none"
          >
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-2xl font-bold text-foreground mb-10">
                {group.category}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {group.features.map((f) => (
                  <div
                    key={f.title}
                    className="group p-6 rounded-2xl border border-border/40 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300"
                  >
                    <span className="text-3xl block mb-4">{f.icon}</span>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {f.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {f.description}
                    </p>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">
                      {f.details}
                    </p>
                    {f.commands.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {f.commands.map((cmd) => (
                          <code
                            key={cmd}
                            className="text-[11px] px-2 py-0.5 rounded bg-muted font-mono text-brand"
                          >
                            {cmd}
                          </code>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="py-20 bg-muted/30">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              See it in action
            </h2>
            <p className="text-muted-foreground mb-8">
              Join the waitlist for early access to the full AgencyOS platform.
            </p>
            <WaitlistForm variant="section" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

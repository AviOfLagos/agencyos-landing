import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WaitlistForm } from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "How It Works — From Clone to Content in 10 Minutes | AgencyOS",
  description:
    "Clone the repo, configure your brand, plan your first sprint, and watch 8 AI agents produce real marketing deliverables. Powered by Claude Code.",
};

const steps = [
  {
    number: "01",
    title: "Clone & Configure",
    duration: "5 minutes",
    description:
      "Clone the AgencyOS repository and configure your brand. Edit the brand voice file, product marketing context, and visual identity. Your entire brand DNA is captured in markdown files.",
    details: [
      "Fork the repo or clone directly",
      "Edit brand-voice.md with your tone, do/don't rules, and personality",
      "Fill in product-marketing-context.md with positioning, audience, and competitors",
      "Set up brand-style.md with colors, fonts, and photography direction",
      "Configure .env with your API keys (Resend, Buffer, etc.)",
    ],
    terminal: `$ git clone https://github.com/your-org/agencyos
$ cd agencyos
$ claude  # Opens Claude Code in the project
> /heartbeat  # All 8 agents sync and report ready`,
  },
  {
    number: "02",
    title: "Plan Your First Sprint",
    duration: "2 minutes",
    description:
      "Run /sprint to plan your first week of work. Olu (Project Owner) analyzes your goals, creates tasks, assigns them to agents, and sets up the dependency chain. 42 tasks in under 2 minutes.",
    details: [
      "Define your monthly goals (traffic, followers, leads, content pieces)",
      "Olu creates the sprint with task dependencies",
      "Each agent gets their assignments automatically",
      "Critical path is identified — blockers are flagged early",
      "Sprint board is ready for tracking",
    ],
    terminal: `> /sprint
🤖 Olu: Planning Sprint 1 — "Foundation & Content"
📋 42 tasks created across 8 agents
🔗 12 dependency chains mapped
⚡ Critical path: Research → Brief → Blog → Social
✅ Sprint ready. Run /board to view.`,
  },
  {
    number: "03",
    title: "Activate the Waterfall",
    duration: "Ongoing",
    description:
      "Activate your first agent and watch the waterfall flow. Ife researches, Dayo creates the concept, Tunde writes the blog, Chidi SEO-optimizes, Amara adapts to social, Kemi includes in email. Each handoff is automatic.",
    details: [
      "Agents work in parallel where possible (3-6 concurrent)",
      "Trigger-based handoffs — no manual coordination needed",
      "Quality gates auto-approve content that meets standards",
      "Olu runs the 4-hour heartbeat cycle to keep everything moving",
      "You check in with /standup whenever you want",
    ],
    terminal: `> /activate ife
📊 Ife: Competitor analysis complete → triggering Chidi
🔍 Chidi: SEO brief ready → triggering Dayo
🎨 Dayo: Content brief created → triggering Tunde
✍️ Tunde: Blog post written (2,847 words) → triggering Amara
📱 Amara: 20 social posts adapted → triggering Kemi
🚀 Kemi: Email sequence drafted
✅ Full waterfall complete in 1 session`,
  },
  {
    number: "04",
    title: "Review & Publish",
    duration: "5 minutes",
    description:
      "Review the dashboard, approve first-time content, and publish. After the first batch, quality gates handle approval automatically. Your only job is to provide credentials for new platforms.",
    details: [
      "Run /agency-status for the full dashboard",
      "Review first posts on each new platform (one-time)",
      "After approval, all future content auto-publishes",
      "Olu logs anything needing your action to the Human Efforts Dashboard",
      "Check the dashboard periodically — or don't. The team runs itself.",
    ],
    terminal: `> /agency-status
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Sprint 1: 38/42 tasks complete (90%)
📝 Content: 2 blogs, 20 social posts, 3 emails
🔍 SEO: 4 briefs, schema markup, sitemap fix
👥 Agents: 8/8 active, 0 blocked
🎯 Velocity: 6.3x human pace
━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-20 md:py-28 bg-gradient-to-b from-muted/40 to-background">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm font-medium text-brand uppercase tracking-wider mb-3">
              How It Works
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              From clone to content
              <br />
              <span className="text-muted-foreground">in 10 minutes.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              No complex setup. No infrastructure. Clone the repo, configure your brand,
              and let 8 AI agents handle everything from research to publishing.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-20">
              {steps.map((step, i) => (
                <div key={step.number} className="relative">
                  {i < steps.length - 1 && (
                    <div className="absolute left-6 top-20 bottom-0 w-px bg-border/50 hidden md:block" />
                  )}
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0">
                      <span className="text-brand font-bold text-sm">
                        {step.number}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-foreground">
                          {step.title}
                        </h3>
                        <span className="text-sm text-brand font-medium">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                            What happens
                          </p>
                          <ul className="space-y-2">
                            {step.details.map((d) => (
                              <li
                                key={d}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <span className="text-brand mt-0.5 text-xs">●</span>
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                            Terminal
                          </p>
                          <pre className="p-4 rounded-xl bg-accent text-accent-foreground text-xs font-mono leading-relaxed overflow-x-auto">
                            {step.terminal}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Powered By */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Powered by Claude Code
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              AgencyOS runs on Anthropic&apos;s Claude Code — giving every agent access to
              file system operations, CLI tools, MCP server connections, persistent memory,
              slash commands, and browser automation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                "File system access",
                "CLI tools (yt-dlp, ffmpeg)",
                "MCP connections",
                "Persistent memory",
                "Slash commands",
                "Browser automation",
                "Background agents",
                "Git integration",
              ].map((cap) => (
                <span
                  key={cap}
                  className="px-3 py-1.5 rounded-full bg-background border border-border/60 text-xs font-medium text-muted-foreground"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Ready to try it?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join the waitlist and be first to run your own AI marketing agency.
            </p>
            <WaitlistForm variant="section" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

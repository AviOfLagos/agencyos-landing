import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WaitlistForm } from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "Meet Your AI Marketing Team — AgencyOS Agents",
  description:
    "7 specialized AI agents: Content Writer, Social Media Manager, SEO Specialist, Creative Strategist, Growth Lead, Analyst, and Technical Lead. Each with memory, personality, and skills.",
};

const agents = [
  {
    name: "Olu",
    role: "Project Owner",
    emoji: "👔",
    color: "from-brand to-emerald-600",
    colorLight: "bg-brand/10",
    skills: [
      "Sprint planning",
      "Decision-making",
      "Agent coordination",
      "Priority triage",
      "RICE/ICE scoring",
      "Risk assessment",
    ],
    description:
      "The autonomous CEO proxy. Olu makes all operational decisions, runs the 4-hour heartbeat cycle, resolves conflicts, and ensures no agent is ever idle. He only escalates when something genuinely requires a human — credentials, money, or legal decisions.",
    quote: "I don't wait for permission on things the team can handle.",
    details: [
      "Runs 4-hour heartbeat cycles: sync → review → memory → standup",
      "Uses RICE/ICE frameworks for priority decisions",
      "Maintains the Human Efforts Dashboard for CEO action items",
      "Pulls from future sprints when current work is blocked",
    ],
  },
  {
    name: "Tunde",
    role: "Content Writer",
    emoji: "✍️",
    color: "from-blue-500 to-blue-600",
    colorLight: "bg-blue-500/10",
    skills: [
      "Blog writing",
      "Copywriting",
      "Brand voice",
      "Long-form SEO content",
      "Newsletters",
      "LinkedIn posts",
    ],
    description:
      "Transforms briefs into compelling, SEO-optimized blog posts, social copy, and newsletters. Writes in your brand voice with cultural context awareness. Produces 2,000+ word articles that rank.",
    quote:
      "I write like a trusted friend who happens to know everything about your product.",
    details: [
      "Produces 2,000-3,000 word blog posts per brief",
      "Adapts tone for LinkedIn, Facebook, newsletters, and website",
      "Embeds target keywords naturally (no stuffing)",
      "Runs humanization pass to eliminate AI-tell patterns",
    ],
  },
  {
    name: "Amara",
    role: "Social Media Manager",
    emoji: "📱",
    color: "from-pink-500 to-pink-600",
    colorLight: "bg-pink-500/10",
    skills: [
      "Platform-native content",
      "Hashtag strategy",
      "Content calendar",
      "6-platform publishing",
      "Community management",
    ],
    description:
      "Adapts content into platform-specific posts for Twitter/X, Instagram, LinkedIn, TikTok, and Facebook. Manages scheduling through Buffer, creates hashtag strategies, and optimizes posting times.",
    quote: "Every platform speaks a different language. I speak all six.",
    details: [
      "Creates platform-native formats (threads, carousels, reels scripts)",
      "Manages posting calendar with optimal timing per platform",
      "Builds hashtag strategies mixing niche and broad tags",
      "Sets up new social accounts with full optimization guides",
    ],
  },
  {
    name: "Chidi",
    role: "SEO Specialist",
    emoji: "🔍",
    color: "from-green-500 to-green-600",
    colorLight: "bg-green-500/10",
    skills: [
      "Technical SEO",
      "Keyword research",
      "Schema markup",
      "Site audits",
      "Competitor analysis",
      "Programmatic SEO",
    ],
    description:
      "Handles all search engine optimization — 10 SEO skills covering audits, keyword strategy, schema markup (JSON-LD), sitemap generation, competitor pages, hreflang, geo SEO, and technical fixes.",
    quote: "I don't just optimize pages. I build ranking systems.",
    details: [
      "10 SEO skills: audit, page, content, technical, schema, sitemap, geo, programmatic, competitor, hreflang",
      "Generates JSON-LD structured data for every content type",
      "Creates SEO briefs with primary + secondary keywords and SERP analysis",
      "Monitors rankings across multiple search engines",
    ],
  },
  {
    name: "Dayo",
    role: "Creative Strategist",
    emoji: "🎨",
    color: "from-amber-500 to-amber-600",
    colorLight: "bg-amber-500/10",
    skills: [
      "Campaign concepts",
      "Visual direction",
      "Content briefs",
      "AI design prompts",
      "Brand identity",
    ],
    description:
      "Creates campaign concepts, visual direction, content briefs, and design assets. Bridges strategy and execution with creative vision. Generates AI image prompts injected with your brand colors and style.",
    quote:
      "Every visual asset should feel like it was made by someone who bleeds your brand.",
    details: [
      "Creates campaign concepts with visual mood boards",
      "Generates AI image prompts with brand color/style injection",
      "Designs carousel slides, social graphics, and infographic layouts",
      "Maintains brand style guide and visual identity consistency",
    ],
  },
  {
    name: "Kemi",
    role: "Growth & Outreach",
    emoji: "🚀",
    color: "from-purple-500 to-purple-600",
    colorLight: "bg-purple-500/10",
    skills: [
      "Email marketing",
      "Cold outreach",
      "Lead generation",
      "Partnerships",
      "Newsletter strategy",
    ],
    description:
      "Drives growth through email sequences, cold outreach, partnerships, and lead capture. Designs nurture campaigns that convert leads into customers. Manages dealer/partner relationships.",
    quote:
      "Growth isn't a department. It's a system. I build the system.",
    details: [
      "Designs cold email sequences with follow-ups",
      "Creates newsletter templates and nurture flows",
      "Builds partnership outreach campaigns",
      "Manages lead lists and segmentation",
    ],
  },
  {
    name: "Ife",
    role: "Analytics & Research",
    emoji: "📊",
    color: "from-cyan-500 to-cyan-600",
    colorLight: "bg-cyan-500/10",
    skills: [
      "Market research",
      "Competitor analysis",
      "Data analytics",
      "Trend spotting",
      "GA4/GSC dashboards",
    ],
    description:
      "Provides the research foundation — competitor analysis, market trends, content gaps, and performance metrics that guide every decision. Sets up GA4 and Search Console dashboards.",
    quote:
      "Data without action is trivia. I turn research into decisions.",
    details: [
      "Produces competitor analysis reports with actionable insights",
      "Monitors market trends and content gaps",
      "Sets up GA4 and Google Search Console dashboards",
      "Extracts marketing strategies from competitor video content",
    ],
  },
  {
    name: "Femi",
    role: "Technical Lead",
    emoji: "⚙️",
    color: "from-orange-500 to-orange-600",
    colorLight: "bg-orange-500/10",
    skills: [
      "Dev specs",
      "CMS management",
      "API integrations",
      "Internal tools",
      "MCP servers",
    ],
    description:
      "Bridges marketing and development — creating specs, building internal tools, managing integrations, and ensuring technical deliverables ship. Evaluates and integrates new tools and MCP servers.",
    quote:
      "If the tools don't exist, I build them. If they exist, I integrate them.",
    details: [
      "Creates detailed dev specs for engineering handoff",
      "Manages CMS, API integrations, and internal tooling",
      "Evaluates new tools (SearXNG, Vercel Browser, etc.)",
      "Builds automation scripts and MCP server connections",
    ],
  },
];

export default function AgentsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-muted/40 to-background">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm font-medium text-brand uppercase tracking-wider mb-3">
              Meet Your Team
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              8 agents. Zero salaries.
              <br />
              <span className="text-muted-foreground">Real results.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Each agent has their own personality, specialized skills, persistent memory,
              and task queue. They hand off work to each other automatically through the content waterfall.
            </p>
          </div>
        </section>

        {/* Content Waterfall */}
        <section className="py-16 border-b border-border/30">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-8">The Content Waterfall</h2>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              {[
                { agent: "Ife", action: "researches", color: "bg-cyan-500" },
                { agent: "Dayo", action: "creates concept", color: "bg-amber-500" },
                { agent: "Tunde", action: "writes content", color: "bg-blue-500" },
                { agent: "Chidi", action: "SEO-optimizes", color: "bg-green-500" },
                { agent: "Amara", action: "adapts to social", color: "bg-pink-500" },
                { agent: "Kemi", action: "includes in email", color: "bg-purple-500" },
              ].map((step, i) => (
                <div key={step.agent} className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border/50">
                    <div className={`w-2.5 h-2.5 rounded-full ${step.color}`} />
                    <span className="font-medium text-foreground">{step.agent}</span>
                    <span className="text-muted-foreground">{step.action}</span>
                  </div>
                  {i < 5 && <span className="text-muted-foreground text-lg">→</span>}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Trigger-based handoffs — when one agent finishes, the next starts automatically. Zero meetings required.
            </p>
          </div>
        </section>

        {/* Agent Cards */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {agents.map((agent) => (
                <div
                  key={agent.name}
                  className="group relative p-8 rounded-2xl bg-background border border-border/60 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={`w-16 h-16 rounded-2xl ${agent.colorLight} flex items-center justify-center text-3xl shrink-0`}
                    >
                      {agent.emoji}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{agent.name}</h3>
                      <p className="text-sm text-muted-foreground">{agent.role}</p>
                    </div>
                  </div>

                  <p className="mt-5 text-muted-foreground leading-relaxed">
                    {agent.description}
                  </p>

                  {agent.quote && (
                    <blockquote className="mt-4 pl-4 border-l-2 border-brand/30 text-sm text-muted-foreground italic">
                      &quot;{agent.quote}&quot;
                    </blockquote>
                  )}

                  <div className="mt-5">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                      Capabilities
                    </p>
                    <ul className="space-y-1.5">
                      {agent.details.map((d) => (
                        <li key={d} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-brand mt-1 text-xs">●</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {agent.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex px-2.5 py-1 rounded-full bg-muted text-[11px] font-medium text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Ready to meet your team?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join the waitlist and get early access to your own AI marketing agency.
            </p>
            <WaitlistForm variant="section" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

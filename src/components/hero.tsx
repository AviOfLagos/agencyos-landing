"use client";

import { WaitlistForm } from "./waitlist-form";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-brand/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-muted text-brand text-xs font-medium mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-soft" />
            Now accepting early access applications
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08] animate-slide-up"
          >
            Your AI Marketing Team{" "}
            <span className="bg-gradient-to-r from-brand to-emerald-400 bg-clip-text text-transparent">
              That Runs Itself
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            7 specialized AI agents. One marketing engine. Content, SEO, social media,
            design, outreach, and analytics &mdash; orchestrated autonomously.
            Ship a month&apos;s marketing in a week.
          </p>

          {/* CTA */}
          <div
            className="mt-10 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <WaitlistForm variant="hero" />
          </div>

          {/* Social proof */}
          <p
            className="mt-6 text-xs text-muted-foreground animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Powered by Claude Code from Anthropic &middot; 20+ marketing skills &middot; Infinitely extensible &middot; Free to start
          </p>
        </div>

        {/* Dashboard preview */}
        <div
          className="mt-16 md:mt-20 max-w-4xl mx-auto animate-scale-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative rounded-xl border border-border/60 bg-muted/30 shadow-2xl shadow-brand/5 overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-muted/50">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
              </div>
              <div className="flex-1 mx-8">
                <div className="h-5 rounded-md bg-background/80 max-w-xs mx-auto flex items-center justify-center">
                  <span className="text-[10px] text-muted-foreground">localhost:3001</span>
                </div>
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="p-6 md:p-8 bg-background/50">
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Tasks Done", value: "27/42", color: "text-brand" },
                  { label: "Agents Active", value: "7/7", color: "text-blue-500" },
                  { label: "Content Created", value: "24 pcs", color: "text-purple-500" },
                  { label: "Sprint", value: "Day 3/7", color: "text-amber-500" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className={`text-xl md:text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { agent: "Tunde", role: "Content Writer", status: "3 blogs written", emoji: "✍️", bg: "bg-blue-500/10" },
                  { agent: "Amara", role: "Social Media", status: "20 posts ready", emoji: "📱", bg: "bg-pink-500/10" },
                  { agent: "Chidi", role: "SEO Specialist", status: "Audit complete", emoji: "🔍", bg: "bg-green-500/10" },
                ].map((a) => (
                  <div key={a.agent} className={`rounded-lg ${a.bg} p-3 flex items-center gap-3`}>
                    <span className="text-xl">{a.emoji}</span>
                    <div>
                      <p className="text-sm font-medium text-foreground">{a.agent}</p>
                      <p className="text-[10px] text-muted-foreground">{a.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

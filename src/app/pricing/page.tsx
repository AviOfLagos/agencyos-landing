import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WaitlistForm } from "@/components/waitlist-form";

export const metadata: Metadata = {
  title: "Pricing — Free to Start, Scales With You | AgencyOS",
  description:
    "AgencyOS is free and self-hosted. Your only cost is the Claude Code subscription. Compare the cost of an AI marketing team vs. hiring humans.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-20 md:py-28 bg-gradient-to-b from-muted/40 to-background">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm font-medium text-brand uppercase tracking-wider mb-3">
              Pricing
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Free to start.
              <br />
              <span className="text-muted-foreground">Scales with you.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              AgencyOS is open-source and self-hosted. Your only cost is the Claude Code
              subscription. Compare that to hiring a marketing team.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Free */}
              <div className="p-8 rounded-2xl border border-border/60 bg-background">
                <h3 className="text-lg font-bold text-foreground">Starter</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  For solo founders and indie hackers
                </p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-foreground">$0</span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  + Claude Code subscription
                </p>
                <ul className="mt-8 space-y-3">
                  {[
                    "8 AI marketing agents",
                    "20+ marketing skills",
                    "Content waterfall automation",
                    "Sprint planning & task board",
                    "Agent memory system",
                    "Self-hosted (your machine)",
                    "Community support",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-brand mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="#waitlist-cta"
                    className="block w-full text-center py-3 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
                  >
                    Join Waitlist
                  </a>
                </div>
              </div>

              {/* Pro */}
              <div className="p-8 rounded-2xl border-2 border-brand bg-background relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brand text-brand-foreground text-xs font-medium">
                  Most Popular
                </div>
                <h3 className="text-lg font-bold text-foreground">Pro</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  For growing businesses and agencies
                </p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-foreground">$49</span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  + Claude Code subscription
                </p>
                <ul className="mt-8 space-y-3">
                  {[
                    "Everything in Starter",
                    "Managed hosting (cloud)",
                    "Priority onboarding call",
                    "Custom agent templates",
                    "Advanced analytics dashboard",
                    "Multi-brand support",
                    "Email & chat support",
                    "SearXNG search integration",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-brand mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="#waitlist-cta"
                    className="block w-full text-center py-3 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Join Waitlist
                  </a>
                </div>
              </div>

              {/* Enterprise */}
              <div className="p-8 rounded-2xl border border-border/60 bg-background">
                <h3 className="text-lg font-bold text-foreground">Enterprise</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  For agencies managing multiple clients
                </p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-foreground">Custom</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Contact us for pricing
                </p>
                <ul className="mt-8 space-y-3">
                  {[
                    "Everything in Pro",
                    "Unlimited brands/clients",
                    "Custom agent development",
                    "API access for integrations",
                    "Dedicated infrastructure",
                    "SLA & uptime guarantees",
                    "White-label option",
                    "Dedicated account manager",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-brand mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="mailto:hello@nexprove.com"
                    className="block w-full text-center py-3 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              AgencyOS vs. Hiring a Marketing Team
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-muted-foreground font-medium">
                      Role
                    </th>
                    <th className="text-right py-4 px-4 text-muted-foreground font-medium">
                      Human Cost/yr
                    </th>
                    <th className="text-right py-4 px-4 text-brand font-medium">
                      AgencyOS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { role: "Content Writer", human: "$55,000", ai: "$0" },
                    { role: "Social Media Manager", human: "$50,000", ai: "$0" },
                    { role: "SEO Specialist", human: "$65,000", ai: "$0" },
                    { role: "Creative Strategist", human: "$70,000", ai: "$0" },
                    { role: "Growth / Outreach", human: "$60,000", ai: "$0" },
                    { role: "Data Analyst", human: "$65,000", ai: "$0" },
                    { role: "Technical Lead", human: "$90,000", ai: "$0" },
                    { role: "Project Manager", human: "$75,000", ai: "$0" },
                  ].map((row) => (
                    <tr key={row.role} className="border-b border-border/30">
                      <td className="py-3 px-4 text-foreground">{row.role}</td>
                      <td className="py-3 px-4 text-right text-muted-foreground">
                        {row.human}
                      </td>
                      <td className="py-3 px-4 text-right text-brand font-semibold">
                        {row.ai}
                      </td>
                    </tr>
                  ))}
                  <tr className="font-bold">
                    <td className="py-4 px-4 text-foreground">Total</td>
                    <td className="py-4 px-4 text-right text-foreground">$530,000/yr</td>
                    <td className="py-4 px-4 text-right text-brand">$0/yr*</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                * Plus Claude Code subscription (~$20/month). Managed hosting available at $49/month.
              </p>
            </div>
          </div>
        </section>

        <section id="waitlist-cta" className="py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Start for free
            </h2>
            <p className="text-muted-foreground mb-8">
              Join the waitlist and get early access to the Starter plan — completely free.
            </p>
            <WaitlistForm variant="section" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

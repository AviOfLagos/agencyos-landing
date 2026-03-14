import { WaitlistForm } from "./waitlist-form";

export function Waitlist() {
  return (
    <section id="waitlist" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-medium text-brand uppercase tracking-wider mb-3">
            Early Access
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Ready to automate your marketing?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            AgencyOS is opening early access soon. Join the waitlist to be first in line.
            We&apos;ll set up your AI marketing team personally.
          </p>

          <div className="mt-8">
            <WaitlistForm variant="section" />
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-lg mx-auto">
            {[
              { icon: "🎁", text: "Free to start — no credit card required" },
              { icon: "🤝", text: "Personal onboarding for early adopters" },
              { icon: "🔒", text: "Your data stays yours — self-hosted option" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-2.5">
                <span className="text-lg shrink-0">{item.icon}</span>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

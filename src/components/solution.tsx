export function Solution() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-brand uppercase tracking-wider mb-3">
            The Solution
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            An AI agency that thinks, plans,{" "}
            <span className="bg-gradient-to-r from-brand to-emerald-400 bg-clip-text text-transparent">
              and executes
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AgencyOS isn&apos;t a chatbot. It&apos;s a fully orchestrated team of 7 AI agents —
            each with their own personality, skills, memory, and task queue —
            working together through an automated content waterfall.
          </p>
        </div>

        {/* Waterfall visualization */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {[
                { step: "1", label: "Research", agent: "Ife", color: "bg-cyan-500" },
                { step: "2", label: "Strategy", agent: "Dayo", color: "bg-amber-500" },
                { step: "3", label: "Write", agent: "Tunde", color: "bg-blue-500" },
                { step: "4", label: "Optimize", agent: "Chidi", color: "bg-green-500" },
                { step: "5", label: "Distribute", agent: "Amara", color: "bg-pink-500" },
                { step: "6", label: "Grow", agent: "Kemi", color: "bg-purple-500" },
              ].map((s) => (
                <div key={s.step} className="relative flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-full ${s.color} flex items-center justify-center text-white font-bold text-sm shadow-lg relative z-10`}>
                    {s.step}
                  </div>
                  <p className="mt-3 text-sm font-medium text-foreground">{s.label}</p>
                  <p className="text-xs text-muted-foreground">{s.agent}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">The Content Waterfall:</span>{" "}
              Research feeds strategy. Strategy feeds writing. Writing feeds SEO.
              SEO feeds social. Social feeds growth. Automatically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

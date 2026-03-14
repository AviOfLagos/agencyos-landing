export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-brand flex items-center justify-center">
              <span className="text-brand-foreground font-bold text-xs">A</span>
            </div>
            <span className="font-semibold text-sm text-foreground">AgencyOS</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#problem" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Why
            </a>
            <a href="#agents" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Agents
            </a>
            <a href="#features" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#waitlist" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Waitlist
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            Built with Claude Code
          </p>
        </div>
      </div>
    </footer>
  );
}

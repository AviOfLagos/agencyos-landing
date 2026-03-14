"use client";

import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center">
            <span className="text-brand-foreground font-bold text-sm">A</span>
          </div>
          <span className="font-semibold text-lg tracking-tight text-foreground">
            AgencyOS
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="/agents" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Agents
          </a>
          <a href="/features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center h-9 px-5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Join Waitlist
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-0.5 bg-foreground transition-transform ${open ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-foreground transition-transform ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a href="/agents" onClick={() => setOpen(false)} className="text-sm text-muted-foreground">Agents</a>
            <a href="/features" onClick={() => setOpen(false)} className="text-sm text-muted-foreground">Features</a>
            <a href="/how-it-works" onClick={() => setOpen(false)} className="text-sm text-muted-foreground">How It Works</a>
            <a href="/pricing" onClick={() => setOpen(false)} className="text-sm text-muted-foreground">Pricing</a>
            <a href="#waitlist" onClick={() => setOpen(false)} className="inline-flex items-center justify-center h-10 rounded-full bg-foreground text-background text-sm font-medium">
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

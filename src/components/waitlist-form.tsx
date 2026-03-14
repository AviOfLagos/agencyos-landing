"use client";

import { useState, type FormEvent } from "react";

interface WaitlistFormProps {
  variant?: "hero" | "section";
}

export function WaitlistForm({ variant = "section" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "You're on the list!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className={`flex flex-col items-center gap-2 ${variant === "hero" ? "" : ""}`}>
        <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand/10 text-brand text-sm font-medium">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          {message}
        </div>
        <p className="text-xs text-muted-foreground">We&apos;ll email you when early access opens.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
      <div className="relative flex-1 w-full">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="you@company.com"
          className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="h-12 px-6 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-90 disabled:opacity-50 transition-opacity whitespace-nowrap w-full sm:w-auto"
      >
        {status === "loading" ? (
          <span className="inline-flex items-center gap-2">
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Joining...
          </span>
        ) : (
          "Join Waitlist"
        )}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-500 w-full text-center sm:text-left">{message}</p>
      )}
    </form>
  );
}

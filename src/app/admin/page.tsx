"use client";

import { useState, useEffect } from "react";

interface WaitlistEntry {
  email: string;
  timestamp: string;
  position: number;
  emailSent?: boolean;
}

export default function AdminPage() {
  const [secret, setSecret] = useState("");
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");

  async function loadWaitlist() {
    if (!secret.trim()) {
      setError("Enter admin secret");
      return;
    }
    try {
      const res = await fetch(`/api/waitlist?admin=${encodeURIComponent(secret)}`);
      const data = await res.json();
      if (data.entries?.[0]?.emailSent !== undefined) {
        setEntries(data.entries);
        setCount(data.count);
        setLoaded(true);
        setError("");
      } else {
        setError("Invalid admin secret");
      }
    } catch {
      setError("Failed to load");
    }
  }

  return (
    <div className="min-h-screen bg-background p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-foreground mb-2">Waitlist Admin</h1>
      <p className="text-sm text-muted-foreground mb-6">View and manage waitlist signups.</p>

      {!loaded ? (
        <div className="flex gap-3">
          <input
            type="password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            placeholder="Admin secret"
            className="flex-1 h-10 px-3 rounded-lg border border-border bg-background text-sm"
            onKeyDown={(e) => e.key === "Enter" && loadWaitlist()}
          />
          <button
            onClick={loadWaitlist}
            className="h-10 px-5 rounded-lg bg-foreground text-background text-sm font-medium"
          >
            Load
          </button>
        </div>
      ) : (
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="px-4 py-2 rounded-lg bg-brand/10 text-brand font-bold text-lg">
              {count}
            </div>
            <span className="text-sm text-muted-foreground">total signups</span>
            <button
              onClick={loadWaitlist}
              className="ml-auto text-xs text-muted-foreground hover:text-foreground"
            >
              Refresh
            </button>
          </div>

          <div className="border border-border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50 text-left">
                  <th className="px-4 py-2.5 text-xs font-medium text-muted-foreground">#</th>
                  <th className="px-4 py-2.5 text-xs font-medium text-muted-foreground">Email</th>
                  <th className="px-4 py-2.5 text-xs font-medium text-muted-foreground">Signed Up</th>
                  <th className="px-4 py-2.5 text-xs font-medium text-muted-foreground">Email Sent</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((e) => (
                  <tr key={e.email} className="border-t border-border/40">
                    <td className="px-4 py-2.5 text-sm text-muted-foreground">{e.position}</td>
                    <td className="px-4 py-2.5 text-sm font-medium text-foreground">{e.email}</td>
                    <td className="px-4 py-2.5 text-xs text-muted-foreground">
                      {new Date(e.timestamp).toLocaleDateString()} {new Date(e.timestamp).toLocaleTimeString()}
                    </td>
                    <td className="px-4 py-2.5">
                      {e.emailSent ? (
                        <span className="text-xs text-brand">Sent</span>
                      ) : (
                        <span className="text-xs text-muted-foreground">Pending</span>
                      )}
                    </td>
                  </tr>
                ))}
                {entries.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-4 py-8 text-center text-sm text-muted-foreground">
                      No signups yet. Share the waitlist!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {error && <p className="mt-3 text-xs text-red-500">{error}</p>}
    </div>
  );
}

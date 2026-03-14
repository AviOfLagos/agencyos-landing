import { NextRequest, NextResponse } from "next/server";

interface WaitlistEntry {
  email: string;
  timestamp: string;
  position: number;
  emailSent: boolean;
}

// ---------------------------------------------------------------------------
// Storage: Vercel serverless is read-only (no process.cwd() writes).
// We use /tmp for ephemeral storage (survives warm starts) + Resend email
// as the persistent record. In dev, we use a local JSON file.
// ---------------------------------------------------------------------------

let memoryCache: WaitlistEntry[] | null = null;

function getStoragePath(): string {
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const path = require("path");
    return path.join(process.cwd(), "waitlist.json");
  }
  return "/tmp/waitlist.json";
}

function readWaitlist(): WaitlistEntry[] {
  if (memoryCache) return memoryCache;
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const fs = require("fs");
    const filePath = getStoragePath();
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      memoryCache = data;
      return data;
    }
  } catch {
    // Start fresh
  }
  return [];
}

function writeWaitlist(entries: WaitlistEntry[]) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const fs = require("fs");
    fs.writeFileSync(getStoragePath(), JSON.stringify(entries, null, 2));
  } catch {
    // /tmp write can fail in edge cases — OK, email is the real record
  }
  memoryCache = entries;
}

async function sendConfirmationEmail(
  email: string,
  position: number
): Promise<boolean> {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) return false;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env.RESEND_FROM_EMAIL || "AgencyOS <waitlist@nexprove.com>",
        to: [email],
        subject: `You're #${position} on the AgencyOS waitlist!`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px;">
            <div style="text-align: center; margin-bottom: 32px;">
              <div style="display: inline-block; width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #00C853, #00E676); text-align: center; line-height: 48px; color: white; font-weight: bold; font-size: 20px;">A</div>
            </div>
            <h1 style="font-size: 24px; font-weight: 700; color: #1a1a1a; text-align: center; margin-bottom: 16px;">
              Welcome to the waitlist!
            </h1>
            <p style="font-size: 16px; color: #555; line-height: 1.6; text-align: center; margin-bottom: 24px;">
              You are <strong style="color: #00C853;">#${position}</strong> on the AgencyOS early access list.
              We are building something special — a full AI marketing team that runs itself.
            </p>
            <div style="background: #f8f9fa; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
              <p style="font-size: 14px; color: #333; font-weight: 600; margin-bottom: 12px;">What you will get with early access:</p>
              <ul style="font-size: 14px; color: #555; line-height: 1.8; padding-left: 20px; margin: 0;">
                <li>7 specialized AI marketing agents</li>
                <li>Personal onboarding and setup</li>
                <li>20+ marketing skills pre-installed</li>
                <li>Content waterfall automation</li>
                <li>Marketing Hub dashboard</li>
                <li>Priority support from the team</li>
              </ul>
            </div>
            <div style="text-align: center; margin-bottom: 24px;">
              <a href="https://hub-landing-one.vercel.app" style="display: inline-block; padding: 12px 24px; background: #1a1a1a; color: white; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 500;">Learn more about AgencyOS</a>
            </div>
            <p style="font-size: 14px; color: #888; text-align: center; margin-bottom: 8px;">
              We will email you the moment early access opens.
            </p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
            <p style="font-size: 12px; color: #aaa; text-align: center;">
              Built with Claude Code - Powered by Anthropic - agencyos.dev
            </p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend error:", res.status, errText);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Email send failed:", err);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const entries = readWaitlist();

    if (entries.some((e) => e.email === trimmedEmail)) {
      return NextResponse.json(
        { message: "You are already on the waitlist!" },
        { status: 200 }
      );
    }

    const position = entries.length + 1;
    const emailSent = await sendConfirmationEmail(trimmedEmail, position);

    entries.push({
      email: trimmedEmail,
      timestamp: new Date().toISOString(),
      position,
      emailSent,
    });

    writeWaitlist(entries);

    return NextResponse.json({
      message: emailSent
        ? "You are on the list! Check your email for confirmation."
        : "You are on the list! We will be in touch soon.",
      position,
    });
  } catch (err) {
    console.error("Waitlist POST error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const admin = searchParams.get("admin");
    const entries = readWaitlist();

    if (admin && admin === process.env.ADMIN_SECRET) {
      return NextResponse.json({ count: entries.length, entries });
    }

    return NextResponse.json({
      count: entries.length,
      entries: entries.map((e) => ({
        email: e.email.replace(/(.{2}).*(@.*)/, "$1***$2"),
        timestamp: e.timestamp,
        position: e.position,
      })),
    });
  } catch {
    return NextResponse.json({ count: 0, entries: [] });
  }
}

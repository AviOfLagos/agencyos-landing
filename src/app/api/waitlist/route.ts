import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const WAITLIST_FILE = path.join(process.cwd(), "waitlist.json");

interface WaitlistEntry {
  email: string;
  timestamp: string;
  position: number;
  emailSent: boolean;
}

function readWaitlist(): WaitlistEntry[] {
  try {
    if (fs.existsSync(WAITLIST_FILE)) {
      return JSON.parse(fs.readFileSync(WAITLIST_FILE, "utf-8"));
    }
  } catch {
    // File doesn't exist or is corrupted
  }
  return [];
}

function writeWaitlist(entries: WaitlistEntry[]) {
  fs.writeFileSync(WAITLIST_FILE, JSON.stringify(entries, null, 2));
}

async function sendConfirmationEmail(email: string, position: number): Promise<boolean> {
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
        from: process.env.RESEND_FROM_EMAIL || "AgencyOS <waitlist@nexprove.com>",
        to: [email],
        subject: "You're on the AgencyOS waitlist!",
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px;">
            <div style="text-align: center; margin-bottom: 32px;">
              <div style="display: inline-block; width: 48px; height: 48px; border-radius: 12px; background: #00C853; text-align: center; line-height: 48px; color: white; font-weight: bold; font-size: 20px;">A</div>
            </div>
            <h1 style="font-size: 24px; font-weight: 700; color: #1a1a1a; text-align: center; margin-bottom: 16px;">
              Welcome to the waitlist!
            </h1>
            <p style="font-size: 16px; color: #555; line-height: 1.6; text-align: center; margin-bottom: 24px;">
              You're <strong>#${position}</strong> on the AgencyOS early access list.
              We're building something special — a full AI marketing team that runs itself.
            </p>
            <div style="background: #f8f9fa; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
              <p style="font-size: 14px; color: #333; font-weight: 600; margin-bottom: 12px;">What you'll get with early access:</p>
              <ul style="font-size: 14px; color: #555; line-height: 1.8; padding-left: 20px;">
                <li>7 specialized AI marketing agents</li>
                <li>Personal onboarding and setup</li>
                <li>20+ marketing skills pre-installed</li>
                <li>Content waterfall automation</li>
                <li>Marketing Hub dashboard</li>
              </ul>
            </div>
            <p style="font-size: 14px; color: #888; text-align: center; margin-bottom: 8px;">
              We'll email you the moment early access opens.
            </p>
            <p style="font-size: 12px; color: #aaa; text-align: center;">
              Built with Claude Code &middot; agencyos.dev
            </p>
          </div>
        `,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const entries = readWaitlist();

    if (entries.some((e) => e.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json({ message: "You're already on the waitlist!" }, { status: 200 });
    }

    const position = entries.length + 1;
    const emailSent = await sendConfirmationEmail(email.toLowerCase(), position);

    entries.push({
      email: email.toLowerCase(),
      timestamp: new Date().toISOString(),
      position,
      emailSent,
    });

    writeWaitlist(entries);

    return NextResponse.json({
      message: "You're on the list! We'll be in touch soon.",
      position,
    });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const admin = searchParams.get("admin");
  const entries = readWaitlist();

  if (admin === process.env.ADMIN_SECRET) {
    return NextResponse.json({
      count: entries.length,
      entries,
    });
  }

  return NextResponse.json({
    count: entries.length,
    entries: entries.map((e) => ({
      email: e.email.replace(/(.{2}).*(@.*)/, "$1***$2"),
      timestamp: e.timestamp,
      position: e.position,
    })),
  });
}

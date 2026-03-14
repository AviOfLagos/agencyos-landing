import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const WAITLIST_FILE = path.join(process.cwd(), "waitlist.json");

interface WaitlistEntry {
  email: string;
  timestamp: string;
  ip?: string;
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

    entries.push({
      email: email.toLowerCase(),
      timestamp: new Date().toISOString(),
    });

    writeWaitlist(entries);

    return NextResponse.json({
      message: "You're on the list! We'll be in touch soon.",
      position: entries.length,
    });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  const entries = readWaitlist();
  return NextResponse.json({
    count: entries.length,
    entries: entries.map((e) => ({
      email: e.email.replace(/(.{2}).*(@.*)/, "$1***$2"),
      timestamp: e.timestamp,
    })),
  });
}

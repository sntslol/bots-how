import { NextResponse } from "next/server";
import { ensureWaitlistTable, getDatabaseUrl, sqlClient } from "@/lib/db";
import { isOfferId, type OfferId } from "@/lib/site";

export const runtime = "nodejs";

type WaitlistBody = {
  email?: unknown;
  name?: unknown;
  offers?: unknown;
  offer?: unknown;
};

function parseEmail(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const email = value.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return null;
  }
  return email;
}

function parseName(value: unknown): string | null {
  if (value == null || value === "") return null;
  if (typeof value !== "string") return null;
  const name = value.trim().slice(0, 120);
  return name || null;
}

function parseOffers(body: WaitlistBody): OfferId[] {
  const raw = body.offers ?? body.offer;
  const list = Array.isArray(raw) ? raw : raw != null ? [raw] : [];
  const unique = new Set<OfferId>();
  for (const item of list) {
    if (isOfferId(item)) unique.add(item);
  }
  return [...unique];
}

export async function POST(request: Request) {
  const databaseUrl = getDatabaseUrl();
  if (!databaseUrl) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "The waitlist is not connected yet. DATABASE_URL is missing — no row was saved.",
      },
      { status: 503 },
    );
  }

  let body: WaitlistBody;
  try {
    body = (await request.json()) as WaitlistBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Send JSON with email and at least one offer." },
      { status: 400 },
    );
  }

  const email = parseEmail(body.email);
  const name = parseName(body.name);
  const selected = parseOffers(body);

  if (!email) {
    return NextResponse.json(
      { ok: false, error: "A valid email is required." },
      { status: 400 },
    );
  }
  if (selected.length === 0) {
    return NextResponse.json(
      {
        ok: false,
        error: "Pick at least one offer: workshop, course, or agency.",
      },
      { status: 400 },
    );
  }

  try {
    const sql = sqlClient();
    await ensureWaitlistTable(sql);

    let inserted = 0;
    for (const offer of selected) {
      const rows = await sql`
        INSERT INTO waitlist (email, name, offer)
        VALUES (${email}, ${name}, ${offer})
        ON CONFLICT (email, offer) DO NOTHING
        RETURNING id
      `;
      if (Array.isArray(rows) && rows.length > 0) inserted += 1;
    }

    return NextResponse.json({
      ok: true,
      inserted,
      already: inserted === 0,
    });
  } catch (error) {
    console.error("waitlist insert failed", error);
    return NextResponse.json(
      { ok: false, error: "Could not save the waitlist row. Try again." },
      { status: 500 },
    );
  }
}

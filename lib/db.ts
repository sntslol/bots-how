import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

let migrated = false;

export function getDatabaseUrl(): string | null {
  const value = process.env.DATABASE_URL?.trim();
  return value ? value : null;
}

export function sqlClient(): NeonQueryFunction<false, false> {
  const url = getDatabaseUrl();
  if (!url) {
    throw new Error("DATABASE_URL is not set");
  }
  return neon(url);
}

export async function ensureWaitlistTable(
  sql: NeonQueryFunction<false, false>,
): Promise<void> {
  if (migrated) return;
  await sql`
    CREATE TABLE IF NOT EXISTS waitlist (
      id BIGSERIAL PRIMARY KEY,
      email TEXT NOT NULL,
      name TEXT,
      offer TEXT NOT NULL CHECK (offer IN ('workshop', 'course', 'agency')),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      UNIQUE (email, offer)
    )
  `;
  migrated = true;
}

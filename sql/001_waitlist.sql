CREATE TABLE IF NOT EXISTS waitlist (
  id BIGSERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  offer TEXT NOT NULL CHECK (offer IN ('workshop', 'course', 'agency', 'membership', 'agency-call')),
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (email, offer)
);

ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS notes TEXT;

ALTER TABLE waitlist DROP CONSTRAINT IF EXISTS waitlist_offer_check;
ALTER TABLE waitlist
  ADD CONSTRAINT waitlist_offer_check
  CHECK (offer IN ('workshop', 'course', 'agency', 'membership', 'agency-call'));

export const site = {
  name: "bots.how",
  url: "https://www.bots.how",
  title: "Grok Bots that finish the work",
  description:
    "A Grok Bot agency. Paid workshops, a course, and custom Bots for teams that already have work to do.",
  community: "https://www.grokbot.community",
  discord: "https://discord.gg/7g4PBPM4Fs",
  cal: "https://cal.com/placeholder",
} as const;

export const offers = [
  {
    id: "workshop" as const,
    href: "/workshops",
    label: "Workshops",
    kicker: "Live",
    title: "Workshops",
    lede: "Bring one live workflow. Leave with a Bot that can run it on your stack, not a webinar recording.",
    points: [
      "Half-day and full-day rooms",
      "Your tools, your queue, your voice",
      "Small groups — not a webinar",
      "Recording and notes after",
    ],
    cta: "Waitlist for workshops",
  },
  {
    id: "course" as const,
    href: "/course",
    label: "Course",
    kicker: "Self-paced",
    title: "Course",
    lede: "Brief, review, and run Grok Bots the way you run a teammate. Built for PMs and operators.",
    points: [
      "Brief a Bot the way you brief a teammate",
      "Sign-in, routines, and handoffs",
      "Review work without sitting on it",
      "For PMs, operators, and GTM leads",
    ],
    cta: "Waitlist for the course",
  },
  {
    id: "agency" as const,
    href: "/agency",
    label: "Agency",
    kicker: "Custom",
    title: "Agency",
    lede: "We log into your tools, build the Bot, and hand it back working.",
    points: [
      "Discovery on your actual stack",
      "Build, train, and hand off",
      "Tune-ups after the first week",
      "One owner — not a ticket queue",
    ],
    cta: "Schedule a call",
  },
] as const;

export const membership = {
  id: "membership" as const,
  href: "/membership",
  label: "Membership",
  kicker: "$199/mo",
  title: "Membership",
  lede: "$199/month. One 1:1, member Discord, and member pricing on the rest.",
  points: [
    "One 1:1 each month, valued at $999",
    "Member webinars and first 3 days of workshop RSVP",
    "Member Discord: news, templates, weekly AMAs",
    "50% off course, 20% off extra 1:1s and workshops, 10% off agency",
  ],
  cta: "Waitlist for membership",
} as const;

export const homepageOffers = [...offers, membership] as const;

export const waitlistChoices = [...offers, membership] as const;

export type OfferId =
  | (typeof offers)[number]["id"]
  | "membership"
  | "agency-call";

export const offerIds: OfferId[] = [
  "workshop",
  "course",
  "agency",
  "membership",
  "agency-call",
];

export function isOfferId(value: unknown): value is OfferId {
  return typeof value === "string" && offerIds.includes(value as OfferId);
}

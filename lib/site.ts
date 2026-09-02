export const site = {
  name: "bots.how",
  url: "https://bots.how",
  title: "Grok Bots that finish the work",
  description:
    "A Grok Bot agency. Paid workshops, a course, and custom Bots for teams that already have work to do.",
  community: "https://grokbot.community",
} as const;

export const offers = [
  {
    id: "workshop" as const,
    href: "/workshops",
    label: "Workshops",
    kicker: "Live",
    title: "Paid workshops",
    lede: "Bring one workflow. Leave with a Bot that can run it.",
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
    title: "A paid course",
    lede: "How to brief, review, and run Grok Bots day to day.",
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
    title: "Agency services",
    lede: "We build Grok Bots for teams and hand them back ready to work.",
    points: [
      "Discovery on your actual stack",
      "Build, train, and hand off",
      "Tune-ups after the first week",
      "One owner — not a ticket queue",
    ],
    cta: "Waitlist for agency work",
  },
] as const;

export type OfferId = (typeof offers)[number]["id"];

export const offerIds: OfferId[] = offers.map((offer) => offer.id);

export function isOfferId(value: unknown): value is OfferId {
  return typeof value === "string" && offerIds.includes(value as OfferId);
}

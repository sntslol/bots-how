import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "@/components/waitlist-form";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "$199/month. One 1:1 valued at $999, member webinars, first dibs on workshop seats, and a private Discord. Waitlist only, no checkout.",
  alternates: { canonical: "/membership" },
};

const included = [
  {
    title: "One 1:1 each month",
    body: "A session with us, valued at $999. Extra 1:1s are 20% off.",
  },
  {
    title: "Member webinars",
    body: "Exclusive sessions for members. Not a public recording.",
  },
  {
    title: "First dibs on workshops",
    body: "Limited seats: you get the first 3 days of RSVP before the public.",
  },
  {
    title: "Member Discord",
    body: "Daily Grok Bot news, member templates and guides, first access to ours, weekly AMAs.",
  },
];

const pricing = [
  "50% off the course, plus first access before the public",
  "20% off extra 1:1 sessions",
  "20% off workshops",
  "10% off any agency work",
];

export default function MembershipPage() {
  return (
    <article className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-content">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-sunset">
          Membership \u00b7 $199/month
        </p>
        <h1 className="mt-4 max-w-[16ch] font-display text-[2.75rem] leading-[1.05] tracking-[-0.035em] text-jet sm:text-[3.5rem]">
          $199 a month
        </h1>
        <p className="mt-5 max-w-[38rem] text-[17px] leading-8 text-fog">
          One 1:1 (valued at $999), member webinars, first dibs on limited
          workshop seats, and a private Discord. Course, extra sessions,
          workshops, and agency work cost less while you are in.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="#waitlist"
            className={cn(buttonVariants({ variant: "jet", size: "lg" }))}
          >
            Join the waitlist
          </Link>
          <a
            href={site.discord}
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Open Discord
          </a>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2">
          {included.map((item) => (
            <li
              key={item.title}
              className="rounded-[1.5rem] bg-ivory px-5 py-5"
            >
              <p className="font-display text-[17px] text-jet">{item.title}</p>
              <p className="mt-2 text-[15px] leading-6 text-fog">{item.body}</p>
            </li>
          ))}
        </ul>

        <h2 className="mt-16 font-display text-[1.75rem] tracking-tight text-jet sm:text-[2rem]">
          Member pricing
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {pricing.map((point) => (
            <li
              key={point}
              className="rounded-[1.5rem] bg-ivory px-5 py-5 text-[15px] leading-6 text-jet"
            >
              {point}
            </li>
          ))}
        </ul>

        <div
          id="waitlist"
          className="mx-auto mt-16 w-full max-w-[40rem] rounded-[2rem] bg-ivory p-6 sm:p-8"
        >
          <h2 className="font-display text-[1.75rem] tracking-tight text-jet">
            Join the membership list
          </h2>
          <p className="mt-2 text-[15px] leading-7 text-fog">
            $199/month when it opens. No checkout on this site. We email when
            membership is ready.
          </p>
          <div className="mt-6">
            <WaitlistForm defaultOffers={["membership"]} />
          </div>
        </div>
      </div>
    </article>
  );
}

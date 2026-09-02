import type { Metadata } from "next";
import { WaitlistForm } from "@/components/waitlist-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Member pricing on workshops and the course, plus exclusive Discord.",
  alternates: { canonical: "/membership" },
};

export default function MembershipPage() {
  return (
    <article className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-content">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-sunset">
          Membership
        </p>
        <h1 className="mt-4 max-w-[18ch] font-display text-[2.75rem] leading-[1.05] tracking-[-0.035em] text-jet sm:text-[3.5rem]">
          Cheaper seats, a private Discord
        </h1>
        <p className="mt-5 max-w-[38rem] text-[17px] leading-8 text-fog">
          Membership is the ongoing way in. Discounted workshops and the course,
          plus an exclusive Discord for people who run Grok Bots.
        </p>
        <a
          href={site.discord}
          rel="noreferrer"
          className="mt-8 inline-flex rounded-full bg-jet px-6 py-3 text-[15px] font-medium text-white hover:bg-jet/90"
        >
          Open Discord
        </a>

        <ul className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            "Member pricing on live workshops",
            "Member pricing on the course",
            "Exclusive Discord for operators",
          ].map((point) => (
            <li
              key={point}
              className="rounded-[1.5rem] bg-ivory px-5 py-5 text-[15px] leading-6 text-jet"
            >
              {point}
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-16 w-full max-w-[40rem] rounded-[2rem] bg-ivory p-6 sm:p-8">
          <h2 className="font-display text-[1.75rem] tracking-tight text-jet">
            Join the membership list
          </h2>
          <p className="mt-2 text-[15px] leading-7 text-fog">
            No checkout on this site. We email when membership opens.
          </p>
          <div className="mt-6">
            <WaitlistForm defaultOffers={["membership"]} />
          </div>
        </div>
      </div>
    </article>
  );
}

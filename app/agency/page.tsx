import type { Metadata } from "next";
import { ScheduleCallForm } from "@/components/schedule-call-form";
import { WaitlistForm } from "@/components/waitlist-form";
import { offers } from "@/lib/site";

const offer = offers[2];

export const metadata: Metadata = {
  title: "Agency",
  description: offer.lede,
  alternates: { canonical: "/agency" },
};

export default function AgencyPage() {
  return (
    <article className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-content">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-sunset">
          Agency
        </p>
        <h1 className="mt-4 max-w-[20ch] font-display text-[2.75rem] leading-[1.05] tracking-[-0.035em] text-jet sm:text-[3.5rem]">
          Custom Grok Bots for teams
        </h1>
        <p className="mt-5 max-w-[38rem] text-[17px] leading-8 text-fog">
          We log into the tools you already run, build the Bot on the actual
          queue, and hand it back working. One owner. Not a ticket mill.
        </p>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2">
          {offer.points.map((point) => (
            <li
              key={point}
              className="rounded-[1.5rem] bg-ivory px-5 py-5 text-[15px] leading-6 text-jet"
            >
              {point}
            </li>
          ))}
        </ul>

        <div
          id="schedule"
          className="mx-auto mt-16 w-full max-w-[40rem] rounded-[2rem] bg-ivory p-6 sm:p-8"
        >
          <h2 className="font-display text-[1.75rem] tracking-tight text-jet">
            Schedule a call
          </h2>
          <p className="mt-2 text-[15px] leading-7 text-fog">
            Opens a new window to pick a time. No checkout on this page.
          </p>
          <div className="mt-6">
            <ScheduleCallForm />
          </div>
        </div>

        <div className="mx-auto mt-8 w-full max-w-[40rem] rounded-[2rem] border border-dove bg-white p-6 sm:p-8">
          <h2 className="font-display text-[1.5rem] tracking-tight text-jet">
            Or join the agency waitlist
          </h2>
          <p className="mt-2 text-[15px] leading-7 text-fog">
            If a call is too soon, get on the list. Same desk either way.
          </p>
          <div className="mt-6">
            <WaitlistForm defaultOffers={["agency"]} />
          </div>
        </div>
      </div>
    </article>
  );
}

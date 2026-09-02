import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "@/components/waitlist-form";
import { buttonVariants } from "@/components/ui/button";
import { offers } from "@/lib/site";
import { cn } from "@/lib/utils";

const offer = offers[0];

export const metadata: Metadata = {
  title: "Workshops",
  description: offer.lede,
  alternates: { canonical: "/workshops" },
};

export default function WorkshopsPage() {
  return (
    <article className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-content">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-sunset">
          Workshops
        </p>
        <h1 className="mt-4 max-w-[20ch] font-display text-[2.75rem] leading-[1.05] tracking-[-0.035em] text-jet sm:text-[3.5rem]">
          Live rooms on your stack
        </h1>
        <p className="mt-5 max-w-[38rem] text-[17px] leading-8 text-fog">
          Bring one workflow you already run. We sit in the tools with you and
          leave a Bot that can run the next pass. Not a webinar. Not a slide
          deck you have to finish at home.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/waitlist?offer=workshop"
            className={cn(buttonVariants({ variant: "jet", size: "lg" }))}
          >
            Waitlist for workshops
          </Link>
          <Link
            href="/membership"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Member pricing
          </Link>
        </div>

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

        <div className="mx-auto mt-16 w-full max-w-[40rem] rounded-[2rem] bg-ivory p-6 sm:p-8">
          <h2 className="font-display text-[1.75rem] tracking-tight text-jet">
            Save a seat
          </h2>
          <p className="mt-2 text-[15px] leading-7 text-fog">
            We email when the next room opens. No checkout on this page.
          </p>
          <div className="mt-6">
            <WaitlistForm defaultOffers={["workshop"]} />
          </div>
        </div>
      </div>
    </article>
  );
}

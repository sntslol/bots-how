import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "@/components/waitlist-form";
import { buttonVariants } from "@/components/ui/button";
import { offers } from "@/lib/site";
import { cn } from "@/lib/utils";

const offer = offers[1];

export const metadata: Metadata = {
  title: "Course",
  description: offer.lede,
  alternates: { canonical: "/course" },
};

export default function CoursePage() {
  return (
    <article className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-content">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-sunset">
          Course
        </p>
        <h1 className="mt-4 max-w-[22ch] font-display text-[2.75rem] leading-[1.05] tracking-[-0.035em] text-jet sm:text-[3.5rem]">
          Brief and review Bots like a teammate
        </h1>
        <p className="mt-5 max-w-[38rem] text-[17px] leading-8 text-fog">
          For PMs and operators who will own the Bot after kickoff. Learn to
          brief, review, and run Grok Bots without sitting on every click.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/waitlist?offer=course"
            className={cn(buttonVariants({ variant: "jet", size: "lg" }))}
          >
            Waitlist for the course
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
            Get in line
          </h2>
          <p className="mt-2 text-[15px] leading-7 text-fog">
            Self-paced. We email when the next cohort or module drop is ready.
          </p>
          <div className="mt-6">
            <WaitlistForm defaultOffers={["course"]} />
          </div>
        </div>
      </div>
    </article>
  );
}

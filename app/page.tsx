import Link from "next/link";
import { FeatureGrid } from "@/components/feature-grid";
import { GrokMark } from "@/components/grok-mark";
import { HeroMock } from "@/components/hero-mock";
import { OfferCards } from "@/components/offer-cards";
import { WaitlistForm } from "@/components/waitlist-form";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <section className="px-5 pb-10 pt-16 sm:px-8 sm:pt-24">
        <div className="mx-auto flex w-full max-w-content flex-col items-center text-center">
          <Link
            href="/waitlist"
            className="rise inline-flex items-center gap-2 rounded-full bg-ivory px-3 py-1.5 text-[13px] text-jet"
          >
            <span className="font-mono text-[11px] font-medium tracking-[0.08em] text-sunset">
              EARLY BETA
            </span>
            <span className="text-fog">·</span>
            <span>Grok Bot agency · Join the waitlist</span>
            <span aria-hidden="true" className="text-fog">
              →
            </span>
          </Link>

          <h1 className="rise rise-delay-1 mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-display text-[2.75rem] leading-[1.02] tracking-[-0.04em] text-jet sm:text-[4.25rem]">
            <span>Meet</span>
            <GrokMark className="size-[0.92em]" title="Grok Bot mark" />
            <span>Grok Bot</span>
          </h1>

          <p className="rise rise-delay-2 mt-6 max-w-[36rem] text-[17px] leading-8 text-fog sm:text-[18px]">
            An agency that builds Grok Bots for people who have real work.
            Workshops, a course, and custom Bots for teams.
          </p>

          <div className="rise rise-delay-3 mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/waitlist"
              className={cn(buttonVariants({ variant: "jet", size: "lg" }), "w-full sm:w-auto")}
            >
              <GrokMark className="size-5 brightness-0 invert" />
              Join the waitlist
            </Link>
            <Link
              href="#offers"
              className={cn(
                buttonVariants({ variant: "ivory", size: "lg" }),
                "w-full sm:w-auto",
              )}
            >
              See the offers
            </Link>
          </div>
        </div>

        <div className="rise rise-delay-4 mx-auto mt-16 w-full max-w-content">
          <HeroMock />
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto w-full max-w-content">
          <div className="mx-auto max-w-[40rem] text-center">
            <h2 className="font-display text-[2.25rem] leading-[1.05] tracking-[-0.03em] text-jet sm:text-[3rem]">
              Work with people who run Bots
            </h2>
            <p className="mt-5 text-[17px] leading-8 text-fog">
              We sit with the work first. Then we stand up Grok Bots that sign
              in, use your tools, and come back with finished output — not a
              chat log you still have to finish.
            </p>
          </div>
          <div className="mt-14">
            <FeatureGrid />
          </div>
        </div>
      </section>

      <section id="offers" className="px-5 py-8 sm:px-8">
        <div className="mx-auto w-full max-w-content">
          <div className="text-center">
            <h2 className="font-display text-[2.25rem] leading-[1.05] tracking-[-0.03em] text-jet sm:text-[3rem]">
              Offers
            </h2>
            <Link
              href="/waitlist"
              className={cn(
                buttonVariants({ variant: "ivory", size: "sm" }),
                "mt-5",
              )}
            >
              Join the waitlist
            </Link>
          </div>
          <div className="mt-12">
            <OfferCards />
          </div>
          <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-full bg-ivory px-5 py-4 sm:flex-row sm:items-center sm:px-6">
            <p className="text-[15px] leading-6 text-jet">
              Free presentations live at grokbot.community.
            </p>
            <a
              href={site.community}
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
              rel="noreferrer"
            >
              Join the community
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid w-full max-w-content gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-[2.25rem] leading-[1.05] tracking-[-0.03em] text-jet sm:text-[3rem]">
              Start where the work is
            </h2>
            <p className="mt-5 max-w-md text-[17px] leading-8 text-fog">
              Three ways in. Same desk. Pick the one that gets a Bot onto your
              queue.
            </p>
          </div>
          <div className="space-y-3">
            {[
              {
                href: "/workshops",
                title: "Workshops",
                meta: "Bring one workflow. Leave with a Bot that can run it on your stack.",
              },
              {
                href: "/course",
                title: "Course",
                meta: "PMs and operators learn to brief, review, and run Bots without sitting on every click.",
              },
              {
                href: "/agency",
                title: "Agency",
                meta: "We build custom Grok Bots on your tools and hand them back working.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-[1.5rem] bg-ivory px-5 py-5 transition-colors hover:bg-[#f2f0ec]"
              >
                <span>
                  <span className="block font-display text-[17px] text-jet">
                    {item.title}
                  </span>
                  <span className="block text-sm text-fog">{item.meta}</span>
                </span>
                <span aria-hidden="true" className="text-fog">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-10 sm:px-8">
        <div className="mx-auto max-w-content rounded-[2rem] bg-ivory px-6 py-16 text-center sm:px-10">
          <h2 className="font-display text-[2.25rem] leading-[1.05] tracking-[-0.03em] text-jet sm:text-[3rem]">
            How teams brief us
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[17px] leading-8 text-fog">
            Send the queue, the tool list, and the outcome you want on Friday.
            We reply with which offer fits — workshop, course, or a build.
          </p>
          <Link
            href="/agency#schedule"
            className={cn(buttonVariants({ variant: "outline" }), "mt-8 bg-white")}
          >
            Schedule a call
          </Link>
        </div>
      </section>

      <section id="waitlist" className="px-5 py-24 sm:px-8">
        <div className="mx-auto w-full max-w-[40rem]">
          <h2 className="text-center font-display text-[2.25rem] leading-[1.05] tracking-[-0.03em] text-jet sm:text-[3rem]">
            Get on the list
          </h2>
          <p className="mt-5 text-center text-[17px] leading-8 text-fog">
            No checkout on this site. Tell us which offer you care about. We
            email when a seat opens.
          </p>
          <div className="mt-10 rounded-[2rem] bg-ivory p-6 sm:p-8">
            <WaitlistForm />
          </div>
        </div>
      </section>
    </>
  );
}

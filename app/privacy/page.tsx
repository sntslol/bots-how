import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What bots.how stores when you join the waitlist.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-[40rem]">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-sunset">
          Privacy
        </p>
        <h1 className="mt-4 font-display text-[2.75rem] leading-[1.05] tracking-[-0.035em] text-jet sm:text-[3.5rem]">
          What we store
        </h1>
        <div className="mt-8 space-y-5 text-[17px] leading-8 text-fog">
          <p>
            Waitlist and call requests store email, optional name, the offer you
            marked, and optional notes. We use that to email when a seat or a
            call opens.
          </p>
          <p>
            There is no checkout on this site. We do not sell this list. Discord
            is a separate service with its own terms.
          </p>
        </div>
      </div>
    </article>
  );
}

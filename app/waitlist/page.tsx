import type { Metadata } from "next";
import { WaitlistForm } from "@/components/waitlist-form";
import { isOfferId, type OfferId } from "@/lib/site";

export const metadata: Metadata = {
  title: "Waitlist",
  description:
    "Join the bots.how waitlist for workshops, the course, or agency work. No checkout.",
  alternates: { canonical: "/waitlist" },
};

type WaitlistPageProps = {
  searchParams: Promise<{ offer?: string | string[] }>;
};

function parseOffers(value: string | string[] | undefined): OfferId[] {
  const raw = Array.isArray(value) ? value : value ? [value] : [];
  const parsed = raw
    .flatMap((item) => item.split(","))
    .map((item) => item.trim())
    .filter(isOfferId);
  return parsed.length ? parsed : ["workshop", "course", "agency"];
}

export default async function WaitlistPage({ searchParams }: WaitlistPageProps) {
  const params = await searchParams;
  const defaultOffers = parseOffers(params.offer);

  return (
    <article className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-[40rem]">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-sunset">
          Waitlist
        </p>
        <h1 className="mt-4 font-display text-[2.75rem] leading-[1.05] tracking-[-0.035em] text-jet sm:text-[3.5rem]">
          Get on the list
        </h1>
        <p className="mt-5 text-[17px] leading-8 text-fog">
          Email required. Name optional. Mark the offers you care about. We
          email when a seat or kickoff date opens — we do not invent a
          confirmation.
        </p>
        <div className="mt-10 rounded-[2rem] bg-ivory p-6 sm:p-8">
          <WaitlistForm defaultOffers={defaultOffers} />
        </div>
      </div>
    </article>
  );
}

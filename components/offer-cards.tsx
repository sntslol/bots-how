import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { offers } from "@/lib/site";
import { cn } from "@/lib/utils";

export function OfferCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {offers.map((offer) => (
        <article
          key={offer.id}
          className="flex flex-col rounded-[2rem] bg-ivory p-7 sm:p-8"
        >
          <div className="flex items-center justify-between gap-3">
            <p className="font-display text-[17px] text-jet">{offer.label}</p>
            <span className="rounded-full bg-white px-3 py-1 font-mono text-[11px] text-fog">
              {offer.kicker}
            </span>
          </div>
          <h3 className="mt-6 font-display text-[1.75rem] leading-none tracking-tight text-jet">
            {offer.title}
          </h3>
          <p className="mt-3 text-[15px] leading-7 text-fog">{offer.lede}</p>
          <Link
            href={`/waitlist?offer=${offer.id}`}
            className={cn(
              buttonVariants({
                variant: offer.id === "agency" ? "ivory" : "jet",
              }),
              "mt-7 w-full bg-white hover:bg-white/80",
              offer.id !== "agency" && "bg-jet text-white hover:bg-jet/90",
            )}
          >
            {offer.cta}
          </Link>
          <p className="mt-7 text-sm font-medium text-jet">Includes:</p>
          <ul className="mt-3 space-y-2.5">
            {offer.points.map((point) => (
              <li key={point} className="flex gap-2.5 text-[15px] leading-6 text-jet">
                <CheckIcon />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <Link
            href={offer.href}
            className="mt-8 text-sm text-fog transition-colors hover:text-jet"
          >
            Read the {offer.label.toLowerCase()} page →
          </Link>
        </article>
      ))}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="mt-1 size-4 shrink-0 text-jet"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M6.4 11.3 2.8 7.7l1.1-1.1 2.5 2.5 5.7-5.7 1.1 1.1z"
      />
    </svg>
  );
}

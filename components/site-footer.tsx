import Link from "next/link";
import { GrokMark } from "@/components/grok-mark";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Offers",
    links: [
      { href: "/workshops", label: "Workshops" },
      { href: "/course", label: "Course" },
      { href: "/agency", label: "Agency" },
      { href: "/waitlist", label: "Waitlist" },
    ],
  },
  {
    title: "Site",
    links: [
      { href: "/", label: "Home" },
      { href: "/privacy", label: "Privacy" },
      { href: "/#offers", label: "Compare offers" },
    ],
  },
  {
    title: "Around this",
    links: [
      { href: site.community, label: "grokbot.community", external: true },
      { href: "https://x.ai/bot", label: "x.ai/bot", external: true },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-dove/80 bg-white">
      <div className="mx-auto grid w-full max-w-content gap-12 px-5 py-16 sm:px-8 md:grid-cols-[minmax(0,16rem)_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5">
            <GrokMark className="size-7" title="Grok Bot" />
            <span className="font-display text-[15px] font-medium tracking-tight text-jet">
              bots.how
            </span>
          </Link>
          <p className="mt-4 max-w-56 text-sm leading-6 text-fog">
            A Grok Bot agency. Workshops, a course, and custom Bots.
          </p>
          <p className="mt-6 text-sm text-fog">© 2026 bots.how</p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="font-display text-sm font-medium text-jet">
                {column.title}
              </p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        className="text-sm text-fog transition-colors hover:text-jet"
                        rel={
                          link.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-fog transition-colors hover:text-jet"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { GrokMark } from "@/components/grok-mark";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/workshops", label: "Workshops" },
  { href: "/course", label: "Course" },
  { href: "/agency", label: "Agency" },
  { href: "/membership", label: "Membership" },
  { href: "/waitlist", label: "Waitlist" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] w-full max-w-content items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[15px] font-medium text-jet"
        >
          <GrokMark className="size-7" title="Grok Bot" />
          <span className="font-display tracking-tight">bots.how</span>
        </Link>

        <nav className="hidden items-center gap-7 text-[14px] text-jet md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-fog"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/agency#schedule"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            Talk to us
          </Link>
          <Link
            href="/waitlist"
            className={cn(buttonVariants({ variant: "jet", size: "sm" }))}
          >
            Join waitlist
          </Link>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full border border-dove md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-px w-4 bg-jet transition-transform",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-4 bg-jet transition-transform",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-dove/70 bg-white px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2.5 text-[15px] text-jet hover:bg-ivory"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/waitlist"
              className={cn(buttonVariants({ variant: "jet" }), "mt-2 w-full")}
              onClick={() => setOpen(false)}
            >
              Join waitlist
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center px-5 py-32 text-center">
      <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-fog">
        404
      </p>
      <h1 className="mt-4 font-display text-[2.5rem] tracking-tight text-jet">
        That page is not here
      </h1>
      <p className="mt-4 max-w-md text-[16px] leading-7 text-fog">
        The offers are workshops, the course, and agency work.
      </p>
      <Link href="/" className={cn(buttonVariants({ variant: "jet" }), "mt-8")}>
        Back home
      </Link>
    </div>
  );
}

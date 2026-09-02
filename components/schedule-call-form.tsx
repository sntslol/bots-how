import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ScheduleCallForm() {
  return (
    <a
      href={site.cal}
      target="_blank"
      rel="noreferrer"
      className={cn(buttonVariants({ variant: "jet", size: "lg" }), "w-full sm:w-auto")}
    >
      Schedule a call
    </a>
  );
}

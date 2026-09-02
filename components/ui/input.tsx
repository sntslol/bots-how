import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-full border border-dove bg-white px-5 text-[15px] text-jet placeholder:text-fog transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jet/15",
        className,
      )}
      {...props}
    />
  );
}

export { Input };

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jet/20 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        jet: "bg-jet text-white hover:bg-jet/90",
        ivory: "bg-ivory text-jet hover:bg-[#f2f0ec]",
        outline: "border border-dove bg-white text-jet hover:bg-ivory",
        ghost: "text-jet hover:bg-ivory",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-12 px-6",
        sm: "h-9 px-4 text-sm",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "jet",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

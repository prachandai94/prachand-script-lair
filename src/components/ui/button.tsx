import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-samurai-red disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        samurai: "bg-samurai-red text-white rounded-lg px-8 py-3 font-semibold shadow-red hover:shadow-red-strong hover:bg-samurai-red-dark transform hover:scale-105 transition-all duration-300",
        outline: "border-2 border-samurai-red text-samurai-red rounded-lg px-8 py-3 font-semibold hover:bg-samurai-red hover:text-white hover:shadow-red transition-all duration-300",
        ghost: "text-text-secondary hover:text-samurai-red transition-colors duration-300",
        paper: "paper text-text-primary hover:text-samurai-red border border-paper-border rounded-lg px-6 py-3 paper-hover transition-all duration-300",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-10 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "samurai",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

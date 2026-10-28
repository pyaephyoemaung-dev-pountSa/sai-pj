import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva  } from "class-variance-authority"
import type {VariantProps} from "class-variance-authority";
import { cn } from "cn"

const badgeVariants = cva(
  "y:group/badge y:inline-flex y:h-5 y:w-fit y:shrink-0 y:items-center y:justify-center y:gap-1 y:overflow-hidden y:rounded-4xl y:border y:border-transparent y:px-2 y:py-0.5 y:text-xs y:font-medium y:whitespace-nowrap y:transition-all y:focus-visible:border-ring y:focus-visible:ring-[3px] y:focus-visible:ring-ring/50 y:has-data-[icon=inline-end]:pr-1.5 y:has-data-[icon=inline-start]:pl-1.5 y:aria-invalid:border-destructive y:aria-invalid:ring-destructive/20 y:dark:aria-invalid:ring-destructive/40 y:[&>svg]:pointer-events-none y:[&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "y:bg-primary y:text-primary-foreground y:[a]:hover:bg-primary/80",
        secondary:
          "y:bg-secondary y:text-secondary-foreground y:[a]:hover:bg-secondary/80",
        destructive:
          "y:bg-destructive/10 y:text-destructive y:focus-visible:ring-destructive/20 y:dark:bg-destructive/20 y:dark:focus-visible:ring-destructive/40 y:[a]:hover:bg-destructive/20",
        outline:
          "y:border-border y:text-foreground y:[a]:hover:bg-muted y:[a]:hover:text-muted-foreground",
        ghost:
          "y:hover:bg-muted y:hover:text-muted-foreground y:dark:hover:bg-muted/50",
        link: "y:text-primary y:underline-offset-4 y:hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }

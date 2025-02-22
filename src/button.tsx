import { Slot, Slottable } from '@radix-ui/react-slot'
import { cn } from '@voluspalabs/lib/utils/cn'
import { type VariantProps, cva } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { Spinner } from './spinner'

const buttonVariants = cva(
  // biome-ignore lint/nursery/useSortedClasses: Waiting for fix by biome, for tw class sorting.
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-actions-primary hover:bg-primary/90',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
        outline:
          'border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isPending?: boolean
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  isPending = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {isPending ? (
        <Slottable>
          <Spinner
            loading
            size="sm"
            className="absolute inset-0 z-10 m-auto"
            aria-hidden="true"
          />
          <span className="opacity-0">
            <Slottable>{props.children}</Slottable>
          </span>
        </Slottable>
      ) : (
        <Slottable>{props.children}</Slottable>
      )}
    </Comp>
  )
}

export { Button, buttonVariants, type ButtonProps }

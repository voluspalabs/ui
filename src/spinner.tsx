import { cn } from '@voluspalabs/lib/utils/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

const spinnerVariants = cva('relative block opacity-60', {
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-6',
      lg: 'size-8',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

export interface SpinnerProps
  extends ComponentProps<'span'>,
    VariantProps<typeof spinnerVariants> {
  loading?: boolean
  inverted?: boolean
}

const Spinner = ({
  className,
  size,
  loading = true,
  inverted = false,
  ...props
}: SpinnerProps) => {
  const leaves = EIGHT_LEAVES

  if (!loading) {
    return null
  }

  return (
    <span
      aria-busy="true"
      aria-live="polite"
      className={cn(spinnerVariants({ size, className }))}
      data-slot="spinner"
      {...props}
    >
      {leaves.map((leaf, index) => {
        return (
          <span
            className="absolute top-0 left-1/2 h-full w-[12.5%] animate-spinner-leaf-fade"
            key={leaf.id}
            style={{
              transform: `rotate(${index * 45}deg)`,
              animationDelay: `${-(7 - index) * 100}ms`,
            }}
          >
            <span
              className={cn(
                'block h-[30%] w-full rounded-full',
                inverted
                  ? 'bg-background dark:bg-foreground'
                  : 'bg-foreground dark:bg-background',
              )}
            />
          </span>
        )
      })}
      <span className="sr-only">Loading</span>
    </span>
  )
}

Spinner.displayName = 'Spinner'

export { Spinner, spinnerVariants }

// Internal constants
const EIGHT_LEAVES = Array.from({ length: 8 }, (_, i) => ({ id: `leaf-${i}` }))

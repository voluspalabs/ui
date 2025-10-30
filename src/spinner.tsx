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
  /**
   * Optional color context to ensure spinner is visible on various backgrounds.
   * When omitted, spinner inherits current text color from parent.
   */
  on?:
    | 'surface'
    | 'primary'
    | 'secondary'
    | 'muted'
    | 'destructive'
    | 'inverted'
}

const Spinner = ({
  className,
  size,
  loading = true,
  inverted = false,
  on,
  ...props
}: SpinnerProps) => {
  const leaves = EIGHT_LEAVES

  if (!loading) {
    return null
  }

  // Map contextual backgrounds to appropriate text colors (spinner uses bg-current)
  const onColorClass =
    on === 'surface'
      ? 'text-foreground'
      : on === 'primary'
        ? 'text-primary-foreground'
        : on === 'secondary'
          ? 'text-secondary-foreground'
          : on === 'muted'
            ? 'text-muted-foreground'
            : on === 'destructive'
              ? 'text-white'
              : on === 'inverted'
                ? 'text-background dark:text-foreground'
                : undefined

  // Back-compat: if `inverted` is set and no explicit `on`, invert colors
  const invertedFallback =
    !on && inverted ? 'text-background dark:text-foreground' : undefined

  return (
    <span
      aria-busy="true"
      aria-live="polite"
      className={cn(
        spinnerVariants({ size, className }),
        onColorClass,
        invertedFallback,
      )}
      data-slot="spinner"
      {...props}
      // role="status"
    >
      {leaves.map((leaf, index) => (
        <span
          className="absolute top-0 left-1/2 h-full w-[12.5%] animate-spinner-leaf-fade"
          data-slot="spinner-leaf"
          key={leaf.id}
          style={{
            transform: `rotate(${index * 45}deg)`,
            animationDelay: `${-(7 - index) * 100}ms`,
          }}
        >
          <span
            className={cn('block h-[30%] w-full rounded-full bg-current')}
            data-slot="spinner-leaf-bar"
          />
        </span>
      ))}
      <span className="sr-only">Loading</span>
    </span>
  )
}

Spinner.displayName = 'Spinner'

export { Spinner, spinnerVariants }

// Internal constants
const EIGHT_LEAVES = Array.from({ length: 8 }, (_, i) => ({ id: `leaf-${i}` }))

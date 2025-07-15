import { cn } from '@voluspalabs/lib/utils/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import { type ComponentProps, type HTMLAttributes, useMemo } from 'react'

const spinnerVariants = cva('relative block opacity-65', {
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
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spinnerVariants> {
  loading?: boolean
  asChild?: boolean
  inverted?: boolean
}

const Spinner = ({
  className,
  size,
  loading = true,
  inverted = false,
  asChild = false,
  ...props
}: ComponentProps<'span'> &
  VariantProps<typeof spinnerVariants> & {
    asChild?: boolean
    loading?: boolean
    inverted?: boolean
  }) => {
  const Comp = asChild ? Slot.Root : 'span'

  const array8 = Array.from({ length: 8 })
  const spinnerLineKeys = useMemo(
    () => array8.map(() => crypto.randomUUID()),
    [],
  )

  if (!loading) {
    return null
  }

  return (
    <Comp
      className={cn(spinnerVariants({ size, className }))}
      data-slot="spinner"
      {...props}
    >
      {array8.map((_, index) => (
        <span
          className="absolute top-0 left-1/2 h-full w-[12.5%] animate-spinner-leaf-fade"
          key={spinnerLineKeys[index]}
          style={{
            transform: `rotate(${index * 45}deg)`,
            animationDelay: `${-(7 - index) * 100}ms`,
          }}
        >
          <span
            className={cn(
              'block h-[30%] w-full rounded-full',
              inverted ? 'bg-foreground' : 'bg-white',
            )}
          />
        </span>
      ))}
    </Comp>
  )
}

Spinner.displayName = 'Spinner'

export { Spinner, spinnerVariants }

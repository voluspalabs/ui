import { cn } from '@voluspalabs/lib/utils/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'

// TODO: Dont use forwardRef anymore and migrate to Tailwind CSS V4.
export const kbdVariants = cva(
  'select-none rounded border px-1.5 py-px font-mono font-mono font-normal text-[0.7rem] shadow-xs disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-accent text-accent-foreground',
        outline: 'bg-background text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface KbdProps
  extends ComponentPropsWithoutRef<'kbd'>,
    VariantProps<typeof kbdVariants> {
  /**
   * The title of the `abbr` element inside the `kbd` element.
   * @default undefined
   * @type string | undefined
   * @example title="Command"
   */
  abbrTitle?: string
}

const Kbd = forwardRef<HTMLUnknownElement, KbdProps>(
  ({ abbrTitle, children, className, variant, ...props }, ref) => {
    return (
      <kbd
        className={cn(kbdVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {abbrTitle ? (
          <abbr title={abbrTitle} className="no-underline">
            {children}
          </abbr>
        ) : (
          children
        )}
      </kbd>
    )
  },
)
Kbd.displayName = 'Kbd'

export { Kbd }

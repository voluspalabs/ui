import { cn } from '@voluspalabs/lib/utils/cn'
import { type InputHTMLAttributes, type ReactNode, forwardRef } from 'react'

// TODO: Dont use forwardRef anymore.
export interface InputWithAddonsProps
  extends InputHTMLAttributes<HTMLInputElement> {
  leading?: ReactNode
  trailing?: ReactNode
  containerClassName?: string
}

const InputWithAddons = forwardRef<HTMLInputElement, InputWithAddonsProps>(
  ({ leading, trailing, containerClassName, className, ...props }, ref) => {
    return (
      <div
        className={cn(
          'group flex h-10 w-full overflow-hidden rounded-md border border-input bg-transparent text-sm ring-offset-background focus-within:outline-hidden focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
          containerClassName,
        )}
      >
        {leading ? (
          <div className="border-input border-r bg-muted/50 px-3 py-2">
            {leading}
          </div>
        ) : null}
        <input
          className={cn(
            'w-full rounded-md bg-background px-3 py-2 placeholder:text-muted-foreground focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
        {trailing ? (
          <div className="border-input border-l bg-muted/50 px-3 py-2">
            {trailing}
          </div>
        ) : null}
      </div>
    )
  },
)
InputWithAddons.displayName = 'InputWithAddons'

export { InputWithAddons }

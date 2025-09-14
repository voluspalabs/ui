import { cn } from '@voluspalabs/lib/utils/cn'
import type { ComponentProps } from 'react'

interface AspectRatioProps extends ComponentProps<'div'> {
  ratio: number
}

function AspectRatio({
  ratio,
  className,
  children,
  ...props
}: AspectRatioProps) {
  return (
    <div
      className="relative w-full"
      data-slot="aspect-ratio-wrapper"
      style={{ paddingBottom: `${(1 / ratio) * 100}%` }}
    >
      <div
        className={cn('absolute inset-0', className)}
        data-slot="aspect-ratio"
        {...props}
      >
        {children}
      </div>
    </div>
  )
}

export { AspectRatio }

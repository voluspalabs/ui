import { cn } from '@voluspalabs/lib/utils/cn'
import type { ComponentProps } from 'react'

function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted/50', className)}
      data-slot="skeleton"
      {...props}
    />
  )
}

export { Skeleton }

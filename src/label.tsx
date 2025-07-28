'use client'
import { cn } from '@voluspalabs/lib/utils/cn'
import { Label as LabelPrimitive } from 'radix-ui'
import type { ComponentProps } from 'react'

function Label({
  className,
  ...props
}: ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      className={cn(
        'flex select-none items-center gap-2 font-medium text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 lg:text-sm',
        className,
      )}
      data-slot="label"
      {...props}
    />
  )
}

export { Label }

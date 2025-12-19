'use client'

import { cn } from '@voluspalabs/lib/utils/cn'
import type { ComponentProps } from 'react'

function Label({ className, ...props }: ComponentProps<'label'>) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: Label is designed to be associated with inputs via htmlFor prop or wrapper pattern
    <label
      className={cn(
        'flex select-none items-center gap-2 font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
        className,
      )}
      data-slot="label"
      {...props}
    />
  )
}

export { Label }

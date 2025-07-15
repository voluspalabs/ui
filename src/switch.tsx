'use client'
import { cn } from '@voluspalabs/lib/utils/cn'
import { Switch as SwitchPrimitive } from 'radix-ui'
import type { ComponentProps } from 'react'

function Switch({
  className,
  ...props
}: ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        'peer inline-flex h-6.5 w-16 shrink-0 items-center rounded-full border-2 border-transparent shadow-actions-primary outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-switch data-[state=unchecked]:bg-input',
        className,
      )}
      data-slot="switch"
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          'pointer-events-none block h-5.5 w-9 rounded-full bg-switch-dot shadow-sm ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0',
        )}
        data-slot="switch-thumb"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }

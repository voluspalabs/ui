import { Switch as SwitchPrimitive } from '@base-ui-components/react/switch'
import { cn } from '@voluspalabs/lib/utils/cn'
import type { ComponentProps } from 'react'

function Switch({
  className,
  children,
  ...props
}: ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        'peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:bg-primary data-[unchecked]:bg-input dark:data-[unchecked]:bg-input/80',
        className,
      )}
      data-slot="switch"
      {...props}
    >
      {children ?? <SwitchThumb />}
    </SwitchPrimitive.Root>
  )
}

function SwitchThumb({
  className,
  ...props
}: ComponentProps<typeof SwitchPrimitive.Thumb>) {
  return (
    <SwitchPrimitive.Thumb
      className={cn(
        'pointer-events-none block size-4 rounded-full bg-background ring-0 transition-transform data-[checked]:translate-x-[calc(100%-2px)] data-[unchecked]:translate-x-0 dark:data-[checked]:bg-primary-foreground dark:data-[unchecked]:bg-foreground',
        className,
      )}
      data-slot="switch-thumb"
      {...props}
    />
  )
}

export { Switch, SwitchThumb }

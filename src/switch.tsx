import { Switch as SwitchPrimitive } from '@base-ui-components/react/switch'
import { cn } from '@voluspalabs/lib/utils/cn'

function Switch({ className, children, ...props }: SwitchPrimitive.Root.Props) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        'peer inline-flex h-6.5 w-16 shrink-0 items-center rounded-full border-2 border-transparent shadow-xs outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:bg-primary data-[unchecked]:bg-input dark:data-[unchecked]:bg-input/80',
        className,
      )}
      data-slot="switch"
      {...props}
    >
      {children ?? <SwitchThumb />}
    </SwitchPrimitive.Root>
  )
}

function SwitchThumb({ className, ...props }: SwitchPrimitive.Thumb.Props) {
  return (
    <SwitchPrimitive.Thumb
      className={cn(
        'pointer-events-none block h-5.5 w-9 rounded-full bg-background shadow-sm ring-0 transition-transform data-[state=checked]:translate-x-6 data-[unchecked]:translate-x-0 dark:data-[checked]:bg-primary-foreground dark:data-[unchecked]:bg-foreground',
        className,
      )}
      data-slot="switch-thumb"
      {...props}
    />
  )
}

export { Switch, SwitchThumb }

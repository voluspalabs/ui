import { Tooltip as TooltipPrimitive } from '@base-ui-components/react/tooltip'
import { cn } from '@voluspalabs/lib/utils/cn'
import type { ComponentProps } from 'react'

function TooltipProvider({
  delay = 0,
  ...props
}: ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delay={delay}
      {...props}
    />
  )
}

function Tooltip({ ...props }: ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipPositioner({
  className,
  ...props
}: ComponentProps<typeof TooltipPrimitive.Positioner>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        className={cn('z-50', className)}
        data-slot="tooltip-positioner"
        sideOffset={8}
        {...props}
      />
    </TooltipPrimitive.Portal>
  )
}

function TooltipContent({
  className,
  children,
  ...props
}: ComponentProps<typeof TooltipPrimitive.Popup>) {
  return (
    <TooltipPrimitive.Popup
      className={cn(
        'fade-in-0 zoom-in-95 data-[closed]:fade-out-0 data-[closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in text-balance rounded-md bg-primary px-3 py-1.5 text-primary-foreground text-xs data-[closed]:animate-out',
        className,
      )}
      data-slot="tooltip-content"
      {...props}
    >
      {children}
      <TooltipArrow />
    </TooltipPrimitive.Popup>
  )
}

function TooltipArrow({
  className,
  ...props
}: ComponentProps<typeof TooltipPrimitive.Arrow>) {
  return (
    <TooltipPrimitive.Arrow
      className={cn(
        'z-50 size-2.5 rotate-45 rounded-[2px] bg-primary fill-primary',
        'data-[side=bottom]:-translate-y-1/2 data-[side=bottom]:top-px',
        'data-[side=top]:bottom-px data-[side=top]:translate-y-1/2',
        'data-[side=left]:right-px data-[side=left]:translate-x-1/2',
        'data-[side=right]:-translate-x-1/2 data-[side=right]:left-px',
        className,
      )}
      data-slot="tooltip-arrow"
      {...props}
    />
  )
}

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipPositioner,
}

import { PreviewCard as PreviewCardPrimitive } from '@base-ui-components/react/preview-card'
import { cn } from '@voluspalabs/lib/utils/cn'

function HoverCard(props: PreviewCardPrimitive.Root.Props) {
  return <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger(props: PreviewCardPrimitive.Trigger.Props) {
  return (
    <PreviewCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  )
}

function HoverCardPositioner({
  sideOffset = 4,
  ...props
}: PreviewCardPrimitive.Positioner.Props) {
  return (
    <PreviewCardPrimitive.Portal data-slot="hover-card-portal">
      <PreviewCardPrimitive.Positioner
        data-slot="hover-card-positioner"
        sideOffset={sideOffset}
        {...props}
      />
    </PreviewCardPrimitive.Portal>
  )
}

function HoverCardContent({
  className,
  ...props
}: PreviewCardPrimitive.Popup.Props) {
  return (
    <PreviewCardPrimitive.Popup
      className={cn(
        'data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[closed]:zoom-out-95 data-[open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[closed]:animate-out data-[open]:animate-in',
        className,
      )}
      data-slot="hover-card-content"
      {...props}
    />
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent, HoverCardPositioner }

import { Dialog as SheetPrimitive } from '@base-ui-components/react/dialog'
import { cn } from '@voluspalabs/lib/utils/cn'
import { XIcon } from 'lucide-react'
import type { ComponentProps } from 'react'

function Sheet(props: SheetPrimitive.Root.Props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger(props: SheetPrimitive.Trigger.Props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose(props: SheetPrimitive.Close.Props) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal(props: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({ className, ...props }: SheetPrimitive.Backdrop.Props) {
  return (
    <SheetPrimitive.Backdrop
      className={cn(
        'data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[closed]:animation-duration-[200ms] fixed inset-0 z-50 bg-black/50 data-[closed]:animate-out data-[open]:animate-in',
        className,
      )}
      data-slot="sheet-overlay"
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  showCloseButton = true,
  side = 'right',
  ...props
}: SheetPrimitive.Popup.Props & {
  showCloseButton?: boolean
  side?: 'top' | 'bottom' | 'left' | 'right'
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        className={cn(
          'data-[open]:fade-in-0 data-[open]:zoom-in-95 data-[closed]:fade-out-0 data-[closed]:zoom-out-95 fixed z-50 flex flex-col gap-4 bg-background p-6 shadow-lg transition duration-300 ease-in-out data-[closed]:animate-out data-[open]:animate-in',
          side === 'top' &&
            'data-[closed]:slide-out-to-top data-[open]:slide-in-from-top inset-x-0 top-0 rounded-b-lg border-b',
          side === 'bottom' &&
            'data-[closed]:slide-out-to-bottom data-[open]:slide-in-from-bottom inset-x-0 bottom-0 rounded-t-lg border-t',
          side === 'left' &&
            'data-[closed]:slide-out-to-left data-[open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 rounded-r-lg border-r sm:max-w-sm',
          side === 'right' &&
            'data-[closed]:slide-out-to-right data-[open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 rounded-l-lg border-l sm:max-w-sm',
          className,
        )}
        data-slot="sheet-content"
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            className="absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0"
            data-slot="sheet-close"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      data-slot="sheet-header"
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        className,
      )}
      data-slot="sheet-footer"
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      className={cn('font-semibold text-foreground text-lg', className)}
      data-slot="sheet-title"
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: SheetPrimitive.Description.Props) {
  return (
    <SheetPrimitive.Description
      className={cn('text-muted-foreground text-sm', className)}
      data-slot="sheet-description"
      {...props}
    />
  )
}

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}

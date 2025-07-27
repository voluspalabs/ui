'use client'
import { cn } from '@voluspalabs/lib/utils/cn'
import { Check, X } from 'lucide-react'
import type { ComponentProps } from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'
import { Button } from './button'

function Drawer({ ...props }: ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerTrigger({
  ...props
}: ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({
  ...props
}: ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({
  ...props
}: ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      className={cn(
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=open]:animate-in',
        className,
      )}
      data-slot="drawer-overlay"
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  showCloseButton = false,
  showConfirmButton = false,
  onCancel,
  onConfirm,
  ...props
}: ComponentProps<typeof DrawerPrimitive.Content> & {
  showCloseButton?: boolean
  showConfirmButton?: boolean
  onCancel?: () => void
  onConfirm?: () => void
}) {
  const hasAnyButton = showCloseButton || showConfirmButton

  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        className={cn(
          'group/drawer-content fixed z-50 flex h-auto flex-col bg-background',
          'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[95vh] data-[vaul-drawer-direction=top]:rounded-b-4xl',
          'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[95vh] data-[vaul-drawer-direction=bottom]:rounded-t-4xl',
          'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:rounded-l-4xl data-[vaul-drawer-direction=right]:sm:max-w-sm',
          'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:rounded-r-4xl data-[vaul-drawer-direction=left]:sm:max-w-sm',
          className,
        )}
        data-slot="drawer-content"
        {...props}
      >
        {hasAnyButton && (
          <div className="absolute top-4 right-4 z-10 flex gap-2">
            {showCloseButton && (
              <DrawerClose asChild>
                <Button
                  aria-label="Cancel"
                  className="size-12 rounded-full bg-transparent brightness-125 backdrop-saturate-150"
                  onClick={onCancel}
                  size="icon"
                  variant="outline"
                >
                  <X className="size-5" />
                </Button>
              </DrawerClose>
            )}
            {showConfirmButton && (
              <DrawerClose asChild>
                <Button
                  aria-label="Confirm"
                  className="size-12 rounded-full"
                  onClick={onConfirm}
                  size="icon"
                  variant="default"
                >
                  <Check className="size-5" />
                </Button>
              </DrawerClose>
            )}
          </div>
        )}
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex flex-col gap-1.5 pt-7 pb-3', className)}
      data-slot="drawer-header"
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      data-slot="drawer-footer"
      {...props}
    />
  )
}

function DrawerTitle({
  className,
  ...props
}: ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      className={cn('font-semibold text-foreground', className)}
      data-slot="drawer-title"
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      className={cn('text-muted-foreground text-sm', className)}
      data-slot="drawer-description"
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}

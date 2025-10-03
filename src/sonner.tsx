'use client'
import { Toaster as Sonner, type ToasterProps } from 'sonner'

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <div data-slot="toaster">
      <Sonner
        className="toaster group pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)]"
        richColors
        toastOptions={{
          style: {
            // Fallback if class names fail due to Sonner internal structure
            borderRadius: '1rem',
          },
          classNames: {
            toast:
              // Target both the toast element itself and data-sonner-toast attribute just in case.
              'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg rounded-xl [data-sonner-toast]:rounded-2xl overflow-hidden',
            description: 'group-[.toast]:text-muted-foreground',
            actionButton:
              'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground font-medium',
            cancelButton:
              'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground font-medium',
          },
        }}
        {...props}
      />
    </div>
  )
}

export { Toaster }

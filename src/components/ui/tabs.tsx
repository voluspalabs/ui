'use client'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import type { ComponentProps } from 'react'
import { cn } from '../../utils/cn'

function Tabs({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        'inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
        className,
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        // biome-ignore lint/nursery/useSortedClasses: Waiting for fix by biome, for tw class sorting.
        "data-[state=active]:bg-background data-[state=active]:text-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 inline-flex items-center justify-center gap-2 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-invalid:focus-visible:ring-0 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        'flex-1 outline-ring/50 ring-ring/10 transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-4 aria-invalid:focus-visible:ring-0 dark:outline-ring/40 dark:ring-ring/20',
        className,
      )}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

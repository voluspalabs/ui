## @voluspalabs/ui — Agents rules and integration guide

### How to import (critical)
- There is no default “root” import. Always import from subpath entries:
	- Correct: `import { Button } from '@voluspalabs/ui/button'`
	- Incorrect: `import { Button } from '@voluspalabs/ui'` (not supported)
- Each source file under `src/` corresponds to a subpath export listed below.

### Styling and behavior conventions (stable contracts)
- Tailwind-first: All components accept `className` for overrides.
- Slots: Components set stable `data-slot` attributes (e.g., `button`, `dialog-content`, `select-trigger`). You may target these in CSS or Tailwind’s arbitrary selectors for consistent theming. Treat these slot names as part of the public contract.
- State data attributes: Components and underlying primitives expose state with `data-*` attributes (e.g., `data-open`, `data-selected`, `data-[variant=…]`). You can safely style against these.
- Variants (CVA): Some components expose variant and size props (e.g., Button, Badge, Toggle, Spinner). These are stable and typed.
- Render prop: Some components support a `render` prop (via Base UI `useRender`) to change the rendered element (e.g., render Button as an anchor). When present, this prop is typed as `useRender.RenderProp`.
- Accessibility: Underlying primitives (Base UI) provide correct ARIA roles/keyboard interactions.
- Client vs Server: Many components are interactive; when in doubt, put usage inside a client boundary (`'use client'` / Next.js Client Components).

## Export catalog (subpath → named exports)

Import each from `@voluspalabs/ui/<subpath>`.

- accordion
	- Accordion, AccordionItem, AccordionTrigger, AccordionContent
- alert-dialog
	- AlertDialog, AlertDialogPortal, AlertDialogOverlay, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel
- alert
	- Alert, AlertTitle, AlertDescription
- aspect-ratio
	- AspectRatio
- autocomplete
	- Autocomplete, AutocompleteClear, AutocompleteCollection, AutocompleteEmpty, AutocompleteGroup, AutocompleteGroupLabel, AutocompleteInput, AutocompleteItem, AutocompleteList, AutocompletePopup, AutocompletePositioner, AutocompleteRow, AutocompleteStatus, AutocompleteTrigger
- avatar
	- Avatar, AvatarImage, AvatarFallback
- badge
	- Badge, badgeVariants
- breadcrumb
	- Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator
- button-group
	- ButtonGroup, ButtonGroupSeparator, ButtonGroupText, buttonGroupVariants
- button
	- Button, buttonVariants
- calendar
	- Calendar, CalendarDayButton
- card
	- Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent
- carousel
	- Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi
- chart
	- ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle
	- Types: ChartConfig, CustomTooltipProps, ChartLegendContentProps
- checkbox
	- Checkbox
- collapsible
	- Collapsible, CollapsibleTrigger, CollapsibleContent
- combobox
	- Combobox, ComboboxArrow, ComboboxChip, ComboboxChipRemove, ComboboxChips, ComboboxClear, ComboboxCollection, ComboboxEmpty, ComboboxGroup, ComboboxGroupLabel, ComboboxIcon, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxList, ComboboxPopup, ComboboxPositioner, ComboboxRow, ComboboxSeparator, ComboboxStatus, ComboboxTrigger, ComboboxValue
- command
	- Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator
- context-menu
	- ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuGroupLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup, ContextMenuPortal, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup, ContextMenuPositioner
- dialog
	- Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger
- drawer
	- Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription
- dropdown-menu
	- DropdownMenu, DropdownMenuPortal, DropdownMenuTrigger, DropdownMenuPositioner, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent
- empty
	- Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia
- field
	- Field, FieldLabel, FieldDescription, FieldError, FieldGroup, FieldLegend, FieldSeparator, FieldSet, FieldContent, FieldTitle
- form
	- createFormHook (helper for @tanstack/react-form; provides Field components and contexts)
- hover-card
	- HoverCard, HoverCardTrigger, HoverCardContent, HoverCardPositioner
- input
	- Input
- input-group
	- InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupInput, InputGroupTextarea
- input-otp
	- InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator
- item
	- Item, ItemMedia, ItemContent, ItemActions, ItemGroup, ItemSeparator, ItemTitle, ItemDescription, ItemHeader, ItemFooter
- kbd
	- Kbd, KbdGroup
- label
	- Label
- menubar
	- Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarPositioner, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubTrigger, MenubarTrigger
- navigation-menu
	- NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuPositioner, NavigationMenuViewport, navigationMenuTriggerStyle, NavigationMenuPopup, NavigationMenuArrow
- pagination
	- Pagination, PaginationContent, PaginationLink, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis
- popover
	- Popover, PopoverTrigger, PopoverContent, PopoverAnchor, PopoverPositioner
- progress
	- Progress, ProgressIndicator, ProgressLabel, ProgressTrack, ProgressValue
- radio-group
	- RadioGroup, RadioGroupItem
- resizable
	- ResizablePanelGroup, ResizablePanel, ResizableHandle
- scroll-area
	- ScrollArea, ScrollBar
- select
	- Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, SelectPositioner
- separator
	- Separator
- separator-extended
	- Separator (variant prop adds dashed, dotted, double styles)
- sheet
	- Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription
- sidebar
	- Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, useSidebar
- skeleton
	- Skeleton
- slider
	- Slider
- sonner
	- Toaster (requires `sonner` peer)
- spinner
	- Spinner, spinnerVariants
- switch
	- Switch, SwitchThumb
- table
	- Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption
- tabs
	- Tabs, TabsList, TabsTrigger, TabsContent
- textarea
	- Textarea
- toggle-group
	- ToggleGroup, ToggleGroupItem
- toggle
	- Toggle, toggleVariants
- tooltip
	- Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, TooltipPositioner

Blocks (opinionated, in `@voluspalabs/ui/<name>`):
- copy-to-clipboard-container: default export `CopyToClipboardContainer`
- input-password: `PasswordInput`, plus type `InputProps`
- link: `Link`, plus type `LinkProps`

Note: Types are bundled via `typesVersions` and subpath `types` fields; TS consumers will get proper types when importing from the subpath.

---

## Common usage patterns and examples

Short snippets to guide generation. Replace props as needed.

- Button variants
	- `import { Button } from '@voluspalabs/ui/button'`
	- `<Button variant="destructive">Delete</Button>`
	- Render as link: `<Button render={<a href="/settings" />} variant="link">Settings</Button>`

- Dialog
	- `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@voluspalabs/ui/dialog'`
	- `<Dialog><DialogTrigger>Open</DialogTrigger><DialogContent><DialogHeader><DialogTitle>Title</DialogTitle></DialogHeader>...</DialogContent></Dialog>`

- Select
	- `import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue, SelectPositioner } from '@voluspalabs/ui/select'`
	- `<Select><SelectTrigger><SelectValue placeholder="Select…" /></SelectTrigger><SelectPositioner /><SelectContent><SelectItem value="a">A</SelectItem></SelectContent></Select>`

- Chart container
	- `import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@voluspalabs/ui/chart'`
	- Provide a `config: ChartConfig` mapping keys to labels/icons/colors. Wrap Recharts series inside `ChartContainer`.

- Toaster
	- `import { Toaster } from '@voluspalabs/ui/sonner'` then mount once at app root. Requires peer `sonner`.

- Input group with addons
	- `import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@voluspalabs/ui/input-group'`
	- `<InputGroup><InputGroupAddon align="inline-start">https://</InputGroupAddon><InputGroupInput placeholder="example.com" /><InputGroupButton>Go</InputGroupButton></InputGroup>`

- Field layout
	- `import { Field, FieldContent, FieldDescription, FieldLabel, FieldTitle } from '@voluspalabs/ui/field'`
	- `import { Input } from '@voluspalabs/ui/input'`
	- `<Field><FieldLabel><FieldTitle>Email</FieldTitle></FieldLabel><FieldContent><Input type="email" placeholder="you@example.com" /></FieldContent><FieldDescription>We'll reach out when it's ready.</FieldDescription></Field>`

Styling with slots:
- Target slots in Tailwind using arbitrary selectors. Example: `[&_[data-slot=dialog-content]]:p-8` to add padding to all dialog content children.

---

## Constraints and do’s/don’ts
- Do import only what you use, from subpaths; avoid `@voluspalabs/ui` root.
- Do assume client components for interactive pieces in RSC/Next.
- Do rely on `data-slot` and `data-*` state attributes for styling.
- Don’t reach into internal file paths or `dist` directly; use public exports only.
- Don’t assume default exports (except `copy-to-clipboard-container`). Most modules export named symbols.

## Appendix: Component traits (quick reference)

- Variants
	- Button: `variant: 'default'|'destructive'|'outline'|'secondary'|'ghost'|'link'`, `size: 'default'|'sm'|'lg'|'icon'`
	- Badge: `variant: 'default'|'secondary'|'destructive'|'outline'`
	- Toggle: `variant: 'default'|'outline'`, `size: 'default'|'sm'|'lg'`
	- Spinner: `size: 'sm'|'md'|'lg'`
	- SelectTrigger: `size: 'sm'|'default'`
	- ToggleGroup propagates `variant` and `size` to items

- Blocks
	- CopyToClipboardContainer: default export; wraps children and shows a copy button (uses `@voluspalabs/lib` hook)
	- PasswordInput: controlled/uncontrolled input with show/hide toggle
	- Link: wrapper around `next/link` with optional external arrow

# @voluspalabs/ui

A collection of high-quality React components styled with Tailwind CSS for building modern web interfaces.

## Highlights

- Modular, tree-shakeable subpath exports (no root barrel)
- Tailwind-first styling with stable `data-slot` and `data-*` state attributes
- Accessible primitives (Base UI) underneath
- TypeScript types via subpath `types`

## Supported environment

- React 19.1.x, React DOM 19.1.x
- Next.js 15.5.x
- Tailwind CSS 4.x (+ tailwindcss-animate)
- Node.js >= 20

See Peer dependencies below for exact versions.

## Installation

```zsh
npm install @voluspalabs/ui
# or
bun add @voluspalabs/ui
```

This package is ESM-only (type: module). Use `import`, not `require`.

### Peer dependencies (install in your app)

- react 19.1.1, react-dom 19.1.1
- next 15.5.3 (if using Next.js)
- tailwindcss ^4.1.13, tailwindcss-animate ^1.0.7
- @tailwindcss/postcss ^4.1.13, postcss ^8.5.6
- class-variance-authority ^0.7.1
- sonner ^2.0.7 (only if you use `Toaster`)
- zod ^4.1.8 (optional, useful with forms)
- For TS projects: @types/react ^19.1.13, @types/react-dom ^19.1.9

## Importing (critical)

Always import from subpaths. There is no root export.

```tsx
import { Button } from '@voluspalabs/ui/button'
// ❌ Not supported: import { Button } from '@voluspalabs/ui'
```

## Usage quickstart

Most interactive components should be used in a Client Component boundary in Next.js / RSC.

```tsx
'use client'
import { Button } from '@voluspalabs/ui/button'

export default function Example() {
  return <Button variant="destructive">Delete</Button>
}
```

### More examples

- Dialog

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@voluspalabs/ui/dialog'

export function DialogExample() {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
        </DialogHeader>
        Body
      </DialogContent>
    </Dialog>
  )
}
```

- Select

```tsx
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue, SelectPositioner } from '@voluspalabs/ui/select'

export function SelectExample() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select…" />
      </SelectTrigger>
      <SelectPositioner />
      <SelectContent>
        <SelectItem value="a">A</SelectItem>
      </SelectContent>
    </Select>
  )
}
```

- Chart container

```tsx
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from '@voluspalabs/ui/chart'
// ...wrap Recharts series inside ChartContainer; provide a config mapping keys to labels/icons/colors.
```

- Toaster

```tsx
import { Toaster } from '@voluspalabs/ui/sonner'
// Mount once at app root. Requires peer dependency `sonner`.
```

## Styling conventions (stable contracts)

- Every component accepts `className`.
- Components expose stable `data-slot` attributes for targeted styling, e.g. `data-slot="button"`, `data-slot="dialog-content"`, `data-slot="select-trigger"`.
- State is exposed via `data-*` attributes (e.g., `data-open`, `data-selected`, `data-[variant=…]`).
- Some components implement variants via CVA (e.g., Button, Badge, Toggle, Spinner). These props are typed.
- Some components accept a `render` prop (`useRender.RenderProp`) to change the rendered element.

Target slots with Tailwind arbitrary selectors, for example:

```tsx
<div className="[&_[data-slot=dialog-content]]:p-8">
  <YourDialogTree />
  {/* All dialog content children will get p-8 */}
  {/* ... */}
</div>
```

## External libraries used

These inform expected composition patterns:

- Base UI primitives: `@base-ui-components/react/*`
- Command: `cmdk`
- Carousel: `embla-carousel-react`
- OTP input: `input-otp`
- Calendar: `react-day-picker`
- Charts: `recharts`
- Resizable: `react-resizable-panels`
- Drawer: `vaul`
- Icons: `lucide-react`
- Toasts: `sonner`
- Forms helper: `@tanstack/react-form` (via `createFormHook`)

## Export catalog (subpath → named exports)

Import each from `@voluspalabs/ui/<subpath>`.

- accordion — Accordion, AccordionItem, AccordionTrigger, AccordionContent
- alert-dialog — AlertDialog, AlertDialogPortal, AlertDialogOverlay, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel
- alert — Alert, AlertTitle, AlertDescription
- aspect-ratio — AspectRatio
- autocomplete — Autocomplete, AutocompleteClear, AutocompleteCollection, AutocompleteEmpty, AutocompleteGroup, AutocompleteGroupLabel, AutocompleteInput, AutocompleteItem, AutocompleteList, AutocompletePopup, AutocompletePositioner, AutocompleteRow, AutocompleteStatus, AutocompleteTrigger
- avatar — Avatar, AvatarImage, AvatarFallback
- badge — Badge, badgeVariants
- breadcrumb — Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator
- button — Button, buttonVariants
- calendar — Calendar, CalendarDayButton
- card — Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent
- carousel — Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi
- chart — ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle; types: ChartConfig, CustomTooltipProps, ChartLegendContentProps
- checkbox — Checkbox
- collapsible — Collapsible, CollapsibleTrigger, CollapsibleContent
- combobox — Combobox, ComboboxArrow, ComboboxChip, ComboboxChipRemove, ComboboxChips, ComboboxClear, ComboboxCollection, ComboboxEmpty, ComboboxGroup, ComboboxGroupLabel, ComboboxIcon, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxList, ComboboxPopup, ComboboxPositioner, ComboboxRow, ComboboxSeparator, ComboboxStatus, ComboboxTrigger, ComboboxValue
- command — Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator
- context-menu — ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuGroupLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup, ContextMenuPortal, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup, ContextMenuPositioner
- dialog — Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger
- drawer — Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription
- dropdown-menu — DropdownMenu, DropdownMenuPortal, DropdownMenuTrigger, DropdownMenuPositioner, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent
- form — createFormHook (helper for @tanstack/react-form)
- hover-card — HoverCard, HoverCardTrigger, HoverCardContent, HoverCardPositioner
- input-otp — InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator
- input — Input
- label — Label
- menubar — Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarPositioner, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubTrigger, MenubarTrigger
- navigation-menu — NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuPositioner, NavigationMenuViewport, navigationMenuTriggerStyle, NavigationMenuPopup, NavigationMenuArrow
- pagination — Pagination, PaginationContent, PaginationLink, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis
- popover — Popover, PopoverTrigger, PopoverContent, PopoverAnchor, PopoverPositioner
- progress — Progress, ProgressIndicator, ProgressLabel, ProgressTrack, ProgressValue
- radio-group — RadioGroup, RadioGroupItem
- resizable — ResizablePanelGroup, ResizablePanel, ResizableHandle
- scroll-area — ScrollArea, ScrollBar
- select — Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, SelectPositioner
- separator — Separator
- sheet — Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription
- sidebar — Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, useSidebar
- skeleton — Skeleton
- slider — Slider
- sonner — Toaster (requires `sonner`)
- spinner — Spinner, spinnerVariants
- switch — Switch, SwitchThumb
- table — Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption
- tabs — Tabs, TabsList, TabsTrigger, TabsContent
- textarea — Textarea
- toggle-group — ToggleGroup, ToggleGroupItem
- toggle — Toggle, toggleVariants
- tooltip — Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, TooltipPositioner

Blocks (opinionated):

- copy-to-clipboard-container — default export `CopyToClipboardContainer`
- input-password — `PasswordInput`, type `InputProps`
- link — `Link`, type `LinkProps`

## Tailwind CSS notes

The components are styled with Tailwind v4. If your project uses Tailwind’s content scanning, ensure your source includes where you render these components. You can target slots via `data-slot` attributes using Tailwind arbitrary selectors.

## Development (contributing)

1. Clone the repo: `git clone https://github.com/voluspalabs/ui.git`
2. Install dependencies: `bun install`
3. Build: `bun run build`

Build outputs to `dist/` per `package.json` exports.

## Agents and automation

If you’re integrating with codegen tools/agents, see the dedicated rules and guidance in `AGENTS.md` for capabilities, constraints, and stable styling contracts.

## License

MIT — see `LICENSE`.

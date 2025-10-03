import { Autocomplete as AutocompletePrimitive } from '@base-ui-components/react/autocomplete'
import { cn } from '@voluspalabs/lib/utils/cn'
import { XIcon } from 'lucide-react'
import type { ComponentType } from 'react'
import { Button } from './button'
import { Input } from './input'

function Autocomplete<ItemValue>(
  props: AutocompletePrimitive.Root.Props<ItemValue>,
) {
  const Component = AutocompletePrimitive.Root as ComponentType<
    AutocompletePrimitive.Root.Props<ItemValue>
  >
  return <Component {...props} />
}

function AutocompleteInput(props: AutocompletePrimitive.Input.Props) {
  return (
    <AutocompletePrimitive.Input
      data-slot="autocomplete-input"
      render={<Input />}
      {...props}
    />
  )
}

function AutocompletePopup({
  className,
  ...props
}: AutocompletePrimitive.Popup.Props) {
  return (
    <AutocompletePrimitive.Popup
      className={cn(
        'max-h-[min(var(--available-height),23rem)] w-(--anchor-width) max-w-(--available-width) scroll-pt-2 scroll-pb-2 overflow-y-auto overscroll-contain rounded-md bg-popover text-popover-foreground shadow-md outline-1 outline-border dark:shadow-none',
        className,
      )}
      data-slot="autocomplete-popup"
      {...props}
    />
  )
}

function AutocompletePositioner(props: AutocompletePrimitive.Positioner.Props) {
  return (
    <AutocompletePrimitive.Portal>
      <AutocompletePrimitive.Positioner
        data-slot="autocomplete-positioner"
        {...props}
      />
    </AutocompletePrimitive.Portal>
  )
}

function AutocompleteList({
  className,
  ...props
}: AutocompletePrimitive.List.Props) {
  return (
    <AutocompletePrimitive.List
      className={cn('not-empty:p-1.5', className)}
      data-slot="autocomplete-list"
      {...props}
    />
  )
}

function AutocompleteEmpty({
  className,
  ...props
}: AutocompletePrimitive.Empty.Props) {
  return (
    <AutocompletePrimitive.Empty
      className={cn(
        'flex items-center justify-center not-empty:py-3 text-muted-foreground text-sm',
        className,
      )}
      data-slot="autocomplete-empty"
      {...props}
    />
  )
}

function AutocompleteItem({
  className,
  ...props
}: AutocompletePrimitive.Item.Props) {
  return (
    <AutocompletePrimitive.Item
      className={cn(
        'rounded-md px-3 py-1.5 text-sm data-highlighted:bg-accent data-highlighted:text-accent-foreground',
        className,
      )}
      data-slot="autocomplete-item"
      {...props}
    />
  )
}

function AutocompleteGroup({
  className,
  ...props
}: AutocompletePrimitive.Group.Props) {
  return (
    <AutocompletePrimitive.Group
      className={cn('block pb-2', className)}
      data-slot="autocomplete-group"
      {...props}
    />
  )
}

function AutocompleteGroupLabel({
  className,
  ...props
}: AutocompletePrimitive.GroupLabel.Props) {
  return (
    <AutocompletePrimitive.GroupLabel
      className={cn(
        'bg-popover py-2 pl-3 font-medium text-muted-foreground text-sm',
        className,
      )}
      data-slot="autocomplete-group-label"
      {...props}
    />
  )
}

function AutocompleteCollection(props: AutocompletePrimitive.Collection.Props) {
  return (
    <AutocompletePrimitive.Collection
      data-slot="autocomplete-collection"
      {...props}
    />
  )
}

function AutocompleteStatus({
  className,
  ...props
}: AutocompletePrimitive.Status.Props) {
  return (
    <AutocompletePrimitive.Status
      className={cn(
        'my-3 px-4.5 text-muted-foreground text-sm empty:m-0 empty:p-0',
        className,
      )}
      data-slot="autocomplete-status"
      {...props}
    />
  )
}

function AutocompleteClear({
  className,
  children,
  ...props
}: AutocompletePrimitive.Clear.Props) {
  return (
    <AutocompletePrimitive.Clear
      className={cn(className)}
      data-slot="autocomplete-clear"
      {...props}
    >
      {children ?? <XIcon className="h-4 w-4 text-muted-foreground" />}
    </AutocompletePrimitive.Clear>
  )
}

function AutocompleteRow({
  className,
  ...props
}: AutocompletePrimitive.Row.Props) {
  return (
    <AutocompletePrimitive.Row
      className={cn(className)}
      data-slot="autocomplete-row"
      {...props}
    />
  )
}

function AutocompleteTrigger({
  className,
  ...props
}: AutocompletePrimitive.Trigger.Props) {
  return (
    <AutocompletePrimitive.Trigger
      className={cn(className)}
      data-slot="autocomplete-trigger"
      render={<Button variant="outline" />}
      {...props}
    />
  )
}

export {
  Autocomplete,
  AutocompleteClear,
  AutocompleteCollection,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompletePositioner,
  AutocompleteRow,
  AutocompleteStatus,
  AutocompleteTrigger,
}

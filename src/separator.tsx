import { Separator as SeparatorPrimitive } from '@base-ui-components/react/separator'
import { cn } from '@voluspalabs/lib/utils/cn'

function Separator({ className, ...props }: SeparatorPrimitive.Props) {
  return (
    <SeparatorPrimitive
      className={cn(
        'shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px',
        className,
      )}
      data-slot="separator"
      {...props}
    />
  )
}

export { Separator }

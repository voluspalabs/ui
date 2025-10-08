import { Separator as SeparatorPrimitive } from '@base-ui-components/react/separator'
import { cn } from '@voluspalabs/lib/utils/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const separatorVariants = cva(
  'shrink-0 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:border-e data-[orientation=horizontal]:border-t',
  {
    variants: {
      variant: {
        default: 'border-solid',
        dashed: 'border-dashed',
        dotted: 'border-dotted',
        double:
          'border-double p-px data-[orientation=vertical]:border-x data-[orientation=horizontal]:border-y',
      },
    },
  },
)

type SeparatorProps = SeparatorPrimitive.Props &
  VariantProps<typeof separatorVariants>

function Separator({ className, variant, ...props }: SeparatorProps) {
  return (
    <SeparatorPrimitive
      className={cn(separatorVariants({ variant }), className)}
      data-slot="separator"
      {...props}
    />
  )
}

export { Separator }

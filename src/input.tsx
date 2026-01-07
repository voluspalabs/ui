import { Input as InputPrimitive } from '@base-ui/react/input'
import { cn } from '@voluspalabs/lib/utils/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const inputVariants = cva(
  'w-full min-w-0 rounded-lg border border-input bg-transparent text-base outline-none transition-colors file:inline-flex file:h-6 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:disabled:bg-input/80',
  {
    variants: {
      size: {
        default: 'h-8 px-2.5 py-1',
        lg: 'h-10 px-3 py-2',
        xl: 'h-11 px-3.5 py-2.5',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

function Input({
  className,
  type,
  size = 'default',
  ...props
}: Omit<InputPrimitive.Props, 'size'> & VariantProps<typeof inputVariants>) {
  return (
    <InputPrimitive
      className={cn(inputVariants({ size, className }))}
      data-slot="input"
      type={type}
      {...props}
    />
  )
}

export { Input, inputVariants }

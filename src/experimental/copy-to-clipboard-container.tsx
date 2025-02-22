import { useCopyToClipboard } from '@voluspalabs/lib/hooks/use-copy-to-clipboard'
import { cn } from '@voluspalabs/lib/utils/cn'
import { Button } from '@voluspalabs/ui/button'
import { Check, Copy } from 'lucide-react'
import { type HTMLAttributes, forwardRef, useRef } from 'react'

const CopyToClipboardContainer = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(
  (
    { children, className, ...props },
    // , ref
  ) => {
    const innerRef = useRef<HTMLDivElement>(null)
    const { copy, isCopied } = useCopyToClipboard()

    const onClick = () => {
      const content = innerRef.current?.textContent
      if (content) copy(content)
    }

    return (
      <div className="group relative text-left">
        <div
          // ref={composeRefs(ref, innerRef)}
          className={cn('peer', className)}
          {...props}
        >
          {children}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-2 right-2 h-6 w-6 opacity-0 focus:opacity-100 group-hover:opacity-100 peer-focus:opacity-100"
          onClick={onClick}
        >
          {isCopied ? (
            <Check className="h-3 w-3" />
          ) : (
            <Copy className="h-3 w-3" />
          )}
        </Button>
      </div>
    )
  },
)

CopyToClipboardContainer.displayName = 'CopyToClipboardContainer'

export default CopyToClipboardContainer

import { useCopyToClipboard } from '@voluspalabs/lib/hooks/use-copy-to-clipboard'
import { cn } from '@voluspalabs/lib/utils/cn'
import { Check, Copy } from 'lucide-react'
import { type ComponentProps, useRef } from 'react'
import { Button } from '../button'

const CopyToClipboardContainer = ({
  children,
  className,
  ...props
}: ComponentProps<'div'>) => {
  const innerRef = useRef<HTMLDivElement>(null)
  const { copy, isCopied } = useCopyToClipboard()

  const onClick = () => {
    const content = innerRef.current?.textContent
    if (content) {
      copy(content)
    }
  }

  return (
    <div className="group relative text-left">
      <div className={cn('peer', className)} ref={innerRef} {...props}>
        {children}
      </div>
      <Button
        className="absolute top-2 right-2 h-6 w-6 opacity-0 focus:opacity-100 group-hover:opacity-100 peer-focus:opacity-100"
        onClick={onClick}
        size="icon"
        variant="outline"
      >
        {isCopied ? (
          <Check className="h-3 w-3" />
        ) : (
          <Copy className="h-3 w-3" />
        )}
      </Button>
    </div>
  )
}

CopyToClipboardContainer.displayName = 'CopyToClipboardContainer'

export default CopyToClipboardContainer

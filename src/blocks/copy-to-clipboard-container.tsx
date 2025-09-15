'use client'

import { useCopyToClipboard } from '@voluspalabs/lib/hooks/use-copy-to-clipboard'
import { cn } from '@voluspalabs/lib/utils/cn'
import { Check, Copy } from 'lucide-react'
import { type ComponentProps, useRef } from 'react'
import { Button } from '../button'

type CopyToClipboardContainerProps = ComponentProps<'div'> & {
  contentClassName?: string
  buttonClassName?: string
  onCopy?: (text: string) => void
}

const CopyToClipboardContainer = ({
  children,
  className,
  contentClassName,
  buttonClassName,
  onCopy,
  ...props
}: CopyToClipboardContainerProps) => {
  const innerRef = useRef<HTMLDivElement>(null)
  const { copy, isCopied } = useCopyToClipboard()

  const onClick = () => {
    const content = innerRef.current?.textContent
    if (content) {
      copy(content)
      onCopy?.(content)
    }
  }

  return (
    <div
      className={cn('group relative text-left', className)}
      data-copied={isCopied ? '' : undefined}
      data-slot="copy-to-clipboard-container"
      {...props}
    >
      <div
        className={cn('peer', contentClassName)}
        data-slot="copy-source"
        ref={innerRef}
      >
        {children}
      </div>
      <Button
        aria-label={isCopied ? 'Copied' : 'Copy to clipboard'}
        className={cn(
          'absolute top-2 right-2 h-6 w-6 opacity-0 focus:opacity-100 group-hover:opacity-100 peer-focus:opacity-100',
          buttonClassName,
        )}
        data-slot="copy-button"
        onClick={onClick}
        size="icon"
        variant="outline"
      >
        {isCopied ? (
          <Check aria-hidden="true" className="h-3 w-3" />
        ) : (
          <Copy aria-hidden="true" className="h-3 w-3" />
        )}
      </Button>
    </div>
  )
}

CopyToClipboardContainer.displayName = 'CopyToClipboardContainer'

export default CopyToClipboardContainer

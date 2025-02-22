import { cn } from '@voluspalabs/lib/utils/cn'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@voluspalabs/ui/tooltip'
import { useEffect, useRef, useState } from 'react'

interface TextWithTooltipProps {
  text: string | number
  className?: string
}

export function TextWithTooltip({ text, className }: TextWithTooltipProps) {
  const [isTruncated, setIsTruncated] = useState<boolean>(false)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkTruncation = () => {
      if (textRef.current) {
        const { scrollWidth, clientWidth } = textRef.current
        setIsTruncated(scrollWidth > clientWidth)
      }
    }

    const resizeObserver = new ResizeObserver(() => {
      checkTruncation()
    })

    if (textRef.current) {
      resizeObserver.observe(textRef.current)
    }

    checkTruncation()

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <TooltipProvider delayDuration={100} disableHoverableContent>
      <Tooltip>
        <TooltipTrigger disabled={!isTruncated} asChild>
          <div
            ref={textRef}
            className={cn(
              'truncate',
              !isTruncated && 'pointer-events-none',
              className,
            )}
          >
            {text}
          </div>
        </TooltipTrigger>
        <TooltipContent>{text}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

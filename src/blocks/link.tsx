import { cn } from '@voluspalabs/lib/utils/cn'
import { ArrowUpRight } from 'lucide-react'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import type { ComponentProps } from 'react'

export interface LinkProps
  extends NextLinkProps,
    Omit<ComponentProps<'a'>, keyof NextLinkProps> {
  hideArrow?: boolean
}

function Link({ className, href, children, hideArrow, ...props }: LinkProps) {
  const isInternal =
    href?.toString().startsWith('/') || href?.toString().startsWith('#')
  const externalLinkProps = isInternal
    ? undefined
    : { target: '_blank', rel: 'noreferrer' }

  return (
    <NextLink
      className={cn(
        'group text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground',
        'rounded-md ring-offset-background focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2',
        className,
      )}
      data-slot="link"
      href={href}
      {...externalLinkProps}
      {...props}
    >
      {children}
      {!isInternal && !hideArrow ? (
        <ArrowUpRight
          aria-hidden="true"
          className="ml-0.5 inline-block h-4 w-4 text-muted-foreground group-hover:translate-x-px group-hover:-translate-y-px group-hover:text-foreground"
        />
      ) : null}
    </NextLink>
  )
}

export { Link }

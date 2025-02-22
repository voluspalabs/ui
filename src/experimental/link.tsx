// import { cn } from '@voluspalabs/lib/utils/cn'
// import { ArrowUpRight } from 'lucide-react'
// import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
// import { type ReactNode, forwardRef } from 'react'

// // TODO: Remove forwardRef and upgrade to Tailwind v4
// export interface LinkProps extends NextLinkProps {
//   className?: string
//   children?: ReactNode
//   hideArrow?: boolean
// }

// const Link = forwardRef<HTMLAnchorElement, LinkProps>(
//   ({ className, href, children, hideArrow, ...props }, ref) => {
//     const isInternal =
//       href?.toString().startsWith('/') || href?.toString().startsWith('#')
//     const externalLinkProps = isInternal
//       ? undefined
//       : { target: '_blank', rel: 'noreferrer' }

//     return (
//       <NextLink
//         className={cn(
//           'group text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground',
//           'rounded-md ring-offset-background focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2',
//           className,
//         )}
//         ref={ref}
//         href={href}
//         {...externalLinkProps}
//         {...props}
//       >
//         {children}
//         {!isInternal && !hideArrow ? (
//           <ArrowUpRight className="group-hover:-translate-y-px ml-0.5 inline-block h-4 w-4 text-muted-foreground group-hover:translate-x-px group-hover:text-foreground" />
//         ) : null}
//       </NextLink>
//     )
//   },
// )

// Link.displayName = 'Link'

// export { Link }

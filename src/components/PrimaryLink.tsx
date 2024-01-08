import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import React from 'react'

const PrimaryLink = ({
  children,
  href
}: {
  children: React.ReactNode,
  href: Url
}) => {
  return (
    <Link
      href={href}
      className="transition-colors tracking-wide text-base hover:text-primary-dark dark:hover:text-primary"
    >
      {children}
    </Link>
  )
}

export default PrimaryLink

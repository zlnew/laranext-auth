import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  display: 'swap',
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    template: '%s | Laranext Auth',
    default: 'Laranext Auth - Authentication Starter for Laravel and Next App'
  },
  description: 'Authentication starter powered with Laravel Sanctum and Next.js'
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

export default RootLayout

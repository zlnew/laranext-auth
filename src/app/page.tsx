import AppLogo from "@/components/AppLogo"
import PrimaryLink from "@/components/PrimaryLink"
import { Metadata } from "next"

export const metadata: Metadata = {}

type NavLink = {
  label: string,
  href: string
}

const Navigation = ({
  links
}: {
  links: NavLink[]
}) => {
  return (
    <ul className="flex justify-center gap-2">
      {links.map(({ href, label }) => {
        return (
          <li key={href}>
            <PrimaryLink href={href}>{label}</PrimaryLink>
          </li>
        )
      })}
    </ul>
  )
}

const Page = () => {
  const links: NavLink[] = [
    { label: 'Login', href: '/login' },
    { label: 'Register', href: '/register' }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">      
      <div className="flex flex-col items-center gap-2">
        <AppLogo />
        <p className="text-slate-300">Authentication starter powered with Laravel Sanctum and Next.js</p>
      </div>
      <Navigation links={links} />
    </main>
  )
}

export default Page

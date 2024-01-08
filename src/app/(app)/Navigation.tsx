'use client'

import Button from '@/components/Button'
import { useAuth } from '@/hooks/auth'
import Link from 'next/link'

const Navigation = () => {
  const { logout, mutate } = useAuth({ middleware: 'auth' })

  async function handleLogout () {
    logout().then(async () => {
      await mutate()
      window.location.reload()
    })
  }

  return (
    <nav className="bg-white dark:bg-fade border-b border-fade-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          <Link href={'/dashboard'} className="group flex items-end gap-2">
            <div className="text-xl">
              Lara
              <span
                className="transition-colors text-primary-dark dark:text-primary group-hover:text-primary dark:group-hover:text-primary-light"
              >
                Next
              </span>
            </div>
            <span className="tracking-widest text-xl text-slate-300">Auth</span>
          </Link>

          <div className="flex items-center justify-end">
            <Button
              label="Logout"
              className="text-danger hover:bg-dark"
              onClick={handleLogout}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

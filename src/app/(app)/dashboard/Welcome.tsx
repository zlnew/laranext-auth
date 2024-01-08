'use client'

import { useAuth } from "@/hooks/auth"

const Welcome = () => {
  const { user } = useAuth({ middleware: 'auth' })

  return (
    <div className="overflow-hidden shadow-sm rounded-lg">
      <div className="p-6 bg-white dark:bg-fade border-b border-fade">
        Welcome to dashboard, {user?.name}
      </div>
    </div>
  )
}

export default Welcome

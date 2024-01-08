import AppLogo from "@/components/AppLogo"
import React from "react"

const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 md:px-0">
      <AppLogo />

      <div className="md:w-96 rounded-md shadow-lg bg-white dark:bg-fade border border-fade">
        {children}
      </div>

      <footer>
        <p className="text-sm text-fade-light">
          Copyright 2023 <span className="text-white">LaraNuxt Auth</span>. All rights reserved
        </p>
      </footer>
    </main>
  )
}

export default AuthLayout

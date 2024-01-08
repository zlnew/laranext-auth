import React from "react"
import Navigation from "./Navigation"

const AppLayout = ({
  children
}: {
  children: React.ReactNode,
}) => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark">
      <Navigation />
      <main>{children}</main>
    </div>
  )
}

export default AppLayout

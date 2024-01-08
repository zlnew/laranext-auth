import { Metadata } from "next"
import Welcome from "./Welcome"

export const metadata: Metadata = {
  title: 'Dashboard'
}

const DashboardPage = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Welcome />
      </div>
    </div>
  )
}

export default DashboardPage

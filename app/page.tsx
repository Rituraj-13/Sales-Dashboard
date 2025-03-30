"use client"

import Dashboard from "@/components/dashboard"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Home() {
  const isMobile = useIsMobile()

  return (
    <div className={`${isMobile ? 'px-2' : 'px-4'}`}>
      <Dashboard />
    </div>
  )
}


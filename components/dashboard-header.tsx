"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DashboardHeaderProps {
  toggleSidebar: () => void
}

export default function DashboardHeader({ toggleSidebar }: DashboardHeaderProps) {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 md:px-6">
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="mr-2">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
        <h1 className="text-xl font-semibold">Sales Dashboard</h1>
      </div>
    </header>
  )
}


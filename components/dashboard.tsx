"use client"

import { useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import DashboardHeader from "@/components/dashboard-header"
import DashboardSidebar from "@/components/dashboard-sidebar"
import SalesOverview from "@/components/sales-overview"
import RevenueChart from "@/components/revenue-chart"
import SalesByCategory from "@/components/sales-by-category"
import RecentOrders from "@/components/recent-orders"
import { salesData } from "@/lib/data"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const isMobile = useIsMobile()

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="relative flex min-h-screen">
      {/* Overlay for mobile */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/50 transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <DashboardSidebar open={sidebarOpen} />

      <div className="flex-1 flex flex-col">
        <DashboardHeader toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background px-4 py-6 md:px-6">
          <div className="mx-auto space-y-6">
            <SalesOverview data={salesData.overview} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RevenueChart data={salesData.revenueData} />
              <SalesByCategory data={salesData.categoryData} />
            </div>
            <RecentOrders orders={salesData.recentOrders} />
          </div>
        </main>
      </div>
    </div>
  )
}


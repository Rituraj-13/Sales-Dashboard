"use client"

import { useState } from "react"
import DashboardHeader from "@/components/dashboard-header"
import DashboardSidebar from "@/components/dashboard-sidebar"
import SalesOverview from "@/components/sales-overview"
import RevenueChart from "@/components/revenue-chart"
import SalesByCategory from "@/components/sales-by-category"
import RecentOrders from "@/components/recent-orders"
import { salesData } from "@/lib/data"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar open={sidebarOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="space-y-6">
            <SalesOverview data={salesData.overview} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RevenueChart data={salesData.revenueData} />
              <SalesByCategory data={salesData.categoryData} />
            </div>
            
            // @ts-ignore
            <RecentOrders orders={salesData.recentOrders} />
          </div>
        </main>
      </div>
    </div>
  )
}


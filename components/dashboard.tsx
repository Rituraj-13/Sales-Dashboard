"use client"

import { useState } from "react"
import type { DateRange } from "react-day-picker"
import { addDays, format } from "date-fns"

import DashboardHeader from "@/components/dashboard-header"
import DashboardSidebar from "@/components/dashboard-sidebar"
import SalesOverview from "@/components/sales-overview"
import RevenueChart from "@/components/revenue-chart"
import SalesByCategory from "@/components/sales-by-category"
import RecentOrders from "@/components/recent-orders"
import { salesData } from "@/lib/data"

export default function Dashboard() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(new Date(), -30),
    to: new Date(),
  })

  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const dateRangeText =
    date?.from && date?.to ? `${format(date.from, "LLL dd, y")} - ${format(date.to, "LLL dd, y")}` : "Select date range"

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar open={sidebarOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader toggleSidebar={toggleSidebar} date={date} setDate={setDate} dateRangeText={dateRangeText} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="space-y-6">
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


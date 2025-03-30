import { ArrowDownIcon, ArrowUpIcon, DollarSign, ShoppingBag, Users, CreditCard } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface SalesOverviewProps {
  data: {
    totalRevenue: number
    revenueChange: number
    totalOrders: number
    ordersChange: number
    totalCustomers: number
    customersChange: number
    averageOrder: number
    averageOrderChange: number
  }
}

export default function SalesOverview({ data }: SalesOverviewProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("en-US").format(value)
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatCurrency(data.totalRevenue)}</div>
          <p className="text-xs text-muted-foreground flex items-center">
            {data.revenueChange > 0 ? (
              <ArrowUpIcon className="mr-1 h-4 w-4 text-emerald-500" />
            ) : (
              <ArrowDownIcon className="mr-1 h-4 w-4 text-rose-500" />
            )}
            <span className={cn(data.revenueChange > 0 ? "text-emerald-500" : "text-rose-500")}>
              {Math.abs(data.revenueChange)}%
            </span>
            <span className="ml-1">from last month</span>
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
          <ShoppingBag className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatNumber(data.totalOrders)}</div>
          <p className="text-xs text-muted-foreground flex items-center">
            {data.ordersChange > 0 ? (
              <ArrowUpIcon className="mr-1 h-4 w-4 text-emerald-500" />
            ) : (
              <ArrowDownIcon className="mr-1 h-4 w-4 text-rose-500" />
            )}
            <span className={cn(data.ordersChange > 0 ? "text-emerald-500" : "text-rose-500")}>
              {Math.abs(data.ordersChange)}%
            </span>
            <span className="ml-1">from last month</span>
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatNumber(data.totalCustomers)}</div>
          <p className="text-xs text-muted-foreground flex items-center">
            {data.customersChange > 0 ? (
              <ArrowUpIcon className="mr-1 h-4 w-4 text-emerald-500" />
            ) : (
              <ArrowDownIcon className="mr-1 h-4 w-4 text-rose-500" />
            )}
            <span className={cn(data.customersChange > 0 ? "text-emerald-500" : "text-rose-500")}>
              {Math.abs(data.customersChange)}%
            </span>
            <span className="ml-1">from last month</span>
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Order</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatCurrency(data.averageOrder)}</div>
          <p className="text-xs text-muted-foreground flex items-center">
            {data.averageOrderChange > 0 ? (
              <ArrowUpIcon className="mr-1 h-4 w-4 text-emerald-500" />
            ) : (
              <ArrowDownIcon className="mr-1 h-4 w-4 text-rose-500" />
            )}
            <span className={cn(data.averageOrderChange > 0 ? "text-emerald-500" : "text-rose-500")}>
              {Math.abs(data.averageOrderChange)}%
            </span>
            <span className="ml-1">from last month</span>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}


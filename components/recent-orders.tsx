import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Order {
  id: string
  customer: string
  product: string
  status: "completed" | "processing" | "failed"
  date: string
  amount: number
}

interface RecentOrdersProps {
  orders: Order[]
}

type SortOption = "date-desc" | "date-asc" | "price-desc" | "price-asc" | "status"

export default function RecentOrders({ orders }: RecentOrdersProps) {
  const [sortBy, setSortBy] = useState<SortOption>("date-desc")

  const sortedOrders = useMemo(() => {
    const ordersCopy = [...orders]
    switch (sortBy) {
      case "date-desc":
        return ordersCopy.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      case "date-asc":
        return ordersCopy.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      case "price-desc":
        return ordersCopy.sort((a, b) => b.amount - a.amount)
      case "price-asc":
        return ordersCopy.sort((a, b) => a.amount - b.amount)
      case "status":
        return ordersCopy.sort((a, b) => a.status.localeCompare(b.status))
      default:
        return ordersCopy
    }
  }, [orders, sortBy])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  }

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-100/80"
      case "processing":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100/80"
      case "failed":
        return "bg-rose-100 text-rose-800 hover:bg-rose-100/80"
      default:
        return ""
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest customer orders and their status</CardDescription>
          </div>
          <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date-desc">Date (Newest)</SelectItem>
              <SelectItem value="date-asc">Date (Oldest)</SelectItem>
              <SelectItem value="price-desc">Price (High-Low)</SelectItem>
              <SelectItem value="price-asc">Price (Low-High)</SelectItem>
              <SelectItem value="status">Status</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={cn(getStatusColor(order.status))}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell className="text-right">{formatCurrency(order.amount)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}


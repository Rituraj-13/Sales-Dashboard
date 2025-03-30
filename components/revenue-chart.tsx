"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { yearlyRevenueData } from "@/lib/data"
import { useIsMobile } from "@/hooks/use-mobile"

interface RevenueChartProps {
  data: Array<{
    name: string
    revenue: number
    profit: number
  }>
}

export default function RevenueChart({ data: initialData }: RevenueChartProps) {
  const [selectedYear, setSelectedYear] = useState<string>("2024")
  const isMobile = useIsMobile()
  // @ts-ignore
  const data = yearlyRevenueData[selectedYear as keyof typeof yearlyRevenueData]

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "hsl(var(--chart-1))",
    },
    profit: {
      label: "Profit",
      color: "hsl(var(--chart-2))",
    },
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <Card>
      <CardHeader>
        <div className={`flex items-center ${isMobile ? 'flex-col space-y-4' : 'justify-between'}`}>
          <div>
            <CardTitle className={isMobile ? 'text-center' : ''}>Revenue & Profit</CardTitle>
            <CardDescription className={isMobile ? 'text-center' : ''}>Monthly revenue and profit trends</CardDescription>
          </div>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-[100px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className={`w-full ${isMobile ? 'min-h-[250px]' : 'min-h-[300px]'}`}>
          <AreaChart
            data={data}
            margin={isMobile ?
              { top: 10, right: 10, left: -20, bottom: 0 } :
              { top: 10, right: 10, left: 0, bottom: 0 }
            }
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: isMobile ? 10 : 12 }}
              interval={isMobile ? 1 : 0}
            />
            <YAxis
              tickFormatter={(value) => `$${value}k`}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: isMobile ? 10 : 12 }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="hsl(var(--chart-1))"
              fill="hsl(var(--chart-1) / 0.2)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="profit"
              stroke="hsl(var(--chart-2))"
              fill="hsl(var(--chart-2) / 0.2)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}


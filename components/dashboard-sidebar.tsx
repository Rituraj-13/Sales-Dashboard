import { Home, BarChart3, Users, ShoppingCart, Settings, HelpCircle, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

interface DashboardSidebarProps {
  open: boolean
}

export default function DashboardSidebar({ open }: DashboardSidebarProps) {
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-10 w-64 transform bg-card border-r shadow-sm transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
        open ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="flex h-16 items-center border-b px-6">
        <h2 className="text-lg font-semibold">SalesPro</h2>
      </div>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h3 className="text-xs font-medium text-muted-foreground tracking-wider uppercase pl-4">Main</h3>
            <nav className="space-y-1">
              <a
                href="#"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium bg-primary/10 text-primary"
              >
                <Home className="mr-3 h-4 w-4" />
                Dashboard
              </a>
              <a
                href="#"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <BarChart3 className="mr-3 h-4 w-4" />
                Analytics
              </a>
              <a
                href="#"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <Users className="mr-3 h-4 w-4" />
                Customers
              </a>
              <a
                href="#"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <ShoppingCart className="mr-3 h-4 w-4" />
                Orders
              </a>
            </nav>
          </div>
        </div>
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h3 className="text-xs font-medium text-muted-foreground tracking-wider uppercase pl-4">Settings</h3>
            <nav className="space-y-1">
              <a
                href="#"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <Settings className="mr-3 h-4 w-4" />
                Settings
              </a>
              <a
                href="#"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <HelpCircle className="mr-3 h-4 w-4" />
                Help & Support
              </a>
              <a
                href="#"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <LogOut className="mr-3 h-4 w-4" />
                Logout
              </a>
            </nav>
          </div>
        </div>
      </div>
    </aside>
  )
}


import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import TabBar from "@/components/ui/tabBar"
import VisitCounter from "@/utils/visitCounter"


export default function Layout({ children }: { children: React.ReactNode }) {
  
  
  return (<>
    <SidebarProvider>
      <AppSidebar />
      <main className="referenceLayoutMain">
        <TabBar />
        <VisitCounter/>
        {children}
      </main>
    </SidebarProvider>
  </>
  )
}

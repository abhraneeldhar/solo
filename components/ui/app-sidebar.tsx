import { Calendar, Home, Inbox, Search, Settings, Smartphone, Star } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import Image from "next/image"
import solodev from "../../public/ninja.png"

import styles from "./sidebar.module.css"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible"
import { Sheet, SheetDescription, SheetHeader, SheetTitle } from "./sheet"

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <a href="/">
          <div className={styles.sidebarHeader}>
            <Image src={solodev} alt="" />
            <h1>solo <span>Dev</span></h1>
          </div>
        </a>
      </SidebarHeader>
      <SidebarContent>

        <SidebarGroup>
          <SidebarGroupContent>
            <Collapsible defaultOpen className="group/collapsible">
              <CollapsibleTrigger asChild>
                <SidebarMenuButton><Star color="gold" />Popular</SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      Python
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      Javascript
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroupContent>
        </SidebarGroup>


        <SidebarGroup>
          <SidebarMenuButton><Smartphone color="#08f8a9" />Reference</SidebarMenuButton>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

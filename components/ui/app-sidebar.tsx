"use client"
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
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { ScrollArea, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport, Thumb } from "@radix-ui/react-scroll-area"
import { ScrollBar } from "./scroll-area"
import { Separator } from "@radix-ui/react-separator"



export function AppSidebar() {

  // const topic2 = document.getElementsByClassName("topic2");
  const [sidebarMenu, setSidebarMenu] = useState<string[]>([])
  // useEffect(() => {
  //   for (let i = 0; i < topic2.length; i++) {
  //     setSidebarMenu((e) => [...e, topic2[i].textContent || ""])
  //   }
  // }, [])

  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  )
  
  return (
    <Sidebar className={styles.sidebarMain}>
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
            <ScrollArea className="h-72 w-48 rounded-md border">
              <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                {tags.map((tag) => (
                  <>
                    <div key={tag} className="text-sm">
                      {tag}
                    </div>
                    <Separator className="my-2" />
                  </>
                ))}
              </div>
            </ScrollArea>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

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
  SidebarSeparator,
} from "@/components/ui/sidebar"

import Image from "next/image"
import solodev from "../../public/ninja.png"

import styles from "./sidebar.module.css"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible"
import { Sheet, SheetDescription, SheetHeader, SheetTitle } from "./sheet"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { ScrollArea, ScrollBar } from "./scroll-area"
import { Separator } from "@radix-ui/react-separator"



export function AppSidebar() {

  const [sidebarMenu, setSidebarMenu] = useState<string[]>([])
  useEffect(() => {
    const topic2 = document.getElementsByClassName("topic1");
    for (let i = 0; i < topic2.length; i++) {
      setSidebarMenu((e) => [...e, topic2[i].textContent || ""])
    }
  }, [])


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
            <ScrollArea className={`h-[60vh] ${styles.referenceScroll}`}>
              <SidebarMenu>

                {sidebarMenu.map((topic) => (<>
                  <SidebarMenuItem className={styles.referenceOption}>{topic}</SidebarMenuItem>
                  <SidebarSeparator/>
                </>))}

              </SidebarMenu>
            </ScrollArea>


          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

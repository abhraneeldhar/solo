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
  useSidebar,
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

  const [sidebarMenu, setSidebarMenu] = useState<{ title: string, id: string }[]>([])
  useEffect(() => {
    const topic2 = document.getElementsByClassName("topic1");
    for (let i = 0; i < topic2.length; i++) {
      setSidebarMenu((e) => [...e, { title: topic2[i].textContent || "", id: topic2[i].id || "" }])
    }

  }, [])


  const {isMobile,
    toggleSidebar}=useSidebar();
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
            <div className="flex items-center gap-[5px] m-[5px]">
              <Star color="gold" size={20} />Popular
            </div>
              <SidebarMenuButton>
                Python
              </SidebarMenuButton>
              <SidebarMenuButton>
                Javascript
              </SidebarMenuButton>
          </SidebarGroupContent>
        </SidebarGroup>


        <SidebarGroup>
          <div className="flex items-center gap-[5px] m-[5px]"
          >
            <Smartphone color="#08f8a9" size={20} />Reference
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              <ScrollArea key={1} className={`h-[55vh] ${styles.referenceScroll}`}>

                {sidebarMenu.map((topic, index) => (<>
                  {index > 0 && <SidebarSeparator key={Math.random()} />}
                  <a onClick={()=>{
                    if(isMobile){
                      toggleSidebar();
                  }}} key={Math.random()} href={`#${topic.id}`}>
                    <SidebarMenuItem className={styles.referenceOption}>
                      {topic.title}
                    </SidebarMenuItem>
                  </a>
                </>))}
              </ScrollArea>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

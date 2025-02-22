"use client"
import { Calendar, ChevronUp, Home, Inbox, Search, Settings, Smartphone, Star, User2 } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
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
import { supabase } from "@/utils/supabase/client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu"



export function AppSidebar() {

  const [sidebarMenu, setSidebarMenu] = useState<{ title: string, id: string }[]>([])
  useEffect(() => {
    const topic2 = document.getElementsByClassName("topic1");
    for (let i = 0; i < topic2.length; i++) {
      setSidebarMenu((e) => [...e, { title: topic2[i].textContent || "", id: topic2[i].id || "" }])
    }

  }, [])


  const [toplang, setTopLang] = useState<{ id: number, pageName: string, visits: string }[] | null>(null)
  useEffect(() => {
    const getTopLanguages = async () => {

      const { data, error } = await supabase
        .from('siteVisits')
        .select('*')
        .neq('pageName', 'home')
        .order('visits', { ascending: false })
        .limit(3);
      if (data) {
        setTopLang(data);
      }
    }
    getTopLanguages();
  }, []);


  const [favPages, setFavPage] = useState<string[]>([]);
  useEffect(() => {
    const storedFavPages = localStorage.getItem("favPages");
    if (storedFavPages) {
      try {
        const parsedFavPages = JSON.parse(storedFavPages);
        setFavPage(parsedFavPages.pages || []);
      } catch (error) {
        console.error("Error :", error);
        setFavPage([]);
      }
    } else {
      setFavPage([]);
    }
  }, []);

  const { isMobile,
    toggleSidebar } = useSidebar();
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

        {toplang && (
          <SidebarGroup>
            <SidebarGroupContent>
              <div className="flex items-center gap-[5px] m-[5px]">
                <Star color="gold" size={20} />Popular
              </div>
              {toplang.map((lang, index) => (
                <a href={`/${lang.pageName}`}>
                  <SidebarMenuButton className="focus:outline-none" key={index}>{lang.pageName.charAt(0).toUpperCase() + lang.pageName.slice(1)}</SidebarMenuButton>
                </a>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        )}

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
                  <a onClick={() => {
                    if (isMobile) {
                      toggleSidebar();
                    }
                  }} key={Math.random()} href={`#${topic.id}`}>
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



      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Star fill="gold" color="gold" /> Favourites
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                {favPages.map((page, index) => (
                  <a key={index} href={`/${page.toLowerCase()}`}>
                    <DropdownMenuItem >
                      {page}
                    </DropdownMenuItem>
                  </a>
                ))}


              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>




    </Sidebar>
  )
}

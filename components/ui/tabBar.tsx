"use client"
import { Menu } from "lucide-react";
import { useSidebar } from "./sidebar";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function TabBar(){
    const router = useRouter();
    const pathname = usePathname();
    const { toggleSidebar}=useSidebar();
    return(<>
        <div className="tabBarMain"><Menu onClick={()=>{toggleSidebar();}}/><h1>{pathname.charAt(1).toUpperCase() + pathname.slice(2)}</h1></div>
    </>)
}
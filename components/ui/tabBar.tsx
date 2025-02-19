"use client"
import { Menu } from "lucide-react";
import { useSidebar } from "./sidebar";
export default function TabBar(){
    const { toggleSidebar}=useSidebar();
    return(<>
        <div className="tabBarMain"><Menu onClick={()=>{toggleSidebar();}}/><h1>Home</h1></div>
    </>)
}
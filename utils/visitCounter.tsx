"use client"

import { useEffect } from "react"
import { supabase } from "./supabase/client"
import { usePathname } from "next/navigation"

export default function VisitCounter() {
    const pathName=usePathname();
    const pageName = pathName === "/" ? "home" : pathName.replace("/", "");
    useEffect(() => {

        const increment = async () => {

            const { data: currentVisists } = await supabase
                .from('siteVisits').select('visits').eq('pageName', pageName);

            if (currentVisists) {

                const { error } = await supabase
                    .from('siteVisits')
                    .update({ visits: Number(currentVisists[0].visits)+1 })
                    .eq('pageName', pageName)
            }
        }
        increment();
    }, [])
    return (<></>)
} 


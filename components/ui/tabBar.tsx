"use client"
import { Menu, Star } from "lucide-react";
import { useSidebar } from "./sidebar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function TabBar() {
    const path = usePathname();
    const pathName = path.charAt(1).toUpperCase() + path.slice(2)
    const { toggleSidebar } = useSidebar();


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



    const removeFromFav = () => {
        const index = favPages?.indexOf(pathName);
        if (index > -1) {
            let a = favPages;
            a.splice(index, 1);
            localStorage.setItem("favPages", JSON.stringify({ pages: a }));
            if (pathName && favPages.includes(pathName)) {
                setFavPage(currentFavPages => {
                    return currentFavPages.filter(page => page !== pathName);
                });
            }
        }
    }

    const addToFav = () => {
        let a = favPages;
        a.push(pathName);
        localStorage.setItem("favPages", JSON.stringify({ pages: a }));
        setFavPage(currentFavPages => {
            return [...currentFavPages, pathName];
        });
    }






    return (<>
        <div className="tabBarMain">
            <Menu onClick={() => { toggleSidebar(); }} /><h1>{pathName}</h1>
        </div>
        {favPages?.includes(pathName) && (<Star onClick={async () => { removeFromFav(); }} className="favStarIcon" size={30} color="gold" fill="gold" />)}

        {!favPages?.includes(pathName) && (<Star onClick={async () => { addToFav(); }} className="favStarIcon" size={30} color="gold" />)}
    </>)
}
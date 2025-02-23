import { supabase } from "@/utils/supabase/client";
import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default async function InfoRightSide() {
    const { data: topLang, error } = await supabase
        .from('siteVisits')
        .select('*')
        .neq('pageName', 'home')
        .order('visits', { ascending: false });

    return (<>
        <div className="infoRightSideMain">
            <div>
                <h1>Why Solo Dev?</h1>
                <p>This reference website is <strong>not</strong> for beginners<br />Solo Dev is <strong>strictly</strong> for devs who already know the game and need a beautiful cheat sheet on their second monitor which looks better than GeeksforGeeks</p>
                <i><br/>this portion goes away when you shrink the screen {`;)`}</i>
            </div>

            <div className="favLang">
                <h2>Our popular languages:</h2>
                {topLang?.map((lang, index) => (
                    <p key={index}><a href={`/${lang.pageName}`}><strong>{lang.pageName.charAt(0).toUpperCase() + lang.pageName.slice(1)}</strong></a> - {lang.visits} visits</p>
                ))}
            </div>

            <div className="about">
                <h2>Support SoloDev</h2>
                <div className="socialsLinks">
                    <a href="https://linkedin.com/in/abhraneeldhar/" target="_blank">
                        <div className="oneLink"><Linkedin />abhraneeldhar</div>
                    </a>
                    <a href="https://github.com/abhraneeldhar" target="_blank">
                        <div className="oneLink"><Github />abhraneeldhar</div>
                    </a>
                    <a href="https://www.instagram.com/abhraneeldhar" target="_blank">
                        <div className="oneLink"><Instagram />abhraneeldhar</div>
                    </a>
                    <a href="https://x.com/abhraneeldhar" target="_blank">
                        <div className="oneLink"><Twitter />abhraneeldhar</div>
                    </a>
                    <a href="https://www.youtube.com/@bonk.sensei" target="_blank">
                        <div className="oneLink"><Youtube />bonk.sensei</div>
                    </a>
                </div>
            </div>
        </div>
    </>)
}

export const fetchCache = "force-no-store";
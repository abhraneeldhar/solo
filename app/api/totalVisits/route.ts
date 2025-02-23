import { supabase } from "@/utils/supabase/client";
import { NextApiRequest, NextApiResponse } from "next";


export default async function TotalVisits(req: NextApiRequest, res: NextApiResponse) {
    const { data: totalVisits, error } = await supabase.from(`siteVisits`).select("visits");
    console.log(totalVisits);
    if (totalVisits) {
        let totalVisitsNumber = 0;
        for (let i = 0; i < totalVisits.length; i++) {
            totalVisitsNumber += totalVisits[i].visits;
        }
        return res.status(200).json({ totalVisitsNumber });
    }
    else {
        return (null)
    }
}

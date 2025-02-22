import { supabase } from "./supabase/client";
export async function totalVisits():Promise<number|null>{
    const {data:totalVisits,error}=await supabase.from(`siteVisits`).select("visits");
    console.log(totalVisits);
    if(totalVisits){
        let totalVisitsNumber=0;
        for(let i=0;i<totalVisits.length;i++){
            totalVisitsNumber+=totalVisits[i].visits;
        }
        return(totalVisitsNumber);
    }
    else{
        return(null)
    }
}
import styles from "./home.module.css"
import Image from "next/image"

import ninja from "../public/ninja.png"
import { totalVisits } from "@/utils/totalVisits"
import HomepageLangCards from "@/components/ui/homepageLangCards"


export default async function Home() {

  const totalVisitsNumber = await totalVisits();


  return (<>
    <div className={styles.homemain}>
      <div className={styles.visits}><Image className={styles.ninja} src={ninja} alt="" /><h1>{totalVisitsNumber} visits</h1></div>
      <h1 className={styles.bigHeader}>solo <span>Dev</span></h1>
      <p className={styles.headerPara}>Quick cheat sheets for popular programming languages and frameworks<br /> For and by one man teams</p>

      <HomepageLangCards />


    </div>
  </>)
}

export const fetchCache = "force-no-store";
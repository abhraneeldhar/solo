import { Input } from "@/components/ui/input"
import styles from "./home.module.css"
import { Terminal } from "lucide-react"
import python from "../public/languageLogos/python.png"
import Image from "next/image"
export default function Home() {
  return (<>
  <div className={styles.homemain}>
    <h1 className={styles.bigHeader}>solo <span>Dev</span></h1>
    <p className={styles.headerPara}>Quick reference guides for popular programming languages and frameworks.<br/> Master your tools with comprehensive cheatsheets</p>
    <input className={styles.searchInput} placeholder="Search for popular languages and frameworks..."/>

    <div className={styles.languageCardHolder}>
      <div className={styles.languageCard}>
        <Terminal className={styles.terminalIcon}/>
        <div className={styles.logo}>
          <Image src={python} alt="py" />
        </div>
        <h1>Python</h1>
      </div>
    </div>
  </div>
  </>)
}
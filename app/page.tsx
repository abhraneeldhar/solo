import { Input } from "@/components/ui/input"
import styles from "./home.module.css"
import { Terminal } from "lucide-react"
import Image, { StaticImageData } from "next/image"

// import python from "../public/languageLogos/python.png"
// import javascript from "../public/languageLogos/javascript.png"
// import css from "../public/languageLogos/css.png"
// import html from "../public/languageLogos/html.png"
// import typescript from "../public/languageLogos/typescript.png"
// import nextjs from "../public/languageLogos/nextjs.png"
import ninja from "../public/ninja.png"
import { supabase } from "@/utils/supabase/client"
import { useEffect } from "react"
import VisitCounter from "@/utils/visitCounter"
import { totalVisits } from "@/utils/totalVisits"
import HomepageLangCards from "@/components/ui/homepageLangCards"

// interface cardDetailType {
//   name: string,
//   image: StaticImageData,
//   alt: string,
//   link: string
// }

export default async function Home() {



  // const cards: cardDetailType[] = [{
  //   name: "Python",
  //   image: python,
  //   alt: "py",
  //   link: "python"
  // }, {
  //   name: "Javascript",
  //   image: javascript,
  //   alt: "js",
  //   link: "javascript"
  // },
  // {
  //   name: "CSS",
  //   image: css,
  //   alt: "css",
  //   link: "css"
  // },
  // {
  //   name: "HTML",
  //   image: html,
  //   alt: "html",
  //   link: "html"
  // },
  // {
  //   name: "TypeScript",
  //   image: typescript,
  //   alt: "ts",
  //   link: "typescript"
  // }
  //   // {
  //   //   name: "NEXTjs",
  //   //   image: nextjs,
  //   //   alt: "next",
  //   //   link: "nextjs"
  //   // }
  // ]


  const totalVisitsNumber: any = await totalVisits();


  return (<>
    <div className={styles.homemain}>
      <div className={styles.visits}><Image className={styles.ninja} src={ninja} alt="" /><h1>{totalVisitsNumber} visits</h1></div>
      <h1 className={styles.bigHeader}>solo <span>Dev</span></h1>
      <p className={styles.headerPara}>Quick cheat sheets for popular programming languages and frameworks<br /> For and by one man teams</p>

      <HomepageLangCards />


    </div>
  </>)
}
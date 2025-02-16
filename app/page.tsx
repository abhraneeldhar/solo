import { Input } from "@/components/ui/input"
import styles from "./home.module.css"
import { Terminal } from "lucide-react"
import Image, { StaticImageData } from "next/image"

import python from "../public/languageLogos/python.png"
import javascript from "../public/languageLogos/javascript.png"
import css from "../public/languageLogos/css.png"
import html from "../public/languageLogos/html.png"
import nextjs from "../public/languageLogos/nextjs.png"
interface cardDetailType {
  name: string,
  image: StaticImageData,
  alt: string
}

export default function Home() {
  const cards: cardDetailType[] = [{
    name: "Python",
    image: python,
    alt: "py"
  }, {
    name: "Javascript",
    image: javascript,
    alt: "js"
  },
  {
    name:"CSS",
    image:css,
    alt:"css"
  },
  {
    name:"HTML",
    image:html,
    alt:"html"
  }, {
    name:"NEXTjs",
    image:nextjs,
    alt:"next"
  } 
]

  const DisplayCard = ({ cardInfo }: { cardInfo: cardDetailType }) => {
    return (<>
      <div className={`${styles.languageCard} ${styles[cardInfo.name]}`}>
        <div className={styles.terminalIconDiv} >
          <Terminal className={styles.terminalIcon} />
        </div>
        <div className={styles.logo}>
          <Image unoptimized src={cardInfo.image} alt={cardInfo.alt} />
        </div>
        <h1>{cardInfo.name}</h1>
      </div>
    </>)
  }
  return (<>
    <div className={styles.homemain}>
      <h1 className={styles.bigHeader}>solo <span>Dev</span></h1>
      <p className={styles.headerPara}>Quick reference guides for popular programming languages and frameworks.<br /> For devs with noob batchmates</p>
      <input className={styles.searchInput} placeholder="Search for popular languages and frameworks..." />

      <div className={styles.languageCardHolder}>

        {cards.map((cardInfo) => (<DisplayCard key={cardInfo.name} cardInfo={cardInfo} />))}

      </div>
    </div>
  </>)
}
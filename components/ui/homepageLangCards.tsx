"use client"
import Image, { StaticImageData } from "next/image"
import styles from "../../app/home.module.css"
import { Terminal } from "lucide-react"


import python from "../../public/languageLogos/python.png"
import javascript from "../../public/languageLogos/javascript.png"
import css from "../../public/languageLogos/css.png"
import html from "../../public/languageLogos/html.png"
import typescript from "../../public/languageLogos/typescript.png"
import nextjs from "../../public/languageLogos/nextjs.png"
import { ChangeEvent, useEffect, useRef, useState } from "react"


interface cardDetailType {
    name: string,
    image: StaticImageData,
    alt: string,
    link: string
}

export default function HomepageLangCards() {

    const cards: cardDetailType[] = [{
        name: "Python",
        image: python,
        alt: "py",
        link: "python"
    }, {
        name: "Javascript",
        image: javascript,
        alt: "js",
        link: "javascript"
    },
    {
        name: "CSS",
        image: css,
        alt: "css",
        link: "css"
    },
    {
        name: "HTML",
        image: html,
        alt: "html",
        link: "html"
    },
    {
        name: "TypeScript",
        image: typescript,
        alt: "ts",
        link: "typescript"
    }
        // {
        //   name: "NEXTjs",
        //   image: nextjs,
        //   alt: "next",
        //   link: "nextjs"
        // }
    ]


    const DisplayCard = ({ cardInfo }: { cardInfo: cardDetailType }) => {
        return (<>
            <a href={cardInfo.link}>

                <div className={`${styles.languageCard} ${styles[cardInfo.name]}`}>
                    <div className={styles.terminalIconDiv} >
                        <Terminal className={styles.terminalIcon} />
                    </div>
                    <div className={styles.logo}>
                        <Image unoptimized src={cardInfo.image} alt={cardInfo.alt} />
                    </div>
                    <h1>{cardInfo.name}</h1>
                </div>
            </a>
        </>)
    }

    const [displayCards, setDisplayCards] = useState(cards);
    const changeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value == "" || e.target.value == " ") {
            setDisplayCards(cards);
        }
        else {
            for (let i = 0; i < cards.length; i++) {
                if (cards[i].name.toLowerCase().includes(e.target.value.toLowerCase())) {
                    setDisplayCards([cards[i]]);
                }
            }
        }
    }

        return (<>
            <input className={styles.searchInput} placeholder="Search for popular languages and frameworks..." onChange={(e) => { changeHandle(e); }} />

            <div className={styles.languageCardHolder}>
                {displayCards.map((cardInfo) => (<DisplayCard key={cardInfo.name} cardInfo={cardInfo} />))}
            </div>
        </>)
}
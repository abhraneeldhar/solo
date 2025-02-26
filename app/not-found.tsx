import Image from "next/image"
import img404 from "../public/404_img.png"
export default function NotFoundPage(){
    return(<>
    <div className="notFoundMain">
        <Image src={img404} alt="404"/>
        <h1>Sir they trynna visit forbidden pages</h1>
    </div>
    </>)
}
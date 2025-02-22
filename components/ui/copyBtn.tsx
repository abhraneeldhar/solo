"use client"
import { Copy } from "lucide-react";
export default function CopyBtn({text}:{text:string}) {
    function copyToClipboard(text: string){
        navigator.clipboard.writeText(text)
      }
    return(<>
                <button onClick={()=>{copyToClipboard(text);}} className="copyCodeBtn"><Copy className="copyIcon"/><span>Copy Code</span></button>
    </>)
    
}
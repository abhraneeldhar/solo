import { Copy } from "lucide-react";
import CopyBtn from "./copyBtn";

export default function CodeSnippet({ code }: { code: string }) {
    
    return (<>
        <pre className="codeSnippetMain">
            <CopyBtn text={code}/>
            {/* <button className="copyCodeBtn"><Copy className="copyIcon"/><span>Copy Code</span></button> */}
            {/* <code className="snippetText"> */}
                {code}
            {/* </code> */}
        </pre>
    </>)
}
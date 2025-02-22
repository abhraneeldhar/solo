import { Copy } from "lucide-react";
import CopyBtn from "./copyBtn";

export default function CodeSnippet({ code }: { code: string }) {

    return (<>
        <pre className="codeSnippetMain">
            <CopyBtn text={code} />
            {code}
        </pre>
    </>)
}
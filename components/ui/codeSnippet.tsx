import { Copy } from "lucide-react";

export default function CodeSnippet({ code }: { code: string }) {
    return (<>
        <pre className="codeSnippetMain">
            <button className="copyCodeBtn"><Copy className="copyIcon"/><span>Copy Code</span></button>
            {/* <code className="snippetText"> */}
                {code}
            {/* </code> */}
        </pre>
    </>)
}
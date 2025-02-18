import { Copy } from "lucide-react";

export default function CodeSnippet({ code }: { code: string }) {
    return (<>
        <pre className="codeSnippetMain">
            <button className="copyCodeBtn"><Copy className="copyIcon"/>Copy Code</button>
            {/* <code className="snippetText"> */}
                {code}
            {/* </code> */}
        </pre>
    </>)
}
import CodeSnippet from "@/components/ui/codeSnippet";
import { CheckCheck, ChevronRight } from "lucide-react";

export default function PythonPage() {


    return (<>
        <div className="referenceMain">
            <h1 className="header">Python</h1>
            <hr className="ruleTypeShi" />

            <h1 className="topic1">Common Errors</h1>

            <h1 className="topic2"><CheckCheck />IndentationError</h1>

            <div className="textSection">
                <strong>Cause :</strong> Inconsistent spaces/tabs in indentation<br />
                <strong>Fix : </strong> Use 4 spaces per indent (PEP 8 standard)

                <CodeSnippet code={
                    `# ❌ Wrong
def hello():
      print("Hello") 
      # Mixed tab and space

# ✅ Correct
def hello():
    print("Hello")`} />

            </div>

            <h1 className="topic2"><CheckCheck /> TypeError: 'NoneType' object is not subscriptable</h1>

            <div className="textSection">
                <strong>Cause : </strong> Trying to index a function that returns None<br />
                <strong>Fix :</strong> Ensure the function actually returns a list/dict

                <CodeSnippet code={
`def get_data():
    return None

data = get_data()
print(data[0])  # ❌ TypeError

# ✅ Fix
if data:
    print(data[0])`
                } />
            </div>

            <h1 className="topic1">Common Operations</h1>









        </div></>)
}

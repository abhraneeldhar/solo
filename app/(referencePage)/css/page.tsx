import CodeSnippet from "@/components/ui/codeSnippet";
import { CheckCheck } from "lucide-react";
import Image from "next/image";
import boxModel from "../../../public/boxModel.jpg"
export default function CSS() {
    return (<>
        <div className="referenceMain">
            <h1 className="header">CSS</h1>
            <hr className="ruleTypeShi" />

            <h1 id="basics" className="topic1">CSS Basics</h1>
            <h1 className="topic2"><CheckCheck />Syntax</h1>
            <div className="textSection">

                <CodeSnippet code={
                    `selector {  
    property: value;  
}  `
                } />
            </div>
            <h1 className="topic2"><CheckCheck />Selectors</h1>
            <div className="textSection">
                <p><strong>Element</strong> div, Class ., ID # <br />
                    <strong>Pseudo-classes</strong> :hover, :nth-child()</p>
            </div>
            <h1 className="topic2"><CheckCheck />Specificity</h1>
            <div className="textSection">
                <p><strong>Hierarchy:</strong> Inline {`>`} ID {`>`} Class {`>`} Element</p>
            </div>
            <h1 className="topic2"><CheckCheck />Comments</h1>
            <div className="textSection">
                <CodeSnippet code={"/* This is a comment */  "} />
            </div>
            <h1 className="topic2"><CheckCheck />Box Model</h1>
            <div className="textSection">
                <Image className="m-[20px]" src={boxModel} height={300} width={500} alt="boxModelPic" />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="layout" className="topic1">Layout & Positioning</h1>
            <h1 className="topic2"><CheckCheck />Flexbox</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `.container {  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  gap: 1rem;  
}  `
                } />
            </div>
            <h1 className="topic2"><CheckCheck />Grid</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `.grid {  
  display: grid;  
  grid-template-columns: repeat(3, 1fr);  
  grid-gap: 20px;  
}  `
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="media" className="topic1">Media Queries</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `@media (max-width: 768px) { ... }  `
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="animations" className="topic1">Animations</h1>
            <h1 className="topic2"><CheckCheck />Keyframes</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `@keyframes slide {  
  0% { transform: translateX(-100%); }  
  100% { transform: translateX(0); }  
}  `
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="var" className="topic1">Variables</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `:root {  
  --primary-color: #2196F3;  
}  
.element {  
  color: var(--primary-color);  
}  `
                } />
            </div>




        </div>
    </>)
}
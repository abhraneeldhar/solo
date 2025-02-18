import CodeSnippet from "@/components/ui/codeSnippet";
import { CheckCheck } from "lucide-react";

export default function CSS() {
    return (<>
        <div className="referenceMain">
            <h1 className="header">Javascript</h1>
            <hr className="ruleTypeShi" />

            <h1 className="topic1">Common Errors</h1>

            <h1 className="topic2"><CheckCheck />Specificity Wars</h1>
            <div className="textSection">
                <strong>Issue:</strong> Styles not applying due to specificity conflicts<br />
                <strong>Fix:</strong> Use !important sparingly, leverage cascade hierarchy
                <CodeSnippet code={
                    `/* ❌ Inline style overrides */
<div style="color: red" class="blue-text">

/* ✅ Proper specificity management */
.blue-text { color: blue !important; }`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Box Model Surprises</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `/* ❌ Unaccounted borders/padding */
div { width: 100%; padding: 20px; } 

/* ✅ Border-box sizing */
* { box-sizing: border-box; }`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 className="topic1">Syntax & Basics</h1>

            <h1 className="topic2"><CheckCheck />Selectors</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `.class-selector { ... }
#id-selector { ... }
element { ... }
[data-attr] { ... }

/* Combinators */
.parent > .child { ... }
.sibling + .adjacent { ... }
.group1, .group2 { ... }`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Box Model</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `margin: 10px 5px 15px 0;
padding: 1em 2em;
border: 2px solid #333;
outline: 1px dashed red;`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Units</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `width: 100px;      /* Absolute */
font-size: 1.2rem;   /* Root-relative */
height: 50vh;        /* Viewport-based */
padding: 2em;        /* Element-relative */`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 className="topic1">Layout Techniques</h1>

            <h1 className="topic2"><CheckCheck />Flexbox</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.item {
    flex: 1 0 200px;
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />CSS Grid</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 20px;
}

.grid-item {
    grid-column: span 2;
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Centering Elements</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `/* Modern */
.center {
    display: grid;
    place-items: center;
}

/* Legacy */
.old-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 className="topic1">Responsive Design</h1>

            <h1 className="topic2"><CheckCheck />Media Queries</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `@media (min-width: 768px) { ... }
@media (orientation: portrait) { ... }
@media (hover: hover) { ... }  /* Touch detection */`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Fluid Layouts</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `width: min(100%, 1200px);
font-size: clamp(1rem, 2vw, 1.5rem);
height: calc(100vh - 60px);`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 className="topic1">Animations & Transitions</h1>

            <h1 className="topic2"><CheckCheck />Keyframe Animations</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `@keyframes slide {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0); }
}

.element {
    animation: slide 0.3s ease-out;
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Transitions</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `.button {
    transition: all 0.2s ease-in-out;
    transition-property: background-color, transform;
}

.button:hover {
    transform: scale(1.05);
}`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 className="topic1">CSS Variables</h1>

            <h1 className="topic2"><CheckCheck />Custom Properties</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `:root {
    --primary-color: #2196F3;
    --spacing-unit: 8px;
}

.element {
    color: var(--primary-color);
    margin: calc(var(--spacing-unit) * 2);
}`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 className="topic1">Best Practices</h1>

            <h1 className="topic2"><CheckCheck />BEM Naming</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `.block { ... }
.block__element { ... }
.block--modifier { ... }`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Performance Tips</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `/* Avoid */
* { box-shadow: ...; }

/* Prefer */
will-change: transform;
contain: strict;
content-visibility: auto;`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Mobile-First Approach</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `/* Base styles (mobile) */
.container { padding: 1rem; }

/* Desktop overrides */
@media (min-width: 1024px) {
    .container { padding: 2rem; }
}`
                } />
            </div>

        </div>
    </>)
}
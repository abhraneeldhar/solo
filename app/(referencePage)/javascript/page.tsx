import CodeSnippet from "@/components/ui/codeSnippet";
import { CheckCheck } from "lucide-react";

export default function Javascript() {
    return (<>
        <div className="referenceMain">
            <h1 className="header">Javascript</h1>
            <hr className="ruleTypeShi" />

            <h1 id="syntax" className="topic1">Syntax & Basics</h1>

            <h1 className="topic2"><CheckCheck/>Variables</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 📦 Variable declarations
let mutableVar = 10;       // Block-scoped, reassignable
const immutableVar = 20;   // Block-scoped, constant
var functionScoped = 30;   // ⚠️ Avoid (hoisting, function scope)`
                } />
            </div>

            <h1 className="topic2"><CheckCheck/>Data Types</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🏷️ Primitive types
const str = "text";
const num = 42;
const bool = true;
const nullVal = null;
const undefinedVal = undefined;
const symbol = Symbol('id');

// 🧩 Reference types
const obj = {a: 1};
const arr = [1, 2, 3];
const func = () => {};`
                } />
            </div>

            <h1 className="topic2"><CheckCheck/>Conditionals</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🤔 Decision making
if (score > 90) {
    grade = 'A';
} else if (score > 75) {
    grade = 'B';
} else {
    grade = 'C';
}

// 🔀 Switch statement
switch(day) {
    case 1: console.log('Monday'); break;
    default: console.log('Unknown'); break;
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck/>Loops</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔄 Iteration methods
for (let i=0; i<5; i++) { ... }
while (condition) { ... }

// 🎯 Array operations
arr.forEach(item => { ... });
const newArr = arr.map(item => item * 2);`
                } />
            </div>

            <h1 className="topic2"><CheckCheck/>Functions</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 📜 Function types
function add(a, b) { return a + b; }  // Declaration
const multiply = (a, b) => a * b;      // Arrow function

// 🚀 Immediately Invoked
(() => { console.log('Running now!'); })();`
                } />
            </div>

            <h1 className="topic2"><CheckCheck/>Template Literals</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🎨 String formatting
const name = 'Alice';
console.log(\`Hello \${name}!\`);
console.log(\`Multi-line
string example\`);`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="commonops" className="topic1">Common Operations</h1>

            <h1 className="topic2"><CheckCheck/>DOM Manipulation</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🌐 DOM interactions
const btn = document.querySelector('#submit');
const list = document.getElementById('items');

// ✏️ DOM modifications
btn.textContent = 'Click Me';
list.innerHTML = '<li>New Item</li>';`
                } />
            </div>

            <h1 className="topic2"><CheckCheck/>Event Handling</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🖱️ Event listeners
btn.addEventListener('click', handleClick);

// 🎯 Delegation pattern
document.body.addEventListener('click', e => {
    if (e.target.matches('.item')) {
        handleItemClick(e.target);
    }
});`
                } />
            </div>

            <h1 className="topic2"><CheckCheck/>Client-Side Storage</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 💾 Storage methods
localStorage.setItem('key', JSON.stringify(data));
const saved = JSON.parse(localStorage.getItem('key'));

// 🍪 Cookie handling
document.cookie = 'username=John; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/';`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="ds" className="topic1">Data Structures</h1>

            <h1 className="topic2"><CheckCheck/>Arrays</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 📶 Array operations
const nums = [1, 2, 3];
nums.push(4);       // [1,2,3,4]
nums.splice(1, 1);  // Remove at index 1
const sum = nums.reduce((acc, val) => acc + val, 0);`
                } />
            </div>

            <h1 className="topic3">Sets</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🎯 Unique collections
const unique = new Set([1, 2, 2, 3]); // {1,2,3}`
                } />
            </div>

            <h1 className="topic3">Map</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🗺️ Key-value storage
const map = new Map();
map.set('key', 'value');`
                }/>
            </div>

            <h1 className="topic2"><CheckCheck/>Weak Collections</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🕸️ Garbage-collected maps
const weakMap = new WeakMap();
const objKey = {};
weakMap.set(objKey, 'private data');`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="oops" className="topic1">Object-Oriented JS</h1>

            <h1 className="topic2"><CheckCheck/>Classes</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🏗️ Class structure
class Person {
    #privateField;  // 🔒 Private field
    
    constructor(name) {
        this.name = name;
        this.#privateField = 'secret';
    }
    
    static species = 'Homo sapiens';  // 🧳 Static property
    
    greet() {
        console.log(\`Hello \${this.name}\`);
    }
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck/>Prototypes & Inheritance</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🧬 Prototypal inheritance
function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() { ... };

class Dog extends Animal {
    bark() { ... }
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck/>Context Binding</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔗 Binding context
const boundFunc = obj.method.bind(obj);
boundFunc.call(context);
boundFunc.apply(context, args);`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="async" className="topic1">Asynchronous JS</h1>

            <h1 className="topic2"><CheckCheck/>Promises</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// ⏳ Promise chain
fetch('url')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(() => cleanup());`
                } />
            </div>

            <h1 className="topic2"><CheckCheck/>Async/Await</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🕒 Async operations
async function fetchData() {
    try {
        const res = await fetch('url');
        return await res.json();
    } catch (err) {
        handleError(err);
    }
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck/>Event Loop</h1>
            <div className="textSection">
                <strong>⏳ Microtasks:</strong> Promises, MutationObserver<br />
                <strong>⏰ Macrotasks:</strong> setTimeout, DOM events, I/O
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="error" className="topic1">Error Handling</h1>

            <h1 className="topic2"><CheckCheck/>try/catch</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🚨 Error handling
try {
    riskyOperation();
} catch (err) {
    console.error('Caught:', err.message);
} finally {
    cleanup();
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck/>Custom Errors</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🛠️ Custom error type
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}`
                } />
            </div>
        </div>
    </>)
}
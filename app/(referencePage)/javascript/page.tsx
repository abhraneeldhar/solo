import CodeSnippet from "@/components/ui/codeSnippet";
import { CheckCheck } from "lucide-react";

export default function Javascript() {
    return (<>
        <div className="referenceMain">
            <h1 className="header">Javascript</h1>

            <hr className="ruleTypeShi" />
            <h1 id="syntax" className="topic1">How to Javascript </h1>
            <p>This is the fastest way to reload the javascript shotgun, more weapon attachments are listed after.</p>

            <h1 className="topic2"><CheckCheck />Semicolons</h1>
            <div className="textSection">
                <p>Semicolons are optional in JavaScript, but it’s good practice to use them to avoid unexpected behavior.</p>
                <CodeSnippet code={
                    `let x = 10;  // Semicolon used
let y = 20  // Semicolon optional`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Equality Checks</h1>
            <div className="textSection">
                <p>JavaScript has two types of equality checks: == (loose equality) and ===(strict equality). Always prefer ===.</p>
                <CodeSnippet code={
                    `console.log(5 == "5");  // true (loose equality)
console.log(5 === "5"); // false (strict equality)`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Functions</h1>
            <div className="textSection">
                <p>Functions can be declared using function, arrow functions , or as function expressions.</p>
                <CodeSnippet code={
                    `// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Function expression
const add = function(a, b) {
    return a + b;
};`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Hoisting</h1>
            <div className="textSection">
                <p>JavaScript hoists variable and function declarations to the top of their scope. This can lead to unexpected behavior.</p>
                <CodeSnippet code={
                    `console.log(x);  // undefined (not an error)
var x = 10;`
                } />
            </div>

            

            <h1 className="topic2"><CheckCheck />Template Literals</h1>
            <div className="textSection">
                <p>Use backticks ( ` ) for template literals to embed variables and multi-line strings.</p>
                <CodeSnippet code={
                    `const name = "Alice";
console.log(\`Hello, \${name}!\`);  // Hello, Alice!

// Multi-line string
const message = \`
This is a
multi-line string
\`;`
                } />
            </div>

            
            


            <h1 className="topic2"><CheckCheck />Promises and Async/Await</h1>
            <div className="textSection">
                <p>Promises and async/await are used to handle asynchronous operations.</p>
                <CodeSnippet code={
                    `// Using Promises
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000);
});

promise.then(result => console.log(result));  // Done!

// Using async/await
async function fetchData() {
    const result = await promise;
    console.log(result);  // Done!
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />No system("cls")</h1>
            <div className="textSection">
                <p>JavaScript does not have a direct equivalent of system("cls"). Use console.clear() to clear the console.</p>
                <CodeSnippet code={
                    `console.clear();  // Clears the console`
                } />
            </div>

            


            <h1 className="topic2"><CheckCheck />Modules</h1>
            <div className="textSection">
                <p>JavaScript uses import and export for modular code.</p>
                <CodeSnippet code={
                    `// Exporting
export const add = (a, b) => a + b;

// Importing
import { add } from './math.js';`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Destructuring</h1>
            <div className="textSection">
                <p>Destructuring allows you to unpack values from arrays or objects into variables.</p>
                <CodeSnippet code={
                    `// Array destructuring
const [a, b] = [1, 2];

// Object destructuring
const { name, age } = { name: "Alice", age: 25 };`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Spread and Rest Operators</h1>
            <div className="textSection">
                <p>The spread ( ... ) operator is used to expand elements, while the rest operator is used to collect them.</p>
                <CodeSnippet code={
                    `// Spread operator
const arr = [1, 2, 3];
const newArr = [...arr, 4];  // [1, 2, 3, 4]

// Rest operator
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}`
                } />
            </div>



            <hr className="ruleTypeShi" />
            <h1 id="syntax" className="topic1">Syntax & Basics</h1>
            <h1 className="topic2"><CheckCheck />Variables</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 📦 Variable declarations
let mutableVar = 10;       // Block-scoped, reassignable
const immutableVar = 20;   // Block-scoped, constant
var functionScoped = 30;   // ⚠️ Avoid (hoisting, function scope)`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Data Types</h1>
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

            <h1 className="topic2"><CheckCheck />Conditionals</h1>
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

            <h1 className="topic2"><CheckCheck />Loops</h1>
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

            <h1 className="topic2"><CheckCheck />Functions</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 📜 Function types
function add(a, b) { return a + b; }  // Declaration
const multiply = (a, b) => a * b;      // Arrow function

// 🚀 Immediately Invoked
(() => { console.log('Running now!'); })();`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Template Literals</h1>
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

            <h1 className="topic2"><CheckCheck />DOM Manipulation</h1>
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

            <h1 className="topic2"><CheckCheck />Event Handling</h1>
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

            <h1 className="topic2"><CheckCheck />Client-Side Storage</h1>
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

            <h1 className="topic2"><CheckCheck />Arrays</h1>
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
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Weak Collections</h1>
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

            <h1 className="topic2"><CheckCheck />Classes</h1>
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

            <h1 className="topic2"><CheckCheck />Prototypes & Inheritance</h1>
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

            <h1 className="topic2"><CheckCheck />Context Binding</h1>
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

            <h1 className="topic2"><CheckCheck />Promises</h1>
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

            <h1 className="topic2"><CheckCheck />Async/Await</h1>
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

            <h1 className="topic2"><CheckCheck />Event Loop</h1>
            <div className="textSection">
                <strong>⏳ Microtasks:</strong> Promises, MutationObserver<br />
                <strong>⏰ Macrotasks:</strong> setTimeout, DOM events, I/O
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="error" className="topic1">Error Handling</h1>

            <h1 className="topic2"><CheckCheck />try/catch</h1>
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

            <h1 className="topic2"><CheckCheck />Custom Errors</h1>
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
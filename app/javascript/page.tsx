import CodeSnippet from "@/components/ui/codeSnippet";
import { CheckCheck, CodepenIcon } from "lucide-react";


export default function Javascript() {
    return (<>
        <div className="referenceMain">
            <h1 className="header">Javascript</h1>
            <hr className="ruleTypeShi" />


            <h1 className="topic1">Syntax & Basics</h1>

            <h1 className="topic2">Variables</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `let mutableVar = 10;       // Block-scoped, reassignable
const immutableVar = 20;  // Block-scoped, constant
var functionScoped = 30;  // Avoid (hoisting, function scope)`
                } />
            </div>

            <h1 className="topic2">Data Types</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// Primitives
const str = "text";
const num = 42;
const bool = true;
const nullVal = null;
const undefinedVal = undefined;
const symbol = Symbol('id');

// Reference Types
const obj = {a: 1};
const arr = [1, 2, 3];
const func = () => {};`
                } />
            </div>

            <h1 className="topic2">Conditionals</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// If-else
if (score > 90) {
    grade = 'A';
} else if (score > 75) {
    grade = 'B';
} else {
    grade = 'C';
}

// Switch
switch(day) {
    case 1: console.log('Monday'); break;
    default: console.log('Unknown'); break;
}`
                } />
            </div>

            <h1 className="topic2">Loops</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// Traditional
for (let i=0; i<5; i++) { ... }
while (condition) { ... }

// Array Iteration
arr.forEach(item => { ... });
const newArr = arr.map(item => item * 2);`
                } />
            </div>

            <h1 className="topic2">Functions</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// Function Declaration
function add(a, b) { return a + b; }

// Arrow Function
const multiply = (a, b) => a * b;

// IIFE
(() => { console.log('Immediately invoked'); })();`
                } />
            </div>

            <h1 className="topic2">Template Literals</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `const name = 'Alice';
console.log(\`Hello \${name}!\`);
console.log(\`Multi-line
string example\`);`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 className="topic1">Common Operations</h1>

            <h1 className="topic2">DOM Manipulation</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// Select elements
const btn = document.querySelector('#submit');
const list = document.getElementById('items');

// Modify DOM
btn.textContent = 'Click Me';
list.innerHTML = '<li>New Item</li>';`
                } />
            </div>

            <h1 className="topic2">Event Handling</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// Single element
btn.addEventListener('click', handleClick);

// Event Delegation
document.body.addEventListener('click', e => {
    if (e.target.matches('.item')) {
        handleItemClick(e.target);
    }
});`
                } />
            </div>

            <h1 className="topic2">Client-Side Storage</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// Local Storage
localStorage.setItem('key', JSON.stringify(data));
const saved = JSON.parse(localStorage.getItem('key'));

// Cookies
document.cookie = 'username=John; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/';`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 className="topic1">Data Structures</h1>

            <h1 className="topic2">Arrays</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// Common Methods
const nums = [1, 2, 3];
nums.push(4);       // [1,2,3,4]
nums.splice(1, 1);  // Remove 1 item at index 1
const sum = nums.reduce((acc, val) => acc + val, 0);`
                } />
            </div>

            <h1 className="topic3">Sets</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// Set (Unique values)
const unique = new Set([1, 2, 2, 3]); // {1,2,3}`
                } />
            </div>

            <h1 className="topic3">Map</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// Map (Key-Value pairs)
const map = new Map();
map.set('key', 'value');`
                }/>
            </div>

            <h1 className="topic2">Weak Collections</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// WeakMap (Keys must be objects)
const weakMap = new WeakMap();
const objKey = {};
weakMap.set(objKey, 'private data');`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 className="topic1">Object-Oriented JS</h1>

            <h1 className="topic2">Classes</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `class Person {
    #privateField;  // Private field
    
    constructor(name) {
        this.name = name;
        this.#privateField = 'secret';
    }
    
    static species = 'Homo sapiens';
    
    greet() {
        console.log(\`Hello \${this.name}\`);
    }
}`
                } />
            </div>

            <h1 className="topic2">Prototypes & Inheritance</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() { ... };

class Dog extends Animal {
    bark() { ... }
}`
                } />
            </div>

            <h1 className="topic2">Context Binding</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// Preserve 'this' context
const boundFunc = obj.method.bind(obj);
boundFunc.call(context);
boundFunc.apply(context, args);`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 className="topic1">Asynchronous JS</h1>

            <h1 className="topic2">Promises</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `fetch('url')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(() => cleanup());`
                } />
            </div>

            <h1 className="topic2">Async/Await</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `async function fetchData() {
    try {
        const res = await fetch('url');
        return await res.json();
    } catch (err) {
        handleError(err);
    }
}`
                } />
            </div>

            <h1 className="topic2">Event Loop</h1>
            <div className="textSection">
                <strong>Microtasks Queue:</strong> Processes promises and MutationObserver callbacks<br />
                <strong>Macrotasks Queue:</strong> Handles setTimeout, DOM events, I/O
            </div>

            <hr className="ruleTypeShi" />
            <h1 className="topic1">Error Handling</h1>

            <h1 className="topic2">try/catch</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `try {
    riskyOperation();
} catch (err) {
    console.error('Caught:', err.message);
} finally {
    cleanup();
}`
                } />
            </div>

            <h1 className="topic2">Custom Errors</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 className="topic1">Best Practices</h1>

            <h1 className="topic2">Performance</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// Debouncing (Delayed execution)
function debounce(func, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}`
                } />
            </div>

            <h1 className="topic2">Memory Management</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// Avoid global variables
(function() {
    const privateData = 'hidden';
})();

// Remove event listeners when done
element.removeEventListener('click', handler);`
                } />
            </div>

            <h1 className="topic2">Code Quality</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// Use modules
import { util } from './utils.js';

// Lint with ESLint
// Use TypeScript for type safety`
                } />
            </div>
        </div>
    </>)
}
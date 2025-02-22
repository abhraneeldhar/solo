import CodeSnippet from "@/components/ui/codeSnippet";
import { CheckCheck } from "lucide-react";

export default function TypeScript() {
    return (<>
        <div className="referenceMain">
            <h1 className="header">Typescript</h1>

            <hr className="ruleTypeShi" />
            <h1 id="core" className="topic1">Core Concepts</h1>

            <h1 className="topic2"><CheckCheck />Type Annotations</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🏷️ Explicit type declarations
let age: number = 25;
let name: string = "Alice";
let isActive: boolean = true;

// 🧩 Array types
let numbers: number[] = [1, 2, 3];
let mixed: (string | number)[] = ["text", 42];`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Interfaces</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 📜 Object shape definition
interface User {
    id: number;
    name: string;
    email?: string;  // Optional property
}

// 🖨️ Usage
const user: User = { id: 1, name: "John" };`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Enums</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔢 Named constants
enum Direction {
    Up = 'UP',
    Down = 'DOWN',
}

// 🧭 Usage
const move: Direction = Direction.Up;`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="typesystem" className="topic1">Type System</h1>

            <h1 className="topic2"><CheckCheck />Union & Intersection</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🤝 Combine types
type ID = string | number;
type Admin = User & { privileges: string[] };`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Type Guards</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔍 Runtime type checking
function isString(val: any): val is string {
    return typeof val === 'string';
}

// 🛡️ Safe type usage
if (isString(input)) {
    console.log(input.toUpperCase());
}`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="adv" className="topic1">Advanced Types</h1>

            <h1 className="topic2"><CheckCheck />Generics</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🧪 Reusable type variables
function identity<T>(arg: T): T {
    return arg;
}

// 📦 Generic interfaces
interface Box<T> {
    content: T;
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Utility Types</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🛠️ Built-in type helpers
type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;
type StringKeys = keyof User;`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="oops" className="topic1">Object-Oriented Programming</h1>

            <h1 className="topic2"><CheckCheck />Classes</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🏗️ Class with modifiers
class Animal {
    private name: string;
    protected age: number;
    
    constructor(name: string) {
        this.name = name;
    }
    
    public move(): void {
        console.log("Moving");
    }
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Decorators</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🎀 Metadata annotations
function log(target: any, key: string) {
    console.log(\`Method \${key} called\`);
}

class Calculator {
    @log
    add(a: number, b: number) { return a + b; }
}`
                } />
            </div>


            <hr className="ruleTypeShi" />
            <h1 id="configurations" className="topic1">Configuration</h1>

            <h1 className="topic2"><CheckCheck />tsconfig.json</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// ⚙️ Core compiler options
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "CommonJS",
        "strict": true,
        "outDir": "./dist"
    }
}`
                } />
            </div>


            <hr className="ruleTypeShi" />
            <h1 id="bestpractices" className="topic1">Best Practices</h1>
            <h1 className="topic2"><CheckCheck />Type Narrowing</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔦 Precise type control
function printId(id: string | number) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id.toFixed(2));
    }
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Type Assertions</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// ⚠️ Use with caution
const element = document.getElementById('root') as HTMLElement;
const value = <number>someUnknownValue;`
                } />
            </div>



        </div>
    </>)
}
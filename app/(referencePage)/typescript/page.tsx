import CodeSnippet from "@/components/ui/codeSnippet";
import { CheckCheck } from "lucide-react";

export default function TypeScript() {
    return (<>
        <div className="referenceMain">
            <h1 className="header">Typescript</h1>

            <hr className="ruleTypeShi" />
            <h1 id="core" className="topic1">How to Typescript</h1>
            <p>This fastest way to Typescript town, more paths are listed after</p>
            <h1 className="topic2"><CheckCheck />Static Typing</h1>
            <div className="textSection">
                <p>TypeScript adds static typing to JavaScript. You must declare types for variables, function parameters, and return values.</p>
                <CodeSnippet code={
                    `let x: number = 10;
let name: string = "Alice";
let isActive: boolean = true;`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Type Inference</h1>
            <div className="textSection">
                <p>TypeScript can infer types automatically if you initialize a variable with a value.</p>
                <CodeSnippet code={
                    `let x = 10;  // TypeScript infers x as number
let name = "Alice";  // TypeScript infers name as string`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Union Types</h1>
            <div className="textSection">
                <p>TypeScript allows variables to have multiple types using the <code>|</code> operator.</p>
                <CodeSnippet code={
                    `let value: number | string;
value = 10;  // Valid
value = "Hello";  // Also valid`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Interfaces</h1>
            <div className="textSection">
                <p>Interfaces define the structure of objects. They are used for type-checking.</p>
                <CodeSnippet code={
                    `interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "Alice",
    age: 25
};`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Type Aliases</h1>
            <div className="textSection">
                <p>Type aliases allow you to create custom types. They are similar to interfaces but can represent any type.</p>
                <CodeSnippet code={
                    `type Point = {
    x: number;
    y: number;
};

const p: Point = { x: 10, y: 20 };`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Generics</h1>
            <div className="textSection">
                <p>Generics allow you to create reusable components that work with multiple types.</p>
                <CodeSnippet code={
                    `function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("Hello");  // Output is of type string`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Enums</h1>
            <div className="textSection">
                <p>Enums allow you to define a set of named constants. They make code more readable.</p>
                <CodeSnippet code={
                    `enum Direction {
    Up,
    Down,
    Left,
    Right
}

let dir: Direction = Direction.Up;`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Optional and Default Parameters</h1>
            <div className="textSection">
                <p>Function parameters can be optional or have default values.</p>
                <CodeSnippet code={
                    `function greet(name: string, age?: number) {
    console.log(\`Hello, \${name}\`);
}

greet("Alice");  // age is optional`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Type Assertions</h1>
            <div className="textSection">
                <p>Type assertions allow you to override TypeScript's inferred type.</p>
                <CodeSnippet code={
                    `let value: any = "Hello";
let length: number = (value as string).length;`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Tuples</h1>
            <div className="textSection">
                <p>Tuples allow you to define an array with fixed types and lengths.</p>
                <CodeSnippet code={
                    `let tuple: [string, number];
tuple = ["Alice", 25];  // Valid
tuple = [10, "Alice"];  // Error`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Readonly Properties</h1>
            <div className="textSection">
                <p>Properties marked as <code>readonly</code> cannot be modified after initialization.</p>
                <CodeSnippet code={
                    `interface Person {
    readonly name: string;
    age: number;
}

const person: Person = { name: "Alice", age: 25 };
person.name = "Bob";  // Error: Cannot assign to 'name'`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Decorators</h1>
            <div className="textSection">
                <p>Decorators are a special kind of declaration that can be attached to classes, methods, or properties.</p>
                <CodeSnippet code={
                    `function log(target: any, key: string) {
    console.log(\`\${key} was called\`);
}

class Person {
    @log
    greet() {
        console.log("Hello!");
    }
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Namespaces</h1>
            <div className="textSection">
                <p>Namespaces are used to group related code and avoid naming collisions.</p>
                <CodeSnippet code={
                    `namespace MathUtils {
    export function add(a: number, b: number): number {
        return a + b;
    }
}

console.log(MathUtils.add(10, 20));  // 30`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Type Guards</h1>
            <div className="textSection">
                <p>Type guards allow you to narrow down the type of a variable within a conditional block.</p>
                <CodeSnippet code={
                    `function isString(value: any): value is string {
    return typeof value === "string";
}

let value: string | number = "Hello";
if (isString(value)) {
    console.log(value.toUpperCase());  // Safe to call string methods
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Utility Types</h1>
            <div className="textSection">
                <p>TypeScript provides built-in utility types like <code>Partial</code>, <code>Pick</code>, and <code>Omit</code> to manipulate types.</p>
                <CodeSnippet code={
                    `interface Person {
    name: string;
    age: number;
}

type PartialPerson = Partial<Person>;  // All properties are optional
type NameOnly = Pick<Person, "name">;  // Only the 'name' property`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Strict Null Checks</h1>
            <div className="textSection">
                <p>TypeScript's <code>strictNullChecks</code> flag ensures that <code>null</code> and <code>undefined</code> are handled explicitly.</p>
                <CodeSnippet code={
                    `let x: number;
x = null;  // Error if strictNullChecks is enabled`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Declaration Files</h1>
            <div className="textSection">
                <p>Declaration files (<code>.d.ts</code>) are used to describe the shape of existing JavaScript libraries.</p>
                <CodeSnippet code={
                    `// myLibrary.d.ts
declare module "myLibrary" {
    export function doSomething(): void;
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />TypeScript with React</h1>
            <div className="textSection">
                <p>TypeScript integrates seamlessly with React, providing type safety for props and state.</p>
                <CodeSnippet code={
                    `interface Props {
    name: string;
    age: number;
}

const Greet: React.FC<Props> = ({ name, age }) => (
    <div>Hello, {name}! You are {age} years old.</div>
);`
                } />
            </div>








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
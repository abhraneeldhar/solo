import CodeSnippet from "@/components/ui/codeSnippet";
import { CheckCheck } from "lucide-react";

export default function ReactPage() {


    return (<>
        <div className="referenceMain">
            <h1 className="header">React</h1>

            <hr className="ruleTypeShi" />
            <h1 id="syntax" className="topic1">How to React</h1>
            <p>This is the fastest way React in a building situation, more yapping is listed after.</p>
            <h1 className="topic2"><CheckCheck /> JSX ≠ HTML</h1>
            <p>Use `{ }` for dynamic content, `className` instead of `class`, and `htmlFor` instead of `for`.</p>
            <div className="textSection">
                <CodeSnippet code={
                    `<h1>{title}</h1>  // ✅ Correct
<label htmlFor="input">Name</label>  // ✅ Correct`
                } />
            </div>

            <h1 className="topic2"><CheckCheck /> React Doesn’t Update State Immediately</h1>
            <p>State updates are async. Always use functional updates if relying on previous state.</p>
            <div className="textSection">
                <CodeSnippet code={
                    `setCount(count + 1); 
console.log(count); // ❌ Still old value

setCount(prev => prev + 1);  // ✅ Correct`
                } />
            </div>

            <h1 className="topic2"><CheckCheck /> No Direct DOM Manipulation</h1>
            <p>Don’t use `document.getElementById`. Use `useRef` instead.</p>
            <div className="textSection">
                <CodeSnippet code={
                    `const inputRef = useRef(null);
<input ref={inputRef} />;`
                } />
            </div>

            <h1 className="topic2"><CheckCheck /> Props Are Immutable</h1>
            <p>Pass data down but never modify props inside a component.</p>
            <div className="textSection">
                <CodeSnippet code={
                    `function Child({ count }) {
    count += 1; // ❌ Wrong
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck /> Hooks Have Rules</h1>
            <p>Only call hooks at the top level. Never use inside loops, conditions, or nested functions.</p>
            <div className="textSection">
                <CodeSnippet code={
                    `// ✅ Correct
useEffect(() => { console.log("Mounted"); }, []); 

// ❌ Wrong
if (someCondition) { useEffect(() => { ... }); } `
                } />
            </div>

            <h1 className="topic2"><CheckCheck /> Always Use a Unique Key in Lists</h1>
            <p>Keys help React optimize rendering.</p>
            <div className="textSection">
                <CodeSnippet code={
                    `{items.map(item => <div key={item.id}>{item.name}</div>)} `
                } />
            </div>

            <h1 className="topic2"><CheckCheck /> `useEffect` Runs AFTER Render</h1>
            <p>It doesn’t block the UI. Cleanup functions handle unmounting.</p>
            <div className="textSection">
                <CodeSnippet code={
                    `useEffect(() => {
    const interval = setInterval(() => console.log("Tick"), 1000);
    return () => clearInterval(interval);
}, []);`
                } />
            </div>

            <h1 className="topic2"><CheckCheck /> Event Handling is Different</h1>
            <p>Use camelCase for event names and pass functions, don’t call them.</p>
            <div className="textSection">
                <CodeSnippet code={
                    `<button onClick={handleClick}>Click</button>  // ✅ Correct
<button onClick={handleClick()}>Click</button>  // ❌ Wrong`
                } />
            </div>

            <h1 className="topic2"><CheckCheck /> Forms? Use Controlled Components</h1>
            <p>Don’t use `document.getElementById`, use state to handle inputs.</p>
            <div className="textSection">
                <CodeSnippet code={
                    `const [name, setName] = useState("");
<input value={name} onChange={e => setName(e.target.value)} />;`
                } />
            </div>

            <h1 className="topic2"><CheckCheck /> Use {`<Link>`} Instead of {`<a>`} in React Router</h1>
            <p>React Router prevents full-page reloads.</p>
            <div className="textSection">
                <CodeSnippet code={
                    `<Link to="/about">About</Link>  // ✅ Correct
<a href="/about">About</a>  // ❌ Wrong`
                } />
            </div>

            <h1 className="topic2"><CheckCheck /> No Global State? Use Context API or Redux</h1>
            <p>Context API for simple cases, Redux/Zustand/Recoil for complex state management.</p>
            <div className="textSection">
                <CodeSnippet code={
                    `const UserContext = createContext();
function App() {
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck /> CSS Modules Auto-Scope Class Names</h1>
            <p>Import styles properly instead of using global CSS.</p>
            <div className="textSection">
                <CodeSnippet code={
                    `import styles from "./Button.module.css";
<button className={styles.btn}>Click</button>;`
                } />
            </div>

            <h1 className="topic2"><CheckCheck /> Next.js Has Built-in Routing & SSR</h1>
            <p>Use file-based routing and server-side rendering (`getServerSideProps`).</p>
            <div className="textSection">
                <CodeSnippet code={
                    `export async function getServerSideProps() {
    const data = await fetchData();
    return { props: { data } };
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck /> Avoid Unnecessary Renders</h1>
            <p>Use `React.memo`, `useMemo`, and `useCallback` for performance optimizations.</p>
            <div className="textSection">
                <CodeSnippet code={
                    `const MemoizedComponent = React.memo(MyComponent);
const cachedFunction = useCallback(() => doSomething(), []);`
                } />
            </div>

            <h1 className="topic2"><CheckCheck /> React is Declarative, Not Imperative</h1>
            <p>Don’t manually manipulate the DOM. Change state, let React handle UI updates.</p>
            <div className="textSection">
                <CodeSnippet code={
                    `setCount(5);  // ✅ Let React re-render
document.getElementById("counter").innerText = 5;  // ❌ Wrong`
                } />
            </div>










            <hr className="ruleTypeShi" />
            <h1 id="basics" className="topic1">React Basics</h1>

            <h1 className="topic2"><CheckCheck />JSX Syntax</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 JSX allows HTML-like syntax in JavaScript
const element = <h1>Hello, World!</h1>;

// 🔹 Embed expressions with curly braces
const name = "Alice";
const greeting = <p>Hello, {name}!</p>;

// 🔹 Self-closing tags for elements without children
const image = <img src="logo.png" alt="Logo" />;`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Components</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🎣 Functional Component
function Greeting(props) {
    return <h1>Hello {props.name}</h1>;
}

// ⚙️ Class Component
class Greeting extends React.Component {
    render() {
        return <h1>Hello {this.props.name}</h1>;
    }
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />State & Props</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 useState Hook (Functional Component)
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Event Handling</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 Handling Events in React
function Button() {
    function handleClick() {
        alert("Button clicked!");
    }
    return <button onClick={handleClick}>Click me</button>;
}

// ⚠️ Do not use handleClick() instead of handleClick in onClick!`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />useEffect Hook</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 useEffect: Runs after render
import { useEffect, useState } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup function
    }, []); // Empty array = run only on mount

    return <p>Time: {seconds} seconds</p>;
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />useMemo & useCallback</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 useMemo: Optimize expensive calculations
import { useMemo, useState } from "react";

function ExpensiveCalculation({ num }) {
    const squared = useMemo(() => {
        console.log("Calculating...");
        return num * num;
    }, [num]);

    return <p>Squared: {squared}</p>;
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />React Router</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 React Router Basic Setup
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Global State: Context API</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 Creating a Context
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

function ChildComponent() {
    const { theme, setTheme } = useContext(ThemeContext);
    return <button onClick={() => setTheme("dark")}>Change Theme</button>;
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />React Performance Optimization</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 React.memo to Prevent Unnecessary Re-renders
import React from "react";

const MemoizedComponent = React.memo(({ count }) => {
    console.log("Rendered!");
    return <p>Count: {count}</p>;
});`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Fetching Data (Axios, Fetch API)</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 Fetch API Example
import { useEffect, useState } from "react";

function DataFetcher() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => response.json())
            .then(json => setData(json));
    }, []);

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Error Boundaries</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 Handling Errors in React
import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />React Quirks & Best Practices</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 Unique Keys in Lists
const items = ["Apple", "Banana", "Cherry"];
const list = items.map((item, index) => <li key={index}>{item}</li>); // ⚠️ Bad practice!
const listFixed = items.map((item) => <li key={item}>{item}</li>); // ✅ Good practice

// 🔹 Avoid Mutating State Directly
setState([...state, newItem]); // ✅ Correct way
state.push(newItem); // ⚠️ Incorrect way`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Next.js-Specific Topics</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 getStaticProps for Static Site Generation
export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    return { props: { posts } };
}

function Home({ posts }) {
    return <pre>{JSON.stringify(posts, null, 2)}</pre>;
}`
                } />
            </div>
        </div>

    </>)
}

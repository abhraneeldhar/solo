import CodeSnippet from "@/components/ui/codeSnippet";
import { CheckCheck } from "lucide-react";

export default function ReactPage() {


    return (<>
        <div className="referenceMain">
            <h1 className="header">React</h1>

            <hr className="ruleTypeShi" />
            <h1 id="syntax" className="topic1">How to React</h1>
            <p>This is the fastest way React in a building situation, more yapping is listed after.</p>
            <h1 className="topic2"><CheckCheck />JSX Quirks</h1>
            <div className="textSection">
                <p>JSX is not HTML and has some unique rules you need to follow.</p>
                <CodeSnippet code={
                    `// 🔹 Use className instead of class
<div className="container">Hello</div>

// 🔹 Self-closing tags are mandatory
<img src="logo.png" alt="Logo" />  // ✅ Correct
<img src="logo.png" alt="Logo">     // ❌ Incorrect

// 🔹 Curly braces for JavaScript expressions
const name = "Alice";
const greeting = <h1>Hello, {name}!</h1>;`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />State Updates Are Asynchronous</h1>
            <div className="textSection">
                <p>State updates in React don’t happen immediately. Use the functional form of `setState` if the new state depends on the previous state.</p>
                <CodeSnippet code={
                    `// 🔹 Functional setState for dependent updates
setCount((prevCount) => prevCount + 1);`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Immutable State Updates</h1>
            <div className="textSection">
                <p>Never mutate state directly. Always create a new object or array when updating state.</p>
                <CodeSnippet code={
                    `// ❌ Bad: Direct mutation
state.items.push(newItem);

// ✅ Good: Create a new array
setItems([...items, newItem]);`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Event Handling</h1>
            <div className="textSection">
                <p>React uses synthetic events, and event handlers need to be bound correctly in class components.</p>
                <CodeSnippet code={
                    `// 🔹 Inline Arrow Function
<button onClick={() => console.log('Clicked!')}>
    Click Me
</button>

// 🔹 Class Method Binding
class Button extends React.Component {
    handleClick = () => {
        console.log('Clicked!');
    }
    render() {
        return <button onClick={this.handleClick}>Click Me</button>;
    }
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Keys in Lists</h1>
            <div className="textSection">
                <p>Always use a unique `key` prop when rendering lists to help React identify which items have changed.</p>
                <CodeSnippet code={
                    `{items.map((item) => (
    <li key={item.id}>{item.name}</li>
))}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Conditional Rendering</h1>
            <div className="textSection">
                <p>Use ternary operators or logical `&&` for conditional rendering in JSX.</p>
                <CodeSnippet code={
                    `{isLoggedIn ? <WelcomeMessage /> : <LoginButton />}

{messages.length > 0 && <p>You have new messages!</p>}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Controlled vs. Uncontrolled Components</h1>
            <div className="textSection">
                <p>Controlled components manage state via React, while uncontrolled components rely on the DOM.</p>
                <CodeSnippet code={
                    `// 🔹 Controlled Component
<input value={value} onChange={(e) => setValue(e.target.value)} />

// 🔹 Uncontrolled Component
const inputRef = useRef();
<input ref={inputRef} defaultValue="Hello" />`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Context API</h1>
            <div className="textSection">
                <p>Use `createContext`, `Provider`, and `useContext` for global state management without prop drilling.</p>
                <CodeSnippet code={
                    `const ThemeContext = React.createContext('light');

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar() {
    const theme = useContext(ThemeContext);
    return <button style={{ background: theme }}>Click Me</button>;
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Hooks Rules</h1>
            <div className="textSection">
                <p>Hooks must be called at the top level of a functional component and in the same order on every render.</p>
                <CodeSnippet code={
                    `// ❌ Bad: Hooks inside conditions
if (condition) {
    useEffect(() => {});
}

// ✅ Good: Hooks at the top level
useEffect(() => {});`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Performance Pitfalls</h1>
            <div className="textSection">
                <p>Avoid unnecessary re-renders with `React.memo`, `useMemo`, and `useCallback`.</p>
                <CodeSnippet code={
                    `// 🔹 Memoize a component
const MemoizedComponent = React.memo(function MyComponent({ prop }) {
    return <div>{prop}</div>;
});

// 🔹 Memoize a value
const memoizedValue = useMemo(() => computeExpensiveValue(dep), [dep]);`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />React Router Quirks</h1>
            <div className="textSection">
                <p>React Router v6 uses `element` instead of `component` and `useNavigate` instead of `useHistory`.</p>
                <CodeSnippet code={
                    `// 🔹 React Router v6
<Route path="/about" element={<About />} />

// 🔹 Navigation with useNavigate
const navigate = useNavigate();
navigate('/home');`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Error Boundaries</h1>
            <div className="textSection">
                <p>Use `componentDidCatch` in class components to catch errors in child components.</p>
                <CodeSnippet code={
                    `class ErrorBoundary extends React.Component {
    state = { hasError: false };
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
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

            <h1 className="topic2"><CheckCheck />Fragments</h1>
            <div className="textSection">
                <p>Use `<></>` or {`<React.Fragment>`} to group multiple elements without adding extra nodes to the DOM.</p>
                <CodeSnippet code={
                    `// 🔹 Using Fragments
return (
    <>
        <h1>Title</h1>
        <p>Description</p>
    </>
);`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Portals</h1>
            <div className="textSection">
                <p>Use `ReactDOM.createPortal` to render children outside the DOM hierarchy of the parent component.</p>
                <CodeSnippet code={
                    `// 🔹 Creating a Portal
function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="modal">{children}</div>,
        document.getElementById('modal-root')
    );
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Refs</h1>
            <div className="textSection">
                <p>Use `useRef` to access DOM elements or persist values across renders without triggering re-renders.</p>
                <CodeSnippet code={
                    `// 🔹 Accessing a DOM element
const inputRef = useRef();
<input ref={inputRef} type="text" />`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Custom Hooks</h1>
            <div className="textSection">
                <p>Create reusable logic with custom hooks (e.g., `useFetch`, `useLocalStorage`).</p>
                <CodeSnippet code={
                    `// 🔹 Custom Hook Example
function useFetch(url) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [url]);
    return data;
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />React 18 Features</h1>
            <div className="textSection">
                <p>React 18 introduces concurrent rendering with `startTransition` and `useTransition`.</p>
                <CodeSnippet code={
                    `// 🔹 Using useTransition
const [isPending, startTransition] = useTransition();
startTransition(() => {
    setState(newState);
});`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />TypeScript with React</h1>
            <div className="textSection">
                <p>Use `React.FC` for functional components and define prop types with interfaces or types.</p>
                <CodeSnippet code={
                    `// 🔹 Typing Props
interface Props {
    name: string;
    age: number;
}

const Greeting: React.FC<Props> = ({ name, age }) => {
    return <h1>Hello, {name}! You are {age} years old.</h1>;
};`
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

            <h1 className="topic2"><CheckCheck />State</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🎣 useState Hook (Functional)
const [count, setCount] = useState(0);

// ⚙️ Class Component State
constructor(props) {
    super(props);
    this.state = { count: 0 };
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Event Handling</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 Inline Arrow Function
<button onClick={() => console.log('Clicked!')}>
    Click Me
</button>

// 🔹 Class Method Binding
class Button extends React.Component {
    handleClick = () => {
        console.log('Clicked!');
    }
    render() {
        return <button onClick={this.handleClick}>Click Me</button>;
    }
}`
                } />
            </div>


            <hr className="ruleTypeShi" />
            <h1 id="hooks" className="topic1">React Hooks</h1>
            <h1 className="topic2"><CheckCheck />useEffect</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🧹 Cleanup Example
useEffect(() => {
    const timer = setInterval(() => {
        console.log('Tick');
    }, 1000);
    
    return () => clearInterval(timer); // Cleanup
}, []);`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Custom Hooks</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔧 Create reusable logic
function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return width;
}`
                } />
            </div>


            <hr className="ruleTypeShi" />
            <h1 id="routing" className="topic1">React Router</h1>
            <h1 className="topic2"><CheckCheck />Basic Routing</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🗺️ Router Setup (v6)
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Navigation</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔗 Using useNavigate Hook (v6)
import { useNavigate } from 'react-router-dom';
function BackButton() {
    const navigate = useNavigate();
    return <button onClick={() => navigate(-1)}>Go Back</button>;
}`
                } />
            </div>

        </div>

    </>)
}

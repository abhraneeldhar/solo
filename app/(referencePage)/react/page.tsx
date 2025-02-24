import CodeSnippet from "@/components/ui/codeSnippet";
import { CheckCheck } from "lucide-react";

export default function ReactPage() {


    return (<>
        <div className="referenceMain">
            <h1 className="header">React</h1>

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

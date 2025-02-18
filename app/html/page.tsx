import CodeSnippet from "@/components/ui/codeSnippet";
import { CheckCheck } from "lucide-react";

export default function HTML() {
    return (<>
        <div className="referenceMain">
            <h1 className="header">HTML</h1>
            <hr className="ruleTypeShi" />

            <h1 className="topic1">Common Mistakes</h1>

            <h1 className="topic2"><CheckCheck />Unclosed Tags/Mismatched Nesting</h1>
            <div className="textSection">
                <strong>Issue:</strong> Browser rendering inconsistencies<br />
                <strong>Fix:</strong> Always close tags and maintain hierarchy
                <CodeSnippet code={
                    `<!-- ❌ Wrong -->
<div><p>Text</div></p>

<!-- ✅ Correct -->
<div><p>Text</p></div>`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Missing DOCTYPE</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<!-- ❌ Triggers quirks mode -->
<html>
...
</html>

<!-- ✅ First line in every HTML doc -->
<!DOCTYPE html>`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 className="topic1">Syntax & Basics</h1>

            <h1 className="topic2"><CheckCheck />Basic Structure</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Content -->
</body>
</html>`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Semantic Elements</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<header>Site header</header>
<nav>Main navigation</nav>
<main>
    <article>Independent content</article>
    <section>Thematic grouping</section>
    <aside>Related content</aside>
</main>
<footer>Site footer</footer>`
                } />
            </div>


            <hr className="ruleTypeShi" />
            <h1 className="topic1">Element Tags</h1>

            <h1 className="topic2"><CheckCheck/>Text & Structure</h1>
            <div className="textSection">
                <h1 className="topic3">Paragraphs & Headings</h1>
                <CodeSnippet code={
                    `<p>Paragraph text</p>
<h1>Main Heading</h1>  <!-- h1-h6 -->
<span>Inline text container</span>`
                } />

                <h1 className="topic3">Links & Media</h1>
                <CodeSnippet code={
                    `<a href="https://example.com">Anchor link</a>
<img src="image.jpg" alt="Description">
<video controls><source src="video.mp4"></video>`
                } />
            </div>

            <h1 className="topic2"><CheckCheck/>Containers</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<div>Block container</div>
<section>Document section</section>
<article>Independent content</article>
<nav>Navigation links</nav>`
                } />
            </div>

            <h1 className="topic2"><CheckCheck/>Lists</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<ul>          <!-- Unordered list -->
    <li>Item</li>  <!-- List item -->
</ul>

<ol>          <!-- Ordered list -->
    <li>First</li>
    <li>Second</li>
</ol>`
                } />
            </div>

            <h1 className="topic2"><CheckCheck/>Forms</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<input type="text" placeholder="Enter text">
<input type="checkbox" id="check">
<textarea rows="4"></textarea>
<select>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
</select>
<button type="submit">Submit</button>
<label for="check">Checkbox Label</label>`
                } />
            </div>

            <h1 className="topic2"><CheckCheck/>Tables</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<table>
    <thead>     <!-- Table header -->
        <tr>    <!-- Table row -->
            <th>Header</th>  <!-- Header cell -->
        </tr>
    </thead>
    <tbody>     <!-- Table body -->
        <tr>
            <td>Data</td>    <!-- Table data -->
        </tr>
    </tbody>
</table>`
                } />
            </div>

            <h1 className="topic2"><CheckCheck/>Semantic Elements</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<header>Site header</header>
<main>Primary content</main>
<aside>Side content</aside>
<footer>Site footer</footer>
<time datetime="2024-03-15">March 15</time>`
                } />
            </div>





            <hr className="ruleTypeShi" />
            <h1 className="topic1">Common Operations</h1>

            <h1 className="topic2"><CheckCheck />Forms</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<form action="/submit" method="POST">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="pass">Password:</label>
    <input type="password" id="pass" name="password" minlength="8">
    
    <button type="submit">Login</button>
</form>`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Tables</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<table>
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alice</td>
            <td>28</td>
        </tr>
    </tbody>
</table>`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 className="topic1">Accessibility Essentials</h1>

            <h1 className="topic2"><CheckCheck />ARIA Landmarks</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<div role="navigation" aria-label="Main menu">
    <!-- Nav links -->
</div>

<main role="main">
    <!-- Primary content -->
</main>`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Alt Texts</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<!-- ❌ Empty alt -->
<img src="logo.jpg" alt="">

<!-- ✅ Descriptive -->
<img src="logo.jpg" alt="Company logo - red square with ABC text">`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 className="topic1">Best Practices</h1>

            <h1 className="topic2"><CheckCheck />Responsive Meta Tag</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Performance Optimization</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<!-- Lazy load images -->
<img src="image.jpg" loading="lazy" alt="...">

<!-- Preload critical assets -->
<link rel="preload" href="font.woff2" as="font">`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 className="topic1">HTML5 APIs</h1>

            <h1 className="topic2"><CheckCheck />Web Storage</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<!-- Requires JavaScript -->
<script>
localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme');
</script>`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Canvas</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<canvas id="myCanvas" width="200" height="100">
    Fallback text
</canvas>
<script>
    const ctx = document.getElementById('myCanvas').getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 50, 50);
</script>`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 className="topic1">SEO Fundamentals</h1>

            <h1 className="topic2"><CheckCheck />Meta Tags</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<meta name="description" content="Page description for SERPs">
<meta name="keywords" content="HTML,CSS,JavaScript">
<meta property="og:title" content="Social Media Title">`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Structured Data</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Company Name",
    "url": "https://example.com"
}
</script>`
                } />
            </div>
        </div>
    </>)
}
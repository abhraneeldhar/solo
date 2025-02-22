import CodeSnippet from "@/components/ui/codeSnippet";
import { CheckCheck } from "lucide-react";

export default function HTML() {
    return (<>
        <div className="referenceMain">
            <h1 className="header">HTML</h1>
            

            <hr className="ruleTypeShi" />
            <h1 id="syntax" className="topic1">Syntax & Basics</h1>

            <h1 className="topic2"><CheckCheck />Basic Structure</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<!-- 🏠 HTML skeleton structure -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 📝 Main content goes here -->
</body>
</html>`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Semantic Elements</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<!-- 🏛️ Meaningful structure -->
<header>Site header</header>
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
            <h1 id="elements" className="topic1">Element Tags</h1>

            <h1 className="topic2"><CheckCheck/>Text & Structure</h1>
            <div className="textSection">
                <h1 className="topic3">Paragraphs & Headings</h1>
                <CodeSnippet code={
                    `<!-- 📄 Text elements -->
<p>Paragraph text</p>
<h1>Main Heading</h1>  <!-- h1-h6 -->
<span>Inline text container</span>`
                } />

                <h1 className="topic3">Links & Media</h1>
                <CodeSnippet code={
                    `<!-- 🔗 Links & media elements -->
<a href="https://example.com">Anchor link</a>
<img src="image.jpg" alt="Description">
<video controls><source src="video.mp4"></video>`
                } />
            </div>

            <h1 className="topic2"><CheckCheck/>Containers</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<!-- 📦 Container elements -->
<div>Block container</div>
<section>Document section</section>
<article>Independent content</article>
<nav>Navigation links</nav>`
                } />
            </div>

            <h1 className="topic2"><CheckCheck/>Lists</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<!-- 📋 List structures -->
<ul>          <!-- Unordered list -->
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
                    `<!-- 📝 User input elements -->
<input type="text" placeholder="Enter text">
<input type="checkbox" id="check">
<textarea rows="4"></textarea>

<!-- 🔘 Selection elements -->
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
                    `<!-- 🗂️ Table structure -->
<table>
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
                    `<!-- 🏷️ Semantic markup -->
<header>Site header</header>
<main>Primary content</main>
<aside>Side content</aside>
<footer>Site footer</footer>
<time datetime="2024-03-15">March 15</time>`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="commonops" className="topic1">Common Operations</h1>

            <h1 className="topic2"><CheckCheck />Forms</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<!-- 📨 Form submission example -->
<form action="/submit" method="POST">
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
                    `<!-- 📊 Data table example -->
<table>
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
            <h1 id="accessibility" className="topic1">Accessibility Essentials</h1>

            <h1 className="topic2"><CheckCheck />ARIA Landmarks</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<!-- ♿ Accessibility markup -->
<div role="navigation" aria-label="Main menu">
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
                    `<!-- ❌🖼️ Empty alt text -->
<img src="logo.jpg" alt="">

<!-- ✅📝 Descriptive alt text -->
<img src="logo.jpg" alt="Company logo - red square with ABC text">`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="seo" className="topic1">SEO Fundamentals</h1>

            <h1 className="topic2"><CheckCheck />Meta Tags</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<!-- 🔍 Search engine optimization -->
<meta name="description" content="Page description for SERPs">
<meta name="keywords" content="HTML,CSS,JavaScript">
<meta property="og:title" content="Social Media Title">`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Structured Data</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<!-- 🧱 Structured markup -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Company Name",
    "url": "https://example.com"
}
</script>`
                } />
            </div>



            <hr className="ruleTypeShi" />
            <h1 id="commonmistakes" className="topic1">Common Mistakes</h1>

            <h1 className="topic2"><CheckCheck />Unclosed Tags/Mismatched Nesting</h1>
            <div className="textSection">
                <strong>Issue:</strong> Browser rendering inconsistencies<br />
                <strong>Fix:</strong> Always close tags and maintain hierarchy
                <CodeSnippet code={
                    `<!-- ❌🚫 Wrong: Tag mismatch chaos -->
<div><p>Text</div></p>

<!-- ✅✨ Correct: Proper hierarchy -->
<div><p>Text</p></div>`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Missing DOCTYPE</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `<!-- ❌👻 Triggers quirks mode -->
<html>
...
</html>

<!-- ✅📜 HTML5 document declaration -->
<!DOCTYPE html>`
                } />
            </div>

        </div>
    </>)
}
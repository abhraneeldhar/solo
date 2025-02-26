import CodeSnippet from "@/components/ui/codeSnippet";
import { CheckCheck } from "lucide-react";

export default function CppPage() {
    return (
        <div className="referenceMain">
            <h1 className="header">C++</h1>

            <hr className="ruleTypeShi" />
            <h1 className="topic1">How to C++</h1>
            <h1 className="topic2"><CheckCheck />Manual Memory Management</h1>
            <div className="textSection">
                <p>C++ doesn’t have garbage collection. Use smart pointers to manage memory automatically.</p>
                <CodeSnippet code={
                    `std::unique_ptr<int> ptr = std::make_unique<int>(10);  // Automatically managed memory
// No need to call delete, memory is freed when ptr goes out of scope`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Header Files and Separate Compilation</h1>
            <div className="textSection">
                <p>Use header files for declarations and source files for definitions. Use include guards to prevent multiple inclusions.</p>
                <CodeSnippet code={
                    `#ifndef MY_HEADER_H
#define MY_HEADER_H
// Declarations go here
#endif`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Strong Typing and Explicit Casting</h1>
            <div className="textSection">
                <p>C++ is strongly typed. Use explicit casting for type conversions.</p>
                <CodeSnippet code={
                    `double x = 5.5;
int y = static_cast<int>(x);  // Explicit cast to int`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Object-Oriented Features</h1>
            <div className="textSection">
                <p>Use `virtual` for methods you want to override in derived classes. Use `override` to make intentions clear.</p>
                <CodeSnippet code={
                    `class Base {
public:
    virtual void foo() { /*...*/ }
};

class Derived : public Base {
public:
    void foo() override { /*...*/ }
};`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Standard Template Library (STL)</h1>
            <div className="textSection">
                <p>Use STL containers and algorithms for common tasks.</p>
                <CodeSnippet code={
                    `std::vector<int> vec = {1, 2, 3};
std::sort(vec.begin(), vec.end());  // Sorts the vector`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Move Semantics and Rvalue References</h1>
            <div className="textSection">
                <p>Use `std::move` to transfer ownership of resources.</p>
                <CodeSnippet code={
                    `std::string str1 = "Hello";
std::string str2 = std::move(str1);  // str1 is now in a valid but unspecified state`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Templates and Generic Programming</h1>
            <div className="textSection">
                <p>Use templates for generic functions and classes.</p>
                <CodeSnippet code={
                    `template <typename T>
T add(T a, T b) {
    return a + b;
}

int result = add(3, 4);  // result is 7`
                } />
            </div>
        </div>
    )
}
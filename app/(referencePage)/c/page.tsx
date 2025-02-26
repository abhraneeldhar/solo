import CodeSnippet from "@/components/ui/codeSnippet";
import { CheckCheck } from "lucide-react";

export default function CPage() {
    return (<>
        <div className="referenceMain">
            <h1 className="header">C programing</h1>


            <hr className="ruleTypeShi" />
            <h1 className="topic1">How to C</h1>
            <h1 className="topic2"><CheckCheck />Basics</h1>
            <div className="textSection">
                <p>C uses a simple syntax with curly braces <code>{ }</code>, semicolons <code>;</code>, and <code>main()</code> as the entry point. Variables must be declared before use, and there is no default initialization.</p>
                <CodeSnippet code={
                    `int main() {
    int x = 10;          // Variable declaration
    printf("%d", x);     // Output: 10
    return 0;            // Return statement
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Memory Management</h1>
            <div className="textSection">
                <p>C requires manual memory management. Use <code>malloc</code> or <code>calloc</code> to allocate memory and <code>free</code> to release it. Avoid dangling pointers and memory leaks.</p>
                <CodeSnippet code={
                    `int* arr = (int*)malloc(10 * sizeof(int)); // Allocate memory
if (arr == NULL) { /* Handle allocation failure */ }
free(arr); // Free memory`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Strings</h1>
            <div className="textSection">
                <p>Strings in C are arrays of <code>char</code> terminated by <code>\0</code>. Use functions from <code>&lt;string.h&gt;</code> like <code>strlen</code>, <code>strcpy</code>, and <code>strcat</code>.</p>
                <CodeSnippet code={
                    `char str[] = "Hello";
printf("%d", strlen(str)); // Output: 5`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Pointers</h1>
            <div className="textSection">
                <p>Pointers store memory addresses. Use <code>*</code> to dereference and <code>&</code> to get the address of a variable. Pointer arithmetic is based on the size of the type.</p>
                <CodeSnippet code={
                    `int x = 10;
int* ptr = &x; // Pointer to x
printf("%d", *ptr); // Output: 10`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Preprocessor Directives</h1>
            <div className="textSection">
                <p>Use <code>#define</code> for macros and <code>#include</code> to include headers. Use include guards to prevent double inclusion.</p>
                <CodeSnippet code={
                    `#ifndef MY_HEADER_H
#define MY_HEADER_H
// Declarations go here
#endif`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Functions</h1>
            <div className="textSection">
                <p>Functions must be declared before use. Use function prototypes in headers. Arguments are passed by value; use pointers for pass-by-reference.</p>
                <CodeSnippet code={
                    `int add(int a, int b) {
    return a + b;
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Arrays</h1>
            <div className="textSection">
                <p>Arrays in C are fixed-size by default. Use <code>malloc</code> and <code>realloc</code> for dynamic arrays. Be careful with out-of-bounds access.</p>
                <CodeSnippet code={
                    `int arr[10]; // Fixed-size array
int* dynArr = (int*)malloc(10 * sizeof(int)); // Dynamic array`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Structs</h1>
            <div className="textSection">
                <p>Structs group related data. Use <code>.</code> to access members of instances and <code>-&gt;</code> for pointers to structs.</p>
                <CodeSnippet code={
                    `struct Point {
    int x, y;
};

struct Point p1 = {10, 20};
printf("%d", p1.x); // Output: 10`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Control Flow</h1>
            <div className="textSection">
                <p>Use <code>if</code>, <code>else</code>, <code>switch</code> for conditionals and <code>for</code>, <code>while</code>, <code>do-while</code> for loops.</p>
                <CodeSnippet code={
                    `int x = 10;
if (x > 5) {
    printf("x is greater than 5");
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Error Handling</h1>
            <div className="textSection">
                <p>C uses error codes and <code>errno</code> for error handling. Always check return values of functions.</p>
                <CodeSnippet code={
                    `FILE* file = fopen("file.txt", "r");
if (file == NULL) {
    perror("Error opening file");
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />File I/O</h1>
            <div className="textSection">
                <p>Use <code>FILE*</code> and functions like <code>fopen</code>, <code>fclose</code>, <code>fread</code>, and <code>fwrite</code> for file operations.</p>
                <CodeSnippet code={
                    `FILE* file = fopen("file.txt", "w");
fprintf(file, "Hello, World!");
fclose(file);`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Libraries</h1>
            <div className="textSection">
                <p>C provides standard libraries like <code>&lt;stdio.h&gt;</code>, <code>&lt;stdlib.h&gt;</code>, and <code>&lt;string.h&gt;</code>. Use header files for custom libraries.</p>
                <CodeSnippet code={
                    `#include <stdio.h>
#include "mylib.h"`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Quirks and Tweaks</h1>
            <div className="textSection">
                <p>C has no boolean type (pre-C99), no namespaces, and weak <code>const</code> enforcement. Use <code>void*</code> for generics.</p>
                <CodeSnippet code={
                    `#define TRUE 1
#define FALSE 0`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Common Pitfalls</h1>
            <div className="textSection">
                <p>Avoid uninitialized variables, memory leaks, buffer overflows, and dangling pointers.</p>
                <CodeSnippet code={
                    `int* ptr = (int*)malloc(sizeof(int));
if (ptr != NULL) {
    *ptr = 10;
    free(ptr); // Avoid memory leaks
}`
                } />
            </div>



            <hr className="ruleTypeShi" />
            <h1 id="basics" className="topic1">C Basics</h1>

            <h1 className="topic2"><CheckCheck />Data Types</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 Basic Data Types
int num = 10;       // Integer
float decimal = 10.5;  // Floating point number
char letter = 'A';  // Character
double precise = 10.123456;  // Double precision float
_Bool flag = 1;  // Boolean (C99)

// 🔹 Void Type
void functionName();  // Function returning nothing

// 🔹 Derived Data Types
int arr[5];  // Array
struct Student { char name[50]; int age; };  // Structure
union Data { int x; float y; };  // Union
typedef unsigned int uint;  // Typedef alias`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Operators</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 Arithmetic Operators: +, -, *, /, %
int sum = a + b;

// 🔹 Relational Operators: ==, !=, >, <, >=, <=
if (x == y) { ... }

// 🔹 Logical Operators: &&, ||, !
if (a > 0 && b < 10) { ... }

// 🔹 Bitwise Operators: &, |, ^, ~, <<, >>
int result = a & b;

// 🔹 Assignment Operators: =, +=, -=, *=, /=
x += 10;  // x = x + 10;

// 🔹 Ternary Operator
int min = (a < b) ? a : b;`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Input & Output</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 Standard Input & Output
printf("Enter a number: ");
scanf("%d", &num);

// 🔹 Character Input & Output
char ch = getchar();
putchar(ch);

// 🔹 String Input & Output
char name[50];
gets(name);
puts(name);`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="control-flow" className="topic1">Control Flow</h1>

            <h1 className="topic2"><CheckCheck />Conditionals</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 If-Else Statement
if (score > 90) {
    grade = 'A';
} else if (score > 75) {
    grade = 'B';
} else {
    grade = 'C';
}

// 🔹 Switch Case
switch(day) {
    case 1: printf("Monday"); break;
    case 2: printf("Tuesday"); break;
    default: printf("Unknown"); break;
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Loops</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 For Loop
for (int i = 0; i < 5; i++) {
    printf("%d ", i);
}

// 🔹 While Loop
int i = 0;
while (i < 5) {
    printf("%d ", i);
    i++;
}

// 🔹 Do-While Loop
int i = 0;
do {
    printf("%d ", i);
    i++;
} while (i < 5);`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Jump Statements</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 Break and Continue
for (int i = 0; i < 10; i++) {
    if (i == 5) break;  // Exit loop
    if (i == 3) continue;  // Skip iteration
    printf("%d ", i);
}

// 🔹 Goto Statement
start:
printf("Hello ");
goto end;
printf("This won't be printed.");
end:
printf("World!");`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="functions" className="topic1">Functions</h1>

            <h1 className="topic2"><CheckCheck />Function Basics</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 Function Declaration & Definition
void greet() {
    printf("Hello, World!");
}

// 🔹 Function Call
greet();

// 🔹 Function with Parameters
int sum(int a, int b) {
    return a + b;
}

// 🔹 Call by Value vs Call by Reference
void modify(int *ptr) {
    *ptr = 100;  // Modifies actual variable
}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Recursion</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 Recursive Function Example
int factorial(int n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="arrays" className="topic1">Arrays & Strings</h1>

            <h1 className="topic2"><CheckCheck />Arrays</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 One-Dimensional Array
int arr[5] = {1, 2, 3, 4, 5};

// 🔹 Multi-Dimensional Array
int matrix[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Strings</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 String Basics
char str[] = "Hello";
printf("%s", str);

// 🔹 String Functions
strlen(str);
strcpy(dest, src);
strcmp(str1, str2);
strcat(str1, str2);`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="pointers" className="topic1">Pointers</h1>

            <h1 className="topic2"><CheckCheck />Pointer Basics</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 Pointer Declaration
int *ptr;
ptr = &num;  // Stores address of num

// 🔹 Dereferencing Pointer
int value = *ptr;  // Access value at pointer address

// 🔹 Pointer Arithmetic
ptr++;  // Moves to next memory location`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Dynamic Memory</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 Dynamic Memory Allocation
int *ptr = (int*)malloc(sizeof(int));
free(ptr);  // Free allocated memory`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="structures" className="topic1">Structures & Unions</h1>

            <h1 className="topic2"><CheckCheck />Structures</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 Defining a Structure
struct Student {
    char name[50];
    int age;
};

// 🔹 Accessing Structure Members
struct Student s1;
s1.age = 20;`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Unions</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 Defining a Union
union Data {
    int x;
    float y;
};

union Data d;
d.x = 10;`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 id="file-handling" className="topic1">File Handling</h1>

            <h1 className="topic2"><CheckCheck />File Operations</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `// 🔹 File Handling Basics
FILE *fp;
fp = fopen("file.txt", "w");
fprintf(fp, "Hello, File!");
fclose(fp);`
                } />
            </div>


        </div>
    </>
    )
}
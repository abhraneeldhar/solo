import CodeSnippet from "@/components/ui/codeSnippet";
import { CheckCheck, ChevronRight } from "lucide-react";

export default function PythonPage() {


    return (<>
        <div className="referenceMain">
            <h1 className="header">Python</h1>
            <hr className="ruleTypeShi" />

            <h1 className="topic1">Common Errors</h1>

            <h1 className="topic2"><CheckCheck />IndentationError</h1>

            <div className="textSection">
                <strong>Cause :</strong> Inconsistent spaces/tabs in indentation<br />
                <strong>Fix : </strong> Use 4 spaces per indent (PEP 8 standard)

                <CodeSnippet code={
                    `# ❌ Wrong
def hello():
      print("Hello") 
      # Mixed tab and space

# ✅ Correct
def hello():
    print("Hello")`} />

            </div>

            <h1 className="topic2"><CheckCheck /> TypeError: 'NoneType' object is not subscriptable</h1>

            <div className="textSection">
                <strong>Cause : </strong> Trying to index a function that returns None<br />
                <strong>Fix :</strong> Ensure the function actually returns a list/dict

                <CodeSnippet code={
                    `def get_data():
    return None

data = get_data()
print(data[0])  # ❌ TypeError

# ✅ Fix
if data:
    print(data[0])`
                } />
            </div>

            <hr className="ruleTypeShi" />
            <h1 className="topic1">Common Operations</h1>
            <h1 className="topic2"><CheckCheck />File Handling</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `# Read a file
with open("file.txt", "r") as f:
    content = f.read()

# Write to a file
with open("file.txt", "w") as f:
    f.write("Hello, World!")
`
                } />
            </div>
            <h1 className="topic2"><CheckCheck />Database Connection (SQLite Example)</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `import sqlite3

conn = sqlite3.connect("database.db")
cursor = conn.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)")
cursor.execute("INSERT INTO users (name) VALUES ('Alice')")
conn.commit()
`
                } />
            </div>


            <hr className="ruleTypeShi" />
            <h1 className="topic1">Best Practices & Tips</h1>
            <h1 className="topic2"><CheckCheck />Use List Comprehensions for Performance</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `# ❌ Slow
squares = []
for i in range(10):
    squares.append(i ** 2)

# ✅ Faster
squares = [i ** 2 for i in range(10)]`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Avoid Mutable Defaults in Function Parameters</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `def func(data=[]):  # ❌ Bad practice
    data.append(1)
    return data

print(func())  # [1]
print(func())  # [1, 1] - Unintended behavior

# ✅ Fix
def func(data=None):
    if data is None:
        data = []
    data.append(1)
    return data
`
                } />
            </div>



            <hr className="ruleTypeShi" />
            <h1 className="topic1">Syntax</h1>
            <h1 className="topic2"><CheckCheck />Variables & Data Types</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `x = 10      # Integer
y = 3.14    # Float
name = "Alice"  # String
is_active = True  # Boolean
data = None  # NoneType
`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Conditionals</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `x = 10
if x > 5:
    print("Greater than 5")
elif x == 5:
    print("Equal to 5")
else:
    print("Less than 5")`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Loops</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `# For loop
for i in range(5):  # 0 to 4
    print(i)

# While loop
x = 5
while x > 0:
    print(x)
    x -= 1`
                } />
            </div>



            <hr className="ruleTypeShi" />
            <h1 className="topic1">Common Operations</h1>
            <h1 className="topic2"><CheckCheck />List Operations</h1>
            <div className="textSection">
                Lists are mutable
                <CodeSnippet code={
                    `nums = [1, 2, 3, 4, 5]
nums.append(6)   # Add item
nums.pop()       # Remove last item
nums[0] = 10     # Modify first element
print(nums[1:3]) # Slicing (index 1 to 2)`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Dictionaries</h1>
            <div className="textSection">
                Key-Value Storage
                Use <strong>.keys()</strong>, <strong>.values()</strong>, <strong>.items()</strong> to iterate over a dictionary
                <CodeSnippet code={
                    `person = {"name": "Alice", "age": 25}
print(person["name"])  # Access value
person["city"] = "New York"  # Add new key
`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />File Handling</h1>
            <div className="textSection">
            <strong>with open()</strong> automatically closes the file after use
                <CodeSnippet code={
                    `with open("data.txt", "r") as file:
    content = file.read()
print(content)
`
                } />
            </div>


            <h1 className="topic1">Extra Useful Syntax</h1>
            <h1 className="topic2"><CheckCheck/>Lambda Functions</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `add = lambda x, y: x + y
print(add(2, 3))`
                }/>
            </div>

            <h1 className="topic2"><CheckCheck/>Exception Handling</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
finally:
    print("Cleanup actions here")`
                }/>
            </div>

            <h1 className="topic2"><CheckCheck/>List Sorting</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `nums = [3, 1, 4, 2]
nums.sort()  # Sorts in-place
print(sorted(nums, reverse=True))  # Returns new sorted list`
                }/>
            </div>

            <h1 className="topic1">Multi-Threading & Async</h1>
            <h1 className="topic2"><CheckCheck/>Async Function</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `import asyncio

async def fetch_data():
    print("Fetching...")
    await asyncio.sleep(2)  # Simulates delay
    print("Done!")

asyncio.run(fetch_data())
`
                }/>
            </div>

            <h1 className="topic1">Memory Management & Performance Optimization
            </h1>
            <h1 className="topic2"><CheckCheck/>Generators instead of lists</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `def count():
    n = 0
    while True:
        yield n
        n += 1
`
                }/>
            </div>

            <h1 className="topic2"><CheckCheck/>del to remove objects</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `del my_object`
                }/>
            </div>




        </div></>)
}

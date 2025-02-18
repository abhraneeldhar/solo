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
            <h1 className="topic1">Common Data Structures</h1>
            <h1 className="topic2"><CheckCheck />Lists</h1>
            <div className="textSection">
                Python lists are dynamic arrays (like <strong>ArrayList</strong> in Java or arrays in JavaScript).
                <h1 className="topic3">List Creation</h1>
                <CodeSnippet code={
                    `nums = [10, 20, 30, 40]  # List with values
empty_list = []  # Empty list
mixed = [1, "hello", 3.14]  # Can store different types
nested = [[1, 2], [3, 4]]  # Nested list`
                } />
                <h1 className="topic3">List Operations</h1>
                <CodeSnippet code={
                    `nums.append(50)  # ➝ [10, 20, 30, 40, 50] (Adds at end)
nums.insert(2, 99)  # ➝ [10, 20, 99, 30, 40, 50] (Inserts at index)
nums.pop()  # ➝ Removes last element
nums.remove(99)  # ➝ Removes first occurrence of value
nums.reverse()  # ➝ Reverses the list
nums.sort()  # ➝ Sorts list (ascending)
nums.sort(reverse=True)  # ➝ Sorts in descending order`
                } />
                <h1 className="topic3">Slicing Lists</h1>
                <CodeSnippet code={
                    `nums = [10, 20, 30, 40, 50]
                print(nums[1:4])  # ➝ [20, 30, 40] (Start index inclusive, end exclusive)
                print(nums[:3])  # ➝ [10, 20, 30] (First 3 elements)
                print(nums[-2:])  # ➝ [40, 50] (Last 2 elements)`
                } />
                <h1 className="topic3">List Comprehensions</h1>
                <CodeSnippet code={
                    `squares = [x**2 for x in range(5)]  # ➝ [0, 1, 4, 9, 16]
                evens = [x for x in range(10) if x % 2 == 0]  # ➝ [0, 2, 4, 6, 8]`
                } />
            </div>


            <h1 className="topic2">Tuples</h1>
            Tuples are faster and safer than lists when you don’t need modifications.
            <h1 className="topic3">Tuple Creation</h1>
            <div className="textSection">

                <CodeSnippet code={
                    `coordinates = (3, 4)
                single_element = (5,)  # Must include a comma!`
                } />
                <h1 className="topic3">Tuple Operations</h1>
                <CodeSnippet code={
                    `x, y = coordinates  # Tuple unpacking
                print(len(coordinates))  # ➝ 2
                print(coordinates[0])  # ➝ 3`
                } />
                <h1 className="topic3">Named Tuples (Better Readability)</h1>
                <CodeSnippet code={
                    `from collections import namedtuple
                Point = namedtuple("Point", ["x", "y"])
                p = Point(3, 4)
                print(p.x, p.y)  # ➝ 3, 4`
                } />


            </div>


            <h1 className="topic2"><CheckCheck />Dictionaries</h1>
            <div className="textSection">
                Dictionaries work like JSON objects or HashMaps in Java
                Use <strong>.keys()</strong>, <strong>.values()</strong>, <strong>.items()</strong> to iterate over a dictionary
                <h1 className="topic3">Dictionary Creation</h1>
                <CodeSnippet code={
                    `person = {"name": "Alice", "age": 25, "city": "NY"}
empty_dict = {}  # Empty dictionary`
                } />
                <h1 className="topic3">Access & Modify Dictionary</h1>
                <CodeSnippet code={
                    `print(person["name"])  # ➝ Alice
person["age"] = 26  # Modify value
person["job"] = "Engineer"  # Add new key-value`
                } />
                <h1 className="topic3">Dictionary Methods</h1>
                <CodeSnippet code={
                    `print(person.keys())  # ➝ dict_keys(['name', 'age', 'city', 'job'])
print(person.values())  # ➝ dict_values(['Alice', 26, 'NY', 'Engineer'])
print(person.items())  # ➝ dict_items([('name', 'Alice'), ('age', 26), ...])

person.pop("city")  # Removes 'city' key
person.get("salary", "Not specified")  # ➝ Avoids KeyError, default value`
                } />
            </div>


            <h1 className="topic2"><CheckCheck />Sets</h1>
            <div className="textSection">
                Sets are unordered collections of unique elements in Python.
                They support mathematical operations like union, intersection, and difference.
                <h1 className="topic3">Set Creation</h1>
                <CodeSnippet code={
                    `numbers = {1, 2, 3, 4, 5}
empty_set = set()  # Empty set ({} creates an empty dictionary)`
                } />
                <h1 className="topic3">Add & Remove Elements</h1>
                <CodeSnippet code={
                    `numbers.add(6)  # Adds an element
numbers.remove(3)  # Removes an element (KeyError if missing)
numbers.discard(10)  # Removes if exists, no error if missing
numbers.pop()  # Removes a random element`
                } />
                <h1 className="topic3">Set Operations</h1>
                <CodeSnippet code={
                    `A = {1, 2, 3}
B = {3, 4, 5}

print(A | B)  # Union ➝ {1, 2, 3, 4, 5}
print(A & B)  # Intersection ➝ {3}
print(A - B)  # Difference ➝ {1, 2}
print(A ^ B)  # Symmetric Difference ➝ {1, 2, 4, 5}`
                } />
            </div>







            <h1 className="topic1">Object-Oriented Pythoning</h1>
            <div className="textSection">
                

                <h1 className="topic2">Defining Classes & Objects</h1>
                <CodeSnippet code={
                    `class Car:
    def __init__(self, brand, model):
        self.brand = brand  # Instance variable
        self.model = model

my_car = Car("Tesla", "Model S")  # Creating an object
print(my_car.brand)  # ➝ Tesla`
                } />

                <h1 className="topic2">Instance & Class Variables</h1>
                <CodeSnippet code={
                    `class Employee:
    company = "TechCorp"  # Class variable (shared across instances)

    def __init__(self, name, salary):
        self.name = name  # Instance variable
        self.salary = salary

emp1 = Employee("Alice", 60000)
emp2 = Employee("Bob", 75000)
print(emp1.company)  # ➝ TechCorp
print(emp2.salary)   # ➝ 75000`
                } />

                <h1 className="topic2">Methods & Static Methods</h1>
                <CodeSnippet code={
                    `class MathUtils:
    def add(self, a, b):  # Instance method
        return a + b

    @staticmethod
    def multiply(a, b):  # Static method (no self)
        return a * b

math = MathUtils()
print(math.add(5, 3))       # ➝ 8
print(MathUtils.multiply(4, 2))  # ➝ 8`
                } />

                <h1 className="topic2">Encapsulation & Private Variables</h1>
                <CodeSnippet code={
                    `class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private variable (Name mangling)

    def get_balance(self):
        return self.__balance  # Access via method

account = BankAccount(5000)
print(account.get_balance())  # ➝ 5000
# print(account.__balance)  # ❌ AttributeError`
                } />

                <h1 className="topic2">Inheritance</h1>
                <CodeSnippet code={
                    `class Animal:
    def speak(self):
        return "Animal speaks"

class Dog(Animal):  # Inheriting from Animal
    def speak(self):
        return "Woof!"

d = Dog()
print(d.speak())  # ➝ Woof!`
                } />

                <h1 className="topic2">Polymorphism</h1>
                <CodeSnippet code={
                    `class Bird:
    def make_sound(self):
        return "Chirp!"

class Cat:
    def make_sound(self):
        return "Meow!"

def play_sound(animal):
    print(animal.make_sound())

play_sound(Bird())  # ➝ Chirp!
play_sound(Cat())   # ➝ Meow!`
                } />

                <h1 className="topic2">Dunder Methods (Magic Methods)</h1>
                <CodeSnippet code={
                    `class Vector:
    def __init__(self, x, y):
        self.x, self.y = x, y

    def __add__(self, other):  # Overloading '+'
        return Vector(self.x + other.x, self.y + other.y)

v1, v2 = Vector(3, 4), Vector(1, 2)
v3 = v1 + v2
print(v3.x, v3.y)  # ➝ 4, 6`
                } />
            </div>














            <h1 className="topic2"><CheckCheck />File Handling</h1>
            <div className="textSection">
                <strong>with open()</strong> automatically closes the file after use
                <CodeSnippet code={
                    `with open("data.txt", "r") as file:
    content = file.read()
print(content)
`} />
            </div>


            <h1 className="topic1">Extra Useful Syntax</h1>
            <h1 className="topic2"><CheckCheck />Lambda Functions</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `add = lambda x, y: x + y
print(add(2, 3))`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Exception Handling</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
finally:
    print("Cleanup actions here")`
                } />
            </div>


            <h1 className="topic1">Multi-Threading & Async</h1>
            <h1 className="topic2"><CheckCheck />Async Function</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `import asyncio

async def fetch_data():
    print("Fetching...")
    await asyncio.sleep(2)  # Simulates delay
    print("Done!")

asyncio.run(fetch_data())
`
                } />
            </div>

            <h1 className="topic1">Memory Management & Performance Optimization
            </h1>
            <h1 className="topic2"><CheckCheck />Generators instead of lists</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `def count():
    n = 0
    while True:
        yield n
        n += 1`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />del to remove objects</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `del my_object`
                } />
            </div>




        </div></>)
}

import CodeSnippet from "@/components/ui/codeSnippet";
import { CheckCheck } from "lucide-react";

export default function PythonPage() {


    return (<>
        <div className="referenceMain">
            <h1 className="header">Python</h1>

            <hr className="ruleTypeShi" />
            <h1 id="syntax" className="topic1">How to Python 🔥</h1>
            <p>This is the fastest way to shift into python gear, more indepth references are listed after.</p>
            <h1 className="topic2"><CheckCheck />Indentation Matters</h1>
            <div className="textSection">
                <p>Python uses indentation instead of curly braces <code>{ }</code> to define blocks of code. Incorrect indentation will throw an error.</p>
                <CodeSnippet code={
                    `if x > 5:
    print("x is greater than 5")  # Correct
print("This is outside the if block")`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />No Semicolons</h1>
            <div className="textSection">
                <p>Python does not require semicolons at the end of statements.</p>
                <CodeSnippet code={
                    `x = 10  # No semicolon needed`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Variables and Types</h1>
            <div className="textSection">
                <p>Python is dynamically typed, so you don’t need to declare variable types. Use <code>type()</code> to check the type of a variable.</p>
                <CodeSnippet code={
                    `x = 10          # Integer
x = "Hello"     # Now it's a string
print(type(x))  # Output: <class 'str'>`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Strings</h1>
            <div className="textSection">
                <p>Strings can be enclosed in single quotes, double quotes, or triple quotes for multi-line strings.</p>
                <CodeSnippet code={
                    `s = "Hello"
s = 'Hello'
s = """This is a
multi-line string"""`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Lists vs Arrays</h1>
            <div className="textSection">
                <p>Python uses lists instead of arrays. Lists are dynamic and can hold mixed types.</p>
                <CodeSnippet code={
                    `my_list = [1, 2, 3, "Hello"]`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />For Loops</h1>
            <div className="textSection">
                <p>Python’s <code>for</code> loop is more like a <code>foreach</code> loop. Use <code>range()</code> for traditional indexing.</p>
                <CodeSnippet code={
                    `for i in range(5):  # 0 to 4
    print(i)`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />No Switch-Case</h1>
            <div className="textSection">
                <p>Python does not have a <code>switch-case</code> statement. Use <code>if-elif-else</code> or dictionaries instead.</p>
                <CodeSnippet code={
                    `choice = 2
if choice == 1:
    print("Case 1")
elif choice == 2:
    print("Case 2")
else:
    print("Default case")`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Functions</h1>
            <div className="textSection">
                <p>Use <code>def</code> to define functions. No need to specify return types.</p>
                <CodeSnippet code={
                    `def add(a, b):
    return a + b`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />No Increment/Decrement Operators</h1>
            <div className="textSection">
                <p>Python does not have <code>++</code> or <code>--</code>. Use <code>+=</code> or <code>-=</code> instead.</p>
                <CodeSnippet code={
                    `x = 5
x += 1  # Equivalent to x++`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Input and Output</h1>
            <div className="textSection">
                <p>Use <code>input()</code> to take user input (returns a string) and <code>print()</code> for output.</p>
                <CodeSnippet code={
                    `name = input("Enter your name: ")
print("Hello,", name)`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />File Handling</h1>
            <div className="textSection">
                <p>Use <code>open()</code> to open files. Always close files with <code>close()</code> or use <code>with</code> for automatic closing.</p>
                <CodeSnippet code={
                    `with open("file.txt", "r") as file:
    content = file.read()`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />No Pointers</h1>
            <div className="textSection">
                <p>Python does not have pointers. Variables are references to objects.</p>
                <CodeSnippet code={
                    `a = [1, 2, 3]
b = a  # b references the same list as a
b[0] = 10
print(a)  # Output: [10, 2, 3]`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Global Variables</h1>
            <div className="textSection">
                <p>Use the <code>global</code> keyword to modify global variables inside a function.</p>
                <CodeSnippet code={
                    `x = 10
def change_x():
    global x
    x = 20`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />List Comprehensions</h1>
            <div className="textSection">
                <p>Python has a concise way to create lists using list comprehensions.</p>
                <CodeSnippet code={
                    `squares = [x**2 for x in range(10)]`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />No Main Function</h1>
            <div className="textSection">
                <p>Python scripts don’t require a <code>main()</code> function, but you can use <code>if __name__ == "__main__":</code> to define executable code.</p>
                <CodeSnippet code={
                    `def main():
    print("Hello, World!")

if __name__ == "__main__":
    main()`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Exception Handling</h1>
            <div className="textSection">
                <p>Use <code>try-except</code> for exception handling.</p>
                <CodeSnippet code={
                    `try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")`
                } />
            </div>

          

            <h1 className="topic2"><CheckCheck />Modules and Imports</h1>
            <div className="textSection">
                <p>Use <code>import</code> to include modules.</p>
                <CodeSnippet code={
                    `import math
print(math.sqrt(16))  # Output: 4.0`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />No <code>null</code></h1>
            <div className="textSection">
                <p>Python uses <code>None</code> instead of <code>null</code>.</p>
                <CodeSnippet code={
                    `x = None`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Dictionaries</h1>
            <div className="textSection">
                <p>Python’s equivalent of a map or hash table is a dictionary.</p>
                <CodeSnippet code={
                    `my_dict = {"key1": "value1", "key2": "value2"}
print(my_dict["key1"])  # Output: value1`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Tuples</h1>
            <div className="textSection">
                <p>Tuples are immutable sequences.</p>
                <CodeSnippet code={
                    `my_tuple = (1, 2, 3)`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Sets</h1>
            <div className="textSection">
                <p>Sets are unordered collections of unique elements.</p>
                <CodeSnippet code={
                    `my_set = {1, 2, 3}`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Lambda Functions</h1>
            <div className="textSection">
                <p>Python supports anonymous functions using <code>lambda</code>.</p>
                <CodeSnippet code={
                    `square = lambda x: x**2
print(square(5))  # Output: 25`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />No <code>do-while</code> Loop</h1>
            <div className="textSection">
                <p>Python does not have a <code>do-while</code> loop. Use <code>while</code> with a condition.</p>
                <CodeSnippet code={
                    `while True:
    # Do something
    if condition:
        break`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />String Formatting</h1>
            <div className="textSection">
                <p>Use <code>f-strings</code> (Python 3.6+) for clean string formatting.</p>
                <CodeSnippet code={
                    `name = "Alice"
print(f"Hello, {name}!")`
                } />
            </div>







            <hr className="ruleTypeShi" />
            <h1 id="syntax" className="topic1">Syntax</h1>
            <h1 className="topic2"><CheckCheck />Variables & Data Types</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `# 💠 Integer
x = 10

# 💠 Float
y = 3.14  

# 💠 String
name = "Alice"  

# 💠 Boolean
is_active = True

# 💠 NoneType
data = None  
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
                    `# 💠 For loop
for i in range(5):  # 0 to 4
    print(i)

# 💠 While loop
x = 5
while x > 0:
    print(x)
    x -= 1`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Operators</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `# ♦️Arithmetic operators
# 💠 Addition
print(10 + 3)

# 💠 Exponentiation
print(10 ** 2)

# 💠 Floor division
print(10 // 3)  

# 💠 Comparison operators
x = 5
print(x == 5)
print(x != 3)

# 💠 Logical operators
if x > 0 and x < 10:
    print("Valid range")`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Conditional Flow</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `# If-elif-else
age = 18
if age < 13:
    print("Child")
elif age < 20:
    # This will execute
    print("Teen")  
else:
    print("Adult")

# Ternary operator
status = "Allowed" if age >= 18 else "Denied"`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Comments</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `# Single-line comment

"""
Multi-line comment
(using triple-quotes)
"""

def calculate():
    '''Docstring comment 
    explaining function purpose'''`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Input/Output</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `# 💠 Basic output
print("Hello", "World!", sep="-")

# 💠 Formatted string (f-string)
name = "Alice"
print(f"Hello {name}!")

# 💠 User input
age = input("Enter your age: ")
print(f"You're {age} years old")`
                } />
            </div>



            <hr className="ruleTypeShi" />
            <h1 id="ds" className="topic1">Common Data Structures</h1>

            <h1 className="topic2"><CheckCheck />Strings</h1>
            <div className="textSection">
                <p>Strings are immutable sequences used for text manipulation.</p>
                <h1 className="topic3">String Manipulation and Methods</h1>
                <CodeSnippet code={
                    `# 💠 String manipulation
greeting = "Hello, world!"

# 💠 Slicing a string
# ➝ Hello (First 5 characters) ✂️
print(greeting[:5])

# 💠 String methods
# ➝ ['Hello', 'world!'] 🧩
split_str = greeting.split(", ")

# ➝ 'Hello-world!' ➡️
joined_str = "-".join(split_str)  

# 💠 Removing whitespaces
str_with_spaces = "   lots of space   "
print(str_with_spaces.strip())
# ➝ 'lots of space' ✂️`
                } />
            </div>



            <h1 className="topic2"><CheckCheck />Lists</h1>
            <div className="textSection">
                <p>Python lists are dynamic arrays (like <strong>ArrayList</strong> in Java or arrays in JavaScript).</p>
                <h1 className="topic3">List Creation, Indexing, and Slicing</h1>
                <CodeSnippet code={
                    `# Creating a list with values
nums = [10, 20, 30, 40]

# Creating an empty list
empty_list = [] 

# Mixed type list (integer, string, float)
mixed = [1, "hello", 3.14]  

# Nested list (list inside a list)
nested = [[1, 2], [3, 4]] 

# Accessing elements by index
print(nums[0])  #first element)
print(nums[-1]) #(last element)

# Slicing the list (Start index inclusive, end exclusive)
print(nums[1:3]) #from index 1 to 2
print(nums[:2])  #first 2 elements
print(nums[-3:]) #last 3 elements`
                } />
                <h1 className="topic3">List Methods</h1>
                <CodeSnippet code={
                    `# Append value to the list
nums.append(50)

# Insert value at a specific index
nums.insert(2, 99)  #inserts 99 at index 

# Pop removes and returns the last item
nums.pop()

# Remove first occurrence of value
nums.remove(99)

# Reverse the list
nums.reverse()

# Sort the list in ascending order
nums.sort(

# Sort in descending order
nums.sort(reverse=True)`
                } />
                <h1 className="topic3">List Comprehensions</h1>
                <CodeSnippet code={
                    `# Creating a list of squares
squares = [x**2 for x in range(5)]

# Creating a list of even numbers
evens = [x for x in range(10) if x % 2 == 0]`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Tuples</h1>
            <div className="textSection">
                <p>Tuples are immutable sequences, useful for fixed collections of items.</p>
                <h1 className="topic3">Tuple Creation and Unpacking</h1>
                <CodeSnippet code={
                    `# Creating a tuple
tup = (1, 2, 3)

# Single element tuple (comma is needed)
single_element_tuple = (10,)

# Unpacking tuple values into variables
a, b, c = tup  # a=1, b=2, c=3

# Nested tuples
nested_tup = ((1, 2), (3, 4))`

                } />
            </div>

            <h1 className="topic2"><CheckCheck />Dictionaries</h1>
            <div className="textSection">
                <p>Dictionaries store data as key-value pairs.</p>
                <h1 className="topic3">Dictionary Creation and Methods</h1>
                <CodeSnippet code={
                    `# Creating a dictionary
my_dict = {"name": "Alice", "age": 25, "city": "Wonderland"}

# Accessing value by key
print(my_dict["name"])

# Adding or updating a key-value pair
my_dict["age"] = 26  # Updates
my_dict["country"] = "Utopia"  # Adds

# Removing a key-value pair
del my_dict["city"]  # Removes 'city'

# Dictionary methods
keys = my_dict.keys() 
values = my_dict.values() 
items = my_dict.items()`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Sets</h1>
            <div className="textSection">
                <p>Sets are unordered collections of unique elements.</p>
                <h1 className="topic3">Set Operations</h1>
                <CodeSnippet code={
                    `# Creating a set
my_set = {1, 2, 3, 4}

# Adding an element to the set
my_set.add(5)

# Removing an element from the set
my_set.remove(3) 

# Union of sets
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union = set1.union(set2) 

# Intersection of sets
intersection = set1.intersection(set2)`
                } />
            </div>




            {/* <h1 className="topic2"><CheckCheck />Collections Module</h1>
            <div className="textSection">
                <p>The collections module provides specialized container datatypes.</p>
                <h1 className="topic3">defaultdict, Counter, deque, namedtuple</h1>
                <CodeSnippet code={
                    `# Using defaultdict
from collections import defaultdict
my_defaultdict = defaultdict(int)
my_defaultdict["key1"] += 1 
# ➝ defaultdict(<class 'int'>, {'key1': 1}) 📜

# Using Counter (counts occurrences of elements)
from collections import Counter
my_counter = Counter([1, 2, 2, 3, 3, 3, 4])
print(my_counter) 
# ➝ Counter({3: 3, 2: 2, 1: 1, 4: 1}) 🔢

# Using deque (double-ended queue)
from collections import deque
my_deque = deque([1, 2, 3])
my_deque.append(4)
# ➝ deque([1, 2, 3, 4]) ➕

my_deque.appendleft(0)
# ➝ deque([0, 1, 2, 3, 4]) 🔄

# Using namedtuple (creates tuple with named fields)
from collections import namedtuple
Person = namedtuple('Person', ['name', 'age'])
person1 = Person(name="Alice", age=25)
print(person1.name)  # ➝ Alice 📜`
                } />
            </div> */}


            <hr className="ruleTypeShi" />

            <h1 id="functions" className="topic1">Functions</h1>
            <div className="textSection">
                <p>Functions allow you to group code into reusable blocks.</p>
                <h1 className="topic2"><CheckCheck />Function Definition & Usage</h1>
                <CodeSnippet code={
                    `# Function definition with parameters and return value
def greet(name):
    # Function that greets the person by name
    return f"Hello, {name}!"

# Calling the function
print(greet("Alice"))`
                } />

                <h1 className="topic2"><CheckCheck />Arguments</h1>
                <CodeSnippet code={
                    `# Positional Arguments
def add(a, b):
    return a + b
print(add(3, 4))

# Keyword Arguments
def greet(name, message="Hello"):
    return f"{message}, {name}!"
print(greet(name="Bob", message="Good morning"))
print(greet(name="Alice"))

# Default Argument
def multiply(a, b=2):
    return a * b
print(multiply(5))  # ➝ 10 (b defaults to 2)
print(multiply(5, 3))  # ➝ 15 (b is overridden)

# *args (Variable Positional Arguments)
def add_numbers(*args):
    return sum(args)  
print(add_numbers(1, 2, 3, 4))

# **kwargs (Variable Keyword Arguments)
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}") 
print_info(name="John", age=25, city="NY")`
                } />

                <h1 className="topic2"><CheckCheck />Lambda Functions</h1>
                <CodeSnippet code={
                    `# Lambda function definition (an anonymous function)
square = lambda x: x**2 

# Using the lambda function
print(square(5))`
                } />

                <h1 className="topic2"><CheckCheck />Scope</h1>
                <CodeSnippet code={
                    `# Local and Global Scope
x = 10  # Global variable 🌎

def my_function():
    x = 5  # Local variable inside function 🏠
    print(x)  # ➝ 5 (local variable is used here)

my_function()
print(x)  # ➝ 10 (global variable is accessed here)

# Nonlocal keyword to modify variable from enclosing scope
def outer_function():
    x = 10  # Enclosing scope variable 📦
    
    def inner_function():
        nonlocal x  # Refers to x in outer function's scope
        x = 20  # Modifies x in enclosing scope
        
    inner_function()
    print(x)  # ➝ 20 (modified by inner_function)

outer_function()`} />
            </div>




            <hr className="ruleTypeShi" />
            <h1 id="oop" className="topic1">Object-Oriented Pythoning</h1>
            <div className="textSection">
                <h1 className="topic2"><CheckCheck />Defining Classes & Objects</h1>
                <CodeSnippet code={
                    `class Car:
    def __init__(self, brand, model):
        self.brand = brand  # Instance variable
        self.model = model

my_car = Car("Tesla", "Model S")  # Creating an object
print(my_car.brand)  # ➝ Tesla`
                } />
                <h1 className="topic2"><CheckCheck />Instance & Class Variables</h1>
                <CodeSnippet code={
                    `class Employee:
    company = "TechCorp"  # Class variable

    def __init__(self, name, salary):
        self.name = name  # Instance variable
        self.salary = salary

emp1 = Employee("Alice", 60000)
emp2 = Employee("Bob", 75000)
print(emp1.company) 
print(emp2.salary)`
                } />

                <h1 className="topic2"><CheckCheck />Methods & Static Methods</h1>
                <CodeSnippet code={
                    `class MathUtils:
    # Instance method
    def add(self, a, b):  
        return a + b

    @staticmethod
    def multiply(a, b):
        return a * b

math = MathUtils()
print(math.add(5, 3))
print(MathUtils.multiply(4, 2))`
                } />

                <h1 className="topic2"><CheckCheck />Encapsulation & Private Variables</h1>
                <CodeSnippet code={
                    `class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private variable

    def get_balance(self):
        return self.__balance  # Access via method

account = BankAccount(5000)
print(account.get_balance())
# print(account.__balance)`
                } />

                <h1 className="topic2"><CheckCheck />Inheritance</h1>
                <CodeSnippet code={
                    `class Animal:
    def speak(self):
        return "Animal speaks"

# Inheriting from Animal
class Dog(Animal):  
    def speak(self):
        return "Woof!"

d = Dog()
print(d.speak())`
                } />

                <h1 className="topic2"><CheckCheck />Polymorphism</h1>
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

                <h1 className="topic2"><CheckCheck />Dunder Methods (Magic Methods)</h1>
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


            <hr className="ruleTypeShi" />
            <h1 id="commonerrors" className="topic1">Common Errors</h1>
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
            <h1 id="fh" className="topic1">File Handling</h1>
            <h1 className="topic2"><CheckCheck />Opening & Closing Files</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `# Open file (default 'r' mode)  
file = open('data.txt')  
file.close()  

# Using with statement (auto-closes)  
with open('data.txt') as file:  
    pass`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Reading Files</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `# Read entire content  
with open('data.txt') as f:  
    content = f.read()  

# Read line by line  
with open('data.txt') as f:  
    for line in f:  
        print(line.strip())  `
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Writing Files</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `# Overwrite file ('w' mode)  
with open('output.txt', 'w') as f:  
    f.write('New content')  

# Write multiple lines  
lines = ['First', 'Second']  
with open('data.txt', 'w') as f:  
    f.writelines(lines)  `
                } />
            </div>

            <h1 className="topic2"><CheckCheck />Appending to Files</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `# Add to existing file  
with open('logs.txt', 'a') as f:  
    f.write('New log entry');`
                } />
            </div>

            <h1 className="topic2"><CheckCheck />File Modes</h1>
            <div className="textSection">
                <p>r  - Read (default)  <br />
                    w  - Write (overwrite)  <br />
                    a  - Append  <br />
                    r+ - Read + Write <br />
                    b  - Binary mode  <br />
                    t  - Text mode (default) </p>
            </div>

            <h1 className="topic2"><CheckCheck />Working with CSV</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `import csv  

# Read CSV  
with open('data.csv', 'r') as f:  
    reader = csv.reader(f)  
    for row in reader:  
        print(row)  

# Write CSV  
data = [['Name', 'Age'], ['Alice', 28]]  
with open('data.csv', 'w') as f:  
    writer = csv.writer(f)  
    writer.writerows(data) `
                } />
            </div>

            <h1 className="topic2"><CheckCheck />JSON Handling</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `import json  

# Write JSON  
data = {'name': 'Alice', 'age': 30}  
with open('data.json', 'w') as f:  
    json.dump(data, f)  

# Read JSON  
with open('data.json') as f:  
    loaded = json.load(f) `
                } />
            </div>






            {/* <h1 className="topic2"><CheckCheck />Database Connection (SQLite Example)</h1>
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
            </div> */}


            {/* <hr className="ruleTypeShi" />
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
            </div> */}





            {/* <h1 className="topic1">Extra Useful Syntax</h1>
            <h1 className="topic2"><CheckCheck />Lambda Functions</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `add = lambda x, y: x + y
print(add(2, 3))`
                } />
            </div> */}

            <hr className="ruleTypeShi" />

            <h1 id="excp" className="topic1">Exception Handling</h1>
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



            <hr className="ruleTypeShi" />
            <h1 id="async" className="topic1">Multi-Threading & Async</h1>
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

            {/* <h1 className="topic1">Memory Management & Performance Optimization
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
            </div> */}

            {/* <h1 className="topic2"><CheckCheck />del to remove objects</h1>
            <div className="textSection">
                <CodeSnippet code={
                    `del my_object`
                } />
            </div> */}


        </div>
    </>)
}

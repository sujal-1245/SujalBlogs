# 🧭 MASTER TRANSLATION MAP: Natural Language → Code

---

## 🔁 REPETITION / LOOPS — With Examples

| You Think...             | Code                         | Example / Explanation                            |
|--------------------------|------------------------------|--------------------------------------------------|
| Do this N times          | `for i in range(n):`         | `for i in range(5): print(i)` → 0 1 2 3 4        |
| From 1 to N              | `for i in range(1, n + 1):`  | `for i in range(1, 6): print(i)` → 1 2 3 4 5     |
| From N to 1              | `for i in range(n, 0, -1):`  | `for i in range(5, 0, -1): print(i)` → 5 4 3 2 1 |
| From N-1 to 0            | `for i in range(n-1, -1, -1)`| `for i in range(4, -1, -1): print(i)` → 4 to 0   |
| Every item in a list     | `for item in my_list:`       | `for item in [1,2,3]: print(item)`               |
| While condition is true  | `while condition:`           | `i=0; while i<3: print(i); i+=1` → 0 1 2         |
| Until end of list        | `while i < len(arr):`        | `i=0; while i < len(arr): print(arr[i]); i+=1`   |

---

## 🔍 CONDITIONALS — With Examples

| You Think...           | Code                        | Example                                           |
|------------------------|-----------------------------|---------------------------------------------------|
| First item?            | `if i == 0:`                | `if i == 0: print("First row")`                   |
| Last column?           | `if j == n - 1:`            | Used in patterns                                  |
| If middle row?         | `if i != 0 and i != n - 1:` | Skip first and last rows                          |
| If both true           | `if cond1 and cond2:`       | `if x > 0 and x % 2 == 0:`                         |
| If either true         | `if cond1 or cond2:`        | `if x < 0 or x > 100:`                             |
| If not this            | `if not cond:`              | `if not found:`                                   |

---

## 🧱 STRING + STAR PATTERNS — With Examples

| Pattern                  | Code                                  | Example (n = 3)        |
|--------------------------|----------------------------------------|------------------------|
| Full row                 | `'*' * n`                              | `***`                  |
| Hollow row              | `'*' + ' '*(n-2) + '*'`                | `* *`                  |
| Right angled triangle   | `'*'*i` in `for i in range(1,n+1)`     |                        |
| Inverted triangle       | `'*'*i` in `for i in range(n,0,-1)`    |                        |
| Mirrored triangle       | `' '*(n-i) + '*'*i`                    |                        |
| Centered pyramid        | `' '*(n-i) + '*'*(2*i-1)`              |                        |
| Inverted pyramid        | Reverse of centered pyramid           |                        |
| Diamond pattern         | Combine pyramid + inverted pyramid     |                        |
| Number triangle         | `str(i)*i`                             | `122333`               |
| Floyd’s triangle        | Use `join(str(count))` with counter    |                        |
| Sandglass               | Inverted + upright triangle            |                        |
| Hollow triangle         | `if j==0 or j==i or i==n-1:`           |                        |

---

## 📚 PYTHON INBUILT DATA STRUCTURES

### 🟦 LISTS

| Operation         | Code                 | Example                    |
|------------------|----------------------|----------------------------|
| Create empty      | `lst = []`           |                            |
| Add item          | `lst.append(4)`      | `[1,2,3]` → `[1,2,3,4]`     |
| Insert at index   | `lst.insert(1, 10)`  | `[1,2,3]` → `[1,10,2,3]`    |
| Remove by value   | `lst.remove(2)`      | `[1,2,3]` → `[1,3]`         |
| Pop by index      | `lst.pop(1)`         | `[1,2,3]` → `[1,3]`         |
| Access i-th       | `lst[i]`             | `lst[1]` → `20`             |
| Slice sublist     | `lst[1:3]`           | `[10,20,30]` → `[20,30]`    |
| Length            | `len(lst)`           | `[1,2,3]` → `3`             |
| Loop              | `for item in lst:`   |                            |
| Check exist       | `if x in lst:`       |                            |
| Reverse           | `lst[::-1]`          | `[1,2,3]` → `[3,2,1]`       |
| Sort              | `lst.sort()`         | `[3,1,2]` → `[1,2,3]`       |

### 🟪 TUPLES

| Operation        | Code               | Example          |
|------------------|--------------------|------------------|
| Create tuple      | `t = (1,2,3)`       |                  |
| Access element    | `t[0]`             | `1`              |
| Length            | `len(t)`           | `3`              |
| Convert to list   | `list(t)`          | `[1,2,3]`        |
| Unpack values     | `a,b = (1,2)`      | `a=1, b=2`       |

### 🟨 SETS

| Operation        | Code               | Example                |
|------------------|--------------------|------------------------|
| Create set        | `s = {1,2,3}`       |                        |
| Add item          | `s.add(4)`          | `{1,2,3}` → `{1,2,3,4}` |
| Remove item       | `s.remove(2)`       | `{1,2,3}` → `{1,3}`     |
| Membership check  | `if x in s:`        |                        |
| Union             | `a | b`             |                        |
| Intersection      | `a & b`             | `{2}`                  |
| Difference        | `a - b`             | `{1,3}`                |
| List to set       | `set([1,2,2,3])`    | `{1,2,3}`              |

### 🟥 DICTIONARIES

| Operation          | Code                   | Example                             |
|--------------------|------------------------|-------------------------------------|
| Create              | `d = {'a': 1}`         |                                     |
| Access by key       | `d['a']`              | `1`                                 |
| Safe get            | `d.get('x', 0)`       | `0` if key not found                |
| Add key-value       | `d['b'] = 2`          | `{'a':1, 'b':2}`                     |
| Merge dicts         | `d.update(d2)`        |                                     |
| Loop keys           | `for key in d:`       |                                     |
| Loop items          | `for k,v in d.items()`|                                     |
| Check key exists    | `if 'a' in d:`        |                                     |
| Frequency count     | `d[x] = d.get(x, 0)+1`|                                     |

---

## 🧮 Math & Logic Patterns

| You Think...        | Code                                     |
|---------------------|------------------------------------------|
| Sum 1 to n          | `sum = 0; for i in range(1,n+1): sum+=i` |
| Even                | `if x % 2 == 0:`                          |
| Odd                 | `if x % 2 != 0:`                          |
| Prime check         | loop from `2` to `sqrt(n)`               |
| Perfect square      | `int(n**0.5)**2 == n`                    |
| GCD                 | `math.gcd(a, b)`                          |
| LCM                 | `(a*b)//math.gcd(a, b)`                   |
| Factorial           | `math.factorial(n)`                      |

---

## 📏 Indexing, Searching

| You Think...           | Code                                  |
|------------------------|----------------------------------------|
| Linear search           | `for i in arr: if i == target:`       |
| Binary search           | `while low <= high: mid = ...`        |
| Find max element        | `if i > max:`                         |
| Count occurrences       | `arr.count(x)`                        |
| Index of element        | `arr.index(x)`                        |
| Reverse using slicing   | `arr[::-1]`                            |

---

## 🔃 Sorting Algorithms

### ✅ Bubble Sort
```python
for i in range(len(arr)):
    for j in range(0, len(arr)-i-1):
        if arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]
```

### ✅ Selection Sort
```python
for i in range(len(arr)):
    min_idx = i
    for j in range(i+1, len(arr)):
        if arr[j] < arr[min_idx]:
            min_idx = j
    arr[i], arr[min_idx] = arr[min_idx], arr[i]
```

### ✅ Insertion Sort
```python
for i in range(1, len(arr)):
    key = arr[i]
    j = i - 1
    while j >= 0 and arr[j] > key:
        arr[j + 1] = arr[j]
        j -= 1
    arr[j + 1] = key
```

---

## 🧱 Function Logic Builder

| Problem | Code Structure |
|--------|----------------|
| Build function | `def my_func(params):` |
| Return values | `return a, b` → `x, y = my_func()` |
| Keep clean | Use `return`, avoid globals |
| Handle edge case | `if not arr:` or `if len(arr)==0:` |

🔁 Example:
```python
def find_max(arr):
    if not arr:
        return None
    max_val = arr[0]
    for i in arr:
        if i > max_val:
            max_val = i
    return max_val
```

---

## 📏 Index-Based Logic

| You Think...         | Code                        |
|----------------------|-----------------------------|
| First element        | `arr[0]`                    |
| Last element         | `arr[-1]`                   |
| i-th element         | `arr[i]`                    |
| Loop 2D              | `for i in range(r): for j in range(c):` |

---

## 🧠 Problem Solving Steps

1. ✍️ Understand input/output  
2. 🔎 Identify changing parts  
3. 🧱 Use Translation Map  
4. 🧪 Test manually  
5. 🧼 Handle edge cases  

---

## 🧠 DSA CODING PATTERNS

### 1️⃣ Two Pointer
```python
left = 0
right = len(arr) - 1

while left < right:
    if arr[left] + arr[right] == target:
        return [left, right]
    elif arr[left] + arr[right] < target:
        left += 1
    else:
        right -= 1
```

### 2️⃣ Sliding Window
#### Fixed Size
```python
window_sum = sum(arr[:k])
max_sum = window_sum

for i in range(k, len(arr)):
    window_sum = window_sum - arr[i-k] + arr[i]
    max_sum = max(max_sum, window_sum)
```

#### Variable Size
```python
left = 0
for right in range(len(arr)):
    ...
    while condition:
        left += 1
```

### 3️⃣ Recursion
```python
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)
```

### 4️⃣ Backtracking
```python
def permute(nums):
    result = []

    def backtrack(path, remaining):
        if not remaining:
            result.append(path[:])
            return
        for i in range(len(remaining)):
            backtrack(path + [remaining[i]], remaining[:i] + remaining[i+1:])

    backtrack([], nums)
    return result
```

---

## 💻 OOP in Python

### Class
```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
```

### Instance & Method
```python
p = Person("Sujal", 20)
print(p.name)
```

### Static Method
```python
class Math:
    @staticmethod
    def square(x):
        return x * x
```

### Class Method
```python
class Student:
    count = 0

    @classmethod
    def get_count(cls):
        return cls.count
```

### Inheritance
```python
class Animal:
    def speak(self): return "Sound"

class Dog(Animal):
    def speak(self): return "Woof"
```

---

## 🌲 Linked List
```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node
```

---

## 🌳 Binary Tree (Inorder)
```python
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def inorder(root):
    if root:
        inorder(root.left)
        print(root.val, end=" ")
        inorder(root.right)
```

---

## 🔗 Graph (BFS using Adjacency List)
```python
from collections import defaultdict

class Graph:
    def __init__(self):
        self.graph = defaultdict(list)

    def add_edge(self, u, v):
        self.graph[u].append(v)

    def bfs(self, start):
        visited = set()
        queue = [start]
        while queue:
            node = queue.pop(0)
            if node not in visited:
                print(node, end=" ")
                visited.add(node)
                queue.extend(self.graph[node])
```

---

## ✅ Summary: Patterns

| Pattern         | Keywords                      | Examples                    |
|----------------|-------------------------------|-----------------------------|
| Two Pointer     | Compare both ends             | Reverse, pair sum           |
| Sliding Window  | Subarray/substring in range   | Max sum, unique substrings  |
| Recursion       | Break problem into base case  | Factorial, Fibonacci        |
| Backtracking    | Try all → Undo if needed      | Sudoku, permutations        |

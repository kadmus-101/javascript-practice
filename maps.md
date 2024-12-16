# Maps in javascript

## Definition:

A `Map` is a colection of key-value pairs where:

- Keys can be of any type (eg., Objects, arrays, functions, etc).

- Values can als be of any type.

- The order of elements is preserved (insertion order).

### Key poits:

1. A `Map` is created using `new Map()`.

2. Unlike objects, `Map` does not have prototype keys, which makes it purely storing custom data.

3. It is mor versatile than objects when managing dynamic data.

#### Example:

```js
    const myMap = new Map();
    myMap.set('name', 'Gaspar');
    myMap.set('age', 25);

    console.log(myMap); // Outputs: Map(2) { 'name' => 'Gaspar', 'age' => 25 }  
```


### Exercise 1:
1. Create a new Map.
2. Add three key-value pairs (use a string, a number, and an object as keys).
3. Print the Map to the console.

A:

```js
    const myMap = new Map();
    myMap.set('name', 'Marta');
    myMap.set('languages', ['Portuguese', 'English', 'French'])
    myMap.set('age', '28' )

    console.log(myMap);
```

### Exercise 2:
1. Create a Map.
Add the following key-value pairs to the Map:
    - A string key 'course' with the value 'Web Development'.
    - A number key 101 with the value 'Beginner Level'.
    - An object key { language: 'JavaScript' } with the value 'Programming Language'.
2. Retrieve and print the value associated with the string key 'course'.
Retrieve and print the value associated with the number key 101.


---

### Key Differences Between `Map` and Objects/Arrays:
1. **Objects and Arrays**:
   - Arrays use **numerical indices** (e.g., `arr[0]`) and objects use **string keys** (e.g., `obj['key']`) to access data.
   - The syntax `myMap[1]` works only for arrays (to access the 1st index) or objects (if the key is `"1"` as a string).

2. **Map**:
   - Maps are designed to use the `get(key)` method to access values. 
   - Using bracket notation (`map[1]`) on a `Map` won't work because Maps are not arrays or plain objects—they are a special collection type.
   - The correct way to retrieve data in a `Map` is using `.get(key)`.

---

### Why `myMap[1]` Results in `undefined`:
- `myMap[1]` is treated as if you're trying to access a **property of the Map object** itself, not its stored data. Since `Map` does not store values this way, it gives `undefined`.

---

### Correct Way to Access Data in a `Map`:
Always use the `.get(key)` method, like this:
```javascript
map.get(101); // Correct way to get the value associated with the key 101
```

---

### Key Takeaways:
1. Use `.set(key, value)` to add data to a Map.
2. Use `.get(key)` to retrieve the value for a given key.
3. Avoid bracket notation (`myMap[key]`) with Maps—it works for arrays and objects, but not for Maps.
 

---

### Topic 2: Iterating Over a `Map`

One of the powerful features of a `Map` is that it is iterable. You can loop through its keys, values, or both using different methods. 

Here are the main ways to iterate over a `Map`:

1. **Using the `for...of` loop**:
   - `map.keys()` to iterate over keys.
   - `map.values()` to iterate over values.
   - `map.entries()` to iterate over key-value pairs.

2. **Using the `forEach()` method**:
   - `Map` has its own `forEach()` method for directly iterating over key-value pairs.

---

### Example:
```javascript
const map = new Map();
map.set('name', 'Gaspar');
map.set('age', 25);
map.set('country', 'Portugal');

// Iterating over keys
for (const key of map.keys()) {
  console.log('Key:', key);
}

// Iterating over values
for (const value of map.values()) {
  console.log('Value:', value);
}

// Iterating over entries (key-value pairs)
for (const [key, value] of map.entries()) {
  console.log(`${key} => ${value}`);
}

// Using forEach
map.forEach((value, key) => {
  console.log(`Key: ${key}, Value: ${value}`);
});
```

---

### Exercise 3:
1. Create a `Map` with at least 3 key-value pairs.
2. Use `for...of` loops to:
   - Print all keys.
   - Print all values.
   - Print all key-value pairs.
3. Use the `forEach()` method to do the same.

---
A:

```js

    const theForge = new Map();

    theForge.set('gendre', ['Drama', 'Christian']);
    theForge.set('Duration', '2hours');
    theForge.set('Year of release', 2024);

    //iterating over keys

    for (const key of theForge.keys()) {
        console.log('Key:', key)
    }

    //iterating over values
    for (const values of theForge.values()){
        console.log('values:', values)
    }

    // iterating over key-value pairs using foreach
    theForge.forEach((value, key) => {
        console.log(`${key} => ${value}`)
    })

    //iterating over entries (key-value pairs)
    for (const [key, value] of theForge.entries()) {
        console.log(`${key} => ${value}`);
    }
```

---

### What is `entries()` in a `Map`?

The `entries()` method returns an **iterator** object that contains all the key-value pairs from the `Map`. Each pair is represented as an **array**: `[key, value]`.

So when you loop over the iterator with:
```javascript
for (const [key, value] of theForge.entries()) {
    console.log(`${key} => ${value}`);
}
```
The `[key, value]` part uses **destructuring** to split the array into two variables:  
- `key` for the first item (the key).  
- `value` for the second item (the value).

---

### Why Does This Work?

1. **`entries()` returns key-value pairs as arrays:**
   Imagine your `Map` looks like this:
   ```javascript
   theForge = new Map([
       ['gendre', ['Drama', 'Christian']],
       ['Duration', '2hours'],
       ['Year of release', 2024],
   ]);
   ```
   Internally, `entries()` produces something like:
   ```javascript
   [
       ['gendre', ['Drama', 'Christian']],
       ['Duration', '2hours'],
       ['Year of release', 2024]
   ]
   ```

2. **`for...of` extracts each pair from the iterator**:
   Each loop iteration picks one key-value pair (an array) from the `entries()` iterator.

3. **Destructuring splits the pair into `key` and `value`**:
   The syntax `[key, value]` pulls apart the array:
   ```javascript
   ['gendre', ['Drama', 'Christian']]  // Becomes:
   key = 'gendre'
   value = ['Drama', 'Christian']
   ```

   The same happens for the other pairs in subsequent iterations.

---

### How It Compares to `forEach()`:
The `forEach()` method does the same thing but uses a callback function:
```javascript
theForge.forEach((value, key) => {
    console.log(`${key} => ${value}`);
});
```
Here, **the function is automatically given `key` and `value`** in each iteration.

---

### Why Use `entries()`?
- Use `entries()` with `for...of` when you want more control or combine it with other iteration logic.
- Use `forEach()` for simplicity when looping through all pairs without additional logic.

---

### Extra Practice:
Try adding logic inside the `for...of` loop for `entries()`:
- Only print the keys where the value is a string.
- Skip keys where the value is an array.

```javascript
    for (const [key, value] of theForge.entries()) {
        if (Array.isArray(value)) {
            console.log(`${key} contains an array and will be skipped.`);
            continue; // Skip to the next iteration
        }
        console.log(`${key} => ${value}`);
    }
```


### Topic 3: Removing Elements from a `Map`.

1. Check the size of a `Map`.
2. Delete specific elements.
3. Clear all elements in a `Map`.

---

### 1. **Getting the Size of a `Map`**:
You can get the number of key-value pairs in a `Map` using the `.size` property.

```javascript
    map.size
```

**Example:**
```javascript
    const map = new Map();
    map.set('name', 'Alice');
    map.set('age', 25);

    console.log(map.size); // 2
```

---

### 2. **Deleting a Key-Value Pair**:

You can remove an element from a `Map` using the `.delete(key)` method.

```javascript
    map.delete(key);
```
This method returns `true` if the key existed and was deleted, or `false` if the key wasn’t found.

**Example:**

```javascript
    const map = new Map();
    map.set('name', 'Alice');
    map.set('age', 25);

    map.delete('age'); // Removes the 'age' key-value pair

    console.log(map.size); // 1 (since one pair was deleted)
    console.log(map.has('age')); // false (key 'age' no longer exists)
```

---

### 3. **Clearing All Elements**:

If you want to remove **all key-value pairs** from the `Map`, you can use the `.clear()` method.

```javascript
    map.clear();
```

**Example:**
```javascript
    const map = new Map();
    map.set('name', 'Alice');
    map.set('age', 25);

    map.clear(); // Removes all key-value pairs

    console.log(map.size); // 0
```

---

### Exercise 4:
1. Create a `Map` with at least 3 key-value pairs.
2. Print the size of the `Map`.
3. Delete one key-value pair and print the size again.
4. Clear the `Map` and print the size to ensure it's empty.

---


Great! Let’s move on to the next topic: **Checking if a Key Exists in a `Map` using `.has()`**.

---

### 1. **Checking if a Key Exists:**
The `.has()` method is used to check whether a `Map` contains a specific **key**. It returns a boolean:
- **`true`** if the key exists in the `Map`.
- **`false`** if the key does not exist in the `Map`.

### Syntax:
```javascript
map.has(key);
```

### Example:
```javascript
const map = new Map();
map.set('name', 'Alice');
map.set('age', 25);

console.log(map.has('name')); // true
console.log(map.has('gender')); // false
```

---

### 2. **Practical Example**:

Let’s use the `studentData` `Map` from earlier. We’ll check if a student exists in the `Map` using `.has()`.

```javascript
const studentData = new Map();
studentData.set('Carlos', [{'age': 14}, {'Grade': '5th'}]);
studentData.set('Annah', [{'age': 12}, {'Grade': '7th'}]);
studentData.set('Cleyton', [{'age': 14}, {'Grade': '9th'}]);

console.log(studentData.has('Carlos')); // true
console.log(studentData.has('Lucas')); // false
```

---

### Exercise 5:
1. Create a `Map` of your own with at least 3 key-value pairs.
2. Check if a specific key exists using `.has()`. 
3. Log the result to the console.

---

Great! Let's move on to the next topic: **Iterating over a `Map` with `for...of`**.

---

### 1. **Iterating with `for...of`**:
We can iterate over a `Map` using `for...of` to access both keys and values together. This gives us more flexibility to work with both parts of the key-value pair at once.

#### Syntax:
```javascript
for (const [key, value] of map) {
  // do something with key and value
}
```

In this syntax, `map` will be the `Map` you're iterating over, and `[key, value]` will represent each key-value pair in the `Map`.

---

### Example:
Let’s iterate over the `planets` `Map` from earlier to print out both keys and values.

```javascript
const planets = new Map();
planets.set(1, 'Mercury');
planets.set(2, 'Venus');
planets.set(3, 'Earth');
planets.set(4, 'Mars');

for (const [key, value] of planets) {
    console.log(`Planet ${key}: ${value}`);
}
```

This will output:
```
Planet 1: Mercury
Planet 2: Venus
Planet 3: Earth
Planet 4: Mars
```

---

### 2. **Using `for...of` with Custom Logic**:
You can also use this iteration to apply custom logic for each key-value pair. For example, if you only want to print planets that are after the first in the list:

```javascript
for (const [key, value] of planets) {
    if (key > 1) {
        console.log(`Planet ${key}: ${value}`);
    }
}
```

---

### Exercise 6:
1. Create a `Map` with at least 3 key-value pairs.
2. Use a `for...of` loop to iterate over the `Map`.
3. Print both the key and value in a sentence like: `"The key is [key] and the value is [value]"`.

---


Great! Let's dive into the next topic: **Using Non-Primitive Keys in a `Map`**.

---

### 1. **Non-Primitive Keys**:
In a `Map`, the keys don't have to be just strings or numbers — they can be any type of value, including **objects**, **arrays**, **functions**, and other **non-primitive types**.

This is one of the major advantages of `Map` over plain objects, which only allow strings and symbols as keys.

### Example with Object Keys:
Let's say you want to use objects as keys in a `Map`:

```javascript
const map = new Map();

const obj1 = {name: 'Alice'};
const obj2 = {name: 'Bob'};

map.set(obj1, 'Engineer');
map.set(obj2, 'Doctor');

console.log(map.get(obj1)); // Engineer
console.log(map.get(obj2)); // Doctor
```

In this case, we used two different objects (`obj1` and `obj2`) as keys. Even though they both have the same structure (`name` property), they are still considered **different keys** because they are different objects.

---

### 2. **Why Use Non-Primitive Keys?**:
Using non-primitive keys can be helpful when you want to map specific objects or data structures to other values. This allows you to use the `Map` for more complex relationships than with just primitive values.

### Example with Array Keys:
You can also use arrays or other complex data types as keys:

```javascript
const map = new Map();

const arr = [1, 2, 3];
map.set(arr, 'This is an array');

console.log(map.get(arr)); // This is an array
```

---

### Exercise 7:
1. Create a `Map` where one of the keys is an object (you can use any object).
2. Add at least 2 key-value pairs to the `Map`.
3. Retrieve a value using an object as a key.

---

A:
```js
    const employes = new Map()

    const employe1 = {nationality: 'Mozambican'}
    const employe2 = {nationality: 'Quenian'}

    employes.set(employe1, 'Engineer')
    employes.set(employe2, 'Doctor')

    console.log(employes.get(employe1));
    console.log(employes.get(employe2));


```

----

Exactly! You're on the right track! The ability to use **objects**, **arrays**, and even **classes** as keys in a `Map` gives you powerful flexibility in structuring your data. It opens up a lot of possibilities for organizing and storing complex relationships.

You can leverage `Map` and objects/classes in several real-world scenarios. Let’s explore a few ideas:

---

### 1. **Storing Configuration or Settings for Different Objects:**

Imagine you're building a system where each object (representing a user, a product, or another entity) needs to store custom settings or preferences.

- You could use the object itself as the key, and the value could be its configuration or preferences.
  
**Example:**
```javascript
class User {
    constructor(name) {
        this.name = name;
    }
}

const user1 = new User('Alice');
const user2 = new User('Bob');

const settingsMap = new Map();
settingsMap.set(user1, { theme: 'dark', language: 'en' });
settingsMap.set(user2, { theme: 'light', language: 'es' });

console.log(settingsMap.get(user1)); // { theme: 'dark', language: 'en' }
console.log(settingsMap.get(user2)); // { theme: 'light', language: 'es' }
```

In this example, you store specific settings for each user in a `Map`, using each `User` instance as a unique key.

---

### 2. **Caching Results of Complex Calculations:**

If you’re performing expensive calculations that involve objects or arrays, you can use the objects themselves as keys to store the results of those calculations so you don’t repeat them.

**Example:**
```javascript
const calculationsMap = new Map();

function expensiveCalculation(input) {
    if (calculationsMap.has(input)) {
        return calculationsMap.get(input); // Return cached result
    }
    
    // Simulate an expensive calculation
    const result = input * 10; // Some complex operation
    calculationsMap.set(input, result);
    return result;
}

console.log(expensiveCalculation(5)); // First time, calculates and stores result
console.log(expensiveCalculation(5)); // Returns cached result
```

Here, you’re using the input (in this case, a number) as a key, but you could also use more complex objects. This way, you're saving results and avoiding redundant operations.

---

### 3. **Representing Graphs or Networks:**

If you're working with graphs, where nodes have multiple connections, you can use **objects or classes as nodes** and store their relationships in a `Map`.

**Example:**
```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
}

const alice = new Person('Alice');
const bob = new Person('Bob');

const relationships = new Map();
relationships.set(alice, [bob]);

console.log(relationships.get(alice)); // [Person { name: 'Bob' }]
```

In this example, you're modeling a relationship between people using a `Map` to store who knows whom.

---

### 4. **Using Maps with Classes for Encapsulation:**

You could use a `Map` to store instance data in a class, keeping the logic separate from the data.

**Example:**
```javascript
class BankAccount {
    constructor(owner) {
        this.owner = owner;
        this._balance = new Map(); // Store balances in a Map
    }
    
    deposit(amount) {
        this._balance.set(this.owner, (this._balance.get(this.owner) || 0) + amount);
    }
    
    getBalance() {
        return this._balance.get(this.owner) || 0;
    }
}

const account = new BankAccount('Alice');
account.deposit(100);
console.log(account.getBalance()); // 100
```

This allows you to separate the concerns of managing the account's state and its methods (in the class), while using the `Map` to store dynamic data like balances.

---

### 5. **Using Maps to Track Object Relationships (like database records):**

You could use a `Map` to track objects with specific relationships or references. This is helpful when simulating a database of records, such as tracking users, products, or transactions.

---

### Summary:

- **Configuration & Settings**: Storing user or object-specific configurations.
- **Caching**: Saving the results of expensive operations to avoid repetition.
- **Graph Representation**: Storing relationships between nodes or entities (people, products, etc.).
- **Encapsulation**: Managing data within classes more cleanly by using `Map`.
- **Object Relationships**: Tracking connections between objects, like in a database.

By using **objects, classes**, and **maps** together, you can build complex, dynamic systems where entities have relationships, configurations, or caches based on their properties, making your code more efficient and flexible.

---


### Advanced Map Methods

Now we’ll explore some edge cases and advanced scenarios with `.get()` and `.set()`:

---

### **Behavior of `.get()` and `.set()` with Different Key Types**

#### Key Type Flexibility:
`Map` allows **any value** as a key, including:
- Objects
- Arrays
- Functions
- Symbols

Let’s explore examples:

```javascript
const advancedMap = new Map();

const objKey = { id: 1 };  // Object as a key
const arrKey = [1, 2, 3]; // Array as a key
const funcKey = () => {}; // Function as a key

// Using .set() with different key types
advancedMap.set(objKey, 'This is an object key');
advancedMap.set(arrKey, 'This is an array key');
advancedMap.set(funcKey, 'This is a function key');

// Retrieving values using .get()
console.log(advancedMap.get(objKey)); // Output: This is an object key
console.log(advancedMap.get(arrKey)); // Output: This is an array key
console.log(advancedMap.get(funcKey)); // Output: This is a function key
```

---

### **Key Identity**
Keys are compared using **strict equality (`===`)**:
- Even if two objects or arrays **look the same**, they are considered **different keys**.

Example:

```javascript
const map = new Map();
const obj1 = { a: 1 };
const obj2 = { a: 1 };

map.set(obj1, 'value for obj1');
console.log(map.get(obj2)); // Output: undefined
```

Even though `obj1` and `obj2` have the same structure, they are different references, so `.get(obj2)` returns `undefined`.

---

### **Default Value for Nonexistent Keys**
If you try to access a key that doesn’t exist in the map, `.get()` will return `undefined`:

```javascript
const map = new Map();
map.set('name', 'Alice');
console.log(map.get('age')); // Output: undefined
```

---

#### Exercise:
1. Create a `Map` and use at least one object, one array, and one function as keys.  
2. Try accessing the values with both the original keys and new references that look the same.  
3. Add a key-value pair using a string, then try to access a nonexistent key.

When you're done, type **"done"** and then **"next"** to move on! 😊
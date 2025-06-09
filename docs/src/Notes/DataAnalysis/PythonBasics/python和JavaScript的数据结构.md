---
title: "Python与JavaScript的数据结构"
desc: "对比Python和JavaScript中常用的数据结构及其特性。"
tags: "PythonAndJavascript"
updateTime: "2025-05-16 14:00" # 请考虑更新此时间
outline: deep
---

## Python 与 JavaScript 的数据结构概览

数据结构是计算机存储、组织数据的方式。Python 和 JavaScript 作为高级编程语言，都提供了丰富的数据结构来帮助开发者高效地处理数据。本篇将介绍两种语言中一些核心的数据结构。

## Python 中的数据结构

Python 提供了多种内置的数据结构，各有其特点和适用场景。

### 1. 列表 (List)
-   **定义**：列表是 Python 中最常用的数据结构之一，是一个有序的、可变的元素序列。列表中的元素可以是不同类型的。
-   **语法**：使用方括号 `[]` 定义，元素之间用逗号 `,` 分隔。
-   **特点**：
    -   **有序 (Ordered)**：元素按插入顺序排列，可以通过索引访问。
    -   **可变 (Mutable)**：创建后可以添加、删除或修改元素。
    -   **异构 (Heterogeneous)**：可以包含不同数据类型的元素（如整数、字符串、其他列表等）。
-   **示例**：
    ```python
    my_list = [1, "hello", 3.14, [5, 6]]
    my_list.append(True)
    my_list[1] = "world"
    print(my_list)  # 输出: [1, 'world', 3.14, [5, 6], True]
    ```

### 2. 元组 (Tuple)
-   **定义**：元组是一个有序的、不可变的元素序列。
-   **语法**：使用圆括号 `()` 定义，元素之间用逗号 `,` 分隔。单个元素的元组需要在元素后加逗号，如 `(1,)`。
-   **特点**：
    -   **有序 (Ordered)**：元素按插入顺序排列，可以通过索引访问。
    -   **不可变 (Immutable)**：一旦创建，元组中的元素不能被修改、添加或删除。
    -   **异构 (Heterogeneous)**：可以包含不同数据类型的元素。
-   **示例**：
    ```python
    my_tuple = (1, "hello", 3.14)
    # my_tuple[0] = 2  # 这会引发 TypeError，因为元组不可变
    print(my_tuple[1]) # 输出: hello
    ```

### 列表 (List) 与元组 (Tuple) 的主要区别

| 特性         | 列表 (List)                                  | 元组 (Tuple)                                     |
| :----------- | :------------------------------------------- | :----------------------------------------------- |
| **可变性**   | 可变 (Mutable) - 可以增删改元素              | 不可变 (Immutable) - 创建后不能修改              |
| **语法**     | `[1, 2, 3]`                                  | `(1, 2, 3)` 或 `1, 2, 3` (单个元素需 `(1,)`)     |
| **性能**     | 通常情况下，迭代和查找性能与元组相近。由于可变性，某些操作（如添加元素）可能涉及内存重新分配。 | 由于不可变性，元组在某些底层实现上可能比列表略快，尤其是在创建和访问时。但这种差异通常很小。 |
| **用途**     | 适用于需要动态修改的元素集合，如存储用户列表、待办事项等。 | 适用于存储不应改变的数据集合，如坐标点 `(x, y)`、数据库记录、函数返回多个值等。也常作为字典的键（如果其元素都是不可变的）。 |
| **哈希性**   | 不可哈希 (Unhashable)，不能作为字典的键。     | 可哈希 (Hashable)，前提是元组中的所有元素也都是不可变的。因此可以用作字典的键。 |
| **内存占用** | 通常比元组占用略多内存，因为它需要存储额外的信息以支持可变性操作。 | 通常比列表占用略少内存。                           |
| **方法**     | 拥有更多的方法，如 `append()`, `insert()`, `remove()`, `pop()`, `sort()` 等。 | 方法较少，主要是一些查询方法如 `count()`, `index()`。 |

**总结选择：**
-   如果数据集合在程序运行期间需要被修改（添加、删除、更新元素），则使用**列表**。
-   如果数据集合是固定的，不希望被修改，或者需要作为字典的键，则使用**元组**。元组的不可变性也使其在多线程环境中更安全（如果元素本身也是线程安全的）。

### 3. 字典 (Dictionary / dict)
-   **定义**：字典是一种无序的（在 Python 3.7+ 版本中是有序的，按插入顺序）键值对 (key-value pair) 集合。每个键必须是唯一的且不可变的类型（如字符串、数字、元组）。
-   **语法**：使用花括号 `{}` 定义，键和值之间用冒号 `:` 分隔，键值对之间用逗号 `,` 分隔。
-   **特点**：
    -   **键唯一 (Unique Keys)**：字典中的键必须是唯一的。
    -   **可变 (Mutable)**：可以添加、删除或修改键值对。
    -   **动态 (Dynamic)**：可以随时增长或缩小。
    -   **通过键访问 (Accessed by Key)**：元素通过键来访问，而不是通过索引。
-   **示例**：
    ```python
    my_dict = {"name": "Alice", "age": 30, "city": "New York"}
    my_dict["age"] = 31
    my_dict["occupation"] = "Engineer"
    print(my_dict["name"]) # 输出: Alice
    print(my_dict)         # 输出 (Python 3.7+): {'name': 'Alice', 'age': 31, 'city': 'New York', 'occupation': 'Engineer'}
    ```

### 4. 集合 (Set)
-   **定义**：集合是一个无序的、不包含重复元素的集合。主要用于成员测试、去重以及执行数学上的集合运算（如并集、交集、差集等）。
-   **语法**：使用花括号 `{}` 定义，或者使用 `set()` 函数。空集合必须使用 `set()` 定义，因为 `{}` 表示空字典。
-   **特点**：
    -   **无序 (Unordered)**：元素没有特定的顺序（尽管在某些 Python 实现和版本中，迭代顺序可能看起来是固定的，但不应依赖此特性）。
    -   **唯一 (Unique Elements)**：自动去除重复元素。
    -   **可变 (Mutable)**：可以添加或删除元素（但集合中的元素必须是不可变类型）。还有一种不可变的集合类型 `frozenset`。
-   **示例**：
    ```python
    my_set = {1, 2, 3, 2, 4}
    print(my_set) # 输出: {1, 2, 3, 4} (顺序可能不同)
    my_set.add(5)
    my_set.remove(1)
    print(5 in my_set) # 输出: True

    set1 = {1, 2, 3}
    set2 = {3, 4, 5}
    print(set1.union(set2))      # 输出: {1, 2, 3, 4, 5}
    print(set1.intersection(set2)) # 输出: {3}
    ```

### 5. 字符串 (String / str)
-   **定义**：字符串是字符的有序序列，用于表示文本。
-   **语法**：使用单引号 `' '`、双引号 `" "` 或三引号 `''' '''` / `""" """` 定义。
-   **特点**：
    -   **有序 (Ordered)**：字符按顺序排列，可以通过索引访问。
    -   **不可变 (Immutable)**：一旦创建，字符串的内容不能被修改。任何修改字符串的操作都会返回一个新的字符串。
-   **示例**：
    ```python
    my_string = "hello"
    print(my_string[0]) # 输出: h
    # my_string[0] = "H" # 这会引发 TypeError
    new_string = my_string.upper()
    print(new_string)   # 输出: HELLO
    print(my_string)    # 输出: hello (原字符串不变)
    ```

## JavaScript 中的数据结构

JavaScript 也提供了多种内置的数据结构。

### 1. 数组 (Array)
-   **定义**：数组是一个有序的、可变的、可以包含不同类型元素的列表型对象。
-   **语法**：使用方括号 `[]` 定义，元素之间用逗号 `,` 分隔。
-   **特点**：
    -   **有序 (Ordered)**：元素按索引顺序排列。
    -   **可变 (Mutable)**：可以动态添加、删除或修改元素。
    -   **异构 (Heterogeneous)**：可以包含不同数据类型的元素。
    -   **动态大小 (Dynamic Size)**：数组的大小可以动态改变。
    -   **基于对象 (Object-based)**：JavaScript 数组本质上是特殊的对象，其原型链上有很多便捷的方法。
-   **示例**：
    ```javascript
    let myArray = [1, "hello", 3.14, [5, 6]];
    myArray.push(true);
    myArray[1] = "world";
    console.log(myArray); // 输出: [1, "world", 3.14, [5, 6], true]
    ```

### 2. 对象 (Object)
-   **定义**：对象是键值对的集合，用于存储各种属性和更复杂的数据结构。键通常是字符串（或 Symbol），值可以是任何数据类型。
-   **语法**：使用花括号 `{}` 定义。
-   **特点**：
    -   **键值对 (Key-Value Pairs)**。
    -   **可变 (Mutable)**。
    -   **动态 (Dynamic)**。
    -   **顺序性**：在 ES2015 (ES6) 之后，对象属性的迭代顺序对于非整数键会遵循插入顺序（对于通过常规方式如 `Object.keys`, `for...in` 迭代）。但对于纯粹的“无序集合”概念，通常推荐使用 `Map`。
-   **示例**：
    ```javascript
    let myObject = {
      name: "Alice",
      age: 30,
      city: "New York"
    };
    myObject.age = 31;
    myObject.occupation = "Engineer";
    console.log(myObject.name); // 输出: Alice
    console.log(myObject);
    // 输出: { name: "Alice", age: 31, city: "New York", occupation: "Engineer" }
    ```

### 3. Map
-   **定义**：`Map` 对象保存键值对，并且能够记住键的原始插入顺序。任何值（对象或者基本类型）都可以作为一个键或一个值。
-   **语法**：使用 `new Map()` 构造函数创建。
-   **特点**：
    -   **键可以是任何类型**：与普通对象键只能是字符串或 Symbol 不同，`Map` 的键可以是任意类型，包括对象、函数等。
    -   **有序 (Ordered)**：键值对按插入顺序迭代。
    -   **性能**：对于频繁增删键值对的场景，`Map` 通常比普通 `Object` 性能更好。
    -   **直接获取大小**：通过 `size` 属性可以直接获取键值对的数量。
-   **示例**：
    ```javascript
    let myMap = new Map();
    let keyObject = {};
    let keyFunc = function() {};

    myMap.set("a string", "value for a string");
    myMap.set(keyObject, "value for an object");
    myMap.set(keyFunc, "value for a function");

    console.log(myMap.get(keyObject)); // 输出: value for an object
    console.log(myMap.size);         // 输出: 3
    for (let [key, value] of myMap) {
      console.log(key + " = " + value);
    }
    ```

### 4. Set
-   **定义**：`Set` 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
-   **语法**：使用 `new Set()` 构造函数创建。
-   **特点**：
    -   **唯一值 (Unique Values)**：集合中的值都是唯一的。
    -   **有序 (Ordered)**：元素按插入顺序迭代。
    -   **值可以是任何类型**。
-   **示例**：
    ```javascript
    let mySet = new Set();
    mySet.add(1);
    mySet.add(5);
    mySet.add(5); // 重复的值不会被添加
    mySet.add("some text");
    let obj = {a: 1, b: 2};
    mySet.add(obj);

    console.log(mySet.has(1));         // 输出: true
    console.log(mySet.size);          // 输出: 4 (因为 5 只被添加了一次)
    for (let item of mySet) {
      console.log(item);
    }
    ```

### 5. 字符串 (String)
-   **定义**：字符串是字符的序列，用于表示文本。
-   **语法**：使用单引号 `' '`、双引号 `" "` 或反引号 (模板字符串) `` ` `` 定义。
-   **特点**：
    -   **有序 (Ordered)**：可以通过索引访问字符。
    -   **不可变 (Immutable)**：JavaScript 中的字符串也是不可变的。所有修改字符串的方法都会返回一个新的字符串。
-   **示例**：
    ```javascript
    let myString = "hello";
    console.log(myString[0]); // 输出: h
    // myString[0] = "H"; // 这不会报错，但也不会改变原字符串
    console.log(myString);    // 输出: hello
    let newString = myString.toUpperCase();
    console.log(newString);   // 输出: HELLO
    ```

选择合适的数据结构对于编写高效、可维护的代码至关重要。理解每种数据结构的特性和适用场景是成为一名优秀开发者的基础。
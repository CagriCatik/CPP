# Basic Input and Output Using `cin` and `cout`

In this chapter, we explore basic input and output (I/O) operations in C++ using **`cin`** and **`cout`**. These functions, along with **`cerr`** and **`clog`**, are part of the C++ standard library and handle communication with the console and keyboard through a stream abstraction.

---

### **Overview of I/O Streams**

C++ provides the following I/O streams:
1. **`cout`** – An output stream that sends data to the console (screen).
2. **`cin`** – An input stream that reads data from the keyboard.
3. **`cerr`** – An output stream for error messages (defaults to the console).
4. **`clog`** – An output stream for logging messages (also defaults to the console).

To use these streams, you must include the `<iostream>` header:
```cpp
#include <iostream>
```

These streams use operators to handle data:
- **Insertion Operator (`<<`)** – Sends data to an output stream (e.g., `cout`).
- **Extraction Operator (`>>`)** – Reads data from an input stream (e.g., `cin`).

---

### **Output with `cout` and the Insertion Operator**

The **insertion operator** (`<<`) inserts data into an output stream. For example:
```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

**Explanation:**
- `std::cout` sends the string `"Hello, World!"` to the console.
- The **`endl`** manipulator advances the cursor to the next line and flushes the output buffer.

---

### **Chaining Output**

You can chain multiple insertions in a single statement:
```cpp
std::cout << "Hello, " << "World!" << std::endl;
```

**Output:**
```
Hello, World!
```

If you omit the **`endl`** manipulator, the cursor does not move to the next line:
```cpp
std::cout << "Hello, ";
std::cout << "World!";
```

**Output (on a single line):**
```
Hello, World!
```

---

### **Using Newline Characters**

You can also use the **newline character** (`\n`) to move to the next line:
```cpp
std::cout << "Hello, World!\n";
```

**Difference Between `endl` and `\n`:**
- `endl` flushes the output buffer, ensuring that all data is immediately displayed on the screen.
- `\n` simply moves the cursor to the next line without flushing the buffer.

---

### **Input with `cin` and the Extraction Operator**

The **extraction operator** (`>>`) reads data from the input stream (`cin`) and stores it in a variable. For example:
```cpp
#include <iostream>

int main() {
    int age;
    std::cout << "Enter your age: ";
    std::cin >> age;
    std::cout << "You entered: " << age << std::endl;
    return 0;
}
```

**Explanation:**
- `std::cin >> age;` reads an integer from the keyboard and stores it in the `age` variable.
- The user must press **Enter** to submit the input.

---

### **Input and Whitespace Handling**

The extraction operator ignores leading and trailing whitespace (spaces, tabs, newlines). For example:
```cpp
int number;
std::cin >> number;
```

If the user enters:
```
   123   (with leading and trailing spaces)
```
The extraction operator will read and store `123`, ignoring the spaces.

---

### **Chaining Input**

You can chain multiple extractions in one statement:
```cpp
int num1, num2;
std::cin >> num1 >> num2;
```

If the user enters:
```
100 200
```
- `num1` will be assigned `100`.
- `num2` will be assigned `200`.

This is convenient for reading multiple values on a single line.

---

### **Variable Types and Input**

The type of the variable determines how the input is interpreted. For example:
```cpp
#include <iostream>

int main() {
    double num;
    std::cout << "Enter a real number: ";
    std::cin >> num;
    std::cout << "You entered: " << num << std::endl;
    return 0;
}
```

If the user enters `12.5`, `num` (a double) will store the value `12.5`.

---

### **Input Failures**

If the input does not match the expected type, the extraction operation fails, and the input stream enters a **fail state**. For example:
```cpp
int number;
std::cin >> number;
```

If the user enters non-integer data, such as `Frank`, the input fails, and `number` will contain an undefined value. The program may behave unpredictably unless the fail state is handled properly.

---

### **Example Program**

```cpp
#include <iostream>

int main() {
    int num1;
    double num2;

    std::cout << "Enter an integer: ";
    std::cin >> num1;

    std::cout << "Enter a real number: ";
    std::cin >> num2;

    std::cout << "You entered the integer: " << num1 << std::endl;
    std::cout << "You entered the real number: " << num2 << std::endl;

    return 0;
}
```

**Sample Run:**
```
Enter an integer: 10
Enter a real number: 12.5
You entered the integer: 10
You entered the real number: 12.5
```

If the user enters incompatible input (e.g., a string instead of an integer), the program may display incorrect or undefined output.

---

### **Working with File Streams**

The same **insertion** and **extraction** operators can be used with file streams. This allows for consistent syntax when reading from or writing to files. We will explore file I/O in detail later in the course.

---

### **Summary**

- **`cout`** is used to display output, while **`cin`** reads input from the keyboard.
- The **insertion operator** (`<<`) sends data to the output stream, and the **extraction operator** (`>>`) reads data from the input stream.
- Whitespace is ignored by the extraction operator, and input must match the variable's data type.
- You can chain both insertion and extraction operators for cleaner code.
- Proper handling of input failures and stream errors is crucial in real-world programs.

In the next chapter, we will dive deeper into **working with variables** and understanding how data is stored and manipulated in C++.
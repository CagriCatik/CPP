# Runtime Errors

In this chapter, we explore **runtime errors**—errors that occur while the program is executing. Unlike compiler and linker errors, runtime errors are not detected during the build process. These errors can be unpredictable and may cause the program to crash or behave incorrectly. Proper handling of runtime errors, often through exception handling, is crucial to creating robust and reliable software.

---

### **What Are Runtime Errors?**

Runtime errors occur when a program encounters a problem during execution. These errors can arise due to various reasons, such as invalid operations, unavailable resources, or insufficient memory.

---

### **Common Types of Runtime Errors**

1. **Divide by Zero**
   - Occurs when an arithmetic operation attempts to divide by zero, which is undefined.

   **Example:**
   ```cpp
   int a = 10;
   int b = 0;
   int result = a / b;  // Division by zero
   ```
   **Error Message (Example Output):**
   ```
   Floating point exception (core dumped)
   ```

2. **File Not Found**
   - Occurs when the program tries to open or read a file that does not exist.

   **Example:**
   ```cpp
   std::ifstream file("nonexistent.txt");
   if (!file) {
       std::cerr << "Error: File not found." << std::endl;
   }
   ```

3. **Out of Memory**
   - Occurs when the program tries to allocate more memory than is available.

   **Example:**
   ```cpp
   int* large_array = new int[1000000000];  // Large allocation request
   ```

   **Error Message (Example Output):**
   ```
   std::bad_alloc
   ```

4. **Invalid Array Access (Segmentation Fault)**
   - Accessing an array out of bounds may cause undefined behavior or a segmentation fault.

   **Example:**
   ```cpp
   int arr[5];
   arr[10] = 100;  // Out-of-bounds access
   ```

---

### **Impact of Runtime Errors**

- **Program Crash:**  
  Certain errors, like division by zero or segmentation faults, may cause the program to terminate unexpectedly.
  
- **Data Corruption:**  
  Errors such as invalid memory access can lead to unpredictable behavior and corrupted data.

- **Security Vulnerabilities:**  
  Unhandled runtime errors may expose the program to security risks, such as buffer overflows or denial-of-service attacks.

---

### **Handling Runtime Errors**

One way to handle runtime errors in C++ is through **exception handling**. Exceptions allow the program to catch and respond to errors without crashing.

---

### **Exception Handling Basics**

1. **Try-Catch Block**
   - Use a `try` block to enclose code that may throw an exception.
   - Use a `catch` block to handle the exception if it occurs.

   **Example:**
   ```cpp
   #include <iostream>
   #include <stdexcept>

   int main() {
       try {
           int a = 10, b = 0;
           if (b == 0) {
               throw std::runtime_error("Division by zero error");
           }
           int result = a / b;
       } catch (const std::exception& e) {
           std::cerr << "Runtime error: " << e.what() << std::endl;
       }

       return 0;
   }
   ```

   **Output:**
   ```
   Runtime error: Division by zero error
   ```

2. **Handling File Errors**
   - Use exceptions to handle file-related errors.

   **Example:**
   ```cpp
   #include <iostream>
   #include <fstream>

   int main() {
       try {
           std::ifstream file("nonexistent.txt");
           if (!file) {
               throw std::runtime_error("File not found");
           }
       } catch (const std::exception& e) {
           std::cerr << "Error: " << e.what() << std::endl;
       }

       return 0;
   }
   ```

   **Output:**
   ```
   Error: File not found
   ```

3. **Standard Exception Classes**
   - C++ provides various standard exceptions, such as:
     - `std::runtime_error`
     - `std::out_of_range`
     - `std::bad_alloc`

---

### **Best Practices for Handling Runtime Errors**

1. **Anticipate Potential Errors**
   - Identify areas in your code where runtime errors are likely to occur (e.g., file I/O, memory allocation, arithmetic operations).

2. **Use Exception Handling**
   - Implement `try-catch` blocks to handle exceptions and prevent program crashes.

3. **Validate Inputs**
   - Ensure that user input and other data are valid before performing operations.

   **Example:**
   ```cpp
   int get_input() {
       int value;
       std::cout << "Enter a number: ";
       std::cin >> value;
       if (std::cin.fail()) {
           throw std::runtime_error("Invalid input");
       }
       return value;
   }
   ```

4. **Test Your Code**
   - Regularly test your code to identify and fix runtime errors early.

5. **Log Errors**
   - Log runtime errors to help with debugging and troubleshooting.

---

### **Summary**

- **Runtime errors** occur while the program is executing and can cause crashes, data corruption, or unexpected behavior.
- Common runtime errors include:
  - Division by zero.
  - File not found.
  - Out-of-memory errors.
  - Invalid array access.
- **Exception handling** is a key technique for managing runtime errors.
- By anticipating potential errors, validating inputs, and implementing exception handling, you can create more robust and reliable programs.

In upcoming chapters, you will see more examples of runtime errors and how to handle them effectively. We will also cover exception handling in greater detail toward the end of the course.
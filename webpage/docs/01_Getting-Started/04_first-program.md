# First Program in C++

In this guide, we walk through writing, compiling, and running your very first C++ program. The goal is to help you create a project, write simple input/output (I/O) code, and understand key concepts like variables, user input, and the program's execution process.

---

### 1. **Creating the Project**
   - Use your development environment (IDE) to create a new project.
   - Select the appropriate template and name the project `first_program`.
   - Ensure this project is active by double-clicking on it.

---

### 2. **Understanding the Source Code**
   We will write a program that:
   - Prompts the user to input their favorite number (between 1 and 100).
   - Stores this number in a variable.
   - Displays a response saying that it is also the program's favorite number.

---

### 3. **Writing the Program**
#### Step-by-Step Code Implementation:
1. **Include the I/O Library**
   ```cpp
   #include <iostream>
   ```
   - The `#include` directive imports the necessary library for input/output operations.
   - **Note:** Preprocessor directives do not require a semicolon at the end.

2. **Define the `main` Function**
   ```cpp
   int main() {
   ```
   - Every C++ program must have exactly one `main` function, which serves as the entry point for execution.

3. **Prompt User Input**
   ```cpp
   std::cout << "Enter your favorite number between 1 and 100: ";
   ```
   - `std::cout` is used to output text to the console.
   - The insertion operator (`<<`) sends data to the output stream (typically the terminal).
   - A string literal, enclosed in double quotes, is displayed exactly as written.

4. **Declare a Variable**
   ```cpp
   int favorite_number;
   ```
   - This line declares a variable named `favorite_number` of type `int` (integer).
   - Variables store data values, such as the user's input.

5. **Read User Input**
   ```cpp
   std::cin >> favorite_number;
   ```
   - `std::cin` reads input from the console.
   - The extraction operator (`>>`) retrieves data from the input stream and stores it in the `favorite_number` variable.

6. **Output the Response**
   ```cpp
   std::cout << "Amazing! That's my favorite number too!\n";
   ```
   - The `\n` at the end of the string moves the cursor to a new line.

7. **Return from `main`**
   ```cpp
   return 0;
   ```
   - Returning `0` indicates that the program executed successfully.

---

### 4. **Complete Source Code**
```cpp
#include <iostream>

int main() {
    std::cout << "Enter your favorite number between 1 and 100: ";
    
    int favorite_number;
    std::cin >> favorite_number;
    
    std::cout << "Amazing! That's my favorite number too!\n";
    
    return 0;
}
```

---

### 5. **Explanation of Key Concepts**

#### **Main Function**
   - The function `int main()` is where program execution begins.
   - Only one `main` function is allowed in a C++ program.

#### **Input and Output**
   - `std::cout` and `std::cin` are part of the `iostream` library, which handles input/output operations.
   - The insertion (`<<`) and extraction (`>>`) operators are used to send and retrieve data from the console.

#### **Variables**
   - A variable is a named storage location in memory.
   - In this program, the `favorite_number` variable stores the number entered by the user.

---

### 6. **Compiling and Running the Program**

#### **Building the Program**
   - Before execution, the program must be compiled and linked.
   - Compilation converts source code into machine code.
   - Linking resolves references between various parts of the program and external libraries.

#### **Steps to Build the Program**
   - Right-click on the source file (e.g., `main.cpp`) and select **Compile**.
   - Ensure that the build process completes without errors or warnings.

#### **Using the C++ Standard**
   - The program is compiled using the C++14 standard (or higher).
   - This standard provides modern features while ensuring compatibility with earlier versions of C++.

#### **Executable Output**
   - On Windows, the compiled output is an `.exe` file.
   - On Linux and macOS, it is a binary executable file.

---

### 7. **Example Output**
**Sample Interaction:**
```
Enter your favorite number between 1 and 100: 42
Amazing! That's my favorite number too!
```

---

### 8. **Troubleshooting Common Issues**

#### **Syntax Errors**
   - Missing semicolons (`;`) are a common cause of errors.
   - Ensure all statements (except preprocessor directives) end with a semicolon.

#### **Build Errors**
   - Verify that the correct C++ standard is being used.
   - Ensure that the `iostream` library is included.

#### **Runtime Errors**
   - Input/output mismatches can cause runtime errors.
   - Ensure that user input matches the expected data type (e.g., integers).


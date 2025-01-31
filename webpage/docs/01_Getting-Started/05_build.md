# Building the Program

In this chapter, we explore the process of building a C++ program, which includes compiling, linking, and generating the executable file. We also cover how to clean, rebuild, and run the program while explaining various build configurations such as debug and release modes. This guide provides a comprehensive understanding of each step involved in building and executing a program.

---

### **What is Building?**
Building a program involves multiple steps:
1. **Compiling:**  
   - The C++ source code is translated into object files (`.o` or `.obj`), which are machine-readable code.
   - If there are errors during this step, the build cannot proceed.

2. **Linking:**  
   - The object files are linked with other required libraries and files to create a complete executable file.

3. **Execution:**  
   - The resulting executable file is run to test the program's behavior and functionality.

---

### **Steps to Build a Program**

1. **Compiling the Program**
   - **Compile from the IDE:**  
     You can compile the program by:
     - Right-clicking on the source file (e.g., `main.cpp`) and selecting **Compile**.
     - Using the IDE's build menu and choosing **Compile Current File**.
   - Compiling translates the source code to a machine-readable object file but does not produce an executable file on its own.

   Example output after compilation:
   ```
   Compilation successful: 0 errors, 0 warnings.
   ```

2. **Building the Project**
   - To fully build the project (compiling + linking), select **Build Project** from the IDE.
   - You can also use shortcuts such as `F7` (on Windows) or the appropriate combination on macOS.

3. **Running the Executable**
   - After a successful build, you can run the executable by selecting **Run** or **Build and Execute** in the IDE.
   - During execution, the program prompts the user to enter their favorite number and then displays a message:
     ```
     Enter your favorite number between 1 and 100: 24
     Amazing! That's my favorite number too!
     ```

---

### **Cleaning and Rebuilding**

#### **What is Cleaning?**
- Cleaning removes all generated files such as:
  - Object files (`.o` or `.obj`)
  - Executable files (`.exe` on Windows)
  - Debug files and other temporary files
- This returns the project to a state where only the source code remains.

#### **Why Clean a Project?**
- Cleaning is useful when:
  - You want to perform a **clean build** from scratch.
  - You suspect that old object files may be causing issues.
  - Large projects with multiple files require consistent updates.

#### **How to Clean the Project**
- Right-click on the project and select **Clean**.
- Example:  
  ```
  Clean project: Complete. All object and executable files removed.
  ```

#### **Rebuilding the Project**
- Rebuilding combines both **clean** and **build** steps:
  - The project is cleaned.
  - All source files are recompiled and linked.
- This ensures that the entire project is up-to-date with the latest changes.

---

### **Understanding Build Configurations**

C++ projects typically support two main build configurations: **Debug** and **Release**.

1. **Debug Configuration**
   - The debug build includes extra information such as variable names and line numbers.
   - This information helps during debugging by allowing you to:
     - Step through the code.
     - Inspect variables and call stacks.
   - The debug build is larger and less optimized than the release build.

   Example folder structure:
   ```
   first_program/
     debug/
       firstprogram.exe
       firstprogram.obj
       .d (dependency files)
   ```

2. **Release Configuration**
   - The release build optimizes the code for performance and reduces the size of the executable.
   - Debugging information is removed to make the program leaner and faster.
   - Use this configuration when deploying your application to end-users.

---

### **Using the File Explorer**
- While working in an IDE, many generated files (e.g., object files, executables) are hidden to simplify the workspace view.
- To see these files:
  1. Open the **Explorer Tab** in the IDE.
  2. Navigate to your workspace directory on your file system.
  3. Expand the project directory to reveal folders like `debug` or `release`.

Example of a workspace directory structure:
```
workspace/
  section4/
    first_program/
      debug/
        firstprogram.exe
        firstprogram.obj
      main.cpp
```

---

### **Running the Program**
To run the executable:
1. Build and execute the project from the IDE.
2. The program output is displayed in the terminal or console window.

Sample run:
```
Enter your favorite number between 1 and 100: 100
Amazing! That's my favorite number too!
```

If using a recent version of CodeLite on Windows, you may also see additional information like time elapsed during execution:
```
Time Elapsed: 0.123 seconds.
Press any key to continue...
```

---

### **Important Concepts Recap**

1. **Compile vs. Build**
   - **Compile:** Converts source code to machine-readable object files.
   - **Build:** Links the object files to create an executable.

2. **Clean Build**
   - Removes all generated files to ensure a fresh start for the build process.

3. **Build Configurations**
   - **Debug:** Includes extra debugging information.
   - **Release:** Optimized for performance and smaller file size.

4. **Workspace Management**
   - IDEs often abstract file details (e.g., object files, executables).
   - Use the **Explorer Tab** or your file system to access these files.

5. **Execution**
   - Running the program allows you to test its functionality and output.

---

### **Next Steps**
In the next chapter, we will explore common **compiler errors and warnings**. You will learn how to identify, understand, and fix these issues during development. Seeing and resolving errors is a crucial part of mastering C++ programming.
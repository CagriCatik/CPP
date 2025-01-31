"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3984],{5626:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"Getting-Started/runtime-errors","title":"Runtime Errors","description":"In this chapter, we explore runtime errors\u2014errors that occur while the program is executing. Unlike compiler and linker errors, runtime errors are not detected during the build process. These errors can be unpredictable and may cause the program to crash or behave incorrectly. Proper handling of runtime errors, often through exception handling, is crucial to creating robust and reliable software.","source":"@site/docs/01_Getting-Started/09_runtime-errors.md","sourceDirName":"01_Getting-Started","slug":"/Getting-Started/runtime-errors","permalink":"/CPP/docs/Getting-Started/runtime-errors","draft":false,"unlisted":false,"editUrl":"https://github.com/CagriCatik/CPP/edit/main/docs/01_Getting-Started/09_runtime-errors.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Linker Errors","permalink":"/CPP/docs/Getting-Started/linker-errors"},"next":{"title":"Logic Errors","permalink":"/CPP/docs/Getting-Started/logic-errors"}}');var i=r(4848),t=r(8453);const o={},l="Runtime Errors",c={},d=[{value:"<strong>What Are Runtime Errors?</strong>",id:"what-are-runtime-errors",level:3},{value:"<strong>Common Types of Runtime Errors</strong>",id:"common-types-of-runtime-errors",level:3},{value:"<strong>Impact of Runtime Errors</strong>",id:"impact-of-runtime-errors",level:3},{value:"<strong>Handling Runtime Errors</strong>",id:"handling-runtime-errors",level:3},{value:"<strong>Exception Handling Basics</strong>",id:"exception-handling-basics",level:3},{value:"<strong>Best Practices for Handling Runtime Errors</strong>",id:"best-practices-for-handling-runtime-errors",level:3},{value:"<strong>Summary</strong>",id:"summary",level:3}];function a(n){const e={br:"br",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"runtime-errors",children:"Runtime Errors"})}),"\n",(0,i.jsxs)(e.p,{children:["In this chapter, we explore ",(0,i.jsx)(e.strong,{children:"runtime errors"}),"\u2014errors that occur while the program is executing. Unlike compiler and linker errors, runtime errors are not detected during the build process. These errors can be unpredictable and may cause the program to crash or behave incorrectly. Proper handling of runtime errors, often through exception handling, is crucial to creating robust and reliable software."]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h3,{id:"what-are-runtime-errors",children:(0,i.jsx)(e.strong,{children:"What Are Runtime Errors?"})}),"\n",(0,i.jsx)(e.p,{children:"Runtime errors occur when a program encounters a problem during execution. These errors can arise due to various reasons, such as invalid operations, unavailable resources, or insufficient memory."}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h3,{id:"common-types-of-runtime-errors",children:(0,i.jsx)(e.strong,{children:"Common Types of Runtime Errors"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Divide by Zero"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Occurs when an arithmetic operation attempts to divide by zero, which is undefined."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"int a = 10;\nint b = 0;\nint result = a / b;  // Division by zero\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Error Message (Example Output):"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Floating point exception (core dumped)\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"File Not Found"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Occurs when the program tries to open or read a file that does not exist."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:'std::ifstream file("nonexistent.txt");\nif (!file) {\n    std::cerr << "Error: File not found." << std::endl;\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Out of Memory"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Occurs when the program tries to allocate more memory than is available."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"int* large_array = new int[1000000000];  // Large allocation request\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Error Message (Example Output):"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"std::bad_alloc\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Invalid Array Access (Segmentation Fault)"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Accessing an array out of bounds may cause undefined behavior or a segmentation fault."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"int arr[5];\narr[10] = 100;  // Out-of-bounds access\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h3,{id:"impact-of-runtime-errors",children:(0,i.jsx)(e.strong,{children:"Impact of Runtime Errors"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Program Crash:"}),(0,i.jsx)(e.br,{}),"\n","Certain errors, like division by zero or segmentation faults, may cause the program to terminate unexpectedly."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Data Corruption:"}),(0,i.jsx)(e.br,{}),"\n","Errors such as invalid memory access can lead to unpredictable behavior and corrupted data."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Security Vulnerabilities:"}),(0,i.jsx)(e.br,{}),"\n","Unhandled runtime errors may expose the program to security risks, such as buffer overflows or denial-of-service attacks."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h3,{id:"handling-runtime-errors",children:(0,i.jsx)(e.strong,{children:"Handling Runtime Errors"})}),"\n",(0,i.jsxs)(e.p,{children:["One way to handle runtime errors in C++ is through ",(0,i.jsx)(e.strong,{children:"exception handling"}),". Exceptions allow the program to catch and respond to errors without crashing."]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h3,{id:"exception-handling-basics",children:(0,i.jsx)(e.strong,{children:"Exception Handling Basics"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Try-Catch Block"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Use a ",(0,i.jsx)(e.code,{children:"try"})," block to enclose code that may throw an exception."]}),"\n",(0,i.jsxs)(e.li,{children:["Use a ",(0,i.jsx)(e.code,{children:"catch"})," block to handle the exception if it occurs."]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:'#include <iostream>\n#include <stdexcept>\n\nint main() {\n    try {\n        int a = 10, b = 0;\n        if (b == 0) {\n            throw std::runtime_error("Division by zero error");\n        }\n        int result = a / b;\n    } catch (const std::exception& e) {\n        std::cerr << "Runtime error: " << e.what() << std::endl;\n    }\n\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Output:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Runtime error: Division by zero error\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Handling File Errors"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Use exceptions to handle file-related errors."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:'#include <iostream>\n#include <fstream>\n\nint main() {\n    try {\n        std::ifstream file("nonexistent.txt");\n        if (!file) {\n            throw std::runtime_error("File not found");\n        }\n    } catch (const std::exception& e) {\n        std::cerr << "Error: " << e.what() << std::endl;\n    }\n\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Output:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Error: File not found\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Standard Exception Classes"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["C++ provides various standard exceptions, such as:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"std::runtime_error"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"std::out_of_range"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"std::bad_alloc"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h3,{id:"best-practices-for-handling-runtime-errors",children:(0,i.jsx)(e.strong,{children:"Best Practices for Handling Runtime Errors"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Anticipate Potential Errors"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Identify areas in your code where runtime errors are likely to occur (e.g., file I/O, memory allocation, arithmetic operations)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Use Exception Handling"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Implement ",(0,i.jsx)(e.code,{children:"try-catch"})," blocks to handle exceptions and prevent program crashes."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Validate Inputs"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Ensure that user input and other data are valid before performing operations."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:'int get_input() {\n    int value;\n    std::cout << "Enter a number: ";\n    std::cin >> value;\n    if (std::cin.fail()) {\n        throw std::runtime_error("Invalid input");\n    }\n    return value;\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Test Your Code"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Regularly test your code to identify and fix runtime errors early."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Log Errors"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Log runtime errors to help with debugging and troubleshooting."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h3,{id:"summary",children:(0,i.jsx)(e.strong,{children:"Summary"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Runtime errors"})," occur while the program is executing and can cause crashes, data corruption, or unexpected behavior."]}),"\n",(0,i.jsxs)(e.li,{children:["Common runtime errors include:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Division by zero."}),"\n",(0,i.jsx)(e.li,{children:"File not found."}),"\n",(0,i.jsx)(e.li,{children:"Out-of-memory errors."}),"\n",(0,i.jsx)(e.li,{children:"Invalid array access."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Exception handling"})," is a key technique for managing runtime errors."]}),"\n",(0,i.jsx)(e.li,{children:"By anticipating potential errors, validating inputs, and implementing exception handling, you can create more robust and reliable programs."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"In upcoming chapters, you will see more examples of runtime errors and how to handle them effectively. We will also cover exception handling in greater detail toward the end of the course."})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>l});var s=r(6540);const i={},t=s.createContext(i);function o(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);
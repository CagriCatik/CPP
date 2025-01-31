"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8727],{7041:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"structure-cpp-program/input-output","title":"Basic Input and Output Using cin and cout","description":"In this chapter, we explore basic input and output (I/O) operations in C++ using cin and cout. These functions, along with cerr and clog, are part of the C++ standard library and handle communication with the console and keyboard through a stream abstraction.","source":"@site/docs/02_structure-cpp-program/06_input-output.md","sourceDirName":"02_structure-cpp-program","slug":"/structure-cpp-program/input-output","permalink":"/CPP/docs/structure-cpp-program/input-output","draft":false,"unlisted":false,"editUrl":"https://github.com/CagriCatik/CPP/edit/main/docs/02_structure-cpp-program/06_input-output.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Namespaces in C++","permalink":"/CPP/docs/structure-cpp-program/namespaces"},"next":{"title":"Variables and Constants","permalink":"/CPP/docs/category/variables-and-constants"}}');var s=r(4848),i=r(8453);const d={},o="Basic Input and Output Using cin and cout",a={},l=[{value:"<strong>Overview of I/O Streams</strong>",id:"overview-of-io-streams",level:3},{value:"<strong>Output with <code>cout</code> and the Insertion Operator</strong>",id:"output-with-cout-and-the-insertion-operator",level:3},{value:"<strong>Chaining Output</strong>",id:"chaining-output",level:3},{value:"<strong>Using Newline Characters</strong>",id:"using-newline-characters",level:3},{value:"<strong>Input with <code>cin</code> and the Extraction Operator</strong>",id:"input-with-cin-and-the-extraction-operator",level:3},{value:"<strong>Input and Whitespace Handling</strong>",id:"input-and-whitespace-handling",level:3},{value:"<strong>Chaining Input</strong>",id:"chaining-input",level:3},{value:"<strong>Variable Types and Input</strong>",id:"variable-types-and-input",level:3},{value:"<strong>Input Failures</strong>",id:"input-failures",level:3},{value:"<strong>Example Program</strong>",id:"example-program",level:3},{value:"<strong>Working with File Streams</strong>",id:"working-with-file-streams",level:3},{value:"<strong>Summary</strong>",id:"summary",level:3}];function c(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsxs)(n.h1,{id:"basic-input-and-output-using-cin-and-cout",children:["Basic Input and Output Using ",(0,s.jsx)(n.code,{children:"cin"})," and ",(0,s.jsx)(n.code,{children:"cout"})]})}),"\n",(0,s.jsxs)(n.p,{children:["In this chapter, we explore basic input and output (I/O) operations in C++ using ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"cin"})})," and ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"cout"})}),". These functions, along with ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"cerr"})})," and ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"clog"})}),", are part of the C++ standard library and handle communication with the console and keyboard through a stream abstraction."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"overview-of-io-streams",children:(0,s.jsx)(n.strong,{children:"Overview of I/O Streams"})}),"\n",(0,s.jsx)(n.p,{children:"C++ provides the following I/O streams:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"cout"})})," \u2013 An output stream that sends data to the console (screen)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"cin"})})," \u2013 An input stream that reads data from the keyboard."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"cerr"})})," \u2013 An output stream for error messages (defaults to the console)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"clog"})})," \u2013 An output stream for logging messages (also defaults to the console)."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To use these streams, you must include the ",(0,s.jsx)(n.code,{children:"<iostream>"})," header:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"#include <iostream>\n"})}),"\n",(0,s.jsx)(n.p,{children:"These streams use operators to handle data:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:["Insertion Operator (",(0,s.jsx)(n.code,{children:"<<"}),")"]})," \u2013 Sends data to an output stream (e.g., ",(0,s.jsx)(n.code,{children:"cout"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:["Extraction Operator (",(0,s.jsx)(n.code,{children:">>"}),")"]})," \u2013 Reads data from an input stream (e.g., ",(0,s.jsx)(n.code,{children:"cin"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"output-with-cout-and-the-insertion-operator",children:(0,s.jsxs)(n.strong,{children:["Output with ",(0,s.jsx)(n.code,{children:"cout"})," and the Insertion Operator"]})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"insertion operator"})," (",(0,s.jsx)(n.code,{children:"<<"}),") inserts data into an output stream. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Explanation:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"std::cout"})," sends the string ",(0,s.jsx)(n.code,{children:'"Hello, World!"'})," to the console."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"endl"})})," manipulator advances the cursor to the next line and flushes the output buffer."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"chaining-output",children:(0,s.jsx)(n.strong,{children:"Chaining Output"})}),"\n",(0,s.jsx)(n.p,{children:"You can chain multiple insertions in a single statement:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'std::cout << "Hello, " << "World!" << std::endl;\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Output:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Hello, World!\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you omit the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"endl"})})," manipulator, the cursor does not move to the next line:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'std::cout << "Hello, ";\nstd::cout << "World!";\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Output (on a single line):"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Hello, World!\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"using-newline-characters",children:(0,s.jsx)(n.strong,{children:"Using Newline Characters"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also use the ",(0,s.jsx)(n.strong,{children:"newline character"})," (",(0,s.jsx)(n.code,{children:"\\n"}),") to move to the next line:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'std::cout << "Hello, World!\\n";\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Difference Between ",(0,s.jsx)(n.code,{children:"endl"})," and ",(0,s.jsx)(n.code,{children:"\\n"}),":"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"endl"})," flushes the output buffer, ensuring that all data is immediately displayed on the screen."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"\\n"})," simply moves the cursor to the next line without flushing the buffer."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"input-with-cin-and-the-extraction-operator",children:(0,s.jsxs)(n.strong,{children:["Input with ",(0,s.jsx)(n.code,{children:"cin"})," and the Extraction Operator"]})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"extraction operator"})," (",(0,s.jsx)(n.code,{children:">>"}),") reads data from the input stream (",(0,s.jsx)(n.code,{children:"cin"}),") and stores it in a variable. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n\nint main() {\n    int age;\n    std::cout << "Enter your age: ";\n    std::cin >> age;\n    std::cout << "You entered: " << age << std::endl;\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Explanation:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"std::cin >> age;"})," reads an integer from the keyboard and stores it in the ",(0,s.jsx)(n.code,{children:"age"})," variable."]}),"\n",(0,s.jsxs)(n.li,{children:["The user must press ",(0,s.jsx)(n.strong,{children:"Enter"})," to submit the input."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"input-and-whitespace-handling",children:(0,s.jsx)(n.strong,{children:"Input and Whitespace Handling"})}),"\n",(0,s.jsx)(n.p,{children:"The extraction operator ignores leading and trailing whitespace (spaces, tabs, newlines). For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"int number;\nstd::cin >> number;\n"})}),"\n",(0,s.jsx)(n.p,{children:"If the user enters:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"   123   (with leading and trailing spaces)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The extraction operator will read and store ",(0,s.jsx)(n.code,{children:"123"}),", ignoring the spaces."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"chaining-input",children:(0,s.jsx)(n.strong,{children:"Chaining Input"})}),"\n",(0,s.jsx)(n.p,{children:"You can chain multiple extractions in one statement:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"int num1, num2;\nstd::cin >> num1 >> num2;\n"})}),"\n",(0,s.jsx)(n.p,{children:"If the user enters:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"100 200\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"num1"})," will be assigned ",(0,s.jsx)(n.code,{children:"100"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"num2"})," will be assigned ",(0,s.jsx)(n.code,{children:"200"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This is convenient for reading multiple values on a single line."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"variable-types-and-input",children:(0,s.jsx)(n.strong,{children:"Variable Types and Input"})}),"\n",(0,s.jsx)(n.p,{children:"The type of the variable determines how the input is interpreted. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n\nint main() {\n    double num;\n    std::cout << "Enter a real number: ";\n    std::cin >> num;\n    std::cout << "You entered: " << num << std::endl;\n    return 0;\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If the user enters ",(0,s.jsx)(n.code,{children:"12.5"}),", ",(0,s.jsx)(n.code,{children:"num"})," (a double) will store the value ",(0,s.jsx)(n.code,{children:"12.5"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"input-failures",children:(0,s.jsx)(n.strong,{children:"Input Failures"})}),"\n",(0,s.jsxs)(n.p,{children:["If the input does not match the expected type, the extraction operation fails, and the input stream enters a ",(0,s.jsx)(n.strong,{children:"fail state"}),". For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"int number;\nstd::cin >> number;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the user enters non-integer data, such as ",(0,s.jsx)(n.code,{children:"Frank"}),", the input fails, and ",(0,s.jsx)(n.code,{children:"number"})," will contain an undefined value. The program may behave unpredictably unless the fail state is handled properly."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"example-program",children:(0,s.jsx)(n.strong,{children:"Example Program"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n\nint main() {\n    int num1;\n    double num2;\n\n    std::cout << "Enter an integer: ";\n    std::cin >> num1;\n\n    std::cout << "Enter a real number: ";\n    std::cin >> num2;\n\n    std::cout << "You entered the integer: " << num1 << std::endl;\n    std::cout << "You entered the real number: " << num2 << std::endl;\n\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Sample Run:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Enter an integer: 10\nEnter a real number: 12.5\nYou entered the integer: 10\nYou entered the real number: 12.5\n"})}),"\n",(0,s.jsx)(n.p,{children:"If the user enters incompatible input (e.g., a string instead of an integer), the program may display incorrect or undefined output."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"working-with-file-streams",children:(0,s.jsx)(n.strong,{children:"Working with File Streams"})}),"\n",(0,s.jsxs)(n.p,{children:["The same ",(0,s.jsx)(n.strong,{children:"insertion"})," and ",(0,s.jsx)(n.strong,{children:"extraction"})," operators can be used with file streams. This allows for consistent syntax when reading from or writing to files. We will explore file I/O in detail later in the course."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"summary",children:(0,s.jsx)(n.strong,{children:"Summary"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"cout"})})," is used to display output, while ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"cin"})})," reads input from the keyboard."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"insertion operator"})," (",(0,s.jsx)(n.code,{children:"<<"}),") sends data to the output stream, and the ",(0,s.jsx)(n.strong,{children:"extraction operator"})," (",(0,s.jsx)(n.code,{children:">>"}),") reads data from the input stream."]}),"\n",(0,s.jsx)(n.li,{children:"Whitespace is ignored by the extraction operator, and input must match the variable's data type."}),"\n",(0,s.jsx)(n.li,{children:"You can chain both insertion and extraction operators for cleaner code."}),"\n",(0,s.jsx)(n.li,{children:"Proper handling of input failures and stream errors is crucial in real-world programs."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In the next chapter, we will dive deeper into ",(0,s.jsx)(n.strong,{children:"working with variables"})," and understanding how data is stored and manipulated in C++."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>o});var t=r(6540);const s={},i=t.createContext(s);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
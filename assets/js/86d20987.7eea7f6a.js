"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8689],{1326:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Getting-Started/setup-vs-code","title":"Setting Up Development Environment","description":"Visual Studio Code (VS Code) is a powerful, open-source code editor developed by Microsoft that supports a wide range of programming languages, including C++. This guide will walk you through the steps to set up a C++ development environment in VS Code, enabling you to write, compile, and debug C++ programs efficiently.","source":"@site/docs/01_Getting-Started/03_setup-vs-code.md","sourceDirName":"01_Getting-Started","slug":"/Getting-Started/setup-vs-code","permalink":"/CPP/docs/Getting-Started/setup-vs-code","draft":false,"unlisted":false,"editUrl":"https://github.com/CagriCatik/CPP/edit/main/docs/01_Getting-Started/03_setup-vs-code.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Modern C++ and the C++ Standard","permalink":"/CPP/docs/Getting-Started/modern-cpp_standard-cpp"},"next":{"title":"First Program in C++","permalink":"/CPP/docs/Getting-Started/first-program"}}');var t=i(4848),o=i(8453);const r={},l="Setting Up Development Environment",d={},c=[{value:"Why Use Visual Studio Code for C++ Development?",id:"why-use-visual-studio-code-for-c-development",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Install the C++ Extension for VS Code",id:"step-1-install-the-c-extension-for-vs-code",level:2},{value:"Step 2: Install a C++ Compiler",id:"step-2-install-a-c-compiler",level:2},{value:"For Windows Users",id:"for-windows-users",level:3},{value:"For macOS Users",id:"for-macos-users",level:3},{value:"For Linux Users",id:"for-linux-users",level:3},{value:"Step 3: Configure VS Code to Use the Compiler",id:"step-3-configure-vs-code-to-use-the-compiler",level:2},{value:"Step 4: Set Up Debugging",id:"step-4-set-up-debugging",level:2},{value:"Step 5: Write, Build, and Debug Your First C++ Program",id:"step-5-write-build-and-debug-your-first-c-program",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"setting-up-development-environment",children:"Setting Up Development Environment"})}),"\n",(0,t.jsx)(n.p,{children:"Visual Studio Code (VS Code) is a powerful, open-source code editor developed by Microsoft that supports a wide range of programming languages, including C++. This guide will walk you through the steps to set up a C++ development environment in VS Code, enabling you to write, compile, and debug C++ programs efficiently."}),"\n",(0,t.jsx)(n.h2,{id:"why-use-visual-studio-code-for-c-development",children:"Why Use Visual Studio Code for C++ Development?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Lightweight and Fast"}),": VS Code is a lightweight editor that provides a fast and responsive experience."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Extensibility"}),": With a rich ecosystem of extensions, you can enhance VS Code's functionality to suit your specific development needs."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Integrated Debugging"}),": VS Code offers built-in debugging tools that make it easier to troubleshoot and fix your code."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cross-Platform"}),": VS Code runs on Windows, macOS, and Linux, allowing you to maintain a consistent development environment across different operating systems."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Customizable"}),": Tailor the editor to your preferences with themes, keyboard shortcuts, and a variety of settings."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Before you begin, ensure that you have the following installed on your system:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Visual Studio Code"}),": Download and install the latest version of VS Code from ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"C++ Compiler"}),": You need a C++ compiler like GCC (on Linux and macOS) or MinGW (on Windows). Alternatively, you can use the MSVC compiler on Windows."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CMake (Optional)"}),": If you plan to use CMake for project management, ensure it is installed."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In the following sections, we will cover the steps to install the necessary extensions, configure the C++ compiler, and set up debugging in VS Code."}),"\n",(0,t.jsx)(n.h2,{id:"step-1-install-the-c-extension-for-vs-code",children:"Step 1: Install the C++ Extension for VS Code"}),"\n",(0,t.jsx)(n.p,{children:"To enhance VS Code for C++ development, you need to install the C++ extension provided by Microsoft."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open VS Code."}),"\n",(0,t.jsxs)(n.li,{children:["Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing ",(0,t.jsx)(n.code,{children:"Ctrl+Shift+X"}),"."]}),"\n",(0,t.jsx)(n.li,{children:'In the search box, type "C++".'}),"\n",(0,t.jsxs)(n.li,{children:["Install the extension named ",(0,t.jsx)(n.strong,{children:"C/C++"})," by Microsoft."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This extension provides rich language support for C++ code, including IntelliSense, debugging, and code browsing."}),"\n",(0,t.jsx)(n.h2,{id:"step-2-install-a-c-compiler",children:"Step 2: Install a C++ Compiler"}),"\n",(0,t.jsx)(n.h3,{id:"for-windows-users",children:"For Windows Users"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"MinGW (Minimalist GNU for Windows)"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Download MinGW from ",(0,t.jsx)(n.a,{href:"http://www.mingw.org/",children:"MinGW-w64"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Install MinGW and ensure to include the ",(0,t.jsx)(n.code,{children:"mingw32-gcc-g++"})," package for C++ support."]}),"\n",(0,t.jsxs)(n.li,{children:["Add the path to ",(0,t.jsx)(n.code,{children:"mingw\\bin"})," to the System Environment Variables to make ",(0,t.jsx)(n.code,{children:"gcc"})," and ",(0,t.jsx)(n.code,{children:"g++"})," accessible from the command line."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Microsoft C++ Compiler (MSVC)"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Install Visual Studio Community Edition from ",(0,t.jsx)(n.a,{href:"https://visualstudio.microsoft.com/vs/community/",children:"here"}),"."]}),"\n",(0,t.jsx)(n.li,{children:'During installation, select the "Desktop development with C++" workload to install MSVC.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"for-macos-users",children:"For macOS Users"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the Xcode Command Line Tools by running the following command in the Terminal:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"xcode-select --install\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"for-linux-users",children:"For Linux Users"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install GCC by running the following command in the Terminal:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo apt-get update\nsudo apt-get install build-essential\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-3-configure-vs-code-to-use-the-compiler",children:"Step 3: Configure VS Code to Use the Compiler"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open VS Code."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create or open a folder for your C++ project."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a new file named ",(0,t.jsx)(n.code,{children:"tasks.json"})," in the ",(0,t.jsx)(n.code,{children:".vscode"})," folder in your project directory with the following content to configure the build task:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "version": "2.0.0",\n    "tasks": [\n        {\n            "label": "build",\n            "type": "shell",\n            "command": "/path/to/your/compiler",\n            "args": [\n                "-g",\n                "${file}",\n                "-o",\n                "${fileDirname}/${fileBasenameNoExtension}"\n            ],\n            "group": {\n                "kind": "build",\n                "isDefault": true\n            },\n            "problemMatcher": ["$gcc"]\n        }\n    ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"/path/to/your/compiler"})," with the path to your compiler executable (e.g., ",(0,t.jsx)(n.code,{children:"g++"})," for GCC or ",(0,t.jsx)(n.code,{children:"cl.exe"})," for MSVC)."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-4-set-up-debugging",children:"Step 4: Set Up Debugging"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install the ",(0,t.jsx)(n.strong,{children:"C++ Extension"})," for debugging."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the Debug view by clicking on the Debug icon in the Activity Bar or by pressing ",(0,t.jsx)(n.code,{children:"Ctrl+Shift+D"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click on the gear icon to configure the debug settings, which will create a ",(0,t.jsx)(n.code,{children:"launch.json"})," file in the ",(0,t.jsx)(n.code,{children:".vscode"})," folder."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the following configuration to ",(0,t.jsx)(n.code,{children:"launch.json"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "name": "(gdb) Launch",\n            "type": "cppdbg",\n            "request": "launch",\n            "program": "${workspaceFolder}/${fileBasenameNoExtension}",\n            "args": [],\n            "stopAtEntry": false,\n            "cwd": "${workspaceFolder}",\n            "environment": [],\n            "externalConsole": true,\n            "MIMode": "gdb",\n            "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ],\n            "preLaunchTask": "build",\n            "miDebuggerPath": "/path/to/your/gdb",\n            "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ],\n            "logging": {\n                "engineLogging": true,\n                "trace": true\n            }\n        }\n    ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"/path/to/your/gdb"})," with the path to your GDB debugger."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-5-write-build-and-debug-your-first-c-program",children:"Step 5: Write, Build, and Debug Your First C++ Program"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a new C++ file in your project directory, e.g., ",(0,t.jsx)(n.code,{children:"main.cpp"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Write a simple C++ program:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Save the file."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Press ",(0,t.jsx)(n.code,{children:"Ctrl+Shift+B"})," to build the program."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Start debugging by pressing ",(0,t.jsx)(n.code,{children:"F5"})," or by clicking the green play button in the Debug view."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Congratulations! You have successfully set up your C++ development environment in Visual Studio Code. You can now write, build, and debug your C++ programs efficiently."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(6540);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
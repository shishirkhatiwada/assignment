"use client";

import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { php } from "@codemirror/lang-php";
import { rust } from "@codemirror/lang-rust";
import { githubDark } from "@uiw/codemirror-theme-github";
import { useTheme } from "next-themes";

interface EditorProps {
  language: string;
}

const getLanguageExtension = (language: string) => {
  switch (language) {
    case "javascript":
    case "typescript":
      return javascript();
    case "python":
      return python();
    case "cpp":
      return cpp();
    case "php":
      return php();
    case "rust":
      return rust();
    default:
      return javascript();
  }
};

const defaultCode = {
  javascript: '// JavaScript\nconsole.log("Hello, World!");',
  typescript: '// TypeScript\nconst greeting: string = "Hello, World!";\nconsole.log(greeting);',
  python: '# Online Python compiler (interpreter) to run Python\n# Write Python 3 code in this online editor and run it.\nprint("Hello World")',
  php: '<?php\n// PHP\necho "Hello, World!";',
  rust: '// Rust\nfn main() {\n    println!("Hello, World!");\n}',
  cpp: '// C++\n#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}',
  swift: '// Swift\nprint("Hello, World!")',
  go: '// Go\npackage main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}',
};

export function Editor({ language }: EditorProps) {
  const { theme } = useTheme();
  const [code, setCode] = useState(defaultCode[language as keyof typeof defaultCode] || "");

  return (
    <div className="h-[calc(100vh-56px)] w-full">
      <CodeMirror
        value={code}
        height="100%"
        theme={githubDark}
        extensions={[getLanguageExtension(language)]}
        onChange={(value) => setCode(value)}
        className="text-base"
      />
    </div>
  );
}
"use client";

import { useState } from "react";
import { Editor } from "@/components/code-editor/editor";
import { LanguageSelector } from "@/components/code-editor/language-selector";
import { OutputPanel } from "@/components/code-editor/output-panel";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState("python");

  return (
    <main className="min-h-screen bg-background">
      <div className="grid grid-cols-[60px_1fr]">
        <LanguageSelector
          selectedLanguage={selectedLanguage}
          onLanguageSelect={setSelectedLanguage}
        />
        <div>
          <header className="flex items-center justify-between border-b bg-background p-2">
            <div className="flex items-center gap-2">
              <Button size="sm" variant="default" className="gap-2">
                <Play className="h-4 w-4" />
                Run
              </Button>
              <Button size="sm" variant="ghost">
                Clear
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Output</span>
              <ModeToggle />
            </div>
          </header>
          <div className="grid grid-cols-[1fr_400px]">
            <Editor language={selectedLanguage} />
            <OutputPanel />
          </div>
        </div>
      </div>
    </main>
  );
}
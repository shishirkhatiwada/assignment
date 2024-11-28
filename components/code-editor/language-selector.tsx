"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  Code2,
  FileJson,
  FileType,
  Flame,
  GalleryVerticalEnd,
  Languages,
  Scroll,
  SwatchBook,
} from "lucide-react";

interface Language {
  name: string;
  icon: React.ReactNode;
  value: string;
}

const languages: Language[] = [
  { name: "Python", icon: <Languages className="h-5 w-5" />, value: "python" },
  { name: "JavaScript", icon: <FileJson className="h-5 w-5" />, value: "javascript" },
  { name: "TypeScript", icon: <FileType className="h-5 w-5" />, value: "typescript" },
  { name: "PHP", icon: <GalleryVerticalEnd className="h-5 w-5" />, value: "php" },
  { name: "Rust", icon: <Flame className="h-5 w-5" />, value: "rust" },
  { name: "C++", icon: <Code2 className="h-5 w-5" />, value: "cpp" },
  { name: "Swift", icon: <SwatchBook className="h-5 w-5" />, value: "swift" },
  { name: "Go", icon: <Scroll className="h-5 w-5" />, value: "go" },
];

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageSelect: (language: string) => void;
}

export function LanguageSelector({
  selectedLanguage,
  onLanguageSelect,
}: LanguageSelectorProps) {
  return (
    <div className="h-screen border-r bg-muted/40">
      <ScrollArea className="h-full">
        <div className="space-y-2 p-2">
          {languages.map((language) => (
            <Tooltip key={language.value} delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "w-full h-12",
                    selectedLanguage === language.value &&
                      "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                  )}
                  onClick={() => onLanguageSelect(language.value)}
                >
                  {language.icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="text-xs">
                {language.name}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
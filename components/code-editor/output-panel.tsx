"use client";

import { ScrollArea } from "@/components/ui/scroll-area";

export function OutputPanel() {
  return (
    <div className="h-[calc(100vh-56px)] border-l bg-background">
      <ScrollArea className="h-full">
        <div className="p-4 space-y-2">
          <p className="font-mono text-sm">Hello World</p>
          <p className="font-mono text-sm text-muted-foreground">
            === Code Execution Successful ===
          </p>
        </div>
      </ScrollArea>
    </div>
  );
}
import React from "react";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  charClassName?: string;
}

export function SplitText({ text, className, wordClassName, charClassName }: SplitTextProps) {
  const words = text.split(" ");
  
  return (
    <span className={cn("inline-block", className)}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className={cn("inline-block whitespace-pre", wordClassName)}>
          {word.split("").map((char, charIndex) => (
            <span key={charIndex} className={cn("inline-block", charClassName)}>
              {char}
            </span>
          ))}
          {/* Add space after each word except the last one */}
          {wordIndex !== words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

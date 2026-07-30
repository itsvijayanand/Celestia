"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 md:py-6 transition-all duration-500",
        scrolled ? "bg-background/40 backdrop-blur-md border-b border-border/50 py-4" : "bg-transparent py-6 md:py-8"
      )}
    >
      <Link href="/" className="group flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform">
          C
        </div>
        <span className="font-semibold text-lg tracking-tight text-foreground hidden sm:block">Celestia Creative.</span>
      </Link>

      <nav className="flex items-center gap-4">
        <Magnetic>
          <Button 
            variant="outline" 
            className="rounded-full bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all text-sm md:text-base px-6 h-10 md:h-12"
          >
            Let's Talk
          </Button>
        </Magnetic>
      </nav>
    </header>
  );
}

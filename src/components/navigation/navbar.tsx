"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Logo } from "@/components/ui/logo";

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
        "fixed top-0 inset-x-0 z-50 flex items-center justify-end px-6 md:px-12 transition-all duration-500",
        scrolled ? "bg-background/40 backdrop-blur-md border-b border-border/50 pt-8 pb-4 md:py-4" : "bg-transparent pt-12 pb-6 md:py-8"
      )}
    >
      <div className="w-full md:absolute md:inset-0 flex items-center justify-center pointer-events-none">
        <Link href="/" className="group flex items-center hover:opacity-80 transition-opacity pointer-events-auto mt-2 md:mt-0">
          <Logo className="h-20 w-auto md:h-20" />
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-4">
        <Magnetic>
          <Link href="/#contact">
            <Button 
              variant="outline" 
              className="rounded-full bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all text-sm md:text-base px-6 h-10 md:h-12"
            >
              Let's Talk
            </Button>
          </Link>
        </Magnetic>
      </nav>
    </header>
  );
}

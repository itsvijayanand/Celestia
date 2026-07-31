"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "project-haven", label: "Haven" },
  { id: "project-mediconnect", label: "MediConnect" },
  { id: "project-pureleaf", label: "PureLeaf" },
  { id: "process", label: "Process" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export function ConstellationNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [visited, setVisited] = useState<Set<string>>(new Set(["hero"]));

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section.id);
            setVisited(prev => {
              const newSet = new Set(prev);
              newSet.add(section.id);
              return newSet;
            });
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-6 md:gap-8 py-8 hidden sm:flex">
      {sections.map((section, index) => {
        const isActive = activeSection === section.id;
        const isVisited = visited.has(section.id);
        
        return (
          <div key={section.id} className="relative flex flex-col items-center">
            {/* Connecting line to previous */}
            {index > 0 && (
              <div 
                className={cn(
                  "absolute bottom-full w-px h-6 md:h-8 transition-colors duration-700",
                  isVisited ? "bg-primary/50 shadow-[0_0_8px_rgba(184,155,234,0.5)]" : "bg-primary/10"
                )}
              />
            )}
            
            {/* The Star/Dot */}
            <button
              onClick={() => scrollTo(section.id)}
              className="group relative flex items-center justify-center p-2 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
              aria-label={`Scroll to ${section.label}`}
            >
              {/* Tooltip */}
              <span className="absolute left-full ml-4 px-2 py-1 bg-background/80 backdrop-blur-sm border border-border text-xs text-foreground/80 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {section.label}
              </span>
              
              {/* Star Core */}
              <motion.div 
                className={cn(
                  "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors duration-500",
                  isActive ? "bg-primary" : isVisited ? "bg-primary/60" : "bg-primary/20"
                )}
                animate={isActive ? {
                  scale: [1, 1.5, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(184, 155, 234, 0)",
                    "0 0 12px 4px rgba(184, 155, 234, 0.4)",
                    "0 0 0 0 rgba(184, 155, 234, 0)"
                  ]
                } : {}}
                transition={isActive ? {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                } : {}}
              />
            </button>
          </div>
        );
      })}
    </nav>
  );
}

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" className={cn("w-auto h-full", className)} xmlns="http://www.w3.org/2000/svg">
      <g fill="#A78BFA">
        {/* Center large star */}
        <path d="M200 10 Q200 50 240 50 Q200 50 200 90 Q200 50 160 50 Q200 50 200 10" />
        
        {/* Left stars */}
        <path d="M145 35 Q145 42 152 42 Q145 42 145 49 Q145 42 138 42 Q145 42 145 35" />
        <path d="M120 60 Q120 65 125 65 Q120 65 120 70 Q120 65 115 65 Q120 65 120 60" />
        
        {/* Right stars */}
        <path d="M255 35 Q255 42 262 42 Q255 42 255 49 Q255 42 248 42 Q255 42 255 35" />
        <path d="M280 60 Q280 65 285 65 Q280 65 280 70 Q280 65 275 65 Q280 65 280 60" />
      </g>
      
      {/* CELESTIA */}
      <text 
        x="200" 
        y="150" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize="56" 
        fontWeight="800" 
        fill="#1e293b" 
        letterSpacing="0.25em" 
        textAnchor="middle"
      >
        CELESTIA
      </text>
      
      {/* CREATIVE */}
      <text 
        x="200" 
        y="185" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize="22" 
        fontWeight="400" 
        fill="#1e293b" 
        letterSpacing="0.4em" 
        textAnchor="middle"
      >
        CREATIVE
      </text>
    </svg>
  );
}

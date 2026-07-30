"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, PenTool, Layout, Layers, Code, Rocket } from "lucide-react";

const steps = [
  { id: "discovery", title: "Discovery", icon: Search, description: "Understanding your goals, audience, and market landscape." },
  { id: "research", title: "Research", icon: Lightbulb, description: "Gathering insights to inform strategic design decisions." },
  { id: "wireframes", title: "Wireframes", icon: PenTool, description: "Mapping out user flows and structural foundations." },
  { id: "ui-design", title: "UI Design", icon: Layout, description: "Crafting the visual language and aesthetic direction." },
  { id: "prototype", title: "Prototype", icon: Layers, description: "Building interactive models to test user experiences." },
  { id: "development", title: "Development", icon: Code, description: "Translating designs into robust, scalable code." },
  { id: "launch", title: "Launch", icon: Rocket, description: "Deploying your product and monitoring initial performance." },
];

export function Process() {
  return (
    <section id="process" className="relative w-full py-24 px-6 overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col gap-16">
        <div className="flex flex-col gap-4 text-center items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-semibold text-foreground"
          >
            How We Build.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70 max-w-2xl"
          >
            Our constellation of process steps ensures every project moves from a single idea to a fully realized digital ecosystem.
          </motion.p>
        </div>

        <div className="relative mt-8 md:mt-20">
          {/* Connecting line (Desktop horizontal, Mobile vertical) */}
          <div className="absolute left-[39px] md:left-10 lg:left-12 md:top-[39px] lg:top-[47px] bottom-0 md:bottom-auto md:right-10 lg:right-12 w-px md:w-auto h-full md:h-px bg-border z-0" />
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12 md:gap-4 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-6 relative group flex-1"
                >
                  {/* Constellation Star */}
                  <div className="relative w-20 h-20 lg:w-24 lg:h-24 shrink-0 bg-background border border-border rounded-full flex items-center justify-center transition-colors duration-500 group-hover:border-primary/50 group-hover:bg-primary/5 shadow-sm">
                    {/* Inner glowing dot on hover */}
                    <div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_12px_4px_rgba(184,155,234,0.4)]" />
                    
                    <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-foreground/60 transition-colors duration-500 group-hover:text-primary relative z-10" />
                  </div>
                  
                  <div className="flex flex-col md:items-center md:text-center mt-2 md:mt-0 pt-1 md:pt-0">
                    <h3 className="text-xl lg:text-2xl font-medium tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-sm lg:text-base text-foreground/60 leading-relaxed max-w-[200px] lg:max-w-[220px]">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2, Smartphone, PenTool, Layout, Box, Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "uiux",
    title: "UI/UX Design",
    description: "We craft intuitive, engaging, and beautiful user interfaces backed by deep user research and data-driven insights.",
    tools: ["Figma", "Protopie", "Spline"],
    icon: Layout,
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications designed for performance, fluidity, and seamless user experiences.",
    tools: ["React Native", "Swift", "Kotlin"],
    icon: Smartphone,
  },
  {
    id: "web",
    title: "Web Apps",
    description: "Scalable, high-performance web applications built with modern frameworks and robust architectures.",
    tools: ["React", "Next.js", "Vue"],
    icon: Code2,
  },
  {
    id: "brand",
    title: "Brand Identity",
    description: "Strategic branding that communicates your core values and creates lasting impressions across all touchpoints.",
    tools: ["Illustrator", "Photoshop", "After Effects"],
    icon: PenTool,
  },
  {
    id: "systems",
    title: "Design Systems",
    description: "Comprehensive design systems that ensure consistency, accelerate development, and scale with your product.",
    tools: ["Figma Variables", "Storybook", "Zeroheight"],
    icon: Box,
  },
  {
    id: "social",
    title: "Social Media",
    description: "Creative direction and social media management to build communities and elevate your brand presence.",
    tools: ["Buffer", "Figma", "CapCut"],
    icon: Megaphone,
  },
];

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative w-full py-24 px-6 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-semibold text-foreground"
          >
            Capabilities.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70"
          >
            We offer a comprehensive suite of digital services designed to elevate your brand and accelerate your growth.
          </motion.p>
        </div>

        <div className="flex flex-col border-t border-border mt-8">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-b border-border cursor-pointer overflow-hidden transition-colors hover:bg-primary/5 px-4 md:px-8 -mx-4 md:-mx-8 rounded-2xl"
              >
                <div className="flex items-center gap-6 z-10 md:w-1/3">
                  <div className={cn(
                    "p-3 rounded-xl transition-colors duration-500",
                    isHovered ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                  )}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground transition-transform duration-500 group-hover:translate-x-2">
                    {service.title}
                  </h3>
                </div>

                <div className="hidden md:flex flex-1 z-10 pl-8">
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="flex flex-col gap-4"
                      >
                        <p className="text-lg text-foreground/70 max-w-md">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          {service.tools.map(tool => (
                            <span key={tool} className="text-xs font-medium px-3 py-1 bg-background border border-border rounded-full text-foreground/70 shadow-sm">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Mobile view content (always visible or simplified) */}
                <div className="md:hidden flex flex-col gap-4 mt-6 z-10">
                  <p className="text-base text-foreground/70">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {service.tools.map(tool => (
                      <span key={tool} className="text-xs font-medium px-3 py-1 bg-background border border-border rounded-full text-foreground/70 shadow-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-end z-10 w-24">
                  <div className={cn(
                    "w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500",
                    isHovered ? "border-primary bg-primary text-primary-foreground shadow-lg" : "border-border text-foreground/30"
                  )}>
                    <ArrowRight className={cn("w-5 h-5 transition-transform duration-500", isHovered && "-rotate-45")} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

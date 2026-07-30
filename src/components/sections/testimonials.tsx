"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "Celestia didn't just build our app; they completely reimagined our digital presence. The attention to detail is staggering.",
    author: "Elena Rostova",
    role: "CEO, Nova Financial",
  },
  {
    id: 2,
    quote: "Working with them felt less like an agency relationship and more like having an elite internal design team.",
    author: "Marcus Chen",
    role: "Founder, Vital Health",
  },
  {
    id: 3,
    quote: "The brand identity and web platform they created for us helped secure our Series B funding. Absolute professionals.",
    author: "Sarah Jenkins",
    role: "CMO, Aura AI",
  },
  {
    id: 4,
    quote: "Their process is seamless from discovery to launch. We saw a 40% increase in user retention after the redesign.",
    author: "David Alaba",
    role: "Product Lead, EcomStore",
  }
];

export function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView && !isHovered) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }
      });
    } else {
      controls.stop();
    }
  }, [isInView, isHovered, controls]);

  return (
    <section id="testimonials" className="relative w-full py-24 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto px-6 mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-semibold text-foreground text-center"
        >
          Words from our partners.
        </motion.h2>
      </div>

      <div 
        ref={containerRef}
        className="w-full relative flex overflow-hidden py-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className="flex gap-6 px-4"
          animate={controls}
          style={{ width: "fit-content" }}
        >
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div 
              key={`${testimonial.id}-${idx}`}
              className="w-[320px] md:w-[450px] shrink-0 bg-background/60 backdrop-blur-xl border border-primary/10 p-8 md:p-10 rounded-[32px] shadow-sm flex flex-col justify-between gap-8 transition-all duration-500 hover:scale-[1.02] hover:bg-background/80 hover:border-primary/30 hover:shadow-xl group cursor-pointer"
            >
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex flex-col gap-1 relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/30 rounded-full group-hover:bg-primary transition-colors" />
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient fades for edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-48 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-48 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}

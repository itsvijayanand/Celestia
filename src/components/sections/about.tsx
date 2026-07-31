"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ from, to, duration = 2, suffix = "" }: { from: number; to: number; duration?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function: easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(from + (to - from) * easeProgress));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref} className="text-4xl md:text-6xl font-semibold text-primary">{count}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="relative w-full min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight text-foreground">
              Built for the bold, designed for the future.
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 mb-6 leading-relaxed">
              Celestia Creative was born out of a desire to break the mold of traditional agencies. We don't just build websites; we architect digital ecosystems that drive growth and command attention.
            </p>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Our philosophy is rooted in finding the perfect equilibrium between uncompromising aesthetics and relentless functionality. Every pixel serves a purpose; every interaction tells a story.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 mt-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Counter from={0} to={95} suffix="+" />
              <p className="text-sm text-foreground/50 mt-2 font-medium uppercase tracking-wider">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Counter from={0} to={10} suffix="x" />
              <p className="text-sm text-foreground/50 mt-2 font-medium uppercase tracking-wider">ROI Average</p>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] lg:h-[700px] w-full bg-primary/5 rounded-[40px] border border-primary/10 flex items-center justify-center overflow-hidden"
        >
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[20%] w-32 h-32 bg-background/40 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl"
          />
          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[25%] right-[20%] w-48 h-32 bg-primary/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl"
          />
          <motion.div 
            animate={{ scale: [1, 1.05, 1], rotate: [0, -2, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[45%] left-[45%] w-24 h-24 bg-secondary/20 backdrop-blur-xl rounded-full border border-white/20 shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}

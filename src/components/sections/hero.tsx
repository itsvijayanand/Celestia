"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";

export function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center pt-32 md:pt-40 pb-12 overflow-hidden px-6">


      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur-md border border-border"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium">Digital Product Agency</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1] text-foreground"
        >
          Designing Digital <br className="hidden md:block" />
          Experiences <span className="text-primary/90 italic">Beyond</span> <br className="hidden md:block" />
          Imagination.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl"
        >
          We craft premium digital products, SaaS dashboards, and immersive marketing websites for forward-thinking brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-4"
        >
          <Magnetic>
            <Button size="lg" className="rounded-full h-14 px-8 text-base shadow-[0_0_20px_rgba(184,155,234,0.3)] hover:shadow-[0_0_30px_rgba(184,155,234,0.5)] transition-shadow">
              View Our Work
            </Button>
          </Magnetic>
          <Magnetic>
            <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-base bg-background/50 backdrop-blur-md border-border hover:bg-primary/10">
              Book Discovery Call
            </Button>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}

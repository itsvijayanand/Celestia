"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="relative w-full py-24 px-6 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1]">
            Let's build <br/> something <span className="text-primary italic">stellar.</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-md mt-4 leading-relaxed">
            Whether you need a complete digital overhaul or a strategic partner for your next product launch, we're ready.
          </p>
          
          <div className="flex flex-col gap-2 mt-8">
            <h3 className="font-medium text-foreground uppercase tracking-widest text-sm">Email</h3>
            <a href="mailto:hello@celestiacreative.com" className="text-xl md:text-2xl text-foreground/80 hover:text-primary transition-colors">
              hello@celestiacreative.com
            </a>
          </div>
          
          <div className="flex flex-col gap-2 mt-6">
            <h3 className="font-medium text-foreground uppercase tracking-widest text-sm">Location</h3>
            <p className="text-xl md:text-2xl text-foreground/80">
              San Francisco, CA<br/>
              <span className="text-foreground/50 text-base">Available globally</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-background/30 backdrop-blur-xl border border-primary/10 rounded-[32px] p-8 md:p-10 lg:p-12 shadow-lg relative"
        >
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="firstName" className="text-foreground/80 ml-1">First Name</Label>
                <Input id="firstName" placeholder="Jane" className="bg-background/50 border-border/50 h-14 rounded-xl px-4 focus-visible:ring-primary/50" />
              </div>
              <div className="space-y-3">
                <Label htmlFor="lastName" className="text-foreground/80 ml-1">Last Name</Label>
                <Input id="lastName" placeholder="Doe" className="bg-background/50 border-border/50 h-14 rounded-xl px-4 focus-visible:ring-primary/50" />
              </div>
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="email" className="text-foreground/80 ml-1">Email</Label>
              <Input id="email" type="email" placeholder="jane@example.com" className="bg-background/50 border-border/50 h-14 rounded-xl px-4 focus-visible:ring-primary/50" />
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="message" className="text-foreground/80 ml-1">Message</Label>
              <Textarea id="message" placeholder="Tell us about your project..." className="bg-background/50 border-border/50 min-h-[140px] resize-none rounded-xl p-4 focus-visible:ring-primary/50" />
            </div>

            <Button type="submit" size="lg" className="w-full rounded-xl h-14 mt-4 shadow-[0_0_15px_rgba(184,155,234,0.2)] hover:shadow-[0_0_25px_rgba(184,155,234,0.4)] transition-shadow text-base">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

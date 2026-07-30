"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2 } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    
    // Web3Forms configuration
    // IMPORTANT: Replace the access_key value below with your actual access key from web3forms.com
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("Error", data);
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <a href="mailto:creative.celestia@gmail.com" className="text-xl md:text-2xl text-foreground/80 hover:text-primary transition-colors">
              creative.celestia@gmail.com
            </a>
          </div>
          
          <div className="flex flex-col gap-2 mt-6">
            <h3 className="font-medium text-foreground uppercase tracking-widest text-sm">Location</h3>
            <p className="text-xl md:text-2xl text-foreground/80">
              Karnataka, India<br/>
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
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] gap-6 animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-medium text-foreground">Message Sent!</h3>
                <p className="text-foreground/70 max-w-sm">
                  Thank you for reaching out. We've received your message and will get back to you shortly.
                </p>
              </div>
              <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-4">
                Send another message
              </Button>
            </div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              {/* Web3Forms requires a subject line and allows you to customize the from name, but they are optional. */}
              <input type="hidden" name="subject" value="New Contact Form Submission from Celestia Creative" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="firstName" className="text-foreground/80 ml-1">First Name</Label>
                  <Input id="firstName" name="First Name" required placeholder="Jane" className="bg-background/50 border-border/50 h-14 rounded-xl px-4 focus-visible:ring-primary/50" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="lastName" className="text-foreground/80 ml-1">Last Name</Label>
                  <Input id="lastName" name="Last Name" required placeholder="Doe" className="bg-background/50 border-border/50 h-14 rounded-xl px-4 focus-visible:ring-primary/50" />
                </div>
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="email" className="text-foreground/80 ml-1">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="jane@example.com" className="bg-background/50 border-border/50 h-14 rounded-xl px-4 focus-visible:ring-primary/50" />
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="message" className="text-foreground/80 ml-1">Message</Label>
                <Textarea id="message" name="message" required placeholder="Tell us about your project..." className="bg-background/50 border-border/50 min-h-[140px] resize-none rounded-xl p-4 focus-visible:ring-primary/50" />
              </div>

              {error && (
                <div className="text-destructive text-sm bg-destructive/10 p-3 rounded-lg border border-destructive/20">
                  {error}
                </div>
              )}

              <Button 
                type="submit" 
                disabled={isSubmitting}
                size="lg" 
                className="w-full rounded-xl h-14 mt-4 shadow-[0_0_15px_rgba(184,155,234,0.2)] hover:shadow-[0_0_25px_rgba(184,155,234,0.4)] transition-shadow text-base relative overflow-hidden"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

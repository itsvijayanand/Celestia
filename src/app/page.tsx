import { ConstellationNav } from "@/components/navigation/constellation-nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Work } from "@/components/sections/work";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen w-full flex flex-col items-center selection:bg-primary/30">
      <ConstellationNav />
      <Hero />
      <About />
      <Services />
      <Work />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      
      <footer className="w-full py-12 flex flex-col items-center justify-center gap-6 bg-background/30 backdrop-blur-md border-t border-border">
        <p className="text-lg text-foreground/80 font-medium">Every great product begins with a single idea.</p>
        <p className="text-sm text-foreground/50">© {new Date().getFullYear()} Celestia Creative. All rights reserved.</p>
      </footer>
    </main>
  );
}

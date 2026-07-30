"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "For a full website redesign and build, our timeline is typically 6-10 weeks. App design and development can range from 12-20 weeks depending on complexity. We establish clear milestones during our discovery phase."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. We offer tailored retainer packages to ensure your digital product continues to evolve, scale, and perform optimally long after the initial launch."
  },
  {
    question: "How do you handle performance for 3D elements?",
    answer: "We strictly optimize all WebGL elements. We cap concurrent 3D objects, lazy-load the React Three Fiber canvas, and use lightweight geometries to ensure a buttery smooth 60fps experience on all modern devices."
  },
  {
    question: "What makes Celestia different from other agencies?",
    answer: "We reject the 'factory model'. Every project is a bespoke creation. We don't use templates. Our philosophy is rooted in finding the perfect equilibrium between uncompromising aesthetics and relentless functionality."
  },
  {
    question: "Do you work with early-stage startups?",
    answer: "Yes, we frequently partner with founders to design their MVPs. We help translate complex technical visions into intuitive, market-ready products that secure funding and attract early adopters."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="relative w-full py-24 px-6 overflow-hidden">
      <div className="max-w-3xl w-full mx-auto flex flex-col gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-foreground/70">Everything you need to know about partnering with us.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border px-2">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/70 leading-relaxed pb-6 pr-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

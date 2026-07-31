"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "@/components/ui/magnetic";
import { SplitText } from "@/components/ui/split-text";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  const isEven = index % 2 === 0;

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Use GSAP MatchMedia for responsive animations if needed, but standard context works well
    const ctx = gsap.context(() => {
      // 1. Image Mask Reveal
      gsap.fromTo(
        imageWrapperRef.current,
        { clipPath: "inset(100% 0% 0% 0% round 32px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 32px)",
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          }
        }
      );

      // 2. Image Parallax inside the mask
      gsap.fromTo(
        imageRef.current,
        { scale: 1.2, yPercent: 10 },
        {
          scale: 1,
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );

      // 3. Content Fade Up
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          }
        }
      );

      // 4. Split Text Reveal for title
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll(".word-split");
        gsap.fromTo(
          words,
          { opacity: 0, y: 40, rotateX: -45 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 70%",
            }
          }
        );
      }
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div 
      id={`project-${project.id}`}
      ref={containerRef}
      className={cn(
        "group relative w-full min-h-[90vh] py-24 flex flex-col md:flex-row items-center gap-12 lg:gap-24",
        !isEven && "md:flex-row-reverse"
      )}
    >
      {/* Background Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none -z-10"
        style={{
          background: `radial-gradient(circle at ${isEven ? '20% 50%' : '80% 50%'}, ${project.glowColor}, transparent 60%)`
        }}
      />

      {/* Image / Mockup Column */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-[70vh] relative perspective-1000">
        <div 
          ref={imageWrapperRef}
          className="absolute inset-0 overflow-hidden rounded-[32px] bg-background/20 backdrop-blur-3xl border border-primary/10 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-y-2 group-hover:rotate-x-2"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Parallax Inner Container */}
          <div ref={imageRef} className={cn("w-full h-full bg-gradient-to-br flex items-center justify-center relative", project.color)}>
            {/* @ts-ignore */}
            {project.image ? (
              <img 
                /* @ts-ignore */
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            ) : (
              <div className="w-[60%] h-[70%] rounded-3xl bg-white/5 border border-white/20 backdrop-blur-md shadow-2xl flex flex-col overflow-hidden relative z-10 transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-4">
                <div className="w-full h-12 bg-white/5 border-b border-white/10 flex items-center px-6 gap-2 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-primary/20" />
                  <div className="w-3 h-3 rounded-full bg-primary/20" />
                  <div className="w-3 h-3 rounded-full bg-primary/20" />
                </div>
                <div className="flex-1 p-6 flex flex-col gap-4">
                  <div className="w-1/2 h-6 rounded bg-primary/10" />
                  <div className="w-full h-32 rounded-xl bg-primary/5" />
                  <div className="w-3/4 h-4 rounded bg-primary/10 mt-auto" />
                </div>
              </div>
            )}
            <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none z-20" />
          </div>

          {/* Floating Particles on Hover */}
          <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-primary/40 opacity-0 group-hover:opacity-100 group-hover:-translate-y-12 transition-all duration-1000 delay-100 blur-[1px]" />
          <div className="absolute top-[60%] right-[15%] w-3 h-3 rounded-full bg-primary/30 opacity-0 group-hover:opacity-100 group-hover:-translate-y-16 transition-all duration-1000 delay-200 blur-[2px]" />
          <div className="absolute bottom-[20%] left-[30%] w-1.5 h-1.5 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 transition-all duration-1000 blur-[1px]" />
        </div>
      </div>

      {/* Content Column */}
      <div ref={contentRef} className="w-full md:w-1/2 flex flex-col gap-8">
        <div className="flex items-center gap-4 text-primary font-medium tracking-widest uppercase text-sm">
          <span>{project.number}</span>
          <span className="w-8 h-px bg-primary/30" />
          <span>{project.category}</span>
        </div>

        <h3 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground perspective-1000">
          <SplitText text={project.title} wordClassName="word-split" charClassName="char-split" />
        </h3>

        <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
          {project.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">The Challenge</h4>
            <p className="text-sm text-foreground/60 leading-relaxed">{project.challenge}</p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">The Solution</h4>
            <p className="text-sm text-foreground/60 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.features.slice(0, 4).map(feature => (
            <span key={feature} className="px-4 py-2 rounded-full border border-primary/10 bg-background/50 backdrop-blur-sm text-xs text-foreground/70">
              {feature}
            </span>
          ))}
          {project.features.length > 4 && (
            <span className="px-4 py-2 rounded-full border border-primary/10 bg-background/50 backdrop-blur-sm text-xs text-foreground/70">
              +{project.features.length - 4} more
            </span>
          )}
        </div>

        <div className="mt-8">
          <Magnetic>
            <Link 
              href={/* @ts-ignore */ project.link || `/work/${project.id}`}
              target={/* @ts-ignore */ project.link ? "_blank" : undefined}
              rel={/* @ts-ignore */ project.link ? "noopener noreferrer" : undefined}
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-background/40 hover:bg-background/80 backdrop-blur-xl border border-primary/20 hover:border-primary/50 rounded-full transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(184,155,234,0.3)]"
            >
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">{project.cta}</span>
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
            </Link>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}

export function Work() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerTitleRef.current) {
        const words = headerTitleRef.current.querySelectorAll(".word-split");
        gsap.fromTo(
          words,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }, headerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="relative w-full py-24 px-6 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-12">
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 
              ref={headerTitleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground overflow-hidden"
            >
              <SplitText text="Featured Projects." wordClassName="word-split" />
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-xl">
              Crafting meaningful digital experiences across industries through thoughtful design, intuitive interactions, and user-centered solutions.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

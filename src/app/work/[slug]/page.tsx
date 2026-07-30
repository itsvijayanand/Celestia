import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/navigation/navbar";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";

// Generate static params for SSG
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <SmoothScrollProvider>
        <main className="min-h-screen bg-background relative z-10 pt-32 pb-24">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            {/* Back Button */}
            <Link 
              href="/#work" 
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Projects</span>
            </Link>

            {/* Header */}
            <div className="flex flex-col gap-6 mb-16">
              <div className="flex items-center gap-4 text-primary font-medium tracking-widest uppercase text-sm">
                <span>{project.number}</span>
                <span className="w-8 h-px bg-primary/30" />
                <span>{project.category}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground">
                {project.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mt-6">
                {project.description}
              </p>
            </div>

            {/* Main Visual Placeholder */}
            <div className="w-full aspect-[16/9] rounded-[32px] overflow-hidden mb-24 relative shadow-2xl border border-primary/10">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                <span className="text-foreground/40 font-medium tracking-widest uppercase text-sm z-10 backdrop-blur-md bg-background/30 px-6 py-3 rounded-full border border-white/10">
                  Case Study Main Graphic
                </span>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-24">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-semibold text-foreground">The Challenge</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-semibold text-foreground">Our Solution</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Features & Tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 bg-background/30 backdrop-blur-xl border border-primary/10 rounded-[32px] p-8 md:p-12 mb-24">
              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-medium tracking-widest uppercase text-primary">Key Features</h3>
                <ul className="flex flex-col gap-3">
                  {project.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-medium tracking-widest uppercase text-primary">Tools & Tech</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tools.map(tool => (
                    <span key={tool} className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm text-foreground/80">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Secondary Visuals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              <div className="aspect-square rounded-[32px] overflow-hidden relative shadow-lg border border-primary/5">
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-80 flex items-center justify-center`}>
                  <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                  <span className="text-foreground/40 font-medium tracking-widest uppercase text-xs z-10">Secondary Image 1</span>
                </div>
              </div>
              <div className="aspect-square rounded-[32px] overflow-hidden relative shadow-lg border border-primary/5">
                <div className={`absolute inset-0 bg-gradient-to-bl ${project.color} opacity-80 flex items-center justify-center`}>
                  <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                  <span className="text-foreground/40 font-medium tracking-widest uppercase text-xs z-10">Secondary Image 2</span>
                </div>
              </div>
            </div>

            {/* Next Steps CTA */}
            <div className="flex flex-col items-center justify-center text-center gap-8 bg-gradient-to-b from-transparent to-primary/5 rounded-[32px] p-12 border border-primary/10">
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground">Ready to start yours?</h2>
              <p className="text-lg text-foreground/70 max-w-lg">
                We're always looking for ambitious projects and visionary partners.
              </p>
              <Link 
                href="/#contact"
                className="inline-flex items-center gap-4 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full transition-all shadow-lg hover:shadow-primary/25"
              >
                <span className="font-medium">Let's talk</span>
                <ArrowLeft className="w-4 h-4 rotate-135" style={{ transform: 'rotate(135deg)' }} />
              </Link>
            </div>

          </div>
        </main>
      </SmoothScrollProvider>
    </>
  );
}

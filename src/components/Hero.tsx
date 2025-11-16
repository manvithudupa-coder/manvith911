import { Button } from "@/components/ui/button";
import { Github, Mail, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
        }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
          {/* Greeting */}
          <div className="inline-block">
            <span className="text-primary font-semibold text-lg">Hi there, I'm</span>
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="gradient-text">Manvith</span>
          </h1>

          {/* Title */}
          <p className="text-2xl md:text-3xl text-muted-foreground font-light">
            Web Developer & Student
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building modern web experiences with{" "}
            <span className="text-primary font-medium">HTML</span>,{" "}
            <span className="text-primary font-medium">CSS</span>, and{" "}
            <span className="text-primary font-medium">JavaScript</span>.
            Passionate about creating beautiful, functional websites.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="lg"
              className="group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <a href="https://github.com/Manvith911" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub Profile
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center pt-8">
            <a
              href="https://github.com/Manvith911"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:contact@manvith.dev"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;

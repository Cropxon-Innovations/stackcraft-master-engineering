import { Button } from '@/components/ui/button';
import { BookOpen, Rocket } from 'lucide-react';
import stackLogo from '@/assets/stack-dark.svg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-up opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
            <img 
              src={stackLogo} 
              alt="StackCraft" 
              className="h-12 sm:h-14 lg:h-16 mx-auto"
            />
          </div>

          {/* Title */}
          <h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-up opacity-0"
            style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
          >
            StackCraft
          </h1>

          {/* Subtitle */}
          <p 
            className="text-xl sm:text-2xl text-muted-foreground font-medium mb-8 animate-fade-up opacity-0"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            Production-grade engineering playbooks and learning platform
          </p>

          {/* Value Statement */}
          <div 
            className="max-w-2xl mx-auto mb-12 animate-blur-in opacity-0"
            style={{ animationDelay: '350ms', animationFillMode: 'forwards' }}
          >
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
              StackCraft is a platform for learning, building, and mastering
              production-grade software engineering — from foundations to architecture.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We focus on <span className="text-foreground font-medium">what</span> to build, <span className="text-foreground font-medium">why</span> it matters, and <span className="text-foreground font-medium">how</span> systems behave
              in the real world — beyond tutorials.
            </p>
          </div>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0"
            style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="https://blog.stackcraft.io" target="_blank" rel="noopener noreferrer">
                <BookOpen className="mr-2" />
                Read the Playbooks
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#platform">
                <Rocket className="mr-2" />
                Explore the Platform
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;

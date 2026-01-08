import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Rocket } from 'lucide-react';
import stackLogo from '@/assets/stack-dark.svg';

const concepts = [
  { label: 'C# & .NET Foundations', color: 'text-emerald-400' },
  { label: 'API & Backend Engineering', color: 'text-blue-400' },
  { label: 'Cloud & DevOps', color: 'text-violet-400' },
  { label: 'Microservices Architecture', color: 'text-amber-400' },
  { label: 'AI-Ready Systems', color: 'text-rose-400' },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % concepts.length);
        setIsAnimating(false);
      }, 400);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentConcept = concepts[currentIndex];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-[0.07] blur-3xl transition-all duration-[2000ms] ease-in-out"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Floating content panels (background decoration) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Panel 1 - Left */}
        <div 
          className={`absolute top-1/4 left-[5%] w-64 h-48 rounded-xl bg-card/30 border border-border/30 backdrop-blur-sm transition-all duration-1000 ease-in-out ${
            currentIndex === 0 ? 'opacity-40 translate-y-0' : 
            currentIndex === 1 ? 'opacity-20 -translate-y-4' : 
            'opacity-10 translate-y-4'
          }`}
        >
          <div className="p-4">
            <div className="w-16 h-2 bg-muted rounded mb-3" />
            <div className="w-full h-2 bg-muted/50 rounded mb-2" />
            <div className="w-3/4 h-2 bg-muted/50 rounded mb-2" />
            <div className="w-5/6 h-2 bg-muted/50 rounded" />
          </div>
        </div>

        {/* Panel 2 - Right */}
        <div 
          className={`absolute top-1/3 right-[8%] w-56 h-40 rounded-xl bg-card/30 border border-border/30 backdrop-blur-sm transition-all duration-1000 ease-in-out ${
            currentIndex === 2 ? 'opacity-40 translate-y-0' : 
            currentIndex === 3 ? 'opacity-20 -translate-y-4' : 
            'opacity-10 translate-y-4'
          }`}
        >
          <div className="p-4">
            <div className="w-12 h-2 bg-muted rounded mb-3" />
            <div className="w-full h-2 bg-muted/50 rounded mb-2" />
            <div className="w-2/3 h-2 bg-muted/50 rounded" />
          </div>
        </div>

        {/* Panel 3 - Bottom Left */}
        <div 
          className={`absolute bottom-1/4 left-[12%] w-48 h-36 rounded-xl bg-card/30 border border-border/30 backdrop-blur-sm transition-all duration-1000 ease-in-out ${
            currentIndex === 4 ? 'opacity-40 translate-y-0' : 
            currentIndex === 0 ? 'opacity-20 -translate-y-4' : 
            'opacity-10 translate-y-4'
          }`}
        >
          <div className="p-4">
            <div className="w-10 h-2 bg-muted rounded mb-3" />
            <div className="w-full h-2 bg-muted/50 rounded mb-2" />
            <div className="w-4/5 h-2 bg-muted/50 rounded" />
          </div>
        </div>

        {/* Panel 4 - Bottom Right */}
        <div 
          className={`absolute bottom-1/3 right-[5%] w-52 h-44 rounded-xl bg-card/30 border border-border/30 backdrop-blur-sm transition-all duration-1000 ease-in-out ${
            currentIndex === 1 ? 'opacity-40 translate-y-0' : 
            currentIndex === 2 ? 'opacity-20 -translate-y-4' : 
            'opacity-10 translate-y-4'
          }`}
        >
          <div className="p-4">
            <div className="w-14 h-2 bg-muted rounded mb-3" />
            <div className="w-full h-2 bg-muted/50 rounded mb-2" />
            <div className="w-3/4 h-2 bg-muted/50 rounded mb-2" />
            <div className="w-1/2 h-2 bg-muted/50 rounded" />
          </div>
        </div>
      </div>

      {/* Main content */}
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

          {/* Animated subtitle */}
          <div 
            className="h-16 sm:h-12 mb-8 flex items-center justify-center animate-fade-up opacity-0"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
              Production-grade playbooks for{' '}
              <span 
                className={`inline-block min-w-[200px] sm:min-w-[280px] transition-all duration-400 ease-in-out ${currentConcept.color} ${
                  isAnimating ? 'opacity-0 translate-y-2 blur-sm' : 'opacity-100 translate-y-0 blur-0'
                }`}
              >
                {currentConcept.label}
              </span>
            </p>
          </div>

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

          {/* Topic indicators */}
          <div 
            className="flex justify-center gap-2 mb-12 animate-fade-up opacity-0"
            style={{ animationDelay: '450ms', animationFillMode: 'forwards' }}
          >
            {concepts.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsAnimating(false);
                  }, 200);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-6' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to ${concepts[index].label}`}
              />
            ))}
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

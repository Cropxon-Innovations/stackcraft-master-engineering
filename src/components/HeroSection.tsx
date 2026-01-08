import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BookOpen, Rocket } from 'lucide-react';
import AnimatedLogo from '@/components/AnimatedLogo';

const concepts = [
  { label: 'C# & .NET Foundations', color: 'text-emerald-500 dark:text-emerald-400' },
  { label: 'API & Backend Engineering', color: 'text-blue-500 dark:text-blue-400' },
  { label: 'Cloud & DevOps', color: 'text-violet-500 dark:text-violet-400' },
  { label: 'Microservices Architecture', color: 'text-amber-500 dark:text-amber-400' },
  { label: 'AI-Ready Systems', color: 'text-rose-500 dark:text-rose-400' },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % concepts.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentConcept = concepts[currentIndex];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const panelVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: [0.1, 0.3, 0.1],
      y: [20, 0, -10],
      transition: {
        duration: 4,
        delay: i * 0.8,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        ease: 'easeInOut' as const,
      },
    }),
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-[0.07] blur-3xl"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Floating content panels */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={`absolute rounded-xl bg-card/30 border border-border/30 backdrop-blur-sm ${
              i === 0 ? 'top-1/4 left-[5%] w-64 h-48' :
              i === 1 ? 'top-1/3 right-[8%] w-56 h-40' :
              i === 2 ? 'bottom-1/4 left-[12%] w-48 h-36' :
              'bottom-1/3 right-[5%] w-52 h-44'
            }`}
            variants={panelVariants}
            initial="initial"
            animate="animate"
            custom={i}
          >
            <div className="p-4">
              <div className="w-16 h-2 bg-muted rounded mb-3" />
              <div className="w-full h-2 bg-muted/50 rounded mb-2" />
              <div className="w-3/4 h-2 bg-muted/50 rounded" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Logo */}
          <motion.div className="mb-8 flex justify-center" variants={itemVariants}>
            <AnimatedLogo size="lg" showText={false} />
          </motion.div>

          {/* Title */}
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
            variants={itemVariants}
          >
            StackCraft
          </motion.h1>

          {/* Animated subtitle */}
          <motion.div 
            className="h-16 sm:h-12 mb-8 flex items-center justify-center"
            variants={itemVariants}
          >
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
              Production-grade playbooks for{' '}
              <span className="inline-block min-w-[200px] sm:min-w-[280px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndex}
                    className={`inline-block ${currentConcept.color}`}
                    initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 20,
                    }}
                  >
                    {currentConcept.label}
                  </motion.span>
                </AnimatePresence>
              </span>
            </p>
          </motion.div>

          {/* Value Statement */}
          <motion.div 
            className="max-w-2xl mx-auto mb-12"
            variants={itemVariants}
          >
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
              StackCraft is a platform for learning, building, and mastering
              production-grade software engineering — from foundations to architecture.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We focus on <span className="text-foreground font-medium">what</span> to build, <span className="text-foreground font-medium">why</span> it matters, and <span className="text-foreground font-medium">how</span> systems behave
              in the real world — beyond tutorials.
            </p>
          </motion.div>

          {/* Topic indicators */}
          <motion.div 
            className="flex justify-center gap-2 mb-12"
            variants={itemVariants}
          >
            {concepts.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-6' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to ${concepts[index].label}`}
              />
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero" size="xl" asChild>
                <a href="https://blog.stackcraft.io" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2" />
                  Read the Playbooks
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#platform">
                  <Rocket className="mr-2" />
                  Explore the Platform
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;

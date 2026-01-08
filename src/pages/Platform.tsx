import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import NewsletterSignup from '@/components/NewsletterSignup';
import { 
  GraduationCap, 
  Play, 
  Bot, 
  Users, 
  Building2, 
  Rocket,
  Code2,
  Layers,
  Shield,
  Zap,
  Target,
  BookOpen
} from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Structured Learning Paths',
    description: 'Role-based journeys designed for real career progression — not generic courses that waste your time.',
    details: ['Backend Engineer Path', 'Platform Engineer Path', 'Architect Path', 'Quality Engineer Path'],
  },
  {
    icon: Play,
    title: 'Video & Interactive Content',
    description: 'Concept-driven video explanations and interactive examples that make complex systems easier to grasp.',
    details: ['Architecture Walkthroughs', 'System Design Breakdowns', 'Code Deep Dives', 'Production Scenarios'],
  },
  {
    icon: Bot,
    title: 'AI-Powered Tutor',
    description: 'Context-aware AI that explains the "What, Why, How" — designed for understanding, not blind code generation.',
    details: ['StackCraft-aware responses', 'Architecture-first reasoning', 'Safe, explainable guidance', 'Concept clarification'],
  },
  {
    icon: Users,
    title: 'Creator Publishing',
    description: 'Curated contributions from experienced engineers through a structured, quality-focused review process.',
    details: ['Contributor profiles', 'Editorial standards', 'Draft → Review → Publish', 'Attribution & visibility'],
  },
  {
    icon: Building2,
    title: 'Enterprise Content',
    description: 'Advanced deep-dives, hands-on labs, and certifications backed by real work, not just quizzes.',
    details: ['Advanced architecture content', 'Guided projects', 'Team learning', 'Certification programs'],
  },
];

const techStack = [
  { icon: Code2, label: 'Modern APIs', desc: 'REST, gRPC, GraphQL' },
  { icon: Layers, label: 'Microservices', desc: 'Distributed systems done right' },
  { icon: Shield, label: 'Security', desc: 'Production-grade security' },
  { icon: Zap, label: 'Performance', desc: 'Scale with confidence' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

const Platform = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.section 
          className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              variants={itemVariants}
            >
              Coming Soon
            </motion.span>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight"
              variants={itemVariants}
            >
              The StackCraft Platform
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              A full learning and publishing platform designed for engineers who care about 
              building production-grade systems.
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground mb-10"
              variants={itemVariants}
            >
              Not just content — but structured learning, guided exploration, and deeper understanding.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
              <Button variant="hero" size="xl" asChild>
                <a href="https://blog.stackcraft.io" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2" />
                  Read the Playbooks
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="/roadmap">
                  <Target className="mr-2" />
                  View Roadmap
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Tech Stack Pills */}
        <motion.section 
          className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.label}
                  className="p-4 rounded-xl bg-card border border-border text-center hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <tech.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground text-sm">{tech.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Platform Capabilities
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to master production-grade engineering — all in one place.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="icon-container mb-4 group-hover:bg-primary/10 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-1.5">
                    {feature.details.map((detail) => (
                      <li key={detail} className="text-xs text-muted-foreground/80 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary/50" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Early Access */}
        <motion.section 
          className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-primary/20 rounded-2xl p-8 sm:p-12 text-center">
              <Rocket className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Get Early Access
              </h2>
              <p className="text-muted-foreground mb-8">
                Be the first to know when the StackCraft Platform launches. 
                Join the waitlist for exclusive early access and updates.
              </p>
              <NewsletterSignup variant="inline" />
            </div>
          </div>
        </motion.section>

        {/* Bottom CTA */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-divider mb-12" />
            <p className="text-lg text-muted-foreground mb-2">
              Until then, start with what's available today.
            </p>
            <p className="text-xl text-foreground font-medium mb-8">
              The Engineering Playbooks are live and ready.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="https://blog.stackcraft.io" target="_blank" rel="noopener noreferrer">
                <BookOpen className="mr-2" />
                Read the Playbooks
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Platform;

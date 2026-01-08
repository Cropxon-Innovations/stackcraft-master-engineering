import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import NewsletterSignup from '@/components/NewsletterSignup';
import { 
  BookOpen, 
  ArrowRight, 
  Code2, 
  Cloud, 
  Cpu, 
  TestTube2, 
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react';

const playbooks = [
  {
    icon: Code2,
    title: '.NET Engineering',
    description: 'Deep dive into C# language internals, .NET architecture, ASP.NET Core APIs, Entity Framework Core, and performance optimization.',
    topics: ['C# Language Features', 'ASP.NET Core', 'EF Core', 'Performance', 'Memory Management'],
    color: 'from-violet-500/20 to-purple-500/20',
    borderColor: 'border-violet-500/30',
    iconColor: 'text-violet-500',
  },
  {
    icon: Layers,
    title: 'API & Backend Engineering',
    description: 'Master REST API design, gRPC, authentication patterns, observability, rate limiting, and API monetization strategies.',
    topics: ['REST Design', 'gRPC', 'Authentication', 'Observability', 'Rate Limiting'],
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-500',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Azure and AWS architecture patterns, deployment strategies, reliability engineering, and cost optimization.',
    topics: ['Azure', 'AWS', 'Kubernetes', 'CI/CD', 'Cost Optimization'],
    color: 'from-sky-500/20 to-blue-500/20',
    borderColor: 'border-sky-500/30',
    iconColor: 'text-sky-500',
  },
  {
    icon: TestTube2,
    title: 'Quality Engineering',
    description: 'Test strategy and design, Playwright and Selenium automation, CI quality gates, and shift-left testing.',
    topics: ['Test Strategy', 'Playwright', 'Selenium', 'CI Quality Gates', 'TDD/BDD'],
    color: 'from-emerald-500/20 to-green-500/20',
    borderColor: 'border-emerald-500/30',
    iconColor: 'text-emerald-500',
  },
  {
    icon: Layers,
    title: 'Microservices Architecture',
    description: 'Service decomposition, messaging patterns, Kafka, failure handling, and distributed systems design.',
    topics: ['Service Design', 'Event-Driven', 'Kafka', 'Saga Pattern', 'Resilience'],
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30',
    iconColor: 'text-amber-500',
  },
  {
    icon: Sparkles,
    title: 'AI-Ready Systems',
    description: 'Designing platforms ready for AI integration, RAG architectures, and building systems for AI agents.',
    topics: ['AI Integration', 'RAG', 'Vector DBs', 'Agent Systems', 'ML Infrastructure'],
    color: 'from-rose-500/20 to-pink-500/20',
    borderColor: 'border-rose-500/30',
    iconColor: 'text-rose-500',
  },
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

const Playbooks = () => {
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
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
              variants={itemVariants}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live Now</span>
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight"
              variants={itemVariants}
            >
              Engineering Playbooks
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Deep, production-focused guides for engineers who care about building 
              real-world systems correctly.
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground mb-10"
              variants={itemVariants}
            >
              Not tutorials. Not quick wins. Real engineering depth.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button variant="hero" size="xl" asChild>
                <a href="https://blog.stackcraft.io" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2" />
                  Start Reading
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* What Makes Them Different */}
        <motion.section 
          className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                What Makes Them Different?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Most engineering content teaches you <span className="text-foreground">how</span> to do something. 
                  StackCraft Playbooks focus on the <span className="text-foreground">what</span>, <span className="text-foreground">why</span>, and <span className="text-foreground">how</span> together.
                </p>
                <p>
                  Every playbook is written from production experience. We cover the trade-offs, 
                  the failure modes, and the decisions that matter when systems run at scale.
                </p>
                <p>
                  This isn't content designed to game search engines. It's content designed to 
                  make you a better engineer over years, not just this week.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Playbook Cards */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Available Playbooks
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose your path. Go deep.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {playbooks.map((playbook, index) => (
                <motion.a
                  key={playbook.title}
                  href="https://blog.stackcraft.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className={`h-full p-6 rounded-xl bg-gradient-to-br ${playbook.color} border ${playbook.borderColor} transition-all duration-300 group-hover:shadow-lg`}>
                    <playbook.icon className={`w-10 h-10 ${playbook.iconColor} mb-4`} />
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {playbook.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {playbook.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {playbook.topics.slice(0, 3).map((topic) => (
                        <span 
                          key={topic}
                          className="px-2 py-1 text-xs rounded-full bg-background/50 text-muted-foreground border border-border/50"
                        >
                          {topic}
                        </span>
                      ))}
                      {playbook.topics.length > 3 && (
                        <span className="px-2 py-1 text-xs text-muted-foreground">
                          +{playbook.topics.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Read Playbook <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* How to Use */}
        <motion.section 
          className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                How to Use the Playbooks
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Choose your focus</h3>
                    <p className="text-muted-foreground text-sm">Pick the domain most relevant to your current work or learning goals.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">2</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Read with intention</h3>
                    <p className="text-muted-foreground text-sm">These aren't skimmable. Take your time. Let the concepts sink in.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">3</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Apply and revisit</h3>
                    <p className="text-muted-foreground text-sm">Use what you learn in real projects. Come back when you need a refresher.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Newsletter */}
        <motion.section 
          className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-xl mx-auto text-center">
            <div className="section-divider mb-12" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Get Notified on New Playbooks
            </h2>
            <p className="text-muted-foreground mb-8">
              We're constantly adding new content. Join the newsletter to be the first to know.
            </p>
            <NewsletterSignup variant="inline" />
          </div>
        </motion.section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-foreground font-medium mb-8">
              Ready to go deeper?
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="https://blog.stackcraft.io" target="_blank" rel="noopener noreferrer">
                <BookOpen className="mr-2" />
                Start Reading the Playbooks
                <ArrowRight className="ml-2" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Playbooks;

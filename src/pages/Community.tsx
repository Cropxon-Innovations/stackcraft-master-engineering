import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import NewsletterSignup from '@/components/NewsletterSignup';
import { 
  Users, 
  PenLine, 
  MessageSquare, 
  Award,
  BookOpen,
  GitBranch,
  Heart,
  Star,
  CheckCircle2,
  Lock
} from 'lucide-react';

const contributorBenefits = [
  { icon: Award, title: 'Recognition', desc: 'Get credited for your contributions with author profiles and attribution.' },
  { icon: Users, title: 'Community', desc: 'Connect with like-minded engineers building production-grade systems.' },
  { icon: Star, title: 'Impact', desc: 'Help thousands of engineers learn and grow in their careers.' },
  { icon: Heart, title: 'Ownership', desc: 'Your content, your voice — with full editorial support.' },
];

const publishingProcess = [
  { step: '01', title: 'Apply', desc: 'Submit your contributor application with sample work or experience.' },
  { step: '02', title: 'Review', desc: 'Our editorial team reviews your application and provides feedback.' },
  { step: '03', title: 'Draft', desc: 'Write your content following StackCraft quality guidelines.' },
  { step: '04', title: 'Publish', desc: 'After editorial review, your content goes live with full attribution.' },
];

const guidelines = [
  'Production-focused content with real-world applicability',
  'Clear explanations of "what, why, and how"',
  'Technical accuracy and depth over surface-level coverage',
  'Original insights from hands-on experience',
  'Respect for reader time and intelligence',
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

const Community = () => {
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
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-muted border border-border"
              variants={itemVariants}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Curated by default</span>
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight"
              variants={itemVariants}
            >
              Community & Contributions
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              StackCraft is built by engineers, for engineers. Our community values depth, 
              quality, and real-world experience above all.
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={itemVariants}
            >
              In the future, experienced engineers will be able to contribute, publish, and 
              collaborate through a structured review process.
            </motion.p>
          </div>
        </motion.section>

        {/* Why Curated */}
        <motion.section 
          className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Why Curated?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The internet doesn't need another content farm. It doesn't need AI-generated filler 
                  or SEO-optimized fluff that wastes engineers' time.
                </p>
                <p>
                  StackCraft maintains high editorial standards because <span className="text-foreground font-medium">engineers deserve 
                  content they can trust</span>. Every piece is reviewed for technical accuracy, clarity, 
                  and real-world applicability.
                </p>
                <p>
                  This takes time. And that's exactly the point.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contributor Benefits */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Contribute?
              </h2>
              <p className="text-lg text-muted-foreground">
                Join a community of engineers who care about quality.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contributorBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary/30 transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <benefit.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Publishing Process */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Publishing Process
              </h2>
              <p className="text-lg text-muted-foreground">
                A structured workflow that ensures quality at every step.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />
              
              <div className="space-y-8">
                {publishingProcess.map((step, index) => (
                  <motion.div
                    key={step.step}
                    className="relative flex gap-6 items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center z-10">
                      <span className="text-primary font-bold font-mono">{step.step}</span>
                    </div>
                    <div className="flex-1 pt-3">
                      <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Guidelines */}
        <motion.section 
          className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <GitBranch className="w-6 h-6 text-primary" />
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Editorial Guidelines
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                All StackCraft content follows these principles:
              </p>
              <ul className="space-y-3">
                {guidelines.map((guideline, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{guideline}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-primary/20 rounded-2xl p-8 sm:p-12 text-center">
              <PenLine className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Write for StackCraft
              </h2>
              <p className="text-muted-foreground mb-6">
                Contributor applications will open soon. Join the waitlist to be notified 
                when we start accepting submissions.
              </p>
              <Button variant="outline" size="lg" disabled className="opacity-60 cursor-not-allowed mb-4">
                <PenLine className="mr-2 w-4 h-4" />
                Apply to Contribute
              </Button>
              <p className="text-sm text-muted-foreground">Coming Soon</p>
            </div>
          </div>
        </motion.section>

        {/* Stay Updated */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-xl mx-auto text-center">
            <div className="section-divider mb-12" />
            <MessageSquare className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Stay in the Loop
            </h2>
            <p className="text-muted-foreground mb-8">
              Get updates on contributor opportunities and community news.
            </p>
            <NewsletterSignup variant="inline" />
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-2">
              In the meantime, explore what's available today.
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

export default Community;

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { BookOpen, Target, Eye, Heart, Zap } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Depth Over Breadth',
    description: 'We prioritize deep understanding over surface-level coverage. Every topic is explored with the rigor it deserves.',
  },
  {
    icon: Eye,
    title: 'Real-World Focus',
    description: 'Theory matters, but production reality matters more. We teach systems as they actually behave, not just how they should.',
  },
  {
    icon: Heart,
    title: 'Curated Quality',
    description: 'Not everything makes it to StackCraft. We maintain high editorial standards because engineers deserve content they can trust.',
  },
  {
    icon: Zap,
    title: 'Long-Term Thinking',
    description: 'We build for lasting value, not viral moments. StackCraft is designed to grow with your career, not just your current project.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="About StackCraft — Our Mission and Story"
        description="Learn about StackCraft's mission to build the engineering knowledge platform we wished existed. Deep focus on production-grade patterns and real-world engineering."
        keywords="about stackcraft, engineering education, software engineering mission, technical learning platform"
        canonicalUrl="https://stackcraft.dev/about"
      />
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
              About StackCraft
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Building the engineering knowledge platform we wished existed
            </p>
          </div>
        </section>

        {/* The Story */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                The Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  StackCraft started from a simple frustration: <span className="text-foreground">most engineering content doesn't prepare you for production</span>.
                </p>
                <p>
                  Tutorials teach syntax. Courses cover basics. But when you need to understand why a system fails at scale, how to design for reliability, or what trade-offs actually matter in the real world — you're often left searching through scattered blog posts, outdated documentation, and tribal knowledge buried in Slack threads.
                </p>
                <p>
                  We wanted something different. A place where engineers could find <span className="text-foreground">deep, production-focused content</span> that respects their intelligence and addresses the problems they actually face.
                </p>
                <p>
                  StackCraft is that place. It's not about quick wins or certificate farming. It's about building genuine understanding — the kind that makes you a better engineer over years, not just a faster coder this week.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                To create the most trusted source of production-grade engineering knowledge — accessible to anyone serious about building real-world systems.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="p-6 rounded-xl bg-card border border-border"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="icon-container mb-4">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Team */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                The Team
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  StackCraft is built by engineers, for engineers.
                </p>
                <p>
                  Our team brings experience from <span className="text-foreground">production systems at scale</span> — backend architectures, cloud infrastructure, distributed systems, and platform engineering. We've lived the challenges we write about.
                </p>
                <p>
                  We're not a content farm with ghostwriters. Every piece of content on StackCraft reflects real experience, careful thinking, and a commitment to getting the details right.
                </p>
                <div className="pt-6 border-t border-border">
                  <p className="text-foreground font-medium mb-2">
                    A division of CropXon Innovations Pvt Ltd
                  </p>
                  <p className="text-sm">
                    StackCraft operates as the learning and knowledge arm of CropXon Innovations, focused exclusively on engineering education and content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Believe */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              What We Believe
            </h2>
            <div className="space-y-4">
              {[
                'Engineers deserve content that respects their time and intelligence.',
                'Understanding "why" is more valuable than memorizing "how."',
                'Production experience cannot be replaced by certifications.',
                "Quality content takes time — and that's okay.",
                "The best learning happens when you're solving real problems.",
              ].map((belief, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50"
                >
                  <span className="text-primary font-mono text-sm mt-0.5">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-foreground">{belief}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-divider mb-12" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to go deeper?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start with the Engineering Playbooks — production-focused guides available today.
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

export default About;

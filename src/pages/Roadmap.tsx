import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { BookOpen, CheckCircle2, Circle, Clock, Target } from 'lucide-react';

type PhaseStatus = 'live' | 'next' | 'planned' | 'future';

interface RoadmapPhase {
  status: PhaseStatus;
  statusLabel: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  goal: string;
  note?: string;
  cta?: { label: string; href: string };
}

const statusConfig = {
  live: { color: 'bg-emerald-500', textColor: 'text-emerald-400', icon: CheckCircle2 },
  next: { color: 'bg-yellow-500', textColor: 'text-yellow-400', icon: Clock },
  planned: { color: 'bg-orange-500', textColor: 'text-orange-400', icon: Circle },
  future: { color: 'bg-primary', textColor: 'text-primary', icon: Target },
};

const phases: RoadmapPhase[] = [
  {
    status: 'live',
    statusLabel: 'Live',
    title: 'Engineering Playbooks',
    subtitle: 'Current State',
    description: 'Today, StackCraft operates as a public engineering knowledge platform, focused on production-grade systems.',
    capabilities: [
      'Deep engineering playbooks',
      'Role- and discipline-oriented learning paths',
      'Real-world architectural thinking',
      'Curated, high-quality content',
      'Public access via GitBook',
    ],
    goal: 'This phase is about authority, clarity, and trust.',
    cta: { label: 'Read the Engineering Playbooks', href: 'https://blog.stackcraft.io' },
  },
  {
    status: 'next',
    statusLabel: 'Phase 1',
    title: 'Structured Learning Experience',
    subtitle: 'Platform Foundations',
    description: 'In this phase, StackCraft evolves from static reading into a guided learning experience.',
    capabilities: [
      'Role-based learning paths (e.g., Backend Engineer, Platform Engineer, Architect)',
      'Clear progression instead of linear courses',
      'Curated paths that combine reading, examples, and explanation',
      'Progress awareness (without gamification noise)',
    ],
    goal: 'Help learners understand what to learn next — and why.',
  },
  {
    status: 'next',
    statusLabel: 'Phase 2',
    title: 'Multi-Modal Learning',
    subtitle: 'Video & Interactive Content',
    description: 'Not all understanding comes from reading alone. This phase introduces video and interactive explanations that complement written playbooks.',
    capabilities: [
      'Short, focused video explanations',
      'Architecture walkthroughs',
      'System design breakdowns',
      'Embedded interactive examples',
    ],
    goal: 'Make complex systems easier to grasp without simplifying reality.',
    note: 'Videos will be concept-driven, production-focused, and supplementary — not replacements for depth.',
  },
  {
    status: 'planned',
    statusLabel: 'Phase 3',
    title: 'Guided Understanding, Not Answers',
    subtitle: 'AI-Powered Tutor',
    description: 'StackCraft will introduce an AI-powered tutor designed specifically for engineering learning. This is not a generic chatbot.',
    capabilities: [
      '"What, Why, How" explanations',
      'Context-aware responses based on StackCraft content',
      'Architecture-first reasoning',
      'Safe, explainable guidance — not blind code generation',
    ],
    goal: 'Help learners understand systems, not just copy solutions.',
  },
  {
    status: 'planned',
    statusLabel: 'Phase 4',
    title: 'Curated Publishing Platform',
    subtitle: 'Creator Contributions',
    description: 'StackCraft will open up to experienced contributors through a structured, review-based process.',
    capabilities: [
      'Contributor profiles',
      'Draft → review → publish workflows',
      'Editorial standards and guidelines',
      'Attribution and visibility for authors',
    ],
    goal: 'Scale knowledge without sacrificing quality.',
    note: 'Publishing will remain curated, not open-by-default.',
  },
  {
    status: 'future',
    statusLabel: 'Phase 5',
    title: 'Advanced Learning & Certification',
    subtitle: 'Paid & Enterprise Content',
    description: 'Once the platform matures, StackCraft will introduce premium offerings for deeper engagement.',
    capabilities: [
      'Advanced deep-dive content',
      'Hands-on labs and guided projects',
      'Enterprise-focused architecture material',
      'Certifications backed by real work, not quizzes',
    ],
    goal: 'Support sustainability while keeping StackCraft accessible.',
    note: 'Free content will continue to exist. Paid content will focus on depth and specialization.',
  },
];

const notBecome = [
  'A generic course marketplace',
  'A content farm',
  'A low-quality UGC platform',
  'A hype-driven AI tool',
];

const PhaseCard = ({ phase, index }: { phase: RoadmapPhase; index: number }) => {
  const config = statusConfig[phase.status];
  const StatusIcon = config.icon;

  return (
    <div 
      className="relative pl-8 pb-16 last:pb-0"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] top-8 bottom-0 w-px bg-border last:hidden" />
      
      {/* Status dot */}
      <div className={`absolute left-0 top-1 w-6 h-6 rounded-full ${config.color} flex items-center justify-center`}>
        <StatusIcon className="w-3.5 h-3.5 text-background" />
      </div>

      {/* Content */}
      <div className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-border/80 transition-colors">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`text-sm font-medium ${config.textColor}`}>
            {phase.statusLabel}
          </span>
          <span className="text-muted-foreground">·</span>
          <span className="text-sm text-muted-foreground">{phase.subtitle}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          {phase.title}
        </h3>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          {phase.description}
        </p>

        {/* Capabilities */}
        <div className="mb-6">
          <p className="text-sm font-medium text-foreground mb-3">
            {phase.status === 'live' ? "What's available now:" : 'Planned capabilities:'}
          </p>
          <ul className="space-y-2">
            {phase.capabilities.map((cap) => (
              <li key={cap} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${config.textColor}`} />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Note */}
        {phase.note && (
          <p className="text-sm text-muted-foreground italic mb-6 border-l-2 border-border pl-4">
            {phase.note}
          </p>
        )}

        {/* Goal */}
        <div className="pt-4 border-t border-border">
          <p className="text-foreground">
            <span className="font-medium">Goal:</span>{' '}
            <span className="text-muted-foreground">{phase.goal}</span>
          </p>
        </div>

        {/* CTA */}
        {phase.cta && (
          <div className="mt-6">
            <Button variant="hero" size="lg" asChild>
              <a href={phase.cta.href} target="_blank" rel="noopener noreferrer">
                <BookOpen className="mr-2 w-4 h-4" />
                {phase.cta.label}
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
              StackCraft Platform Roadmap
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              How StackCraft is evolving — transparently and deliberately
            </p>
          </div>
        </section>

        {/* Why a Roadmap */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Why a Roadmap?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  StackCraft is built with a <span className="text-foreground">long-term view</span>.
                </p>
                <p>
                  Instead of shipping features prematurely, we focus on getting the fundamentals right first — strong engineering knowledge, clear thinking, and real-world relevance.
                </p>
                <p>
                  This roadmap outlines where StackCraft is today, what's coming next, and how the platform will evolve over time.
                </p>
                <div className="pt-4 border-t border-border mt-6">
                  <p className="text-foreground font-medium">It is not a promise of dates.</p>
                  <p className="text-foreground font-medium">It is a statement of direction.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-3xl mx-auto">
            {phases.map((phase, index) => (
              <PhaseCard key={phase.title} phase={phase} index={index} />
            ))}
          </div>
        </section>

        {/* What StackCraft Will Not Become */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                What StackCraft Will Not Become
              </h2>
              <p className="text-muted-foreground mb-6">
                To be explicit, StackCraft is not trying to become:
              </p>
              <ul className="space-y-3 mb-8">
                {notBecome.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-border">
                <p className="text-foreground mb-2">
                  Every feature is evaluated against one question:
                </p>
                <p className="text-xl font-medium text-primary italic">
                  "Does this help engineers build better real-world systems?"
                </p>
                <p className="text-muted-foreground mt-4">
                  If the answer is no, it doesn't ship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency & Feedback */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
              Transparency & Feedback
            </h2>
            <div className="text-center space-y-4 text-muted-foreground">
              <p>This roadmap will evolve as StackCraft grows.</p>
              <p>
                Feedback from engineers, contributors, and learners will directly influence
                <span className="text-foreground"> priorities</span>,{' '}
                <span className="text-foreground">feature scope</span>, and{' '}
                <span className="text-foreground">platform direction</span>.
              </p>
              <div className="pt-6">
                <p className="text-foreground font-medium mb-4">If you want to be part of that journey:</p>
                <ul className="space-y-2">
                  <li>Read the playbooks</li>
                  <li>Share feedback</li>
                  <li>Contribute when opportunities open</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final Note */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-divider mb-12" />
            <p className="text-xl text-muted-foreground mb-4">
              StackCraft is being built slowly, deliberately, and correctly.
            </p>
            <p className="text-lg text-foreground font-medium">
              The goal is not speed.<br />
              The goal is lasting engineering value.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Roadmap;

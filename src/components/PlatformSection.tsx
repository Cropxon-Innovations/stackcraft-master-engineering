import { GraduationCap, Play, Bot, Users, Building2 } from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Structured Learning Paths',
    description: 'Role-based journeys — not generic courses.',
  },
  {
    icon: Play,
    title: 'Video & Interactive Content',
    description: 'Built-in walkthroughs and explanations.',
  },
  {
    icon: Bot,
    title: 'AI-Powered Tutor',
    description: 'Clear "What, Why, How" explanations on demand.',
  },
  {
    icon: Users,
    title: 'Creator Publishing',
    description: 'Curated contributions from experienced engineers.',
  },
  {
    icon: Building2,
    title: 'Paid & Enterprise Content',
    description: 'Deep dives, labs, and certifications.',
  },
];

const PlatformSection = () => {
  return (
    <section id="platform" className="py-16 sm:py-20 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            Coming Soon
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            The StackCraft Platform
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-lg text-muted-foreground">
              StackCraft is evolving into a full learning and publishing platform
              designed for modern engineers.
            </p>
            <p className="text-lg text-muted-foreground">
              Not just content — but structured learning, guided exploration,
              and deeper understanding.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl bg-card/50 border border-border/50 transition-all duration-300 hover:border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="icon-container mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Small note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          Planned features · Early access coming
        </p>
      </div>
    </section>
  );
};

export default PlatformSection;

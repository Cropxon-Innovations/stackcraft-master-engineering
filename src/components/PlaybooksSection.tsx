import { ArrowRight } from 'lucide-react';

const playbooks = [
  {
    title: '.NET Engineering',
    description: 'Language internals, architecture, APIs, EF Core, performance.',
  },
  {
    title: 'API & Backend Engineering',
    description: 'REST, gRPC, security, observability, monetization.',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Azure, AWS, deployment, reliability, cost awareness.',
  },
  {
    title: 'Quality Engineering',
    description: 'Test strategy, Playwright, Selenium, CI quality gates.',
  },
  {
    title: 'Microservices Architecture',
    description: 'Decomposition, messaging, Kafka, failure handling.',
  },
  {
    title: 'AI-Ready Systems',
    description: 'Designing platforms ready for AI, RAG, and agents.',
  },
];

const PlaybooksSection = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Engineering Playbooks
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep, production-focused guides — available today.
          </p>
        </div>

        {/* Playbook Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {playbooks.map((playbook, index) => (
            <a
              key={playbook.title}
              href="https://blog.stackcraft.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div 
                className="h-full p-6 rounded-xl bg-card border-glow card-glow hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {playbook.title}
                  </h3>
                  <p className="text-muted-foreground flex-grow mb-4">
                    {playbook.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Read <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaybooksSection;

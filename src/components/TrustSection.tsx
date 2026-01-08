import { Code2, Cloud, Cpu, TestTube2, Palette } from 'lucide-react';

const icons = [
  { icon: Code2, label: 'API' },
  { icon: Cloud, label: 'Cloud' },
  { icon: Cpu, label: 'AI' },
  { icon: TestTube2, label: 'Testing' },
  { icon: Palette, label: 'Design' },
];

const TrustSection = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Copy */}
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
              What StackCraft Is
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              StackCraft is a public engineering knowledge and learning platform
              focused on real-world software systems — from APIs to architecture.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              It is built for engineers who care about <span className="text-foreground">correctness</span>, <span className="text-foreground">scale</span>,{' '}
              <span className="text-foreground">reliability</span>, and <span className="text-foreground">long-term system health</span>.
            </p>
          </div>

          {/* Right - Icon Grid */}
          <div className="flex justify-center lg:justify-end">
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 gap-4">
              {icons.map((item, index) => (
                <div
                  key={item.label}
                  className="icon-container group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <item.icon 
                    className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

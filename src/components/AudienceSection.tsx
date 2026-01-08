import { Check } from 'lucide-react';

const audiences = [
  'Backend & platform engineers',
  'Senior developers & tech leads',
  'Architects & system designers',
  'Engineers building long-lived systems',
];

const AudienceSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 tracking-tight text-center">
            Who StackCraft Is For
          </h2>

          {/* Audience list */}
          <div className="space-y-4 mb-12">
            {audiences.map((audience) => (
              <div 
                key={audience}
                className="flex items-center gap-4 text-lg"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{audience}</span>
              </div>
            ))}
          </div>

          {/* Honest line */}
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-center italic">
              If you're looking for quick hacks or shortcuts,
              <br />
              StackCraft may not be for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;

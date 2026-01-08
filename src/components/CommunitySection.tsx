import { Button } from '@/components/ui/button';
import { PenLine } from 'lucide-react';

const CommunitySection = () => {
  return (
    <section id="community" className="py-16 sm:py-20 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
            Community & Contributions
          </h2>
          
          <p className="text-lg text-muted-foreground mb-4">
            StackCraft is <span className="text-foreground">curated by default</span>.
          </p>
          
          <p className="text-lg text-muted-foreground mb-10">
            In the future, experienced engineers will be able to contribute,
            publish, and collaborate through a structured review process.
          </p>

          {/* CTA with badge */}
          <div className="inline-flex flex-col items-center">
            <Button variant="outline" size="lg" disabled className="opacity-60 cursor-not-allowed">
              <PenLine className="mr-2 w-5 h-5" />
              Write for StackCraft
            </Button>
            <span className="mt-3 text-sm text-muted-foreground">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;

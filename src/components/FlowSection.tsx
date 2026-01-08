const FlowSection = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          {/* Monospace flow diagram */}
          <div className="mono text-sm sm:text-base text-muted-foreground space-y-4 mb-8">
            <div className="section-divider mb-8" />
            
            <p className="text-foreground font-medium text-lg">StackCraft</p>
            <p className="text-muted-foreground">↓</p>
            <p>Engineering Playbooks</p>
            <p className="text-xs text-muted-foreground/70">(GitBook)</p>
            <p className="text-muted-foreground">↓</p>
            <p>Learning Platform</p>
            <p className="text-xs text-muted-foreground/70">(Future SaaS)</p>
            
            <div className="section-divider mt-8" />
          </div>

          {/* Caption */}
          <p className="text-lg text-muted-foreground italic">
            Start with knowledge. Grow into mastery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FlowSection;

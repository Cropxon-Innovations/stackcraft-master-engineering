import { useState } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail, ArrowRight, Check, Loader2 } from 'lucide-react';

const emailSchema = z.object({
  email: z.string()
    .trim()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
});

interface NewsletterSignupProps {
  variant?: 'inline' | 'card';
  className?: string;
}

const NewsletterSignup = ({ variant = 'card', className = '' }: NewsletterSignupProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate email
    const result = emailSchema.safeParse({ email });
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setIsLoading(true);

    // Simulate API call (replace with actual backend integration)
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSuccess(true);
    setEmail('');

    toast({
      title: "You're on the list!",
      description: "We'll notify you when early access opens.",
    });

    // Reset success state after a delay
    setTimeout(() => setIsSuccess(false), 5000);
  };

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            className="pl-10 h-12 bg-background border-border"
            disabled={isLoading}
          />
        </div>
        <Button
          type="submit"
          variant="hero"
          size="lg"
          disabled={isLoading || isSuccess}
          className="h-12 px-6"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : isSuccess ? (
            <>
              <Check className="w-5 h-5 mr-2" />
              Subscribed
            </>
          ) : (
            <>
              Get Early Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </>
          )}
        </Button>
        {error && (
          <p className="text-sm text-destructive mt-1 sm:absolute sm:top-full sm:left-0">{error}</p>
        )}
      </form>
    );
  }

  return (
    <motion.div
      className={`bg-card border border-border rounded-xl p-6 sm:p-8 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
          <Mail className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Get Early Access
        </h3>
        <p className="text-muted-foreground text-sm">
          Be the first to know when the StackCraft platform launches. No spam, ever.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            className="h-12 bg-background border-border text-center"
            disabled={isLoading}
          />
          {error && (
            <p className="text-sm text-destructive mt-2 text-center">{error}</p>
          )}
        </div>
        
        <Button
          type="submit"
          variant="hero"
          className="w-full h-12"
          disabled={isLoading || isSuccess}
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : isSuccess ? (
            <>
              <Check className="w-5 h-5 mr-2" />
              You're on the list!
            </>
          ) : (
            <>
              Notify Me
              <ArrowRight className="w-5 h-5 ml-2" />
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          By subscribing, you agree to our{' '}
          <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
        </p>
      </form>
    </motion.div>
  );
};

export default NewsletterSignup;

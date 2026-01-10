import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { Home, ArrowLeft, Search, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { theme } = useTheme();

  const bgColor = theme === 'dark' ? '#ffffff' : '#111827';
  const barColor = theme === 'dark' ? '#111827' : '#ffffff';

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const barVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const rectVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 260,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 25,
      },
    },
  };

  const quickLinks = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Playbooks', href: '/playbooks', icon: BookOpen },
    { label: 'Platform', href: '/platform', icon: Search },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <motion.div 
        className="text-center max-w-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated StackCraft Logo */}
        <motion.div className="flex justify-center mb-8">
          <motion.svg
            width={100}
            height={100}
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            whileHover={{ scale: 1.05 }}
          >
            <motion.rect
              x="8"
              y="8"
              width="32"
              height="32"
              rx="6"
              fill={bgColor}
              variants={rectVariants}
            />
            <motion.g>
              <motion.rect
                x="16"
                y="18"
                width="16"
                height="4"
                fill={barColor}
                variants={barVariants}
                rx="1"
              />
              <motion.rect
                x="16"
                y="24"
                width="20"
                height="4"
                fill={barColor}
                variants={barVariants}
                rx="1"
              />
              <motion.rect
                x="16"
                y="30"
                width="14"
                height="4"
                fill={barColor}
                variants={barVariants}
                rx="1"
              />
            </motion.g>
          </motion.svg>
        </motion.div>

        {/* 404 Title */}
        <motion.div variants={textVariants}>
          <h1 className="text-8xl font-bold text-foreground mb-2 tracking-tight">
            404
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div variants={textVariants}>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-2">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-sm text-muted-foreground/70 mb-8">
            Requested: <code className="bg-muted px-2 py-1 rounded text-xs">{location.pathname}</code>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          variants={textVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Button asChild size="lg" className="gap-2">
            <Link to="/">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a onClick={() => window.history.back()} className="cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </a>
          </Button>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={textVariants}>
          <p className="text-sm text-muted-foreground mb-4">Or try one of these:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 hover:bg-muted rounded-lg text-sm font-medium text-foreground transition-colors"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* StackCraft Branding Footer */}
        <motion.div 
          variants={textVariants}
          className="mt-12 pt-8 border-t border-border"
        >
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">StackCraft</span> — Production-Grade Engineering Playbooks
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;

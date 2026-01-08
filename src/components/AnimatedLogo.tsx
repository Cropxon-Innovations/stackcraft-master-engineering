import { motion, type Variants } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface AnimatedLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const sizeConfig = {
  sm: { icon: 32, text: 20, gap: 8 },
  md: { icon: 40, text: 24, gap: 10 },
  lg: { icon: 48, text: 28, gap: 12 },
};

const AnimatedLogo = ({ className = '', size = 'md', showText = true }: AnimatedLogoProps) => {
  const { theme } = useTheme();
  const config = sizeConfig[size];
  
  const bgColor = theme === 'dark' ? '#ffffff' : '#111827';
  const barColor = theme === 'dark' ? '#111827' : '#ffffff';
  const textColor = theme === 'dark' ? '#ffffff' : '#111827';

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const barVariants: Variants = {
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

  const rectVariants: Variants = {
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

  const textVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 25,
        delay: 0.6,
      },
    },
  };

  return (
    <motion.div 
      className={`flex items-center ${className}`}
      style={{ gap: config.gap }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Icon */}
      <motion.svg 
        width={config.icon} 
        height={config.icon} 
        viewBox="0 0 48 48" 
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
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
          {/* Top bar - shortest */}
          <motion.rect
            x="16"
            y="18"
            width="16"
            height="4"
            fill={barColor}
            variants={barVariants}
            rx="1"
          />
          {/* Middle bar - longest */}
          <motion.rect
            x="16"
            y="24"
            width="20"
            height="4"
            fill={barColor}
            variants={barVariants}
            rx="1"
          />
          {/* Bottom bar - medium */}
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

      {/* Text */}
      {showText && (
        <motion.span
          className="font-semibold text-foreground"
          style={{ 
            fontSize: config.text, 
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
          variants={textVariants}
        >
          StackCraft
        </motion.span>
      )}
    </motion.div>
  );
};

export default AnimatedLogo;

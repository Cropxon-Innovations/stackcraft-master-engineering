import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  const { theme } = useTheme();
  
  const bgColor = theme === 'dark' ? '#ffffff' : '#111827';
  const barColor = theme === 'dark' ? '#111827' : '#ffffff';

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 25,
        delay: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="flex flex-col items-center gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Animated Icon */}
            <motion.svg
              width={80}
              height={80}
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
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
            <motion.span
              className="text-2xl font-semibold text-foreground"
              variants={textVariants}
            >
              StackCraft
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

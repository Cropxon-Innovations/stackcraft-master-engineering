import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import AnimatedLogo from '@/components/AnimatedLogo';
import ThemeToggle from '@/components/ThemeToggle';

interface NavLink {
  label: string;
  href: string;
  type: 'link' | 'external' | 'scroll';
  target?: string;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { label: 'Home', href: '/', type: 'link' },
    { label: 'Playbooks', href: 'https://blog.stackcraft.io', type: 'external' },
    { label: 'Platform', href: '/#platform', type: 'scroll', target: 'platform' },
    { label: 'About', href: '/about', type: 'link' },
    { label: 'Community', href: '/#community', type: 'scroll', target: 'community' },
  ];

  const handleScrollNav = (target: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: target } });
    } else {
      const element = document.getElementById(target);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(state.scrollTo || '');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const renderNavLink = (link: NavLink, isMobile = false) => {
    const baseClasses = isMobile
      ? 'block px-4 py-3 text-base font-medium transition-colors duration-200 rounded-lg'
      : 'px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg';

    if (link.type === 'link') {
      return (
        <Link
          key={link.label}
          to={link.href}
          onClick={() => setIsMobileMenuOpen(false)}
          className={`${baseClasses} text-muted-foreground hover:text-foreground hover:bg-muted/50`}
        >
          {link.label}
        </Link>
      );
    }

    if (link.type === 'external') {
      return (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMobileMenuOpen(false)}
          className={`${baseClasses} text-muted-foreground hover:text-foreground hover:bg-muted/50`}
        >
          {link.label}
        </a>
      );
    }

    if (link.type === 'scroll') {
      return (
        <button
          key={link.label}
          onClick={() => handleScrollNav(link.target || '')}
          className={`${baseClasses} text-muted-foreground hover:text-foreground hover:bg-muted/50 ${isMobile ? 'w-full text-left' : ''}`}
        >
          {link.label}
        </button>
      );
    }

    return null;
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-blur border-b border-border' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <AnimatedLogo size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => renderNavLink(link))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="navCta" size="sm" asChild>
              <a href="https://blog.stackcraft.io" target="_blank" rel="noopener noreferrer">
                Read Playbooks
              </a>
            </Button>
          </div>

          {/* Mobile Right Section */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-border overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link) => renderNavLink(link, true))}
                <div className="pt-4 px-4">
                  <Button variant="navCta" className="w-full" asChild>
                    <a href="https://blog.stackcraft.io" target="_blank" rel="noopener noreferrer">
                      Read Playbooks
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;

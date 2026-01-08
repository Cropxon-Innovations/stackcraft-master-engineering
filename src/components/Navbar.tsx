import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import stackLogo from '@/assets/stack-dark.svg';

interface NavLink {
  label: string;
  href: string;
  type: 'link' | 'external' | 'scroll' | 'disabled';
  target?: string;
  badge?: string;
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
    { label: 'Roadmap', href: '/roadmap', type: 'link' },
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

  // Handle scroll after navigation
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
          className={`${baseClasses} text-muted-foreground hover:text-foreground hover:bg-secondary/50`}
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
          className={`${baseClasses} text-muted-foreground hover:text-foreground hover:bg-secondary/50`}
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
          className={`${baseClasses} text-muted-foreground hover:text-foreground hover:bg-secondary/50 ${isMobile ? 'w-full text-left' : ''}`}
        >
          {link.label}
        </button>
      );
    }

    if (link.type === 'disabled') {
      return (
        <span
          key={link.label}
          className={`${baseClasses} text-muted-foreground/50 cursor-not-allowed flex items-center gap-2`}
        >
          {link.label}
          {link.badge && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
              {link.badge}
            </span>
          )}
        </span>
      );
    }

    return null;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-blur border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/">
            <img src={stackLogo} alt="StackCraft" className="h-8 lg:h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => renderNavLink(link))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button variant="navCta" size="sm" asChild>
              <a href="https://blog.stackcraft.io" target="_blank" rel="noopener noreferrer">
                Read Playbooks
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border animate-fade-in">
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

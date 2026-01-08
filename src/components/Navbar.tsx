import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import stackLogo from '@/assets/stack-dark.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#', type: 'scroll' },
    { label: 'Playbooks', href: 'https://blog.stackcraft.io', type: 'external' },
    { label: 'Platform', href: '#platform', type: 'scroll' },
    { label: 'Learning', href: '#', type: 'disabled', badge: 'Coming Soon' },
    { label: 'Community', href: '#community', type: 'scroll' },
    { label: 'About', href: '#about', type: 'scroll' },
  ];

  const handleNavClick = (link: typeof navLinks[0], e: React.MouseEvent) => {
    if (link.type === 'disabled') {
      e.preventDefault();
      return;
    }
    if (link.type === 'scroll') {
      e.preventDefault();
      if (link.href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(link.href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
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
          <a href="#" onClick={(e) => handleNavClick({ label: 'Home', href: '#', type: 'scroll' }, e)}>
            <img src={stackLogo} alt="StackCraft" className="h-8 lg:h-10" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(link, e)}
                target={link.type === 'external' ? '_blank' : undefined}
                rel={link.type === 'external' ? 'noopener noreferrer' : undefined}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                  link.type === 'disabled'
                    ? 'text-muted-foreground/50 cursor-not-allowed'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.label}
                  {link.badge && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                      {link.badge}
                    </span>
                  )}
                </span>
              </a>
            ))}
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
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(link, e)}
                  target={link.type === 'external' ? '_blank' : undefined}
                  rel={link.type === 'external' ? 'noopener noreferrer' : undefined}
                  className={`block px-4 py-3 text-base font-medium transition-colors duration-200 rounded-lg ${
                    link.type === 'disabled'
                      ? 'text-muted-foreground/50 cursor-not-allowed'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                    {link.badge && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                        {link.badge}
                      </span>
                    )}
                  </span>
                </a>
              ))}
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

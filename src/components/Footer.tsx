import { Link } from 'react-router-dom';

const Footer = () => {
  const mainLinks = [
    { label: 'Playbooks', href: 'https://blog.stackcraft.io', external: true },
    { label: 'Roadmap', href: '/roadmap', external: false },
    { label: 'About', href: '/about', external: false },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy', external: false },
    { label: 'Terms of Service', href: '/terms', external: false },
    { label: 'Contact', href: 'mailto:hello@stackcraft.io', external: true },
  ];

  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Main Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {mainLinks.map((link) => (
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-border" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-foreground font-medium mb-1">© StackCraft</p>
            <p className="text-sm text-muted-foreground">
              A learning division of CropXon Innovations Pvt Ltd
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) => (
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

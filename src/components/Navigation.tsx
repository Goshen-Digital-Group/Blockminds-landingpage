import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Archetypes', href: '#archetypes' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Community', href: '#community' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-void-black/95 backdrop-blur-md border-b border-fracture-grey/30' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/4fd5c5b8-2b7b-4928-8047-fadafe5a1b48.png" 
              alt="BLOCKMINDS Logo" 
              className="w-8 h-8 mr-3"
            />
            <span className="font-display font-bold text-xl text-pure-white">
              BLOCKMINDS
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-signal-grey hover:text-pure-white transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Buy Button */}
          <div className="hidden md:block">
            <Button 
              size="sm" 
              className="bg-gradient-light text-void-black hover:shadow-glow-white font-semibold"
            >
              BUY NOW
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-pure-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-void-black/95 backdrop-blur-md border-t border-fracture-grey/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-signal-grey hover:text-pure-white transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-light text-void-black hover:shadow-glow-white font-semibold"
                >
                  BUY NOW
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
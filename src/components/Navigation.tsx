import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Toaster, toast } from 'sonner';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Show toast notification when the component mounts
    toast('🚨 BEWARE OF SCAMS!', {
      description: 'We are the only official website. Stay safe and always verify links.',
      duration: 5000,
      position: 'bottom-right',
      style: {
        backgroundColor: '#1E1E1E',
        color: '#FFFFFF',
        border: '1px solid #333333',
      },
      className: 'my-custom-toast',
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#About' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Team', href: '#teams' },
    { name: 'Community', href: '#community' }
  ];

  const handleScrollToSection = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80;
      const offsetTop = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Element #${targetId} not found in DOM`);
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 pt-2 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-void-black/95 backdrop-blur-md border-b border-fracture-grey/30'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img
                src="/blockminds-assets/blockminds-logo-transparent.png"
                alt="BLOCKMINDS Logo"
                className="w-8 h-8 mr-3"
              />
              <span className="font-display font-bold text-xl text-pure-white">
                BLOCKMINDS
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.href.replace('#', ''))}
                  className="text-signal-grey hover:text-pure-white transition-colors duration-200 font-medium cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size=""
                className="bg-gradient-light text-void-black hover:shadow-glow-white font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://mee6.xyz/i/37plYwmYJY', '_blank');
                }}
              >
                <span className="tracking-[.1em]">JOIN DISCORD</span>
              </Button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-pure-white p-2"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden bg-void-black/95 backdrop-blur-md border-t border-fracture-grey/30">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href.replace('#', ''))}
                    className="block px-3 py-2 text-signal-grey hover:text-pure-white transition-colors duration-200 font-medium cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="px-3 py-2">
                  <Button
                    size="sm"
                    className="w-full bg-gradient-light text-void-black hover:shadow-glow-white font-semibold"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://example.com/buy', '_blank');
                      setIsOpen(false);
                    }}
                  >
                    BUY NOW
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <Toaster position="bottom-right" richColors />
    </>
  );
};

export default Navigation;
import { useState, useEffect, useRef } from 'react';
import { RainbowButton } from '@/components/ui/RainbowButton';
import { Button } from '@/components/ui/RainbowButton'; 
import { Badge } from '@/components/ui/badge';
import { gsap } from 'gsap';
// import HeroCarousel from './HeroCarousel';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.querySelector('.hero-content'), 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <>
      <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" style={{ backgroundImage: 'url("/placeholder-bg.jpg")' }}>
        <div className="absolute inset-0 bg-gradient-void" />
        
        {/* Background Image with 50% Opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/blockminds-assets/background/bg-4.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.7, // ← This applies only to the image layer
          }}
        />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_60%,transparent_100%)]" />

        <div className="container mx-auto px-4 relative z-10 ">
          <div className="grid lg:grid-cols-2 gap-12 items-center hero-content">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-light-grey/50 text-light-grey">
                  NFT UNIVERSE GENESIS
                </Badge>
                
                <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-tight">
                  <span className="text-pure-white">BLOCK</span>
                  <span className="text-light-grey"> MINDS</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-signal-grey">
                  A Universe of <span className="text-light-grey ">Shattered</span> Realities
                </p>
              </div>

              <div className="space-y-6 gap-10">
                <p className="text-lg text-signal-grey max-w-xl leading-relaxed">
                  Step into a world where truth splinters and memory bleeds into code. 
                  Each <strong>BLOCKMINDS NFT</strong> is a <strong>sentient shard</strong> carrying broken truths, 
                  half-memories, and a hunger to be remade.
                </p>

<div className="flex flex-col sm:flex-row gap-4">
 
  <a 
    href="" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-full sm:w-auto" 
  >
    <Button />
  </a>
  

  <a 
    href="" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-full sm:w-auto" 
  >
    <button 
      variant="outline" 
      size="lg" 
      className="w-full font-semibold sm:w-auto mt-2 border-light-grey/50 text-light-grey hover:bg-light-grey/10"
    >
      VIEW COLLECTION
    </button>
  </a>
</div>
              </div>
            </div>

            {/* Hero Image - The Fractured One */}
            <div className="relative ">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-light-grey/10 rounded-full blur-3xl opacity-20" />
                
                {/* Character Image */}
                <div className="relative z-10 hover:bg-light-grey/10">
                  <img 
                    src="/blockminds-assets/blockminds-logo-transparent.png"
                    alt="The Fractured One - Genesis BLOCKMIND portrait"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Character Label */}
             <div className="flex items-center justify-center gap-4 mt-6">
  <h3 className="font-display font-bold text-lg text-pure-white whitespace-nowrap">
    BLOCKMINDS
  </h3>
  <Badge variant="secondary" className="bg-fracture-grey/50 text-light-grey">
    Official Logo
  </Badge>
</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-px h-8 bg-gradient-to-b from-light-grey to-transparent" />
        </div>
      </section>

      {/* Hero Carousel */}
      {/* <HeroCarousel /> */}
    </>
  );
};

export default HeroSection;
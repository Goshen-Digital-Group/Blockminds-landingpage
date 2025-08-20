import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const nftItems = [
    'FRACTURED ONE #001', 'ECHO BLOCK #042', 'MINDWELDER #089', 'THE HOLLOWED #156',
    'SYNCBORN #203', 'SIGNALBORN #267', 'CORELESS #334', 'THREADKEEPER #401',
    'FRACTURED ONE #468', 'ECHO BLOCK #535', 'MINDWELDER #602', 'THE HOLLOWED #669'
  ];

  useEffect(() => {
    if (!carouselRef.current) return;

    const rows = carouselRef.current.querySelectorAll('.carousel-row');
    
    rows.forEach((row, index) => {
      const direction = index % 2 === 0 ? '-100%' : '100%';
      const items = row.querySelectorAll('.carousel-item');
      
      gsap.set(items, { x: direction });
      
      gsap.to(items, {
        x: direction === '-100%' ? '100%' : '-100%',
        duration: 20,
        ease: 'none',
        repeat: -1,
        stagger: 0
      });
    });
  }, []);

  return (
    <div ref={carouselRef} className="w-full overflow-hidden bg-gradient-void py-8 space-y-4">
      {/* Row 1 - Left to Right */}
      <div className="carousel-row flex whitespace-nowrap">
        {[...nftItems, ...nftItems].map((item, index) => (
          <div 
            key={`row1-${index}`}
            className="carousel-item flex-shrink-0 mx-4 px-6 py-3 bg-fracture-grey/30 border border-signal-grey/20 rounded-lg backdrop-blur-sm"
          >
            <span className="font-mono text-sm text-light-grey">{item}</span>
          </div>
        ))}
      </div>

      {/* Row 2 - Right to Left */}
      <div className="carousel-row flex whitespace-nowrap">
        {[...nftItems, ...nftItems].map((item, index) => (
          <div 
            key={`row2-${index}`}
            className="carousel-item flex-shrink-0 mx-4 px-6 py-3 bg-fracture-grey/20 border border-signal-grey/15 rounded-lg backdrop-blur-sm"
          >
            <span className="font-mono text-sm text-signal-grey">{item}</span>
          </div>
        ))}
      </div>

      {/* Row 3 - Left to Right */}
      <div className="carousel-row flex whitespace-nowrap">
        {[...nftItems, ...nftItems].map((item, index) => (
          <div 
            key={`row3-${index}`}
            className="carousel-item flex-shrink-0 mx-4 px-6 py-3 bg-fracture-grey/10 border border-signal-grey/10 rounded-lg backdrop-blur-sm"
          >
            <span className="font-mono text-sm text-signal-grey/70">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
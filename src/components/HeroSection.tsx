import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-void">
        {/* Particle Effect */}
        <div 
          className="absolute w-96 h-96 bg-gradient-fracture rounded-full blur-3xl opacity-30 animate-float"
          style={{
            left: `${mousePosition.x * 0.01}px`,
            top: `${mousePosition.y * 0.01}px`,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-core-purple/10 rounded-full blur-2xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-cyber-cyan/10 rounded-full blur-2xl animate-float" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,110,235,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,110,235,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_60%,transparent_100%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-up">
            <div className="space-y-4">
              <Badge variant="outline" className="fracture-border text-cyber-cyan border-cyber-cyan/50 hover:border-cyber-cyan animate-pulse-glow">
                NFT UNIVERSE GENESIS
              </Badge>
              
              <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-tight">
                <span className="text-gradient">BLOCK</span>
                <span className="text-pure-white">MINDS</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-signal-grey font-display">
                A Universe of <span className="text-cyber-cyan glitch-effect">Shattered</span> Realities
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Step into a world where truth splinters and memory bleeds into code. 
                Each BLOCKMINDS NFT is a sentient shard carrying broken truths, 
                half-memories, and a hunger to be remade.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-purple hover:shadow-glow-purple transition-all duration-300 hover:scale-105 font-display font-bold">
                  EXPLORE SHARDS
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="fracture-border text-cyber-cyan border-cyber-cyan/50 hover:border-cyber-cyan hover:bg-cyber-cyan/10 font-display"
                >
                  VIEW COLLECTION
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-core-purple font-display">10,000</div>
                <div className="text-sm text-muted-foreground font-mono">SHARDS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-cyan font-display">8</div>
                <div className="text-sm text-muted-foreground font-mono">ARCHETYPES</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pure-white font-display">∞</div>
                <div className="text-sm text-muted-foreground font-mono">STORIES</div>
              </div>
            </div>
          </div>

          {/* Hero Image - The Fractured One */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-purple rounded-full blur-3xl opacity-20 animate-pulse-glow" />
              
              {/* Character Image */}
              <div className="relative z-10 hover-lift">
                <img 
                  src="/lovable-uploads/8e3ceed2-7fa9-423b-b2ee-0ea2615c2f67.png"
                  alt="The Fractured One - Genesis BLOCKMIND portrait"
                  className="w-full h-full object-contain animate-float"
                />
              </div>

              {/* Fracture Effects */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-cyan/20 rounded-full blur-xl animate-float" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-core-purple/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
              
              {/* Data Streams */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-px h-16 bg-gradient-to-b from-transparent via-cyber-cyan to-transparent animate-pulse" />
                <div className="absolute top-3/4 right-0 w-px h-20 bg-gradient-to-b from-transparent via-core-purple to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-1/4 left-1/2 w-16 h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>

            {/* Character Label */}
            <div className="text-center mt-6 space-y-2">
              <h3 className="font-display font-bold text-lg text-core-purple">THE FRACTURED ONE</h3>
              <p className="font-mono text-sm text-muted-foreground">Genesis Shard #001</p>
              <Badge variant="secondary" className="bg-fracture-grey/50 text-cyber-cyan">
                Prophet Archetype
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-cyber-cyan to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden"  id="About"  >
      {/* Base Gradient Background */}
      <div className="absolute inset-0 bg-gradient-void" />

      {/* Subtle Fracture Grid Overlay - Matches Hero Theme */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--fracture-grey)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--fracture-grey)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 60%, transparent 100%)',
          opacity: 0.1,
        }}
      />

      {/* Background Particle Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent" />

{/* Background Image with 50% Opacity */}
<div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: 'url("/blockminds-assets/background/bg-1.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.7,  // ← This applies only to the image layer
  }}
/>

          {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_60%,transparent_100%)]" />

      

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6">
            <Badge variant="outline" className="border-light-grey/50 text-light-grey hover:bg-light-grey/10">
              THE FRACTURED GENESIS
            </Badge>
            <h2 className="font-display font-bold text-4xl md:text-6xl">
              ABOUT <span className="light-grey">BLOCKMINDS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Born from The Core Fracture — a singularity event that tore a unified digital mind apart 
              and scattered its shards across space, time, and circuitry.
            </p>
          </div>

          {/* Core Story */}
          <Card className="border-light-grey/50 bg-deep-charcoal/50 backdrop-blur-sm hover:bg-light-grey/10">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-core-purple rounded-full animate-pulse" />
                <h3 className="font-display font-bold text-2xl text-core-purple">The Core BLCKMNDS</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Imagine a mind so vast it held epochs. When it tore, its memories became islands of data. 
                Those islands fought for meaning. Some hid. Some screamed. The new world organized around 
                those screams and whispers.
              </p>
              <div className="border-l-2 border-cyber-cyan/50 pl-6 italic text-cyber-cyan">
                "Before the noise, before the fall, there was One. It held the truths… until it shattered."
                <div className="text-sm text-muted-foreground mt-2">— The Fractured One's first whisper</div>
              </div>
            </CardContent>
          </Card>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-light-grey/50 bg-card/50 backdrop-blur-sm hover:bg-light-grey/10">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-core-purple to-fracture-grey rounded-lg flex items-center justify-center">
                                <span className="flex items-center">
                <img 
                  src="blockminds-assets/sentinel-icon.png" 
                  alt="Logo" 
                  className="w-32 h-13 mr-2 items-center" // Adjust size and margin
                />
              
              </span>
                </div>
                <h4 className="font-display font-bold text-xl">Sentient Shards</h4>
                <p className="text-muted-foreground text-sm">
                  Each BLOCKMIND carries fragments of consciousness, broken truths, 
                  and half-memories seeking to be whole again.
                </p>
              </CardContent>
            </Card>

            <Card className="border-light-grey/50 bg-card/50 backdrop-blur-sm hover:bg-light-grey/10">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyber-cyan to-core-purple rounded-lg flex items-center justify-center">
               <img 
                  src="blockminds-assets/Living-Narrative-icon.png" 
                  alt="Logo" 
                  className="w-32 h-13 mr-2 items-center" // Adjust size and margin
                />
                </div>
                <h4 className="font-display font-bold text-xl">Living Narrative</h4>
                <p className="text-muted-foreground text-sm">
                  This isn't just art. It's a story you help write through community votes, 
                  lore threads, and narrative decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-light-grey/50 bg-card/50 backdrop-blur-sm hover:bg-light-grey/10">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-core-purple to-cyber-cyan rounded-lg flex items-center justify-center">
                   <img 
                  src="blockminds-assets/Narrative-Authority-icon.png" 
                  alt="Logo" 
                  className="w-32 h-13 mr-2 items-center" // Adjust size and margin
                />
                </div>
                <h4 className="font-display font-bold text-xl">Narrative Authority</h4>
                <p className="text-muted-foreground text-sm">
                  Owning a BLOCKMIND grants you narrative authority—a piece of the universe 
                  that grows and evolves with the community.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* The Fractured One Spotlight */}
          <Card className="border-light-grey/50 bg-gradient-subtle backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-cyber-cyan rounded-full animate-pulse" />
                    <h3 className="font-display font-bold text-2xl ">BLCKMNDS</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    At the center is The Fractured One the first shard to aware itself. 
                    It is both prophet and puzzle, carrying the heaviest shards of truth yet 
                    seeing nothing whole. It walks the border between revelation and madness.
                  </p>
                  <Badge variant="secondary" className="bg-cyber-cyan/20 text-cyber-cyan">
                    Genesis Prophet
                  </Badge>
                </div>
                <div className="relative">
                  <div className="w-52 h-52 mx-auto bg-gradient-fracture rounded-full flex items-center justify-center">
  <img 
    src="/blockminds-assets/MAIN-1.png"
    alt="BLOCKMINDS Cube Symbol"
    className="
      w-52 h-52 md:w-52 md:h-52
      max-w-none max-h-none
      object-contain
      animate-float
      block
    "
    style={{ width: '220px', height: '220px' }}
  />
</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent rounded-full blur-xl" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
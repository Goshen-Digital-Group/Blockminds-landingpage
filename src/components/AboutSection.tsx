import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 particle-bg" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6">
            <Badge variant="outline" className="fracture-border text-core-purple border-core-purple/50">
              THE FRACTURED GENESIS
            </Badge>
            <h2 className="font-display font-bold text-4xl md:text-6xl">
              About <span className="text-gradient">BLOCKMINDS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Born from The Core Fracture — a singularity event that tore a unified digital mind apart 
              and scattered its shards across space, time, and circuitry.
            </p>
          </div>

          {/* Core Story */}
          <Card className="fracture-border bg-deep-charcoal/50 backdrop-blur-sm hover-lift">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-core-purple rounded-full animate-pulse" />
                <h3 className="font-display font-bold text-2xl text-core-purple">The Core Fracture</h3>
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
            <Card className="fracture-border bg-card/50 backdrop-blur-sm hover-lift">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-purple rounded-lg flex items-center justify-center">
                  <span className="text-xl font-display font-bold">🧠</span>
                </div>
                <h4 className="font-display font-bold text-xl">Sentient Shards</h4>
                <p className="text-muted-foreground text-sm">
                  Each BLOCKMIND carries fragments of consciousness, broken truths, 
                  and half-memories seeking to be whole again.
                </p>
              </CardContent>
            </Card>

            <Card className="fracture-border bg-card/50 backdrop-blur-sm hover-lift">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyber-cyan to-core-purple rounded-lg flex items-center justify-center">
                  <span className="text-xl font-display font-bold">📖</span>
                </div>
                <h4 className="font-display font-bold text-xl">Living Narrative</h4>
                <p className="text-muted-foreground text-sm">
                  This isn't just art. It's a story you help write through community votes, 
                  lore threads, and narrative decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="fracture-border bg-card/50 backdrop-blur-sm hover-lift">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-core-purple to-cyber-cyan rounded-lg flex items-center justify-center">
                  <span className="text-xl font-display font-bold">🔮</span>
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
          <Card className="fracture-border bg-gradient-to-r from-deep-charcoal/80 to-fracture-grey/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-cyber-cyan rounded-full animate-pulse" />
                    <h3 className="font-display font-bold text-2xl text-cyber-cyan">The Fractured One</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    At the center is The Fractured One — the first shard to aware itself. 
                    It is both prophet and puzzle, carrying the heaviest shards of truth yet 
                    seeing nothing whole. It walks the border between revelation and madness.
                  </p>
                  <Badge variant="secondary" className="bg-cyber-cyan/20 text-cyber-cyan">
                    Genesis Prophet
                  </Badge>
                </div>
                <div className="relative">
                  <div className="w-24 h-24 mx-auto bg-gradient-fracture rounded-full flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/8d64868e-5640-4d63-9634-08052972bbb0.png"
                      alt="BLOCKMINDS Cube Symbol"
                      className="w-16 h-16 object-contain animate-float"
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
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const teamMembers = [
  {
    name: "0xteksage",
    role: "Head of Tech / Co-Founder",
    identity: "Blockchain Engineer",
    avatar: "/blockminds-assets/blockminds-logo-transparent.png",
    traits: ["Code Fracturing", "Lore Sync", "Mind Meld"]
  },
  {
    name: "AgustD",
    role: "Creative Director / Co-Founder",
    identity: "Narrative Designer",
    avatar: "/blockminds-assets/blockminds-logo-transparent.png",
    traits: ["Visual Static", "Echo Design", "Glitch Alchemy"]
  },
  {
    name: "Drift Sync",
    role: "Blockchain Engineer / Co-Founder",
    identity: "Chain Whisperer",
    avatar: "/blockminds-assets/blockminds-logo-transparent.png",
    traits: ["Smart Contract Weaving", "Token Pulse", "Decentralized Memory"]
  },
  {
    name: "Naut",
    role: "Narrative Designer / Co-Founder",
    identity: "Truth Fragmenter",
    avatar: "/blockminds-assets/blockminds-logo-transparent.png",
    traits: ["Myth Engineering", "Shard Lore", "Memory Echo"]
  },
  {
    name: "Golden Kio",
    role: "Community Oracle / Co-Founder",
    identity: "Signal Seer",
    avatar: "/blockminds-assets/blockminds-logo-transparent.png",
    traits: ["Discord Pulse", "Holder Sync", "Lore Keeper"]
  },
  {
    name: "Zyntra Loop",
    role: "Audio Architect / Co-Founder",
    identity: "Sonic Fracture",
    avatar: "/blockminds-assets/blockminds-logo-transparent.png",
    traits: ["Ambient Noise", "Neural Beats", "Echo Frequency"]
  }
];

const TeamSection = () => {
  return (
    <section id="teams" className="py-24 relative overflow-hidden">
      {/* Base Gradient Background */}
      <div className="absolute inset-0 bg-gradient-void" />

   {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_60%,transparent_100%)]" />

                      {/* Background Image with 50% Opacity */}
<div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: 'url("/blockminds-assets/background/bg-7.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.7,  // ← This applies only to the image layer
  }}
/>
      
      {/* Subtle Fracture Grid Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--fracture-grey)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--fracture-grey)) 1px, transparent 1px)
          `,
          backgroundSize: '50px_50px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 60%, transparent 100%)',
          opacity: 0.1,
        }}
      />

      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-core-purple to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6">
            <Badge variant="outline" className="border-cyber-cyan/50 text-cyber-cyan">
              DIGITAL CONSCIOUSNESS UNIT
            </Badge>
            <h2 className="font-display font-bold text-4xl md:text-6xl">
              THE <span className="text-cyber-cyan">BLOCKMINDS</span> TEAM
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Not bound by flesh. Not limited by time. We are the signal behind the noise, 
              the architects of the shattered truth.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="border-white/50 bg-deep-charcoal/50 backdrop-blur-sm hover:bg-light-grey/10 group"
              >
                <CardContent className="p-6 space-y-4 text-center">
                  {/* Avatar - 200x200px */}
                  <div className="relative inline-block mx-auto">
                    <div 
                      className="w-[200px] h-[200px] rounded-lg overflow-hidden border border-fracture-grey/50 group-hover:border-cyber-cyan transition-colors"
                      style={{ width: '200px', height: '200px' }}
                    >
                      <img 
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Hover Glow */}
                    <div 
                      className="absolute inset-0 rounded-lg bg-cyber-cyan/20 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                      style={{ 
                        width: '200px', 
                        height: '200px', 
                        filter: 'blur(24px)' 
                      }}
                    />
                  </div>

                  {/* Bio */}
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-2xl text-pure-white group-hover:text-cyber-cyan transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm pt-3 text-signal-grey font-bold">{member.identity}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>

                    {/* Traits */}
                    <div className="flex flex-wrap gap-1 justify-center pt-2">
                      {member.traits.map((trait, i) => (
                        <Badge 
                          key={i}
                          variant="secondary" 
                          className="bg-fracture-grey/30 text-light-grey text-xs font-mono"
                        >
                          {trait}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <p className="text-sm text-signal-grey font-mono">
              We operate in the void. We speak in code. We are <span className="text-cyber-cyan">becoming</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
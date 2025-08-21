import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const archetypes = [
  {
    name: "The Fractured One",
    type: "Prophet",
    description: "Carries primal shards of lost truth. Rare, narrative-bearing NFTs reserved for genesis holders.",
    rarity: "Active",
    color: "core-purple",
    icon: "🔮",
    traits: ["Genesis Echofield", "Primal Seal", "Truth Fragments"]
  },
  {
    name: "Echo Blocks",
    type: "Fragmented",
    description: "Reactive shards that replay echoes of the past. Common-to-rare; unpredictable utility.",
    rarity: "Dormant",
    color: "cyber-cyan",
    icon: "📡",
    traits: ["Memory Loop", "Echo Resonance", "Temporal Drift"]
  },
  {
    name: "Mindwelders",
    type: "Unifiers",
    description: "Carry multiple consciousness scars and can sync traits for combined utility.",
    rarity: "Dormant",
    color: "core-purple",
    icon: "🔗",
    traits: ["Multi-Sync", "Weave Patterns", "Unity Bonds"]
  },
  {
    name: "The Hollowed",
    type: "Corrupted",
    description: "Transparent, glitching shards useful for dark-themed quests and corrupted lore arcs.",
    rarity: "Dormant",
    color: "signal-grey",
    icon: "👁️",
    traits: ["Void Touch", "Corruption Field", "Dark Whispers"]
  },
  {
    name: "The Syncborn",
    type: "Dormant",
    description: "Fully integrated with the fractured system; likely to receive special cross-platform perks.",
    rarity: "Dormant",
    color: "cyber-cyan",
    icon: "⚡",
    traits: ["Perfect Sync", "System Integration", "Evolution Mark"]
  },
  {
    name: "The Signalborn",
    type: "Echoes of the Dead",
    description: "Ethereal, whisper-bearing shards that deliver hidden lore drops.",
    rarity: "Dormant",
    color: "pale-cyan",
    icon: "👻",
    traits: ["Ghost Signal", "Ethereal Form", "Death Echo"]
  },
  {
    name: "The Coreless",
    type: "Rebels",
    description: "Anti-MindSeal, anti-order; they'll anchor rebellion storylines and PvP mechanics.",
    rarity: "Dormant",
    color: "error-red",
    icon: "⚔️",
    traits: ["Rebellion Mark", "Chaos Field", "Anti-Sync"]
  },
  {
    name: "Keepers of Threadline",
    type: "Sages",
    description: "Guardians of fragmented code—used for lore-anchoring events and story restoration.",
    rarity: "Dormant",
    color: "warning-orange",
    icon: "📚",
    traits: ["Thread Keeper", "Lore Guardian", "Code Restoration"]
  }
];

const ArchetypesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.archetype-card');
      gsap.fromTo(cards, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="archetypes" className="py-24 relative overflow-hidden" style={{ backgroundImage: 'url("/placeholder-bg.jpg")' }}>
      <div className="absolute inset-0 bg-gradient-void" />
      {/* Background Image with 50% Opacity */}
<div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: 'url("/blockminds-assets/background/bg-.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.7,  // ← This applies only to the image layer
  }}
/>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6">
            <Badge variant="outline" className="border-light-grey/50 text-light-grey">
              SOCIAL FACTIONS & GAMEPLAY ROLES
            </Badge>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-pure-white">
              Explore the <span className="text-light-grey">Archetypes</span>
            </h2>
            <p className="text-xl text-signal-grey max-w-3xl mx-auto leading-relaxed">
              Each archetype is a social faction, gameplay role, and piece of the story. 
              When you collect, you join that role and shape the universe's evolution.
            </p>
          </div>

          {/* Archetypes Grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {archetypes.map((archetype) => (
    <Card 
      key={archetype.name} 
      className="archetype-card bg-deep-charcoal/50 border-fracture-grey/30 backdrop-blur-sm hover:border-light-grey/50 transition-all duration-300 group cursor-pointer"
    >
      <CardContent className="p-6 space-y-4 relative">
        {/* Unified Image Display */}
        {archetype.name === "The Fractured One" ? (
          // ✅ Real Image: 250×250px
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/130e91d7-1c41-49fa-b88c-f139dbcad55d.png"
              alt="The Fractured One"
              className="w-[250px] h-[250px] object-contain max-w-none max-h-none"
              style={{ width: '250px', height: '250px' }}
            />
          </div>
        ) : (
          // ✅ Generic "Coming Soon" – same size, blurred, badge
          <div className="flex items-center justify-center mb-4">
            <div 
              className="relative inline-block w-[250px] h-[250px]"
              style={{ width: '250px', height: '250px' }}
            >
              {/* Generic Placeholder (not the real NFT!) */}
              <img 
                src="/lovable-uploads/130e91d7-1c41-49fa-b88c-f139dbcad55d.png"
                alt="Coming Soon"
                className="w-full h-full object-contain max-w-none max-h-none blur-sm opacity-70"
                style={{ width: '250px', height: '250px' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Badge 
                  variant="secondary" 
                  className="bg-void-black/80 text-signal-grey text-sm font-mono uppercase  tracking-wider px-3 py-1.5 z-10"
                >
                  REDACTED
                </Badge>
              </div>
            </div>
          </div>
        )}

        {/* Rarity */}
        <div className="text-center">
          <Badge variant="secondary" className="bg-fracture-grey/50 text-light-grey">
            {archetype.rarity}
          </Badge>
        </div>

        {/* Name & Type */}
        <div className="space-y-1 text-center">
          <h3 className="font-display font-bold text-lg text-pure-white group-hover:text-light-grey transition-colors">
            {archetype.name}
          </h3>
          <p className="text-sm font-mono text-signal-grey">
            {archetype.type}
          </p>
        </div>

        {/* Description */}
        <p className="text-signal-grey text-sm leading-relaxed text-center">
          {archetype.description}
        </p>

        {/* Traits */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-signal-grey uppercase tracking-wider text-center">
            Key Traits
          </div>
          <div className="flex flex-wrap gap-1 justify-center">
            {archetype.traits.map((trait) => (
              <span 
                key={trait}
                className="px-2 py-1 text-xs bg-fracture-grey/30 text-light-grey rounded font-mono"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-light-grey/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
      </CardContent>
    </Card>
  ))}
</div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <h3 className="font-display font-bold text-2xl text-pure-white">
              Ready to Choose Your <span className="text-light-grey">Archetype</span>?
            </h3>
            <p className="text-signal-grey max-w-2xl mx-auto">
              Each collection will unlock new narrative paths, exclusive utilities, 
              and community governance powers. Your archetype determines your role in the unfolding story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-light text-void-black hover:shadow-glow-white font-semibold">
                EXPLORE COLLECTION
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-light-grey/50 text-light-grey hover:bg-light-grey/10"
              >
                JOIN DISCORD
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchetypesSection;
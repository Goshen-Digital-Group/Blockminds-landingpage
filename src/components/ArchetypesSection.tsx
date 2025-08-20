import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const archetypes = [
  {
    name: "The Fractured One",
    type: "Prophet",
    description: "Carries primal shards of lost truth. Rare, narrative-bearing NFTs reserved for genesis holders.",
    rarity: "Legendary",
    color: "core-purple",
    icon: "🔮",
    traits: ["Genesis Echofield", "Primal Seal", "Truth Fragments"]
  },
  {
    name: "Echo Blocks",
    type: "Fragmented",
    description: "Reactive shards that replay echoes of the past. Common-to-rare; unpredictable utility.",
    rarity: "Common",
    color: "cyber-cyan",
    icon: "📡",
    traits: ["Memory Loop", "Echo Resonance", "Temporal Drift"]
  },
  {
    name: "Mindwelders",
    type: "Unifiers",
    description: "Carry multiple consciousness scars and can sync traits for combined utility.",
    rarity: "Rare",
    color: "core-purple",
    icon: "🔗",
    traits: ["Multi-Sync", "Weave Patterns", "Unity Bonds"]
  },
  {
    name: "The Hollowed",
    type: "Corrupted",
    description: "Transparent, glitching shards useful for dark-themed quests and corrupted lore arcs.",
    rarity: "Uncommon",
    color: "signal-grey",
    icon: "👁️",
    traits: ["Void Touch", "Corruption Field", "Dark Whispers"]
  },
  {
    name: "The Syncborn",
    type: "Evolved",
    description: "Fully integrated with the fractured system; likely to receive special cross-platform perks.",
    rarity: "Epic",
    color: "cyber-cyan",
    icon: "⚡",
    traits: ["Perfect Sync", "System Integration", "Evolution Mark"]
  },
  {
    name: "The Signalborn",
    type: "Echoes of the Dead",
    description: "Ethereal, whisper-bearing shards that deliver hidden lore drops.",
    rarity: "Rare",
    color: "pale-cyan",
    icon: "👻",
    traits: ["Ghost Signal", "Ethereal Form", "Death Echo"]
  },
  {
    name: "The Coreless",
    type: "Rebels",
    description: "Anti-MindSeal, anti-order; they'll anchor rebellion storylines and PvP mechanics.",
    rarity: "Uncommon",
    color: "error-red",
    icon: "⚔️",
    traits: ["Rebellion Mark", "Chaos Field", "Anti-Sync"]
  },
  {
    name: "Keepers of Threadline",
    type: "Sages",
    description: "Guardians of fragmented code—used for lore-anchoring events and story restoration.",
    rarity: "Epic",
    color: "warning-orange",
    icon: "📚",
    traits: ["Thread Keeper", "Lore Guardian", "Code Restoration"]
  }
];

const ArchetypesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,110,235,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,110,235,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6">
            <Badge variant="outline" className="fracture-border text-cyber-cyan border-cyber-cyan/50">
              SOCIAL FACTIONS & GAMEPLAY ROLES
            </Badge>
            <h2 className="font-display font-bold text-4xl md:text-6xl">
              Explore the <span className="text-gradient">Archetypes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each archetype is a social faction, gameplay role, and piece of the story. 
              When you collect, you join that role and shape the universe's evolution.
            </p>
          </div>

          {/* Archetypes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {archetypes.map((archetype, index) => (
              <Card 
                key={archetype.name} 
                className="fracture-border bg-card/50 backdrop-blur-sm hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  {/* Icon & Rarity */}
                  <div className="flex items-center justify-between">
                    <div className={`text-3xl w-12 h-12 bg-${archetype.color}/20 rounded-lg flex items-center justify-center`}>
                      {archetype.icon}
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`bg-${archetype.color}/20 text-${archetype.color} border-${archetype.color}/30`}
                    >
                      {archetype.rarity}
                    </Badge>
                  </div>

                  {/* Name & Type */}
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-lg group-hover:text-cyber-cyan transition-colors">
                      {archetype.name}
                    </h3>
                    <p className={`text-sm font-mono text-${archetype.color}`}>
                      {archetype.type}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {archetype.description}
                  </p>

                  {/* Traits */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      Key Traits
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {archetype.traits.map((trait) => (
                        <span 
                          key={trait}
                          className="px-2 py-1 text-xs bg-fracture-grey/50 text-pure-white rounded font-mono"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <h3 className="font-display font-bold text-2xl">
              Ready to Choose Your <span className="text-cyber-cyan">Archetype</span>?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each collection will unlock new narrative paths, exclusive utilities, 
              and community governance powers. Your archetype determines your role in the unfolding story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-purple hover:shadow-glow-purple font-display">
                EXPLORE COLLECTION
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="fracture-border text-cyber-cyan border-cyber-cyan/50 hover:border-cyber-cyan font-display"
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
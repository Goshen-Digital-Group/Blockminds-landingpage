import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const roadmapPhases = [
  {
    phase: "01",
    title: "Genesis",
    subtitle: "The Fractured One",
    status: "active",
    items: [
      "Genesis drop with provenance records",
      "Initial lore seeds released to holders",
      "Community formation & Discord launch",
      "Trait rarity system implementation"
    ]
  },
  {
    phase: "02", 
    title: "Community & Lore",
    subtitle: "Building the Narrative",
    status: "upcoming",
    items: [
      "AMA series with development team",
      "Lore-writing campaigns & contests",
      "Holder-driven naming & backstory votes",
      "Exclusive airdrops for active members"
    ]
  },
  {
    phase: "03",
    title: "Expansion",
    subtitle: "New Archetypes",
    status: "upcoming", 
    items: [
      "Echo Blocks, Mindwelders release",
      "Coreless & Syncborn archetype drops",
      "Narrative quests & trait mechanics",
      "Cross-archetype interaction system"
    ]
  },
  {
    phase: "04",
    title: "Integration",
    subtitle: "Virtual Worlds",
    status: "planned",
    items: [
      "Virtual world partnerships",
      "Play-to-earn experiments launch",
      "Tokenized utility for in-world actions",
      "BLOCK token introduction"
    ]
  },
  {
    phase: "05",
    title: "Global & Long-Term",
    subtitle: "Universe Expansion",
    status: "planned",
    items: [
      "Physical merchandise line",
      "Media expansions (comics, shorts)",
      "Charity drops & social impact",
      "Major brand collaborations"
    ]
  }
];

const RoadmapSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-black via-deep-charcoal to-void-black" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-core-purple to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6">
            <Badge variant="outline" className="fracture-border text-core-purple border-core-purple/50">
              THE JOURNEY FORWARD
            </Badge>
            <h2 className="font-display font-bold text-4xl md:text-6xl">
              <span className="text-gradient">Roadmap</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our journey through the fractured realities is mapped across five phases, 
              each unlocking new narratives, utilities, and community experiences.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-core-purple via-cyber-cyan to-core-purple opacity-30" />
            
            <div className="space-y-16">
              {roadmapPhases.map((phase, index) => (
                <div key={phase.phase} className="relative">
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 border-cyber-cyan bg-deep-charcoal z-10">
                    <div className={`w-2 h-2 rounded-full mx-auto mt-1 ${
                      phase.status === 'active' ? 'bg-cyber-cyan animate-pulse' : 
                      phase.status === 'upcoming' ? 'bg-core-purple' : 'bg-signal-grey'
                    }`} />
                  </div>

                  <div className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'md:text-right'
                  }`}>
                    {/* Content */}
                    <div className={`space-y-4 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:order-2'}`}>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="font-display font-black text-3xl text-cyber-cyan">
                            {phase.phase}
                          </span>
                          <Badge 
                            variant="secondary" 
                            className={`${
                              phase.status === 'active' ? 'bg-cyber-cyan/20 text-cyber-cyan' :
                              phase.status === 'upcoming' ? 'bg-core-purple/20 text-core-purple' :
                              'bg-signal-grey/20 text-signal-grey'
                            }`}
                          >
                            {phase.status}
                          </Badge>
                        </div>
                        <h3 className="font-display font-bold text-2xl">{phase.title}</h3>
                        <p className="text-lg text-muted-foreground font-mono">{phase.subtitle}</p>
                      </div>

                      <ul className="space-y-2">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual */}
                    <div className={`${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:order-1'}`}>
                      <Card className="fracture-border bg-card/30 backdrop-blur-sm hover-lift">
                        <CardContent className="p-8">
                          <div className="aspect-square relative">
                            {/* Phase Visualization */}
                            <div className="absolute inset-0 bg-gradient-fracture rounded-lg opacity-50" />
                            <div className="absolute inset-4 border border-cyber-cyan/30 rounded-lg">
                              <div className="w-full h-full flex items-center justify-center">
                                <span className="font-display font-black text-6xl text-cyber-cyan/70">
                                  {phase.phase}
                                </span>
                              </div>
                            </div>
                            
                            {/* Glow Effect */}
                            <div className={`absolute inset-0 rounded-lg blur-xl opacity-20 ${
                              phase.status === 'active' ? 'bg-cyber-cyan' :
                              phase.status === 'upcoming' ? 'bg-core-purple' : 'bg-signal-grey'
                            }`} />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6 pt-16">
            <h3 className="font-display font-bold text-2xl">
              Join the <span className="text-cyber-cyan">Evolution</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Be part of the community that shapes the future of BLOCKMINDS. 
              Every phase unlocks new opportunities for holders and active participants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
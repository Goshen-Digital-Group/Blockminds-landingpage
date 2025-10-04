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
];

const ArchetypesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const card = sectionRef.current.querySelector('.archetype-card');
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%'
            }
          }
        );
      }
    }
  }, []);

  return (
    <section ref={sectionRef} id="archetypes" className="py-24 relative overflow-hidden" style={{ backgroundImage: 'url("/placeholder-bg.jpg")' }}>
      <div className="absolute inset-0 bg-gradient-void" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/blockminds-assets/background/bg-.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.7,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-16">
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

          <div className="flex justify-center">
            {archetypes.map((archetype) => (
              <Card
                key={archetype.name}
                className="archetype-card bg-deep-charcoal/50 border-fracture-grey/30 backdrop-blur-sm hover:border-light-grey/50 transition-all duration-300 group cursor-pointer w-full max-w-4xl"
              >
                <CardContent className="p-6 space-y-4 relative md:flex md:items-center md:space-x-8 md:space-y-0">
                  <div className="flex-shrink-0 flex justify-center mb-4 md:mb-0">
                    <img
                      src="/lovable-uploads/130e91d7-1c41-49fa-b88c-f139dbcad55d.png"
                      alt="The Fractured One"
                      className="w-[250px] h-[250px] object-contain max-w-none max-h-none"
                      style={{ width: '250px', height: '250px' }}
                    />
                  </div>
                  <div className="flex-1 space-y-4 text-center md:text-left">
                    <div className="text-center md:text-left">
                      <Badge variant="secondary" className="bg-fracture-grey/50 text-light-grey">
                        {archetype.rarity}
                      </Badge>
                    </div>

                    <div className="space-y-1 text-center md:text-left">
                      <h3 className="font-display font-bold text-lg text-pure-white group-hover:text-light-grey transition-colors">
                        {archetype.name}
                      </h3>
                      <p className="text-sm font-mono text-signal-grey">
                        {archetype.type}
                      </p>
                    </div>

                    <p className="text-signal-grey text-sm leading-relaxed text-center md:text-left">
                      {archetype.description}
                    </p>

                    <div className="space-y-2">
                      <div className="text-xs font-mono text-signal-grey uppercase tracking-wider text-center md:text-left">
                        Key Traits
                      </div>
                      <div className="flex flex-wrap gap-1 justify-center md:justify-start">
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
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-light-grey/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="text-center space-y-6">
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
          </div> */}

          
        </div>
      </div>
    </section>
  );
};

export default ArchetypesSection;
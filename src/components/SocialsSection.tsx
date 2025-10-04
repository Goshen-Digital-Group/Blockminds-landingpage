import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  MessageCircle,
  Send,
  Twitter,
  Users,
  Github,
  Monitor,
} from 'lucide-react';

const SocialsSection = () => {
  const socialPlatforms = [
    {
      name: 'Discord',
      icon: MessageCircle,
      description: 'Join our community hub for real-time discussions and exclusive drops',
      members: '7',
      link: 'https://mee6.xyz/i/37plYwmYJY',
      primary: true,
    },
    {
      name: 'Twitter',
      icon: Twitter,
      description: 'Follow for latest updates, announcements.',
      members: '0',
      link: 'https://x.com/theblckmnds',
      primary: true,
    },
    {
      name: 'GitHub',
      icon: Github,
      description: 'Explore our open-source code and contribute to the project.',
      members: '0',
      link: 'https://github.com/Goshen-Digital-Group/blockminds-strategy',
      primary: true,
    },
    {
      name: 'Blockminds App',
      icon: Monitor,
      description: 'Launch the official BLOCKMINDS dApp to interact with the universe.',
      members: 'N/A',
      link: 'https://app.theblockminds.com',
      primary: true,
    },
  ];

  return (
    <section id="community" className="py-24 relative" style={{ backgroundImage: 'url("/placeholder-bg.jpg")' }}>
      <div className="absolute inset-0 bg-gradient-void" />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/blockminds-assets/background/bg-7.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.7,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-16">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="border-light-grey/50 text-light-grey">
              JOIN THE FRACTURE
            </Badge>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-pure-white">
              Blockminds <span className="text-light-grey">Community </span>
            </h2>
            <p className="text-xl text-signal-grey max-w-3xl mx-auto leading-relaxed">
              Connect with fellow collectors, participate in governance, and help shape
              the future of the BLOCKMINDS universe across all platforms.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {socialPlatforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <Card
                  key={platform.name}
                  className={`bg-deep-charcoal/50 border-fracture-grey/30 backdrop-blur-sm hover:border-light-grey/50 transition-all duration-300 group cursor-pointer w-full md:w-1/2 lg:w-1/3 max-w-sm`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 space-y-6 relative">
                    <div className="relative z-10 space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-light-grey/20 rounded-lg flex items-center justify-center group-hover:bg-light-grey/30 transition-colors">
                          <IconComponent className="w-6 h-6 text-light-grey" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-xl text-pure-white group-hover:text-light-grey transition-colors">
                            {platform.name}
                          </h3>
                          {/* <div className="flex items-center space-x-2 text-signal-grey">
                            <Users className="w-4 h-4" />
                            <p className="text-sm">{platform.members} Members</p>
                          </div> */}
                        </div>
                      </div>

                      <p className="text-signal-grey leading-relaxed">
                        {platform.description}
                      </p>
                    </div>

                    <Button asChild className="relative z-10">
                      <a
                        href={platform.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full font-semibold transition-all duration-300 ${
                          platform.primary
                            ? 'bg-gradient-light text-void-black hover:shadow-glow-white'
                            : 'bg-fracture-grey/50 text-pure-white hover:bg-light-grey/20'
                        }`}
                      >
                        {platform.name === 'Discord' ? 'Join Discord' : `Open ${platform.name}`}
                      </a>
                    </Button>

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-light-grey/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;
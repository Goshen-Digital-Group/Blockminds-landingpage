import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  Send, 
  Twitter, 
  Instagram, 
  Youtube,
  Users
} from 'lucide-react';

const SocialsSection = () => {
  const socialPlatforms = [
    {
      name: 'Discord',
      icon: MessageCircle,
      description: 'Join our community hub for real-time discussions and exclusive drops',
      members: '0',
      link: '#',
      primary: true,
    },
    {
      name: 'Twitter',
      icon: Twitter,
      description: 'Follow for latest updates, announcements, and community highlights',
      members: '0',
       primary: true,
      link: '#',
    },
    {
      name: 'Telegram',
      icon: Send,
      description: 'Get instant notifications about mint dates and important updates',
      members: '0',
       primary: true,
      link: '#',
    },


  ];

  return (
    <section id="community" className="py-24 relative" style={{ backgroundImage: 'url("/placeholder-bg.jpg")' }}>
      <div className="absolute inset-0 bg-gradient-void" />
      
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-16">
          {/* Section Header */}
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

          {/* Social Platforms Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialPlatforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <Card 
                  key={platform.name}
                  className={`bg-deep-charcoal/50 border-fracture-grey/30 backdrop-blur-sm hover:border-light-grey/50 transition-all duration-300 group cursor-pointer ${
                    platform.primary ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 space-y-6">
                    {/* Platform Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-light-grey/20 rounded-lg flex items-center justify-center group-hover:bg-light-grey/30 transition-colors">
                          <IconComponent className="w-6 h-6 text-light-grey" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-xl text-pure-white group-hover:text-light-grey transition-colors">
                            {platform.name}
                          </h3>
                          <div className="flex items-center space-x-2 text-signal-grey">
                            <Users className="w-4 h-4" />
                                   {/* disable  
                            <span className="font-mono text-sm">{platform.members}</span>
                            */}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-signal-grey leading-relaxed">
                      {platform.description}
                    </p>

                    {/* Join Button */}
                    <Button 
                      className={`w-full ${
                        platform.primary 
                          ? 'bg-gradient-light text-void-black hover:shadow-glow-white' 
                          : 'bg-fracture-grey/50 text-pure-white hover:bg-light-grey/20'
                      } font-semibold transition-all duration-300`}
                    >
                      {platform.primary ? 'Join Discord' : `Follow on ${platform.name}`}
                    </Button>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-light-grey/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Community Stats */}
            {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-pure-white font-display">0</div>
              <div className="text-sm text-signal-grey font-mono">TOTAL MEMBERS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-light-grey font-display">0</div>
              <div className="text-sm text-signal-grey font-mono">ACTIVE COMMUNITY</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pure-white font-display">0</div>
              <div className="text-sm text-signal-grey font-mono">DAILY DISCUSSIONS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-light-grey font-display">∞</div>
              <div className="text-sm text-signal-grey font-mono">POSSIBILITIES</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;
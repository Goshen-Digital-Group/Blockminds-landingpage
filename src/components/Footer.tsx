import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="py-16 relative overflow-hidden border-t border-fracture-grey/30">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-void-black to-deep-charcoal" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-display font-black text-2xl text-white">BLOCKMINDS</h3>
              <p className="text-muted-foreground text-sm">
                A Universe of Shattered Realities
              </p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Step into a world where truth splinters and memory bleeds into code. 
              Each BLOCKMINDS NFT is a sentient shard seeking to be remade.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-muted-foreground hover:text-cyber-cyan transition-colors">About</a></li>
              <li><a href="#archetypes" className="text-muted-foreground hover:text-cyber-cyan transition-colors">Archetypes</a></li>
              <li><a href="#roadmap" className="text-muted-foreground hover:text-cyber-cyan transition-colors">Roadmap</a></li>
              <li><a href="#community" className="text-muted-foreground hover:text-cyber-cyan transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-cyber-cyan transition-colors">Discord</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cyber-cyan transition-colors">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cyber-cyan transition-colors">OpenSea</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cyber-cyan transition-colors">Magic Eden</a></li>
            </ul>
          </div>

          {/* Security Notice */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg text-cyber-cyan">Security Notice</h4>
            <div className="space-y-3">
              <Badge variant="destructive" className="w-full justify-center">
                BEWARE OF SCAMS
              </Badge>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We will never ask for private keys or request direct crypto transfers. 
                Official announcements only on verified channels.
              </p>
          
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-fracture-grey/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 BLOCKMINDS. All rights reserved.
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
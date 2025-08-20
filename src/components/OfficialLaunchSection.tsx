import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Copy, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const OfficialLaunchSection = () => {
  const { toast } = useToast();
  
  const contractAddress = "0x742d35Cc6634C0532925a3b8D484329d9EB71234";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    toast({
      title: "Address Copied",
      description: "Contract address has been copied to your clipboard.",
    });
  };

  return (
    <section className="py-16 relative" style={{ backgroundImage: 'url("/placeholder-bg.jpg")' }}>
      <div className="absolute inset-0 bg-void-black/90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Official Launch Header */}
          <div className="text-center space-y-6">
            <Badge variant="outline" className="border-light-grey/50 text-light-grey">
              OFFICIAL LAUNCH
            </Badge>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-pure-white">
              Contract Address
            </h2>
            <p className="text-xl text-signal-grey max-w-2xl mx-auto">
              Our official smart contract address for the BLOCKMINDS NFT collection. 
              Always verify before any transaction.
            </p>
          </div>

          {/* Contract Address Card */}
          <Card className="bg-deep-charcoal/50 border-fracture-grey/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="font-display font-bold text-xl text-pure-white mb-4">
                    Official Contract Address
                  </h3>
                  <div className="bg-void-black/50 border border-fracture-grey/50 rounded-lg p-4">
                    <code className="font-mono text-light-grey break-all text-sm md:text-base">
                      {contractAddress}
                    </code>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleCopyAddress}
                    variant="outline"
                    className="border-signal-grey/50 text-signal-grey hover:bg-signal-grey/10"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Address
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-light-grey/50 text-light-grey hover:bg-light-grey/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on Etherscan
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-sm text-signal-grey/70">
                    ⚠️ Always double-check this address on our official website and social media before any transaction
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Where to Buy Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="font-display font-bold text-3xl text-pure-white mb-4">
                Where to Buy
              </h3>
              <p className="text-signal-grey max-w-2xl mx-auto">
                Get your BLOCKMINDS NFTs from these official and verified marketplaces
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-deep-charcoal/30 border-fracture-grey/20 hover:border-light-grey/30 transition-colors">
                <CardContent className="p-6 text-center">
                  <h4 className="font-display font-bold text-lg text-pure-white mb-2">OpenSea</h4>
                  <p className="text-signal-grey text-sm mb-4">Primary marketplace for Ethereum NFTs</p>
                  <Button variant="outline" size="sm" className="border-light-grey/50 text-light-grey">
                    Visit Store
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-deep-charcoal/30 border-fracture-grey/20 hover:border-light-grey/30 transition-colors">
                <CardContent className="p-6 text-center">
                  <h4 className="font-display font-bold text-lg text-pure-white mb-2">Official Mint</h4>
                  <p className="text-signal-grey text-sm mb-4">Direct from our smart contract</p>
                  <Button size="sm" className="bg-gradient-light text-void-black font-semibold">
                    Mint Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-deep-charcoal/30 border-fracture-grey/20 hover:border-light-grey/30 transition-colors">
                <CardContent className="p-6 text-center">
                  <h4 className="font-display font-bold text-lg text-pure-white mb-2">Foundation</h4>
                  <p className="text-signal-grey text-sm mb-4">Curated NFT marketplace</p>
                  <Button variant="outline" size="sm" className="border-light-grey/50 text-light-grey">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficialLaunchSection;
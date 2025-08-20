import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-void">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link to="/">
              <Button variant="outline" className="mb-6 border-signal-grey/50 text-signal-grey hover:bg-signal-grey/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-pure-white mb-4">
              Terms of Service
            </h1>
            <p className="text-signal-grey">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-signal-grey leading-relaxed">
            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-pure-white">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the BLOCKMINDS platform, you accept and agree to be bound 
                by the terms and provision of this agreement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-pure-white">2. NFT Ownership</h2>
              <p>
                When you purchase a BLOCKMINDS NFT, you own the underlying NFT completely. 
                Ownership of the NFT is mediated entirely by the smart contract and the blockchain.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-pure-white">3. Intellectual Property</h2>
              <p>
                The BLOCKMINDS project retains all intellectual property rights to the underlying 
                art, story, and brand. NFT ownership grants you personal use rights but not 
                commercial exploitation rights unless explicitly stated.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-pure-white">4. Marketplace Transactions</h2>
              <p>
                All NFT transactions are conducted on the blockchain and are irreversible. 
                We are not responsible for transactions made outside of our official channels.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-pure-white">5. Community Guidelines</h2>
              <p>Users must adhere to our community guidelines:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respect other community members</li>
                <li>No spam, harassment, or malicious behavior</li>
                <li>No sharing of unofficial or fraudulent contract addresses</li>
                <li>Follow platform-specific rules on Discord, Twitter, etc.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-pure-white">6. Disclaimers</h2>
              <p>
                NFTs are experimental technology and may have no monetary value. 
                We make no guarantees about future value, utility, or project development.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-pure-white">7. Limitation of Liability</h2>
              <p>
                BLOCKMINDS shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including without limitation, loss of profits.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-pure-white">8. Modifications</h2>
              <p>
                We reserve the right to modify these terms at any time. 
                Continued use of the platform constitutes acceptance of modified terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-pure-white">9. Contact Information</h2>
              <p>
                For questions about these Terms of Service, contact us at: 
                <span className="text-light-grey"> legal@blockminds.io</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
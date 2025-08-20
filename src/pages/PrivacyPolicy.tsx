import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-signal-grey">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-signal-grey leading-relaxed">
            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-pure-white">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, 
                make a purchase, or contact us for support. This may include your wallet address, 
                email address, and transaction history.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-pure-white">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process transactions and deliver NFTs</li>
                <li>Provide customer support</li>
                <li>Send you updates about the BLOCKMINDS project</li>
                <li>Improve our services and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-pure-white">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. 
                We may share information in certain limited circumstances, such as to comply 
                with legal requirements or protect our rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-pure-white">4. Blockchain Transparency</h2>
              <p>
                Please note that blockchain transactions are public and permanent. 
                Your wallet address and transaction history may be visible on the blockchain.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-pure-white">5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-pure-white">6. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal information. 
                Contact us if you wish to exercise these rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-pure-white">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at: 
                <span className="text-light-grey"> privacy@blockminds.io</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
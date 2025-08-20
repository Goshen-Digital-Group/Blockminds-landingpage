import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ArchetypesSection from '@/components/ArchetypesSection';
import RoadmapSection from '@/components/RoadmapSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Archetypes Section */}
      <ArchetypesSection />
      
      {/* Roadmap Section */}
      <RoadmapSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

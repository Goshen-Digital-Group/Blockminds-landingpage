import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ArchetypesSection from '@/components/ArchetypesSection';
import OfficialLaunchSection from '@/components/OfficialLaunchSection';
import SocialsSection from '@/components/SocialsSection';
import RoadmapSection from '@/components/RoadmapSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ArchetypesSection />
      <OfficialLaunchSection />
      <SocialsSection />
      <RoadmapSection />
      <Footer />
    </div>
  );
};

export default Index;

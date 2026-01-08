import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import PlaybooksSection from '@/components/PlaybooksSection';
import PlatformSection from '@/components/PlatformSection';
import FlowSection from '@/components/FlowSection';
import AudienceSection from '@/components/AudienceSection';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <TrustSection />
        <div className="section-divider" />
        <PlaybooksSection />
        <div className="section-divider" />
        <PlatformSection />
        <FlowSection />
        <AudienceSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

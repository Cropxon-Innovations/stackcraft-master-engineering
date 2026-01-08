import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import PlaybooksSection from '@/components/PlaybooksSection';
import PlatformSection from '@/components/PlatformSection';
import FlowSection from '@/components/FlowSection';
import AudienceSection from '@/components/AudienceSection';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="StackCraft — Production-Grade Engineering Playbooks & System Design"
        description="Master production-grade software engineering with deep technical playbooks. Learn system design, API architecture, backend engineering, and scalable infrastructure from industry experts."
        keywords="engineering playbooks, system design, software architecture, backend engineering, API design, microservices, distributed systems, production engineering"
        canonicalUrl="https://stackcraft.dev/"
      />
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

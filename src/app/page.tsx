import Nav from '@/components/sections/Nav';
import HeroSection from '@/components/sections/HeroSection';
import CapabilityStrip from '@/components/sections/CapabilityStrip';
import DemoSection from '@/components/sections/DemoSection';
import HowItWorks from '@/components/sections/HowItWorks';
import Differentiation from '@/components/sections/Differentiation';
import WhatsInside from '@/components/sections/WhatsInside';
import Onboarding from '@/components/sections/Onboarding';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <CapabilityStrip />
      <DemoSection />
      <HowItWorks />
      <Differentiation />
      <WhatsInside />
      <Onboarding />
      <ContactSection />
      <Footer />
    </>
  );
}
